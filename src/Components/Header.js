
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/components.css'
import { useLocation } from "react-router-dom";
export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/" onClick={() => setMenuOpen(false)} >
            <img src="/images/honda_logo_header.png" alt="honda logo" />
          </Link>
        </div>
        <div className={`header__menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/our_story" className={`header__link ${location.pathname === '/our_story' ? 'active' : ''} `} onClick={() => setMenuOpen(false)} >OUR STORY</Link>
          <Link to="/motorcycle" className={`header__link ${location.pathname === '/motorcycle' ? 'active' : ''}`} onClick={() => setMenuOpen(false)} >MOTORCYCLE</Link>
          <Link to="/book_now" className={`header__link ${location.pathname === '/book_now' ? 'active' : ''}`} onClick={() => setMenuOpen(false)} >BOOK NOW</Link>
          <Link to="/reach_us" className={`header__link ${location.pathname === '/reach_us' ? 'active' : ''}`} onClick={() => setMenuOpen(false)} >REACH US</Link>
          <Link to="/rsa_ew" className={`header__link ${location.pathname === '/rsa_ew' ? 'active' : ''}`} onClick={() => setMenuOpen(false)} > RSA & EW </Link>
        </div>

        <div className={`header__icon ${menuOpen ? 'open' : ''}`}>
          <a href="https://www.facebook.com/HondaBigWingIndia"><img src="/images/social_fb.png" alt="facebook" /></a>
          <a href="https://www.instagram.com/bigwingindia/"><img src="/images/social_insta.png" alt="instagram" /></a>
          <a href="https://www.youtube.com/channel/UC1x_DVJQT3DMbmnavnFvStg?view_as=subscriber"><img src="/images/social_yt.png" alt="youtube" /></a>
        </div>
      </div>
      <div className="toggle-menu" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
