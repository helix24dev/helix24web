import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import ServicePage from '@/components/ServicePage';
import { SERVICE_PAGES } from '@/lib/content';

// Content: /content/services/mobile-app-development.json (CMS: Service pages)
const content = SERVICE_PAGES['mobile-app-development'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/mobile-app-development' });

export default function MobileAppDevelopmentPage() {
  return <ServicePage c={content} path="/mobile-app-development" />;
}
