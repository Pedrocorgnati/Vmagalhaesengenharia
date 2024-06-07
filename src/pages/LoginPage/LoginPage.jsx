import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import { useSetRecoilState } from 'recoil';
import { authService } from 'services/AuthService';
import { gUserState } from 'models/user.model';
import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(gUserState);

  const loginWithEmailAndPass = async (e) => {
    e.preventDefault();
    const loginResult = await authService.login(email, password, setUserState);
    if (loginResult.success) {
      navigate('/app/dashboard', { state: { user: loginResult.data } });
    } else {
      alert('Error logging in!');
    }
  };

  return (
    <div className='div__signin'>
      <header className="header__login">
        <div className="div__logo-and-name">
          <Link className="button__home" to="/">
            <img src={logo} className="img__logo--signup" alt="Logo Zenminder" />
          </Link>
          <h2>ZenMinder</h2>
        </div>
      </header>
      <section className="container-login">
        <h1 className="h1__login">Welcome back</h1>
        <form onSubmit={loginWithEmailAndPass}>
          <div className="input__container" id="inputContainer">
            <input type="email" id="email" name="email" placeholder="Email Address" required onChange={e => setEmail(e.target.value)} />
            <input type="password" id="password" name="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="submit-btn">Continue</button>
          </div>
        </form>
        <div className="div__already-have-account">
          <p>Don't have an account? </p> <Link to="/auth/sign-up">Sign Up</Link>
        </div>
      </section>
      <footer>
        <a href="../terms-of-use/terms-of-use.html">Terms of use</a>
        <p>|</p>
        <a href="../Privacy/privacy.html">Privacy Policy</a>
      </footer>
    </div>
  );
};

export default LoginPage;
