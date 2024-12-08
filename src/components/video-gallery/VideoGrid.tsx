import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { Video } from './types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: FC<VideoGridProps> = memo(({ videos }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {videos.map((video, index) => (
          <VideoCard key={video.url} video={video} index={index} />
        ))}
      </motion.div>
    </div>
  );
});

VideoGrid.displayName = 'VideoGrid';
export default VideoGrid;
