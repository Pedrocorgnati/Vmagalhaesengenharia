import React, { useState, useEffect } from 'react';
import { reportsService } from '../../../services/ReportsService';

export const AsideFilterReports = ({ onFilterChange }) => {
    const [reportTypes, setReportTypes] = useState([]);
    const [clients, setClients] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [selectedClient, setSelectedClient] = useState('');

    useEffect(() => {
        reportsService.getReportsList().then(data => {
            const uniqueTypes = [...new Set(data.map(report => report.type))];
            const uniqueClients = [...new Set(data.map(report => report.client))];
            setReportTypes(uniqueTypes);
            setClients(uniqueClients);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilterChange({ type: selectedType, client: selectedClient });
    };

    const handleClearFilters = () => {
        setSelectedType('');
        setSelectedClient('');
        onFilterChange({ type: '', client: '' });
    };

    return (
        <aside>
            <form className='reports-form' onSubmit={handleSubmit}>
                <div className='div-labelInput'>
                    <label htmlFor="type-select">Tipo:</label>
                    <select
                        id="type-select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="">Selecione um tipo</option>
                        {reportTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className='div-labelInput'>
                    <label htmlFor="client-select">Cliente:</label>
                    <select
                        id="client-select"
                        value={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}>
                        <option value="">Selecione um cliente</option>
                        {clients.map(client => (
                            <option key={client} value={client}>{client}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-buttons">
                    <button type="submit">Filtrar</button>
                    <button type="button" onClick={handleClearFilters}>Limpar Filtros</button>
                </div>
            </form>
        </aside>
    );
};
