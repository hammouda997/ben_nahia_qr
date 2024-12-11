import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Packs.css';
import { useLanguage } from './LanguageContext';

const translations = {
  en: {
    title: "Complete Wellness Packs",
    intro: "Choose the perfect pack for your wellness journey!",
  },
  fr: {
    title: "Packs de Bien-être Complets",
    intro: "Choisissez le pack parfait pour votre voyage bien-être!",
  },
};

const Packs = () => {
  const { selectedLanguage } = useLanguage();
  const t = translations[selectedLanguage];

  const [isMobile, setIsMobile] = useState(false);

  const packsData = [
    {
      image: '/images/packs/pack1.jpg',
    },
    {
      image: '/images/packs/pack2.jpg',
    },
    {
      image: '/images/packs/pack3.jpg',
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="Packs">
      <h2>{t.title}</h2>

      <p className="intro-text">{t.intro}</p>

      {isMobile ? (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
        >
          {packsData.map((pack, index) => (
            <SwiperSlide key={index}>
              <div className="packs-image-container">
                <img
                  src={pack.image}
                  className="packs-image"
                  alt={`pack ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="Packs-grid">
          {packsData.map((pack, index) => (
            <div key={index} className="packs-card">
              <div className="packs-image-container">
                <img
                  src={pack.image}
                  className="packs-image"
                  alt={`pack ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Packs;
