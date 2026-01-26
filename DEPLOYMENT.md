# Deployment Guide

This guide will help you push your website to GitHub and deploy it for free.

## Step 1: Push to GitHub

### Initialize Git Repository

```bash
# Navigate to your project directory
cd "/Users/jasmininneh/Desktop/Jazz I. Personal Website"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal website with React"

# Add your GitHub repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., `personal-website` or `jazz-personal-website`)
4. Choose Public or Private
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"
7. Copy the repository URL and use it in the `git remote add origin` command above

## Step 2: Deploy for Free

You have several free hosting options. Here are the best ones:

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel:**
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Perfect for React/Vite apps
- ✅ Fast global CDN

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify

**Why Netlify:**
- ✅ Free tier
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Easy to use

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 3: GitHub Pages

**Why GitHub Pages:**
- ✅ Free and simple
- ✅ Integrated with GitHub
- ⚠️ Requires a small config change for React Router

**Steps:**
1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Save

**Note:** For React Router to work on GitHub Pages, you may need to use HashRouter instead of BrowserRouter, or configure a 404.html redirect.

## Recommended: Vercel

For a React app with React Router, **Vercel is the easiest and best option**. It handles routing automatically and requires zero configuration.

## After Deployment

1. Your site will have a URL like: `your-site.vercel.app` or `your-site.netlify.app`
2. You can add a custom domain later (free on both platforms)
3. Every push to GitHub will automatically deploy (if you connected GitHub)

## Troubleshooting

**Build fails?**
- Make sure `node_modules` is in `.gitignore` (it already is)
- Run `npm install` locally first to test
- Check that all dependencies are in `package.json`

**Routing doesn't work?**
- Vercel handles this automatically
- For Netlify, create a `public/_redirects` file with: `/* /index.html 200`
- For GitHub Pages, consider using HashRouter

**Need help?** Check the platform's documentation or support forums.
