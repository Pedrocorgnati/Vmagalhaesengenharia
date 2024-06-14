import React, { useState } from 'react';
import { HeaderAdmin } from "../../../../components/Header/Header"
import { AsideAdmin } from "../../components/AsideAdmin/AsideAdmin"
import { ReportsRenderList } from "../../components/ReportsRenderList";

export const ReportsList = () => {
    const [refreshReports, setRefreshReports] = useState(false);



    return (
        <>
            <HeaderAdmin />
            <AsideAdmin />
            <section className='section-admin'>
                <div>
                    <h1>Lista de relatórios</h1>
                    <ReportsRenderList refresh={refreshReports} />
                </div>
            </section>
        </>
    )
}
