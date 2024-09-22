import React from 'react';
import './Hero.css';
import HeroTshirt from '../../images/HeroTshirt.jpg'
import HeroCap from '../../images/HeroCap.jpg'
import HeroPhoneCase from '../../images/HeroPhoneCase.jpg'
import HeroHoodie from '../../images/HeroHoodie.jpg'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Unleash Your Creativity with PrintWave</h1>
                <p>Design and sell custom products with our platform</p>
                <button className="btn btn-primary btn-large">Start Your Journey</button>
            </div>
            <div className="hero-showcase">
                <div className="product-carousel">
                    <div className="product-item" style={{ '--i': 1 }}>
                        <img src={HeroTshirt} alt="T-Shirt" />
                    </div>
                    <div className="product-item" style={{ '--i': 2 }}>
                        <img src={HeroCap} alt="Cap" />
                    </div>
                    <div className="product-item" style={{ '--i': 3 }}>
                        <img src={HeroPhoneCase} alt="Phone Case" />
                    </div>
                    <div className="product-item" style={{ '--i': 4 }}>
                        <img src={HeroHoodie} alt="Hoodie" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;