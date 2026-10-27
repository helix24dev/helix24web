import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import TrackingScripts from '@/components/TrackingScripts';
import DeferredTracking from '@/components/DeferredTracking';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo';

// Fonts are downloaded at build time and served from this site (no request to Google before text can render).
// All three are variable fonts, so each is a single file covering every weight the site uses.
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-jakarta' });
const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono', preload: false });

// Fallback for routes without their own metadata (e.g. 404). Pages use pageMetadata() from '@/lib/seo';
// canonicals are set per page because one here would be inherited by every route.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Helix24 Solutions | Digital Marketing & Web Development, Kerala',
  description: 'Helix24 is a digital marketing and web development company in Kochi. Meta Ads, Google Ads, local SEO and fast websites for Kerala and GCC businesses.',
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_IN',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The site has a single white theme; the [data-theme="light"] rules in globals.css adapt the components to it
    <html lang="en" data-theme="light" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <head>
        <TrackingScripts />
      </head>
      <body className="min-h-screen flex flex-col relative antialiased bg-[var(--paper)] text-[var(--ink)] selection:bg-purple-600 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28">{children}</main>
        <Footer />
        <FloatingActions />
        <DeferredTracking />
      </body>
    </html>
  );
}
