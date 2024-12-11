import React from 'react';
import { useLanguage } from './LanguageContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import the WhatsApp icon

const translations = {
  en: {
    title: "Reach us",
  },
  fr: {
    title: "Nous joindre",
  },
};

const Maps = () => {
  const { selectedLanguage } = useLanguage();
  const t = translations[selectedLanguage];

  return (
    <>
      <p
        style={{
          fontSize: "1.7rem",
          color: "#4a635d",
          marginBottom: "1rem",
          fontFamily: "'Gowun Dodum', sans-serif",
          textAlign: "center",
        }}
      >
        {t.title}
      </p>
      <div
        style={{
          width: '100%',
          height: '400px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.google.com/maps?q=G27P+234%20Hôpital%20Universitaire%20Tahar%20Sfar%2C%20Immeuble%20ben%20nahia%20près%20de%20l%2C%20Avenue%20Ibn%20Aljazzar%2C%20Mahdia%205111&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Centre Ben Nahia Location"
        ></iframe>
      </div>
    </>
  );
};

export default Maps;
