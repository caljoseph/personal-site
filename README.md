# Caleb Bradshaw - Personal Portfolio

My portfolio website and blog built with Next.js, TypeScript, and Styled Components.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Content Management](#content-management)
- [Modifying Appearance](#modifying-appearance)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Overview

This portfolio website is designed to be a professional showcase of skills, experience, and work. It features:

- Responsive design for all devices
- Dark and light mode with user preference persistence
- Modern, minimalist aesthetic with smooth transitions and animations
- Sections for CV/Resume, Projects, Research, and Blog
- Markdown-based content management
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
git clone https://github.com/caljoseph/personal-site.git
cd personal-site
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
├── content/             # Markdown content files
│   ├── blog/            # Blog posts
│   ├── projects/        # Project showcases
│   └── research/        # Research publications
├── lib/                 # Utility functions
│   └── content.ts       # Content loading functions
├── public/              # Static assets
│   ├── fonts/           # Custom fonts
│   ├── images/          # Image files
│   └── ...
├── pages/               # Next.js pages
│   ├── _app.tsx         # Custom App component
│   ├── _document.tsx    # Custom Document component
│   ├── index.tsx        # Home page
│   ├── blog/            # Blog pages
│   │   ├── index.tsx    # Blog listing page
│   │   └── [id].tsx     # Dynamic blog post page
│   ├── projects/        # Project pages
│   │   ├── index.tsx    # Projects listing page
│   │   └── [id].tsx     # Dynamic project page
│   └── research/        # Research pages
│       ├── index.tsx    # Research listing page
│       └── [id].tsx     # Dynamic research page
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Page footer
│   ├── Layout.tsx       # Main layout wrapper
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   └── ...
├── styles/              # Global styles
│   └── global.css       # Global CSS with theme variables
├── CONTENT.md           # Content management guide
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Features

### Content Management System

- Markdown-based content for blog posts, projects, and research
- Frontmatter metadata for each content type
- Automatic thumbnail support for visual previews
- Featured content system for highlighting important work

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

### Dynamic Page Generation

- Automatic page generation from Markdown content
- SEO-friendly URLs and metadata
- Rich content display with syntax highlighting and image optimization

### Featured Content Showcase

- Highlighted projects, research, and blog posts on the home page
- Automatic selection of featured content based on frontmatter
- Visual cards with images, descriptions, and tags

## Content Management

The website uses a Markdown-based content management system located in the `/content` directory. Detailed instructions for adding and managing content can be found in the [CONTENT.md](CONTENT.md) file.

### Content Types

1. **Blog Posts** - `/content/blog/`
   - Technical tutorials, insights, and thoughts
   - Support for code snippets, images, and rich formatting

2. **Projects** - `/content/projects/`
   - Showcases of your technical projects
   - Fields for technologies, live demos, and GitHub repositories

3. **Research** - `/content/research/`
   - Academic publications, presentations, and ongoing research
   - Support for authors, venues, and research status

### Adding New Content

To add new content, create a Markdown file in the appropriate directory with frontmatter metadata. For example, a blog post:

```markdown
---
title: "Getting Started with Next.js"
date: "2023-03-15"
description: "A comprehensive guide to building with Next.js"
tags: ["React", "Next.js", "Web Development"]
author: "Caleb Bradshaw"
thumbnailUrl: "/images/project-placeholder.jpg"
featured: true
---

# Your blog post content here...
```

See [CONTENT.md](CONTENT.md) for complete documentation.

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
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Markdown frontmatter parsing
- [remark](https://github.com/remarkjs/remark) - Markdown processing
- [date-fns](https://date-fns.org/) - Date formatting utilities
- [Vercel](https://vercel.com/) - Deployment platform

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Caleb Bradshaw