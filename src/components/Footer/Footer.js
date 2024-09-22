import React from 'react';
import './Footer.css';
import facebookLogo from '../../images/facebook-logo.svg';
import twitterLogo from '../../images/twitter-logo.svg';
import instagramLogo from '../../images/instagram-logo.svg';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>PrintWave</h3>
                    <p>Make Money, Risk-Free</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#design-lab">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Connect</h4>
                    <ul className="social-links">
                        <li><a href="#" aria-label="Facebook"><img src={facebookLogo} alt="Facebook" /></a></li>
                        <li><a href="#" aria-label="Twitter"><img src={twitterLogo} alt="Twitter" /></a></li>
                        <li><a href="#" aria-label="Instagram"><img src={instagramLogo} alt="Instagram" /></a></li>

                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 PrintWave. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
