import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Gauge, 
  Server, 
  ChevronDown,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Development Company in Kochi, Kerala | Next.js & Custom Software | Helix24',
  description: 'Helix24 Solutions Pvt Ltd is a premier web development company in Kochi, Kerala. We build custom Next.js web applications, enterprise portals, and high-performance websites with 100/100 Lighthouse scores for India and GCC.',
  keywords: 'web development company in kochi, web development agency in kerala, best website development company in kerala, custom software development kochi, next.js developers kerala, react agency kochi, core web vitals optimization',
};

export default function WebDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Web & Next.js Software Development Services',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Corporation',
      name: 'Helix24 Solutions Pvt Ltd',
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
    description: 'High-speed Next.js web application development, custom software engineering, and technical SEO architecture engineered for Core Web Vitals and conversion.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose Next.js custom development over WordPress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js delivers sub-second page loads (under 0.8 seconds), zero bloated plugins, bank-grade security, and perfect 100/100 Google Lighthouse scores. Traditional WordPress sites suffer from plugin vulnerabilities, slow mobile speeds, and high drop-off rates on paid traffic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to develop a custom website with Helix24?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A high-converting business website or landing page stack typically takes 2–3 weeks. More complex custom web applications, SaaS dashboards, and portal integrations take 4–8 weeks with milestone demos.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide maintenance and ongoing technical support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Helix24 Solutions Pvt Ltd provides SLA-backed monthly maintenance contracts covering server monitoring, Core Web Vitals checks, database backups, security patches, and on-demand feature development.',
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
              FAST, MODERN WEBSITES &amp; CUSTOM SOFTWARE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Web Development Company in <span className="gradient-text">Kochi, Kerala</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Say goodbye to slow, bloated templates. <strong>Helix24 Solutions Pvt Ltd</strong> builds custom websites and web applications with <strong>under 1-second load times</strong>, 100/100 Google speed scores, and built-in SEO that turns visitors into paying customers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Get Web Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>5.0 Rating on Google</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">&lt;0.8s</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Page Load Time</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">100/100</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Lighthouse Score</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Mobile &amp; SEO Ready</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">99.9%</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Core Architectural Pillars Bento Grid */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Specialized Engineering Services</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Full-Stack Capabilities Built for Scale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Custom Web Applications</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Bespoke web applications designed around your exact workflows. Client portals, custom internal tools, booking systems, and workflow engines that eliminate software bottlenecks.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Full-stack Next.js & NestJS architecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Real-time PostgreSQL database sync</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Role-based access control (RBAC)</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Core Web Vitals & Speed Tuning</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Google prioritizes fast websites. We optimize First Contentful Paint (FCP), Cumulative Layout Shift (CLS), and Largest Contentful Paint (LCP) for maximum organic rank and lower ad CPCs.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> WebP/AVIF next-gen image compression</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Edge-cached static and server rendering</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Zero render-blocking JavaScript</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">API & Microservices Integration</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Connect your website directly to your business tools. We build secure REST and GraphQL API integrations connecting ERPs, payment gateways, WhatsApp APIs, and CRMs.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> WhatsApp Cloud API automation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Razorpay, Cashfree & Stripe checkout</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Zoho, Salesforce & HighLevel sync</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="glass-panel p-10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Modern Engineering Stack</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Tech Behind Lightning-Fast Web Platforms</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
              <span className="block font-bold text-white text-sm">Next.js 14/15</span>
              <span className="text-[10px] text-purple-300/70 font-mono">App Router</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
              <span className="block font-bold text-white text-sm">React 19</span>
              <span className="text-[10px] text-purple-300/70 font-mono">UI Architecture</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
              <span className="block font-bold text-white text-sm">TypeScript</span>
              <span className="text-[10px] text-purple-300/70 font-mono">Type Safety</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
              <span className="block font-bold text-white text-sm">NestJS / Node</span>
              <span className="text-[10px] text-purple-300/70 font-mono">Backend Microservices</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
              <span className="block font-bold text-white text-sm">PostgreSQL</span>
              <span className="text-[10px] text-purple-300/70 font-mono">Relational Data</span>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/30">
              <span className="block font-bold text-white text-sm">TailwindCSS</span>
              <span className="text-[10px] text-purple-300/70 font-mono">Utility Styling</span>
            </div>
          </div>
        </section>

        {/* Comparison Table: Helix24 Next.js vs. Traditional WordPress */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Architectural Comparison</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Modern Brands Move Away From WordPress</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-purple-900/30 rounded-xl overflow-hidden glass-panel">
              <thead className="bg-purple-950/80 text-purple-200 border-b border-purple-900/40">
                <tr>
                  <th className="p-4 font-bold">Feature / Performance Metric</th>
                  <th className="p-4 font-bold text-purple-400">Helix24 Solutions (Next.js)</th>
                  <th className="p-4 font-bold text-slate-400">Standard WordPress Agency</th>
                  <th className="p-4 font-bold text-slate-400">Wix / Squarespace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900/20 text-purple-200/80">
                <tr>
                  <td className="p-4 font-semibold text-white">Page Load Speed</td>
                  <td className="p-4 text-emerald-400 font-bold">&lt;0.8s (Sub-second)</td>
                  <td className="p-4">3.2s – 6.5s (Plugin Bloat)</td>
                  <td className="p-4">3.8s – 5.0s</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Google Lighthouse Score</td>
                  <td className="p-4 text-emerald-400 font-bold">95–100 / 100 Guaranteed</td>
                  <td className="p-4">40–65 / 100 typical</td>
                  <td className="p-4">50–70 / 100</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Security &amp; Vulnerability</td>
                  <td className="p-4 text-emerald-400 font-bold">Hacker-Proof (Zero Vulnerable WordPress Plugins)</td>
                  <td className="p-4 text-rose-400">High Risk (Constant plugin hacks)</td>
                  <td className="p-4">Platform controlled</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Custom Business Logic &amp; Tools</td>
                  <td className="p-4 text-emerald-400 font-bold">Connects Easily to WhatsApp, CRM &amp; Billing</td>
                  <td className="p-4">Restricted by PHP plugins</td>
                  <td className="p-4">Severely restricted</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Direct Ad &amp; Conversion Tracking</td>
                  <td className="p-4 text-emerald-400 font-bold">Built-in Server Tracking (Bypasses Ad Blockers)</td>
                  <td className="p-4">Requires 3rd party plugins</td>
                  <td className="p-4">Basic pixel only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Development Process Timeline */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Our Engineering Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">From Blueprint to 100/100 Lighthouse Launch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-panel p-6 space-y-3">
              <span className="font-mono text-2xl font-bold text-purple-400">01</span>
              <h3 className="text-base font-bold text-white">Architecture & Wireframing</h3>
              <p className="text-xs text-purple-200/70">
                User journey mapping, technical database schema, and conversion-optimized Figma UI prototypes.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-3">
              <span className="font-mono text-2xl font-bold text-purple-400">02</span>
              <h3 className="text-base font-bold text-white">Clean TypeScript Build</h3>
              <p className="text-xs text-purple-200/70">
                Next.js 14 App Router, responsive Tailwind styling, component isolation, and NestJS API integrations.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-3">
              <span className="font-mono text-2xl font-bold text-purple-400">03</span>
              <h3 className="text-base font-bold text-white">Core Web Vitals Audit</h3>
              <p className="text-xs text-purple-200/70">
                Rigorous testing on mobile 4G networks, cross-browser audits, schema validation, and security testing.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-3">
              <span className="font-mono text-2xl font-bold text-purple-400">04</span>
              <h3 className="text-base font-bold text-white">Deploy & Maintain</h3>
              <p className="text-xs text-purple-200/70">
                Global edge CDN deployment with Vercel/AWS, 24/7 uptime monitoring, and ongoing feature updates.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Questions & Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Web Development FAQs</h2>
          </div>

          <div className="space-y-4">
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>Why should I choose Next.js over traditional WordPress?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                Next.js delivers sub-second page loads (under 0.8s), zero security risks from unmaintained plugins, and perfect 100/100 Google Lighthouse scores. This directly lowers your Meta ad cost-per-click and dramatically boosts conversion rates.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>Do you build e-commerce solutions as well?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                Yes. We build both custom Shopify Liquid storefronts and Headless Next.js Commerce platforms with Razorpay, Cashfree, Stripe, and GCC BNPL gateways (Tabby & Tamara).
              </p>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>Are your web development services available outside Kerala?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                Yes. Helix24 Solutions Pvt Ltd regularly delivers custom web platforms for clients across Bangalore, Mumbai, Dubai, Abu Dhabi, Saudi Arabia, and the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Upgrade Your <span className="gradient-text">Web Architecture?</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Get in touch with Helix24 Solutions Pvt Ltd. We will provide a free speed audit of your existing website and a detailed project roadmap within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
