//'''
// src/pages/Dashboard/components/ReportsManagement/AddReportsForm.tsx
import { useState, useEffect } from 'react';
import { reportsService } from '../../../../services/ReportsService';
import { clientsService } from '../../../../services/ClientsService';
import { useNavigate } from 'react-router-dom';
import { AddReportsFormProps, Client, Report } from 'types/types';

const AddReportsForm: React.FC<AddReportsFormProps> = ({ onReportAdded }) => {
  const [report, setReport] = useState<Omit<Report, 'id' | 'email' | 'link'>>({ client: '', date: new Date().toISOString().split('T')[0], title: '', type: '', file: null });
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadClients = async () => {
      const clientsData = await clientsService.getClientsList();
      setClients(clientsData);
    };
    loadClients();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setReport({ client: '', date: new Date().toISOString().split('T')[0], title: '', type: '', file: null });
        onReportAdded();
      } else {
        alert('Erro ao adicionar relatório');
      }
    } else {
      alert('Todos os campos são obrigatórios');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, file: e.target.files ? e.target.files[0] : null });
  };

  return (
    <form className='reports-form' onSubmit={handleSubmit}>
      <div className='div-labelInput'>
        <label>Email do cliente:</label>
        <select name="client" value={report.client} onChange={handleChange} required>
          <option value="">Selecione um cliente</option>
          {clients.map(client => (
            <option key={client.email} value={client.email}>{client.email}</option>
          ))}
        </select>
        <button type="button" onClick={() => navigate('/cadastrar-usuario')}>Cadastrar novo usuário</button>
      </div>
      <div className='div-labelInput'>
        <label>Data do relatório:</label>
        <input type="date" name="date" value={report.date} onChange={handleChange} required />
      </div>
      <div className='div-labelInput'>
        <label>Título do relatório:</label>
        <input type="text" name="title" value={report.title} onChange={handleChange} required />
      </div>
      <div className='div-labelInput'>
        <label>Tipo de relatório:</label>
        <select name="type" value={report.type} onChange={handleChange} required>
          <option value="">Selecione um tipo</option>
          <option value="Concreto/Graute">Concreto/Graute</option>
          <option value="Argamassa">Argamassa</option>
          <option value="Bloco de concreto">Bloco de concreto</option>
          <option value="Prisma oco">Prisma oco</option>
          <option value="Prisma cheio">Prisma cheio</option>
          <option value="Prismático">Prismático</option>
        </select>
        <button type="button" onClick={() => navigate('/cadastrar-tipo-relatorio')}>Criar novo tipo de relatório</button>
      </div>
      <div className='div-labelInput'>
        <label>Arquivo:</label>
        <input type="file" name="file" accept="application/pdf,image/*" onChange={handleFileChange} required />
      </div>
      <button type="submit">Adicionar Relatório</button>
    </form>
  );
};

export default AddReportsForm;
//'''
