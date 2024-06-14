import { ButtonLogout, ButtonReturn } from '../Buttons/Buttons';
import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Logo/Logo-png.png";

const HeaderLogin = () => {
  return (
    <>
      <header className='header-login'>
        <div className="logo-and-name">
          <img src={Logo} className="logo" alt="Logo" />
          <h1 className="text-logo"><span>V</span>magalhães</h1>
        </div>
        <nav className="homePage-Nav">
          <Link className='Link-login' to="/login">Login</Link>
          <Link className='Link-login' to="/adm-login">Login Adm</Link>
        </nav>
      </header>
    </>
  );
};

const HeaderDashboard = () => {
  return (
    <>
      <header className='header-dashboard'>
        <h1 className="text-logo"><span>V</span>magalhães</h1>
      </header>
    </>
  );
};

const HeaderAdmin = () => {
  return (
    <header className='header-dashboard'>
      <Link to="/" className="logo-and-name">
        <img src={Logo} className="logo" alt="Logo" />
        <h1 className="text-logo"><span>V</span>magalhães</h1>
      </Link>
    </header>
  );
};

export { HeaderAdmin, HeaderDashboard, HeaderLogin };
