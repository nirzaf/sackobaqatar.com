import { FC } from 'react';
import {
  Navigation,
  Filters,
  EventsGrid,
  useEvents
} from '../components/events';

export const Events: FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredEvents,
    activeSection,
    setActiveSection,
    categories
  } = useEvents();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <EventsGrid
        events={filteredEvents}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        activeSection={activeSection}
      />
    </div>
  );
};
