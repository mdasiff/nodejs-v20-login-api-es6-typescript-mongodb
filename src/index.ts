import express from 'express';
import cors from 'cors';

import contactRoutes from './routes/front/contact';
import careerRoutes from './routes/front/career';

import adminRoutes from './routes/admin/auth';

import connectDB from './config/db'; // Import the database connection function
import corsOptions from './config/cors'; // Import the database connection function

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB using the function from db.ts
connectDB();

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Route handlers
app.use('/api/contact', contactRoutes);
app.use('/api/career', careerRoutes);

app.use('/api/admin', adminRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Hello, TypeScript with ES6!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
