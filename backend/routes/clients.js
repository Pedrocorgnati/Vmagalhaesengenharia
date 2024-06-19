//backend/routes/clients.js
//'''
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

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

router.get('/', verifyUser, async (req, res) => {
  try {
    const users = await User.find({ role: { $in: ['client', 'admin'] } });
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/change-password', verifyUser, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findOne({ email: req.user.email });
  if (!user || !await bcrypt.compare(oldPassword, user.password)) {
    return res.status(401).send('Invalid credentials');
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.status(200).send('Password changed');
});

router.get('/reports', verifyUser, async (req, res) => {
  try {
    const reports = await Report.find({ clienteEmail: req.user.email });
    res.json(reports);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;




//'''