//'''
// src/pages/Dashboard/components/HomePageManagement/Services.tsx
import { useState, useEffect } from 'react';
import { whatWeDoCards } from '../../../../services/WhatWeDoCardsService';
import { ServiceCard } from 'types/types';

const Services: React.FC = () => {
  const [cards, setCards] = useState<ServiceCard[]>([]);
  const [newCard, setNewCard] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    const loadCards = async () => {
      const cardsData = await whatWeDoCards.getCardsList();
      setCards(cardsData as ServiceCard[]);
    };
    loadCards();
  }, []);

  const handleAddCard = async () => {
    const result = await whatWeDoCards.addCard(newCard);
    if (result.success && result.data) {
      setCards([...cards, result.data as ServiceCard]);
      setNewCard({ title: '', description: '', image: '' });
    } else {
      alert('Error adding service');
    }
  };

  const handleDeleteCard = async (id: string) => {
    const result = await whatWeDoCards.deleteCard(id);
    if (result.success) {
      setCards(cards.filter(card => card.id !== id));
    } else {
      alert('Error deleting service');
    }
  };

  return (
    <div className="services-management">
      <h2>Manage Services</h2>
      <div className="add-service">
        <h3>Add Service</h3>
        <input
          type="text"
          placeholder="Title"
          value={newCard.title}
          onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newCard.description}
          onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          value={newCard.image}
          onChange={(e) => setNewCard({ ...newCard, image: e.target.value })}
        />
        <button onClick={handleAddCard}>Add</button>
      </div>
      <div className="services-list">
        <h3>Services List</h3>
        <ul>
          {cards.map(card => (
            <li key={card.id}>
              <img src={card.image} alt={card.title} />
              <span>{card.title}</span>
              <span>{card.description}</span>
              <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
//'''
