import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroContentProps } from '../types';

export const HeroContent: FC<HeroContentProps> = ({ title, description }) => (
  <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6"
    >
      {title}
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base sm:text-lg md:text-xl text-text-body max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
    >
      {description}
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="px-4"
    >
      <Link
        to="/about"
        className="inline-block bg-primary-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
                 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform 
                 hover:-translate-y-0.5 transition-all duration-300 hover:bg-primary-700 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600
                 active:bg-primary-800 active:transform-none"
      >
        Learn More
      </Link>
    </motion.div>
  </div>
);
