import React, { useState } from 'react';
import axios from 'axios';
import { HeaderAdmin } from '../../../components/index.js';
import { AdminDashboard } from '../Admin.jsx';
import { ButtonAdminDash } from '../../../components/Buttons/Buttons.jsx';
import "../Admin.scss";
import "../../../components/Buttons/Buttons.scss";
import { ReportList } from '../../../components/ReportList/ReportList.jsx'; // Certifique-se de que o caminho do import está correto

export const AdmLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const Axios = axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post(
                "/login",
                JSON.stringify({ email, password })
            );
            setUser(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Usuário ou senha inválidos");
            } else {
                setError("Erro ao acessar o servidor");
            }
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        setUser(null);
        setError("");
    }

    return (
        <>
            {user == null ? (
                <div>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Usuário:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div>
                            <label>Senha:</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        <button
                            className="button-login"
                            type="submit">
                            Login
                        </button>
                        <ButtonAdminDash />
                    </form>
                    <p>{error}</p>
                </div>
            ) : (
                <div>
                    <header className="header-admin-dashboard">
                        <HeaderAdmin />
                        <button
                            className="button-logout"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </header>
                    <AdminDashboard />
                    <ReportList userEmail={user.email} />
                </div>
            )}
        </>
    );
};
