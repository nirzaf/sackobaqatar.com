const fs = require('fs');
const path = require('path');

const optimizedDir = path.join(__dirname, '../public/images/event_images_optimized');
const eventCardsFile = path.join(__dirname, '../src/components/events/EventCards.tsx');

// Read the current EventCards file
let eventCardsContent = fs.readFileSync(eventCardsFile, 'utf8');

// Function to get the first optimized image for each event
function getOptimizedImagePath(year, eventFolder) {
  const eventDir = path.join(optimizedDir, year, eventFolder);

  if (!fs.existsSync(eventDir)) {
    return null;
  }

  const images = fs.readdirSync(eventDir).filter(file =>
    /^preview_.*\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  if (images.length > 0) {
    return `/images/event_images_optimized/${year}/${eventFolder}/${images[0]}`;
  }

  return null;
}

// Extract event data pattern and update paths
const eventPattern = /"previewImage":\s*"([^"]+)"/g;
let match;
const updates = [];

while ((match = eventPattern.exec(eventCardsContent)) !== null) {
  const currentPath = match[1];

  // Extract year and event folder from current path
  const pathMatch = currentPath.match(/\/images\/event_images(?:_optimized)?\/([^/]+)\/([^/]+)\//)

  if (pathMatch) {
    const year = pathMatch[1];
    const eventFolder = pathMatch[2];

    const optimizedPath = getOptimizedImagePath(year, eventFolder);

    if (optimizedPath && optimizedPath !== currentPath) {
      updates.push({
        old: currentPath,
        new: optimizedPath
      });
    }
  }
}

// Apply updates
let updatedContent = eventCardsContent;
for (const update of updates) {
  updatedContent = updatedContent.replace(
    `"previewImage": "${update.old}"`,
    `"previewImage": "${update.new}"`
  );
  console.log(`Updated: ${update.old} -> ${update.new}`);
}

// Write the updated file
fs.writeFileSync(eventCardsFile, updatedContent);
console.log(`\nUpdated ${updates.length} preview image paths in EventCards.tsx`);