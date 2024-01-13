import React, { useState } from 'react';
import { HeaderAdmin } from "../../components/Header/Header.jsx";
import { AddClientsForm } from "./components/AddClientsForm.jsx";
import { AddReportsForm } from "./components/AddReportsForm.jsx";
import { ReportsRenderList } from "./components/ReportsRenderList.jsx";
import { AsideFilterReports } from "./components/AsideFilterReports.jsx";
import { ClientsRenderList } from "./components/ClientsRenderList.jsx";

export const AdminDashboard = () => {
    const [filters, setFilters] = useState({ type: '', client: '' });
    const [refreshReports, setRefreshReports] = useState(false);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };
    const handleReportAdded = () => {
        setRefreshReports(prev => !prev);
    };
    const [refreshClients, setRefreshClients] = useState(false);
    ;
    const handleClientAdded = () => {
        setRefreshClients(prev => !prev);
    };
    return (
        <>
            <HeaderAdmin />
            <h1>Adicionar clientes</h1>
            <AddClientsForm onClientAdded={handleClientAdded} />
            <h1>Lista de clientes</h1>
            <ClientsRenderList refresh={refreshClients} />
            <h1>Adicionar relatórios</h1>
            <AddReportsForm onReportAdded={handleReportAdded} />
            <h1>Filtrar relatórios</h1>
            <AsideFilterReports onFilterChange={handleFilterChange} />
            <h1>Lista de relatórios</h1>

            <ReportsRenderList refresh={refreshReports} />
        </>
    );
};
