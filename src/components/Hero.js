import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      {/* Subtle red accent in corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="eyebrow">Auto detailing in Chico, CA</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 text-shadow">
              Get that showroom
              <span className="block text-red-500">feeling all over again.</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-8 max-w-lg"
            >
              Quality detailing, paint correction, ceramic coating, and interior care for vehicles in Chico. 
              Browse services, compare pricing, and request a quote from any device.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:5303212936"
                className="btn-primary text-lg px-8 py-4 shadow-2xl"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="#quote"
                className="btn-secondary text-lg px-8 py-4"
              >
                Request a Quote
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card border-red-900/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Detailing</h3>
                  <p className="text-gray-400">
                    Professional care designed to help your vehicle look refreshed inside and out with 
                    industry-leading products and techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="card border-red-900/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ceramic Protection</h3>
                  <p className="text-gray-400">
                    Long-term ceramic coating protection that preserves your vehicle's finish and 
                    makes maintenance easier than ever.
                  </p>
                </div>
              </div>
            </div>

            <div className="card border-red-900/30 bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
                  <p className="text-gray-400">
                    Call directly or use our simple quote form to get started with your vehicle 
                    transformation today.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
