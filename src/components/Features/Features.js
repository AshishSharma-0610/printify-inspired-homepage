import React from 'react';
import './Features.css';

function Features() {
    const features = [
        {
            icon: '🎨',
            title: 'Easy Design Tools',
            description: 'Create stunning designs with our user-friendly tools'
        },
        {
            icon: '📦',
            title: '450+ Products',
            description: 'Choose from our vast catalog of customizable products'
        },
        {
            icon: '⚡',
            title: 'Quick Setup',
            description: 'Get your store up and running in minutes'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="features-container">
                <h2 className="section-title">Why Choose PrintWave</h2>
                <div className="feature-list">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;