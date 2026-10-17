import Link from 'next/link';
import AdSpendCalculator from '@/components/AdSpendCalculator';
import LeadForm from '@/components/LeadForm';
import ProofMetricsStrip from '@/components/ProofMetricsStrip';
import KeralaToGCCStory from '@/components/KeralaToGCCStory';
import CaseStudyMatrix from '@/components/CaseStudyMatrix';
import { 
  Target, 
  Search, 
  Code, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Bot, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Helix 24 Solutions Pvt Ltd',
    alternateName: 'Helix24 Solutions',
    url: 'https://helix24.com',
    logo: 'https://helix24.com/assets/logo.png',
    telephone: '+91 9048009044',
    email: 'hello@helix24.com',
    taxID: 'AAJCH0136Q',
    vatID: 'CHNH05061A',
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'CIN',
        value: 'U62011KL2026PTC107185',
      },
      {
        '@type': 'PropertyValue',
        name: 'PAN',
        value: 'AAJCH0136Q',
      },
      {
        '@type': 'PropertyValue',
        name: 'TAN',
        value: 'CHNH05061A',
      },
    ],
    hasMap: 'https://share.google/bRqB2ePsNrm8f73wR',
    description: 'Helix 24 Solutions Pvt Ltd is a performance marketing, Meta Ads, Google Ads PPC, Local SEO, and Next.js web development agency serving Kerala (Kochi & Kozhikode), UAE, and GCC.',
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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose Helix 24 Solutions Pvt Ltd over other agencies in Kerala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Helix 24 Solutions Pvt Ltd is an officially incorporated private limited company (CIN: U62011KL2026PTC107185) combining engineering-grade Next.js web development with high-ROAS Meta Ads and Google Ads. Unlike traditional marketing agencies that rely on slow WordPress templates, we engineer custom software with 0.8s load times and server-side Meta CAPI tracking to eliminate conversion loss.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which regions does Helix24 serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are headquartered in Kerala with client operations across Kochi (Infopark / Kakkanad), Kozhikode (Calicut), Trivandrum, and international clients across Dubai, Abu Dhabi, UAE, and the GCC.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Helix24 achieve high ROAS for Meta & Google Ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We utilize Server-Side Conversions API (CAPI) to bypass iOS privacy blocks, high-converting vertical video creatives, dedicated landing pages built in Next.js, and automated WhatsApp CRM nurturing for instant lead response.',
        },
      },
      {
        '@type': 'Question',
        name: 'What web development technologies do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in Next.js 14/15, React 19, TypeScript, NestJS, TailwindCSS, Shopify Plus, and Headless E-commerce, guaranteeing 95+ Lighthouse scores and Core Web Vitals compliance.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section with Live Telemetry HUD */}
      <section className="relative px-6 pt-8 pb-16 max-w-[1280px] mx-auto overflow-hidden">
        
        {/* Telemetry Corner Accents */}
        <div className="hidden lg:flex items-center justify-between text-xs font-mono text-purple-400/60 pb-6 border-b border-purple-900/20">
          <div className="flex items-center gap-3">
            <span className="text-purple-300 font-semibold">{'// H-024.2026 / KOCHI IST'}</span>
            <span>•</span>
            <span className="text-purple-400">CIN: U62011KL2026PTC107185</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              SYSTEM STATUS: OPERATIONAL
            </span>
            <span>•</span>
            <span className="text-purple-400">KOCHI · KOZHIKODE · DUBAI</span>
          </div>
        </div>

        <div className="text-center space-y-6 max-w-4xl mx-auto pt-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Helix 24 Solutions Pvt Ltd — Growth & Web Engineering</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            We build websites that rank.{' '}
            <span className="gradient-text">And ads that convert.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            One engineering partner for full-funnel digital growth. We build ultra-fast <strong>Next.js web applications</strong> and execute high-converting <strong>Meta Ads, Google Ads PPC & Local SEO</strong> for ambitious brands across Kerala (Kochi & Kozhikode), UAE, and the GCC.
          </p>

          {/* Featured Case Metric Pill */}
          <div className="pt-2">
            <Link
              href="/results"
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-950/50 hover:bg-purple-900/40 text-xs text-purple-200 backdrop-blur-md transition-all shadow-lg"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-purple-400 font-semibold">Featured Result</span>
              <span className="h-3 w-px bg-purple-500/30"></span>
              <span className="font-semibold text-white">₹4.75 Cr Revenue · 36.9× Peak ROAS</span>
              <span className="text-purple-300 hidden sm:inline">· Kerala Retail & D2C</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
            </Link>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-2xl shadow-purple-900/50 hover:opacity-95 transition-all flex items-center gap-2 group"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#calculator"
              className="px-8 py-4 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-200 font-semibold text-sm hover:text-white hover:border-purple-300 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Try ROI Calculator</span>
            </Link>
          </div>

          {/* Verified Google Business Profile Rating Badge */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-purple-300/80">
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-200 transition-all"
            >
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="font-semibold text-white">5.0 Star Rating</span>
              <span className="text-amber-200/80">on Google Business Profile</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
            <span className="hidden sm:inline text-purple-500">•</span>
            <span className="font-mono text-purple-300 text-[11px]">CIN: U62011KL2026PTC107185</span>
          </div>

        </div>
      </section>

      {/* Proof Metric Counter Strip */}
      <ProofMetricsStrip />

      {/* Infinite Double Marquee Ribbons */}
      <section aria-label="Capabilities ticker" className="relative py-4 overflow-hidden border-y border-purple-900/30 bg-purple-950/30">
        
        {/* Ribbon 1: Core Capabilities */}
        <div className="overflow-hidden py-2 bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-purple-900/80">
          <div className="animate-marquee gap-8 items-center text-xs sm:text-sm font-mono uppercase tracking-widest text-purple-100 font-semibold">
            <span className="flex items-center gap-8 whitespace-nowrap">META ADS & SERVER-SIDE CAPI <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">NEXT.JS 14/15 WEB APPS <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">GOOGLE ADS PPC & LOCAL SEO <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">SHOPIFY PLUS & HEADLESS COMMERCE <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">AI CRM & WHATSAPP AUTOMATION <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">BRANDING & MOTION CREATIVES <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">META ADS & SERVER-SIDE CAPI <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">NEXT.JS 14/15 WEB APPS <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">GOOGLE ADS PPC & LOCAL SEO <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">SHOPIFY PLUS & HEADLESS COMMERCE <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">AI CRM & WHATSAPP AUTOMATION <span className="text-purple-400">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">BRANDING & MOTION CREATIVES <span className="text-purple-400">/</span></span>
          </div>
        </div>

        {/* Ribbon 2: Hard Metrics & Locations */}
        <div className="overflow-hidden py-2 bg-slate-950/80">
          <div className="animate-marquee-reverse gap-8 items-center text-xs sm:text-sm font-mono uppercase tracking-widest text-purple-300 font-medium">
            <span className="flex items-center gap-8 whitespace-nowrap text-amber-300 font-semibold">PERFECT 5.0 ON GOOGLE <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">₹9CR+ CLIENT REVENUE DELIVERED <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap text-emerald-400 font-semibold">36.9× PEAK ROAS <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">100/100 LIGHTHOUSE SCORE <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">0.8S AVERAGE LOAD TIME <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">KOCHI · KOZHIKODE · DUBAI · GCC <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap text-amber-300 font-semibold">PERFECT 5.0 ON GOOGLE <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">₹9CR+ CLIENT REVENUE DELIVERED <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap text-emerald-400 font-semibold">36.9× PEAK ROAS <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">100/100 LIGHTHOUSE SCORE <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">0.8S AVERAGE LOAD TIME <span className="text-purple-700">/</span></span>
            <span className="flex items-center gap-8 whitespace-nowrap">KOCHI · KOZHIKODE · DUBAI · GCC <span className="text-purple-700">/</span></span>
          </div>
        </div>

      </section>

      {/* Bento Grid - 6 Core Agency Pillars */}
      <section className="px-6 py-20 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            Full-Stack Growth Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Engineered for Leads, Speed & <span className="gradient-text">Revenue</span>
          </h2>
          <p className="text-sm text-purple-200/70 max-w-2xl mx-auto">
            We reject slow website builders and disjointed marketing. Every touchpoint is unified into one revenue engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Meta Ads & WhatsApp Funnels */}
          <div className="glass-panel p-8 space-y-4 hover:border-purple-400/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Meta Ads & WhatsApp Funnels</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Precision Facebook & Instagram campaigns paired with server-side CAPI tracking, high-converting Reels video creatives, and direct WhatsApp CRM lead pipelines.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Server-side CAPI bypasses iOS privacy blocks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-hook Reels & carousel video production</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated 1-click WhatsApp lead routing</li>
            </ul>
            <div className="pt-2">
              <Link href="/digital-marketing-seo" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white group-hover:translate-x-1 transition-all">
                <span>Explore Meta Ads Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 2. Next.js Web & Software Development */}
          <div className="glass-panel p-8 space-y-4 hover:border-purple-400/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Next.js Web & Software Dev</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Lightning-fast custom web applications built on React 19, Next.js 14/15, and NestJS. Engineered for 0.8s load times, 100/100 Lighthouse scores, and organic Google visibility.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100/100 Core Web Vitals compliance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> TypeScript & NestJS enterprise backends</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Built-in JSON-LD SEO schema architecture</li>
            </ul>
            <div className="pt-2">
              <Link href="/web-development" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white group-hover:translate-x-1 transition-all">
                <span>Explore Web Development</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. Google Ads PPC & Local SEO */}
          <div className="glass-panel p-8 space-y-4 hover:border-purple-400/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Google Ads PPC & Local SEO</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Capture high-intent buyers searching right now. High-converting Google Search & Performance Max ads paired with Google Map 3-Pack rankings in Kochi, Calicut & GCC.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-intent keyword bidding & negative lists</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Google Business Profile local 3-pack dominance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Offline conversion tracking & call attribution</li>
            </ul>
            <div className="pt-2">
              <Link href="/digital-marketing-seo" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white group-hover:translate-x-1 transition-all">
                <span>Explore Google PPC & SEO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4. Shopify & Headless E-Commerce */}
          <div className="glass-panel p-8 space-y-4 hover:border-purple-400/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Shopify & Headless E-Commerce</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                High-converting D2C digital storefronts engineered for fast checkout, seamless Razorpay, Stripe, and COD gateways, and automated cart abandonment recovery.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom Shopify Liquid & Headless Next.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> GCC payment integration (Tabby & Tamara)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated WhatsApp order confirmation</li>
            </ul>
            <div className="pt-2">
              <Link href="/ecommerce-development" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white group-hover:translate-x-1 transition-all">
                <span>Explore E-Commerce Dev</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 5. AI Automation & WhatsApp CRM */}
          <div className="glass-panel p-8 space-y-4 hover:border-purple-400/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">AI Automation & WhatsApp CRM</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Never lose a qualified lead to slow response times. We build automated WhatsApp bots, n8n workflow integrations, and GoHighLevel lead nurturing sequences.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Instant sub-minute lead response on WhatsApp</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> n8n & Make webhook automated routing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> GoHighLevel snapshot deployment</li>
            </ul>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white group-hover:translate-x-1 transition-all">
                <span>Deploy AI Automations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 6. Branding & Motion UI/UX */}
          <div className="glass-panel p-8 space-y-4 hover:border-purple-400/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Branding & Motion UI/UX</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Stop looking generic. We create bespoke visual identities, high-converting social media creatives, Figma design systems, and video ads that stop the scroll.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Bespoke brand identity & typography systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-converting Figma UX/UI prototypes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Motion graphics & vertical Reels advertising</li>
            </ul>
            <div className="pt-2">
              <Link href="/branding-design" className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white group-hover:translate-x-1 transition-all">
                <span>Explore Creative Design</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* The Kerala To GCC Story Section */}
      <KeralaToGCCStory />

      {/* Case Studies Matrix (Filterable by Industry & Region) */}
      <section className="px-6 py-20 border-t border-purple-900/20 bg-purple-950/20">
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Proof, Not Promises // Industry & Region Breakdown
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Results That Speak in <span className="gradient-text">Revenue</span>
              </h2>
            </div>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
            >
              <span>Explore In-Depth Case Dossiers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CaseStudyMatrix />

        </div>
      </section>

      {/* 4-Step Agency Framework (How Helix24 Scales Brands) */}
      <section className="px-6 py-20 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            The Helix24 Growth Protocol
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            How We Engineer Your <span className="gradient-text">Unfair Advantage</span>
          </h2>
          <p className="text-sm text-purple-200/70 max-w-2xl mx-auto">
            A battle-tested 4-step framework designed to eliminate wasted ad spend, accelerate load times, and maximize pipeline revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 space-y-3 relative">
            <div className="font-mono text-3xl font-extrabold text-purple-400/40">01</div>
            <h4 className="text-lg font-bold text-white">Full-Funnel Audit</h4>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              We audit your website speed, CAPI tracking setup, keyword positioning, and current ad accounts to pinpoint revenue leaks.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-3 relative">
            <div className="font-mono text-3xl font-extrabold text-purple-400/40">02</div>
            <h4 className="text-lg font-bold text-white">Asset Engineering</h4>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              We build lightning-fast Next.js landing pages, script high-converting Reels video creatives, and write ad copy that hooks.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-3 relative">
            <div className="font-mono text-3xl font-extrabold text-purple-400/40">03</div>
            <h4 className="text-lg font-bold text-white">Launch & CAPI Pipeline</h4>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              We configure Server-Side Conversions API, Meta CAPI, Google Enhanced Conversions, and instant WhatsApp CRM automation.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-3 relative">
            <div className="font-mono text-3xl font-extrabold text-purple-400/40">04</div>
            <h4 className="text-lg font-bold text-white">Scale & Compound</h4>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              We scale winning ad sets horizontally, refresh creative fatigue before it starts, and build long-term organic SEO equity.
            </p>
          </div>

        </div>
      </section>

      {/* Interactive Ad Spend & ROI Calculator Section */}
      <section id="calculator" className="px-6 py-20 border-t border-purple-900/20 bg-purple-950/20">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Interactive Forecasting Engine
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Calculate Your Expected <span className="gradient-text">Revenue & ROAS</span>
            </h2>
            <p className="text-sm text-purple-200/70">
              Input your monthly ad budget and industry metrics below to simulate potential leads, sales, and return on ad spend (ROAS).
            </p>
          </div>

          <AdSpendCalculator />
        </div>
      </section>

      {/* Verified Google Reviews & Social Proof Section */}
      <section className="px-6 py-20 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Verified Google Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Trusted by Ambitious Brands Across <span className="gradient-text">Kerala & GCC</span>
          </h2>
          <div className="pt-2">
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white"
            >
              <span>Read All Verified Reviews on Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-panel p-6 space-y-4">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed italic">
              &quot;Helix 24 Solutions completely transformed our digital pipeline. Our cost per lead dropped by 42% on Meta Ads within the first 60 days, and the Next.js landing page loads almost instantly. Truly an engineering-first marketing team.&quot;
            </p>
            <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-white block">Dr. Anand Menon</span>
                <span className="text-[11px] text-purple-300/70">Healthcare Group, Kochi</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">Verified Client</span>
            </div>
          </div>

          <div className="glass-panel p-6 space-y-4">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed italic">
              &quot;We expanded our D2C brand from Calicut into the UAE market with Helix24. Their WhatsApp checkout integration and localized Instagram ad targeting generated over 30× ROAS during our festive campaign.&quot;
            </p>
            <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-white block">Fasila Rahiman</span>
                <span className="text-[11px] text-purple-300/70">D2C Fashion & Lifestyle, Calicut</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">Verified Client</span>
            </div>
          </div>

          <div className="glass-panel p-6 space-y-4">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed italic">
              &quot;The transparency and technical depth of Helix 24 Solutions Pvt Ltd sets them miles apart from regular agencies. Having their registered corporate credentials and clear KPI reporting gives our board complete peace of mind.&quot;
            </p>
            <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-white block">Suresh Varma</span>
                <span className="text-[11px] text-purple-300/70">Real Estate & Hospitality, Dubai</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">Verified Client</span>
            </div>
          </div>

        </div>
      </section>

      {/* SEO FAQ Section (Google Schema Compliant) */}
      <section className="px-6 py-20 border-t border-purple-900/20 bg-purple-950/20">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Everything You Need to Know About <span className="gradient-text">Partnering with Helix24</span>
            </h2>
          </div>

          <div className="space-y-4">
            
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>Why choose Helix 24 Solutions Pvt Ltd over traditional digital agencies in Kerala?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed pt-2">
                Helix 24 Solutions Pvt Ltd (CIN: U62011KL2026PTC107185) combines engineering-grade Next.js software development with high-ROAS performance marketing. Most agencies build slow WordPress templates that lose 50% of ad traffic before the page loads. We engineer custom web applications with sub-second load times and Server-Side CAPI tracking so every rupee of ad spend is accounted for.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>What is the minimum ad budget needed to work with Helix24?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed pt-2">
                We work with businesses investing anywhere from ₹30,000/month for localized campaigns up to ₹10,00,000+/month for aggressive D2C and real estate scaling across India and the GCC. Our contracts are performance-oriented with weekly KPI reviews.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>How quickly can you launch a new Next.js website or Meta Ads campaign?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed pt-2">
                Meta Ads and Google Ads campaigns can be audited, structured, and launched within 5–7 business days (including video ad creative production). High-performance custom Next.js websites typically launch within 2–4 weeks with 100% Core Web Vitals compliance.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>Can Helix24 help us rank #1 on Google Local 3-Pack in Kochi and Calicut?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed pt-2">
                Yes. Our Local SEO framework includes deep Google Business Profile optimization, local citation building across Kerala directories, geotargeted schema markup, and authentic review acquisition systems to capture the top 3 spots in Google Maps.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final Lead Capture Section */}
      <section className="px-6 py-20 max-w-[1280px] mx-auto">
        <div className="glass-panel p-8 sm:p-12 border border-purple-500/40 relative overflow-hidden">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-700/40 text-purple-300 font-mono text-xs uppercase tracking-wider">
              <span>Ready to Scale?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Let&apos;s Build Your <span className="gradient-text">Growth Engine</span>
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              Submit your project details below or chat with our strategy desk on WhatsApp. We provide a customized digital marketing blueprint and technical proposal within 24 hours.
            </p>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}
