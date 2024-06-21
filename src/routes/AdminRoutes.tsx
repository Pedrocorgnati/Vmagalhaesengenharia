//'''
//src/routes/AdminRoutes.tsx
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/Dashboard/Pages/AdminDashboard/AdminDashboard';
import { ConfigAdmPage } from '../pages/Dashboard/Pages/ConfigAdmPage/ConfigAdmPage';
import EditHomePage from '../pages/Dashboard/Pages/EditHomePage/EditHomePage';

const userLogout = () => {
  console.log('User logged out');
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin-dashboard" element={<AdminDashboard userLogout={userLogout} />} />
      <Route path="/configuracoes" element={<ConfigAdmPage />} />
      <Route path="/editar-home-page" element={<EditHomePage />} />
    </Routes>
  );
};

export default AdminRoutes;
//'''