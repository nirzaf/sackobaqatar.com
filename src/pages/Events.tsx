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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
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
