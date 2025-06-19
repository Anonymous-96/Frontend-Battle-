import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Package, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: Package,
      number: 15000,
      suffix: '+',
      label: 'Systems Sold',
      description: 'Custom and pre-built systems delivered worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      number: 25000,
      suffix: '+',
      label: 'Happy Customers',
      description: 'Satisfied customers across all continents',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: '%',
      label: 'Performance Rating',
      description: 'Customer satisfaction and performance scores',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Star,
      number: 4.9,
      suffix: '/5',
      label: 'Average Rating',
      description: 'Based on verified customer reviews',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const AnimatedCounter: React.FC<{ 
    target: number; 
    suffix: string; 
    duration?: number;
    inView: boolean;
  }> = ({ target, suffix, duration = 2000, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(target * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [target, duration, inView]);

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-quantum-dark via-gray-900 to-quantum-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,102,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,102,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-4">
            Powered by Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our commitment to excellence reflected in numbers that matter
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Icon */}
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                  
                  {/* Icon Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-2"
                  animate={inView ? {
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 10px rgba(255,255,255,0.5)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-inter font-bold text-white mb-3 group-hover:text-quantum-green transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Floating Particles */}
                <motion.div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${stat.color}`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />

                <motion.div
                  className={`absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${stat.color}`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Chart Visualization */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Performance Trends
            </h3>
            <p className="text-gray-400">
              Our growth trajectory over the past year
            </p>
          </div>

          {/* Simple Animated Chart */}
          <div className="flex items-end justify-center gap-4 h-40">
            {[40, 65, 80, 45, 70, 85, 95].map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-quantum-blue to-quantum-green rounded-t-lg w-8"
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-6 text-sm text-gray-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, index) => (
              <span key={index} className="font-inter">{month}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;