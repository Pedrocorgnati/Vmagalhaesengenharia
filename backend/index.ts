//'''
// backend/index.ts

import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/user.model';
import authRoutes from './routes/auth.routes';
import adminRoutes from './routes/admin.routes';
import clientRoutes from './routes/clients.routes';
import fileRoutes from './routes/files.routes';
import reportRoutes from './routes/report.routes';
import partnersRoutes from './routes/partners.routes';
import whatWeDoCardRoutes from './routes/WhatWeDoCard.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} as mongoose.ConnectOptions) 
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const createInitialUsers = async () => {
  const admin = await User.findOne({ email: 'admin@admin.com' });
  if (!admin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({ email: 'admin@admin.com', password: hashedPassword, role: 'admin' });
    console.log('Admin user created');
  }
  const user = await User.findOne({ email: 'user@user.com' });
  if (!user) {
    const hashedPassword = await bcrypt.hash('user123', 10);
    await User.create({ email: 'user@user.com', password: hashedPassword, role: 'client' });
    console.log('User created');
  }
};

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/whatwedo', whatWeDoCardRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  createInitialUsers();
});
//'''