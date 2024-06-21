//'''
// src/pages/Dashboard/components/UserManagement/EditClientModal.tsx
import { useEffect } from 'react';
import { EditClient } from './EditClient';
import { EditClientModalProps } from 'types/types';

export const EditClientModal: React.FC<EditClientModalProps> = ({ clientId, onClose, onClientUpdated }) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!clientId) return null;

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <EditClient clientId={clientId} onClientUpdated={onClientUpdated} onClose={onClose} />
      </div>
    </div>
  );
};
//'''
