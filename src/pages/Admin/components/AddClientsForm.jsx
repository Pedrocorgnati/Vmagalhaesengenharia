import React, { useState } from 'react';
import { clientsService } from '../../../services/ClientsService';
import "../../../components/Buttons/Buttons.scss";
import "../Admin.scss";


export const AddClientsForm = ({ onClientAdded }) => {
    const [client, setClient] = useState({ client: '', name: '', birthday: '', city: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(client).every(field => field)) {
            clientsService.addClient({ ...client, id: generateUniqueId() });
            setClient({ client: '', name: '', birthday: '', city: '' });
            onClientAdded();
        } else {
            alert('Todos os campos são obrigatórios');
        }
    };

    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    return (
        <form className='reports-form' onSubmit={handleSubmit}>
            <div className='div-labelInput'>
                <label>Email do cliente:</label>
                <input
                    type="email"
                    name="client"
                    value={client.client}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='div-labelInput'>
                <label>Nome do cliente:</label>
                <input
                    type="text"
                    name="name"
                    value={client.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='div-labelInput'>
                <label>Data de aniversário:</label>
                <input
                    type="date"
                    name="birthday"
                    value={client.birthday}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='div-labelInput'>
                <label>Cidade do cliente:</label>
                <input
                    type="text"
                    name="city"
                    value={client.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="button-submit">Adicionar Cliente</button>
        </form>
    );
};

const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};
