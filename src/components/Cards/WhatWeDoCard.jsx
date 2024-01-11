import React, { useState, useEffect } from 'react';
import { whatWeDoCards } from '../../services/WhatWeDoCards';
import './WhatWeDoCard.scss';

export const WhatWeDoCard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        whatWeDoCards.getCardsList()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.error('Erro ao carregar cards:', error);
            });
    }, []);

    return (
        <div className="what-we-do-cards">
            {cards.map((card, index) => (
                <div className="what-we-do-card" key={index}>
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.Description}</p>
                </div>
            ))}
        </div>
    );
};
