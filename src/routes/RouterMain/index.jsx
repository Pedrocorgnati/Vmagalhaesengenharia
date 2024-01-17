import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginPage, DashboardPage, NotFoundPage } from '../../pages/';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutUs } from '../../pages/PublicPages/AboutUs';
import { Clients } from '../../pages/PublicPages/Clients';
import { ContactUs } from '../../pages/PublicPages/ContactUs';
import { AdmLogin } from "../../pages/Admin/AdmLogin/AdmLogin.jsx";
import { AdminDashboard } from "../../pages/Admin/Admin.jsx";

export const RouterMain = () => {
    const [user, setUser] = useState(null);

    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage setUser={setUser} />} />
                <Route path="/dashboard" element={<DashboardPage user={user} />} />
                <Route path="/clientes" element={<Clients />} />
                <Route path="/empresa" element={<AboutUs />} />
                <Route path="/contato" element={<ContactUs />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/admin" element={<AdmLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </div>
    );
}
