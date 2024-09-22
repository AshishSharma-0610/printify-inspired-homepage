import React, { useState } from 'react';
import './DesignInspiration.css';
import MinimalistTee from '../../images/MinimalistTee.jpg';
import Poster from '../../images/Poster.jpg';
import PhoneCase from '../../images/PhoneCase.jpg';
import GamingTee from '../../images/GamingTee.jpg';
import QuoteMug from '../../images/QuoteMug.jpg';

function DesignInspiration() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'T-Shirts', 'Mugs', 'Posters', 'Phone Cases'];

    const designs = [
        { id: 1, title: 'Minimalist Logo Tee', category: 'T-Shirts', image: MinimalistTee },
        { id: 2, title: 'Comic Poster', category: 'Posters', image: Poster },
        { id: 3, title: 'Solid Phone Case', category: 'Phone Cases', image: PhoneCase },
        { id: 4, title: 'Retro Gaming Tee', category: 'T-Shirts', image: GamingTee },
        { id: 5, title: 'Quote Mug', category: 'Mugs', image: QuoteMug },
    ];

    const filteredDesigns = activeCategory === 'All'
        ? designs
        : designs.filter(design => design.category === activeCategory);

    return (
        <section className="design-inspiration" id="inspiration">
            <div className="container">
                <h2 className="section-title">Design Inspiration</h2>
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="design-grid">
                    {filteredDesigns.map(design => (
                        <div key={design.id} className="design-item">
                            <img src={design.image} alt={design.title} />
                            <h3>{design.title}</h3>
                            <p>{design.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DesignInspiration;