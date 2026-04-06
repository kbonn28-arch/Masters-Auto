import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Quality Service',
      description: 'Professional detailing with attention to every detail'
    },
    {
      icon: Award,
      title: 'Expert Care',
      description: 'Trained professionals using industry-leading products'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'From quote to pickup, we prioritize your satisfaction'
    },
    {
      icon: Clock,
      title: 'Efficient Service',
      description: 'Timely completion without compromising quality'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Master's Auto Detail, Chico CA</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-red-500">Master's Auto Detail</span>
          </h2>
          <p className="text-xl text-gray-300">
            Professional car care with a focus on quality service, vehicle protection, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <p className="text-gray-300 leading-relaxed mb-6">
                In Chico, Master's Auto Detail offers auto detailing, paint correction, Ceramic Pro application,
                and more. The goal is to help protect your investment and leave both the exterior and interior
                looking and feeling revitalized.
              </p>
              
              <div className="space-y-4">
                {[
                  'Auto detailing for exterior and interior refresh',
                  'Paint correction for improved gloss and finish',
                  'Ceramic coating support for long-term protection',
                  'Customer-focused service from quote to pickup'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <div className="eyebrow mb-4">Mission Statement</div>
              <p className="text-gray-300 leading-relaxed">
                At Master's Auto Detail in Chico, CA, the mission is to revitalize and protect each vehicle
                through quality craftsmanship, outstanding customer service, and a commitment to preserving
                the aesthetic appeal of the car.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-red-400" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
