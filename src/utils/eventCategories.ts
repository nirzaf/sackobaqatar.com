// Event category management utilities

export type EventCategoryType = 'Sports' | 'Cultural' | 'Religious' | 'Social' | 'Academic' | 'Community';

export interface CategoryConfig {
  name: EventCategoryType;
  color: string;
  bgColor: string;
  icon: string;
  description: string;
}

export const eventCategories: Record<EventCategoryType, CategoryConfig> = {
  Sports: {
    name: 'Sports',
    color: 'text-green-800',
    bgColor: 'bg-green-100',
    icon: '🏆',
    description: 'Athletic competitions, tournaments, and sports events'
  },
  Cultural: {
    name: 'Cultural',
    color: 'text-purple-800',
    bgColor: 'bg-purple-100',
    icon: '🎭',
    description: 'Cultural celebrations, traditional festivals, and heritage events'
  },
  Religious: {
    name: 'Religious',
    color: 'text-blue-800',
    bgColor: 'bg-blue-100',
    icon: '🙏',
    description: 'Religious ceremonies, feast days, and spiritual gatherings'
  },
  Social: {
    name: 'Social',
    color: 'text-yellow-800',
    bgColor: 'bg-yellow-100',
    icon: '🤝',
    description: 'Social gatherings, family events, and community meetups'
  },
  Academic: {
    name: 'Academic',
    color: 'text-indigo-800',
    bgColor: 'bg-indigo-100',
    icon: '🎓',
    description: 'Educational events, AGMs, and academic ceremonies'
  },
  Community: {
    name: 'Community',
    color: 'text-gray-800',
    bgColor: 'bg-gray-100',
    icon: '🏘️',
    description: 'Community service, outreach programs, and volunteer activities'
  }
};

// Function to get category configuration
export function getCategoryConfig(category: EventCategoryType): CategoryConfig {
  return eventCategories[category];
}

// Function to get all category names
export function getAllCategories(): EventCategoryType[] {
  return Object.keys(eventCategories) as EventCategoryType[];
}

// Function to get category color classes
export function getCategoryClasses(category: EventCategoryType): { color: string; bgColor: string } {
  const config = getCategoryConfig(category);
  return {
    color: config.color,
    bgColor: config.bgColor
  };
}

// Function to categorize events automatically based on keywords
export function suggestCategory(eventName: string, description?: string): EventCategoryType {
  const text = `${eventName} ${description || ''}`.toLowerCase();
  
  // Sports keywords
  if (text.match(/\b(cricket|rugby|football|soccer|tennis|bowling|tournament|sports|athletic|competition|match|game|7s)\b/)) {
    return 'Sports';
  }
  
  // Cultural keywords
  if (text.match(/\b(new year|awurudu|cultural|traditional|dance|music|performance|festival|celebration|heritage)\b/)) {
    return 'Cultural';
  }
  
  // Religious keywords
  if (text.match(/\b(feast|st\.|saint|anthony|religious|prayer|mass|church|iftar|ramadan|christmas|easter)\b/)) {
    return 'Religious';
  }
  
  // Academic keywords
  if (text.match(/\b(agm|annual general meeting|college day|graduation|academic|education|school|university)\b/)) {
    return 'Academic';
  }
  
  // Social keywords
  if (text.match(/\b(family|social|gathering|picnic|outing|party|reunion|meetup|networking)\b/)) {
    return 'Social';
  }
  
  // Default to Community
  return 'Community';
}

// Function to get events by category
export function filterEventsByCategory<T extends { category: EventCategoryType }>(
  events: T[], 
  category: EventCategoryType | 'all'
): T[] {
  if (category === 'all') {
    return events;
  }
  return events.filter(event => event.category === category);
}

// Function to get category statistics
export function getCategoryStats<T extends { category: EventCategoryType }>(events: T[]): Record<EventCategoryType | 'total', number> {
  const stats = getAllCategories().reduce((acc, category) => {
    acc[category] = events.filter(event => event.category === category).length;
    return acc;
  }, {} as Record<EventCategoryType, number>);
  
  return {
    ...stats,
    total: events.length
  };
}

// Function to get the most popular category
export function getMostPopularCategory<T extends { category: EventCategoryType }>(events: T[]): EventCategoryType | null {
  const stats = getCategoryStats(events);
  let maxCount = 0;
  let mostPopular: EventCategoryType | null = null;
  
  getAllCategories().forEach(category => {
    if (stats[category] > maxCount) {
      maxCount = stats[category];
      mostPopular = category;
    }
  });
  
  return mostPopular;
}

// Function to validate category
export function isValidCategory(category: string): category is EventCategoryType {
  return getAllCategories().includes(category as EventCategoryType);
}

// Function to get category display name with icon
export function getCategoryDisplayName(category: EventCategoryType): string {
  const config = getCategoryConfig(category);
  return `${config.icon} ${config.name}`;
}
