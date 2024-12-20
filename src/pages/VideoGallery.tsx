import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import ImageGallerySection from '../components/video-gallery/ImageGallerySection';
import { Video } from '../components/video-gallery/types';

const videos: Video[] = [
  {
    title: "SACKOBA Qatar Community Event",
    url: "https://www.youtube.com/watch?v=XvXWZ2pV3Do",
    duration: "3:45",
    category: "Community",
    description: "Highlights from our vibrant community gathering in Qatar"
  },
  {
    title: "Annual Sports Meet 2023",
    url: "https://www.youtube.com/watch?v=ix9COgFRPZc",
    duration: "5:20",
    category: "Sports",
    description: "Exciting moments from our annual sports competition"
  },
  {
    title: "Cultural Evening Highlights",
    url: "https://www.youtube.com/watch?v=bGXXF1Iuqd0",
    duration: "4:15",
    category: "Cultural",
    description: "A celebration of our rich cultural heritage"
  },
  {
    title: "SACKOBA Qatar Anniversary Celebration",
    url: "https://www.youtube.com/watch?v=KKb4U9kSUCk",
    duration: "6:30",
    category: "Events",
    description: "Special moments from our anniversary celebration"
  }
];

const categories = ['All', ...Array.from(new Set(videos.map(video => video.category)))];

export const VideoGallery: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#541D67] to-[#B62D71]">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-3xl text-white font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Media Gallery
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Capturing Memorable Moments of SACKOBA Qatar
          </motion.p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallerySection />

      {/* Video Gallery Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#541D67] to-[#B62D71] bg-clip-text text-transparent">
            Video Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch and relive the special moments from our events and gatherings
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white text-primary-600 hover:bg-primary-50'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{video.duration}</span>
                  <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                    {video.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
