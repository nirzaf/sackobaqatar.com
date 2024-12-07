import { FC } from 'react';
import { motion } from 'framer-motion';
import type { VideoItem } from '../types';

const videos: VideoItem[] = [
  {
    title: 'SACK OBA QATAR',
    duration: '00:16',
    description: 'A brief introduction to SACKOBA Qatar'
  },
  {
    title: 'TALONS SMASH 2018',
    duration: '00:15',
    description: 'Make the feathers fly!'
  },
  {
    title: 'SACKOBA Q 10th Year Anniversary Logo and Theme Launch',
    duration: '01:44',
    description: '10 Years of Excellence'
  },
  {
    title: 'Decades Rewind: A Trip Down Memory Lane',
    duration: '15:10',
    description: 'A nostalgic journey celebrating SACKOBA Qatar 10th anniversary in 2019, featuring numerous photos'
  }
];

export const VideoGallery: FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Video Gallery</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  {/* Video thumbnail or player would go here */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="h-20 w-20 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    Duration: {video.duration}
                  </p>
                  <p className="text-gray-600">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
