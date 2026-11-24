import React from "react";
import "../assets/styles/process.css";

const steps = [
    {
        number: "01",
        title: "Inquiry",
        description: "Reach out via the contact form to check availability and share your vision.",
    },
    {
        number: "02",
        title: "Planning",
        description: "We'll connect to discuss details, styling, and create a custom timeline.",
    },
    {
        number: "03",
        title: "Session Day",
        description: "Relax and enjoy the experience while I gently guide you through the process.",
    },
    {
        number: "04",
        title: "Gallery Delivery",
        description: "Receive your beautifully curated and edited online gallery to share and cherish.",
    },
];

const Process = () => (
    <section className="process-section" aria-labelledby="process-title">
        <div className="process-heading">
            <h2 id="process-title">Process</h2>
            <p>Simple, relaxed, and thoughtfully guided</p>
        </div>

        <ol className="process-steps">
            {steps.map(({ number, title, description }) => (
                <li className="process-step" key={number}>
                    <span className="process-number" aria-hidden="true">{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </li>
            ))}
        </ol>
    </section>
);

export default Process;
