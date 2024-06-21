// backend/routes/admin.routes.ts
//'''
import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const router = express.Router();

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const verifyAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified;
    if (req.user.role !== 'admin') {
      return res.status(403).send('Access forbidden');
    }
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

router.post('/create-user', verifyAdmin, async (req: AuthenticatedRequest, res: Response) => {
  const { email, password, name, city, role } = req.body;

  if (!email || !password || !name || !city || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      name,
      city,
      role
    });

    await user.save();
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

router.post('/reset-password', verifyAdmin, async (req: AuthenticatedRequest, res: Response) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password', error });
  }
});

export default router;
//'''