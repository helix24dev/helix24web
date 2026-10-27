import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LocationPage from '@/components/LocationPage';
import { LOCATIONS } from '@/lib/content';

// Content: /content/locations/kochi.json (CMS: Location pages)
const content = LOCATIONS['kochi'];

export const metadata: Metadata = pageMetadata({ ...content.seo, path: '/locations/kochi' });

export default function KochiLocationPage() {
  return <LocationPage c={content} />;
}
