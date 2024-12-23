import { FC } from 'react';
import { motion } from 'framer-motion';
import { GradientTitle } from '../../shared/GradientTitle';
import { HistoryContent } from './HistoryContent';
import { MilestonesSection } from './MilestonesSection';

export const HistorySection: FC = () => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4"
    >
      <GradientTitle>
        The Beginning & The History
      </GradientTitle>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <HistoryContent />
        <MilestonesSection />
      </div>
    </motion.div>
  </div>
);
