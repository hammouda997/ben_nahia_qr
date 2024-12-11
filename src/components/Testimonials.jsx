import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import './Testimonials.css';
import { useLanguage } from './LanguageContext';

const firebaseConfig = {
  apiKey: "AIzaSyD9-WW_pdm86ogIiwYdQDA9iXsEK-guzao",
  authDomain: "oussemabennahia-dec8a.firebaseapp.com",
  projectId: "oussemabennahia-dec8a",
  storageBucket: "oussemabennahia-dec8a.firebasestorage.app",
  messagingSenderId: "900513142705",
  appId: "1:900513142705:web:9c87e8fd2bb22f0be24f90",
  measurementId: "G-RT91J6NPZY"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const translations = {
  en: {
    title: "What Our Customers Say",
    opinionCounts: "Your Opinion Counts",
    placeholderName: "Your Name",
    placeholderReview: "Your Review",
    submitButton: "Submit",
  },
  fr: {
    title: "Ce que disent nos clients",
    opinionCounts: "Votre opinion compte",
    placeholderName: "Votre Nom",
    placeholderReview: "Votre Avis",
    submitButton: "Soumettre",
  },
};

const FeedbackSection = () => {
  const { selectedLanguage } = useLanguage();
  const t = translations[selectedLanguage];

  const [testimonials, setTestimonials] = useState([]);
  const [feedback, setFeedback] = useState({ name: '', review: '' });

  useEffect(() => {
    const fetchFeedback = async () => {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const feedbackList = querySnapshot.docs.map(doc => doc.data());
      setTestimonials(feedbackList);
    };
    fetchFeedback();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.name && feedback.review) {
      await addDoc(collection(db, 'feedback'), feedback);
      setTestimonials([...testimonials, feedback]);
      setFeedback({ name: '', review: '' });
    }
  };

  return (
    <div>
      <div className="testimonials-container">
        <h2 className="testimonials-title">{t.title}</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card-modern">
                <p className="testimonial-review-modern">"{t.review}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="testimonial-name-modern">{t.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="feedback-container">
  <h3
    style={{
      fontSize: '1.8rem',
      color: '#4a635d',
      marginBottom: '1rem',
      fontFamily: "'Gowun Dodum', sans-serif",
    }}
  >
    {t.opinionCounts}
  </h3>
  <form
    onSubmit={handleSubmit}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '400px',
      width: '100%',
    }}
  >
    <input
      type="text"
      placeholder={t.placeholderName}
      value={feedback.name}
      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
      style={{
        width: '100%',
        padding: '0.8rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    />
    <textarea
      placeholder={t.placeholderReview}
      value={feedback.review}
      onChange={(e) => setFeedback({ ...feedback, review: e.target.value })}
      style={{
        width: '100%',
        padding: '0.8rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        resize: 'none',
      }}
      rows="4"
    ></textarea>
    <button
      type="submit"
      style={{
        padding: '0.8rem 1.5rem',
        backgroundColor: '#ffdfdf',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'black',
      }}
    >
      {t.submitButton}
    </button>
  </form>
</div>

    </div>
  );
};

export default FeedbackSection;
