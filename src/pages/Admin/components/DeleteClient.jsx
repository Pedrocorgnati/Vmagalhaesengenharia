import React from 'react';
import { clientsService } from '../../../services/ClientsService';

export const DeleteClient = ({ clientId, icon }) => {
    const handleDelete = () => {
        clientsService.deleteClient(clientId);
        console.log("botão clicado");
        console.log(handleDelete);
    };

    return (
        <button onClick={handleDelete}>
            {icon && <img src={icon} alt="Excluir" />}
        </button>
    );
};
