import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/data/blogPosts';
import { SITE_URL } from '@/lib/seo';

// lastModified is the date the page's content last changed. Update a route's date when you edit that page:
// stamping every URL with the build time tells Google nothing and teaches it to ignore lastmod.
const coreRoutes: { path: string; updated: string }[] = [
  { path: '', updated: '2026-10-27' },
  { path: '/digital-marketing-seo', updated: '2026-10-27' },
  { path: '/social-media-marketing', updated: '2026-10-27' },
  { path: '/web-development', updated: '2026-10-27' },
  { path: '/ecommerce-development', updated: '2026-10-27' },
  { path: '/mobile-app-development', updated: '2026-10-27' },
  { path: '/branding-design', updated: '2026-10-27' },
  { path: '/results', updated: '2026-10-27' },
  { path: '/about', updated: '2026-10-27' },
  { path: '/contact', updated: '2026-10-27' },
  { path: '/calculator', updated: '2026-10-27' },
  { path: '/blog', updated: '2026-10-27' },
  { path: '/locations/kochi', updated: '2026-10-27' },
  { path: '/locations/kozhikode', updated: '2026-10-27' },
  { path: '/locations/trivandrum', updated: '2026-10-27' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = coreRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(route.updated),
  }));

  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
  }));

  return [...pages, ...blogPosts];
}
