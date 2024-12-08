import { useState, useEffect } from 'react';
import { Event } from './types';
import { events } from './data';

export const useEvents = () => {
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

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredEvents,
    activeSection,
    setActiveSection,
    categories
  };
};
