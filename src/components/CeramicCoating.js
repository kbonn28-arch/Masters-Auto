import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Sun, CheckCircle } from 'lucide-react';

const CeramicCoating = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Long-lasting Protection',
      description: 'Durable ceramic coating lasts years compared to traditional wax'
    },
    {
      icon: Droplets,
      title: 'Water Repellent',
      description: 'Hydrophobic surface makes water bead and roll off easily'
    },
    {
      icon: Sun,
      title: 'UV Protection',
      description: 'Prevents fading and oxidation from sun exposure'
    },
    {
      icon: CheckCircle,
      title: 'Chemical Resistant',
      description: 'Withstands harsh cleaning chemicals and environmental contaminants'
    }
  ];

  return (
    <section id="ceramic" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Ceramic coatings in Chico, CA</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ceramic Coatings - <span className="text-red-500">Long-lasting Protection</span>
          </h2>
          <p className="text-xl text-gray-300">
            Premium surface protection designed to help preserve gloss, resist contaminants, and make upkeep easier.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">What is Ceramic Coating?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ceramic coating forms a strong protective barrier against scratches, UV rays, dirt, and other contaminants.
                It creates a glossy, hydrophobic finish that repels water and helps preserve a showroom-like shine.
              </p>
              
              <div className="space-y-4">
                {[
                  'Long-lasting protection compared with wax',
                  'High resistance to chemicals and temperature changes',
                  'Water-repelling surface for easier cleaning',
                  'Helps reduce fading and oxidation over time'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center hover:border-red-900/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-red-400" size={32} />
                  </div>
                  <h4 className="font-bold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card border-red-900/30 bg-red-950/20"
            >
              <div className="eyebrow mb-4">Ready for pricing?</div>
              <h3 className="text-2xl font-bold mb-4">Choose ceramic protection for a stronger finish</h3>
              <p className="text-gray-300 mb-6">
                Ask about ceramic coating when requesting a quote or viewing full detail options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote" className="btn-primary">
                  View Pricing
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=636+Nord+Ave+Ste+A,+Chico,+CA+95928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ceramic Coating Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-center">Ceramic Coating Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Thorough wash and decontamination',
                'Paint correction and surface preparation',
                'Multi-stage ceramic coating application',
                'Curing and final inspection'
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeramicCoating;
