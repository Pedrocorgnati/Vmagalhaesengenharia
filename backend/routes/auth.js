//backend/routes/auth.js
//'''
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router(); 
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt with email:', email); // Log do email

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found'); // Log usuário não encontrado
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials'); // Log credenciais inválidas
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('User role:', user.role); // Log papel do usuário

    res.json({
      success: true,
      data: {
        email: user.email,
        role: user.role,
        token: token,
      },
    });
  } catch (error) {
    console.error('Error during login:', error); // Log erro durante login
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


//'''