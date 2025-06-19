import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift, Zap } from 'lucide-react';

interface NewsletterProps {
  isOpen: boolean;
  onClose: () => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setEmail('');
        setIsSubmitted(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-200 dark:border-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(0,102,255,0.4) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(0,255,136,0.4) 0%, transparent 50%)
                  `
                }}
              />
            </div>

            <div className="relative p-8">
              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-quantum-blue to-quantum-green rounded-2xl flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Gift className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-orbitron font-bold text-gray-900 dark:text-white mb-2">
                      Get 10% Off Your First Order!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Join our newsletter for exclusive deals, latest tech news, and early access to new products.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: Zap, text: 'Early access to sales and new products' },
                      { icon: Gift, text: 'Exclusive discount codes and offers' },
                      { icon: Mail, text: 'Weekly tech tips and build guides' }
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-quantum-blue/10 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-quantum-blue" />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {benefit.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-quantum-blue dark:focus:ring-quantum-green transition-all"
                        required
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-quantum-blue to-quantum-green text-white rounded-xl font-inter font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get My 10% Discount
                    </motion.button>
                  </form>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </>
              ) : (
                /* Success State */
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </motion.div>
                  
                  <h3 className="text-2xl font-orbitron font-bold text-gray-900 dark:text-white mb-2">
                    Welcome to QuantumCore!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Check your email for your 10% discount code.
                  </p>
                  <p className="text-sm text-quantum-blue dark:text-quantum-green font-medium">
                    Code: QUANTUM10
                  </p>
                </motion.div>
              )}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-quantum-blue rounded-full opacity-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-4 h-4 bg-quantum-green rounded-full opacity-15"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Newsletter;