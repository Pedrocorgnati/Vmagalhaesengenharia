//'''
// src/pages/Dashboard/Pages/EditHomePage/EditHomePage.tsx
import Partners from '../../components/HomePageManagement/Partners';
import Services from '../../components/HomePageManagement/Services';
import About from '../../components/HomePageManagement/About';
import Contact from '../../components/HomePageManagement/Contact';
import { FaCaretDown } from 'react-icons/fa';
import DashboardAside from 'pages/Dashboard/components/DashboardAside/DashboardAside';
import { HeaderAdmin } from 'components';

const EditHomePage: React.FC = () => {
  return (
    <div className="edit-home-page">
      <HeaderAdmin />
      <DashboardAside role="admin" userLogout={() => {}} />
      <div className="content">
        <h1>Editar Home Page</h1>
        <div className="dropdown">
          <button className="dropdown-button">
            Parceiros <FaCaretDown />
          </button>
          <div className="dropdown-content">
            <Partners />
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            Serviços <FaCaretDown />
          </button>
          <div className="dropdown-content">
            <Services />
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            Apresentação <FaCaretDown />
          </button>
          <div className="dropdown-content">
            <About />
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            Contatos <FaCaretDown />
          </button>
          <div className="dropdown-content">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomePage;
//’’’
