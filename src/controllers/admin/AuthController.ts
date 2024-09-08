import { Request, Response } from 'express';
import Admin from '../../models/Admin';
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


export const auth = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Admin.findOne({ email: email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare provided password with hashed password in the database
    const validatePass = await bcrypt.compare(password, user.password);

    if (!validatePass) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // User authenticated, now sign the JWT token
    const token = jwt.sign(
      { email: user.email },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: 'Authenticated successfully',
      token,
    });

  } catch (error) {
    // console.error('Authentication Failed:', error);
    res.status(500).json({
      message: 'Failed to Authenticate',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

export const check = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const secretKey: Secret = process.env.JWT_SECRET || "fallback_secret";
    const user = jwt.verify(token, secretKey) as { email: string };
    const userdata = await Admin.findOne({ email: user.email }).select(
      "-password"
    );

    if (!userdata) {
      res.status(400).send({ message: "Failed to Authenticate" });
    }
    
    res.status(200).send({ message: "Successful", data: userdata });

  } catch (error) {
    res.status(500).json({
      message: 'Failed to Authenticate',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

export const save = async (req: Request, res: Response) => {
  const { name, email, phone, avatar, password, status } = req.body;

  try {
    
    const enryptedpass = await bcrypt.hash(password, 10);

    const model = new Admin({
      name,
      email,
      phone,
      avatar,
      password: enryptedpass
    });

    const data = await model.save();

    res.status(200).json({
      message: 'Admin created successfully',
      data: data,
    });

  } catch (error) {
    console.error('Failed:', error);
    res.status(500).json({
      message: 'Failed to create admin',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};
