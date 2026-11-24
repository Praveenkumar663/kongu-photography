import React from "react";
import "../assets/styles/testimonials.css";

const testimonials = [
    {
        name: "Sarah & Michael",
        category: "WEDDING",
        text: "Every moment felt natural and beautiful. The photographs brought our memories back to life.",
    },
    {
        name: "Emma & James",
        category: "DESTINATION ELOPEMENT",
        text: "Working with Aurelia was an absolute dream. Every detail was thoughtful, warm and timeless.",
    },
    {
        name: "Elena R.",
        category: "PORTRAIT SESSION",
        text: "The entire experience was effortless. The final images felt authentic and full of emotion.",
    },
];

const Testimonials = () => (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
        <header className="testimonials-heading">
            <p className="testimonials-eyebrow">Kind Words</p>
            <h2 id="testimonials-title" className="section-title">Stories from the heart</h2>
        </header>

        <div className="testimonials-grid">
            {testimonials.map(({ name, category, text }) => (
                <article className="testimonial-card" key={name}>
                    <span className="testimonial-quote" aria-hidden="true">“</span>
                    <div className="testimonial-stars" aria-label="5 out of 5 stars">{String.fromCharCode(9733).repeat(5)}</div>
                    <blockquote>{text}</blockquote>
                    <footer className="testimonial-credit">
                        <span className="testimonial-client">{name}</span>
                        <span className="testimonial-category">{category}</span>
                    </footer>
                </article>
            ))}
        </div>
    </section>
);

export default Testimonials;


