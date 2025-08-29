// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone,courseTitle, message } = req.body;
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'akaygautam786@gmail.com', 
    subject: `New Course Interest Submission from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${phone}</p>
                 <p><strong>Course Applied for:</strong> ${courseTitle}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}