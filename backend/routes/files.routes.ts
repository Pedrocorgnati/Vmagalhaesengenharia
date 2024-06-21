//backend/routes/files.routes.ts
//'''
import express from 'express';
import multer from 'multer';
import File from '../models/file.model';

const router = express.Router();

const fs = require('fs');
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const file = new File({
    filename: req.file.filename,
    path: req.file.path,
  });

  await file.save();
  res.status(201).send('File uploaded');
});

router.get('/files', async (req, res) => {
  const files = await File.find();
  res.json(files);
});

export default router;

//'''