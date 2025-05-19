#!/bin/bash

# Script to add and commit GitHub Pages deployment files

echo "Adding GitHub Pages deployment files..."

# Check if .nojekyll exists, create if not
if [ ! -f .nojekyll ]; then
  echo "Creating .nojekyll file..."
  touch .nojekyll
fi

# Add files to git
echo "Adding files to git..."
git add .nojekyll
git add .github/workflows/deploy.yml
git add app/next.config.js

# Commit changes
echo "Committing changes..."
git commit -m "Add GitHub Pages deployment configuration"

echo ""
echo "Files committed successfully!"
echo "To complete deployment, run: git push origin main"
echo ""
echo "After pushing, go to your GitHub repository:"
echo "1. Navigate to Settings > Pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo ""
echo "Your site will be available at https://[your-username].github.io/web-resume-chatllm/ after the workflow completes."
