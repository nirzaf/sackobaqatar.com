// Utility functions for handling image imports and paths

// Function to get the correct image path for Vite
export function getImagePath(relativePath: string): string {
  // Remove leading slash if present
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
  // For Vite, we need to use the correct import path
  if (cleanPath.startsWith('src/assets/')) {
    // Convert to the correct Vite asset path
    return `/${cleanPath.replace('src/assets/', '')}`;
  }
  
  return `/${cleanPath}`;
}

// Function to create image URL for event images
export function createEventImageUrl(year: string, eventFolder: string, filename: string): string {
  return `/images/event_images/${year}/${eventFolder}/${filename}`;
}

// Function to check if image exists (placeholder for now)
export function imageExists(url: string): boolean {
  // In a real implementation, this would check if the image file exists
  // For now, we'll assume all images exist
  return true;
}

// Function to get fallback image
export function getFallbackImage(): string {
  return '/images/placeholder-event.jpg';
}

// Function to format image title from filename
export function formatImageTitle(filename: string): string {
  return filename
    .replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at \d{1,2}\.\d{2}\.\d{2} (AM|PM)(\s*\(\d+\))?/g, 'Event Photo')
    .trim();
}

// Function to generate thumbnail URL (if needed)
export function getThumbnailUrl(originalUrl: string, size: number = 300): string {
  // For now, return the original URL
  // In a real implementation, this might generate thumbnail URLs
  return originalUrl;
}
