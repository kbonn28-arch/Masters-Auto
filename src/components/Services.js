import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Wind } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Headlights Restoration',
      price: 'Starting at $26',
      icon: Sparkles,
      features: [
        'Restores clarity to your headlights',
        'Adds UV protection to slow yellowing and fading',
        'Makes faded headlamp covers look newer'
      ]
    },
    {
      title: 'Spot Cleaning',
      price: 'Starting at $35',
      icon: Droplets,
      features: [
        'Targets stubborn stains with precision',
        'Refreshes specific interior areas',
        'Fast solution without a full reset'
      ]
    },
    {
      title: 'Deep Shampoo Cleaning',
      price: 'Starting at $100',
      icon: Wind,
      features: [
        'Removes embedded dirt from carpets and upholstery',
        'Helps eliminate unpleasant odors',
        'Keeps the interior fresh longer'
      ]
    }
  ];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Individual Services</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Add-on <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 italic">
            Our individual services can only be applied to a Full Detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-red-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <service.icon className="text-red-400" size={32} />
                </div>
                <div className="text-red-400 font-bold text-sm mb-2">{service.price}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#quote"
                className="btn-primary w-full justify-center group-hover:bg-red-700 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card border-red-900/30 bg-red-950/20">
            <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
            <p className="text-gray-300 mb-6">
              We offer additional specialized services including paint correction, engine bay cleaning, 
              and more. Contact us to discuss your specific needs.
            </p>
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
