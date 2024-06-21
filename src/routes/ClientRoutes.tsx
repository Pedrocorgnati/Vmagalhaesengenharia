//'''
//src/routes/ClientRoutes.tsx
import { Route, Routes } from 'react-router-dom';
import ClientDashboard from '../pages/Dashboard/Pages/ClientDashboard/ClientDashboard';
import UserUpdatePasswordPage from '../pages/Dashboard/Pages/UserUpdatePasswordPage/UserUpdatePasswordPage';

const ClientRoutes = () => {
  const userLogout = () => {
    console.log('User logged out');
  };

  return (
    <Routes>
      <Route path="/dashboard" element={<ClientDashboard userLogout={userLogout} />} />
      <Route path="/atualizar-senha" element={<UserUpdatePasswordPage />} />
    </Routes>
  );
};

export default ClientRoutes;
//’’’
