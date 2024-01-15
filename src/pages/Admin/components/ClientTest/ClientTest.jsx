import React, { useState, useEffect } from 'react';
import { clientsService } from '../../../../services/ClientsService';
import { reportsService } from '../../../../services/ReportsService';
import downloadIcon from '../../../../Assets/Icons/download.svg'; // Ajuste o caminho conforme necessário

export const ClientTest = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedClientName, setSelectedClientName] = useState('');
    const [reports, setReports] = useState([]);
    const [filterType, setFilterType] = useState('');

    useEffect(() => {
        const loadClients = async () => {
            const clientsData = await clientsService.getClientsList();
            setClients(clientsData);
        };
        loadClients();
    }, []);

    useEffect(() => {
        const loadReports = async () => {
            const reportsData = await reportsService.getReportsList();
            setReports(reportsData);
        };
        loadReports();
    }, []);

    const handleClientChange = (e) => {
        const selectedEmail = e.target.value;
        setSelectedClient(selectedEmail);
        const client = clients.find(client => client.client === selectedEmail);
        setSelectedClientName(client ? client.name : '');
    };

    const handleTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredReports = reports.filter(report => {
        return report.client === selectedClient && (!filterType || report.type === filterType);
    });

    return (
        <>
            <h1>Simulador para testar área do cliente</h1>
            <div className="reports-form">
                <h2>Simulador de Login</h2>
                <select name="client" value={selectedClient} onChange={handleClientChange} required>
                    <option value="">Selecione um cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.client}>{client.client}</option>
                    ))}
                </select>
            </div>
            <div className='simulador-area-cliente'>
                <h4>(Informações que o cliente irá ver na área de login dele)</h4>
                {selectedClientName && <h1>Olá, {selectedClientName}</h1>}
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
                <h4>Os clientes não terão opção de deletar ou editar, apenas download.</h4>
                <h2>Faça o download de seus relatórios abaixo:</h2>
                <div
                >
                    {filteredReports.map(report => (
                        <div key={report.id}>
                            <p>{report.title}</p>
                            <a href={report.Link} target="_blank" rel="noopener noreferrer">
                                <img src={downloadIcon} alt="Download" />
                            </a>
                            {/* Outras informações do report */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}