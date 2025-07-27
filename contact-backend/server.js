import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

console.log('🔍 Environment check:');
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('PORT:', process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Contact form backend is running!',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Received contact form submission:', req.body);
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['jacoblefk@gmail.com'], 
      subject: 'New email from Resend',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Sent at: ${new Date().toLocaleString()}</p>
      `,
    });

    console.log('✅ Email sent successfully:', data.id);
    res.json({ message: 'Email sent successfully!', id: data.id });

  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});