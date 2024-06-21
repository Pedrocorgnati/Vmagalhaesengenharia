//'''
// backend/routes/clients.routes.ts
import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import Report from '../models/report.model';

const router = express.Router();

interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

const verifyUser = (req: AuthenticatedRequest, res: Response, next: () => void) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

router.get('/', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const users = await User.find({ role: { $in: ['client', 'admin'] } });
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/change-password', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findOne({ email: (req.user as { email: string }).email });
  if (!user || !await bcrypt.compare(oldPassword, user.password)) {
    return res.status(401).send('Invalid credentials');
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.status(200).send('Password changed');
});

router.get('/reports', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const reports = await Report.find({ clienteEmail: (req.user as { email: string }).email });
    res.json(reports);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
//'''