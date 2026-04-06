import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      title: 'Professional finish',
      content: 'Easy communication and the vehicle looked amazing when it was done. The attention to detail was impressive and the price was fair for the quality of work.',
      author: 'Michael R.',
      rating: 5,
      service: 'Full Detail'
    },
    {
      id: 2,
      title: 'Clear service options',
      content: 'The pricing and package sections made it easier to understand what to choose. Staff was knowledgeable and helped me pick the right service for my truck.',
      author: 'Sarah K.',
      rating: 5,
      service: 'Basic Detail + Ceramic Coating'
    },
    {
      id: 3,
      title: 'Would book again',
      content: 'Great experience and the quote process was simple. My SUV looks brand new after the full detail. Definitely coming back for regular maintenance.',
      author: 'James T.',
      rating: 5,
      service: 'Full Detail'
    },
    {
      id: 4,
      title: 'Amazing ceramic coating',
      content: 'The ceramic coating they applied has made my car so much easier to clean. Water just beads right off. Worth every penny!',
      author: 'Lisa M.',
      rating: 5,
      service: 'Ceramic Coating'
    },
    {
      id: 5,
      title: 'Headlights restored perfectly',
      content: 'My cloudy headlights look like new again. The restoration service was quick and affordable. Much better visibility at night now.',
      author: 'David W.',
      rating: 5,
      service: 'Headlights Restoration'
    },
    {
      id: 6,
      title: 'Interior deep clean',
      content: 'The deep shampoo cleaning removed stains I thought were permanent. My car interior smells fresh and looks clean again.',
      author: 'Jennifer A.',
      rating: 5,
      service: 'Deep Shampoo Cleaning'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
      />
    ));
  };

  return (
    <section id="reviews" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="eyebrow justify-center">Customer Reviews</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-red-500">Customers</span> Are Saying
          </h2>
          <p className="text-xl text-gray-300">
            Real feedback from satisfied customers in Chico, CA.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card hover:border-red-900/50 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                  {review.title}
                </h3>
                <div className="text-sm text-red-400 font-medium mb-3">
                  {review.service}
                </div>
              </div>
              
              <blockquote className="text-gray-300 mb-4 italic">
                "{review.content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-400">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{review.author}</div>
                    <div className="text-xs text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card border-red-900/30 bg-red-950/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-red-500 mb-2">5.0</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-black text-red-500 mb-2">150+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-black text-red-500 mb-2">5+ Years</div>
                <div className="text-gray-400">Serving Chico</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Our Service?</h3>
            <p className="text-gray-300 mb-6">
              Join our satisfied customers and give your vehicle the professional care it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quote" className="btn-primary">
                Get Your Free Quote
              </a>
              <a href="tel:5303212936" className="btn-secondary">
                Call Us Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
