import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Auto Detailing', href: '#about' },
      { name: 'Individual Services', href: '#services' },
      { name: 'Ceramic Coatings', href: '#ceramic' },
      { name: 'Basic Detail', href: '#pricing' },
      { name: 'Full Detail', href: '#pricing' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Sizing Guide', href: '#sizing' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const businessHours = [
    'Monday: 9AM - 5PM',
    'Tuesday: 8AM - 6PM',
    'Wednesday: 8AM - 6PM',
    'Thursday: 8AM - 6PM',
    'Friday: 8AM - 6PM',
    'Saturday: CLOSED',
    'Sunday: CLOSED'
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                M
              </div>
              <span className="text-xl font-black text-white">Master's Auto Detail</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional auto detailing, paint correction, ceramic coatings, and interior care in Chico, California.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-600/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-600/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-red-400" size={20} />
                <a
                  href="tel:5303212936"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  (530) 321-2936
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-400" size={20} />
                <span className="text-gray-400 text-sm">
                  636 Nord Ave Ste A<br />
                  Chico, CA 95928
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-400" size={20} />
                <a
                  href="mailto:info@mastersautodetail.com"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  info@mastersautodetail.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-red-400" size={20} />
                <h4 className="font-bold text-white">Business Hours</h4>
              </div>
              <div className="space-y-1">
                {businessHours.map((hours, index) => (
                  <div key={index} className="text-sm text-gray-400">
                    {hours}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-900 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Master's Auto Detail • Chico, CA. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl z-40"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
