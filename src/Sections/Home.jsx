import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/video/istockphoto-1430926947-640_adpp_is.mp4";
import marriage from "../assets/marriage.jpg";
import featuredMarriage from "../assets/marriage-featured.jpg";

import "../assets/styles/home.css";

const featuredImages = [marriage, featuredMarriage];

const Home = () => {
    const [featuredImageIndex, setFeaturedImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setFeaturedImageIndex((currentIndex) => (currentIndex + 1) % featuredImages.length);
        }, 2000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (

        <section className="hero">

            {/* =========================
                BACKGROUND VIDEO
            ========================= */}

            <div className="hero-video">

                <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                />

            </div>


            {/* =========================
                VIDEO OVERLAY
            ========================= */}

            <div className="hero-overlay"></div>


            {/* =========================
                HERO CONTENT
            ========================= */}

            <div className="hero-content">

                {/* LEFT SIDE */}

                <div className="hero-text">

                    <span className="hero-eyebrow">
                        EST. 2014 • COIMBATORE & KARUR
                    </span>


                    <h1>
                        Timeless
                        <span> Moments.</span>
                    </h1>


                    <p>
                        Capturing genuine emotions, beautiful
                        celebrations and unforgettable moments
                        through cinematic photography.
                    </p>


                    <div className="hero-buttons">

                        <Link className="primary-btn" to="/portfolio">
                            View Portfolio
                        </Link>

                        <Link className="secondary-btn" to="/contact">
                            Book a Session
                        </Link>

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="hero-gallery">

                    {/* Large frame */}

                    <div className="gallery-frame">

                        <img
                            key={featuredImageIndex}
                            src={featuredImages[featuredImageIndex]}
                            alt="Featured wedding photography"
                        />

                    </div>


                    {/* Small overlapping image */}

                    <div className="gallery-small">

                        <img
                            src={marriage}
                            alt="Photography"
                        />

                    </div>


                    {/* Decorative circle */}

                    <div className="gallery-circle"></div>

                </div>

            </div>


            {/* =========================
                SCROLL INDICATOR
            ========================= */}

            <div className="scroll-indicator">

                <span></span>

                <p>SCROLL TO EXPLORE</p>

            </div>

        </section>

    );
};


export default Home;