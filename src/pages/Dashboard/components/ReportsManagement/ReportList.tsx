//'''
// src/pages/Dashboard/components/ReportsManagement/ReportList.tsx

import { useState, useEffect } from 'react';
import { reportsService } from '../../../../services/ReportsService';
import { clientsService } from '../../../../services/ClientsService';
import { FaDownload, FaSort } from 'react-icons/fa';
import "./ReportList.scss";
import { Client, ReportListProps, Report } from 'types/types';
import _ from 'lodash';

export const ReportList: React.FC<ReportListProps> = ({ userEmail }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Report; direction: 'asc' | 'desc' }>({ key: 'date', direction: 'asc' });
  const [reportTypes, setReportTypes] = useState<string[]>([]);

  useEffect(() => {
    const loadReportsAndClients = async () => {
      try {
        const [reportsData, clientsData, typesData] = await Promise.all([
          reportsService.getReportsList(),
          clientsService.getClientsList(),
          reportsService.getReportTypes(),
        ]);

        const userReports = reportsData.filter((report: Report) => report.email === userEmail);
        setReports(userReports);
        setFilteredReports(userReports);
        setClients(clientsData);
        setReportTypes(typesData);
      } catch (error) {
        console.error('Erro ao carregar relatórios ou clientes:', error);
      }
    };

    loadReportsAndClients();
  }, [userEmail]);

  const getClientName = (email: string) => {
    const client = clients.find(client => client.email === email);
    return client ? client.name : email;
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedOption) {
      const filtered = reports.filter((report) => report.type === selectedOption);
      setFilteredReports(filtered);
    } else {
      setFilteredReports(reports);
    }
  };

  const handleSort = (key: keyof Report) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    setFilteredReports(_.orderBy(filteredReports, [key], [direction]));
  };

  const handleDownloadClick = (reportLink: string) => {
    window.open(reportLink, '_blank');
  };

  return (
    <div>
      <h2>Lista de Relatórios</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Selecione o tipo de relatório</option>
          {reportTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <button className='button-submit' type="submit">Filtrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('date')}>Data <FaSort /></th>
            <th onClick={() => handleSort('title')}>Nome do Relatório <FaSort /></th>
            <th onClick={() => handleSort('type')}>Tipo do Relatório <FaSort /></th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.length === 0 && <tr><td colSpan={4}>Não consta nenhum relatório</td></tr>}
          {filteredReports.map((report, index) => (
            <tr key={index}>
              <td>{report.date}</td>
              <td>{report.title}</td>
              <td>{report.type}</td>
              <td>
                <button onClick={() => handleDownloadClick(report.link)}>
                  <FaDownload />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
//’’’
