// Image optimization utilities for better performance

interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  lazy?: boolean;
}

// Function to generate optimized image URL
export function getOptimizedImageUrl(
  originalUrl: string, 
  options: ImageOptimizationOptions = {}
): string {
  const {
    width: _width = 800,
    height: _height = 600,
    quality: _quality = 85,
    format: _format = 'webp',
    lazy: _lazy = true
  } = options;

  // For now, return the original URL
  // In a production environment, this could integrate with services like:
  // - Cloudinary
  // - ImageKit
  // - AWS CloudFront with image optimization
  // - Next.js Image Optimization API
  
  return originalUrl;
}

// Function to generate responsive image srcSet
export function generateResponsiveSrcSet(originalUrl: string): string {
  const sizes = [400, 600, 800, 1200, 1600];
  
  return sizes
    .map(size => `${getOptimizedImageUrl(originalUrl, { width: size })} ${size}w`)
    .join(', ');
}

// Function to get appropriate image sizes for different use cases
export function getImageSizes(context: 'thumbnail' | 'gallery' | 'modal' | 'hero'): ImageOptimizationOptions {
  switch (context) {
    case 'thumbnail':
      return { width: 300, height: 200, quality: 75 };
    case 'gallery':
      return { width: 600, height: 400, quality: 85 };
    case 'modal':
      return { width: 1200, height: 800, quality: 90 };
    case 'hero':
      return { width: 1920, height: 1080, quality: 90 };
    default:
      return { width: 800, height: 600, quality: 85 };
  }
}

// Function to preload critical images
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = url;
  });
}

// Function to lazy load images with Intersection Observer
export function setupLazyLoading(
  imageElements: NodeListOf<HTMLImageElement>,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  }, defaultOptions);

  imageElements.forEach(img => imageObserver.observe(img));
  
  return imageObserver;
}

// Function to compress image file (client-side)
export function compressImage(
  file: File, 
  maxWidth: number = 1200, 
  quality: number = 0.8
): Promise<Blob> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;

      // Draw and compress
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        // else do nothing or reject, but Promise<Blob> expects a Blob
      }, 'image/jpeg', quality);
    };

    img.src = URL.createObjectURL(file);
  });
}

// Function to get image metadata
export function getImageMetadata(file: File): Promise<{
  width: number;
  height: number;
  size: number;
  type: string;
}> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: file.size,
        type: file.type
      });
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

// Function to check if WebP is supported
export function supportsWebP(): boolean {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

// Function to get the best image format for the browser
export function getBestImageFormat(): 'webp' | 'jpeg' {
  return supportsWebP() ? 'webp' : 'jpeg';
}

// Performance monitoring for images
export function trackImagePerformance(imageUrl: string, startTime: number): void {
  const loadTime = performance.now() - startTime;
  
  // Log performance metrics (could be sent to analytics)
  console.log(`Image loaded: ${imageUrl} in ${loadTime.toFixed(2)}ms`);
  
  // You could integrate with performance monitoring services here
  // Example: Google Analytics, DataDog, New Relic, etc.
}

// Function to create a blur placeholder for images
export function createBlurPlaceholder(width: number, height: number): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  canvas.width = width;
  canvas.height = height;
  
  // Create a simple gradient placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
}
