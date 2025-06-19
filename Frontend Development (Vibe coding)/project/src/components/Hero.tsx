import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Zap, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Build Your Dream Gaming Rig",
      subtitle: "Ultimate performance meets stunning design",
      description: "Experience next-gen gaming with RTX 4090 powered systems",
      cta: "Explore Gaming PCs",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      accent: "from-quantum-blue to-purple-600"
    },
    {
      title: "Professional Workstations",
      subtitle: "Power through any creative workflow",
      description: "Intel Core i9 & NVIDIA RTX for creators and professionals",
      cta: "View Workstations",
      image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
      accent: "from-quantum-green to-emerald-600"
    },
    {
      title: "Premium Gaming Laptops",
      subtitle: "Portable powerhouse for gaming anywhere",
      description: "High refresh displays with RTX graphics on the go",
      cta: "Shop Laptops",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      accent: "from-purple-600 to-quantum-blue"
    }
  ];

  const features = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "2 Year Warranty" },
    { icon: Truck, text: "Free Shipping" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-quantum-dark to-gray-900">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slides[currentSlide].image}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accent} opacity-80`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,102,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,102,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1 
                  className="text-5xl lg:text-7xl font-orbitron font-bold text-white mb-6 leading-tight"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(0,102,255,0.5)",
                      "0 0 20px rgba(0,102,255,0.8)",
                      "0 0 10px rgba(0,102,255,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <h2 className="text-xl lg:text-2xl text-quantum-green font-inter font-medium mb-4">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                className={`px-8 py-4 bg-gradient-to-r ${slides[currentSlide].accent} text-white rounded-full font-inter font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].cta}
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-inter font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <feature.icon className="w-5 h-5 text-quantum-green" />
                  <span className="font-inter">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-quantum-blue/20 to-quantum-green/20 rounded-2xl backdrop-blur-sm border border-white/10 p-8"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0,102,255,0.3)",
                    "0 0 40px rgba(0,255,136,0.3)",
                    "0 0 20px rgba(0,102,255,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <h3 className="text-2xl font-orbitron text-white mb-4">Quick Builder</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Budget Range</span>
                    <span className="text-quantum-green font-bold">$1,500 - $3,000</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-quantum-blue to-quantum-green h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 1, duration: 1.5 }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Use Case</span>
                    <span className="text-quantum-blue font-bold">Gaming</span>
                  </div>
                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-quantum-blue to-quantum-green text-white rounded-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Building →
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-quantum-green rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-quantum-blue rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-quantum-blue w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;