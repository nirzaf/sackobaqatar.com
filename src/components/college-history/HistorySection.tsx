import { FC, memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { HistorySectionProps } from './types';

export const HistorySection: FC<HistorySectionProps> = memo(({ title, content, year, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-[#1A1A1A] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[#FF69B4]">{year}</span>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            {title}
          </h2>
        </div>
        <ChevronDownIcon 
          className={`w-5 h-5 text-white/70 transition-transform duration-300 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {image && (
                <div className={`mb-6 rounded-xl overflow-hidden ${
                  image.includes('Rugger%20Team') ? 'max-w-3xl mx-auto' : 'max-w-sm mx-auto'
                }`}>
                  <motion.img 
                    src={image} 
                    alt={title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    onLoad={() => setImageLoaded(true)}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="prose prose-lg max-w-none prose-invert">
                <div 
                  className="text-white/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
