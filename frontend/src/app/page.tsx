import Link from 'next/link';
import AdSpendCalculator from '@/components/AdSpendCalculator';
import LeadForm from '@/components/LeadForm';
import { Target, Share2, Search, Award, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Helix24 Solutions',
    url: 'https://helix24.com',
    logo: 'https://helix24.com/assets/logo.png',
    description: 'Full-service Meta Ads, Social Media Management, Google Ads PPC, Local SEO, and Web Development agency.',
    telephone: '+91 9048009044',
    priceRange: '$$$',
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Kozhikode' },
      { '@type': 'State', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '85',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-20 max-w-[1240px] mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Meta Ads • Social Media Management • Google Ads • Web Dev
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            We build websites that rank.{' '}
            <span className="gradient-text">And ads that convert.</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Helix24 is a full-service digital marketing and web engineering agency. We run high-ROI Meta Ads, end-to-end Social Media Management, Google Ads PPC, and fast Next.js web applications — helping ambitious businesses across <strong>Kerala (Kochi & Kozhikode), UAE, and the GCC</strong> scale leads and sales.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Get Free Strategy Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#calculator"
              className="px-7 py-3.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 font-semibold text-sm hover:text-white hover:border-purple-400 transition-all"
            >
              Try ROI Calculator ⚡
            </Link>
          </div>

          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-purple-300/80">
            <Award className="w-4 h-4 text-amber-400" />
            <span><strong>5.0 Rating</strong> on Google Verified Business Profile</span>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="px-6 py-16 border-t border-purple-900/20 bg-purple-950/20">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Core Services</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engineered for Lead & Revenue Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-panel p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Meta Ads & Lead Funnels</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Data-driven Facebook & Instagram ad campaigns paired with server-side CAPI tracking, custom Reels video creatives, and direct WhatsApp conversion funnels.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Social Media Management</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Full-service brand publishing: Instagram Reels production, visual grid designs, community engagement, and transparent growth analytics.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Google Ads & Local SEO</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                High-intent Google Search PPC, Performance Max campaigns, and Google Maps Local 3-Pack optimization for Kochi & Kozhikode businesses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Ad Spend & ROI Calculator Section */}
      <section id="calculator" className="px-6 py-12">
        <AdSpendCalculator />
      </section>

      {/* Lead Form Section */}
      <section className="px-6 py-16 bg-purple-950/30 border-t border-purple-900/20">
        <LeadForm />
      </section>
    </>
  );
}
