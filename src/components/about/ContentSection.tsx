import { FC } from 'react';
import { motion } from 'framer-motion';
import { ContentSectionProps } from './types';

export const ContentSection: FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="prose prose-lg max-w-none mb-16"
    >
      <h2 className="text-display-md text-primary-700 mb-6">{title}</h2>
      {children}
    </motion.section>
  );
};
