import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, DollarSign, Calendar, Phone } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Do prices stay exact?',
      answer: 'Prices start at the listed amount and may vary based on the condition of the vehicle. We provide accurate quotes after assessing your specific needs.',
      icon: DollarSign
    },
    {
      question: 'Can individual services be booked alone?',
      answer: 'Individual services are applied to a Full Detail service. They cannot be booked separately as they are designed to enhance our comprehensive detailing packages.',
      icon: Calendar
    },
    {
      question: 'Can I request service online?',
      answer: 'Yes. Use the quote form to send your request, preferred date, and vehicle details. We\'ll review it and get back to you with a confirmation and exact pricing.',
      icon: Phone
    },
    {
      question: 'How long does a typical detail take?',
      answer: 'Basic details usually take 2-3 hours, while full details can take 4-6 hours depending on vehicle size and condition. Ceramic coating applications may require additional time for proper curing.',
      icon: HelpCircle
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, and digital payments. Payment is due upon completion of service unless other arrangements are made.',
      icon: DollarSign
    },
    {
      question: 'Do you offer mobile detailing?',
      answer: 'Currently, all services are performed at our Chico location. This allows us to maintain quality control and use our professional equipment effectively.',
      icon: HelpCircle
    }
  ];

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">FAQ</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Quick answers to common questions customers may have before calling.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card hover:border-red-900/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 transition-colors">
                  <faq.icon className="text-red-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-red-400 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-300 mb-6">
                Our team is happy to answer any additional questions you might have about our services, 
                pricing, or the detailing process. Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5303212936" className="btn-primary">
                  Call Us
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Form
                </a>
              </div>
            </div>

            <div className="card border-red-900/30 bg-red-950/20">
              <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Regular detailing helps maintain your vehicle's value and appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Ceramic coating can reduce maintenance time between details</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Book in advance during peak seasons for better availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Remove personal items before dropping off your vehicle</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-600/10 border border-red-800/30 rounded-full">
            <Phone className="text-red-400" size={20} />
            <span className="text-red-400 font-medium">
              Quick answers available: Call (530) 321-2936
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
