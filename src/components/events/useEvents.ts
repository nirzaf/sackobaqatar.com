import { useState, useEffect } from 'react';
import { Event } from './types';
import { events } from './data';

export const useEvents = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    const filtered = events.filter(event => {
      const matchesSearch = 
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      return matchesSearch;
    });
    setFilteredEvents(filtered);
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredEvents,
    activeSection,
    setActiveSection
  };
};
