import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import ProofMetricsStrip from '@/components/ProofMetricsStrip';

export default function HomePage() {
  const selectedWorks = [
    {
      category: 'Omnichannel Retail',
      title: '18 Retail Outlets Unified Under One Live Digital Command Center',
      highlight: '₹4.75 Cr',
      metricLabel: 'Attributed Sales',
      summary: 'Replaced disconnected store workflows with a unified Next.js dashboard, automated WhatsApp CRM lead routing, and Meta CAPI campaigns.',
      tags: ['Next.js 14', 'Meta CAPI', 'WhatsApp Routing'],
      link: '/results',
    },
    {
      category: 'D2C Consumer Brands',
      title: 'High-Converting E-Commerce Engine With Dynamic Meta Catalog Ads',
      highlight: '36.9×',
      metricLabel: 'Peak Campaign ROAS',
      summary: 'Migrated from a slow legacy store to a sub-second Next.js commerce platform paired with dynamic catalog retargeting and 1-click checkout.',
      tags: ['0.8s Checkout', 'Dynamic Catalog', 'Automated Recovery'],
      link: '/results',
    },
    {
      category: 'Real Estate & Luxury Builders',
      title: 'Premium NRI Investor Funnels for Ultra-Luxury Villa Developments',
      highlight: '₹14 Cr',
      metricLabel: 'Closed Property Pipeline',
      summary: 'Interactive project landing pages with floorplans, combined with Meta Ads featuring income qualification for Dubai and Saudi investors.',
      tags: ['Interactive Landing Page', 'NRI Targeting', 'WhatsApp 3D Tours'],
      link: '/results',
    },
  ];

  const capabilities = [
    {
      num: '01',
      title: 'Performance Marketing',
      desc: 'We build and scale Meta Ads and Google PPC funnels focused strictly on customer acquisition cost and attributed pipeline revenue, not vanity impressions.',
      link: '/digital-marketing-seo',
      tags: ['Meta Ads (CAPI 2.0)', 'Google Search PPC', 'Click-to-WhatsApp'],
    },
    {
      num: '02',
      title: 'Web & App Engineering',
      desc: 'Lightning-fast Next.js web applications, headless commerce storefronts, and native mobile apps engineered for speed, conversions, and clean code.',
      link: '/web-development',
      tags: ['Next.js 14/15', 'Shopify Plus & Headless', 'Flutter Apps'],
    },
    {
      num: '03',
      title: 'Search & Local Dominance',
      desc: 'Dominate Google Maps 3-Pack and high-intent organic search queries across Kochi, Kozhikode, Trivandrum, and GCC business corridors.',
      link: '/digital-marketing-seo',
      tags: ['Google 3-Pack', 'Technical SEO', 'Local Schema Sync'],
    },
    {
      num: '04',
      title: 'Brand & Creative Systems',
      desc: 'Figma UI/UX design systems, high-retention video creative, and corporate visual identities that make ambitious brands stand out effortlessly.',
      link: '/branding-design',
      tags: ['UI/UX Design Systems', 'Video Creative', 'Brand Identity'],
    },
  ];

  const regionalHubs = [
    {
      city: 'Kochi',
      region: 'Central Kerala & Infopark',
      focus: 'Tech Startups & Commercial Growth',
      desc: 'Centrally rooted in Ernakulam/Kakkanad, helping tech enterprises, healthcare groups, and B2B services capture statewide and national market share.',
    },
    {
      city: 'Kozhikode',
      region: 'Malabar Commerce Corridor',
      focus: 'Retail Groups & D2C Brands',
      desc: 'Empowering North Kerala’s vibrant trade capital with high-converting Meta Ads, omnichannel retail funnels, and sub-second commerce storefronts.',
    },
    {
      city: 'Trivandrum',
      region: 'South Kerala & Technopark',
      focus: 'Enterprise & Institutional SEO',
      desc: 'Supporting Technopark technology firms, professional practices, and premium builders with high-intent search optimization and digital systems.',
    },
    {
      city: 'GCC Desk',
      region: 'UAE (Dubai) & Saudi Arabia',
      focus: 'Cross-Border Commerce & NRIs',
      desc: 'Connecting Kerala brands with high-net-worth diaspora investors, Apple Pay & Tabby BNPL checkouts, and bilingual ad funnels across the Gulf.',
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-950/60"
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

        {/* Regional Hubs & Presence Section */}
        <section className="px-6 max-w-[1240px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-purple-900/30 pb-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block font-mono">
                Regional Authority
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                From Kerala to the GCC.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-purple-300/70 max-w-md">
              Local market grounding across Central, North, and South Kerala, integrated with cross-border GCC expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalHubs.map((hub, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-purple-500/20 hover:border-purple-400/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="font-heading font-extrabold text-2xl text-white">
                      {hub.city}
                    </span>
                  </div>

                  <span className="block text-[11px] font-mono uppercase tracking-wider text-purple-300 font-semibold">
                    {hub.region}
                  </span>

                  <p className="text-xs text-purple-200/75 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-900/40">
                  <span className="text-[11px] text-emerald-400 font-semibold font-mono block">
                    {hub.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

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
            {selectedWorks.map((work, idx) => (
              <Link
                key={idx}
                href={work.link}
                className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-500/20 hover:border-purple-400/60 transition-all group relative overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                      {work.category}
                    </span>
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

                  <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed">
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
            ))}
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-500/20 hover:border-purple-400/50 transition-all group"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-purple-400 block">
                    {item.num}
                  </span>

                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-purple-200/75 leading-relaxed">
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
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Call to Action */}
        <section className="px-6 max-w-[1240px] mx-auto">
          <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-purple-950/80 via-slate-950 to-purple-950/50 border border-purple-500/30 text-center space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-[11px] font-mono text-purple-300">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-purple-500/40 bg-purple-900/30 text-white font-medium text-sm hover:bg-purple-800/40 transition-all"
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
