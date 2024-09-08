import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import multer from 'multer';
import Career from '../../models/Career';

// Set up multer to store files in memory
const upload = multer({ storage: multer.memoryStorage() });

export const uploadFile = upload.single('file');

export const save = async (req: Request, res: Response) => {
  const { name, job_title, email, phone, experiance, qualification, captcha } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'File is required' });
  }

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`;
    const response = await axios.post(verificationUrl);

    if (!response.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }

    const newCareer = new Career({
      name,
      job_title,
      email,
      phone,
      experiance,
      qualification,
      file: file.buffer,
    });

    const savedCareer = await newCareer.save();
    res.status(200).json({
      message: 'Career data saved successfully',
      data: savedCareer,
    });
  } catch (error) {
    console.error('Error saving career data:', error);
    res.status(500).json({
      message: 'Failed to save career data',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};
