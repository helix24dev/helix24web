import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrackingScripts from '@/components/TrackingScripts';

export const metadata: Metadata = {
  title: 'Helix24 Solutions — Digital Marketing, Meta Ads & Web Agency (Kerala & GCC)',
  description: 'Helix24 delivers high-converting Meta Ads (Facebook & Instagram), Social Media Management, Google Ads PPC, Local SEO, and custom web development for growing businesses across Kochi, Kozhikode, Kerala, UAE, and GCC.',
  keywords: 'Meta ads agency Kochi, Social Media Management Kerala, Google Ads PPC Kozhikode, Local SEO agency, web development company, Facebook lead generation, Instagram marketing Dubai',
  metadataBase: new URL('https://helix24.com'),
  alternates: {
    canonical: 'https://helix24.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://helix24.com',
    title: 'Helix24 Solutions — Performance Marketing & Web Agency',
    description: 'We run high-converting Meta ad funnels, social media management, Google Ads, and custom web development.',
    siteName: 'Helix24 Solutions',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helix24 Solutions — Digital Agency (Kerala & GCC)',
    description: 'High-ROI Meta Ads, Social Media Management, Google Ads, and custom web development under one roof.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <TrackingScripts />
      </head>
      <body className="min-h-screen flex flex-col relative antialiased selection:bg-purple-600 selection:text-white">
        {/* Ambient Light Orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
