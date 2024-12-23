import { useState, useEffect, useMemo } from 'react';
import { Event } from '@/types/events';

export const useEventFiltering = (staticEvents: Event[]) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [events, setEvents] = useState<Event[]>([]);
  const [years, setYears] = useState<string[]>([]);

  // Initialize events and years
  useEffect(() => {
    const validEvents = staticEvents.filter(event => 
      event.images && 
      event.images.length > 0 && 
      event.images[0].url.startsWith('https://ik.imagekit.io/sackoba/')
    );
    setEvents(validEvents);

    const uniqueYears = Array.from(new Set(validEvents.map((event: Event) => event.year)))
      .sort((a, b) => b.localeCompare(a));
    setYears(['all', ...uniqueYears]);
  }, [staticEvents]);

  // Memoize filtered events
  const filteredEvents = useMemo(() => 
    events.filter(event => selectedYear === 'all' || event.year === selectedYear),
    [events, selectedYear]
  );

  return {
    events,
    years,
    selectedYear,
    setSelectedYear,
    filteredEvents
  };
};
