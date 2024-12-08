import { FC } from 'react';
import { motion } from 'framer-motion';

const VideoHeader: FC = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary-900 mb-4"
      >
        Video Gallery
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-primary-600"
      >
        Explore our collection of memorable moments and events
      </motion.p>
    </div>
  );
};

export default VideoHeader;
