import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.post('/contact', async (req, res) => {
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
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Message: ${message}\nPhone: ${phone}\nPreferred Contact Method: ${preferredContactMethod}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message');
  }
});

module.exports = router;