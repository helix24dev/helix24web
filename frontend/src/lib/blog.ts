// Blog posts: one JSON file per post in /content/blog (CMS: Blog posts, where editors can add new posts).
// Server-only: read from disk at build time; the blog routes are fully static.
import fs from 'fs';
import path from 'path';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: { type: 'pro-tip' | 'warning'; title: string; text: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: { name: string; role: string; location: string };
  excerpt: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
  draft?: boolean;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/** Published posts, newest first. Read at build time only (blog routes are fully static). */
export function getAllBlogPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(BLOG_DIR, f), 'utf8')) as BlogPost)
    .filter((p) => !p.draft)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}
