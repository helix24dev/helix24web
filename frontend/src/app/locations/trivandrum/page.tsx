import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LocationPage from '@/components/LocationPage';
import { LOCATIONS } from '@/lib/content';

// Content: /content/locations/trivandrum.json (CMS: Location pages)
const content = LOCATIONS['trivandrum'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/locations/trivandrum' });

export default function TrivandrumLocationPage() {
  return <LocationPage c={content} />;
}
