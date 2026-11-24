import React, { useState } from "react";
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

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

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
                    selectedImage ? "marquee-paused" : ""
                }`}
            >

                {/* ROW 1 */}
                <div className="marquee-row row1">

                    <div className="marquee-track">

                        {[...images, ...images].map((image, index) => (
                            <div
    className="portfolio-image"
    onClick={() => handleImageClick(image)}
>
    <img
        src={image}
        alt={`Portfolio ${index + 1}`}
        loading="lazy"
        decoding="async"
    />

    <span className="photo-number">
        {String((index % images.length) + 1).padStart(2, "0")}
    </span>

    <span className="view-photo">
        View Photo
    </span>

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
                                onClick={() => handleImageClick(image)}
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

            {selectedImage && (
                <div
                    className="image-lightbox"
                    onClick={closeImage}
                >

                    <div
                        className="zoomed-image-wrapper"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="close-button"
                            onClick={closeImage}
                            aria-label="Close image"
                        >
                            &times;
                        </button>

                        <img
                            src={selectedImage}
                            alt="Selected portfolio"
                        />

                    </div>

                </div>
            )}

        </section>
    );
};

export default Portfolio;
