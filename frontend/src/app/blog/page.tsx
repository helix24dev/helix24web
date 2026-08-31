import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web SEO Guide Kerala — Blog & FAQs | Helix24',
  description: 'Explore insights on Meta Ads, Google Ads PPC, Social Media Management costs, Local SEO strategies for Kochi & Kozhikode, and website development pricing in Kerala.',
};

export default function BlogPage() {
  const articles = [
    {
      tag: 'Meta Ads & Performance Marketing',
      title: 'How to Choose the Right Meta Ads Agency in Kochi, Kerala',
      excerpt: 'Running successful paid campaigns on Facebook and Instagram requires far more than boosting posts. Learn what metrics, Server-Side CAPI tracking, and Click-to-WhatsApp funnels to demand from a Kochi Meta Ads partner.',
    },
    {
      tag: 'Google Ads vs Meta Ads',
      title: 'Google Ads vs Meta Ads: Which Works Better for Kerala Businesses?',
      excerpt: 'Compare purchase search intent vs visual discovery. Learn when to deploy Google Search PPC for high-intent capture and Meta Ads for broad lead volume in Ernakulam and Kozhikode.',
    },
    {
      tag: 'Social Media Management (SMM)',
      title: 'Social Media Marketing Cost in Kerala: 2026 Pricing Guide',
      excerpt: 'Complete breakdown of monthly SMM retainer tiers in Kerala — from starter static grid packages (₹15,000/mo) to full Instagram Reels production and performance media suites (₹50,000+/mo).',
    },
    {
      tag: 'Local SEO & Google Maps',
      title: 'Local SEO for Businesses in Kochi & Kozhikode: A Complete Guide',
      excerpt: 'Over 60% of local service clicks go to the Google Maps 3-Pack. Discover how Google Business Profile optimization, geotagged reviews, and LocalBusiness JSON-LD schema drive local rankings.',
    },
    {
      tag: 'WhatsApp Marketing & GCC',
      title: 'WhatsApp Marketing for Kerala & GCC Businesses: Strategy Guide',
      excerpt: 'WhatsApp boasts 87%+ open rates across Kerala and the GCC (Dubai, Abu Dhabi). Connecting Click-to-WhatsApp ads with automated messaging boosts inquiry conversions by 3x.',
    },
    {
      tag: 'Web Development Pricing',
      title: 'How Much Does Website Development Cost in Kerala? (2026 Guide)',
      excerpt: 'Detailed pricing guide for corporate websites (₹20,000–₹40,000), custom Next.js web applications (₹50,000–₹90,000), and Shopify/WooCommerce e-commerce storefronts (₹60,000–₹1,80,000).',
    },
  ];

  return (
    <div className="max-w-[960px] mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Insights & Resources</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Digital Marketing & SEO Guide</h1>
        <p className="text-xs sm:text-sm text-purple-200/70 max-w-xl mx-auto">
          Data-driven strategies, cost breakdowns, and growth guides tailored for businesses in Kochi, Kozhikode, Kerala, UAE, and the GCC.
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((art, idx) => (
          <article key={idx} className="glass-panel p-8 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 border border-purple-500/20 px-3 py-1 rounded-full inline-block">
              {art.tag}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{art.title}</h2>
            <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed">{art.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="text-center pt-6">
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-all">
          <span>Need a Custom Strategy Proposal? Contact Our Team →</span>
        </Link>
      </div>
    </div>
  );
}
