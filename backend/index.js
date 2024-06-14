require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

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

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body; // Alterado de username para email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.json({
    success: true,
    data: {
      email: user.email,
      role: user.role,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  createInitialUsers();
});
