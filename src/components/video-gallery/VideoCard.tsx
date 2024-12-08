import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { Video } from './types';
import { getYouTubeVideoId } from './utils';

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard: FC<VideoCardProps> = memo(({ video, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <iframe
          src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.url)}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary-900 mb-2">{video.title}</h3>
        <div className="flex items-center justify-between text-sm text-primary-600">
          <span>{video.duration}</span>
          <span className="px-2 py-1 bg-primary-50 rounded-full">{video.category}</span>
        </div>
      </div>
    </motion.div>
  );
});

VideoCard.displayName = 'VideoCard';
export default VideoCard;
