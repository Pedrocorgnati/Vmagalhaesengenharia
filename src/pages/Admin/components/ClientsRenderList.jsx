import React, { useState, useEffect } from 'react';
import { clientsService } from '../../../services/ClientsService';
import { EditClientModal } from './EditClientModal';
import editIcon from "../../../Assets/Icons/edit.svg";
import deleteIcon from "../../../Assets/Icons/delete.svg";
import "../Admin.scss";

export const ClientsRenderList = ({ filters }) => {
    const [clients, setClients] = useState([]);
    const [editModalClientId, setEditModalClientId] = useState(null);

    useEffect(() => {
        loadClients();
    }, [filters]);
    const onClientUpdated = () => {
        loadClients();
    };
    const loadClients = () => {
        clientsService.getClientsList().then(data => {
            let filteredData = data;
            if (filters && filters.city) {
                filteredData = filteredData.filter(client => client.city === filters.city);
            }
            if (filters && filters.client) {
                filteredData = filteredData.filter(client => client.client === filters.client);
            }
            setClients(filteredData);
        });
    };

    const handleEditClick = (clientId) => {
        setEditModalClientId(clientId);
    };

    const handleDelete = (clientId) => {
        clientsService.deleteClient(clientId);
        loadClients();
    };

    return (
        <div className='client-render-list'>
            {clients.map(client => (
                <div key={client.id} className="client-item">
                    <div className="client-theme">
                        <h2 className='client-title'>{client.name}</h2>
                        <div className="client-info">
                            <p>Cliente: {client.client}</p>
                            <p>Aniversário: {new Date(client.birthday).toLocaleDateString()}</p>
                            <p>Cidade: {client.city}</p>
                        </div>
                    </div>
                    <div className='client-icons'>
                        <button className="actionIcon" onClick={() => handleEditClick(client.id)}>
                            <img src={editIcon} alt="Editar" />
                        </button>
                        <button className="actionIcon" onClick={() => handleDelete(client.id)}>
                            <img src={deleteIcon} alt="Excluir" />
                        </button>
                    </div>
                </div>
            ))}
            {editModalClientId && <EditClientModal clientId={editModalClientId} onClose={() => setEditModalClientId(null)} onClientUpdated={onClientUpdated} />
            }
        </div>
    );
};

export default ClientsRenderList;