import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { 
  Target, 
  Share2, 
  Search, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Kochi, Kerala | Meta Ads & SEO Agency | Helix24',
  description: 'Helix 24 Solutions Pvt Ltd is a premier digital marketing company in Kochi, Kerala. High-ROAS Meta Ads (Facebook & Instagram), Server-Side CAPI, Google Ads PPC, and Local SEO for Kerala & GCC.',
  keywords: 'digital marketing company in kerala, digital marketing agency in kochi, best digital marketing company in kerala, meta ads agency kochi, google ads agency kerala, local seo services kochi, performance marketing kerala',
};

export default function DigitalMarketingSeoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing & SEO Services',
    serviceType: 'Digital Marketing',
    provider: {
      '@type': 'Corporation',
      name: 'Helix 24 Solutions Pvt Ltd',
      url: 'https://helix24.com',
      telephone: '+91 9048009044',
      taxID: 'AAJCH0136Q',
      hasMap: 'https://share.google/bRqB2ePsNrm8f73wR',
    },
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Kozhikode' },
      { '@type': 'State', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    description: 'Full-funnel digital marketing, Meta Ads with Server-Side CAPI, Google Ads PPC, and Local SEO designed to maximize ROAS for businesses in Kerala and GCC.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Helix 24 Solutions different from other digital marketing agencies in Kochi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most agencies run basic boosted posts without server-side tracking, losing 30% or more of customer event data due to iOS privacy blocks and ad blockers. Helix 24 Solutions Pvt Ltd implements First-Party Server-Side Conversions API (CAPI), custom Next.js landing pages with 0.8s load times, and automated WhatsApp CRM routing to ensure maximum lead capture.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon can we expect results from Meta Ads and Google Ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meta Ads and Google PPC campaigns generate qualified leads within 24 to 72 hours of campaign launch. Full algorithm calibration and ROAS scaling occurs across the first 14 to 30 days as machine learning models optimize for highest-value converters.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you create the video creatives and ad copies as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We handle end-to-end creative production including viral hook ideation, vertical Reels scripts, professional video editing, graphic carousels, and conversion-focused ad copywriting.',
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

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Telemetry Header & Hero */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              DATA-DRIVEN META ADS & LOCAL SEO ENGINE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Digital Marketing Company in <span className="gradient-text">Kochi, Kerala</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Stop burning budget on generic agency retainers. <strong>Helix 24 Solutions Pvt Ltd</strong> engineers data-backed <strong>Meta Ads (Facebook & Instagram), Google Ads PPC, and Local SEO</strong> backed by first-party server-side tracking and instant WhatsApp CRM pipelines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Get Free Marketing Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/calculator"
              className="px-6 py-3.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Simulate Campaign ROAS</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">36.9×</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Peak Ad ROAS</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">-42%</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Average Cost Per Lead</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">9.4/10</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">CAPI Event Match Quality</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-amber-400">#1 Rank</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Google Local 3-Pack</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Bento Grid */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Our Growth Channels</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Full-Funnel Acquisition Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Meta Ads */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Meta Ads (Facebook & Instagram) & CAPI</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Precision lead generation and dynamic e-commerce sales campaigns. We pair high-hook video ad creatives with first-party Server-Side Conversions API (CAPI) to bypass iOS 14.5+ tracking loss.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Server-side CAPI integration on Node/Next.js</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom vertical Reels video scripts & production</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Direct WhatsApp instant-message lead capture</li>
              </ul>
            </div>

            {/* 2. Google Ads PPC */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Google Ads PPC & Performance Max</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Capture buyers at the moment of highest intent. We build high-converting Search, Shopping, and Performance Max campaigns with granular negative keyword lists and enhanced conversions.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> High-intent keyword bidding & negative lists</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Google Enhanced Conversions with SHA-256 hashing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Offline conversion sync & call attribution tracking</li>
              </ul>
            </div>

            {/* 3. Local SEO & Google Business Profile */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Local SEO & Google Map 3-Pack</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Rank #1 when local customers search in Kochi, Kakkanad, Calicut, or Dubai. We optimize your Google Business Profile (GBP), build high-authority citations, and rank for high-intent queries.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Google Business Profile audit & 3-pack ranking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Local schema markup (LocalBusiness & PostalAddress)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Review generation system & citation consistency</li>
              </ul>
            </div>

            {/* 4. Social Media Management */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Social Media Management (SMM)</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Build authority and organic reach that compounds. We handle complete feed aesthetics, educational carousel design, weekly Reels production, and community engagement.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Monthly content calendar & viral hook scripts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Instagram Reels & TikTok/YouTube Shorts editing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Transparent weekly analytics & follower growth</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Server-Side CAPI Architecture Section */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="hud-tag">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                SERVER-SIDE CONVERSIONS API (CAPI)
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                How Helix24 Eliminates 30%+ Ad Tracking Loss
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Standard agency pixels run in the user&apos;s browser, where iOS 14.5+, Safari ITP, and ad blockers discard over a third of your purchase and lead events.
              </p>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Helix24 runs a dedicated First-Party Server-Side CAPI engine. Every page view, lead submission, and purchase event is dispatched directly from our backend to Meta and Google servers with high Event Match Quality (EMQ 9.0+), lowering CPA and enabling the algorithm to find buyers other agencies miss.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/50 border border-purple-800/40 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-purple-800/40">
                <span className="text-purple-300 font-bold">{'// CAPI DISPATCH PIPELINE'}</span>
                <span className="text-emerald-400 text-[11px]">ACTIVE • EMQ 9.4/10</span>
              </div>
              <div className="space-y-2 text-[11px] text-purple-200/70">
                <div className="p-2.5 rounded bg-purple-900/30 border border-purple-700/30">
                  <span className="text-purple-400 font-semibold">[1] Event Trigger:</span> User completes form / checkout
                </div>
                <div className="p-2.5 rounded bg-purple-900/30 border border-purple-700/30">
                  <span className="text-purple-400 font-semibold">[2] Hash & Secure:</span> SHA-256 phone, email & IP hashing
                </div>
                <div className="p-2.5 rounded bg-purple-900/30 border border-purple-700/30">
                  <span className="text-emerald-400 font-semibold">[3] Server Dispatch:</span> Direct REST API call to Meta Graph & Google Ads
                </div>
                <div className="p-2.5 rounded bg-purple-900/30 border border-purple-700/30">
                  <span className="text-amber-400 font-semibold">[4] CRM Automated Routing:</span> Instant WhatsApp notification to sales desk
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Digital Marketing & SEO FAQs</h2>
          </div>

          <div className="space-y-4">
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>What makes Server-Side CAPI tracking essential in 2026?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                Without server-side tracking, Safari, iOS privacy settings, and ad blockers block 30% to 45% of browser pixel events. CAPI sends data directly from your server to Meta, restoring full attribution, improving ad delivery, and reducing wasted ad spend.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>How do you handle client reporting and performance reviews?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                We provide 24/7 access to live Looker Studio dashboards tracking cost per lead, ROAS, click-through rates, and conversion volume. You also receive weekly strategy reviews with your dedicated campaign lead.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>Can Helix24 run campaigns targeting both Kerala and the GCC?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                Yes. Many of our clients are headquartered in Kerala (Kochi, Calicut) with extensive operations in Dubai, Abu Dhabi, Sharjah, and Saudi Arabia. We run geo-segmented campaigns tailored to both NRI diaspora and local GCC markets.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Get Your Free <span className="gradient-text">Marketing Blueprint</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Submit your project details below. Helix 24 Solutions Pvt Ltd will audit your current funnel and present a customized ad and SEO strategy within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
