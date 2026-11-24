import React from "react";
import "../assets/styles/services.css";


import wedding from "../assets/images/wedding.jpg";
import portrait from "../assets/images/portrait.jpg";
import event from "../assets/images/event.jpg";
import lifestyle from "../assets/images/lifestyle.jpg";


const Services = () => {
    return (
        <section className="service-section">

            {/* ========================= */}
            {/* SECTION HEADING */}
            {/* ========================= */}

            <div className="services-headings">

                <h4>Services</h4>

                <h3 className="section-title">
                    Tailored to
                    <span> your story.</span>
                </h3>

                <p>
                    From intimate moments to grand celebrations,
                    every story deserves to be captured beautifully.
                </p>

            </div>


            {/* ========================= */}
            {/* SERVICES */}
            {/* ========================= */}

            <div className="container service-container">


                {/* ========================= */}
                {/* SERVICE 01 */}
                {/* ========================= */}

                <div className="service-card">

                    <div className="row g-0 align-items-stretch">

                        <div className="col-12 col-lg-6 image-section">

                            <div className="image-wrapper">

                                <img
                                    src={wedding}
                                    alt="Wedding photography"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="image-overlay"></div>

                                <span className="service-number">
                                    01
                                </span>

                                <span className="image-label">
                                    WEDDINGS
                                </span>

                            </div>

                        </div>


                        <div className="col-12 col-lg-6 text-section">

                            <div className="service-content">

                                <span className="service-category">
                                    WEDDING STORIES
                                </span>

                                <h4>
                                    Wedding Photography
                                </h4>

                                <p>
                                    Comprehensive coverage of your special
                                    day, capturing every emotion, detail,
                                    and unforgettable moment from preparation
                                    to the final dance.
                                </p>


                                <ul>

                                    <li>
                                        <span>01</span>
                                        Full-day coverage options
                                    </li>

                                    <li>
                                        <span>02</span>
                                        Second photographer included
                                    </li>

                                    <li>
                                        <span>03</span>
                                        Custom heirloom albums
                                    </li>

                                </ul>


                                <button className="service-link">
                                    Explore Service
                                    <span>→</span>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>



                {/* ========================= */}
                {/* SERVICE 02 */}
                {/* ========================= */}

                <div className="service-card reverse">

                    <div className="row g-0 align-items-stretch">

                        <div className="col-12 col-lg-6 text-section">

                            <div className="service-content">

                                <span className="service-category">
                                    PORTRAIT STORIES
                                </span>

                                <h4>
                                    Portrait Sessions
                                </h4>

                                <p>
                                    Elegant and authentic portraiture that
                                    reflects your true essence, whether for
                                    personal branding, engagement, or fine
                                    art maternity.
                                </p>


                                <ul>

                                    <li>
                                        <span>01</span>
                                        Studio or on-location
                                    </li>

                                    <li>
                                        <span>02</span>
                                        Styling consultation
                                    </li>

                                    <li>
                                        <span>03</span>
                                        High-resolution digital files
                                    </li>

                                </ul>


                                <button className="service-link">
                                    Explore Service
                                    <span>→</span>
                                </button>

                            </div>

                        </div>


                        <div className="col-12 col-lg-6 image-section">

                            <div className="image-wrapper">

                                <img
                                    src={portrait}
                                    alt="Portrait photography"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="image-overlay"></div>

                                <span className="service-number">
                                    02
                                </span>

                                <span className="image-label">
                                    PORTRAITS
                                </span>

                            </div>

                        </div>

                    </div>

                </div>



                {/* ========================= */}
                {/* SERVICE 03 */}
                {/* ========================= */}

                <div className="service-card">

                    <div className="row g-0 align-items-stretch">

                        <div className="col-12 col-lg-6 image-section">

                            <div className="image-wrapper">

                                <img
                                    src={event}
                                    alt="Event photography"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="image-overlay"></div>

                                <span className="service-number">
                                    03
                                </span>

                                <span className="image-label">
                                    EVENTS
                                </span>

                            </div>

                        </div>


                        <div className="col-12 col-lg-6 text-section">

                            <div className="service-content">

                                <span className="service-category">
                                    EVENT STORIES
                                </span>

                                <h4>
                                    Event Coverage
                                </h4>

                                <p>
                                    Discreet and artistic documentation of
                                    private parties, galas, and corporate
                                    events, focusing on atmosphere and
                                    candid interactions.
                                </p>


                                <ul>

                                    <li>
                                        <span>01</span>
                                        Hourly coverage rates
                                    </li>

                                    <li>
                                        <span>02</span>
                                        Fast turnaround time
                                    </li>

                                    <li>
                                        <span>03</span>
                                        Online sharing gallery
                                    </li>

                                </ul>


                                <button className="service-link">
                                    Explore Service
                                    <span>→</span>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>



                {/* ========================= */}
                {/* SERVICE 04 */}
                {/* ========================= */}

                <div className="service-card reverse">

                    <div className="row g-0 align-items-stretch">

                        <div className="col-12 col-lg-6 text-section">

                            <div className="service-content">

                                <span className="service-category">
                                    LIFESTYLE STORIES
                                </span>

                                <h4>
                                    Lifestyle Storytelling
                                </h4>

                                <p>
                                    Relaxed, unposed sessions capturing the
                                    beauty of everyday life, perfect for
                                    families, newborns, and couples.
                                </p>


                                <ul>

                                    <li>
                                        <span>01</span>
                                        Natural light focus
                                    </li>

                                    <li>
                                        <span>02</span>
                                        Documentary approach
                                    </li>

                                    <li>
                                        <span>03</span>
                                        Printed art option
                                    </li>

                                </ul>


                                <button className="service-link">
                                    Explore Service
                                    <span>→</span>
                                </button>

                            </div>

                        </div>


                        <div className="col-12 col-lg-6 image-section">

                            <div className="image-wrapper">

                                <img
                                    src={lifestyle}
                                    alt="Lifestyle photography"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="image-overlay"></div>

                                <span className="service-number">
                                    04
                                </span>

                                <span className="image-label">
                                    LIFESTYLE
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Services;
