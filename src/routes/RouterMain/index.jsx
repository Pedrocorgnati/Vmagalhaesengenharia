import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutUs } from '../../pages/PublicPages/AboutUs';
import { Partners } from '../../pages/PublicPages/Partners';
import { ContactUs } from '../../pages/PublicPages/ContactUs';
import { AdmLogin } from '../../pages/Admin/components/AdmLogin/AdmLogin';
import { AdminDashboard } from '../../pages/Admin/AdminDashboard';
import { ClientsAdmPage } from '../../pages/Admin/Pages/ClientsAdmPage/ClientsAdmPage';
import { RegisterUser } from '../../pages/Admin/Pages/ClientsAdmPage/RegisterUser';
import { ReportsAdmPage } from '../../pages/Admin/Pages/ReportsAdmPage/ReportsAdmPage';
import { ReportsList } from '../../pages/Admin/Pages/ReportsAdmPage/ReportsList';
import { ConfigAdmPage } from '../../pages/Admin/Pages/ConfigAdmPage/ConfigAdmPage';
import LoginPage from '../../pages/LoginPage/LoginPage'; // Corrigido
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'; // Corrigido
import UpdatePassword from '../../pages/Admin/components/ClientDashboard/Profile/UpdatePassword'; // Novo import
import ClientDashboard from '../../pages/Admin/components/ClientDashboard/ClientDashboard'; // Importando o ClientDashboard

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
        <Route path="/adm-login" element={<AdmLogin setUser={setUser} />} />
        <Route path="/dashboard" element={<ClientDashboard userLogout={handleLogout} />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/missao-e-visao" element={<AboutUs />} />
        <Route path="/contato" element={<ContactUs />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard userLogout={handleLogout} />} />
        <Route path="/clientes" element={<ClientsAdmPage />} />
        <Route path="/cadastrar-usuario" element={<RegisterUser />} />
        <Route path="/listar-relatorios" element={<ReportsList />} />
        <Route path="/cadastrar-relatorios" element={<ReportsAdmPage />} />
        <Route path="/configuracoes" element={<ConfigAdmPage />} />
        <Route path="/alterar-senha" element={<UpdatePassword />} />
      </Routes>
    </div>
  );
};

