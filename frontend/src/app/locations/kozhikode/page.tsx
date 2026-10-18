import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { 
  MapPin, 
  Target, 
  Search, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Phone,
  Building2,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Calicut | Performance Marketing & SEO Kozhikode — Helix24',
  description: 'Top digital marketing agency in Calicut (Kozhikode). High-ROAS Meta Ads, D2C e-commerce scaling, Google PPC, and sub-second websites for brands across Malabar & the GCC.',
  keywords: 'digital marketing agency in calicut, digital marketing company kozhikode, seo services calicut, performance marketing malabar, meta ads agency kozhikode, shopify development calicut',
  alternates: {
    canonical: 'https://helix24.com/locations/kozhikode',
  },
};

export default function KozhikodeLocationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://helix24.com/locations/kozhikode#localbusiness',
    name: 'Helix24 Solutions Pvt Ltd — Kozhikode Strategy Hub',
    image: 'https://helix24.com/og-image.png',
    telephone: '+91 9048009044',
    email: 'hello@helix24.com',
    url: 'https://helix24.com/locations/kozhikode',
    taxID: 'AAJCH0136Q',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cyberpark & Hilite Business Corridor',
      addressLocality: 'Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '673016',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.2588',
      longitude: '75.7804',
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
              KOZHIKODE (CALICUT) DESK // MALABAR GROWTH HUB
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Performance Marketing Agency in <span className="gradient-text">Calicut, Kerala</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Scale your brand in Kerala’s fastest-growing retail and D2C ecosystem. <strong>Helix24 Solutions Pvt Ltd</strong> delivers <strong>high-ROAS Meta Ads, Google Ads PPC, and sub-second E-commerce websites</strong> engineered specifically for retail, jewelry, textile, and export businesses in Calicut and the GCC.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Book Strategy Call in Calicut</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24%2C%20I%20am%20looking%20for%20digital%20marketing%20services%20in%20Calicut."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Calicut Desk (+91 9048009044)</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">4.2×</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Average D2C ROAS</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">₹40M+</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Ad Spend Engineered</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">0.8s</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Next.js Mobile Load</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-amber-400">GCC-Ready</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Cross-Border Funnels</span>
            </div>
          </div>
        </div>

        {/* Why Calicut Brands Choose Helix24 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Malabar Expertise</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Built for Malabar Retailers &amp; Global Exporters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">D2C E-Commerce &amp; Retail Scaling</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Calicut is the creative heartland of Kerala’s consumer brands. We build high-converting Shopify and custom Next.js storefronts paired with Meta Advantage+ shopping ads that scale fashion, footwear, cosmetics, and organic foods.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">GCC Cross-Border Inquiries</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Connect directly with high-net-worth Malayalis in Dubai, Abu Dhabi, Saudi Arabia, and Qatar. We build geo-fenced ad funnels that generate high-ticket real estate sales, luxury jewelry consultations, and medical tourism appointments.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Calicut City Local SEO</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Dominate Google searches for clinics, restaurants, supermarkets, and specialty services across Mavoor Road, SM Street, Hilite City, and Palayam. We optimize your local presence for maximum footfall and phone calls.
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
                OFFICIAL CALICUT STRATEGY DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Visit Us or Connect Directly in Kozhikode
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Helix24 Solutions Pvt Ltd maintains an active strategic presence serving businesses across Kozhikode, Malappuram, and Wayanad. Meet our performance leads for direct ad strategy reviews.
              </p>
              <div className="space-y-2 text-xs text-purple-300/90 pt-2 font-mono">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-400" /> Cyberpark / Hilite Business Corridor, Kozhikode, Kerala 673016</div>
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
                &ldquo;Helix24 took our apparel brand from zero to over ₹12 Lakhs in monthly online sales in under 90 days. Their tracking precision and video ad hooks are unlike any agency in Calicut.&rdquo;
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-purple-400 font-mono">
                <span>Verified Retail Client</span>
                <span>Kozhikode, Kerala</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Request Your Calicut <span className="gradient-text">Growth Blueprint</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Submit your project details below to receive a customized ad and web proposal from our Kozhikode team within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
