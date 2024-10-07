import mongoose, { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['company', 'applicant'], required: true },
  companyName: { type: String },
  applicantName: { type: String },
}, { timestamps: true });

const User = models.User || model('User', userSchema);
export default User;
