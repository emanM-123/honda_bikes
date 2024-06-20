

import React, { useState } from 'react';
import '../Styles/feature_slider.css';
const FeaturesSlider = ({ features }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? features.length - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => (prevSlide === features.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="features-slider">
            <div className="slider-container">
                <div class="slide_arrow prev" onClick={handlePrevClick}></div>

                <div className="slide active">
                    <img
                        src={features[currentSlide].image}
                        alt="feature"
                        className="feature-image"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="description">
                        <span className="title" style={{ fontWeight: "bold" }}>{features[currentSlide].title}:-</span><br />
                        {features[currentSlide].description}
                    </div>
                </div>
                <div class="slide_arrow next" onClick={handleNextClick}></div>
            </div>
        </div >
    );
};

export default FeaturesSlider;

