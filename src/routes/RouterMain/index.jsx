import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { LoginPage, DashboardPage, RegisterPage, NotFoundPage } from '../../pages/';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutUs } from '../../pages/PublicPages/AboutUs';
import { Clients } from '../../pages/PublicPages/Clients';
import { ContactUs } from '../../pages/PublicPages/ContactUs';

export const RouterMain = () => {
    const [user, setUser] = useState(null);

    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage setUser={setUser} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage user={user} />} />
                <Route path="/clientes" element={<Clients />} />
                <Route path="/empresa" element={<AboutUs />} />
                <Route path="/contato" element={<ContactUs />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default RouterMain;
