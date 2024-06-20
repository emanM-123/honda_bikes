import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function BikeSlider({ images , onSlideChange}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const plusDivs = (n) => {
    const newIndex = (slideIndex + n + images.length) % images.length;
    showDivs(newIndex);
    onSlideChange && onSlideChange(images[newIndex].id);

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

  const handleNextSlideClick = () => {
    plusDivs(1);
  };

  const handlePrevSlideClick = () => {
    plusDivs(-1);
  };

  return (
    <div className="slideshow-container">
      <div className="slider-wrapper1">
        <div className="prev-slide" onClick={handlePrevSlideClick}>
          <img src={images[(slideIndex - 1 + images.length) % images.length].image} alt="Previous Slide" />
        </div>
        <div className="current-slide" >
          <p>{images[slideIndex].modelName}</p>
          <img src={images[slideIndex].image} alt="Current Slide" />
          <span>{images[slideIndex].modelName}</span>
        </div>
        <div className="next-slide" onClick={handleNextSlideClick}>
          <img src={images[(slideIndex + 1) % images.length].image} alt="Next Slide"/>
        </div>
      </div>
    </div>
  );
}

BikeSlider.propTypes = {  
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    modelName: PropTypes.string.isRequired,
  })).isRequired,
  onSlideChange: PropTypes.func
};
