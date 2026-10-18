import Link from 'next/link';
import Image from 'next/image';
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
import TechEcosystemStrip from '@/components/TechEcosystemStrip';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function HomePage() {
  const selectedWorks = [
    {
      category: 'Omnichannel Retail',
      sectorBadge: 'Retail & Showrooms',
      icon: Store,
      illustration: '/images/service_web_real.svg',
      title: '18 Retail Outlets Unified Under One Live Digital System',
      highlight: '₹4.75 Cr',
      metricLabel: 'Attributed Sales',
      summary: 'Connected store operations with targeted Instagram ads and automated WhatsApp lead routing across all branches.',
      simpleBenefit: 'Every store walk-in and lead tracked directly from social ads into WhatsApp.',
      tags: ['Custom Website', 'Instagram & FB Ads', 'WhatsApp Lead Routing'],
      link: '/results',
    },
    {
      category: 'D2C Consumer Brands',
      sectorBadge: 'Online Store',
      icon: Zap,
      illustration: '/images/service_ecom_real.svg',
      title: 'High-Converting Online Store With Targeted Social Ads',
      highlight: '36.9×',
      metricLabel: 'Peak Campaign ROAS',
      summary: 'Launched a fast-loading mobile store paired with targeted Instagram ads and a 1-second checkout experience.',
      simpleBenefit: 'Instant page loading doubled online sales and cut abandoned carts.',
      tags: ['1-Second Checkout', 'Instagram Store Ads', 'Cart Recovery'],
      link: '/results',
    },
    {
      category: 'Real Estate & Luxury Builders',
      sectorBadge: 'Luxury Villas',
      icon: Building2,
      illustration: '/images/hero_real.svg',
      title: 'Connecting Premium Builders with NRI Homebuyers in the GCC',
      highlight: '₹14 Cr',
      metricLabel: 'Closed Property Pipeline',
      summary: 'Interactive project showcase pages combined with targeted ads reaching high-intent Malayali investors in Dubai and Saudi Arabia.',
      simpleBenefit: 'Directly reached verified Malayali NRI investors with instant WhatsApp project tours.',
      tags: ['Project Showcase Page', 'UAE & Gulf NRI Ads', 'WhatsApp Tours'],
      link: '/results',
    },
  ];

  const capabilities = [
    {
      num: '01',
      title: 'Performance Marketing',
      icon: Target,
      tagline: 'Targeted Social & Search Ads',
      simpleExplainer: 'We run targeted ads on Instagram, Facebook & Google that bring real customers straight to your WhatsApp and phone, without wasting your marketing budget.',
      desc: 'Focused strictly on real inquiries and sales revenue, not vanity likes or impressions.',
      link: '/digital-marketing-seo',
      tags: ['Instagram & Facebook Ads', 'Google Search Ads', 'Direct WhatsApp Leads'],
    },
    {
      num: '02',
      title: 'Websites & Online Stores',
      icon: Laptop,
      tagline: 'Instant Load Speed & Easy CMS',
      simpleExplainer: 'We build websites that open instantly on mobile. Every site includes an easy point-and-click CMS so you can update text, photos, and products anytime without paying a developer.',
      desc: 'Sub-second mobile speed, clean design, and easy client editing built right in.',
      link: '/web-development',
      tags: ['Sub-Second Loading', 'Easy Point-and-Click CMS', 'Shopify & Custom Web'],
    },
    {
      num: '03',
      title: 'Local SEO & Google Maps',
      icon: Search,
      tagline: 'Top 3 on Google Maps & Search',
      simpleExplainer: 'When customers in Kochi, Kozhikode, Trivandrum, or Dubai search for your services, your business appears at the top of Google Maps and local search.',
      desc: 'Dominate local 3-pack rankings and high-intent customer searches in your city.',
      link: '/digital-marketing-seo',
      tags: ['Google Maps Top 3', 'Local SEO in Kerala', 'Verified Customer Reviews'],
    },
    {
      num: '04',
      title: 'Branding & Video Content',
      icon: Palette,
      tagline: 'Professional Visuals & Reels',
      simpleExplainer: 'We produce vertical video Reels, product creatives, and clean brand identities that make your business look like an established market leader.',
      desc: 'Modern visual design and video production that builds trust and captures attention.',
      link: '/branding-design',
      tags: ['Brand Identity & Logo', 'High-Hook Video Reels', 'Website UI Design'],
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* Hero Section */}
      <section className="relative px-6 pt-16 sm:pt-24 max-w-[1240px] mx-auto text-center space-y-8">
        
        {/* Display Headline with Tom Fishburne Hook + SEO Keyword Integration */}
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 className="flex flex-col items-center">
            {/* The Main Hook Visitors See */}
            <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-heading">
              &ldquo;The best marketing <span className="gradient-text">doesn&apos;t feel like marketing.&rdquo;</span>
            </span>

            {/* Quote Attribution */}
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase mt-3 mb-4">
              <span className="w-8 h-px bg-purple-500/40"></span>
              <span>Tom Fishburne</span>
              <span className="w-8 h-px bg-purple-500/40"></span>
            </span>

            {/* Target Category & Kerala SEO Anchor */}
            <span className="text-lg sm:text-2xl font-semibold text-purple-700 dark:text-purple-300 tracking-tight font-heading">
              Digital Marketing &amp; Web Development Company in Kerala.
            </span>
          </h1>
        </div>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-slate-700 dark:text-purple-200/85 font-medium max-w-2xl mx-auto leading-relaxed">
          We help growing businesses in Kerala and the GCC generate consistent inquiries, sales, and verified return on ad spend through targeted Meta Ads, Google PPC, Local SEO, and fast websites.
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-200 font-semibold text-sm hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all shadow-xs"
          >
            <span>View Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-purple-700 dark:text-purple-300" />
          </Link>
        </div>

      </section>

      {/* Proof Metrics Strip */}
      <ProofMetricsStrip />

      {/* Accredited Partner & Tech Ecosystem Strip */}
      <TechEcosystemStrip />

      {/* Selected Work (Case Studies) */}
      <section className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-purple-200 dark:border-purple-900/30 pb-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block font-mono">
              Proven Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
              Work that moves the needle.
            </h2>
          </div>

          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors shrink-0"
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
                className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400/60 transition-all group relative overflow-hidden bg-white/70 dark:bg-purple-950/20"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300 shadow-xs">
                        <WorkIcon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-bold">
                        {work.sectorBadge}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-transparent flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:border-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xs">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors font-heading">
                      {work.highlight}
                    </span>
                    <span className="block text-xs uppercase tracking-wider text-slate-700 dark:text-purple-300 font-mono font-semibold">
                      {work.metricLabel}
                    </span>
                  </div>

                  {/* Clean Visual Graphic */}
                  <div className="w-full h-24 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center p-3 overflow-hidden">
                    <Image
                      src={work.illustration}
                      alt={work.title}
                      width={200}
                      height={80}
                      className="max-h-full w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors leading-snug">
                    {work.title}
                  </h3>

                  {/* Plain Language Benefit */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-purple-950/40 border border-emerald-200 dark:border-purple-500/30 text-xs text-slate-800 dark:text-purple-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{work.simpleBenefit}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/80 leading-relaxed">
                    {work.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-purple-100 dark:border-purple-900/40 flex flex-wrap gap-2">
                  {work.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 text-purple-900 dark:text-purple-300 font-mono font-semibold"
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
        <div className="space-y-2 border-b border-purple-200 dark:border-purple-900/30 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block font-mono">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Clear, Results-Driven Digital Services.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 max-w-xl font-medium leading-relaxed">
            Everything your business needs to attract customers, generate inquiries, and look like an established market leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, idx) => {
            const CapIcon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400/50 transition-all group bg-white/70 dark:bg-purple-950/20"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:text-purple-900 dark:group-hover:text-white transition-all shadow-xs">
                        <CapIcon className="w-5 h-5 text-purple-700 dark:text-purple-300" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold block uppercase tracking-wider">
                          {item.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors font-heading">
                    {item.title}
                  </h3>

                  {/* Plain Language Benefit Box */}
                  <div className="p-4 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/20 space-y-1.5">
                    <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-purple-900 dark:text-purple-300 font-bold block">
                      What this means for your business:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-purple-100 font-medium leading-relaxed">
                      {item.simpleExplainer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-purple-200/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-purple-100 dark:border-purple-900/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs text-purple-700 dark:text-purple-300/80 font-mono"
                      >
                        {tag} {tIdx < item.tags.length - 1 && '•'}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors"
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
          <div className="cta-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-[11px] font-mono text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Direct Strategy Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto font-heading">
            Ready to scale your customer acquisition?
          </h2>

          <p className="text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed">
            Talk directly with our marketing leads and web engineers. We review your current online presence and ad strategy on a direct consultation call.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20would%20like%20to%20discuss%20a%20strategy%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 fill-zinc-950 shrink-0" />
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
  );
}
