import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { HistorySectionProps, fadeInUp } from './types';

export const HistorySection: FC<HistorySectionProps> = memo(({ title, content }) => (
  <motion.div 
    className="mb-16"
    {...fadeInUp}
  >
    <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
      {title}
    </h2>
    <p className="text-lg text-primary-600 leading-relaxed">
      {content}
    </p>
  </motion.div>
));
