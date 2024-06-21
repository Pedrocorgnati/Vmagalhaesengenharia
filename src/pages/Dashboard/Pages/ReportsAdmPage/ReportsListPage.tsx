//'''
// src/pages/Dashboard/Pages/ReportsListPage/ReportsListPage.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { gUserState } from '../../../../models/user.model';
import { ReportList } from 'pages/Dashboard/components/ReportsManagement/ReportList';

const ReportsListPage: React.FC = () => {
  const userState = useRecoilValue(gUserState);

  return (
    <div className="reports-list-page">
      <h2>Meus Relatórios</h2>
      <ReportList userEmail={userState.email} />
    </div>
  );
};

export default ReportsListPage;
//’’’
