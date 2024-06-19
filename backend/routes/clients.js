//backend/routes/clients.js
//'''
// backend/routes/clients.js
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
  console.log('Create user request data:', req.body); // Log dados da requisição

  if (!email || !password || !name || !city || !role) {
    console.log('Missing fields:', { email, password, name, city, role }); // Log dos campos faltantes
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Email already in use:', email);
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
    console.log('User created successfully:', user); // Log usuário criado com sucesso
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    console.error('Error creating user:', error); // Log erro ao criar usuário
    res.status(400).json({ message: 'Error creating user', error });
  }
});

module.exports = router;



//'''