import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { format } from 'date-fns';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

// Base content directory
const contentDirectory = path.join(process.cwd(), 'content');

// Supported content types
export type ContentType = 'blog' | 'projects' | 'research';

// Generic content interface
interface ContentItem {
  id: string;
  title: string;
  date: string;
  formattedDate: string;
  description: string;
  tags: string[];
  thumbnailUrl: string;
  readingTime: string;
  content: string;
}

// Blog-specific fields
export interface BlogPost extends ContentItem {
  author: string;
}

// Project-specific fields
export interface Project extends ContentItem {
  category: string;
  repoUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

// Research-specific fields
export interface Research extends ContentItem {
  type: 'publication' | 'presentation' | 'ongoing';
  authors: string[];
  venue?: string;
  status?: string;
  advisor?: string;
  arxivUrl?: string;
  paperUrl?: string;
}

// Get directory for a specific content type
function getContentTypeDirectory(type: ContentType): string {
  return path.join(contentDirectory, type);
}

// Get all content files for a specific type
function getContentFiles(type: ContentType): string[] {
  const contentTypeDir = getContentTypeDirectory(type);
  return fs.readdirSync(contentTypeDir)
    .filter(file => file.endsWith('.md'));
}

// Parse a markdown file and extract its data
function parseContentFile(type: ContentType, fileName: string): any {
  const id = fileName.replace(/\.md$/, '');
  const filePath = path.join(getContentTypeDirectory(type), fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Calculate reading time for the post
  const readingTime = calculateReadingTime(content);

  // Extract common fields with defaults
  return {
    id,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    formattedDate: data.date 
      ? format(new Date(data.date), 'MMMM d, yyyy') 
      : format(new Date(), 'MMMM d, yyyy'),
    description: data.description || '',
    tags: data.tags || [],
    thumbnailUrl: data.thumbnailUrl || "/images/placeholder.png",
    content,
    readingTime,
    ...data // Include all other fields from the frontmatter
  };
}

// Get all content items for a specific type
export function getAllContent<T>(type: ContentType): T[] {
  const files = getContentFiles(type);
  const allContent = files.map(file => parseContentFile(type, file)) as T[];

  // Sort by date, newest first
  return allContent.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get a specific content item by ID
export function getContentById<T>(type: ContentType, id: string): T | null {
  try {
    const filePath = path.join(getContentTypeDirectory(type), `${id}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContents);

    const processedContent = unified()
        .use(remarkParse)
        .use(remarkRehype)        // convert to HTML AST
        .use(rehypeHighlight)     // add syntax highlighting
        .use(rehypeStringify)     // stringify HTML AST to string
        .processSync(markdownContent)
        .toString();

    
    // Create the content item with processed HTML
    return {
      id,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      formattedDate: data.date 
        ? format(new Date(data.date), 'MMMM d, yyyy') 
        : format(new Date(), 'MMMM d, yyyy'),
      description: data.description || '',
      tags: data.tags || [],
      thumbnailUrl: data.thumbnailUrl || `/images/placeholder.png`,
      content: processedContent,
      readingTime: calculateReadingTime(markdownContent),
      ...data // Include all other fields from the frontmatter
    } as T;
  } catch (error) {
    console.error(`Error getting content for ${type}/${id}:`, error);
    return null;
  }
}

// Get all content paths for getStaticPaths
export function getAllContentPaths(type: ContentType): { params: { id: string } }[] {
  const files = getContentFiles(type);
  return files.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }));
}

export function getFeaturedContent(page: 'home' | 'blog' | 'research' = 'home'): {
  blogs: BlogPost[];
  projects: Project[];
  research: Research[];
} {
  const allBlogs = getAllContent<BlogPost>('blog');
  const allProjects = getAllContent<Project>('projects');
  const allResearch = getAllContent<Research>('research');
  
  const featured = require('./featuredConfig');
  const ids = featured[page] || [];
  
  const result = {
    blogs: [] as BlogPost[],
    projects: [] as Project[],
    research: [] as Research[]
  };

  for (const id of ids) {
    const blog = allBlogs.find(item => item.id === id);
    const project = allProjects.find(item => item.id === id);
    const research = allResearch.find(item => item.id === id);
    
    if (blog) result.blogs.push(blog);
    if (project) result.projects.push(project);
    if (research) result.research.push(research);
  }
  
  return result;
}

// Calculate estimated reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}