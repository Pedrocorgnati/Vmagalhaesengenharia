import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginPage, DashboardPage, NotFoundPage } from '../../pages/';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutUs } from '../../pages/PublicPages/AboutUs';
import { Partners } from '../../pages/PublicPages/Partners.jsx';
import { ContactUs } from '../../pages/PublicPages/ContactUs';
import { AdmLogin } from "../../pages/Admin/AdmLogin/AdmLogin.jsx";
import { AdminDashboard } from "../../pages/Admin/Admin.jsx";
import { ClientsAdmPage } from '../../pages/Admin/Pages/ClientsAdmPage/ClientsAdmPage.jsx';
import { ReportsAdmPage } from '../../pages/Admin/Pages/ReportsAdmPage/ReportsAdmPage.jsx';
import { ConfigAdmPage } from "../../pages/Admin/Pages/ConfigAdmPage/ConfigAdmPage.jsx";

export const RouterMain = () => {
    const [user, setUser] = useState(null);

    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage setUser={setUser} />} />
                <Route path="/dashboard" element={<DashboardPage user={user} />} />
                <Route path="/parceiros" element={<Partners />} />
                <Route path="/missao-e-visao" element={<AboutUs />} />
                <Route path="/contato" element={<ContactUs />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/admin" element={<AdmLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/clientes" element={<ClientsAdmPage />} />
                <Route path="/relatorios" element={<ReportsAdmPage />} />
                <Route path="/configuracoes" element={<ConfigAdmPage />} />
            </Routes>
        </div>
    );
}
