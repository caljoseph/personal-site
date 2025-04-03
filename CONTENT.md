# Content Management Guide

This document provides instructions on how to add and manage content for your personal website.

## Content Structure

All content is organized in the `/content` directory, which is divided into three main sections:

- `/content/blog` - Blog posts
- `/content/projects` - Project showcases
- `/content/research` - Research publications and presentations

Each content item is stored as a Markdown file with frontmatter (metadata at the top of the file) that provides information about the content.

## Adding New Content

### Blog Posts

To add a new blog post, create a new Markdown file in the `/content/blog` directory. The filename should be a URL-friendly version of the post title (e.g., `getting-started-with-nextjs.md`).

Include the following frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your post (shown in previews)"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Your Name"
thumbnailUrl: "/images/your-thumbnail-image.jpg"
---

# Your Blog Post Content Goes Here

Start writing your blog post content here using Markdown formatting.
```

### Projects

To add a new project, create a new Markdown file in the `/content/projects` directory. The filename should reflect the project name (e.g., `personal-finance-tracker.md`).

Include the following frontmatter:

```markdown
---
title: "Project Title"
date: "YYYY-MM-DD"
description: "A brief description of your project"
tags: ["Tag1", "Tag2", "Tag3"]
technologies: ["Tech1", "Tech2", "Tech3"]
category: "web" # Options: web, mobile, ai, systems, etc.
thumbnailUrl: "/images/project-thumbnail.jpg"
liveUrl: "https://yourlivesite.com" # Optional
repoUrl: "https://github.com/your/repo" # Optional
---

# Project Title

## Project Overview

Start your project description here...
```

### Research

To add research content, create a new Markdown file in the `/content/research` directory. The filename should reflect the research topic (e.g., `graph-algorithm-optimization.md`).

Include the following frontmatter:

```markdown
---
title: "Research Title"
date: "YYYY-MM-DD"
description: "A brief description of the research"
tags: ["Tag1", "Tag2", "Tag3"]
authors: ["Author 1", "Author 2", "Your Name"]
advisor: "Advisor Name" # Optional
venue: "Publication Venue or Conference" # Optional
status: "Published" # Options: Published, Under Review, Ongoing, etc.
type: "publication" # Options: publication, presentation, ongoing
thumbnailUrl: "/images/research-thumbnail.jpg"
---

# Research Title

## Abstract

This section should contain a brief summary of your research, focusing on the problem, approach, and key findings. Keep it concise and accessible to a general audience interested in your research area.

## Personal Notes (Optional)

You may add a section with your personal thoughts, insights, or experiences related to this research work. This makes the content more personal and engaging.
```

## Frontmatter Fields

### Common Fields (All Content Types)

| Field | Description | Required |
|-------|-------------|----------|
| `title` | The title of the content | Yes |
| `date` | Publication date (YYYY-MM-DD) | Yes |
| `description` | Brief description (shown in previews) | Yes |
| `tags` | Array of tags/keywords | Yes |
| `thumbnailUrl` | Path to thumbnail image | Yes |

### Blog-Specific Fields

| Field | Description | Required |
|-------|-------------|----------|
| `author` | Author name | Yes |

### Project-Specific Fields

| Field | Description | Required |
|-------|-------------|----------|
| `technologies` | Array of technologies used | Yes |
| `category` | Project category (web, mobile, ai, etc.) | Yes |
| `liveUrl` | URL to live demo | No |
| `repoUrl` | URL to repository | No |

### Research-Specific Fields

| Field | Description | Required |
|-------|-------------|----------|
| `authors` | Array of authors | Yes |
| `advisor` | Research advisor name | No |
| `venue` | Publication venue or conference | No |
| `status` | Status of the research | No |
| `type` | Type of research content (publication, presentation, ongoing) | Yes |
| `arxivUrl` | URL to arXiv paper | No |
| `paperUrl` | URL to published paper | No |

## Adding Images

1. Place your images in the `/public/images` directory
2. Reference them in your content using the path `/images/your-image.jpg`
3. For thumbnails, the recommended size is 800x600 pixels
4. Images used in the content body can be any size

## Formatting Content

All content uses Markdown formatting. Here are some common formatting options:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

[Link text](https://example.com)

![Image alt text](/images/your-image.jpg)

- Bulleted
- List

1. Numbered
2. List

> Blockquote

\`Inline code\`

\`\`\`javascript
// Code block
function example() {
  return "Hello world!";
}
\`\`\`
```

## Featured Content

The site uses a simple configuration system for featured content.

### How It Works

In `lib/featuredConfig.ts`, you specify content IDs in the order they should appear:

```javascript
const featured = {
  home: ['dbs-election', 'llm-physics', 'style-canvas'],
  blog: ['getting-started-with-nextjs'],
  research: ['llm-physics']
};
```

- **Homepage:** Features a mix of content types (up to 3 items)
- **Blog page:** Features one blog post
- **Research page:** Features one research item

Content IDs are filenames without the `.md` extension.

The `featured: true` flag in markdown frontmatter is no longer used.

## Content Organization Best Practices

1. Use clear, descriptive filenames
2. Keep thumbnails consistent in style and dimensions
3. Include relevant tags to help with filtering and discovery
4. Write concise but informative descriptions
5. Organize complex content with headings and subheadings
6. Use images and code samples where appropriate to enhance content

## Technical Details

- Content is loaded at build time using the functions in `/lib/content.ts`
- Each content type has its own dynamic page template in `/pages/[type]/[id].tsx`
- Thumbnails are displayed using Next.js Image component for optimization