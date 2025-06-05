import React from 'react';
import { getOptimizedImageUrl } from '../../utils/imageOptimization';

export const ImagePathTest: React.FC = () => {
  // Test different image path scenarios
  const testPaths = [
    '/images/event_images/2023/AGM_2023_SACKOBA_Qatar/Old_Boys_Association_Group_Photo_Qatar_2023.jpg',
    'https://example.com/test-image.jpg',
    '/images/non-existent-image.jpg'
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#541D67]">Image Path Test</h2>
      
      <div className="space-y-6">
        {testPaths.map((path, index) => {
          const optimizedPath = getOptimizedImageUrl(path);
          
          return (
            <div key={index} className="border p-4 rounded-lg">
              <p className="mb-2 text-gray-700"><strong>Original Path:</strong> {path}</p>
              <p className="mb-2 text-gray-700"><strong>Optimized Path:</strong> {optimizedPath}</p>
              <div className="mt-2">
                <img 
                  src={optimizedPath} 
                  alt={`Test image ${index + 1}`}
                  className="max-w-full h-auto rounded-lg border"
                  style={{ maxHeight: '200px' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'p-4 bg-red-100 text-red-700 rounded-lg';
                    errorDiv.textContent = `Failed to load image: ${optimizedPath}`;
                    target.parentNode?.appendChild(errorDiv);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
