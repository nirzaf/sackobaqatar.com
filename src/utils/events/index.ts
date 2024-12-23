import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { FileSystemEvent } from '@/types/events';

// Helper function to format event name from filename
export function formatEventName(filename: string): string {
  return filename
    .replace(/_/g, ' ')
    .replace(/\.md$/, '')
    .replace(/\s+\d{4}$/, '')
    .replace(/\s+-\s+\d{4}/, '');
}

// Helper function to get event year from filename
export function getEventYear(filename: string): string {
  const match = filename.match(/\d{4}/);
  return match ? match[0] : '';
}

// Helper function to generate event ID
export function generateEventId(name: string, year: string): string {
  return `${name.toLowerCase().replace(/\s+/g, '-')}-${year}`;
}

export const getEventsFromFileSystem = (basePath: string): FileSystemEvent[] => {
  const events: FileSystemEvent[] = [];
  
  // Get all year directories
  const yearDirs = readdirSync(basePath)
    .filter(dir => /^\d{4}$/.test(dir))
    .sort((a, b) => b.localeCompare(a)); // Sort years in descending order

  yearDirs.forEach(year => {
    const yearPath = join(basePath, year);
    const eventDirs = readdirSync(yearPath);

    eventDirs.forEach(eventDir => {
      const eventPath = join(yearPath, eventDir);
      const eventStat = statSync(eventPath);

      if (eventStat.isDirectory()) {
        const eventName = formatEventName(eventDir);
        const eventId = generateEventId(eventName, year);

        // Get all image files in the event directory
        const images = readdirSync(eventPath)
          .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
          .map(file => join(eventPath, file));

        events.push({
          id: eventId,
          year,
          name: eventName,
          path: eventPath,
          images,
          date: eventStat.birthtime
        });
      }
    });
  });

  return events;
};
