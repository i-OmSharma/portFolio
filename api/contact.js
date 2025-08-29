// 1. Create this file: api/contact.js (in your project root)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Configure nodemailer for Zoho
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your contact@iomsharma.com
        pass: process.env.EMAIL_PASS, // Your Zoho email password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@iomsharma.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8C8C73; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8C8C73; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Sent from your portfolio website: www.iomsharma.com
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Email sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      message: 'Failed to send email. Please try again.',
      success: false 
    });
  }
}