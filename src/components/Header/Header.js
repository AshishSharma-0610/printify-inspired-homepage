import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <svg width="50" height="50" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="var(--primary-color)" />
                        <path d="M30 70 Q 50 20 70 70" stroke="white" strokeWidth="8" fill="none">
                            <animate attributeName="d"
                                values="M30 70 Q 50 20 70 70;M30 70 Q 50 80 70 70;M30 70 Q 50 20 70 70"
                                dur="2s"
                                repeatCount="indefinite" />
                        </path>
                    </svg>
                    <span>PrintWave</span>
                </div>
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#products">Products</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </nav>
                <div className="header-buttons">
                    <button className="btn btn-secondary">Log in</button>
                    <button className="btn btn-primary">Start Creating</button>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className="menu-icon"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;