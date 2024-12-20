import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsImage {
  url: string;
  title: string;
  description: string;
  category: string;
}

const newsImages: NewsImage[] = [
  {
    url: 'https://ik.imagekit.io/sackoba/news/Badminton_tournament_winners_and_sponsors.jpg?updatedAt=1734691334222',
    title: 'Badminton Tournament Champions',
    description: 'Winners and sponsors of the SACKOBA Qatar Badminton Tournament celebrating their achievement.',
    category: 'Sports'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lankan_Badminton_Tournament_Group_Photo.jpg?updatedAt=1734691334288',
    title: 'Sri Lankan Badminton Tournament',
    description: 'Group photo of participants from the Sri Lankan Community Badminton Tournament.',
    category: 'Community'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lankan_community_badminton_tournament_event_group.jpg?updatedAt=1734691334396',
    title: 'Community Badminton Event',
    description: 'Sri Lankan community members gathered for the annual badminton tournament.',
    category: 'Events'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lanka_Old_Boys_Association_Event.jpg?updatedAt=1734691334256',
    title: 'Old Boys Association Gathering',
    description: 'SACKOBA Qatar members at a special association event.',
    category: 'Events'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/SACKOBA_Cricket_Team_Champions_Group_Photo.jpg?updatedAt=1734691334402',
    title: 'Cricket Champions',
    description: 'SACKOBA Qatar Cricket Team celebrating their championship victory.',
    category: 'Sports'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Rizlan_receives_award_at_Doha_Antonians_meeting.jpg?updatedAt=1734691334287',
    title: 'Award Ceremony',
    description: 'Rizlan receiving an award at the Doha Antonians meeting.',
    category: 'Recognition'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Rayyan_Talons_Smash_Badminton_Tournament_Poster.jpg?updatedAt=1734691334575',
    title: 'Rayyan Talons Smash Tournament',
    description: 'Upcoming badminton tournament organized by SACKOBA Qatar.',
    category: 'Announcements'
  },
  {
    url: 'https://ik.imagekit.io/sackoba/news/Sri_Lankan_Badminton_Event_Team_Photo.jpg?updatedAt=1734691334550',
    title: 'Badminton Event Teams',
    description: 'Team photo from the Sri Lankan Badminton Tournament.',
    category: 'Sports'
  }
];

const categories = ['All', ...Array.from(new Set(newsImages.map(img => img.category)))];

const NewsGallery: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<NewsImage | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? newsImages 
    : newsImages.filter(img => img.category === selectedCategory);

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
            SACKOBA News & Events
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Celebrating Our Community's Achievements
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
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

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const News: FC = () => <NewsGallery />;
