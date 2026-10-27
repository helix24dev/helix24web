import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LocationPage from '@/components/LocationPage';
import { LOCATIONS } from '@/lib/content';

// Content: /content/locations/kozhikode.json (CMS: Location pages)
const content = LOCATIONS['kozhikode'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/locations/kozhikode' });

export default function KozhikodeLocationPage() {
  return <LocationPage c={content} />;
}
