import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    res.cookie("token", token, {
        httpOnly: true,  //prevents XSS attacks
        secure: process.env.NODE_ENV === "production", //cookie will only be set on https
        sameSite: "strict", //prevents CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return token;
};