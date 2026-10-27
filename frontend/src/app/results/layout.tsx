import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

// results/page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = pageMetadata({
  title: 'Our Work: Marketing & Website Projects | Helix24',
  description: 'Examples of Helix24 projects for retail, healthcare and real estate businesses in Kerala and the GCC: the challenge and what we did.',
  path: '/results',
});

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
