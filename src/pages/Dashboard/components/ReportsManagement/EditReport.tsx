//'''
// src/pages/Dashboard/components/ReportsManagement/EditReport.tsx
import { useState, useEffect } from 'react';
import { reportsService } from '../../../../services/ReportsService';
import { FaEdit } from 'react-icons/fa';
import { EditReportProps, Report } from 'types/types';

const EditReport: React.FC<EditReportProps> = ({ reportId, onReportUpdated, onClose }) => {
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      const reportData = await reportsService.findReportById(reportId);
      setReport(reportData);
    };
    fetchReport();
  }, [reportId]);

  if (!report) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reportsService.updateReport(reportId, report);
    onReportUpdated();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='div-labelInput'>
        <label>Cliente:</label>
        <input
          type="email"
          name="client"
          value={report.client}
          onChange={handleChange}
        />
      </div>
      <div className='div-labelInput'>
        <label>Data:</label>
        <input
          type="date"
          name="date"
          value={report.date}
          onChange={handleChange}
        />
      </div>
      <div className='div-labelInput'>
        <label>Título:</label>
        <input
          type="text"
          name="title"
          value={report.title}
          onChange={handleChange}
        />
      </div>
      <div className='div-labelInput'>
        <label>Tipo:</label>
        <select
          name="type"
          value={report.type}
          onChange={handleChange}>
          <option value="">Selecione um tipo</option>
          <option value="Concreto/Graute">Concreto/Graute</option>
          <option value="Argamassa">Argamassa</option>
          <option value="Bloco de concreto">Bloco de concreto</option>
          <option value="Prisma oco">Prisma oco</option>
          <option value="Prisma cheio">Prisma cheio</option>
          <option value="Prismático">Prismático</option>
        </select>
      </div>
      <div className='div-labelInput'>
        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={report.link}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        <FaEdit />
      </button>
    </form>
  );
};

export default EditReport;
//'''
