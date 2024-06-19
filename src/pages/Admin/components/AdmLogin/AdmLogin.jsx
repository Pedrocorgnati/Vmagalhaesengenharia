import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authService } from '../../../../services/AuthService';
import { gUserState } from '../../../../models/user.model';
import './AdmLogin.scss';
import logo from '../../../../Assets/Logo/Logo-png.png';

export const AdmLogin = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(gUserState);

  const loginWithEmailAndPass = async (e) => {
    e.preventDefault();
    const loginResult = await authService.login(email, password, setUserState);
    if (loginResult.success) {
      setUser(loginResult.data);
      const userRole = loginResult.data.role;
      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else {
        alert('Error: Only administrators can log in here.');
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
            <input type="email" id="email" name="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
            <input type="password" id="password" name="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="button" className="back-button" onClick={() => navigate('/')}>Voltar</button>
        </form>
      </section>
    </div>
  );
};

