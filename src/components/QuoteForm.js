import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleSize: '',
    serviceType: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        vehicleSize: '',
        serviceType: '',
        preferredDate: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(530) 321-2936',
      href: 'tel:5303212936'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '636 Nord Ave Ste A, Chico, CA 95928',
      href: 'https://www.google.com/maps/search/?api=1&query=636+Nord+Ave+Ste+A,+Chico,+CA+95928'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon 9AM–5PM • Tue–Thu 8AM–6PM • Sat/Sun Closed',
      href: null
    }
  ];

  return (
    <section id="quote" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Request Quote</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your <span className="text-red-500">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-300">
            Send your service request and we'll get back to you with a detailed quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-red-400" size={24} />
                    </div>
                    <div>
                      <div className="font-bold mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-red-400 transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card border-red-900/30 bg-red-950/20">
              <h4 className="text-lg font-bold mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Professional, experienced detailers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Premium products and equipment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Satisfaction guaranteed
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Convenient scheduling options
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Service Request Form</h3>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-400"
                >
                  Thank you! Your quote request has been submitted successfully. We'll contact you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-400"
                >
                  Oops! Something went wrong. Please try again or give us a call.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="(530) 555-5555"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Vehicle Size <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="vehicleSize"
                      value={formData.vehicleSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select size</option>
                      <option value="Extra Small">Extra Small</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                      <option value="Extra Large">Extra Large</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Type <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select service</option>
                      <option value="Basic Cleaning with Wax">Basic Cleaning with Wax</option>
                      <option value="Full Detail">Full Detail</option>
                      <option value="Ceramic Coating">Ceramic Coating</option>
                      <option value="Headlights Restoration">Headlights Restoration</option>
                      <option value="Spot Cleaning">Spot Cleaning</option>
                      <option value="Deep Shampoo Cleaning">Deep Shampoo Cleaning</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vehicle / Service Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle, stains, paint issues, or anything else."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Request
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  We will follow up with you after reviewing your request.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
