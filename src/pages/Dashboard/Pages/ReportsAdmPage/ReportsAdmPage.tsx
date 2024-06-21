//'''
// src/pages/Dashboard/Pages/ReportsAdmPage/ReportsAdmPage.tsx
import React, { useState } from 'react';
import ReportsRenderList from '../../components/ReportsManagement/ReportsRenderList';
import { ReportsAdmPageProps } from 'types/types';
import AddReportsForm from 'pages/Dashboard/components/ReportsManagement/AddReportsForm';

export const ReportsAdmPage: React.FC<ReportsAdmPageProps> = () => {
  const [refresh, setRefresh] = useState(false);

  const handleReportAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="reports-adm-page">
      <h2>Administração de Relatórios</h2>
      <AddReportsForm onReportAdded={handleReportAdded} />
      <ReportsRenderList refresh={refresh} />
    </div>
  );
};

export default ReportsAdmPage;
//’’’
