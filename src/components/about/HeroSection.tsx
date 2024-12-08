import { FC } from 'react';
import { motion } from 'framer-motion';
import { LOGO_URL, LOGO_ALT, LOGO_DIMENSIONS } from '../../assets/images/logo';
import { HeroSectionProps } from './types';

export const HeroSection: FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={LOGO_URL}
              alt={LOGO_ALT}
              width={LOGO_DIMENSIONS.hero.width}
              height={LOGO_DIMENSIONS.hero.height}
              className="mx-auto"
            />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-display-lg text-primary-700 mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-primary-500 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
