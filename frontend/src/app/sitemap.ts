import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://helix24.com';
  const lastModified = new Date();

  const coreRoutes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/services/web-development`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/web-development`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/ecommerce-development`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/digital-marketing-seo`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services/meta-ads`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/mobile-app-development`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/branding-design`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/results`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/calculator`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'daily' as const },
  ];

  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  const formattedCore = coreRoutes.map((route) => ({
    url: route.url,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...formattedCore, ...blogPosts];
}
