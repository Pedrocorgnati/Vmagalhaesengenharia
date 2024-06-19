//src/pages/Admin/AdminDashboard.jsx'''
import React from 'react';
import { AsideAdmin } from './components/AsideAdmin/AsideAdmin.jsx';

export const AdminDashboard = ({ userLogout }) => {
    return (
        <>
            <AsideAdmin userLogout={userLogout} />
            <div className='main-admin'>
                <h1>Bom dia!</h1>
            </div>
        </>
    );
};

export default AdminDashboard;
//'''