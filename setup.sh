#!/bin/bash

echo "🚀 Setting up AppHub React Website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create placeholder images if they don't exist
echo "🖼️ Creating placeholder images..."
mkdir -p public/images

# Create simple colored placeholder images using ImageMagick (if available)
if command -v convert &> /dev/null; then
    echo "Creating colored placeholder images..."
    convert -size 200x200 xc:'#3B82F6' public/images/taskmaster-pro.jpg
    convert -size 200x200 xc:'#10B981' public/images/smart-calculator.jpg
    convert -size 200x200 xc:'#8B5CF6' public/images/photoedit-studio.jpg
    convert -size 200x200 xc:'#F59E0B' public/images/fittracker.jpg
    convert -size 200x200 xc:'#EF4444' public/images/codesnippet-manager.jpg
    convert -size 200x200 xc:'#06B6D4' public/images/mindmap-creator.jpg
else
    echo "ImageMagick not found. Using text placeholders..."
    for app in taskmaster-pro smart-calculator photoedit-studio fittracker codesnippet-manager mindmap-creator; do
        echo "Placeholder for $app" > public/images/$app.jpg
    done
fi

echo "✅ Setup complete!"
echo ""
echo "🎉 Your AppHub website is ready!"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""
echo "Happy coding! 🚀"