import React, { useEffect, useState } from 'react';
import { partnersCards } from '../../services/PartnersCards';
import '../HomePage/HomePage.scss';
import { ButtonReturn, HeaderLogin, Footer, Nav } from '../../components';

export const Partners = () => {
    const [cards, setCards] = useState([]);

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