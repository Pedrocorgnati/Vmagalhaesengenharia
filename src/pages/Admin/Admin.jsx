import React, { useState } from 'react';
import { HeaderAdmin } from "../../components/Header/Header.jsx";
import { RegisterClientForm } from "./components/RegisterClientForm.jsx";
import { AddReportsForm } from "./components/AddReportsForm.jsx";
import { ReportsRenderList } from "./components/ReportsRenderList.jsx";
import { AsideFilterReports } from "./components/AsideFilterReports.jsx";

export const AdminDashboard = () => {
    const [filters, setFilters] = useState({ type: '', client: '' });
    const [refreshReports, setRefreshReports] = useState(false);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };
    const handleReportAdded = () => {
        setRefreshReports(prev => !prev);
    };
    return (
        <>
            <HeaderAdmin />
            <RegisterClientForm />
            <h1>Adicionar relatórios</h1>
            <AddReportsForm onReportAdded={handleReportAdded} />
            <h1>Lista de relatórios</h1>
            <AsideFilterReports onFilterChange={handleFilterChange} />

            <ReportsRenderList refresh={refreshReports} />
        </>
    );
};
