#!/bin/bash

# Script to copy event images from src/assets to public folder
# This makes the images accessible via HTTP in the Vite development server

echo "Copying event images from src/assets to public folder..."

# Create the target directory structure
mkdir -p public/images

# Copy the event_images folder
if [ -d "src/assets/images/event_images" ]; then
    cp -r src/assets/images/event_images public/images/
    echo "✅ Event images copied successfully!"
    echo "📁 Images are now available at: public/images/event_images/"
    
    # List the copied directories
    echo ""
    echo "📋 Available event years:"
    ls -la public/images/event_images/
    
    echo ""
    echo "🔗 Images can now be accessed via URLs like:"
    echo "   /images/event_images/2023/AGM_2023_SACKOBA_Qatar/image.jpg"
    
else
    echo "❌ Source directory not found: src/assets/images/event_images"
    echo "Please check that the event images exist in the assets folder."
fi

echo ""
echo "📝 Next steps:"
echo "1. Update src/data/eventImageData.ts to use the correct image paths"
echo "2. Replace placeholder URLs with actual image paths"
echo "3. Test the image gallery in the browser"
