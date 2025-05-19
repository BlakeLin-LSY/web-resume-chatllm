# Deployment Guide for Web Resume

This guide will help you deploy your Next.js resume website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name the repository: `web-resume-chatllm`
4. Make it public
5. Do NOT initialize with README, .gitignore, or license (we already have these files)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, use the provided script to set up the remote repository:

```bash
cd /home/ubuntu/web-resume-chatllm
./setup_github_repo.sh YOUR_GITHUB_USERNAME
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically after your first push

## Step 4: View Your Deployed Site

After the GitHub Actions workflow completes (this may take a few minutes), your site will be available at:

```
https://YOUR_GITHUB_USERNAME.github.io/web-resume-chatllm/
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the GitHub Actions tab in your repository to see if there are any errors in the workflow
2. Ensure your repository is public (GitHub Pages is only available for public repositories on free accounts)
3. Make sure the GitHub Actions workflow file (.github/workflows/deploy.yml) is present in your repository

## Making Changes

To make changes to your resume website:

1. Edit the files locally
2. Commit your changes: `git commit -am "Description of changes"`
3. Push to GitHub: `git push origin main`
4. The GitHub Actions workflow will automatically deploy your changes

## Local Development

To run the website locally for development:

```bash
cd /home/ubuntu/web-resume-chatllm/app
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.
