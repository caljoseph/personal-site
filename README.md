# Caleb Bradshaw - Personal Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Styled Components showcasing professional experience, projects, research, and blog content.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Customizing Content](#customizing-content)
- [Modifying Appearance](#modifying-appearance)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Overview

This portfolio website is designed to be a professional showcase of your skills, experience, and work. It features:

- Responsive design for all devices
- Dark and light mode with user preference persistence
- Modern, minimalist aesthetic with smooth transitions and animations
- Sections for CV/Resume, Projects, Research, and Blog
- Easy to customize content and styling
- Server-side rendering with Next.js
- Optimized for deployment on Vercel

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

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
/
├── public/             # Static assets
│   ├── fonts/          # Custom fonts
│   ├── images/         # Image files like placeholders
│   └── ...
├── pages/              # Next.js pages
│   ├── _app.tsx        # Custom App component with theme initialization
│   ├── _document.tsx   # Custom Document component
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   └── ...
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Page footer
│   ├── Layout.tsx      # Main layout wrapper
│   ├── ThemeToggle.tsx # Dark/light mode toggle
│   └── ...
├── styles/             # Global styles
│   └── global.css      # Global CSS with theme variables
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Features

### Dark/Light Mode

The site includes a fully functional dark and light mode:

- Theme toggle accessible from the navigation bar
- Preferences saved to localStorage for persistence
- Smooth transition between themes
- Themed CSS variables for consistent styling

### Responsive Design

- Mobile-first approach with responsive breakpoints
- Collapsible navigation menu for mobile devices
- Optimized layouts for tablets and desktop screens

### Server-Side Rendering

- Fast initial load using Next.js SSR
- SEO-friendly page rendering
- Improved performance with optimized image components

### Featured Content Showcase

- Highlighted projects, research, and blog posts on the home page
- Configurable to feature any type of content (agnostic)
- Visual cards with images, descriptions, and tags

## Customizing Content

### Personal Information

Most of your personal information is stored directly in the page components. To update:

#### Home Page (`pages/index.tsx`)

- Update your name, title, and personal description
- Modify the featured items array to showcase your work:
  ```tsx
  const featuredItems: FeaturedItem[] = [
    {
      type: 'project',
      title: 'Full-Stack Web Application',
      description: 'A complete web application built with modern tools and frameworks.',
      tags: ['React', 'TypeScript', 'Next.js'],
      link: '/projects/web-app',
      image: '/project-placeholder.jpg',
    },
    // More items...
  ];
  ```

#### About Page (`pages/about.tsx`)

- Update your personal biography
- Modify skills in the skills grid
- Change contact information

#### Projects Page (`pages/projects.tsx`)

Projects are stored in an array of project objects. To add or edit projects:

```tsx
// Projects data structure
const projects = [
  {
    id: 1,
    title: 'Algorithm Visualization Platform',
    description: 'An interactive web application for visualizing...',
    tags: ['React', 'TypeScript', 'D3.js'],
    image: '/project-placeholder.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  // Add more projects here
];
```

### Header & Footer

- Update navigation links in `components/Header.tsx`
- Modify footer information and social links in `components/Footer.tsx`

## Modifying Appearance

### Colors and Theme

The site uses CSS variables for consistent theming with both dark and light modes. The color palette is defined in `styles/global.css`:

```css
:root {
  /* Dark theme (default) */
  --primary: #1e293b;
  --secondary: #334155;
  --accent: #3b82f6;
  --text: #f8fafc;
  --text-secondary: #cbd5e1;
  --background: #0f172a;
  --muted: #64748b;
  --border: #475569;
  /* ... other colors ... */
}

[data-theme='light'] {
  --primary: #f1f5f9;
  --secondary: #e2e8f0;
  --accent: #3b82f6;
  --text: #0f172a;
  --text-secondary: #334155;
  --background: #ffffff;
  --muted: #94a3b8;
  --border: #cbd5e1;
}
```

### Typography

The site uses Google Fonts with a typography hierarchy:

- Headers (h1-h6): **Inclusive Sans** - A modern, clean font for headings
- Body text: **Nunito Sans** - A highly readable sans-serif font for content

These fonts can be easily changed by updating the Google Fonts link in `_document.tsx` and the font-family properties in `styles/global.css`.

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build of your application.

### Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/):

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Vercel will detect Next.js and automatically configure the build settings
4. Your site will be deployed and given a URL

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework with SSR
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Styled Components](https://styled-components.com/) - CSS-in-JS styling
- [Vercel](https://vercel.com/) - Deployment platform

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Caleb Bradshaw