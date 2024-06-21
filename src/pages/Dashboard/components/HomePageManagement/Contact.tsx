//'''
// src/pages/Dashboard/components/HomePageManagement/Contact.tsx
import { useState } from 'react';
import { homePageService } from '../../../../services/HomePageService';

const Contact: React.FC = () => {
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleUpdateContact = async () => {
    const result = await homePageService.updateContact({ address, contact });
    if (result.success) {
      alert('Contato atualizado com sucesso!');
    } else {
      alert('Erro ao atualizar contato.');
    }
  };

  return (
    <div className="contact-management">
      <h2>Gerenciar Contatos</h2>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Contato:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateContact}>Atualizar</button>
    </div>
  );
};

export default Contact;
//'''
