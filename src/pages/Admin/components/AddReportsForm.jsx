import React, { useState } from 'react';
import { reportsService } from '../../../services/ReportsService';
import "../../../components/Buttons/Buttons.scss";
import "../Admin.scss";

export const AddReportsForm = ({ onReportAdded }) => {
    const [report, setReport] = useState({ client: '', date: '', title: '', type: '', link: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(report).every(field => field)) {
            reportsService.addReport({ ...report, id: generateUniqueId() });
            setReport({ client: '', date: '', title: '', type: '', link: '' });
            onReportAdded();
        } else {
            alert('Todos os campos são obrigatórios');
        }
    };

    const handleChange = (e) => {
        setReport({ ...report, [e.target.name]: e.target.value });
    };

    return (
        <form className='reports-form' onSubmit={handleSubmit}>
            <div className='div-labelInput'>
                <label>Email do cliente:</label>
                <input
                    type="email"
                    name="client"
                    value={report.client}
                    onChange={handleChange}
                    required
                />
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
                <label>Link do arquivo no Google Drive:</label>
                <input
                    type="url"
                    name="link"
                    value={report.link}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="button-submit">Adicionar Relatório</button>
        </form>
    );
};

const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};
