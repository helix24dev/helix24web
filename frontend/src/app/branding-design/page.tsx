import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Palette, PenTool, CheckCircle2, ArrowRight, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Branding & UI/UX Design Services in Kochi, Kerala | Helix24',
  description: 'Bespoke brand identity design, Figma UI/UX prototyping, vertical Reels motion creatives, and conversion-focused design systems by Helix 24 Solutions Pvt Ltd.',
  keywords: 'branding agency kochi, ui ux design company kerala, logo design agency kerala, figma prototypes kochi, motion graphics agency kerala',
};

export default function BrandingDesignPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Branding & UI/UX Design Services',
    serviceType: 'Design Services',
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Hero */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              VISUAL IDENTITY & CONVERSION UI/UX SYSTEMS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Brand Identity & <span className="gradient-text">UI/UX Design</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Design that doesn&apos;t just look pretty — it commands trust and drives conversions. <strong>Helix 24 Solutions Pvt Ltd</strong> creates distinctive visual brand identities, interactive Figma prototypes, and scroll-stopping motion video ad creatives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Discuss Your Brand Vision</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Logo & Brand Identity Systems</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Memorable logo design, vector marks, custom typography hierarchy, brand guideline books, and packaging graphics that differentiate you from competitors.
            </p>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Vector logo mark & typography system</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Complete brand style guide PDF</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Packaging, stationery & merchandise design</li>
            </ul>
          </div>

          <div className="glass-panel p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Figma UI/UX Wireframing</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Interactive mobile and desktop prototypes that map user journeys, resolve friction points, and ensure developers build pixel-perfect interfaces.
            </p>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> User journey mapping & wireframes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Interactive clickable Figma prototypes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> TailwindCSS design tokens handoff</li>
            </ul>
          </div>

          <div className="glass-panel p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Motion Ad Creatives & Reels</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              High-hook vertical video ad creatives engineered specifically for Meta Reels, TikTok, and YouTube Shorts that stop the scroll and lower ad acquisition costs.
            </p>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 3-second hook ideation & scriptwriting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Dynamic typography & kinetic animations</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Multi-variant creative testing assets</li>
            </ul>
          </div>
        </div>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Elevate Your <span className="gradient-text">Brand Visuals</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Connect with Helix 24 Solutions Pvt Ltd to discuss your brand identity, product UI/UX, or motion ad production.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
