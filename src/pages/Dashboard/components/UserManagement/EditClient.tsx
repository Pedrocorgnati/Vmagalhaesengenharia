//'''
// src/pages/Dashboard/components/UserManagement/EditClient.tsx
import { useState, useEffect } from 'react';
import { clientsService } from '../../../../services/ClientsService';
import { EditClientProps, EditClientType, Client } from 'types/types';

export const EditClient: React.FC<EditClientProps> = ({ clientId, onClientUpdated, onClose }) => {
  const [client, setClient] = useState<EditClientType | null>(null);

  useEffect(() => {
    const fetchClient = async () => {
      const clientData: Client | null = await clientsService.findClientById(clientId);
      if (clientData) {
        setClient({
          client: clientData.email,
          name: clientData.name,
          city: clientData.city,
          initialPassword: '' // or some default value if necessary
        });
      }
    };
    fetchClient();
  }, [clientId]);

  if (!client) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await clientsService.updateClient(clientId, client);
    onClientUpdated();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
//'''
