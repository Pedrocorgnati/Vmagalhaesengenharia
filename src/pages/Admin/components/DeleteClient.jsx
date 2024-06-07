import React from 'react';
import { clientsService } from '../../../services/ClientsService';

export const DeleteClient = ({ clientId, icon }) => {
  const handleDelete = async () => {
    await clientsService.deleteClient(clientId);
  };

  return (
    <button onClick={handleDelete}>
      {icon && <img src={icon} alt="Excluir" />}
    </button>
  );
};
