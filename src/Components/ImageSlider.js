
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validateEmail, validateMobile } from '../Utils/validation';
import axios from 'axios';

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    branch: '',
  });

  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const branchOptions = [
    { label: 'SELECT BRANCH', value: '' },
    { label: 'TOPLINE BENGALURU', value: 'TOPLINE BENGALURU' },
    { label: 'BANASHANKARI', value: 'BANASHANKARI' },
    { label: 'RAJA RAJESHWARI NAGAR', value: 'RAJA RAJESHWARI NAGAR' },
  ];

  const branchEmails = {
    'TOPLINE BENGALURU': 'sales@bigwingbengaluru.com',
    'BANASHANKARI': 'bsksales@bigwingbengaluru.com',
    'RAJA RAJESHWARI NAGAR': 'rrnagarsales@bigwingbengaluru.com',
  };


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for mandatory fields
    if (!formData.name || !formData.phone || !formData.branch || !formData.model) {
      alert('Please fill out all mandatory fields: Name, Phone Number, Branch, and Model');
      return;
    }

    // Validate mobile
    if (!validateMobile(formData.phone)) {
      alert('Please enter a valid mobile number.');
      return;
    }

    setIsSubmitting(true);
    const recipientEmail = branchEmails[formData.branch] || 'sales@bigwingbengaluru.com';

    const data = {
      templateType: 'enquiryNow',
      emailSubject: 'Enquiry Request',
      name: formData.name,
      phone: formData.phone,
      branch: formData.branch,
      city: 'BANGALORE',
      to: recipientEmail,
      // to: 'eman.maharana@gmail.com',
      selectedModel: formData.model,
      forEnquiry: 'Yes',
    };

    try {
      // Send email
      const response = await axios.post('https://honda-app-server-422410742420.asia-south1.run.app/api/send-email', data);
      if (response.status === 200) {
        setNotification({ text: 'Form successfully submitted. Email sent.' });
        // Reset form
        setFormData({ name: '', phone: '', model: '', branch: '' });
        // Close the popup
        onClose();
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return isVisible ? (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <form className="form" onSubmit={handleSubmit}>
          <h4>GET IN TOUCH WITH US TODAY!</h4>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Model:</label>
            <select
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            >
              {modelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              {branchOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting.' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

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

