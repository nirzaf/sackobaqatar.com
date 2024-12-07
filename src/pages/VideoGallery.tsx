import { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface Video {
  title: string;
  url: string;
  duration: string;
  category: string;
}

// Function to extract video ID from YouTube URL
const getYouTubeVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : '';
};

const videos: Video[] = [
  {
    title: "St. Anthony's College Anthem",
    url: "https://www.youtube.com/watch?v=XYZ123abc",
    duration: "3:45",
    category: "Anthem"
  },
  {
    title: "SACKOBA Qatar 10th Anniversary Highlights",
    url: "https://www.youtube.com/watch?v=DEF456ghi",
    duration: "15:20",
    category: "Events"
  },
  {
    title: "Cricket Tournament 2023 Finals",
    url: "https://www.youtube.com/watch?v=JKL789mno",
    duration: "8:15",
    category: "Sports"
  },
  {
    title: "Traditional Dance Performance - Cultural Night 2023",
    url: "https://www.youtube.com/watch?v=PQR321stu",
    duration: "12:30",
    category: "Cultural"
  },
  {
    title: "SACKOBA Qatar Community Service Day 2023",
    url: "https://www.youtube.com/watch?v=VWX654xyz",
    duration: "5:45",
    category: "Community"
  },
  {
    title: "A Day in the Life of an Antonian",
    url: "https://www.youtube.com/watch?v=MNO987pqr",
    duration: "18:25",
    category: "Feature"
  }
];

const categories = Array.from(new Set(videos.map(video => video.category)));

export const VideoGallery: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
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

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto mb-8"
      >
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-primary-600 hover:bg-primary-50'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${getYouTubeVideoId(video.url)}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {video.category}
                  </span>
                  <span className="text-xs text-gray-500">{video.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
