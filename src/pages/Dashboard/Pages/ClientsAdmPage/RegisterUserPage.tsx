//'''
// src/pages/Admin/Pages/ClientsAdmPage/RegisterUser.tsx
import { useState } from 'react';
import { AddClientsForm } from 'pages/Dashboard/components/UserManagement/AddClientsForm';
import DashboardAside from 'pages/Dashboard/components/DashboardAside/DashboardAside';
import { HeaderAdmin } from 'components';

export const RegisterUserPage: React.FC = () => {
  const [refreshClients, setRefreshClients] = useState(false);

  const handleClientAdded = () => {
    setRefreshClients(prev => !prev);
  };

  return (
    <>
      <HeaderAdmin />
      <DashboardAside role="admin" userLogout={() => {}} />
      <section className='section-admin'>
        <div>
          <h1>Adicionar Usuário</h1>
          <AddClientsForm onClientAdded={handleClientAdded} />
        </div>
      </section>
    </>
  );
};
//'''
