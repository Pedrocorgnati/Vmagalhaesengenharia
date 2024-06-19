//src/pages/LoginPage/LoginPage.jsx'''
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authService } from '../../services/AuthService';
import { gUserState } from '../../models/user.model';
import './LoginPage.scss';
import logo from '../../Assets/Logo/Logo-png.png';

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(gUserState);

  const loginWithEmailAndPass = async (e) => {
    e.preventDefault();
    console.log('Attempting login'); // Log tentativa de login
    const loginResult = await authService.login(email, password, setUserState);
    console.log('Login result:', loginResult); // Log resultado do login
    if (loginResult.success) {
      const userRole = loginResult.data.role;
      setUser(loginResult.data);
      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else if (userRole === 'user') {
        navigate('/dashboard');
      } else {
        alert('Error logging in!');
      }
    } else {
      alert('Error logging in!');
    }
  };

  return (
    <div className="login-container">
      <section className="login-section">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="login-logo" />
          <h1>Vmagalhães Engenharia</h1>
        </div>
        <form onSubmit={loginWithEmailAndPass} className="login-form">
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <button type="button" className="back-button" onClick={() => navigate('/')}>Voltar</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;

