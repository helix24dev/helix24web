import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ServicePage from '@/components/ServicePage';
import { SERVICE_PAGES } from '@/lib/content';

// Content: /content/services/web-development.json (CMS: Service pages)
const content = SERVICE_PAGES['web-development'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/web-development' });

export default function WebDevelopmentPage() {
  return <ServicePage c={content} path="/web-development" />;
}
