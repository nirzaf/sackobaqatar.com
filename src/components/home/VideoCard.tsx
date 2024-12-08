import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { VideoCardProps, fadeInUp } from './interfaces';

export const VideoCard: FC<VideoCardProps> = memo(({ title, duration }) => (
  <motion.div 
    className="relative aspect-video bg-[#B1B3CE]/20 rounded-lg overflow-hidden group"
    {...fadeInUp}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-[#541D67] rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-white/80 text-sm">{duration}</p>
    </div>
  </motion.div>
));
