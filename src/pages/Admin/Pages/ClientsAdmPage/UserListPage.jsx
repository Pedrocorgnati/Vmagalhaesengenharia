import React from 'react';
import { AsideAdmin } from '../../components/AsideAdmin/AsideAdmin';
import ClientsRenderList from '../../components/UserList';

const UserListPage = () => {
  return (
    <div className="user-list-page">
      <AsideAdmin />
      <div className="main-content">
        <h1>Lista de Usuários</h1>
        <ClientsRenderList />
      </div>
    </div>
  );
};

export default UserListPage;
