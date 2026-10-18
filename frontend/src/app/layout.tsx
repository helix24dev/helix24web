import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import TrackingScripts from '@/components/TrackingScripts';

export const metadata: Metadata = {
  title: 'Helix24 Solutions — Performance Marketing & Web Agency (Kochi · Kozhikode · Trivandrum · GCC)',
  description: 'Helix24 Solutions Pvt Ltd delivers high-ROI Meta Ads, Google Ads PPC, Local SEO, and Next.js web development for growing businesses across Kochi, Kozhikode, Trivandrum, Kerala, UAE, and the GCC.',
  keywords: 'Helix24 Solutions Pvt Ltd, Meta ads agency Kochi, performance marketing Kozhikode, SEO agency Trivandrum, web development company Kerala, digital marketing agency Kakkanad, Technopark web agency, Calicut advertising, Meta ads Dubai, GCC ecommerce marketing',
  metadataBase: new URL('https://helix24.com'),
  alternates: {
    canonical: 'https://helix24.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://helix24.com',
    title: 'Helix24 Solutions — Performance Marketing & Web Systems (Kerala & GCC)',
    description: 'We run high-converting Meta ad funnels, Google Ads PPC, Local SEO, and custom Next.js web applications across Kochi, Kozhikode, Trivandrum, and the GCC.',
    siteName: 'Helix24 Solutions Pvt Ltd',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helix24 Solutions — Digital Agency (Kochi · Kozhikode · Trivandrum · GCC)',
    description: 'Performance-driven Meta Ads, Google Ads, Local SEO, and custom web engineering under one roof.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <head>
        <TrackingScripts />
      </head>
      <body className="min-h-screen flex flex-col relative antialiased bg-[var(--paper)] text-[var(--ink)] selection:bg-purple-600 selection:text-white transition-colors duration-200">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
