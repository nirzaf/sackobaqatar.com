import { FC } from 'react';
import { motion } from 'framer-motion';
import { MilestoneCard } from './MilestoneCard';

export const MilestonesSection: FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-[#541D67] to-[#B62D71] p-8 rounded-xl text-white shadow-xl relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

    <h3 className="text-3xl font-bold mb-8 text-white relative">
      Key Milestones
      <div className="absolute -bottom-3 left-0 w-16 h-1 bg-white/30 rounded-full"></div>
    </h3>

    <div className="space-y-8 relative">
      <MilestoneCard
        year="2018"
        yearShort="18"
        title="Website Launch"
        description="Launch of sackobaqatar.org with improved design and mobile optimization"
        delay={0.6}
      />
    </div>
  </motion.div>
);
