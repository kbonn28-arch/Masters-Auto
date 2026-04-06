import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const basicPricing = [
    {
      size: 'Extra Small',
      price: '$159',
      description: 'Compact cars',
      examples: 'Honda Civic, Toyota Corolla',
      included: [
        'Hand wash, wheels, windows and body',
        'Dress tires and trim',
        'Wax body',
        'Clean interior surfaces',
        'Clean windows',
        'Vacuum seats and carpets'
      ]
    },
    {
      size: 'Small',
      price: '$195',
      description: 'Sedans',
      examples: 'Toyota Camry, Nissan Altima',
      included: [
        'Hand wash, wheels, windows and body',
        'Dress tires and trim',
        'Wax body',
        'Clean interior surfaces',
        'Clean windows',
        'Vacuum seats and carpets'
      ]
    },
    {
      size: 'Medium',
      price: '$249',
      description: 'Crossovers',
      examples: 'Honda CR-V, Toyota RAV4',
      included: [
        'Hand wash, wheels, windows and body',
        'Dress tires and trim',
        'Wax body',
        'Clean interior surfaces',
        'Clean windows',
        'Vacuum seats and carpets'
      ]
    },
    {
      size: 'Large',
      price: '$339',
      description: 'Trucks / Mid SUVs',
      examples: 'Ford F-150, Chevy Silverado',
      included: [
        'Hand wash, wheels, windows and body',
        'Dress tires and trim',
        'Wax body',
        'Clean interior surfaces',
        'Clean windows',
        'Vacuum seats and carpets'
      ]
    },
    {
      size: 'Extra Large',
      price: '$429',
      description: 'Full-size SUVs',
      examples: 'Chevy Tahoe, Suburban, Ford Expedition',
      included: [
        'Hand wash, wheels, windows and body',
        'Dress tires and trim',
        'Wax body',
        'Clean interior surfaces',
        'Clean windows',
        'Vacuum seats and carpets'
      ]
    }
  ];

  const fullPricing = basicPricing.map(item => ({
    ...item,
    price: item.price.replace('$', '$3').replace('159', '359').replace('195', '395').replace('249', '449').replace('339', '539').replace('429', '629'),
    included: [
      'Hand wash including jambs',
      'Clay bar treatment',
      'Polish to reduce minor abrasions and dullness',
      'Sealant protection (ceramic coating available)'
    ]
  }));

  const currentPricing = activeTab === 'basic' ? basicPricing : fullPricing;

  return (
    <section id="pricing" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Service Pricing</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="text-red-500">Detail Package</span>
          </h2>
          <p className="text-xl text-gray-300">
            Transparent pricing based on vehicle size with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-900 rounded-full p-1 border border-gray-800">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'basic'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Basic Detail
            </button>
            <button
              onClick={() => setActiveTab('full')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'full'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Full Detail
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {currentPricing.map((tier, index) => (
            <motion.div
              key={tier.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card hover:border-red-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20"
            >
              <div className="text-center mb-6">
                <div className="text-red-400 font-bold text-sm mb-2">{tier.description}</div>
                <h3 className="text-xl font-bold mb-2">{tier.size}</h3>
                <div className="text-3xl font-black text-red-500 mb-2">{tier.price}</div>
                <div className="text-sm text-gray-500">{tier.examples}</div>
              </div>
              
              <div className="space-y-3 mb-6">
                {tier.included.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="tel:5303212936"
                className="btn-primary w-full justify-center text-sm"
              >
                <Phone size={16} />
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            *Prices may vary based on condition of vehicle*
          </p>
        </motion.div>

        {/* Package Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-center">Package Comparison</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-3">Basic Detail</h4>
                <p className="text-gray-300 mb-4">
                  Perfect for regular maintenance between deep cleans. Includes exterior wash, 
                  interior cleaning, and protective wax application.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Hand wash and wax</li>
                  <li>• Interior surface cleaning</li>
                  <li>• Tire and trim dressing</li>
                  <li>• Window cleaning</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-3">Full Detail</h4>
                <p className="text-gray-300 mb-4">
                  Comprehensive restoration with paint correction, clay bar treatment, and 
                  long-lasting sealant protection. Ceramic coating upgrade available.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Everything in Basic, plus:</li>
                  <li>• Paint decontamination (clay bar)</li>
                  <li>• Paint correction and polishing</li>
                  <li>• Sealant or ceramic protection</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
