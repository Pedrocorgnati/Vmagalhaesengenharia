
//backend/index.js
//'''
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const User = require('./models/User');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/clients'); // Certifique-se de importar a rota de clientes corretamente
const fileRoutes = require('./routes/files');
const reportRoutes = require('./routes/report');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const createInitialUsers = async () => {
  const admin = await User.findOne({ email: 'admin@admin.com' });
  if (!admin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({ email: 'admin@admin.com', password: hashedPassword, role: 'admin' });
    console.log('Admin user created');
  }
  const user = await User.findOne({ email: 'user@user.com' });
  if (!user) {
    const hashedPassword = await bcrypt.hash('user123', 10);
    await User.create({ email: 'user@user.com', password: hashedPassword, role: 'user' });
    console.log('User created');
  }
};

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/clients', clientRoutes); // Certifique-se de usar a rota de clientes corretamente
app.use('/api/files', fileRoutes);
app.use('/api/reports', reportRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  createInitialUsers();
});

//'''