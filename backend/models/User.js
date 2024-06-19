//backend/models/User.js'''
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['client', 'admin'], // Adicionando enum para validar os valores de role
  },
});

module.exports = mongoose.model('User', UserSchema);

//'''