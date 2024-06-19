//backend/routes/files.js'''
const express = require('express');
const multer = require('multer');
const router = express.Router();
const File = require('../models/File');

// Verifica se a pasta de uploads existe, se não, cria a pasta
const fs = require('fs');
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Destination function called");
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    console.log("Filename function called");
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  console.log("Upload route called");
  console.log("Request body: ", req.body);
  console.log("File: ", req.file);

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

module.exports = router;
//'''