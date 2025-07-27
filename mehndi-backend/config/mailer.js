// config/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or use 'smtp.ethereal.email' for testing
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email config error:", error);
  } else {
    console.log("✅ Ready to send emails");
  }
});

module.exports = transporter;
