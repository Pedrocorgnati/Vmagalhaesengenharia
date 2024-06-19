//backend/routes/clients.js
//'''
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

// Adicionar novo cliente
router.post('/', verifyAdmin, async (req, res) => {
  const { email, password, name, city, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    email,
    password: hashedPassword,
    name,
    city,
    role
  });
  try {
    await user.save();
    res.status(201).json({ message: 'Client created', user });
  } catch (error) {
    res.status(400).json({ message: 'Error creating client', error });
  }
});

module.exports = router;

//'''