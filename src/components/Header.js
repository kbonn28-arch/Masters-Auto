import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Auto Detailing', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Ceramic Coatings', href: '#ceramic' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Sizing Guide', href: '#sizing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-red-600 text-white text-center py-3 px-4 text-sm font-bold">
        New service plan customers receive a +1 year ceramic upgrade at no additional cost!
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' : 'bg-black'
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:bg-red-700 transition-colors">
                M
              </div>
              <span className="text-xl font-black text-white">Master's Auto Detail</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white font-medium transition-colors"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              
              <div className="flex items-center gap-4">
                <a
                  href="tel:5303212936"
                  className="text-white font-bold hover:text-red-400 transition-colors"
                >
                  (530) 321-2936
                </a>
                <a
                  href="#quote"
                  className="btn-primary"
                >
                  Request Quote
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-red-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#quote"
                  className="btn-primary mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </a>
                <a
                  href="tel:5303212936"
                  className="text-white font-bold py-2 px-4 hover:text-red-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  (530) 321-2936
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
