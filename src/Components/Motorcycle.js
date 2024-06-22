import React, { useState } from 'react';
import { bikeSDetails } from "../data/bannerImages";
import { Link } from "react-router-dom";
export default function Motorcycle() {
  const imagesPerScreen = 1;
  const [topStartIndex, setTopStartIndex] = useState(0);
  const [bottomStartIndex, setBottomStartIndex] = useState(0);


  const handleTopSlideChange = (index) => {
    setTopStartIndex(index);
  };

  const handleBottomSlideChange = (index) => {
    setBottomStartIndex(index);
  };

  return (
    <div className='slideshow-container'>
      <div className='container'>
        {bikeSDetails.map((bike, index) => (
          <div key={index} className="box">
            <Link to={`/book_now?id=${bike.id}`}>
              <img src={bike.image} alt={bike.modelName} />
            </Link>
            <span>{bike.modelName}</span>
          </div>
        ))}
      </div>
      <div className='container responsive-slider'>
        {/* {bikeSDetails.slice(topStartIndex, topStartIndex + imagesPerScreen).map((bike, index) => (
            <div key={index} className="box">
              <Link to={ `/book_now?id=${bike.id}`}>
                <img src={bike.image} alt={bike.modelName} />
              </Link>
              <span>{bike.modelName}</span>
            </div>
          ))} */}
        {bikeSDetails.map((bike, index) => (
          <div key={index} className="box">
            <Link to={`/book_now?id=${bike.id}`}>
              <img src={bike.image} alt={bike.modelName} />
            </Link>
            <span>{bike.modelName}</span>
          </div>
        ))}
        {/* <div className='res-slide-controls'>
          {bikeSDetails.map((_, index) => (
            <span
              key={index}
              className={`slide-bar ${index >= topStartIndex && index < topStartIndex + imagesPerScreen ? 'active' : ''}`}
              onClick={() => handleTopSlideChange(index)}
            ></span>
          )).slice(0, 3)}
        </div> */}
      </div>
      {/* <div className='dream-honda'>
        <p>Dream Honda</p>
      </div>
      <div className='container'>
        {bikeSDetails.map((bike, index) => (
          <div key={index} className="box">
            <Link to={`/book_now`}>
              <img src={bike.image} alt={bike.title} />
            </Link>

            <span>{bike.title}</span>
          </div>
        ))}
      </div>
      <div className='container responsive-slider'>
        {bikeSDetails.slice(bottomStartIndex, bottomStartIndex + imagesPerScreen).map((bike, index) => (
          <div key={index} className="box">
            <Link to={`/book_now`}>
              <img src={bike.image} alt={bike.title} />
            </Link>
            <span>{bike.title}</span>
          </div>
        ))}
        <div className='res-slide-controls'>
          {bikeSDetails.map((_, index) => (
            <span
              key={index}
              className={`slide-bar ${index >= bottomStartIndex && index < bottomStartIndex + imagesPerScreen ? 'active' : ''}`}
              onClick={() => handleBottomSlideChange(index)}
            ></span>
          )).slice(0, 3)}
        </div>
      </div> */}

    </div>

  );
}
