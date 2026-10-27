import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

// results/page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing Case Studies, Kerala & GCC | Helix24',
  description: 'Real client results from Helix24: Meta Ads ROAS, local SEO lead growth and web development case studies from across Kerala and the GCC.',
  path: '/results',
});

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
