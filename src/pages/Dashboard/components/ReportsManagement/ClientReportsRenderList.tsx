//'''
//src/pages/Dashboard/components/ReportsManagement/ClientReportsRenderList.tsx
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { ClientReportsRenderListProps, Report } from 'types/types';
import Table from 'components/Table/Table';

const ClientReportsRenderList: React.FC<ClientReportsRenderListProps> = ({ reports, sortConfig, onSort }) => {
  const headers: { key: keyof Report; label: string }[] = [
    { key: 'date', label: 'Data' },
    { key: 'title', label: 'Nome do Relatório' },
    { key: 'type', label: 'Tipo do Relatório' },
    { key: 'link', label: 'Ações' },
  ];

  const renderRow = (report: Report) => (
    <tr key={report.id}>
      <td>{report.date}</td>
      <td>{report.title}</td>
      <td>{report.type}</td>
      <td>
        <a href={report.link} target="_blank" rel="noopener noreferrer">
          <FaDownload />
        </a>
      </td>
    </tr>
  );

  return (
    <Table
      headers={headers}
      data={reports}
      onSort={onSort}
      sortConfig={sortConfig}
      renderRow={renderRow}
    />
  );
};

export default ClientReportsRenderList;
//’’’
