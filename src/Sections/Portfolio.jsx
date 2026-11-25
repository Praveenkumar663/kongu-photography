import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/portfolio.css";

import image1 from "../assets/marriage.jpg"
import image2 from "../assets/marriage.jpg";
import image3 from "../assets/marriage.jpg";
import image4 from "../assets/marriage.jpg";
import image5 from "../assets/marriage.jpg";
import image6 from "../assets/marriage.jpg";
import image7 from "../assets/marriage.jpg";
import image8 from "../assets/marriage.jpg";

const Portfolio = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const closeTimer = useRef(null);

    const handleImageClick = (index) => {
        window.clearTimeout(closeTimer.current);
        setIsClosing(false);
        setSelectedIndex(index % images.length);
    };

    const closeImage = () => {
        if (selectedIndex === null || isClosing) return;
        setIsClosing(true);
        closeTimer.current = window.setTimeout(() => {
            setSelectedIndex(null);
            setIsClosing(false);
        }, 280);
    };

    const showPreviousImage = () => {
        setSelectedIndex((index) => (index - 1 + images.length) % images.length);
    };

    const showNextImage = () => {
        setSelectedIndex((index) => (index + 1) % images.length);
    };

    useEffect(() => {
        if (selectedIndex === null) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeImage();
            if (event.key === "ArrowLeft") showPreviousImage();
            if (event.key === "ArrowRight") showNextImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, isClosing]);

    useEffect(() => () => window.clearTimeout(closeTimer.current), []);

    return (
        <section className="portfolio-section">

            <div className="portfolio-heading">
                <h4>PORTFOLIO</h4>

                <h3 className="section-title">
                    Stories told through
                    <span> the images.</span>
                </h3>
            </div>


            <div
                className={`images-marques ${
                    selectedIndex !== null ? "marquee-paused" : ""
                }`}
            >

                {/* ROW 1 */}
                <div className="marquee-row row1">

                    <div className="marquee-track">

                        {[...images, ...images].map((image, index) => (
                            <div
                                className="portfolio-image"
                                key={`row1-${index}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Portfolio ${(index % images.length) + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />

                                <span className="photo-number">
                                    {String((index % images.length) + 1).padStart(2, "0")}
                                </span>

                                <span className="view-photo">View Photo</span>
                                <span className="corner corner-top-left"></span>
                                <span className="corner corner-bottom-right"></span>
                            </div>
                        ))}

                    </div>

                </div>


                {/* ROW 2 */}
                <div className="marquee-row row2">

                    <div className="marquee-track">

                        {[...images, ...images].map((image, index) => (
                            <div
                                className="portfolio-image"
                                key={`row2-${index}`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Portfolio ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}

                    </div>

                </div>

            </div>


            {/* ZOOMED IMAGE */}

            {selectedIndex !== null && (
                <div
                    className={`image-lightbox${isClosing ? " is-closing" : ""}`}
                    onClick={closeImage}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Portfolio image preview"
                >

                    <div
                        className="zoomed-image-wrapper"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button className="close-button" onClick={closeImage} aria-label="Close image">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <button
                            className="lightbox-nav lightbox-prev"
                            onClick={showPreviousImage}
                            aria-label="Previous image"
                        >
                            <i className="bi bi-chevron-left" aria-hidden="true" />
                        </button>

                        <img
                            key={selectedIndex}
                            src={images[selectedIndex]}
                            alt={`Portfolio image ${selectedIndex + 1}`}
                        />

                        <button
                            className="lightbox-nav lightbox-next"
                            onClick={showNextImage}
                            aria-label="Next image"
                        >
                            <i className="bi bi-chevron-right" aria-hidden="true" />
                        </button>

                        <span className="lightbox-counter" aria-live="polite">
                            {String(selectedIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                        </span>

                    </div>

                </div>
            )}

        </section>
    );
};

export default Portfolio;
