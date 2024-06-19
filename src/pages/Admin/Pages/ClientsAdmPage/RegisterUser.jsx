//src/pages/Admin/Pages/ClientsAdmPage/RegisterUser.jsx
//'''
import React, { useState } from 'react';
import { HeaderAdmin } from "../../../../components/Header/Header";
import { AsideAdmin } from "../../components/AsideAdmin/AsideAdmin";
import { AddClientsForm } from "../../components/AddClientsForm";

export const RegisterUser = () => {
  const [refreshClients, setRefreshClients] = useState(false);

  const handleClientAdded = () => {
    setRefreshClients(prev => !prev);
  };

  return (
    <>
      <HeaderAdmin />
      <AsideAdmin />
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