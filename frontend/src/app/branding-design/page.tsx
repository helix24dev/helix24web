import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ServicePage from '@/components/ServicePage';
import { SERVICE_PAGES } from '@/lib/content';

// Content: /content/services/branding-design.json (CMS: Service pages)
const content = SERVICE_PAGES['branding-design'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/branding-design' });

export default function BrandingDesignPage() {
  return <ServicePage c={content} path="/branding-design" />;
}
