#!/usr/bin/env node

/**
 * Image Optimization Script for SACKOBA Qatar Event Images
 * 
 * This script optimizes event images for better web performance by:
 * - Resizing images to appropriate dimensions
 * - Converting to WebP format for better compression
 * - Generating multiple sizes for responsive images
 * - Creating thumbnails for gallery views
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  inputDir: 'public/images/event_images',
  outputDir: 'public/images/optimized',
  formats: ['webp', 'jpeg'],
  sizes: {
    thumbnail: { width: 300, height: 200 },
    small: { width: 600, height: 400 },
    medium: { width: 800, height: 600 },
    large: { width: 1200, height: 800 },
    xlarge: { width: 1600, height: 1200 }
  },
  quality: {
    webp: 85,
    jpeg: 90
  }
};

// Utility functions
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function getRelativePath(fullPath, baseDir) {
  return path.relative(baseDir, fullPath);
}

async function optimizeImage(inputPath, outputDir) {
  try {
    const relativePath = getRelativePath(inputPath, CONFIG.inputDir);
    const { dir, name } = path.parse(relativePath);
    
    console.log(`Optimizing: ${relativePath}`);
    
    // Create output directory structure
    const outputSubDir = path.join(outputDir, dir);
    ensureDirectoryExists(outputSubDir);
    
    // Load image
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`  Original: ${metadata.width}x${metadata.height} (${metadata.format})`);
    
    // Generate different sizes and formats
    for (const [sizeName, dimensions] of Object.entries(CONFIG.sizes)) {
      for (const format of CONFIG.formats) {
        const outputFileName = `${name}_${sizeName}.${format}`;
        const outputPath = path.join(outputSubDir, outputFileName);
        
        await image
          .resize(dimensions.width, dimensions.height, {
            fit: 'cover',
            position: 'center'
          })
          .toFormat(format, {
            quality: CONFIG.quality[format] || 85,
            progressive: true
          })
          .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`    Generated: ${outputFileName} (${Math.round(stats.size / 1024)}KB)`);
      }
    }
    
    return true;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

async function generateImageManifest(outputDir) {
  const manifest = {
    generated: new Date().toISOString(),
    images: {},
    sizes: CONFIG.sizes,
    formats: CONFIG.formats
  };
  
  // Scan optimized images
  const optimizedFiles = getImageFiles(outputDir);
  
  for (const filePath of optimizedFiles) {
    const relativePath = getRelativePath(filePath, outputDir);
    const { dir, name } = path.parse(relativePath);
    
    // Parse filename to extract original name and size
    const match = name.match(/^(.+)_(thumbnail|small|medium|large|xlarge)$/);
    if (match) {
      const [, originalName, size] = match;
      const originalPath = path.join(dir, originalName).replace(/\\/g, '/');
      
      if (!manifest.images[originalPath]) {
        manifest.images[originalPath] = {};
      }
      
      const format = path.extname(filePath).slice(1);
      if (!manifest.images[originalPath][size]) {
        manifest.images[originalPath][size] = {};
      }
      
      manifest.images[originalPath][size][format] = relativePath.replace(/\\/g, '/');
    }
  }
  
  // Write manifest
  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Generated manifest: ${manifestPath}`);
  
  return manifest;
}

async function main() {
  console.log('🖼️  SACKOBA Qatar Image Optimization');
  console.log('=====================================\n');
  
  // Check if input directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`❌ Input directory not found: ${CONFIG.inputDir}`);
    console.log('Please run the copy-event-images.sh script first.');
    process.exit(1);
  }
  
  // Create output directory
  ensureDirectoryExists(CONFIG.outputDir);
  
  // Get all image files
  const imageFiles = getImageFiles(CONFIG.inputDir);
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    return;
  }
  
  // Optimize images
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < imageFiles.length; i++) {
    const imagePath = imageFiles[i];
    console.log(`[${i + 1}/${imageFiles.length}]`);
    
    const success = await optimizeImage(imagePath, CONFIG.outputDir);
    if (success) {
      successCount++;
    } else {
      errorCount++;
    }
    
    console.log(''); // Empty line for readability
  }
  
  // Generate manifest
  console.log('Generating image manifest...');
  await generateImageManifest(CONFIG.outputDir);
  
  // Summary
  console.log('\n📊 Optimization Summary');
  console.log('=======================');
  console.log(`✅ Successfully optimized: ${successCount} images`);
  console.log(`❌ Failed to optimize: ${errorCount} images`);
  console.log(`📁 Output directory: ${CONFIG.outputDir}`);
  console.log(`📋 Manifest: ${path.join(CONFIG.outputDir, 'manifest.json')}`);
  
  if (errorCount > 0) {
    console.log('\n⚠️  Some images failed to optimize. Check the error messages above.');
  } else {
    console.log('\n🎉 All images optimized successfully!');
  }
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  });
}

module.exports = { optimizeImage, generateImageManifest };
