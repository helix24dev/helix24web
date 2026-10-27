import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { 
  MapPin, 
  Search, 
  Zap, 
  ArrowRight, 
  Star, 
  Phone,
  Building2,
  Clock,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing Agency in Trivandrum | Helix24',
  description: 'B2B lead generation, Google Ads, SEO and web applications for Technopark companies and businesses across Trivandrum (Thiruvananthapuram).',
  path: '/locations/trivandrum',
});

export default function TrivandrumLocationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://helix24.in/locations/trivandrum#localbusiness',
    name: 'Helix24 Solutions Pvt Ltd — Trivandrum Strategy Desk',
    image: 'https://helix24.in/og-image.png',
    telephone: '+91 9048009044',
    email: 'hello@helix24.in',
    url: 'https://helix24.in/locations/trivandrum',
    taxID: 'AAJCH0136Q',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Technopark & Kazhakoottam Tech Corridor',
      addressLocality: 'Thiruvananthapuram',
      addressRegion: 'Kerala',
      postalCode: '695581',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '8.5241',
      longitude: '76.9366',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:00',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Localized Hero Header */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              TRIVANDRUM DESK // TECHNOPARK &amp; ENTERPRISE HUB
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Digital Marketing &amp; SEO in <span className="gradient-text">Trivandrum</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Fuel your growth in Kerala’s capital. <strong>Helix24 Solutions Pvt Ltd</strong> engineers <strong>B2B lead generation, high-intent Google PPC, technical SEO, and modern Next.js web applications</strong> tailored for IT companies, healthcare institutions, and educational leaders across Kazhakoottam and Technopark.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Book Strategy Call in Trivandrum</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24%2C%20I%20am%20looking%20for%20digital%20marketing%20services%20in%20Trivandrum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Trivandrum Desk (+91 9048009044)</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">5.0</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Google Verified Rating</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">B2B &amp; IT</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Technopark Specialization</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">&lt;1.0s</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Next.js LCP Speed</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-amber-400">95%+</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Data Match Accuracy</span>
            </div>
          </div>
        </div>

        {/* Core Pillars for Trivandrum */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Capital City Focus</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Targeted Marketing for Technology &amp; Enterprise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Technopark IT &amp; SaaS Lead Gen</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                We help software companies and technology service providers in Technopark generate qualified enterprise inquiries across the US, UK, and Middle East using account-based marketing and LinkedIn/Google PPC.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Healthcare &amp; Education SEO</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Trivandrum hosts world-class multi-specialty hospitals and premier educational institutes. We build authoritative organic content and local pack rankings that drive verified patient and student admissions.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Enterprise Web Development</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Replace slow legacy CMS portals with modern, lightning-fast Next.js web applications equipped with sub-second page loads, automated JSON-LD schema, and enterprise-grade security.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Office & Local Service Hours */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="hud-tag">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                OFFICIAL TRIVANDRUM STRATEGY DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Connect Directly with Our Trivandrum Team
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Helix24 Solutions Pvt Ltd provides strategic marketing consultations for businesses in Technopark, Kazhakoottam, Kowdiar, and Vellayambalam.
              </p>
              <div className="space-y-2 text-xs text-purple-300/90 pt-2 font-mono">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-400" /> Technopark &amp; Kazhakoottam Corridor, Thiruvananthapuram, Kerala 695581</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-purple-400" /> Monday – Saturday: 9:30 AM – 7:00 PM IST</div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-purple-400" /> Direct Desk: +91 9048009044</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/50 border border-purple-800/40 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-purple-800/40">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-white font-bold text-sm">Google Verified 5.0 Rating</span>
              </div>
              <p className="text-xs text-purple-200/80 leading-relaxed">
                &ldquo;Helix24 built our Next.js web application and restructured our Google Ads account. Our qualified demo requests from international clients increased by over 60% within 45 days.&rdquo;
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-purple-400 font-mono">
                <span>Verified B2B Client</span>
                <span>Technopark, Trivandrum</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Request Your Trivandrum <span className="gradient-text">Growth Blueprint</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Submit your project details below to receive a customized ad and web proposal from our Trivandrum strategy team within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
