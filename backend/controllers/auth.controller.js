import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
    sendVerificationEmail,
    sendWelcomeEmail,
    sendPasswordResetEmail,
    sendResetSuccessEmail,
} from "../mailtrap/emails.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            throw new Error("All fields are required");
        }

        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 15);
        const verificationToken = Math.floor(100000 + Math.random() * 990000).toString();

        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        });

        await user.save();

        // jwt token
        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, verificationToken);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
        });

    } catch (error) {

        return res.status(400).json({ message: error.message });
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        generateTokenAndSetCookie(res, user._id);


        user.lastLogin = Date.now();
        await user.save();

        return res.status(200).json({ success: true, message: "Logged in successfully", user: { ...user._doc, password: undefined } });

    } catch (error) {
        console.log("Error in login", error);
        return res.status(400).json({ success: false, message: error.message });
    }
}
export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
}
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const
            user
                = await
                    User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        //generate a reset token
        const resetToken = crypto.randomBytes(32).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;  // 1 hour

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save();

        //send email

        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

        res.status(200).json({ success: true, message: "Reset password email sent to your Email" });

    } catch (error) {
        console.log("Error in forgot password", error);
        res.status(400).json({ success: false, message: error.message });
    }
}

export const verifyEmail = async (req, res) => {
    const { code } = req.body;

    try {
        const user
            = await
                User.findOne({
                    verificationToken: code,
                    verificationTokenExpiresAt: { $gt: Date.now() },
                });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired token" });
        }
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({ success: true, message: "Email verified successfully", user: { ...user._doc, password: undefined } });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired token" });
        }

        //update the password

        const hashedPassword = await bcrypt.hash(password, 15);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;
        await user.save();

        await sendResetSuccessEmail(user.email);

        res.status(200).json({ success: true, message: "Password reset successfully" });

    } catch (error) {
        console.log("Error in reset password", error);
        return res.status(400).json({ success: false, message: error.message });
    }
}

export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, user: {
             ...user._doc,
              password: undefined } 
            });
        
    } catch (error) {
        
        console.log("Error in checkAuth", error);
        return res.status(400).json({ success: false, message: error.message });
    }
}