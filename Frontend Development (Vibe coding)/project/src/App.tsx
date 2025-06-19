import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import FeatureCards from './components/FeatureCards';
import PartnerLogos from './components/PartnerLogos';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import PCBuilder from './components/PCBuilder';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 60 && !localStorage.getItem('newsletter-shown')) {
        setShowNewsletter(true);
        localStorage.setItem('newsletter-shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-quantum-dark transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <Hero />
              <ProductGallery />
              <FeatureCards />
              <PartnerLogos />
              <StatsSection />
              <PCBuilder />
              <Testimonials />
              <Newsletter 
                isOpen={showNewsletter} 
                onClose={() => setShowNewsletter(false)} 
              />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;