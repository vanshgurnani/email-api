const { sendMail } = require('../service/emailService');

async function sendContactEmail(req, res) {
    try {
        // Extract form data from request body
        const { email, message } = req.body;
    
        // Compose email data
        const emailContent = `
          Message: ${message}
        `;
    
        // Send email
        await sendMail(email, 'New Contact Form Submission', emailContent, '');
    
        // Respond with success message
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}

module.exports = { sendContactEmail };