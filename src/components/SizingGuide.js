import React from 'react';
import { motion } from 'framer-motion';

const SizingGuide = () => {
  const vehicleSizes = [
    {
      category: 'Extra Small',
      type: 'Compact cars',
      examples: 'Honda Civic, Toyota Corolla',
      description: 'Small sedans and hatchbacks'
    },
    {
      category: 'Small',
      type: 'Sedans',
      examples: 'Toyota Camry, Nissan Altima',
      description: 'Mid-size sedans'
    },
    {
      category: 'Medium',
      type: 'Crossovers',
      examples: 'Honda CR-V, Toyota RAV4',
      description: 'Compact SUVs and crossovers'
    },
    {
      category: 'Large',
      type: 'Trucks / Mid SUVs',
      examples: 'Ford F-150, Chevy Silverado',
      description: 'Full-size trucks and SUVs'
    },
    {
      category: 'Extra Large',
      type: 'Full-size SUVs',
      examples: 'Chevy Tahoe, Suburban, Ford Expedition',
      description: 'Large SUVs and vans'
    }
  ];

  return (
    <section id="sizing" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Vehicle Sizing Guide</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Find Your <span className="text-red-500">Vehicle Size</span>
          </h2>
          <p className="text-xl text-gray-300">
            Use this guide to determine your vehicle category for accurate pricing.
          </p>
        </motion.div>

        {/* Sizing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-6 font-bold text-red-400">Size Category</th>
                    <th className="text-left py-4 px-6 font-bold text-red-400">Vehicle Type</th>
                    <th className="text-left py-4 px-6 font-bold text-red-400">Example Models</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleSizes.map((size, index) => (
                    <motion.tr
                      key={size.category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-800 last:border-b-0 hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="font-bold text-white">{size.category}</div>
                        <div className="text-sm text-gray-400">{size.description}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-300">{size.type}</td>
                      <td className="py-4 px-6 text-gray-300">{size.examples}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Visual Size Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {vehicleSizes.map((size, index) => (
              <motion.div
                key={size.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center hover:border-red-900/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-400 font-bold text-lg">
                    {size.category.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold mb-2">{size.category}</h4>
                <p className="text-sm text-gray-400 mb-2">{size.type}</p>
                <p className="text-xs text-gray-500">{size.examples}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card border-red-900/30 bg-red-950/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Not sure about your vehicle size?</h3>
            <p className="text-gray-300 mb-6">
              Give us a call with your vehicle make and model, and we'll help you determine the correct size 
              and provide an accurate quote.
            </p>
            <a href="tel:5303212936" className="btn-primary">
              Call for Help
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SizingGuide;
