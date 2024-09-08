import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the career data
interface ICareer extends Document {
  name: string;
  job_title: string;
  email: string;
  phone: string;
  experiance: number;
  qualification: string;
  file: Buffer; // Change to Buffer to store file as binary data
  notified: boolean; // Change to Buffer to store file as binary data
}

// Create a schema for the career
const CareerSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    job_title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    experiance: { type: Number, required: true },
    qualification: { type: String, required: true },
    file: { type: Buffer, required: true }, // Use Buffer to handle binary data
    notified: { type: Boolean, default: false }, // Use Buffer to handle binary data
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Create a model from the schema
const Career = mongoose.model<ICareer>('Career', CareerSchema);

export default Career;
