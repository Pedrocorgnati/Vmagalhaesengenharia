import React, { useState, useEffect } from 'react';
import { reportsService } from '../../../../services/ReportsService';
import downloadIcon from '../../../../Assets/Icons/download.svg'; // Ajuste o caminho conforme necessário
import { useRecoilValue } from 'recoil';
import { gUserState } from '../../../../models/user.model';
import { AsideClient } from './AsideClient/AsideClient';


export const ClientDashboard = ({ userLogout }) => {
    const [reports, setReports] = useState([]);
    const [filterType, setFilterType] = useState('');
    const userState = useRecoilValue(gUserState);

    useEffect(() => {
        const loadReports = async () => {
            const reportsData = await reportsService.getReportsList();
            setReports(reportsData);
        };
        loadReports();
    }, []);

    const handleTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredReports = reports.filter(report => {
        return report.client === userState.email && (!filterType || report.type === filterType);
    });

    return (
        <div className='client-dashboard'>
            <AsideClient userLogout={userLogout} />
            <div className='content'>
                <h1>Olá, {userState.email}</h1>
                <h3>Seja bem vindo!</h3>

                <div>
                    <h2>Filtrar Relatórios</h2>
                    <select value={filterType} onChange={handleTypeChange}>
                        <option value="">Todos os tipos</option>
                        <option value="Concreto/Graute">Concreto/Graute</option>
                        <option value="Argamassa">Argamassa</option>
                        <option value="Bloco de concreto">Bloco de concreto</option>
                        <option value="Prisma oco">Prisma oco</option>
                        <option value="Prisma cheio">Prisma cheio</option>
                        <option value="Prismático">Prismático</option>
                    </select>
                    <button type="button" onClick={() => setFilterType('')}>Limpar filtros</button>
                </div>
                <h2>Faça o download de seus relatórios abaixo:</h2>
                <div>
                    {filteredReports.length === 0 && <p>Não consta nenhum relatório</p>}
                    {filteredReports.map(report => (
                        <div className='relatorio-renderizado-cliente' key={report.id}>
                            <p>{report.title}</p>
                            <a href={report.Link} target="_blank" rel="noopener noreferrer">
                                <img src={downloadIcon} alt="Download" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;