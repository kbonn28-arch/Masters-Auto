import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(530) 321-2936',
      href: 'tel:5303212936',
      description: 'Call us for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '636 Nord Ave Ste A, Chico, CA 95928',
      href: 'https://www.google.com/maps/search/?api=1&query=636+Nord+Ave+Ste+A,+Chico,+CA+95928',
      description: 'Visit our professional detailing facility'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon: 9AM - 5PM • Tue-Thu: 8AM - 6PM • Sat/Sun: CLOSED',
      href: null,
      description: 'Schedule your appointment during our operating hours'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Contact Us</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to transform your vehicle? Contact us today to schedule your detailing service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Master's Auto Detail</h3>
              <p className="text-gray-300 mb-8">
                Professional auto detailing, paint correction, ceramic coatings, and interior care in Chico, California.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-red-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-red-400 transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <div className="text-gray-300">{info.details}</div>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="card border-red-900/30 bg-red-950/20">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="text-red-400" size={20} />
                Business Hours
              </h4>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className={`font-medium ${schedule.hours === 'Closed' ? 'text-red-400' : 'text-white'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-8">
                Choose the most convenient way to reach us and start your vehicle transformation today.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:5303212936"
                  className="card hover:border-red-900/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                        <Phone className="text-red-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">Call Now</h4>
                        <p className="text-sm text-gray-400">Speak with our team immediately</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-red-400 transition-colors" size={20} />
                  </div>
                </a>

                <a
                  href="#quote"
                  className="card hover:border-red-900/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                        <Mail className="text-red-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">Request Quote</h4>
                        <p className="text-sm text-gray-400">Get a detailed quote online</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-red-400 transition-colors" size={20} />
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=636+Nord+Ave+Ste+A,+Chico,+CA+95928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card hover:border-red-900/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                        <MapPin className="text-red-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">Get Directions</h4>
                        <p className="text-sm text-gray-400">Navigate to our facility</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-red-400 transition-colors" size={20} />
                  </div>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card border-red-900/30 bg-red-950/20">
              <h4 className="text-lg font-bold mb-3 text-red-400">Need Urgent Service?</h4>
              <p className="text-gray-300 mb-4">
                For urgent detailing needs or special event preparation, give us a call directly. 
                We'll do our best to accommodate your schedule.
              </p>
              <a href="tel:5303212936" className="btn-primary w-full justify-center">
                <Phone size={20} />
                Call for Priority Service
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Location</h3>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-red-400" />
                  <p className="text-lg font-medium mb-2">636 Nord Ave Ste A, Chico, CA 95928</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=636+Nord+Ave+Ste+A,+Chico,+CA+95928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
