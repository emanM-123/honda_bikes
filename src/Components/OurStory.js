import React from 'react';
import '../Styles/our_story.css'

export default function OurStory() {

  return (
    <div className='slideshow-container'>
      <div className="story-container">
        <img className='story-banner' src="/images/brand_img02_pc.webp" alt="sprite icon" />
        <div className="story-text1">
          <p>HONDA</p>
          <h1>The Power Of Dreams</h1>
        </div>
        <div className='story-text2'>
          <p>Ultimately, the power borne of a dream is a creative force, capable of producing revolutionary ideas. Honda encourages all its associates to
            <br /> pursue their dreams. That’s why we say we are a company built on dreams. The power of Honda’s dream will continue to lead to new insights
            <br /> and technologies in motorcycles and other fields of mobility. And Honda will spread the philosophy of The Power of Dreams across India.
            <br />A country where a billion people carry dreams in their hearts, this philosophy is brought alive by.</p>

        </div>
        <div className="story-text3">
          <p>
            <h1>PHILOSOPHY</h1>
            <h2>Brand</h2>

            HMSI operates on a principle, which is followed worldwide by all Honda companies.<br />
            Maintaining a global viewpoint, we are dedicated to supplying products <br />
            of the highest quality, yet at a reasonable price for worldwide customer satisfaction.<br />
            Honda's philosophy is based on the company's guiding principle and advocates 2 fundamental beliefs:<br /><br />
          </p>
          <img src="/images/feature1.jpg" alt="feature1" />
        </div>

        <div className="story-text3">
          <p><h2>Corporate</h2>

            Everyone has a dream, some goal or activity that gives their life deeper meaning and sparks passion.
            <br /> When we pursue our dreams, we feel empowered. This power, in turn, connects us to others who share
            It inspires us to spread the joy of our dreams to other people.<br />
            the same dreams. It gives us the strength to overcome great challenges.
          </p>
          <img src="/images/our-story2.png" alt="feature2" />
        </div>

        <div className="story-text4">
          <h2>Respect for the Individual</h2> 
          Honda recognizes and respects individual differences. The respect for individual stems from the following three points: <br /><br />

          <i>-Initiative</i>
          <i>-Equality</i>
          <i>-Trust</i> <br/>
          It is the contribution from each individual in the company that has made our company what it is today and that, which will take <br /> us into the future. <br />

          <h2>The Three Joys</h2>
          In line with Honda's Philosophy, HMSI conducts all its daily activities in pursuit of the following joys:<br /><br />

          <i>-The joy of buying high quality products.</i>
          <i>-The joy of selling high quality products.</i>
          <i>-The joy of manufacturing high quality products.</i>
        </div>
      </div>
    </div>
  );
}

