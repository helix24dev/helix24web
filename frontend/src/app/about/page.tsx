import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Target, 
  ShieldCheck, 
  MapPin, 
  Star, 
  ArrowRight, 
  Code, 
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Helix 24 Solutions Pvt Ltd — Digital Agency (Kerala & GCC)',
  description: 'Learn about Helix 24 Solutions Pvt Ltd (CIN: U62011KL2026PTC107185). We are a government-registered digital marketing and Next.js web development agency serving Kochi, Kozhikode, and the GCC.',
  keywords: 'Helix 24 Solutions Pvt Ltd, digital marketing agency in kochi, web development company kerala, performance marketing agency calicut, about helix24',
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Helix 24 Solutions Pvt Ltd',
    alternateName: 'Helix24 Solutions',
    url: 'https://helix24.com/about',
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
    description: 'Helix 24 Solutions Pvt Ltd is an officially incorporated corporate entity delivering engineering-grade Next.js web applications, Meta Ads with server-side CAPI tracking, Google Ads PPC, and Local SEO.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi & Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '682030',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Telemetry Hero Header */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              REGISTERED CORPORATE ENTITY // CIN: U62011KL2026PTC107185
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            About <span className="gradient-text">Helix 24 Solutions Pvt Ltd</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            We are an officially incorporated private limited digital agency registered in Kerala, India. We bridge the gap between <strong>high-performance software engineering</strong> and <strong>high-ROAS performance marketing</strong> for ambitious brands across India and the GCC.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-semibold hover:bg-amber-500/20 transition-all"
            >
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span>5.0 Rating on Google Business Profile</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-purple-900/40 hover:opacity-95 transition-all"
            >
              <span>Connect With Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Corporate Legal Identifiers Dossier Card */}
        <section className="glass-panel p-8 sm:p-10 border border-purple-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold block">Official Corporate Identification</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Helix 24 Solutions Private Limited</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MCA & RoC Kerala Registered</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-1">
              <span className="text-purple-400 text-[10px] uppercase tracking-wider">Corporate Identity No (CIN)</span>
              <span className="block text-white font-bold text-sm">U62011KL2026PTC107185</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-1">
              <span className="text-purple-400 text-[10px] uppercase tracking-wider">Income Tax PAN</span>
              <span className="block text-white font-bold text-sm">AAJCH0136Q</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-1">
              <span className="text-purple-400 text-[10px] uppercase tracking-wider">Tax Deduction Account (TAN)</span>
              <span className="block text-white font-bold text-sm">CHNH05061A</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-1">
              <span className="text-purple-400 text-[10px] uppercase tracking-wider">State / Jurisdiction</span>
              <span className="block text-white font-bold text-sm">Kerala, India (09)</span>
            </div>
          </div>

          <p className="text-xs text-purple-200/70 leading-relaxed pt-2">
            Having an incorporated private limited entity guarantees enterprise compliance, GST invoicing, strict intellectual property agreements, and reliable contract delivery for corporate partners in India and overseas.
          </p>
        </section>

        {/* Why Helix24 — The Engineering-Led Agency Difference */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Our Core Thesis</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Why Modern Brands Choose Helix24</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Engineering First</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Most agencies are run by marketers who do not understand software. We write clean TypeScript, optimize database queries, build sub-second Next.js pages, and eliminate technical conversion leaks.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Strict Performance Accountability</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                We do not report on vanity likes or impressions. Every rupee of ad spend is tied directly to qualified leads, ROAS, and closed sales through live first-party telemetry dashboards.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Client Asset Ownership</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                You retain complete, unencumbered ownership of all your ad accounts, Meta Pixels, Google Analytics data, GitHub repositories, and server infrastructure. No agency lock-in.
              </p>
            </div>

          </div>
        </section>

        {/* Geographic Hubs */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Geographic Reach</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Connecting Kerala Innovation With Global Markets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Kochi Hub</span>
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Central operational base serving tech startups, retail groups, and enterprise clients across Kakkanad, Infopark, and Ernakulam.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Kozhikode (Calicut)</span>
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Strategic branch supporting North Kerala D2C brands, healthcare providers, real estate, and retail chains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>UAE & GCC Desk</span>
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Dedicated cross-border growth desk managing performance marketing and e-commerce expansion into Dubai, Abu Dhabi, and Saudi Arabia.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="glass-panel p-8 sm:p-12 text-center space-y-4 border border-purple-500/30">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Partner with <span className="gradient-text">Helix 24 Solutions?</span>
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/70 max-w-xl mx-auto">
            Schedule a 30-minute discovery call with our leadership team to discuss your growth goals, web architecture, and ad budget.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold shadow-xl hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24%20Solutions%2C%20I%20would%20like%20to%20connect%20with%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-all"
            >
              Direct WhatsApp Desk
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
