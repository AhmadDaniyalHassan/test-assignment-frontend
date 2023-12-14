import React, { useState } from 'react';

const YourComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const cards = [
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
        // Add more cards as needed
    ];

    return (
        <div className="card-carousel-container">
            <button className="arrow-btn" onClick={prevCard}>&lt;</button>
            <div className="card-slide">
                {cards.map((card, index) => (
                    <div key={index} className={`card ${index === currentIndex ? 'active' : ''}`}>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <button className="arrow-btn" onClick={nextCard}>&gt;</button>
        </div>
    );
};

export default YourComponent;
