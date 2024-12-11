import React from 'react';
import './Hero.css';
import backgroundImage from '../images/image00001.jpeg';
import { useLanguage } from './LanguageContext';

const translations = {
  en: {
    welcome: "Welcome to Centre Ben Nahia",
    description: "Unwind, relax, and rejuvenate at our luxurious spa.",
    button: "Explore Packs",
  },
  fr: {
    welcome: "Bienvenue au Centre Ben Nahia",
    description: "Détendez-vous, relaxez-vous et rajeunissez dans notre spa luxueux.",
    button: "Explorer les Forfaits",
  },
};

const Hero = () => {
  const { selectedLanguage } = useLanguage();
  const t = translations[selectedLanguage];

  const scrollToPacks = () => {
    document.getElementById('Packs').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="hero"
    >
      <div className="hero-content">
        <h1>{t.welcome}</h1>
        <p>{t.description}</p>
        <button onClick={scrollToPacks}>{t.button}</button>
      </div>
    </div>
  );
};

export default Hero;
