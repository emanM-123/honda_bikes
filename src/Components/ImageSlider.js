
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function ImageSlider({ images }) {
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
          <img src={slide} className="slide-img" alt="Slide" />
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

export function FormPopup({ isVisible, onClose }) {
  console.log(isVisible);
  
  const branchOptions = [
    { label: 'SELECT BRANCH', value: '' },
    { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
    { label: 'BANASHANKARI', value: 'BANASHANKARI' },
    { label: 'RAJA RAJESHWARI NAGAR', value: 'RAJA RAJESHWARI NAGAR' },
  ];

  const modelOptions = [
    { label: 'SELECT MODEL', value: '' },
    { label: 'CB300F', value: 'CB300F' },
    { label: 'CB300R', value: 'CB300R' },
    { label: 'CB350', value: 'CB350' },
    { label: 'H’nessCB350', value: 'H’nessCB350' },
    { label: 'CB350RS', value: 'CB350RS' },
    { label: 'NX500', value: 'NX500' },
    { label: 'TRANSALP', value: 'TRANSALP' },
    { label: 'GOLDWING', value: 'GOLDWING' },
  ];

  return isVisible ? (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <form className="form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" required />
          </div>
          <div className="form-group">
            <label>Model:</label>
            <select name="model" required>
              {modelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Branch:</label>
            <select name="branch" required>
              {branchOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  ) : null;
}

FormPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};



export function ContactButton({ onClick }) {
  return (
    <button className="contact-button" onClick={onClick}>
      {/* SVG Icon for Phone */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon phone-icon"
      >
        <path d="M22 16.92V21a2 2 0 0 1-2.18 2c-3.07-.19-9.42-5.22-11.31-7.11S2 7.18 2 4.09A2 2 0 0 1 4 2h4.8a2 2 0 0 1 2 1.72c.12.9.28 1.76.47 2.58a2 2 0 0 1-.45 1.95l-2.17 2.17a16 16 0 0 0 8.84 8.84l2.17-2.17a2 2 0 0 1 1.95-.45c.82.19 1.68.35 2.58.47A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </button>
  );
}

ContactButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

