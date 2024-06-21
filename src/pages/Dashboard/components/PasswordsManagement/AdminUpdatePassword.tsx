//src/pages/Dashboard/components/PasswordsManagement/AdminUpdatePassword.tsx
//'''
import { useState, useEffect } from 'react';
import { clientsService } from '../../../../services/ClientsService';
import { authService } from '../../../../services/AuthService';
import { Client } from 'types/types';



const AdminUpdatePassword: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const loadClients = async () => {
      const clientsData = await clientsService.getClientsList();
      setClients(clientsData);
    };
    loadClients();
  }, []);

  const handleResetPassword = async () => {
    if (selectedClient && newPassword) {
      const result = await authService.resetPassword(selectedClient, newPassword);
      if (result.success) {
        alert('Senha resetada com sucesso!');
      } else {
        alert('Erro ao resetar a senha.');
      }
    } else {
      alert('Selecione um cliente e insira uma nova senha.');
    }
  };

  return (
    <div className="admin-update-password">
      <h2>Resetar Senha do Cliente</h2>
      <div>
        <label>Selecionar Cliente:</label>
        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
        >
          <option value="">Selecione um cliente</option>
          {clients.map((client) => (
            <option key={client.id} value={client.email}>{client.email}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Nova Senha:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handleResetPassword}>Resetar Senha</button>
    </div>
  );
};

export default AdminUpdatePassword;

//'''
