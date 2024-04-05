require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Function to send an email
async function sendMail(to, subject, text, html) {
  return new Promise((resolve, reject) => {
    if (!to || !subject || (!text && !html)) {
      reject(new Error('Missing required parameters'));
    }

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: to, // Ensure that to field is properly defined
      subject,
      text,
      html
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending email: ${error}`);
        reject(error);
      } else {
        console.log(`Email sent: ${info.response}`);
        resolve(info.response);
      }
    });
  });
}

module.exports = { sendMail };
