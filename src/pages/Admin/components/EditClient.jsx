import React, { useState } from 'react';
import { clientsService } from '../../../services/ClientsService';
import "../Admin.scss";

export const EditClient = ({ clientId, onClientUpdated, onClose }) => {
    const [client, setClient] = useState({
        ...clientsService.findClientById(clientId),
        client: "",
        name: "",
        birthday: "",
        city: "",
        initialPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        clientsService.updateClient(clientId, client);
        onClientUpdated();
        onClose();
    };

    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='div-labelInput'>
                <label>Email do Cliente:</label>
                <input
                    type="email"
                    name="client"
                    value={client.client}
                    onChange={handleChange}
                />
            </div>
            <div className='div-labelInput'>
                <label>Nome do cliente:</label>
                <input
                    type="text"
                    name="name"
                    value={client.name}
                    onChange={handleChange}
                />
            </div>
            <div className='div-labelInput'>
                <label>Aniversário:</label>
                <input
                    type="date"
                    name="birthday"
                    value={client.birthday}
                    onChange={handleChange}
                />
            </div>
            <div className='div-labelInput'>
                <label>Cidade do cliente:</label>
                <input
                    type="text"
                    name="city"
                    value={client.city}
                    onChange={handleChange}
                />
            </div>
            <div className='div-labelInput'>
                <label>Senha Inicial:</label>
                <input
                    type="password"
                    name="initialPassword"
                    value={client.initialPassword}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">
                Salvar Alterações
            </button>
        </form>
    );
};
