import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import CircularTextReveal from "../Components/CircularTextReveal";
import heroVideo from "../assets/video/istockphoto-1430926947-640_adpp_is.mp4";
import marriage from "../assets/marriage.jpg";
import featuredMarriage from "../assets/marriage-featured.jpg";
import photographer from "../assets/images/photographer.avif"
import "../assets/styles/home.css";

const featuredImages = [marriage, featuredMarriage];

const heroTextVariants = {
    hidden: {},
    visible: {
        transition: { delayChildren: 0.12, staggerChildren: 0.13 },
    },
};

const heroItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const MotionLink = motion.create(Link);

const Home = () => {
    const [featuredImageIndex, setFeaturedImageIndex] = useState(0);
    const heroRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 42]);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setFeaturedImageIndex((currentIndex) => (currentIndex + 1) % featuredImages.length);
        }, 2000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (

        <section className="hero" ref={heroRef}>

            {/* =========================
                BACKGROUND VIDEO
            ========================= */}

            <motion.div
                className="hero-video"
                style={shouldReduceMotion ? undefined : { y: backgroundY, scale: 1.04 }}
            >

                <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                />

            </motion.div>


            {/* =========================
                VIDEO OVERLAY
            ========================= */}

            <div className="hero-overlay"></div>


            {/* =========================
                HERO CONTENT
            ========================= */}

            <div className="hero-content">

                {/* LEFT SIDE */}

                <motion.div
                    className="hero-text"
                    variants={heroTextVariants}
                    initial={shouldReduceMotion ? false : "hidden"}
                    animate="visible"
                >

                    <motion.span className="hero-eyebrow" variants={heroItemVariants}>
                        EST. 2014 • COIMBATORE & KARUR
                    </motion.span>


                    <CircularTextReveal as="h1" variants={heroItemVariants}>
                        Timeless
                        <span> Moments.</span>
                    </CircularTextReveal>


                    <motion.p variants={heroItemVariants}>
                        Capturing genuine emotions, beautiful
                        celebrations and unforgettable moments
                        through cinematic photography.
                    </motion.p>


                    <motion.div className="hero-buttons" variants={heroItemVariants}>

                        <MotionLink
                            className="primary-btn"
                            to="/portfolio"
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        >
                            View Portfolio
                        </MotionLink>

                        <MotionLink
                            className="secondary-btn"
                            to="/contact"
                            whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
                            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        >
                            Book a Session
                        </MotionLink>

                    </motion.div>

                </motion.div>


                {/* RIGHT SIDE */}

                <motion.div
                    className="hero-gallery"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
                >

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
                            src={photographer}
                            alt="Photography"
                        />

                    </div>


                    {/* Decorative circle */}

                    <div className="gallery-circle"></div>

                </motion.div>

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