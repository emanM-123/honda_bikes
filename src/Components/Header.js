import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };
    document.body.addEventListener('click', closeMenu);
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/">
            <img src="/images/honda_logo_header.png" alt="honda logo" />
          </Link>
        </div>
        <div className={`header__menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/our_story" className="header__link" >OUR STORY</Link>
          <Link to="/motorcycle" className="header__link" >MOTORCYCLE</Link>
          <Link to="/book_now" className="header__link" >BOOK NOW</Link>
          <Link to="/reach_us" className="header__link" >REACH US</Link>
          <Link to="/rsa_ew" className="header__link" >RSA & EW</Link>
        </div>
        <div className={`header__icon ${menuOpen ? 'open' : ''}`}>
          <a href="https://www.facebook.com/bikenbiker"><img src="/images/facebook.png" alt="facebook" /></a>
          <a href="https://www.instagram.com/bikenbiker"><img src="/images/instagram.png" alt="instagram" /></a>
          <a href="https://www.youtube.com/bikenbiker"><img src="/images/youtube.png" alt="youtube" /></a>
        </div>
      </div>

      {/* Toggle menu button */}
      <div className="toggle-menu" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
