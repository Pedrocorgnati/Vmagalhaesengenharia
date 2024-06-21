//'''
// src/routes/ReportRoutes.tsx
import { Route, Routes } from 'react-router-dom';
import { ReportsAdmPage } from '../pages/Dashboard/Pages/ReportsAdmPage/ReportsAdmPage';
import { ReportsListPage } from '../pages/Dashboard/Pages/ReportsAdmPage/ReportsListPage';

const ReportRoutes = () => {
  return (
    <Routes>
      <Route path="/cadastrar-relatorios" element={<ReportsAdmPage />} />
      <Route path="/listar-relatorios" element={<ReportsListPage />} />
    </Routes>
  );
};

export default ReportRoutes;
//'''