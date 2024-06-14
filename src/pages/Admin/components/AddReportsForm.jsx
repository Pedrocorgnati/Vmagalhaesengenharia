import React, { useState, useEffect } from 'react';
import { reportsService } from '../../../services/ReportsService';
import { clientsService } from '../../../services/ClientsService';
import "../../../components/Buttons/Buttons.scss";
import "../Admin.scss";

export const AddReportsForm = ({ onReportAdded }) => {
  const [report, setReport] = useState({ client: '', date: '', title: '', type: '', file: null });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const loadClients = async () => {
      const clientsData = await clientsService.getClientsList();
      setClients(clientsData);
    };
    loadClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (report.client && report.date && report.title && report.type && report.file) {
      const formData = new FormData();
      formData.append('client', report.client);
      formData.append('date', report.date);
      formData.append('title', report.title);
      formData.append('type', report.type);
      formData.append('file', report.file);

      const result = await reportsService.addReport(formData);
      if (result.success) {
        setReport({ client: '', date: '', title: '', type: '', file: null });
        onReportAdded();
      } else {
        alert('Erro ao adicionar relatório');
      }
    } else {
      alert('Todos os campos são obrigatórios');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleFileChange = (e) => {
    setReport({ ...report, file: e.target.files[0] });
  };

  return (
    <form className='reports-form' onSubmit={handleSubmit}>
      <div className='div-labelInput'>
        <label>Email do cliente:</label>
        <select
          name="client"
          value={report.client}
          onChange={handleChange}
          required>
          <option value="">Selecione um cliente</option>
          {clients.map(client => (
            <option key={client.id} value={client.client}>{client.client}</option>
          ))}
        </select>
      </div>
      <div className='div-labelInput'>
        <label>Data do relatório:</label>
        <input
          type="date"
          name="date"
          value={report.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className='div-labelInput'>
        <label>Título do relatório:</label>
        <input
          type="text"
          name="title"
          value={report.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='div-labelInput'>
        <label>Tipo de relatório:</label>
        <select
          name="type"
          value={report.type}
          onChange={handleChange}
          required>
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
        <label>Arquivo:</label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Adicionar Relatório</button>
    </form>
  );
};

export default AddReportsForm;
