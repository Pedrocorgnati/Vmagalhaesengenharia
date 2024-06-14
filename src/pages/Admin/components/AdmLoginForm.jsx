// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { HeaderAdmin } from '../../../components/Header/Header.jsx';
// import { AdminDashboard } from '../AdminDashboard.jsx';
// import { ButtonAdminDash } from '../../../components/Buttons/Buttons.jsx';
// import "../Admin.scss";
// import "../../../components/Buttons/Buttons.scss";
// import { ReportList } from '../../../components/ReportList/ReportList.jsx';

// export const AdmLoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 "http://localhost:5000/api/auth/login",
//                 { username: email, password }
//             );
//             setUser(response.data);
//             localStorage.setItem('token', response.data.token);
//             navigate('/admin-dashboard');
//         } catch (error) {
//             if (error.response && error.response.status === 401) {
//                 setError("Usuário ou senha inválidos");
//             } else {
//                 setError("Erro ao acessar o servidor");
//             }
//         }
//     };

//     const handleLogout = () => {
//         setUser(null);
//         setError("");
//         localStorage.removeItem('token');
//     }

//     return (
//         <>
//             {user == null ? (
//                 <div>
//                     <form onSubmit={handleLogin}>
//                         <div>
//                             <label>Usuário:</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required />
//                         </div>
//                         <div>
//                             <label>Senha:</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Senha"
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required />
//                         </div>
//                         <button
//                             className="button-login"
//                             type="submit">
//                             Login
//                         </button>
//                     </form>
//                     <p>{error}</p>
//                 </div>
//             ) : (
//                 <div>
//                     <header className="header-admin-dashboard">
//                         <HeaderAdmin />
//                         <button
//                             className="button-logout"
//                             onClick={handleLogout}
//                         >
//                             Logout
//                         </button>
//                     </header>
//                     <AdminDashboard />
//                     <ReportList userEmail={user.email} />
//                 </div>
//             )}
//         </>
//     );
// };
