import React, { useState } from 'react';
import { HeaderAdmin } from "../../../../components/Header/Header";
import { AsideAdmin } from "../../components/AsideAdmin/AsideAdmin";
import { ClientsRenderList } from "../../components/ClientsRenderList";

export const ClientsAdmPage = () => {
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
          <h1>Lista de clientes</h1>
          <ClientsRenderList refresh={refreshClients} />
        </div>
      </section>
    </>
  );
};
