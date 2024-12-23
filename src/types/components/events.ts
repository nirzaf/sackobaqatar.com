import { Event } from '../events';

export interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export interface NavigationProps {
  categories: string[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  imageUrl?: string;
  category: string;
  description: string;
  onClick?: () => void;
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
