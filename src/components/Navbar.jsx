import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from './LanguageContext';

const translations = {
  en: {
    home: "Home",
    packs: "Packs",
    corners: "Our corners",
    pages: "Reach Us",
    blog: "Feedback",
  },
  fr: {
    home: "Accueil",
    packs: "Forfaits",
    corners: "Nos coins",
    pages: "Nous joindre",
    blog: "Retour Client",
  },
};

const Navbar = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageMenuOpen(false); // Close the language menu after selection
  };

  const handleClickOutside = (event) => {
    if (
      languageMenuRef.current &&
      !languageMenuRef.current.contains(event.target)
    ) {
      setIsLanguageMenuOpen(false);
    }
  
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const t = translations[selectedLanguage];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="home" smooth={true} duration={800} onClick={toggleMobileMenu}>{t.home}</Link>
          <Link to="about" smooth={true} duration={800} onClick={toggleMobileMenu}>{t.packs}</Link>
          <Link to="packs" smooth={true} duration={800} onClick={toggleMobileMenu}>{t.corners}</Link>
        </div>
        <div className="language-switch" ref={languageMenuRef}>
            <FaGlobe 
              onClick={toggleLanguageMenu} 
              style={{ cursor: 'pointer' }} 
            />
            {isLanguageMenuOpen && (
              <div className="language-menu">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('fr')}>Français</button>
              </div>
            )}
          </div>
        <div className="navbar-center">
          <img src="/bennahialogo.png" alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <Link to="pages" smooth={true} duration={800} onClick={toggleMobileMenu}>{t.pages}</Link>
          <Link to="blog" smooth={true} duration={800} onClick={toggleMobileMenu}>{t.blog}</Link>
          <Link to="contact" smooth={true} duration={800} onClick={toggleMobileMenu}>{t.contact}</Link>
        
        </div>
        <button className="navbar-toggle" onClick={toggleMobileMenu} ref={mobileMenuRef}>
          <IoMdMenu />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
<Link
  to="home"
  smooth={true}
  duration={800}
  offset={-90}
  onClick={(e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  }}
>
  {t.home}
</Link>
          <Link to="about"   smooth={true}
  duration={800}
  offset={-69}
  onClick={(e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  }}>{t.packs}</Link>
          <Link to="packs" s smooth={true}
  duration={800}
  offset={-69}
  onClick={(e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  }}>{t.corners}</Link>
          <Link to="pages"  smooth={true}
  duration={800}
  offset={-67}
  onClick={(e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  }}>{t.pages}</Link>
          <Link to="blog"  smooth={true}
  duration={800}
  offset={-60}
  onClick={(e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  }}>{t.blog}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
