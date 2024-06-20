import React from 'react';

export function Footer() {
  return (
    <div className="footer-container ">
      <img src="/images/Footer.png" alt="Footer Image" className="footer-image" />
      <div className="footer-logo">
        <img src="/images/honda_logo_footer.png" alt="Footer Logo" />
      </div>
      <div className='footer-menu'>
        <ul>
          <li><a href="/our_story">OUR STORY</a></li>
          <span className="menu-divider">|</span>
          <li><a href="#">MEDIA CENTER</a></li>
          <span className="menu-divider">|</span>
          <li><a href="#">PRIVACY POLICY</a></li>
          <span className="menu-divider">|</span>
          <li><a href="/disclaimer">DISCLAIMER</a></li>
          <span className="menu-divider">|</span>
          <li><a href="#">VISIT CORPORATE WEBSITE</a></li>
          <span className="menu-divider">|</span>
          <li><a href="/reach_us">CONTACT US</a></li>
        </ul>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/bikenbiker"><img src="/images/facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com/bikenbiker"><img src="/images/instagram.png" alt="Instagram" /></a>
        <a href="https://www.youtube.com/bikenbiker"><img src="/images/youtube.png" alt="YouTube" /></a>
      </div>
    </div>

  );
}
