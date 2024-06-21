//'''
//src/components/Header/Header.tsx
import { HeaderProps } from '../../types';
import { Link } from 'react-router-dom';

const HeaderAdmin: React.FC<HeaderProps> = ({ userLogout }) => {
  return (
    <header className='header-admin'>
      <div className='logo'>
        <Link to="/">MyApp</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><button onClick={userLogout}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
//'''
