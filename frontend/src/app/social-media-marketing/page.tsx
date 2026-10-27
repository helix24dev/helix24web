import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ServicePage from '@/components/ServicePage';
import { SERVICE_PAGES } from '@/lib/content';

// Content: /content/services/social-media-marketing.json (CMS: Service pages)
const content = SERVICE_PAGES['social-media-marketing'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/social-media-marketing' });

export default function SocialMediaMarketingPage() {
  return <ServicePage c={content} path="/social-media-marketing" />;
}
