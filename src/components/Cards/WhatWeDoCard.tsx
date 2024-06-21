//'''
// src/pages/Dashboard/components/Cards/WhatWeDoCard.tsx
import { useState, useEffect } from 'react';
import { WhatWeDoCard as Card } from 'types/types';
import "./WhatWeDoCard.scss";
import { whatWeDoCards } from 'services/WhatWeDoCardsService';

export const WhatWeDoCard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      const cardsData = await whatWeDoCards.getCardsList();
      if (cardsData) {
        setCards(cardsData);
      }
    };
    loadCards();
  }, []);

  return (
    <div className="what-we-do-cards">
      {cards.map(card => (
        <div className="card" key={card._id}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};
//'''
