import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Headphones, Zap, Award, Clock } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Fast & Free Shipping',
      description: 'Free shipping on orders over $500. Express delivery available nationwide.',
      color: 'from-blue-500 to-blue-600',
      delay: 0
    },
    {
      icon: Shield,
      title: '2-Year Warranty',
      description: 'Comprehensive warranty coverage with hassle-free claims and replacements.',
      color: 'from-green-500 to-green-600',
      delay: 0.1
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Get help from our certified technicians anytime, anywhere.',
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      icon: Zap,
      title: 'Performance Guarantee',
      description: 'All systems tested for optimal performance before shipping.',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.3
    },
    {
      icon: Award,
      title: 'Certified Components',
      description: 'Only premium, authentic parts from authorized distributors.',
      color: 'from-red-500 to-pink-500',
      delay: 0.4
    },
    {
      icon: Clock,
      title: 'Quick Assembly',
      description: 'Custom builds ready in 3-5 business days with professional cable management.',
      color: 'from-indigo-500 to-blue-500',
      delay: 0.5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-quantum-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-gray-900 dark:text-white mb-4">
            Why Choose QuantumCore?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience premium service and unmatched quality with every purchase
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon Container */}
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-3 group-hover:text-quantum-blue dark:group-hover:text-quantum-green transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-quantum-blue/20 dark:group-hover:border-quantum-green/20 transition-colors duration-300"
                />

                {/* Corner Accent */}
                <motion.div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: feature.delay 
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br ${feature.color} opacity-20`}
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: feature.delay * 0.5
                }}
              />
              
              <motion.div
                className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-br ${feature.color} opacity-15`}
                animate={{ 
                  y: [0, 6, 0],
                  opacity: [0.15, 0.4, 0.15]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: feature.delay * 0.8
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-inter font-bold text-gray-900 dark:text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust QuantumCore for their computing needs
          </p>
          
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-quantum-blue to-quantum-green text-white rounded-full font-inter font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Shopping Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCards;