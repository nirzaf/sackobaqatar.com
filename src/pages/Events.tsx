import { FC } from 'react';
import { motion } from 'framer-motion';
import { EventList } from '../components/events/EventList';

// Sample event data
const events = [
  {
    id: '1',
    title: 'Annual Cricket Tournament 2024',
    date: 'March 15, 2024',
    location: 'West Bay Cricket Ground, Doha',
    attendees: 120,
    imageUrl: '/images/events/cricket.jpg',
    category: 'Sports',
    description: 'Join us for our annual cricket tournament featuring teams from different batches. Exciting matches, great food, and wonderful company!',
  },
  {
    id: '2',
    title: 'Cultural Evening: Sri Lankan Night',
    date: 'April 5, 2024',
    location: 'Antonian Community Center',
    attendees: 200,
    imageUrl: '/images/events/cultural.jpg',
    category: 'Cultural',
    description: 'Experience the rich cultural heritage of Sri Lanka with traditional music, dance performances, and authentic cuisine.',
  },
  {
    id: '3',
    title: 'Family Day Out',
    date: 'May 20, 2024',
    location: 'Al Bidda Park',
    attendees: 150,
    imageUrl: '/images/events/family.jpg',
    category: 'Social',
    description: 'A fun-filled day for Antonian families featuring games, activities, and a grand BBQ lunch.',
  },
];

export const Events: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-50/90 to-primary-100/90">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
            style={{ filter: 'brightness(0.9)' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 pt-32">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display-xl text-primary-700 mb-6"
            >
              Community Events
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-primary-600 mb-8 font-medium"
            >
              Join us in celebrating our heritage, strengthening bonds, and creating lasting memories 
              with the Antonian community in Qatar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="#upcoming-events"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent-300 text-white text-sm font-medium transition-colors hover:bg-accent-400"
              >
                View Upcoming Events
              </a>
              <a
                href="#all-events"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-lg text-primary-600 text-sm font-medium transition-colors hover:bg-white"
              >
                Browse All Events
              </a>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
          />
        </div>
      </div>

      {/* Events Section */}
      <div id="upcoming-events" className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-md text-primary-700 mb-4">
              Upcoming Events
            </h2>
            <p className="text-primary-500">
              Discover and join our upcoming community events. From sports tournaments 
              to cultural celebrations, there's something for everyone.
            </p>
          </div>

          <EventList events={events} />
        </motion.div>
      </div>
    </div>
  );
};
