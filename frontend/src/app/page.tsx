import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Laptop,
  Search,
  Palette,
  ShieldCheck,
  KeyRound,
  ChartColumn,
  Phone,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import FeatureIcon from '@/components/FeatureIcon';
import CaseJourney from '@/components/CaseJourney';
import { PROJECTS } from '@/data/projects';
import TechEcosystemStrip from '@/components/TechEcosystemStrip';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { logos } from '@/data/platforms';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing & Web Development in Kerala | Helix24',
  description: 'Helix24 is a digital marketing and web development company in Kochi. Meta Ads, Google Ads, local SEO and fast websites for Kerala and GCC businesses.',
  path: '/',
});

export default function HomePage() {
  // Case studies live in src/data/projects.ts (shared with /results)
  const selectedWorks = ['retail-group', 'd2c-store', 'real-estate'].map((id) => PROJECTS.find((p) => p.id === id)!);

  const capabilities = [
    {
      num: '01',
      brands: logos('googleAds', 'facebook', 'instagram'),
      title: 'Digital Marketing',
      icon: Target,
      tagline: 'Google, Instagram & Facebook Ads',
      simpleExplainer: 'Ads on Google, Instagram and Facebook that send enquiries to your phone and WhatsApp, with tracking so you can see what each rupee brings in.',
      link: '/digital-marketing-seo',
      tags: ['Meta Ads', 'Google Ads', 'WhatsApp leads'],
    },
    {
      num: '02',
      title: 'Websites & Online Stores',
      icon: Laptop,
      tagline: 'Fast, Mobile-First Websites',
      simpleExplainer: 'Websites and online stores that load quickly on a phone and are easy for your team to update, so you do not need a developer for every change.',
      link: '/web-development',
      tags: ['Business websites', 'Online stores', 'Easy editing'],
    },
    {
      num: '03',
      brands: logos('googleMaps', 'google'),
      title: 'Local SEO & Google Maps',
      icon: Search,
      tagline: 'Get Found in Local Search',
      simpleExplainer: 'A complete Google Business Profile, consistent listings and genuine reviews, so you show up when people nearby search for what you do.',
      link: '/digital-marketing-seo',
      tags: ['Google Business Profile', 'Local SEO', 'Reviews'],
    },
    {
      num: '04',
      brands: logos('figma', 'instagram'),
      title: 'Branding & Video Content',
      icon: Palette,
      tagline: 'Logos, Design & Reels',
      simpleExplainer: 'Logos, brand identities, social media creatives and short videos that make your business look professional and consistent everywhere.',
      link: '/branding-design',
      tags: ['Brand identity', 'Reels & video', 'Website design'],
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
      text: 'We report on enquiries, cost per lead and return on ad spend, not likes or impressions, so you can see what your budget brings in.',
    },
    {
      icon: Phone,
      brands: logos('whatsapp'),
      title: 'Talk to the People Doing the Work',
      text: 'Reach the team directly on WhatsApp or phone at +91 9048009044. No call centres and no account managers passing messages along.',
    },
  ];

  const serviceAreas = [
    {
      name: 'Kochi',
      href: '/locations/kochi',
      text: 'Where our registered office is. Meta Ads, Google Ads, local SEO and websites for businesses in Ernakulam, Kakkanad and Infopark.',
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
      href: '/social-media-marketing',
      text: 'Meta Ads and e-commerce for brands in Dubai, Abu Dhabi and Saudi Arabia, including campaigns that reach Malayali NRI buyers.',
    },
  ];

  const faqs = [
    {
      q: 'What services does Helix24 offer?',
      a: 'Helix24 is a digital marketing and web development company in Kerala. We run Meta Ads (Facebook and Instagram), Google Ads, local SEO and Google Maps optimisation, and build fast websites, online stores (Shopify, WooCommerce and custom Next.js) and mobile apps. We also produce branding, ad creatives and video Reels.',
    },
    {
      q: 'Where is Helix24 located, and which areas do you serve?',
      a: 'Our registered office is in Kochi, Kerala. We work with businesses across Kochi, Kozhikode and Trivandrum, and run campaigns for clients in the UAE, Saudi Arabia and the wider GCC.',
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
      a: 'Message us on WhatsApp or call +91 9048009044, email info@helix24.in, or send your details through the contact form. We review your current website and ads and send a proposal for your business within 24 hours.',
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
            <blockquote className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading block">
              &ldquo;The best marketing <span className="gradient-text">doesn&apos;t feel like marketing.&rdquo;</span>
            </blockquote>

            <figcaption className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase">
              <span className="w-10 h-px bg-purple-500/40"></span>
              <cite className="not-italic">Tom Fishburne</cite>
              <span className="w-10 h-px bg-purple-500/40"></span>
            </figcaption>
          </figure>

          <h1 className="text-xl sm:text-2xl font-semibold text-purple-700 tracking-tight font-heading block">
            Digital Marketing &amp; Web Development Company in Kerala
          </h1>
        </div>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
          We help businesses in Kerala and the GCC get more enquiries and sales through social media marketing, Google Ads, local SEO and fast websites.
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
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all"
          >
            <span>See Our Work</span>
            <ArrowUpRight className="w-4 h-4 text-purple-700" />
          </Link>
        </div>

      </section>

      {/* Platforms we work with */}
      <TechEcosystemStrip />

      {/* Selected Work (Case Studies) */}
      <section className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-purple-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
              Recent projects
            </h2>
          </div>

          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors shrink-0"
          >
            <span>See all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {selectedWorks.map((work) => (
            <Link
              key={work.id}
              href="/results"
              className="glass-panel p-7 flex flex-col gap-5 border border-slate-200 hover:border-purple-300 transition-all group bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FeatureIcon icon={work.icon} />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                    {work.sector}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug font-heading">
                  {work.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">The problem:</strong> {work.problem}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500 block">How their customers find them now</span>
                <CaseJourney steps={work.journey} compact />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Our services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium leading-relaxed">
            Ads, websites, local search and design, each aimed at getting you more enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, idx) => {
            return (
              <div
                key={idx}
                className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-200 hover:border-purple-400/50 transition-all group bg-white/70"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FeatureIcon icon={item.icon} brands={item.brands} />
                      <div>
                        <span className="text-xs font-mono text-purple-700 font-bold block uppercase tracking-wider">
                          {item.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors font-heading">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item.simpleExplainer}
                  </p>
                </div>

                <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs text-purple-700 font-mono"
                      >
                        {tag} {tIdx < item.tags.length - 1 && '•'}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    aria-label={`Explore ${item.title}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
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

      {/* How we work */}
      <section aria-labelledby="trust-heading" className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            Why Businesses Trust Us
          </span>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            What you get when you work with us.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            These are the terms we work on with every client.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {trustPoints.map((point) => {
            return (
              <div
                key={point.title}
                className="glass-panel p-7 sm:p-8 flex gap-5 border border-purple-200 bg-white/70"
              >
                <FeatureIcon icon={point.icon} brands={point.brands} />
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">{point.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{point.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Areas: internal links to location pages */}
      <section aria-labelledby="areas-heading" className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            Where We Work
          </span>
          <h2 id="areas-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Digital marketing across Kerala and the GCC.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            We know how customers in each market search, scroll and buy, and plan campaigns and websites around that.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="glass-panel p-7 space-y-3 border border-purple-200 hover:border-purple-400/60 transition-all group bg-white/70"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-lg font-bold text-slate-900 font-heading">
                  <MapPin className="w-4 h-4 text-purple-700" />
                  {area.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-purple-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{area.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ: mirrors the FAQPage JSON-LD above */}
      <section aria-labelledby="faq-heading" className="px-6 max-w-[900px] mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            Questions & Answers
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group glass-panel border border-purple-200 bg-white/70 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-base sm:text-lg font-semibold text-slate-900">
                <h3 className="font-heading">{item.q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-purple-700 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 -mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
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
            <span>Free consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto font-heading">
            Ready to get more enquiries?
          </h2>

          <p className="text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed">
            Tell us about your business. We will look at your website, Google profile and ads, and suggest what to do first.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20would%20like%20to%20discuss%20a%20strategy%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>Send Your Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
