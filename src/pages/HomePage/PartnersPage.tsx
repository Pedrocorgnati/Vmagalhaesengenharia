//src/pages/HomePage/PartnersPage.tsx
//'''
import { useEffect, useState } from 'react';
import { partnersCards } from '../../services/PartnersCards';
import './HomePage.scss';
import { ButtonReturn, HeaderLogin, Footer, Nav } from '../../components';
import { Card } from 'types/types';



export const Partners: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    partnersCards.getCardsList().then(setCards);
  }, []);

  return (
    <>
      <HeaderLogin />
      <Nav />
      <div className="partners-cards-container">
        {cards.map((card, index) => (
          <a key={index} href={card.link} target="_blank" rel="noopener noreferrer">
            <img src={card.image} alt={`Partner ${index + 1}`} />
          </a>
        ))}
      </div>
      <ButtonReturn />
      <Footer />
    </>
  );
};

//'''