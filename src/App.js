import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Hero from './components/Hero';
import Packs from './components/Packs';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Maps from './components/maps';
import FeedbackSection from './components/Testimonials';
import Footer from './components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ScrollAnimatedSection = ({ children, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 }); 

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Add IDs here */}
                <section id="home" style={{  backgroundColor: "#f8eeee"
}}>
                  <ScrollAnimatedSection>
                    <Hero />
                  </ScrollAnimatedSection>
                </section>
                <section id="about">
                  <ScrollAnimatedSection>
                    <Packs />
                  </ScrollAnimatedSection>
                </section>
                <section id="packs">
                  <ScrollAnimatedSection>
                    <Services />
                  </ScrollAnimatedSection>
                </section>
                <section id="pages">
                  <ScrollAnimatedSection>
                    <Maps />
                  </ScrollAnimatedSection>
                </section>
                <section id="blog">
                  <ScrollAnimatedSection>
                    <FeedbackSection />
                  </ScrollAnimatedSection>
                </section>
                <Footer />

              </motion.div>

            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

