//src/pages/Admin/components/ClientsRenderList.jsx
//'''
import React, { useState, useEffect } from 'react';
import { clientsService } from '../../../services/ClientsService';
import { EditClientModal } from '../components/EditClientModal';
import editIcon from "../../../Assets/Icons/edit.svg";
import deleteIcon from "../../../Assets/Icons/delete.svg";
import sortIcon from "../../../Assets/Icons/sort.svg";
import './UserList.scss'; // Importa o CSS para estilizar

const ClientsRenderList = ({ filters }) => {
  const [clients, setClients] = useState([]);
  const [sortedClients, setSortedClients] = useState([]);
  const [editModalClientId, setEditModalClientId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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
      filteredData = filteredData.filter(client => client.city === filters.city);
    }
    if (filters && filters.email) {
      filteredData = filteredData.filter(client => client.email === filters.email);
    }
    setClients(filteredData);
  };

  const handleEditClick = (clientId) => {
    setEditModalClientId(clientId);
  };

  const handleDelete = async (clientId) => {
    await clientsService.deleteClient(clientId);
    loadClients();
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setSortedClients(sortedClients.slice().sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = sortedClients.filter(client =>
    (client.name && client.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (client.email && client.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (client.city && client.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (client.role && client.role.toLowerCase().includes(searchTerm.toLowerCase()))
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
      <table className="user-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Nome <img src={sortIcon} alt="Sort" className="sort-icon" />
            </th>
            <th onClick={() => handleSort('email')}>
              Email <img src={sortIcon} alt="Sort" className="sort-icon" />
            </th>
            <th onClick={() => handleSort('city')}>
              Cidade <img src={sortIcon} alt="Sort" className="sort-icon" />
            </th>
            <th onClick={() => handleSort('role')}>
              Tipo <img src={sortIcon} alt="Sort" className="sort-icon" />
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(client => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.city}</td>
              <td>{client.role}</td>
              <td className="user-actions">
                <button className="actionIcon" onClick={() => handleEditClick(client._id)}>
                  <img src={editIcon} alt="Editar" />
                </button>
                <button className="actionIcon" onClick={() => handleDelete(client._id)}>
                  <img src={deleteIcon} alt="Excluir" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editModalClientId && <EditClientModal clientId={editModalClientId} onClose={() => setEditModalClientId(null)} onClientUpdated={onClientUpdated} />}
    </div>
  );
};

export default ClientsRenderList;


//'''
