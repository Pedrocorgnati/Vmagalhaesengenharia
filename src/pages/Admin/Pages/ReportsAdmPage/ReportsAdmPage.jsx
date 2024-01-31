import React, { useState } from 'react';
import { HeaderAdmin } from "../../../../components/Header/Header"
import { AsideAdmin } from "../../components/AsideAdmin/AsideAdmin"
import { AddReportsForm } from "../../components/AddReportsForm";
import { ReportsRenderList } from "../../components/ReportsRenderList";

export const ReportsAdmPage = () => {
    const [refreshReports, setRefreshReports] = useState(false);

    const handleReportAdded = () => {
        setRefreshReports(prev => !prev);
    };

    return (
        <>
            <HeaderAdmin />
            <AsideAdmin />
            <section className='section-admin'>
                <div>
                    <h1>Adicionar relatórios</h1>
                    <AddReportsForm onReportAdded={handleReportAdded} />
                </div>
                <div>
                    <h1>Lista de relatórios</h1>
                    <ReportsRenderList refresh={refreshReports} />
                </div>
            </section>
        </>
    )
}
