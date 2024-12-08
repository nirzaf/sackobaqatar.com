import { FC } from 'react';
import { motion } from 'framer-motion';
import { HeroSectionProps } from './types';

export const HeroSection: FC<HeroSectionProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/60"
        />
        <motion.img
          src={backgroundImage}
          alt="Events Hero"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-6 pt-32">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-8 font-medium max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#upcoming-events"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-500 text-white text-sm font-medium transition-colors hover:bg-accent-600"
            >
              View Upcoming Events
            </a>
            <a
              href="#all-events"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg text-white text-sm font-medium transition-colors hover:bg-white/20"
            >
              Browse All Events
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"
      />
    </div>
  );
};
