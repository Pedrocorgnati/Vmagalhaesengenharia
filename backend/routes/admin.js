const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

// Middleware para verificar token e o papel do usuário
const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    if (req.user.role !== 'admin') return res.status(403).send('Access forbidden');
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

router.post('/create-user', verifyAdmin, async (req, res) => {
  const { username, email, nome, dataAniversario, cidade, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    email,
    nome,
    dataAniversario,
    cidade,
    password: hashedPassword,
    role
  });
  try {
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
