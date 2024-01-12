import React, { useState, useEffect } from 'react';
import { reportsService } from '../../services/ReportsService';
import "./ReportList.scss";
import downloadIcon from "../../Assets/Icons/download.svg";

export const ReportList = ({ userEmail }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [reports, setReports] = useState([]);
    const [filteredReports, setFilteredReports] = useState([]);

    useEffect(() => {
        reportsService.getReportsList()
            .then((data) => {
                const userReports = data.filter(report => report.client === userEmail);
                setReports(userReports);
                setFilteredReports(userReports);
            })
            .catch((error) => {
                console.error('Erro ao carregar relatórios:', error);
            });
    }, [userEmail]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption) {
            const filtered = reports.filter((report) => report.type === selectedOption);
            setFilteredReports(filtered);
        } else {
            setFilteredReports(reports);
        }
    };

    const handleDownloadClick = (reportLink) => {
        window.open(reportLink, '_blank');
    };

    return (
        <div>
            <h2>Lista de Relatórios</h2>
            <form onSubmit={handleSubmit}>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Selecione o tipo de relatório</option>
                    <option value="Concreto/Graute">Concreto/Graute</option>
                    <option value="Argamassa">Argamassa</option>
                    <option value="Bloco de concreto">Bloco de concreto</option>
                    <option value="Prisma oco">Prisma oco</option>
                    <option value="Prisma cheio">Prisma cheio</option>
                    <option value="Prismático">Prismático</option>
                </select>
                <button className='button-submit' type="submit">Filtrar</button>
            </form>
            <ul>
                {filteredReports.map((report, index) => (
                    <li className='reportCard' key={index}>
                        <h3>{report.title}</h3>
                        <p>Data: {report.date}</p>
                        <p>Tipo: {report.type}</p>
                        <button onClick={() => handleDownloadClick(report.Link)}>
                            <img src={downloadIcon} alt="Download" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
