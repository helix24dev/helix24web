import type { Metadata } from 'next';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { 
  MapPin, 
  Target, 
  Search, 
  Zap, 
  ArrowRight, 
  Star, 
  Phone,
  Building2,
  Clock
} from 'lucide-react';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing Agency in Kochi, Ernakulam | Helix24',
  description: 'Meta Ads, Google Ads, local SEO and web development for businesses in Kochi, Kakkanad, Infopark and across Ernakulam, from a Kochi-based team.',
  path: '/locations/kochi',
});

export default function KochiLocationPage() {
  // Service-area page: Helix24's only office is in Kochi (see organizationSchema), so this is a Service, not a LocalBusiness
  const jsonLd = serviceSchema({
    name: 'Digital Marketing Services in Kochi',
    description: 'Meta Ads, Google Ads, local SEO and web development for businesses in Kochi, Kakkanad, Infopark and across Ernakulam.',
    path: '/locations/kochi',
    serviceType: 'Digital Marketing',
    areaServed: ['Kochi', 'Ernakulam', 'Kakkanad'],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ name: 'Digital Marketing in Kochi', path: '/locations/kochi' }]} />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Localized Hero Header */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              SERVING KOCHI · KAKKANAD · INFOPARK
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Digital Marketing &amp; SEO Agency in <span className="gradient-text">Kochi, Kerala</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Scale your business in Kerala’s commercial capital. <strong>Helix24 Solutions Pvt Ltd</strong> pairs high-converting <strong>Meta Ads, Google PPC, and Local Google Map Pack SEO</strong> with sub-second <strong>Next.js websites</strong> for ambitious brands across Kakkanad, Infopark, Edappally, and MG Road.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Book Strategy Call in Kochi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24%2C%20I%20am%20looking%20for%20digital%20marketing%20services%20in%20Kochi."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Us (+91 9048009044)</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">5.0</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Google Verified Rating</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Local Citation Accuracy</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">&lt;1.2s</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Website Page Speed</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-amber-400">36.9×</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Top Campaign ROAS</span>
            </div>
          </div>
        </div>

        {/* Why Kochi Brands Choose Helix24 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Local Advantage</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Engineered for Kochi&apos;s High-Velocity Market</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Kochi Real Estate &amp; B2B Lead Gen</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Kochi has Kerala’s densest concentration of real estate builders, marine exporters, and IT consultancies. We deploy high-converting Meta Lead forms and Google Search campaigns targeting high-intent homebuyers and NRI investors in the UAE.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Google Map 3-Pack Optimization</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Capture clients searching for dental clinics, law firms, IVF centers, and boutique stores across Kakkanad, Ernakulam North, and Fort Kochi. We engineer your Google Business Profile to rank in the coveted top-3 local pack.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Next.js Web Speed vs. Slow WordPress</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Most agencies in Kochi build bloated WordPress sites that load in 6+ seconds on mobile networks. We engineer sub-second Next.js web applications that pass all Core Web Vitals and convert mobile visitors instantly.
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
                OUR HOME BASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Work With Our Kochi Team
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Whether you prefer an in-person discovery session at Infopark Kakkanad or a video strategy call with our media buyers, Helix24 Solutions Pvt Ltd provides direct access to senior performance marketers.
              </p>
              <div className="space-y-2 text-xs text-purple-300/90 pt-2 font-mono">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-400" /> Helix24 Solutions Pvt Ltd, Kochi, Kerala 682030</div>
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
                &ldquo;Helix24 transformed our customer acquisition funnel in Kochi. We saw our cost per qualified lead drop by 42% while our sales desk received verified buyer inquiries via WhatsApp daily.&rdquo;
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-purple-400 font-mono">
                <span>Verified Client Review</span>
                <span>Kochi, Kerala</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Request Your Kochi <span className="gradient-text">Growth Blueprint</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Submit your project details below to receive a customized ad and web proposal from our Kochi team within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
