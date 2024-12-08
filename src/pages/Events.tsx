import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Search, Calendar, Filter } from 'react-feather';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  status: 'upcoming' | 'ongoing' | 'past';
}

// Import event images
import eventHero from '../assets/images/events/a79e91_29bf2faf77ec498bb49e8b4d2f0a7e56~mv2_1.png';
import cricketEvent from '../assets/images/events/a79e91_0fe20be97f454538a07e5bb0dc9ef482~mv2.png';
import culturalEvent from '../assets/images/events/a79e91_ba48d3e579b84155b20f65fba8120ac6~mv2.jpg';
import familyEvent from '../assets/images/events/a79e91_8a52ef3c6718473fb5d65f2f83477e4a~mv2.jpg';
import communityEvent from '../assets/images/events/a79e91_4a3d0c850f7142358da16ed18728ccb0~mv2.jpg';

// Sample event data with actual images
const events: Event[] = [
  {
    id: '1',
    title: 'Annual Cricket Tournament 2024',
    date: '2024-03-15',
    location: 'West Bay Cricket Ground, Doha',
    attendees: 120,
    imageUrl: cricketEvent,
    category: 'Sports',
    description: 'Join us for our annual cricket tournament featuring teams from different batches. Exciting matches, great food, and wonderful company!',
    status: 'upcoming',
  },
  {
    id: '2',
    title: 'Cultural Evening: Sri Lankan Night',
    date: '2024-04-05',
    location: 'Antonian Community Center',
    attendees: 200,
    imageUrl: culturalEvent,
    category: 'Cultural',
    description: 'Experience the rich cultural heritage of Sri Lanka with traditional music, dance performances, and authentic cuisine.',
    status: 'upcoming',
  },
  {
    id: '3',
    title: 'Family Day Out',
    date: '2024-05-20',
    location: 'Al Bidda Park',
    attendees: 150,
    imageUrl: familyEvent,
    category: 'Social',
    description: 'A fun-filled day for Antonian families featuring games, activities, and a grand BBQ lunch.',
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Community Service Day',
    date: '2024-06-10',
    location: 'Various Locations, Doha',
    attendees: 80,
    imageUrl: communityEvent,
    category: 'Community',
    description: 'Give back to the community through various service activities and charitable initiatives.',
    status: 'upcoming',
  },
];

export const Events: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [activeSection, setActiveSection] = useState('upcoming');

  const categories = ['all', ...new Set(events.map(event => event.category))];

  useEffect(() => {
    const filtered = events.filter(event => {
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredEvents(filtered);
  }, [selectedCategory, searchQuery]);

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

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-6">
              {['upcoming', 'ongoing', 'past'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${activeSection === section 
                      ? section === 'upcoming' ? 'bg-blue-400 text-white' :
                        section === 'ongoing' ? 'bg-purple-400 text-white' :
                        'bg-pink-400 text-white'
                      : 'text-white bg-gray-400 hover:bg-gray-500'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)} Events
                </button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-4">
          <Filter className="text-gray-400 w-4 h-4" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors
                ${selectedCategory === category 
                  ? 'bg-blue-400 text-white' 
                  : 'text-white bg-gray-400 hover:bg-gray-500'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery + activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                      ${event.status === 'upcoming' ? 'bg-blue-400 text-white' :
                        event.status === 'ongoing' ? 'bg-purple-400 text-white' :
                        'bg-pink-400 text-white'}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white text-sm mb-2 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
                    <span>•</span>
                    <span>{event.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {event.description}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
