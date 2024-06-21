//'''
// src/pages/Dashboard/components/HomePageManagement/Partners.tsx
import { useState, useEffect } from 'react';
import { partnersService } from '../../../../services/PartnerServices';
import { Partner } from 'types/types';

const Partners: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [newPartner, setNewPartner] = useState<Omit<Partner, 'id'>>({ name: '', link: '', image: '' });

  useEffect(() => {
    const loadPartners = async () => {
      const partnersData = await partnersService.getPartnersList();
      if (partnersData) {
        setPartners(partnersData);
      }
    };
    loadPartners();
  }, []);

  const handleAddPartner = async () => {
    const result = await partnersService.addPartner(newPartner);
    if (result.success && result.data) {
      setPartners([...partners, result.data]);
      setNewPartner({ name: '', link: '', image: '' });
    } else {
      alert('Error adding partner');
    }
  };

  const handleDeletePartner = async (id: string) => {
    const result = await partnersService.deletePartner(id);
    if (result.success) {
      setPartners(partners.filter(partner => partner.id !== id));
    } else {
      alert('Error deleting partner');
    }
  };

  return (
    <div className="partners-management">
      <h2>Manage Partners</h2>
      <div className="add-partner">
        <h3>Add Partner</h3>
        <input
          type="text"
          placeholder="Name"
          value={newPartner.name}
          onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={newPartner.link}
          onChange={(e) => setNewPartner({ ...newPartner, link: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          value={newPartner.image}
          onChange={(e) => setNewPartner({ ...newPartner, image: e.target.value })}
        />
        <button onClick={handleAddPartner}>Add</button>
      </div>
      <div className="partners-list">
        <h3>Partners List</h3>
        <ul>
          {partners.map(partner => (
            <li key={partner.id}>
              <img src={partner.image} alt={partner.name} />
              <span>{partner.name}</span>
              <span>{partner.link}</span>
              <button onClick={() => handleDeletePartner(partner.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
//'''
