import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export interface FileSystemEvent {
  id: string;
  year: string;
  name: string;
  path: string;
  images: string[];
  date: Date;
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
      const stats = statSync(eventPath);

      if (stats.isDirectory()) {
        // Get all images in the event directory
        const images = readdirSync(eventPath)
          .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .map(file => join('/events', year, eventDir, file));

        // Parse event name from directory name
        const eventNameParts = eventDir.split('_');
        const eventName = eventNameParts.join(' ').replace(/_/g, ' ');

        events.push({
          id: `${year}_${eventDir}`,
          year,
          name: eventName,
          path: eventPath,
          images,
          date: new Date(`${year}-01-01`), // Default to January 1st of the year
        });
      }
    });
  });

  return events;
};
