import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the Admin data
interface Admin extends Document {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  status: boolean;
}

// Create a schema for the Admin
const AdminSchema: Schema = new Schema({
  avatar: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: true },
  status: { type: Boolean, default: false },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create a model from the schema
const Admin = mongoose.model<Admin>('Admin', AdminSchema);

export default Admin;
