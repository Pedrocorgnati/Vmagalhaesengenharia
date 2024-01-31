import React from 'react';
import { HeaderAdmin } from "../../components/Header/Header.jsx";
import { AsideAdmin } from './components/AsideAdmin/AsideAdmin.jsx';

export const AdminDashboard = () => {
    return (
        <>
            <HeaderAdmin />
            <AsideAdmin />
            <div className='main-admin'>
                <h1>Bom dia!</h1>
            </div>
        </>
    );
};
