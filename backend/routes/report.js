//backend/routes/report.js'''
const express = require('express');
const multer = require('multer');
const router = express.Router();
const Report = require('../models/Report');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware para verificar token e o papel do usuário
const verifyUser = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', verifyUser, upload.single('file'), async (req, res) => {
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

router.get('/', verifyUser, async (req, res) => {
  console.log('GET /api/reports called'); // Adicione este log
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/delete/:id', verifyUser, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).send('Report not found');

    // Deleta o arquivo fisicamente (se necessário)
    const fs = require('fs');
    fs.unlinkSync(report.path);

    await report.delete();
    res.status(200).send('Report deleted');
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;


//'''