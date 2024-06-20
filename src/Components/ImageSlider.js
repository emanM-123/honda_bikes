import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ImageSlider({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusDivs = (n) => {
    showDivs(slideIndex + n);
  };

  const currentDiv = (n) => {
    showDivs(n);
  };

  const showDivs = (n) => {
    let newIndex = n;
    if (n >= images.length) {
      newIndex = 0;
    } else if (n < 0) {
      newIndex = images.length - 1;
    }
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusDivs(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex, images]);

  return (
    <div className="slideshow-container">
      {images.map((slide, index) => (
        <div key={index} className={`mySlides ${slideIndex === index ? 'show' : ''}`}>
          <img src={slide} className="slide-img" />
        </div>
      ))}
      <div className="slide-controls">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${slideIndex === i ? 'active' : ''}`}
            onClick={() => currentDiv(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

