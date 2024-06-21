//'''
//src/pages/Dashboard/components/UserManagement/UserList.tsx
import React, { useState, useEffect } from 'react';
import { clientsService } from '../../../../services/ClientsService';
import { EditClientModal } from './EditClientModal';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './UserList.scss';
import { Client, ClientsRenderListProps } from 'types/types';
import Table from 'components/Table/Table';
import { orderBy } from 'lodash';

const ClientsRenderList: React.FC<ClientsRenderListProps> = ({ filters }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [sortedClients, setSortedClients] = useState<Client[]>([]);
  const [editModalClientId, setEditModalClientId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Client; direction: 'ascending' | 'descending' }>({ key: 'name', direction: 'ascending' });

  useEffect(() => {
    loadClients();
  }, [filters]);

  useEffect(() => {
    setSortedClients(clients);
  }, [clients]);

  const onClientUpdated = () => {
    loadClients();
  };

  const loadClients = async () => {
    const data = await clientsService.getClientsList();
    let filteredData = data;
    if (filters && filters.city) {
      filteredData = filteredData.filter((client: Client) => client.city === filters.city);
    }
    if (filters && filters.email) {
      filteredData = filteredData.filter((client: Client) => client.email === filters.email);
    }
    setClients(filteredData);
  };

  const handleEditClick = (clientId: string) => {
    setEditModalClientId(clientId);
  };

  const handleDelete = async (clientId: string) => {
    await clientsService.deleteClient(clientId);
    loadClients();
  };

  const handleSort = (key: keyof Client) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
    setSortedClients(orderBy(clients, [key], [direction === 'ascending' ? 'asc' : 'desc']));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = sortedClients.filter((client: Client) =>
    (client.name && client.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (client.email && client.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (client.city && client.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (client.role && client.role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const headers: { key: keyof Client; label: string }[] = [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'city', label: 'Cidade' },
    { key: 'role', label: 'Tipo' },
    { key: '_id', label: 'Ações' },
  ];

  const renderRow = (client: Client) => (
    <tr key={client._id}>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.city}</td>
      <td>{client.role}</td>
      <td className="user-actions">
        <button className="actionIcon" onClick={() => handleEditClick(client._id)}>
          <FaEdit />
        </button>
        <button className="actionIcon" onClick={() => handleDelete(client._id)}>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );

  return (
    <div className='user-render-list'>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <Table
        headers={headers}
        data={filteredClients}
        onSort={handleSort}
        sortConfig={sortConfig}
        renderRow={renderRow}
      />
      {editModalClientId && <EditClientModal clientId={editModalClientId} onClose={() => setEditModalClientId(null)} onClientUpdated={onClientUpdated} />}
    </div>
  );
};

export default ClientsRenderList;
//’’’
