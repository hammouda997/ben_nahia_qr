import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.css";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    title: "Our Corners",
    description: `Discover serene spaces crafted for relaxation and rejuvenation.
                  Experience the harmony of mind and body in our curated corners.`,
  },
  fr: {
    title: "Nos Coins",
    description: `Découvrez des espaces sereins conçus pour la détente et le rajeunissement.
                  Expérimentez l'harmonie de l'esprit et du corps dans nos coins sélectionnés.`,
  },
};

const services = [
  { type: "video", src: "/videos/vid5.mp4" },
  { type: "image", src: "/images/image00005.jpeg" },
  { type: "video", src: "/videos/vid2.mp4" },
  { type: "image", src: "/images/image00004.jpeg" },
  { type: "video", src: "/videos/vid3.mp4" },
  { type: "image", src: "/images/image00003.jpeg" },
  { type: "video", src: "/videos/vid1.mp4" },
  { type: "image", src: "/images/image00001.jpeg" },
];

const Services = () => {
  const { selectedLanguage } = useLanguage();
  const t = translations[selectedLanguage];

  return (
    <div className="services-container">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              {service.type === "video" ? (
                <video
                  src={service.src}
                  controls
                  className="service-video"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={service.src}
                  alt={`Service ${index + 1}`}
                  className="service-image"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
