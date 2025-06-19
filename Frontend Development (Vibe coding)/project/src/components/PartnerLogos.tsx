import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogos: React.FC = () => {
  const partners = [
    {
      name: 'Intel',
      logo: 'https://logos-world.net/wp-content/uploads/2020/03/Intel-Logo.png'
    },
    {
      name: 'AMD',
      logo: 'https://logos-world.net/wp-content/uploads/2020/03/AMD-Logo.png'
    },
    {
      name: 'NVIDIA',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png'
    },
    {
      name: 'ASUS',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png'
    },
    {
      name: 'Corsair',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Corsair-Logo.png'
    },
    {
      name: 'MSI',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/MSI-Logo.png'
    },
    {
      name: 'Gigabyte',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Gigabyte-Logo.png'
    },
    {
      name: 'Samsung',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-quantum-gray border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-orbitron font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Authorized partner of the world's top technology manufacturers
          </p>
        </motion.div>

        {/* Logos Container */}
        <div className="relative overflow-hidden">
          {/* First Row - Moving Right */}
          <motion.div
            className="flex gap-12 mb-8"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-40 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700 grayscale group-hover:grayscale-0 p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-center';
                      fallback.innerHTML = `
                        <div class="w-16 h-10 bg-gradient-to-r from-quantum-blue to-quantum-green rounded opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center mb-1">
                          <span class="text-white font-bold text-xs">${partner.name.slice(0, 3)}</span>
                        </div>
                        <span class="text-xs font-inter font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          ${partner.name}
                        </span>
                      `;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - Moving Left */}
          <motion.div
            className="flex gap-12"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-reverse-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-40 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700 grayscale group-hover:grayscale-0 p-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-center';
                      fallback.innerHTML = `
                        <div class="w-16 h-10 bg-gradient-to-r from-quantum-green to-quantum-blue rounded opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center mb-1">
                          <span class="text-white font-bold text-xs">${partner.name.slice(0, 3)}</span>
                        </div>
                        <span class="text-xs font-inter font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          ${partner.name}
                        </span>
                      `;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-quantum-gray to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-quantum-gray to-transparent pointer-events-none" />
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { number: '50+', label: 'Brand Partners' },
            { number: '10K+', label: 'Products Available' },
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className="text-3xl font-orbitron font-bold text-quantum-blue dark:text-quantum-green mb-2"
                animate={{ 
                  textShadow: [
                    "0 0 5px rgba(0,102,255,0.3)",
                    "0 0 10px rgba(0,102,255,0.6)",
                    "0 0 5px rgba(0,102,255,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-inter font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;