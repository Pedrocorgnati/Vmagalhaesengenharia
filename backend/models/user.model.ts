//'''
// backend/models/user.model.ts

import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  city: string;
  role: 'client' | 'admin';
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  role: { type: String, required: true, enum: ['client', 'admin'] },
});

export default mongoose.model<IUser>('User', UserSchema);
//'''