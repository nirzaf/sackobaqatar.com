export interface EventImage {
  url: string;
  title: string;
}

export interface Event {
  id: string;
  year: string;
  name: string;
  images: EventImage[];
  date: string;
  description?: string;
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
  searchQuery: string;
  activeSection: string;
}

export interface YearFilterProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
}
