//'''
// src/pages/Dashboard/components/UserManagement/DeleteClient.tsx
import { clientsService } from '../../../../services/ClientsService';
import { DeleteClientProps } from 'types/types';

export const DeleteClient: React.FC<DeleteClientProps> = ({ clientId, icon }) => {
  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja deletar este cliente?')) {
      await clientsService.deleteClient(clientId);
      window.location.reload(); // Reload the page to reflect the changes
    }
  };

  return (
    <button onClick={handleDelete}>
      {icon && <img src={icon} alt="Excluir" />}
    </button>
  );
};
//'''
