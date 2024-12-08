import { FC } from 'react';
import { motion } from 'framer-motion';
import { VideoCardProps } from './types';

export const VideoCard: FC<VideoCardProps> = ({ title, duration, thumbnailUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        {thumbnailUrl && <img src={thumbnailUrl} alt={title} className="object-cover" />}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">Duration: {duration}</p>
      </div>
    </motion.div>
  );
};
