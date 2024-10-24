import React from 'react';
import './About.css'; // Assuming you have an About.css file for styles

function About() {
    return (
        <main className="about-main">
            <section className="intro">
                <h1>Welcome to Our Company</h1>
                <p>
                    Our company is dedicated to providing the best products and services to our customers. We believe in quality, innovation, and customer satisfaction. Our team is composed of talented and passionate individuals who work tirelessly to meet and exceed your expectations.
                </p>
            </section>
            <section className="values">
                <h2>Our Values</h2>
                <div className="value-item">
                    <h3>Quality</h3>
                    <p>We ensure the highest standards in everything we do, from products to customer service.</p>
                </div>
                <div className="value-item">
                    <h3>Innovation</h3>
                    <p>We are committed to bringing new and creative solutions to the market.</p>
                </div>
                <div className="value-item">
                    <h3>Customer Satisfaction</h3>
                    <p>Our customers are at the heart of our business, and their satisfaction is our top priority.</p>
                </div>
            </section>
           
        </main>
    );
}

export default About;
