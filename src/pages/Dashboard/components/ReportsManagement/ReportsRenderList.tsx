//'''
//src/pages/Dashboard/components/ReportsManagement/ReportsRenderList.tsx
import React, { useEffect, useState } from 'react';
import { reportsService } from '../../../../services/ReportsService';
import { FaDownload, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { ReportsRenderListProps, Report } from 'types/types';
import EditReport from './EditReport';
import DeleteReport from './DeleteReport';
import Table from 'components/Table/Table';
import { orderBy } from 'lodash';

const ReportsRenderList: React.FC<ReportsRenderListProps> = ({ refresh }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Report; direction: 'ascending' | 'descending' }>({ key: 'id', direction: 'ascending' });

  useEffect(() => {
    const fetchReports = async () => {
      const reportsData = await reportsService.getReportsList();
      setReports(reportsData);
    };
    fetchReports();
  }, [refresh]);

  const handleSort = (key: keyof Report) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
    setReports(orderBy(reports, [key], [direction === 'ascending' ? 'asc' : 'desc']));
  };

  const headers: { key: keyof Report; label: string }[] = [
    { key: 'id', label: 'Id' },
    { key: 'client', label: 'Nome do Cliente' },
    { key: 'email', label: 'Email do Cliente' },
    { key: 'date', label: 'Data' },
    { key: 'title', label: 'Título do Relatório' },
    { key: 'type', label: 'Tipo do Relatório' },
    { key: 'link', label: 'Ações' },
  ];

  const renderRow = (report: Report) => (
    <tr key={report.id}>
      <td>{report.id}</td>
      <td>{report.client}</td>
      <td>{report.email}</td>
      <td>{report.date}</td>
      <td>{report.title}</td>
      <td>{report.type}</td>
      <td>
        <a href={report.link} target="_blank" rel="noopener noreferrer">
          <FaDownload />
        </a>
        <EditReport reportId={report.id} onReportUpdated={() => setReports([])} onClose={() => {}} />
        <DeleteReport reportId={report.id} />
      </td>
    </tr>
  );

  return (
    <Table
      headers={headers}
      data={reports}
      onSort={handleSort}
      sortConfig={sortConfig}
      renderRow={renderRow}
    />
  );
};

export default ReportsRenderList;
//’’’
