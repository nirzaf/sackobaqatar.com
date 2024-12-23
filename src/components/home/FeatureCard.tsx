import { FC } from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from '@/types/components/home';

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, Icon, gradient, delay = 0, link, titleLink }) => {
  const descriptionParts = link ? description.split('membership form') : [description];
  
  return (
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
        {titleLink ? (
          <a 
            href={titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors cursor-pointer"
          >
            {title}
          </a>
        ) : title}
      </h3>
      <p className="text-white/90 leading-relaxed font-medium mb-4">
        {descriptionParts[0]}
        {link && (
          <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium underline hover:text-white/80 transition-colors"
          >
            {link.text}
          </a>
        )}
        {descriptionParts[1]}
      </p>
    </motion.div>
  );
};
