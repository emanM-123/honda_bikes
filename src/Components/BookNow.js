import React, { useEffect, useState } from 'react';
import { bikeSDetails } from "../data/bannerImages";
import Card from "./Card";
import { Specification } from "./Specification";
import EnquiryNow from "./EnquiryNow";
import TestRide from "./TestRide";
import Features from "./Features";
import { useLocation } from "react-router-dom";

const BookNow = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id') || '1';
  const selectedBike = bikeSDetails.find(bike => bike.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState(selectedBike.variants[0]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedVariantName, setSelectedVariantName] = useState('');
  const [activeTab, setActiveTab] = useState('engine');

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
    setSelectedColor(variant.colors[0]);
    setSelectedVariantName(variant.name);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  }

  const { modelName, variants } = selectedBike;
  useEffect(() => {
    if (variants.length > 0) {
      setSelectedVariant(variants[0]);
      setSelectedColor(variants[0].colors[0]);
      setSelectedVariantName(variants[0].name);
    }
  }, [variants]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='slideshow-container'>
      <div className='book-container'>
        <div className='varient-name'>
          <ul>
            {variants.map(variant => (
              variant.name && <li style={{paddingTop:'10px'}} key={variant.name} onClick={() => handleVariantClick(variant)}>{variant.name}</li>
            ))}
          </ul>
        </div>
        <div className='current-image'>
          <p>{modelName}</p>
          {selectedColor && <img src={selectedColor.link} alt={selectedColor.color} />}
          <span>{selectedVariantName}</span>
        </div>
        <div>
          <div className='select-varient'>
            {selectedVariant && (
              <div>
                <div className='color-image'>
                  {selectedVariant.colors.map(color => (
                    <div className={`box-img ${color === selectedColor ? 'selected' : ''}`} key={color.color} onClick={() => handleColorClick(color)}>
                      <div>
                        {selectedVariant.link !== '' ? (
                          <img src={color.link} alt={selectedVariant.link !== '' ? color.color : ''} />
                        ) : (
                          <div className="color-round" style={{ backgroundColor: color.color }}></div>
                        )}
                      </div>
                      <span>{color.color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='card'>
        <Card
          icon1="/images/span.icon1.png"
          text1="BOOK A TEST RIDE"
          link1="/test_ride"
          icon2="/images/span.icon3.png"
          text2="PRODUCT ENQUIRY"
          link2="/product_enquiry"
        />
      </div>
      <div className="sprit-icon2">
        <img src="/images/spirite_icon4.png" alt='sprite-icon'></img>
        <h1 >SPECIFICATIONS</h1>
      </div>
      <div>
        {selectedVariant && (
          <div>
            <div className="tab-container">
              <span className="menu-divider" style={{ color: activeTab === 'engine' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'engine' ? 'active' : ''} onClick={() => handleTabClick('engine')} style={{ color: activeTab === 'engine' ? 'red' : '' }}>ENGINE</button>
              <span className="menu-divider" style={{ color: activeTab === 'dimensions' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'dimensions' ? 'active' : ''} onClick={() => handleTabClick('dimensions')} style={{ color: activeTab === 'dimensions' ? 'red' : '' }}>BODY DIMENSION</button>
              <span className="menu-divider" style={{ color: activeTab === 'suspension' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'suspension' ? 'active' : ''} onClick={() => handleTabClick('suspension')} style={{ color: activeTab === 'suspension' ? 'red' : '' }}>FRAME & SUSPENSION</button>
              <span className="menu-divider" style={{ color: activeTab === 'tyresBreaks' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'tyresBreaks' ? 'active' : ''} onClick={() => handleTabClick('tyresBreaks')} style={{ color: activeTab === 'tyresBreaks' ? 'red' : '' }}>TYRES & BREAKS</button>
              <span className="menu-divider" style={{ color: activeTab === 'transmission' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'transmission' ? 'active' : ''} onClick={() => handleTabClick('transmission')} style={{ color: activeTab === 'transmission' ? 'red' : '' }}>TRANSMISSION</button>
              <span className="menu-divider" style={{ color: activeTab === 'electricals' ? 'red' : '' }}>|</span>
              <button className={activeTab === 'electricals' ? 'active' : ''} onClick={() => handleTabClick('electricals')} style={{ color: activeTab === 'electricals' ? 'red' : '' }}>ELECTRICALS</button>
            </div>
            <div>
              {activeTab === 'engine' && <Specification bikeData={selectedBike.specifications} tabName="engine" />}
              {activeTab === 'dimensions' && <Specification bikeData={selectedBike.specifications} tabName="dimensions" />}
              {activeTab === 'suspension' && <Specification bikeData={selectedBike.specifications} tabName="suspension" />}
              {activeTab === 'tyresBreaks' && <Specification bikeData={selectedBike.specifications} tabName="tyresBreaks" />}
              {activeTab === 'transmission' && <Specification bikeData={selectedBike.specifications} tabName="transmission" />}
              {activeTab === 'electricals' && <Specification bikeData={selectedBike.specifications} tabName="electricals" />}
            </div>
          </div>
        )}
      </div>
      <div className='text'>
        <span>
          {selectedBike.about_specifications}
        </span>
      </div>
      <div>
        <EnquiryNow selectedVariant={selectedVariant} selectedBike={selectedBike} />
      </div>
      <div>
        <TestRide />
      </div>
      <div>
        <Features selectedBike={selectedBike}  />
      </div>
    </div>

  );
};

export default BookNow;
