import React, { useState } from 'react';
import { HeaderAdmin } from "../../components/Header/Header.jsx";
import { AddClientsForm } from "./components/AddClientsForm.jsx";
import { AddReportsForm } from "./components/AddReportsForm.jsx";
import { ReportsRenderList } from "./components/ReportsRenderList.jsx";
// import { AsideFilterReports } from "./components/AsideFilterReports.jsx";
import { ClientsRenderList } from "./components/ClientsRenderList.jsx";
import "./Admin.scss";
import { ClientTest } from './components/ClientTest/ClientTest.jsx';

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
            <div className='main-admin'>

                <section className='section-admin'>
                    <h4>Cada componente já está configurado e funciona individualmente em qualquer página que estiver, foram colocados todos na mesma página apenas para facilitar a visualização e testes.</h4>
                    <h4>1)Será necessário fazer o cadastro do cliente antes de adicionar qualquer relatório dele</h4>
                    <h1>Adicionar clientes</h1>
                    <AddClientsForm onClientAdded={handleClientAdded} />
                    <h1>Lista de clientes</h1>
                    <h4>2)Poderá adicionar, editar e deletar clientes conforme quiser</h4>
                    <ClientsRenderList refresh={refreshClients} />
                </section>
                <section className='section-admin'>
                    <h4>3)Com o cliente cadastrado, poderá selecioná-lo e cadastrar os relatórios referentes à ele. O email do cliente é o filtro na área de login, cada cliente só poderá ver os relatórios vinculados ao seu email de login</h4>
                    <h1>Adicionar relatórios</h1>
                    <AddReportsForm onReportAdded={handleReportAdded} />
                    {/* <h1>Filtrar relatórios</h1> */}
                    {/* <AsideFilterReports onFilterChange={handleFilterChange} /> */}
                    <h1>Lista de relatórios</h1>
                    <h4>4) Você poderá adicionar, deletar ou editar os relatórios</h4>

                    <ReportsRenderList refresh={refreshReports} />
                </section>
                <section className='section-admin'>
                    <ClientTest />
                </section>

            </div>
        </>
    );
};
