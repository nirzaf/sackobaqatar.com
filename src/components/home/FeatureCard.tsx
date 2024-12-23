import { FC } from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from '@/types/components/home';

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, Icon, gradient, delay = 0, link, titleLink }) => {
  const descriptionParts = link ? description.split('membership form') : [description];
  
  return (
    <motion.div
      className={`${gradient} relative rounded-xl shadow-xl overflow-hidden group h-full min-h-[400px]
        before:absolute before:inset-0 before:bg-black/20 before:z-10
        after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/40 after:to-transparent after:z-20`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl transform -rotate-45 group-hover:-rotate-90 transition-transform duration-700" />
      </div>

      {/* Card Content */}
      <div className="relative z-30 p-8 flex flex-col h-full bg-gradient-to-br from-black/0 via-black/0 to-black/20 group-hover:to-black/30 transition-colors duration-500">
        {/* Icon Container */}
        <div className="shrink-0 mb-6">
          <div className="relative w-16 h-16 transform group-hover:scale-110 transition-all duration-500 ease-out">
            {/* Icon Glow Effect */}
            <div className="absolute inset-0 bg-white/10 rounded-full blur-md transform scale-150 group-hover:scale-200 transition-transform duration-700" />
            <div className="relative">
              <Icon />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300 shrink-0">
          {titleLink ? (
            <a 
              href={titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group/link hover:text-white transition-colors"
            >
              <span>{title}</span>
              <span className="inline-block ml-2 transform translate-x-0 group-hover/link:translate-x-1 opacity-0 group-hover/link:opacity-100 transition-all duration-300">
                →
              </span>
            </a>
          ) : title}
        </h3>

        {/* Description */}
        <div className="flex-grow flex flex-col justify-between">
          <p className="text-white/90 leading-relaxed font-medium">
            {descriptionParts[0]}
          </p>
          {link && (
            <div className="mt-4">
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-semibold group/download
                  relative overflow-hidden hover:text-white transition-colors"
              >
                <span className="relative z-10 border-b-2 border-white/30 group-hover/download:border-white transition-colors">
                  {link.text}
                </span>
                <span className="relative z-10 inline-flex items-center ml-2 transform translate-x-0 group-hover/download:translate-x-1 transition-transform">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          )}
          {descriptionParts[1] && (
            <p className="text-white/90 leading-relaxed font-medium mt-4">
              {descriptionParts[1]}
            </p>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};
