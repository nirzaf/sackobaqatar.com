const fs = require('fs');
const path = require('path');

const EVENTS_DIR = path.join(__dirname, '../public/events');
const OUTPUT_FILE = path.join(__dirname, '../src/data/events.ts');

function formatEventName(filename) {
  return filename
    .replace(/_/g, ' ')
    .replace(/\.md$/, '')
    .replace(/\s+\d{4}$/, '')
    .replace(/\s+-\s+\d{4}/, '');
}

function generateEvents() {
  const events = [];
  const years = fs.readdirSync(EVENTS_DIR)
    .filter(dir => /^\d{4}$/.test(dir))
    .sort((a, b) => b.localeCompare(a));

  years.forEach(year => {
    const yearPath = path.join(EVENTS_DIR, year);
    const eventFiles = fs.readdirSync(yearPath)
      .filter(file => file.endsWith('.md'));

    eventFiles.forEach(file => {
      const eventName = formatEventName(file);
      const eventId = `${year}_${file.replace('.md', '')}`.toLowerCase();
      const imagesDir = path.join(yearPath, 'images');
      
      // Check for event-specific images
      const images = fs.existsSync(imagesDir) 
        ? fs.readdirSync(imagesDir)
          .filter(img => img.toLowerCase().includes(eventId) || img.toLowerCase().includes(eventName.toLowerCase()))
          .map(img => `/events/${year}/images/${img}`)
        : [];

      events.push({
        id: eventId,
        year,
        name: eventName,
        images,
        date: `${year}-01-01` // You can parse actual date from markdown content if needed
      });
    });
  });

  const template = `
export interface Event {
  id: string;
  year: string;
  name: string;
  images: string[];
  date: string;
}

export const events: Event[] = ${JSON.stringify(events, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, template);
  console.log(`Generated ${events.length} events in ${OUTPUT_FILE}`);
}

generateEvents();
