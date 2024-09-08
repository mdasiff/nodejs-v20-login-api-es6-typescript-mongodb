import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the contact data
interface Contact extends Document {
  name: string;
  email: string;
  category: string;
  phone: string;
  notified: boolean;
}

// Create a schema for the contact
const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  phone: { type: String, required: true },
  notified: { type: Boolean, default: false },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create a model from the schema
const Contact = mongoose.model<Contact>('Contact', ContactSchema);

export default Contact;
