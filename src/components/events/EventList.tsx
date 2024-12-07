import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { EventCard } from './EventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  imageUrl?: string;
  category: string;
  description: string;
}

interface EventListProps {
  events: Event[];
}

const categories = ['All', 'Upcoming', 'Sports', 'Cultural', 'Social'];

export const EventList: FC<EventListProps> = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = events.filter(event => 
    selectedCategory === 'All' || event.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <Tab.Group onChange={(index) => setSelectedCategory(categories[index])}>
        <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-400 focus:outline-none focus:ring-2
                ${
                  selected
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-600 hover:bg-white/[0.12] hover:text-primary-700'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      {/* Events Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <EventCard
                title={event.title}
                date={event.date}
                location={event.location}
                attendees={event.attendees}
                imageUrl={event.imageUrl}
                category={event.category}
                description={event.description}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No events found
          </h3>
          <p className="text-gray-500">
            There are no events in this category at the moment.
          </p>
        </motion.div>
      )}
    </div>
  );
};
