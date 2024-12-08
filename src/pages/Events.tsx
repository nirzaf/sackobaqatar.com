import { FC } from 'react';
import {
  HeroSection,
  Navigation,
  Filters,
  EventsGrid,
  useEvents
} from '../components/events';
import { heroImage } from '../components/events/data';

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection
        title="Community Events"
        description="Join us in celebrating our heritage, strengthening bonds, and creating lasting memories with the Antonian community in Qatar."
        backgroundImage={heroImage}
      />

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
