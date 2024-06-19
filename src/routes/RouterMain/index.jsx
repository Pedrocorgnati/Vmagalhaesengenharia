//src/routes/RouterMain/index.jsx
//'''
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutUs } from '../../pages/PublicPages/AboutUs';
import { Partners } from '../../pages/PublicPages/Partners';
import { ContactUs } from '../../pages/PublicPages/ContactUs';
import { AdminDashboard } from '../../pages/Admin/AdminDashboard';
import LoginPage from '../../pages/LoginPage/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ClientDashboard from '../../pages/Admin/components/ClientDashboard/ClientDashboard';
import { RegisterUser } from '../../pages/Admin/Pages/ClientsAdmPage/RegisterUser';

export const RouterMain = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/dashboard" element={<ClientDashboard userLogout={handleLogout} />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/missao-e-visao" element={<AboutUs />} />
        <Route path="/contato" element={<ContactUs />} />
        <Route path="/cadastrar-usuario" element={<RegisterUser />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard userLogout={handleLogout} />} />
      </Routes>
    </div>
  );
};


//'''
