import { Resend } from 'resend';

// This is a simple Node.js API endpoint for Vite
// You'll need to set up a backend server or use Vite's proxy
// For now, this shows the structure

export async function POST(request) {
    try {
        const formData = await request.json();

        // Initialize Resend with API key (replace with your actual key)
        const resend = new Resend(process.env.RESEND_API_KEY || 'YOUR_RESEND_API_KEY_HERE');

        // Send email
        const data = await resend.emails.send({
            from: 'Krtrim Solar <onboarding@resend.dev>', // Replace with your verified domain
            to: ['your-email@example.com'], // Replace with your email
            subject: `New Contact Form Submission from ${formData.name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message || 'No message provided'}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
