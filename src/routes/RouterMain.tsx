//'''
//src/routes/RouterMain.tsx

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { AboutUs } from '../pages/HomePage/AboutPage';
import { Partners } from '../pages/HomePage/PartnersPage';
import { ContactUs } from '../pages/HomePage/ContactPage';
import AdminDashboard from '../pages/Dashboard/Pages/AdminDashboard/AdminDashboard';
import LoginPage from '../pages/LoginPage/LoginPage';
import ClientDashboard from '../pages/Dashboard/Pages/ClientDashboard/ClientDashboard';
import { RegisterUserPage } from '../pages/Dashboard/Pages/ClientsAdmPage/RegisterUserPage';
import { ConfigAdmPage } from '../pages/Dashboard/Pages/ConfigAdmPage/ConfigAdmPage';
import EditHomePage from '../pages/Dashboard/Pages/EditHomePage/EditHomePage';
import HomePage from '../pages/HomePage/HomePage';
import { UserListPage } from '../pages/Dashboard/Pages/ClientsAdmPage/UserListPage';
import ReportsAdmPage from 'pages/Dashboard/Pages/ReportsAdmPage/ReportsAdmPage';
import ReportsListPage from 'pages/Dashboard/Pages/ReportsAdmPage/ReportsListPage';

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
        <Route path="/usuarios" element={<UserListPage />} />
        <Route path="/cadastrar-usuario" element={<RegisterUserPage />} />
        <Route path="/cadastrar-relatorios" element={<ReportsAdmPage />} />
        <Route path="/listar-relatorios" element={<ReportsListPage />} />
        <Route path="/configuracoes" element={<ConfigAdmPage />} />
        <Route path="/editar-home-page" element={<EditHomePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard userLogout={handleLogout} />} />
      </Routes>
    </div>
  );
};

//'''
