//'''
// backend/routes/report.routes.ts

import express, { Request, Response } from 'express';
import multer from 'multer';
import Report from '../models/report.model';
import jwt from 'jsonwebtoken';

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', verifyUser, upload.single('file'), async (req: AuthenticatedRequest, res: Response) => {
  const { clienteEmail, categoria, dataRelatorio, titulo } = req.body;
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const report = new Report({
    clienteEmail,
    categoria,
    dataRelatorio,
    titulo,
    path: req.file.path,
  });

  try {
    await report.save();
    res.status(201).send('Report uploaded');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/delete/:id', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).send('Report not found');

    const fs = require('fs');
    fs.unlinkSync(report.path);

    await Report.findByIdAndDelete(req.params.id);
    res.status(200).send('Report deleted');
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
//'''