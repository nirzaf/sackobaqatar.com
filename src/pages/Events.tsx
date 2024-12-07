import { FC } from 'react';
import { motion } from 'framer-motion';
import { EventList } from '../components/events/EventList';

// Import event images
import eventHero from '../assets/images/events/a79e91_29bf2faf77ec498bb49e8b4d2f0a7e56~mv2_1.png';
import cricketEvent from '../assets/images/events/a79e91_0fe20be97f454538a07e5bb0dc9ef482~mv2.png';
import culturalEvent from '../assets/images/events/a79e91_ba48d3e579b84155b20f65fba8120ac6~mv2.jpg';
import familyEvent from '../assets/images/events/a79e91_8a52ef3c6718473fb5d65f2f83477e4a~mv2.jpg';
import communityEvent from '../assets/images/events/a79e91_4a3d0c850f7142358da16ed18728ccb0~mv2.jpg';

// Sample event data with actual images
const events = [
  {
    id: '1',
    title: 'Annual Cricket Tournament 2024',
    date: 'March 15, 2024',
    location: 'West Bay Cricket Ground, Doha',
    attendees: 120,
    imageUrl: cricketEvent,
    category: 'Sports',
    description: 'Join us for our annual cricket tournament featuring teams from different batches. Exciting matches, great food, and wonderful company!',
  },
  {
    id: '2',
    title: 'Cultural Evening: Sri Lankan Night',
    date: 'April 5, 2024',
    location: 'Antonian Community Center',
    attendees: 200,
    imageUrl: culturalEvent,
    category: 'Cultural',
    description: 'Experience the rich cultural heritage of Sri Lanka with traditional music, dance performances, and authentic cuisine.',
  },
  {
    id: '3',
    title: 'Family Day Out',
    date: 'May 20, 2024',
    location: 'Al Bidda Park',
    attendees: 150,
    imageUrl: familyEvent,
    category: 'Social',
    description: 'A fun-filled day for Antonian families featuring games, activities, and a grand BBQ lunch.',
  },
  {
    id: '4',
    title: 'Community Service Day',
    date: 'June 10, 2024',
    location: 'Various Locations, Doha',
    attendees: 80,
    imageUrl: communityEvent,
    category: 'Community',
    description: 'Give back to the community through various service activities and charitable initiatives.',
  },
];

export const Events: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/60"
          />
          <motion.img
            src={eventHero}
            alt="Events Hero"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 pt-32">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Community Events
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 font-medium max-w-2xl"
            >
              Join us in celebrating our heritage, strengthening bonds, and creating lasting memories 
              with the Antonian community in Qatar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#upcoming-events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-500 text-white text-sm font-medium transition-colors hover:bg-accent-600"
              >
                View Upcoming Events
              </a>
              <a
                href="#all-events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg text-white text-sm font-medium transition-colors hover:bg-white/20"
              >
                Browse All Events
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"
        />
      </div>

      {/* Events Grid Section */}
      <div className="container mx-auto px-6 py-24" id="upcoming-events">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
