import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Target,
  Laptop,
  Search,
  Palette,
  Store,
  Zap,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import ProofMetricsStrip from '@/components/ProofMetricsStrip';

export default function HomePage() {
  const selectedWorks = [
    {
      category: 'Omnichannel Retail',
      sectorBadge: 'Retail & Showrooms',
      icon: Store,
      title: '18 Retail Outlets Unified Under One Live Digital Command Center',
      highlight: '₹4.75 Cr',
      metricLabel: 'Attributed Sales',
      summary: 'Replaced disconnected store workflows with a unified dashboard, automated WhatsApp CRM lead routing, and Meta CAPI campaigns.',
      simpleBenefit: 'Every store walk-in and lead tracked directly from Instagram ads into WhatsApp.',
      tags: ['Custom Website', 'Instagram & FB Ads', 'WhatsApp Lead Routing'],
      link: '/results',
    },
    {
      category: 'D2C Consumer Brands',
      sectorBadge: 'Online Store',
      icon: Zap,
      title: 'High-Converting E-Commerce Engine With Dynamic Meta Catalog Ads',
      highlight: '36.9×',
      metricLabel: 'Peak Campaign ROAS',
      summary: 'Migrated from a slow legacy store to a sub-second commerce platform paired with dynamic catalog retargeting and 1-click checkout.',
      simpleBenefit: '0.8-second load speed doubled online sales and eliminated abandoned checkouts.',
      tags: ['1-Second Checkout', 'Instagram Store Ads', 'Abandoned Cart Recovery'],
      link: '/results',
    },
    {
      category: 'Real Estate & Luxury Builders',
      sectorBadge: 'Luxury Villas',
      icon: Building2,
      title: 'Premium NRI Investor Funnels for Ultra-Luxury Villa Developments',
      highlight: '₹14 Cr',
      metricLabel: 'Closed Property Pipeline',
      summary: 'Interactive project landing pages with floorplans, combined with Meta Ads featuring income qualification for Dubai and Saudi investors.',
      simpleBenefit: 'Directly reached high-net-worth Malayali NRIs in UAE & Saudi Arabia.',
      tags: ['Project Showcase Page', 'UAE & Gulf NRI Ads', 'WhatsApp Virtual Tours'],
      link: '/results',
    },
  ];

  const capabilities = [
    {
      num: '01',
      title: 'Performance Marketing',
      icon: Target,
      tagline: 'Customer Acquisition & Ad ROI',
      simpleExplainer: 'We run targeted ads on Instagram, Facebook & Google that bring real buying customers straight to your WhatsApp and phone, without wasting your marketing budget.',
      desc: 'We build and scale Meta Ads and Google PPC funnels focused strictly on customer acquisition cost and attributed pipeline revenue, not vanity impressions.',
      link: '/digital-marketing-seo',
      tags: ['Instagram & Facebook Ads', 'Google Search Ads', 'Direct WhatsApp Leads'],
    },
    {
      num: '02',
      title: 'Web & App Engineering',
      icon: Laptop,
      tagline: 'Sub-Second Speed & Mobile Apps',
      simpleExplainer: 'We build websites and mobile apps that open instantly in under 1 second. Your customers never leave due to slow page loading or clunky forms.',
      desc: 'Lightning-fast Next.js web applications, headless commerce storefronts, and native mobile apps engineered for speed, conversions, and clean code.',
      link: '/web-development',
      tags: ['Ultra-Fast Websites', 'Shopify Online Stores', 'iOS & Android Apps'],
    },
    {
      num: '03',
      title: 'Search & Local Dominance',
      icon: Search,
      tagline: 'Rank #1 on Google & Google Maps',
      simpleExplainer: 'When customers in Kochi, Kozhikode, Trivandrum, or Dubai search for your services, your business appears at the very top of Google Search and Google Maps.',
      desc: 'Dominate Google Maps 3-Pack and high-intent organic search queries across Kochi, Kozhikode, Trivandrum, and GCC business corridors.',
      link: '/digital-marketing-seo',
      tags: ['Google Maps Top 3', 'Google Search Rankings', 'Local Kerala & GCC SEO'],
    },
    {
      num: '04',
      title: 'Brand & Creative Systems',
      icon: Palette,
      tagline: 'High-Retention Video & Design',
      simpleExplainer: 'We produce viral video reels, high-converting product creatives, and premium corporate branding that make your business look like an established market leader.',
      desc: 'Figma UI/UX design systems, high-retention video creative, and corporate visual identities that make ambitious brands stand out effortlessly.',
      link: '/branding-design',
      tags: ['Logo & Brand Identity', 'High-Hook Video Reels', 'Website & App UI Design'],
    },
  ];

  const regionalSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Helix 24 Solutions Pvt Ltd',
    url: 'https://helix24.com',
    telephone: '+91 9048009044',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Kozhikode' },
      { '@type': 'City', name: 'Trivandrum' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(regionalSchema) }}
      />

      <div className="space-y-28 sm:space-y-40 pb-24">
        
        {/* Hero Section */}
        <section className="relative px-6 pt-16 sm:pt-24 max-w-[1240px] mx-auto text-center space-y-8">
          
          {/* Regional Hubs Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-xs font-mono uppercase tracking-widest text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Kochi • Kozhikode • Trivandrum • GCC</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white max-w-4xl mx-auto leading-[1.08]">
            We engineer revenue for{' '}
            <span className="gradient-text">ambitious brands.</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            High-converting Meta Ads, Google PPC, Local SEO, and sub-second Next.js web applications tailored for market leaders across Kerala and the GCC.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-950/60 keep-white"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/results"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-200 font-medium text-sm hover:bg-purple-900/40 transition-all"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-purple-300" />
            </Link>
          </div>

        </section>

        {/* Proof Metrics Strip */}
        <ProofMetricsStrip />

        {/* Selected Work (Case Studies) */}
        <section className="px-6 max-w-[1240px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-purple-900/30 pb-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block font-mono">
                Proven Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Work that moves the needle.
              </h2>
            </div>

            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors shrink-0"
            >
              <span>All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {selectedWorks.map((work, idx) => {
              const WorkIcon = work.icon;
              return (
                <Link
                  key={idx}
                  href={work.link}
                  className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-500/20 hover:border-purple-400/60 transition-all group relative overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300">
                          <WorkIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                          {work.sectorBadge}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:border-purple-400 group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="block text-3xl sm:text-4xl font-extrabold text-white group-hover:text-purple-200 transition-colors font-heading">
                        {work.highlight}
                      </span>
                      <span className="block text-xs uppercase tracking-wider text-purple-300/80 font-mono">
                        {work.metricLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-purple-100 group-hover:text-white transition-colors leading-snug">
                      {work.title}
                    </h3>

                    {/* Plain English Takeaway for Business Owners */}
                    <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200/90 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 metric-emerald shrink-0 mt-0.5" />
                      <span>{work.simpleBenefit}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed">
                      {work.summary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-purple-900/40 flex flex-wrap gap-2">
                    {work.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="px-6 max-w-[1240px] mx-auto space-y-12">
          <div className="space-y-2 border-b border-purple-900/30 pb-8">
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block font-mono">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What we do.
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/80 max-w-xl">
              Clear, transparent digital growth systems designed for business owners — zero marketing fluff or confusing jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => {
              const CapIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-500/20 hover:border-purple-400/50 transition-all group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/30 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:border-purple-400 transition-all shadow-sm">
                          <CapIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-purple-400 font-semibold block uppercase tracking-wider">
                            {item.tagline}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {item.title}
                    </h3>

                    {/* Plain Language Box for Non-Technical Clients */}
                    <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-purple-300 font-bold block">
                        What this means for your business:
                      </span>
                      <p className="text-xs sm:text-sm text-purple-100 font-medium leading-relaxed">
                        {item.simpleExplainer}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs text-purple-300/80 font-mono"
                        >
                          {tag} {tIdx < item.tags.length - 1 && '•'}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Direct Call to Action */}
        <section className="px-6 max-w-[1240px] mx-auto">
          <div className="cta-banner p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-purple-950/80 via-slate-950 to-purple-950/50 border border-purple-500/30 text-center space-y-6 shadow-2xl">
            <div className="cta-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-[11px] font-mono text-purple-300">
              <span>Kochi • Kozhikode • Trivandrum • GCC</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
              Ready to scale your customer acquisition?
            </h2>

            <p className="text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed">
              Talk directly with our performance media buyers and web engineers. We review your ad accounts and tech stack on a direct strategy call.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20would%20like%20to%20discuss%20a%20strategy%20consultation%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-purple-500/40 bg-purple-900/30 text-white font-medium text-sm hover:bg-purple-800/40 transition-all keep-white"
              >
                <span>Schedule Corporate Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
