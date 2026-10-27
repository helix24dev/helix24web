import type { Metadata } from 'next';
import { pageMetadata, ORG_ID } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
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

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing & SEO Company in Kerala | Helix24',
  description: 'Google Ads, SEO, local Google Maps ranking and Meta Ads from Helix24, a Kochi-based digital marketing company serving businesses across Kerala and the GCC.',
  path: '/digital-marketing-seo',
});

export default function DigitalMarketingSeoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing & SEO Services',
    serviceType: 'Digital Marketing',
    provider: { '@id': ORG_ID },
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
        name: 'What makes Helix24 Solutions different from other digital marketing agencies in Kochi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most agencies run basic boosted posts without server-side tracking, losing 30% or more of customer event data due to iOS privacy blocks and ad blockers. Helix24 Solutions Pvt Ltd implements First-Party Server-Side Conversions API (CAPI), custom Next.js landing pages with 0.8s load times, and automated WhatsApp CRM routing to ensure maximum lead capture.',
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

      <Breadcrumbs items={[{ name: 'Digital Marketing & SEO', path: '/digital-marketing-seo' }]} />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Telemetry Header & Hero */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              TARGETED SOCIAL ADS &amp; LOCAL GOOGLE RANKING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Digital Marketing &amp; SEO Company in <span className="gradient-text">Kerala</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Stop burning budget on generic agency retainers. <strong>Helix24 Solutions Pvt Ltd</strong> delivers targeted <strong>Instagram, Facebook, and Google Ads</strong> paired with <strong>Local SEO</strong> that bring paying customers directly to your phone and WhatsApp.
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
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Return on Ad Spend</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">-42%</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Lower Cost Per Lead</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">95%+</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Tracking Accuracy</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-amber-400">Top 3</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Google Maps Ranking</span>
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
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Accurate tracking that bypasses ad blockers</li>
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
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Verified inquiry tracking (zero lost leads)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Direct phone call and store visit tracking</li>
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
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Google Business Profile top ranking in your city</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Official Google Maps verification & pin optimization</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated 5-star customer review collection</li>
              </ul>
            </div>

            {/* 4. Social Media Management */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white"><Link href="/social-media-marketing" className="hover:text-purple-200">Social Media Management (SMM)</Link></h3>
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
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                How Helix24 Eliminates 30%+ Ad Tracking Loss
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Standard agency pixels run in the user&apos;s browser, where iOS 14.5+, Safari ITP, and ad blockers discard over a third of your purchase and lead events.
              </p>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Helix24 runs a dedicated First-Party Server-Side CAPI engine. Every page view, lead submission, and purchase event is dispatched directly from our backend to Meta and Google servers with high Event Match Quality (EMQ 9.0+), lowering CPA and enabling the algorithm to find buyers other agencies miss.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-4 text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-purple-800/40">
                <span className="text-purple-200 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Direct Server-to-Server Tracking
                </span>
                <span className="text-emerald-400 text-[11px] font-semibold">100% Signal Accuracy</span>
              </div>
              <div className="space-y-2.5 text-xs text-purple-200/80">
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Accurate Customer Attribution</span>
                    <span>Captures every sale and lead inquiry even when browser cookies or ad blockers are active.</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Enterprise Data Privacy</span>
                    <span>Customer contact information is securely encrypted to meet global privacy standards.</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Lower Customer Acquisition Costs</span>
                    <span>Feeding clean data directly into Meta &amp; Google algorithms reduces wasted ad spend by up to 30%.</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Instant WhatsApp Lead Routing</span>
                    <span>Your sales desk receives immediate WhatsApp alerts the instant a high-intent customer inquires.</span>
                  </div>
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
              Submit your project details below. Helix24 Solutions Pvt Ltd will audit your current funnel and present a customized ad and SEO strategy within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
