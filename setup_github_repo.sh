#!/bin/bash

# This script helps set up a GitHub repository for the web-resume-chatllm project
# Usage: ./setup_github_repo.sh <github_username>

if [ -z "$1" ]; then
  echo "Please provide your GitHub username as an argument."
  echo "Usage: ./setup_github_repo.sh <github_username>"
  exit 1
fi

GITHUB_USERNAME="$1"
REPO_NAME="web-resume-chatllm"

echo "Setting up GitHub repository for $GITHUB_USERNAME/$REPO_NAME..."

# Add the remote repository
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Set the branch name to main
git branch -M main

# Push to GitHub
echo "Ready to push to GitHub."
echo "You'll need to authenticate with your GitHub credentials when prompted."
echo "Command to run: git push -u origin main"
echo ""
echo "After pushing, your site will be deployed automatically via GitHub Actions."
echo "It will be available at: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
