import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

const router = express.Router();

dotenv.config();

router.post('/', [
  body('name').trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().escape(),
  body('message').trim().escape(),
  body('preferredContactMethod').trim().escape(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, message, preferredContactMethod } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Website Message from: ${name}`,
      text: `Sender's Email: ${email}\nPhone: ${phone}\nPreferred Contact Method: ${preferredContactMethod}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message');
  }
});

export { router as contactRoute };