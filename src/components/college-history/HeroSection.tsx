import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { HeroSectionProps, fadeIn, fadeInUp } from './types';

export const HeroSection: FC<HeroSectionProps> = memo(({ title, subtitle }) => (
  <motion.div 
    {...fadeIn}
    className="relative pt-24 pb-16 overflow-hidden"
  >
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-primary-900 mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-primary-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  </motion.div>
));
