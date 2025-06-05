const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const eventImagesDir = path.join(__dirname, '../public/images/event_images');
const optimizedDir = path.join(__dirname, '../public/images/event_images_optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

async function optimizeImages() {
  console.log('Starting image optimization...');

  const years = fs.readdirSync(eventImagesDir).filter(item => {
    const fullPath = path.join(eventImagesDir, item);
    return fs.statSync(fullPath).isDirectory();
  });

  for (const year of years) {
    const yearDir = path.join(eventImagesDir, year);
    const optimizedYearDir = path.join(optimizedDir, year);

    if (!fs.existsSync(optimizedYearDir)) {
      fs.mkdirSync(optimizedYearDir, { recursive: true });
    }

    const events = fs.readdirSync(yearDir).filter(item => {
      const fullPath = path.join(yearDir, item);
      return fs.statSync(fullPath).isDirectory();
    });

    for (const event of events) {
      const eventDir = path.join(yearDir, event);
      const optimizedEventDir = path.join(optimizedYearDir, event);

      if (!fs.existsSync(optimizedEventDir)) {
        fs.mkdirSync(optimizedEventDir, { recursive: true });
      }

      const images = fs.readdirSync(eventDir).filter(file =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );

      if (images.length > 0) {
        // Take the first image as preview
        const firstImage = images[0];
        const inputPath = path.join(eventDir, firstImage);
        const outputPath = path.join(optimizedEventDir, `preview_${firstImage}`);

        try {
          await sharp(inputPath)
            .resize(400, 300, {
              fit: 'cover',
              position: 'center'
            })
            .jpeg({
              quality: 80,
              progressive: true
            })
            .toFile(outputPath);

          console.log(`✓ Optimized: ${year}/${event}/${firstImage}`);
        } catch (error) {
          console.error(`✗ Failed to optimize: ${year}/${event}/${firstImage}`, error.message);
        }
      }
    }
  }

  console.log('Image optimization completed!');
}

optimizeImages().catch(console.error);