import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Professional Gamer',
      company: 'Esports Team Alpha',
      rating: 5,
      text: 'QuantumCore built me the perfect gaming rig. The RTX 4090 setup handles everything I throw at it - streaming, gaming, and content creation. Their support team is incredible, and the build quality is absolutely top-notch.',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      build: 'RTX 4090 Gaming Beast'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Video Editor',
      company: 'Creative Studios',
      rating: 5,
      text: 'As a professional video editor working with 8K footage, I needed something powerful. The workstation QuantumCore built for me cut my render times in half. The Intel i9 and 64GB RAM combo is a dream to work with.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      build: 'Creator Workstation Pro'
    },
    {
      id: 3,
      name: 'Emily Thompson',
      role: 'Software Developer',
      company: 'Tech Innovation Inc.',
      rating: 5,
      text: 'I was hesitant about buying a pre-built system, but QuantumCore changed my mind completely. The custom laptop they configured runs my development environment flawlessly. Fast shipping and amazing customer service!',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      build: 'Developer Laptop Elite'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Content Creator',
      company: 'YouTube Channel',
      rating: 5,
      text: 'The attention to detail in my custom build is incredible. RGB lighting perfectly synced, cable management is pristine, and performance is off the charts. QuantumCore really knows what creators need.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      build: 'Content Creator RGB Build'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'AI Researcher',
      company: 'University Lab',
      rating: 5,
      text: 'For machine learning workloads, this system is perfect. The dual RTX 4090 setup handles training large models efficiently. QuantumCore understood exactly what I needed for my research work.',
      avatar: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      build: 'AI Research Workstation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-quantum-gray dark:to-quantum-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,102,255,0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0,255,136,0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real experiences from professionals who trust QuantumCore for their computing needs
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-quantum-blue to-quantum-green rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-inter">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center gap-4">
                  <motion.img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-quantum-blue to-quantum-green"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-inter font-bold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-quantum-blue dark:text-quantum-green font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Build Badge */}
                <motion.div
                  className="mt-6 inline-block px-4 py-2 bg-gradient-to-r from-quantum-blue/10 to-quantum-green/10 rounded-full border border-quantum-blue/20 dark:border-quantum-green/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-sm font-inter font-medium text-quantum-blue dark:text-quantum-green">
                    Build: {testimonials[currentTestimonial].build}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-400 hover:text-quantum-blue dark:hover:text-quantum-green transition-colors border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-quantum-blue w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-400 hover:text-quantum-blue dark:hover:text-quantum-green transition-colors border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Thumbnail Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial % 3
                  ? 'bg-quantum-blue/5 border-quantum-blue/20 dark:bg-quantum-green/5 dark:border-quantum-green/20'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-inter font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-inter font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the QuantumCore difference with our premium builds and exceptional service
          </p>
          
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-quantum-blue to-quantum-green text-white rounded-full font-inter font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Build Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;