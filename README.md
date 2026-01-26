# Jazz's Personal Website

A modern, professional personal website built with React, showcasing developer advocacy work, apps, content creation, and public speaking engagements.

## Features

- **Articles Section**: Showcase developer advocate articles and technical writing
- **Apps & Projects**: Display portfolio of applications and projects
- **Content Creation**: Highlight content across multiple platforms
- **Public Speaking**: Showcase past and upcoming speaking engagements
- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI**: Beautiful design with custom color palette

## Color Palette

### Primary Colors
- Teal: `#20C997`
- Dark Blue-Gray: `#2C3E50`
- Coral: `#FF6B6B`

### Secondary Colors
- Mustard: `#F7C948`
- Lavender: `#B39DDB`
- Light Gray: `#F5F5F5`

### Neutral Colors
- White: `#FFFFFF`
- Charcoal: `#333333`
- Gray: `#E0E0E0`

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Articles.jsx
│   │   ├── Apps.jsx
│   │   ├── ContentCreation.jsx
│   │   ├── PublicSpeaking.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

To customize the content:

1. **Articles**: Edit `src/components/Articles.jsx` to update article listings
2. **Apps**: Edit `src/components/Apps.jsx` to update project showcases
3. **Content Creation**: Edit `src/components/ContentCreation.jsx` to update content platforms
4. **Speaking**: Edit `src/components/PublicSpeaking.jsx` to update speaking engagements
5. **Hero Section**: Edit `src/components/Hero.jsx` to update personal introduction
6. **Footer**: Edit `src/components/Footer.jsx` to update contact information and social links

## Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties)
- JavaScript (ES6+)

## License

This project is open source and available for personal use.
