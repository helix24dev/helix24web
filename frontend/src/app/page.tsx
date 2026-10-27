import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Laptop,
  Search,
  Palette,
  Store,
  Zap,
  Building2,
  CheckCircle2,
  ShieldCheck,
  KeyRound,
  ChartColumn,
  Phone,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import ProofMetricsStrip from '@/components/ProofMetricsStrip';
import TechEcosystemStrip from '@/components/TechEcosystemStrip';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://helix24.in',
  },
};

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

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'A Registered Private Limited Company',
      text: 'Helix24 Solutions Pvt Ltd is incorporated with the Registrar of Companies, Kerala (CIN U62011KL2026PTC107185). Every engagement comes with GST invoices and an NDA on request.',
    },
    {
      icon: KeyRound,
      title: 'You Own Every Account and Asset',
      text: 'Your ad accounts, Meta Pixel, Google Analytics data, website code and domain stay in your name. If you ever leave, nothing is held back.',
    },
    {
      icon: ChartColumn,
      title: 'Reports Built on Leads and Sales',
      text: 'We report on enquiries, cost per lead and return on ad spend, not likes or impressions, so you can see exactly what your budget delivers.',
    },
    {
      icon: Phone,
      title: 'Talk to the People Doing the Work',
      text: 'Reach the team directly on WhatsApp or phone at +91 9048009044. No call centres and no account managers passing messages along.',
    },
  ];

  const serviceAreas = [
    {
      name: 'Kochi',
      href: '/locations/kochi',
      text: 'Our home base. Meta Ads, Google Ads, local SEO and websites for businesses in Ernakulam, Kakkanad and Infopark.',
    },
    {
      name: 'Kozhikode',
      href: '/locations/kozhikode',
      text: 'Digital marketing for retail chains, healthcare brands and D2C businesses across Calicut and the Malabar region.',
    },
    {
      name: 'Trivandrum',
      href: '/locations/trivandrum',
      text: 'Lead generation and web development for Technopark companies, institutions and commercial projects in South Kerala.',
    },
    {
      name: 'UAE & GCC',
      href: '/services/meta-ads',
      text: 'Meta Ads and e-commerce for brands in Dubai, Abu Dhabi and Saudi Arabia, including campaigns that reach Malayali NRI buyers.',
    },
  ];

  const faqs = [
    {
      q: 'What services does Helix24 offer?',
      a: 'Helix24 is a digital marketing and web development company in Kerala. We run Meta Ads (Facebook and Instagram), Google Ads, local SEO and Google Maps optimisation, and build fast websites, online stores (Shopify, WooCommerce and custom Next.js) and mobile apps. We also produce branding, ad creatives and video Reels.',
    },
    {
      q: 'Where is Helix24 based, and which areas do you serve?',
      a: 'We are based in Kochi, Kerala. We work with businesses across Kochi, Kozhikode and Trivandrum, and run campaigns for clients in the UAE, Saudi Arabia and the wider GCC.',
    },
    {
      q: 'How soon will Meta Ads or Google Ads bring enquiries?',
      a: 'Well-targeted campaigns usually start bringing enquiries within 24 to 72 hours of launch. Results then improve over the first 14 to 30 days as the ad platforms learn which audiences convert best and we refine targeting and creatives.',
    },
    {
      q: 'How long does it take to build a business website?',
      a: 'A business website or landing page typically takes 2 to 3 weeks. Larger web applications, dashboards and portals take 4 to 8 weeks, with demos at each milestone so you can review progress.',
    },
    {
      q: 'Will I own my website, ad accounts and data?',
      a: 'Yes. Your website code, domain, ad accounts, Meta Pixel and analytics data are set up in your name and remain fully yours, whether or not you continue working with us.',
    },
    {
      q: 'How do I get started with Helix24?',
      a: 'Message us on WhatsApp or call +91 9048009044, email hello@helix24.in, or send your details through the contact form. We review your current website and ads and send a tailored proposal within 24 hours.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-16 sm:pt-24 max-w-[1240px] mx-auto text-center space-y-8">
        
        {/* Display Headline with Tom Fishburne Hook; the H1 carries the search keyword, the quote is the visual hook */}
        <div className="max-w-5xl mx-auto space-y-6">
          <figure className="space-y-6">
            <blockquote className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-heading block">
              &ldquo;The best marketing <span className="gradient-text">doesn&apos;t feel like marketing.&rdquo;</span>
            </blockquote>

            <figcaption className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase">
              <span className="w-10 h-px bg-purple-500/40"></span>
              <cite className="not-italic">Tom Fishburne</cite>
              <span className="w-10 h-px bg-purple-500/40"></span>
            </figcaption>
          </figure>

          <h1 className="text-xl sm:text-2xl font-semibold text-purple-700 dark:text-purple-300 tracking-tight font-heading block">
            Digital Marketing &amp; Web Development Company in Kerala
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
                  {/* 3:2 tile matches the illustrations' viewBox so the image fills it at 100% */}
                  <div className="relative w-full aspect-[3/2] rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 overflow-hidden">
                    <Image
                      src={work.illustration}
                      alt={work.title}
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors leading-snug">
                    {work.title}
                  </h3>

                  {/* Plain Language Benefit */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-purple-950/40 border border-emerald-200 dark:border-purple-500/30 text-sm text-slate-800 dark:text-purple-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{work.simpleBenefit}</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 leading-relaxed">
                    {work.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-purple-100 dark:border-purple-900/40 flex flex-wrap gap-2">
                  {work.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 text-purple-900 dark:text-purple-300 font-mono font-semibold"
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
                    <span className="text-xs uppercase font-mono tracking-wider text-purple-900 dark:text-purple-300 font-bold block">
                      What this means for your business:
                    </span>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-purple-100 font-medium leading-relaxed">
                      {item.simpleExplainer}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 leading-relaxed">
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
                    aria-label={`Explore ${item.title}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors"
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

      {/* Trust & Accountability */}
      <section aria-labelledby="trust-heading" className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 dark:border-purple-900/30 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block font-mono">
            Why Businesses Trust Us
          </span>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            A digital partner you can hold accountable.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-purple-200/80 max-w-2xl font-medium leading-relaxed">
            Choosing a marketing agency is a decision about trust. Here is what you get from us in writing, from the first call onwards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {trustPoints.map((point) => {
            const PointIcon = point.icon;
            return (
              <div
                key={point.title}
                className="glass-panel p-7 sm:p-8 flex gap-5 border border-purple-200 dark:border-purple-500/20 bg-white/70 dark:bg-purple-950/20"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center">
                  <PointIcon className="w-5 h-5 text-purple-700 dark:text-purple-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">{point.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 leading-relaxed">{point.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Areas: internal links to location pages */}
      <section aria-labelledby="areas-heading" className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 dark:border-purple-900/30 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block font-mono">
            Where We Work
          </span>
          <h2 id="areas-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Digital marketing across Kerala and the GCC.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-purple-200/80 max-w-2xl font-medium leading-relaxed">
            We know how customers in each market search, scroll and buy, and plan campaigns and websites around that.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="glass-panel p-7 space-y-3 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400/60 transition-all group bg-white/70 dark:bg-purple-950/20"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white font-heading">
                  <MapPin className="w-4 h-4 text-purple-700 dark:text-purple-400" />
                  {area.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-purple-700 dark:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-slate-600 dark:text-purple-200/80 leading-relaxed">{area.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ: mirrors the FAQPage JSON-LD above */}
      <section aria-labelledby="faq-heading" className="px-6 max-w-[900px] mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block font-mono">
            Questions & Answers
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group glass-panel border border-purple-200 dark:border-purple-500/20 bg-white/70 dark:bg-purple-950/20 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                <h3 className="font-heading">{item.q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-purple-700 dark:text-purple-300 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 -mt-1 text-sm sm:text-base text-slate-600 dark:text-purple-200/85 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
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
