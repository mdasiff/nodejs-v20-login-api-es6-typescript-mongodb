import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Function to send an email using Resend API
const sendEmailViaAPI = async () => {
  try {
    const response = await axios.post(
      'https://api.resend.com/v1/email/send', // Resend API endpoint
      {
        from: 'deepak@finessse.digital', // Sender's email
        to: ['mdasiff007@gmail.com'], // Array of recipient emails
        subject: 'Test Email', // Subject line
        text: 'This is a test email sent via Resend API.', // Plain text body
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`, // Resend API Key
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Email sent:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Example usage
// sendEmailViaAPI();

export default sendEmailViaAPI;
