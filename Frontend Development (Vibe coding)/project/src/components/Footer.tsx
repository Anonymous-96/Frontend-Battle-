import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Shield,
  Truck,
  Headphones
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Gaming Laptops', href: '#' },
        { name: 'Gaming Desktops', href: '#' },
        { name: 'Workstations', href: '#' },
        { name: 'Components', href: '#' },
        { name: 'Custom Builds', href: '#' },
        { name: 'Accessories', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Build Guide', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Contact Us', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Reviews', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const features = [
    { icon: Shield, text: '2-Year Warranty' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: Headphones, text: '24/7 Support' }
  ];

  return (
    <footer className="bg-gradient-to-br from-quantum-dark via-gray-900 to-quantum-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,102,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,102,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,102,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-orbitron font-bold mb-4">
                  Stay Updated with QuantumCore
                </h3>
                <p className="text-gray-400 text-lg">
                  Get the latest tech news, exclusive deals, and build guides delivered to your inbox.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-quantum-blue transition-all"
                />
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-quantum-blue to-quantum-green rounded-xl font-inter font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="w-10 h-10 text-quantum-blue" />
                </motion.div>
                <span className="text-2xl font-orbitron font-bold">QuantumCore</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building the future of computing with premium PC solutions, 
                expert guidance, and unmatched performance for gamers, creators, and professionals.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-quantum-blue/20 rounded-full flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-quantum-blue" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (sectionIndex + 1) * 0.1 }}
              >
                <h4 className="text-lg font-inter font-bold mb-6 text-quantum-green">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (sectionIndex + 1) * 0.1 + linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: 'Email Us', info: 'support@quantumcore.com', href: 'mailto:support@quantumcore.com' },
                { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, title: 'Visit Us', info: '123 Tech Street, Silicon Valley, CA', href: '#' }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-quantum-blue to-quantum-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-inter font-semibold text-white mb-1">{contact.title}</h5>
                    <p className="text-gray-400 text-sm">{contact.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © 2024 QuantumCore. All rights reserved. Built with precision and passion.
              </motion.p>
              
              <motion.div
                className="flex gap-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-quantum-blue rounded-full opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-3 h-3 bg-quantum-green rounded-full opacity-15"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
    </footer>
  );
};

export default Footer;