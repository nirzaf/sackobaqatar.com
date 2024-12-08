export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  status: 'upcoming' | 'ongoing' | 'past';
  location: string;
  attendees: number;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export interface EventCardProps {
  event: Event;
  index: number;
}

export interface EventsGridProps {
  events: Event[];
  selectedCategory: string;
  searchQuery: string;
  activeSection: string;
}
