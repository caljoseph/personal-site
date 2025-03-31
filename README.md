# Caleb Bradshaw - Personal Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Styled Components showcasing professional experience, projects, research, and blog content.

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
│   └── ...
├── pages/              # Next.js pages
│   ├── _app.tsx        # Custom App component
│   ├── _document.tsx   # Custom Document component
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   └── ...
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Page footer
│   └── Layout.tsx      # Main layout wrapper
├── styles/             # Global styles
│   └── global.css      # Global CSS
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Customizing Content

### Personal Information

Most of your personal information is stored directly in the page components. To update:

#### Home Page (`pages/index.tsx`)

- Update your name, title, and personal description
- Modify the "About Me" section text
- Change the featured projects

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

The site uses CSS variables for consistent theming. The primary color palette is defined in `styles/global.css`:

```css
:root {
  --primary: #1e293b;      /* Primary background color (darker) */
  --secondary: #334155;    /* Secondary background color (medium dark) */
  --accent: #3b82f6;       /* Accent color (blue) */
  --text: #f8fafc;         /* Primary text color (light) */
  --text-secondary: #cbd5e1; /* Secondary text color (lighter gray) */
  --background: #0f172a;   /* Main background color (darkest) */
  /* ... other colors ... */
}
```

### Typography

The site uses styled-components for component styling, making it easy to modify the appearance of specific components.

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
- [Font Awesome](https://fontawesome.com/) - Icons
- [Vercel](https://vercel.com/) - Deployment platform

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Caleb Bradshaw