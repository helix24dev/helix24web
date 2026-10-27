import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ServicePage from '@/components/ServicePage';
import { SERVICE_PAGES } from '@/lib/content';

// Content: /content/services/ecommerce-development.json (CMS: Service pages)
const content = SERVICE_PAGES['ecommerce-development'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/ecommerce-development' });

export default function EcommerceDevelopmentPage() {
  return <ServicePage c={content} path="/ecommerce-development" />;
}
