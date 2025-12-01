# Resend Email Integration Setup

## Quick Start Guide

Your contact form is ready to use Resend for sending emails! Follow these steps to complete the setup:

### 1. Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email
4. Go to API Keys section
5. Create a new API key
6. Copy the API key

### 2. Update Configuration

Edit `/src/data/config.json`:

```json
{
  "resend": {
    "apiKey": "re_YOUR_ACTUAL_API_KEY",
    "fromEmail": "onboarding@resend.dev",
    "toEmail": "your-actual-email@example.com"
  }
}
```

**Important:** 
- Replace `YOUR_ACTUAL_API_KEY` with your Resend API key
- Replace `your-actual-email@example.com` with your business email
- For production, use a verified domain email for `fromEmail`

### 3. Backend Setup Options

Since Vite is a frontend framework, you need a backend to send emails securely. Choose one:

#### Option A: Vercel Serverless Functions (Recommended - Free)

1. Deploy to Vercel
2. Create `/api/send-email.js` in your project root:

```javascript
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, serviceType, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Krtrim Solar <onboarding@resend.dev>',
      to: [process.env.TO_EMAIL],
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY` = your Resend API key
   - `TO_EMAIL` = your business email

#### Option B: Netlify Functions

Similar to Vercel, create functions in `/netlify/functions/`

#### Option C: Simple Express Backend

Run a separate Node.js server with Express.

### 4. WhatsApp Configuration

Edit `/src/data/config.json`:

```json
{
  "whatsapp": {
    "enabled": true,
    "phoneNumber": "919999999999",  // Replace with your WhatsApp number (country code + number)
    "message": "Hello! I'm interested in solar installation services."
  }
}
```

**Format:** Use international format without + or spaces (e.g., 919876543210)

### 5. Testing

1. Fill out the contact form
2. Click "Get Free Quote"
3. Check your email for the notification
4. Click the WhatsApp button to test instant messaging

## Current Status

✅ Resend package installed
✅ Contact form with loading states
✅ Success/error messages
✅ WhatsApp floating button
✅ Clickable phone/email links
⏳ Needs backend deployment (see options above)

## For Development

For testing, the form will currently fail because there's no backend. To test:
1. Deploy to Vercel/Netlify, OR
2. Set up a local Express server, OR
3. Use a service like FormSpree as an alternative

Need help? Let me know which deployment option you want to use!
