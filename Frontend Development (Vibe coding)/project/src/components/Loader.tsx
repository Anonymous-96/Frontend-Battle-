import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-quantum-dark flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity }
          }}
        >
          <Cpu className="w-16 h-16 text-quantum-blue mx-auto" />
          <motion.div
            className="absolute inset-0 border-2 border-quantum-green rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.h2
          className="text-2xl font-orbitron text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          QuantumCore
        </motion.h2>
        
        <motion.div
          className="flex items-center justify-center gap-2 text-quantum-green"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <Zap className="w-4 h-4" />
          <span className="font-inter">Booting up...</span>
          <Zap className="w-4 h-4" />
        </motion.div>
        
        <motion.div
          className="mt-6 flex justify-center gap-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-quantum-blue rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;