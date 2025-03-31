# Caleb Bradshaw - Personal Portfolio

A modern, minimalist portfolio website built with React, TypeScript, and Styled Components showcasing professional experience, projects, research, and blog content.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customizing Content](#customizing-content)
- [Modifying Appearance](#modifying-appearance)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Overview

This portfolio website is designed to be a professional showcase of your skills, experience, and work. It features:

- Responsive design for all devices
- Modern, minimalist aesthetic with smooth transitions and animations
- Sections for CV/Resume, Projects, Research, and Blog
- Easy to customize content and styling

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
/
├── public/             # Static assets
│   ├── fonts/          # Custom fonts
│   └── ...
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Customizing Content

### Personal Information

Most of your personal information is stored directly in the page components. To update:

#### Home Page (`src/pages/Home.tsx`)

- Update your name, title, and personal description
- Modify the "About Me" section text
- Change the highlight cards to reflect what you do

```tsx
// Example: Updating name and title
<Name>Caleb Bradshaw</Name>
<Title>Computer Science Student at BYU • Math Minor • Software Developer</Title>
```
#### About Page (`src/pages/About.tsx`)

- Update your personal biography
- Modify skills in the skills grid
- Update your education and experience timeline
- Change contact information

```tsx
// Example: Updating bio section
<p>
  Hello! I'm Caleb Bradshaw, a passionate Computer Science student at...
</p>
```

#### Projects Page (`src/pages/Projects.tsx`)

Projects are stored in an array of project objects. To add or edit projects:

```tsx
// Projects data structure
const projects = [
  {
    id: 1,
    title: 'Algorithm Visualization Platform',
    description: 'An interactive web application for visualizing...',
    tags: ['React', 'TypeScript', 'D3.js'],
    category: 'web',
    liveUrl: '#',
    repoUrl: '#',
  },
  // Add more projects here
];
```

#### Research Page (`src/pages/Research.tsx`)

Research items and publications can be modified directly in the component:

```tsx
// Example: Updating research project
<ResearchTitle>Optimizing Graph Algorithms for Large-Scale Network Analysis</ResearchTitle>
<ResearchMeta>
  <span>Advisor: <span className="highlight">Dr. Robert Johnson</span></span>
  <span>Period: <span className="highlight">2022 - Present</span></span>
  <span>Status: <span className="highlight">Ongoing</span></span>
</ResearchMeta>
```

#### Blog Page (`src/pages/Blog.tsx`)

Blog posts are defined in an array of post objects:

```tsx
// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Optimizing Graph Algorithms: A Practical Approach',
    date: 'March 15, 2023',
    tags: ['Algorithms', 'Computer Science', 'Performance'],
    description: 'An exploration of practical techniques for...',
    featured: true,
  },
  // Add more blog posts here
];
```

#### CV Page (`src/pages/CV.tsx`)

Update your CV information by editing the content in the component:

```tsx
// Example: Update education
<EntryHeader>
  <EntryTitle>Bachelor of Science in Computer Science</EntryTitle>
  <EntryDate>2021 - Present</EntryDate>
</EntryHeader>
<EntrySubtitle>Brigham Young University, Provo, UT</EntrySubtitle>
```

### Header & Footer

- Update navigation links in `src/components/Header.tsx`
- Modify footer information and social links in `src/components/Footer.tsx`

## Modifying Appearance

### Colors and Theme

The site uses CSS variables for consistent theming. The primary color palette is defined in `src/styles/global.css`:

```css
:root {
  --primary: #1e293b;      /* Primary background color (darker) */
  --secondary: #334155;    /* Secondary background color (medium dark) */
  --accent: #3b82f6;       /* Accent color (blue) */
  --text: #f8fafc;         /* Primary text color (light) */
  --text-secondary: #cbd5e1; /* Secondary text color (lighter gray) */
  --background: #0f172a;   /* Main background color (darkest) */
  --muted: #64748b;        /* Muted text color */
  --border: #475569;       /* Border color */
  --success: #22c55e;      /* Success state color */
  --error: #ef4444;        /* Error state color */
  --warning: #f59e0b;      /* Warning state color */
}
```

To change the color scheme, edit these variables to your preference. For example:

```css
/* For a purple-themed site */
:root {
  --primary: #1e1b4b;      /* Deep purple */
  --secondary: #312e81;    /* Medium purple */
  --accent: #8b5cf6;       /* Bright purple */
  --text: #f8fafc;         /* Keep light text */
  --text-secondary: #cbd5e1; /* Keep light gray */
  --background: #0f0d35;   /* Darkest purple */
  /* ... other colors ... */
}
```

### Typography

Font settings are configured in the global CSS and in the HTML head:

1. To change the main font, update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Then update the font-family in `src/styles/global.css`:

```css
body {
  font-family: 'Inter', sans-serif;
  /* other styles */
}
```

### Component Styling

Each component is styled using Styled Components. To modify a specific component's appearance:

1. Find the styled component definition (usually at the top of the component file)
2. Edit the CSS-in-JS code to change the appearance

For example, to modify the Hero section in the Home page:

```tsx
// In src/pages/Home.tsx
const HeroSection = styled.section`
  /* Change background style */
  background-color: var(--background);
  background-image: linear-gradient(...);
  
  /* Adjust spacing */
  padding: 6rem 2rem; /* Increased top/bottom padding */
  
  /* Other style changes */
`;
```

### Adding Custom Animations

Add animations using CSS keyframes in Styled Components:

```tsx
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AnimatedElement = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
`;
```

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with your compiled site.

### Deployment Options

1. **Netlify**: Connect your GitHub repository to Netlify for automatic deployments
2. **Vercel**: Similar to Netlify, with excellent React support
3. **GitHub Pages**: Deploy the `dist` folder to GitHub Pages
4. **AWS S3/CloudFront**: For a custom solution with CDN capabilities
5. **Traditional Hosting**: Upload the `dist` directory to any web hosting provider

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Styled Components](https://styled-components.com/) - CSS-in-JS styling
- [React Router](https://reactrouter.com/) - Routing and navigation
- [Font Awesome](https://fontawesome.com/) - Icons

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Caleb Bradshaw