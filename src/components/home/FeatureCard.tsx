import { FC } from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from './types';

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, Icon, gradient, delay = 0 }) => (
  <motion.div
    className={`${gradient} text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300
      hover:translate-y-[-8px] group`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
      <Icon />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
      {title}
    </h3>
    <p className="text-white/90 leading-relaxed font-medium">
      {description}
    </p>
  </motion.div>
);
