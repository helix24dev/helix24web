import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ServicePage from '@/components/ServicePage';
import { SERVICE_PAGES } from '@/lib/content';

// Content: /content/services/digital-marketing-seo.json (CMS: Service pages)
const content = SERVICE_PAGES['digital-marketing-seo'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/digital-marketing-seo' });

export default function DigitalMarketingSeoPage() {
  return <ServicePage c={content} path="/digital-marketing-seo" />;
}
