import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroSectionProps } from './types';

export const HeroSection: FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Join Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
