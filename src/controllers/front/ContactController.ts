import { Request, Response } from 'express';
import axios from 'axios';
import Contact from '../../models/Contact';

export const save = async (req: Request, res: Response) => {
  const { name, email, category, phone, captcha } = req.body;

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`;
    const response = await axios.post(verificationUrl);

    if (!response.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }

    const newContact = new Contact({
      name,
      email,
      category,
      phone,
    });

    const savedContact = await newContact.save();
    res.status(200).json({
      message: 'Contact data saved successfully',
      data: savedContact,
    });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({
      message: 'Failed to save contact data',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};
