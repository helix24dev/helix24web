import type { Metadata } from 'next';

// results/page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = {
  title: 'Results & Case Studies | Helix24 Solutions',
  description: 'Real client growth metrics from Helix24: Meta Ads ROAS, Local SEO lead growth and web development case studies across Kerala and the GCC.',
  alternates: {
    canonical: 'https://helix24.in/results',
  },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
