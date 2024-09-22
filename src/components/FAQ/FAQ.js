import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How does print-on-demand work?',
            answer: 'Print-on-demand allows you to create custom products without holding inventory. When a customer places an order, we print and ship the product directly to them.',
        },
        {
            question: 'What types of products can I customize?',
            answer: 'We offer a wide range of customizable products including t-shirts, hoodies, mugs, phone cases, posters, and more. Check our product catalog for the full list.',
        },
        {
            question: 'How long does shipping take?',
            answer: 'Shipping times vary depending on the product and destination. Typically, orders are processed within 3-5 business days and shipped within 1-2 weeks.',
        },
        {
            question: 'Can I use my own designs?',
            answer: 'You can upload your own designs or use our design tools to create custom products.',
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">{faq.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;