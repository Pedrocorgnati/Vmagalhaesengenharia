//'''
//src/pages/Dashboard/Pages/ClientDashboard/ClientDashboard.tsx
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { reportsService } from '../../../../services/ReportsService';
import { gUserState } from '../../../../models/user.model';
import { ClientDashboardProps, Report } from 'types/types';
import DashboardAside from '../../components/DashboardAside/DashboardAside';
import ClientReportsFilter from '../../components/ReportsManagement/ClientReportsFilter';
import ClientReportsRenderList from '../../components/ReportsManagement/ClientReportsRenderList';
import { orderBy } from 'lodash';

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ userLogout }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Report; direction: 'ascending' | 'descending' }>({ key: 'date', direction: 'ascending' });
  const userState = useRecoilValue(gUserState);

  useEffect(() => {
    const loadReports = async () => {
      const reportsData = await reportsService.getReportsList();
      setReports(reportsData);
    };
    loadReports();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const handleClearFilter = () => {
    setFilterType('');
  };

  const handleSort = (key: keyof Report) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
    setReports(orderBy(reports, [key], [direction === 'ascending' ? 'asc' : 'desc']));
  };

  const filteredReports = reports
    .filter(report => report.client === userState.email)
    .filter(report => !filterType || report.type === filterType);

  return (
    <div className='client-dashboard'>
      <DashboardAside role="client" userLogout={userLogout} />
      <div className='content'>
        <h1>Olá, {userState.email}</h1>
        <h3>Seja bem vindo!</h3>
        <ClientReportsFilter filterType={filterType} onFilterChange={handleFilterChange} onClearFilter={handleClearFilter} />
        <h2>Faça o download de seus relatórios abaixo:</h2>
        <ClientReportsRenderList reports={filteredReports} sortConfig={sortConfig} onSort={handleSort} />
      </div>
    </div>
  );
};

export default ClientDashboard;
//’’’
