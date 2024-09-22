import React from 'react';
import './Testimonials.css';
import avatar1 from '../../images/avatar1.jpg';
import avatar2 from '../../images/avatar2.jpg';
import avatar3 from '../../images/avatar3.jpg';

function Testimonials() {
    const testimonials = [
        {
            name: 'Emma Collins',
            company: 'Creative Co.',
            quote: 'PrintWave has revolutionized our merchandise production. The quality and ease of use are unmatched!',
            avatar: avatar1,
        },
        {
            name: 'Jane Smith',
            company: 'Design Studio',
            quote: 'I love how quickly I can bring my designs to life with PrintWave. It\'s a game-changer for my business.',
            avatar: avatar2,
        },
        {
            name: 'Sophie Anderson',
            company: 'Tech Startup',
            quote: 'The customer service at PrintWave is exceptional. They\'ve helped us scale our swag production effortlessly.',
            avatar: avatar3,
        },
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Customers Say</h2>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-item">
                            <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                            <blockquote>{testimonial.quote}</blockquote>
                            <cite>
                                {testimonial.name}, <span>{testimonial.company}</span>
                            </cite>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;