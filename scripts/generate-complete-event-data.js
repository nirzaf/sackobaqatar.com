#!/usr/bin/env node

/**
 * Complete Event Data Generator for SACKOBA Qatar
 *
 * This script scans all event folders and generates a complete event data file
 * with all available images from the public/images/event_images directory.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: 'public/images/event_images',
  outputFile: 'src/data/completeEventImageData.ts',
  maxImagesPerEvent: 20 // Limit images per event for performance
};

// Event category mapping based on keywords
function categorizeEvent(eventName, eventFolder) {
  const text = `${eventName} ${eventFolder}`.toLowerCase();
  
  if (text.match(/\b(cricket|rugby|football|soccer|tennis|bowling|tournament|sports|athletic|competition|match|game|7s|talons|smash)\b/)) {
    return 'Sports';
  }
  
  if (text.match(/\b(new year|awurudu|cultural|traditional|dance|music|performance|festival|celebration|heritage|tamil|sinhala)\b/)) {
    return 'Cultural';
  }
  
  if (text.match(/\b(feast|st\.|saint|anthony|religious|prayer|mass|church|iftar|ramadan|christmas|easter|communion)\b/)) {
    return 'Religious';
  }
  
  if (text.match(/\b(agm|annual general meeting|college day|graduation|academic|education|school|university)\b/)) {
    return 'Academic';
  }
  
  if (text.match(/\b(family|social|gathering|picnic|outing|party|reunion|meetup|networking|boat|beach|carnival)\b/)) {
    return 'Social';
  }
  
  return 'Community';
}

// Generate event date based on year and event type
function generateEventDate(year, eventName) {
  const yearNum = parseInt(year);
  
  if (eventName.toLowerCase().includes('new year') || eventName.toLowerCase().includes('awurudu')) {
    return `${year}-04-14`;
  }
  if (eventName.toLowerCase().includes('college day')) {
    return `${year}-06-13`;
  }
  if (eventName.toLowerCase().includes('feast') || eventName.toLowerCase().includes('anthony')) {
    return `${year}-06-13`;
  }
  if (eventName.toLowerCase().includes('iftar')) {
    return `${year}-07-15`;
  }
  if (eventName.toLowerCase().includes('christmas')) {
    return `${year}-12-25`;
  }
  if (eventName.toLowerCase().includes('agm')) {
    return `${year}-12-15`;
  }
  
  // Default to mid-year
  return `${year}-06-15`;
}

// Generate event description
function generateDescription(eventName, category, year) {
  const templates = {
    Sports: `${eventName} featuring competitive sports activities, tournaments, and community participation with awards and recognition.`,
    Cultural: `${eventName} celebrating cultural heritage with traditional activities, performances, and community gathering.`,
    Religious: `${eventName} featuring religious ceremonies, community worship, and spiritual fellowship.`,
    Academic: `${eventName} bringing together the academic community for formal proceedings, networking, and institutional celebration.`,
    Social: `${eventName} providing community members with social interaction, entertainment, and fellowship activities.`,
    Community: `${eventName} fostering community spirit through various activities and shared experiences.`
  };
  
  return templates[category] || `Community event featuring various activities and fellowship.`;
}

// Generate image title from filename
function generateImageTitle(filename) {
  return filename
    .replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at \d{1,2}\.\d{2}\.\d{2} (AM|PM)(\s*\(\d+\))?/g, 'Event Photo')
    .replace(/DSC_\d+/g, 'Event Photo')
    .replace(/IMG_\d+/g, 'Event Photo')
    .trim() || 'Event Photo';
}

// Generate tags from event name and filename
function generateTags(eventName, filename, category) {
  const tags = [];
  
  // Add category-based tags
  if (category === 'Sports') tags.push('sports', 'competition', 'tournament');
  if (category === 'Cultural') tags.push('cultural', 'traditional', 'celebration');
  if (category === 'Religious') tags.push('religious', 'ceremony', 'spiritual');
  if (category === 'Academic') tags.push('academic', 'formal', 'education');
  if (category === 'Social') tags.push('social', 'community', 'gathering');
  
  // Add event-specific tags
  const eventLower = eventName.toLowerCase();
  if (eventLower.includes('cricket')) tags.push('cricket');
  if (eventLower.includes('rugby')) tags.push('rugby');
  if (eventLower.includes('bowling')) tags.push('bowling');
  if (eventLower.includes('new year')) tags.push('new year');
  if (eventLower.includes('college day')) tags.push('college day');
  if (eventLower.includes('iftar')) tags.push('iftar');
  if (eventLower.includes('feast')) tags.push('feast');
  if (eventLower.includes('agm')) tags.push('AGM');
  
  // Add filename-based tags
  const filenameLower = filename.toLowerCase();
  if (filenameLower.includes('group') || filenameLower.includes('photo')) tags.push('group photo');
  if (filenameLower.includes('cover')) tags.push('cover photo');
  if (filenameLower.includes('award') || filenameLower.includes('trophy')) tags.push('awards');
  if (filenameLower.includes('food') || filenameLower.includes('eating')) tags.push('food');
  if (filenameLower.includes('prayer') || filenameLower.includes('church')) tags.push('prayer');
  
  return [...new Set(tags)].slice(0, 4); // Limit to 4 unique tags
}

// Scan directory for images
function getImagesFromDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);
  const images = files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .slice(0, CONFIG.maxImagesPerEvent) // Limit images per event
    .map(filename => ({
      filename,
      url: `/images/event_images/${path.relative('public/images/event_images', dirPath)}/${filename}`.replace(/\\/g, '/'),
      title: generateImageTitle(filename),
      description: `Photo from ${path.basename(path.dirname(dirPath))}`,
      tags: []
    }));
  
  return images;
}

// Main function to generate complete event data
function generateCompleteEventData() {
  console.log('🔍 Scanning event directories...');
  
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`❌ Input directory not found: ${CONFIG.inputDir}`);
    process.exit(1);
  }
  
  const years = fs.readdirSync(CONFIG.inputDir)
    .filter(item => {
      const fullPath = path.join(CONFIG.inputDir, item);
      return fs.statSync(fullPath).isDirectory() && /^\d{4}$/.test(item);
    })
    .sort((a, b) => parseInt(b) - parseInt(a)); // Sort years descending
  
  console.log(`Found years: ${years.join(', ')}`);
  
  const eventData = [];
  let totalEvents = 0;
  let totalImages = 0;
  
  for (const year of years) {
    const yearPath = path.join(CONFIG.inputDir, year);
    const eventFolders = fs.readdirSync(yearPath)
      .filter(item => {
        const fullPath = path.join(yearPath, item);
        return fs.statSync(fullPath).isDirectory();
      });
    
    console.log(`\n📅 Processing ${year}: ${eventFolders.length} events`);
    
    const yearEvents = [];
    let yearImageCount = 0;
    
    for (const eventFolder of eventFolders) {
      const eventPath = path.join(yearPath, eventFolder);
      const images = getImagesFromDirectory(eventPath);
      
      if (images.length === 0) {
        console.log(`  ⚠️  No images found in ${eventFolder}`);
        continue;
      }
      
      const eventName = eventFolder
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      const category = categorizeEvent(eventName, eventFolder);
      const eventDate = generateEventDate(year, eventName);
      const description = generateDescription(eventName, category, year);
      
      // Add tags to images
      images.forEach(image => {
        image.tags = generateTags(eventName, image.filename, category);
      });
      
      const event = {
        id: eventFolder.toLowerCase().replace(/[^a-z0-9]/g, '_'),
        name: eventName,
        year: year,
        date: eventDate,
        location: 'Doha, Qatar',
        description: description,
        category: category,
        attendees: Math.floor(Math.random() * 100) + 50, // Random attendee count
        folderPath: `src/assets/images/event_images/${year}/${eventFolder}`,
        images: images
      };
      
      yearEvents.push(event);
      yearImageCount += images.length;
      
      console.log(`    ✅ ${eventName}: ${images.length} images (${category})`);
    }
    
    if (yearEvents.length > 0) {
      eventData.push({
        year: year,
        totalEvents: yearEvents.length,
        totalImages: yearImageCount,
        events: yearEvents
      });
      
      totalEvents += yearEvents.length;
      totalImages += yearImageCount;
    }
  }
  
  console.log(`\n📊 Total: ${totalEvents} events, ${totalImages} images across ${years.length} years`);
  
  // Generate TypeScript file
  const tsContent = `// Auto-generated complete event image data
// Generated on: ${new Date().toISOString()}

// Define interfaces
interface EventImage {
  url: string;
  title: string;
  filename: string;
  description?: string;
  photographer?: string;
  tags?: string[];
}

interface EventCategory {
  id: string;
  name: string;
  year: string;
  date?: string;
  location?: string;
  description?: string;
  category: 'Sports' | 'Cultural' | 'Religious' | 'Social' | 'Academic' | 'Community';
  attendees?: number;
  images: EventImage[];
  folderPath: string;
}

interface YearGroup {
  year: string;
  events: EventCategory[];
  totalEvents: number;
  totalImages: number;
}

// Complete event image data with all available images
export const completeEventImageData: YearGroup[] = ${JSON.stringify(eventData, null, 2)};

// Function to get complete event image data
export function getCompleteEventImageData(): YearGroup[] {
  return completeEventImageData;
}

// Function to get images by year
export function getCompleteEventImagesByYear(year: string): EventCategory[] {
  const yearGroup = completeEventImageData.find(group => group.year === year);
  return yearGroup ? yearGroup.events : [];
}

// Function to get all available years from complete image data
export function getCompleteEventImageYears(): string[] {
  return completeEventImageData.map(group => group.year).sort((a, b) => parseInt(b) - parseInt(a));
}

// Export types
export type { EventImage, EventCategory, YearGroup };
`;
  
  // Write the file
  fs.writeFileSync(CONFIG.outputFile, tsContent);
  console.log(`\n✅ Generated complete event data: ${CONFIG.outputFile}`);
  console.log(`📈 Summary: ${totalEvents} events, ${totalImages} images`);
  
  return {
    totalEvents,
    totalImages,
    years: years.length,
    outputFile: CONFIG.outputFile
  };
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateCompleteEventData();
}

export { generateCompleteEventData };
