import React, { useState } from 'react';
import { reportsService } from '../../../services/ReportsService';
import "../Admin.scss";

export const EditReport = ({ reportId, onReportUpdated, onClose }) => {
    const [report, setReport] = useState({
        ...reportsService.findReportById(reportId),
        client: "",
        date: "",
        title: "",
        type: "",
        link: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        reportsService.updateReport(reportId, report);
        onReportUpdated();
        onClose();
    };
    const handleChange = (e) => {
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
                Salvar Alterações
            </button>
        </form>
    );
};
