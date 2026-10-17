import Link from 'next/link';
import { Sparkles, MapPin, Mail, Phone, Star, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  const schemaOrgData = {
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '85',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi & Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '682030',
      addressCountry: 'IN',
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
    <footer className="border-t border-purple-900/30 bg-slate-950/90 pt-16 pb-12 text-sm text-purple-200/70 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Col 1 & 2: Corporate Brand & Legal Identifiers */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4 text-purple-300" />
            </div>
            <span>Helix<span className="text-purple-400 font-extrabold">24</span> <span className="text-xs font-mono text-purple-300 font-normal">Solutions Pvt Ltd</span></span>
          </Link>
          <p className="text-xs leading-relaxed text-purple-300/75 max-w-md">
            <strong>Helix 24 Solutions Pvt Ltd</strong> is a registered performance marketing and engineering-grade web development agency in Kerala. We build lightning-fast Next.js web applications and run high-converting Meta Ads & Google PPC campaigns across Kochi, Kozhikode, UAE, and the GCC.
          </p>

          {/* Corporate Badges & Government Registrations */}
          <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/30 text-[11px] font-mono space-y-1.5 text-purple-300/80">
            <div className="flex items-center gap-1.5 text-purple-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Government Registered Corporate Entity</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1 text-[11px]">
              <div><span className="text-purple-400">CIN:</span> U62011KL2026PTC107185</div>
              <div><span className="text-purple-400">PAN:</span> AAJCH0136Q</div>
              <div><span className="text-purple-400">TAN:</span> CHNH05061A</div>
              <div><span className="text-purple-400">State:</span> Kerala (09)</div>
            </div>
          </div>

          {/* Google Business Profile Verified Badge */}
          <div className="pt-1">
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-medium hover:bg-amber-500/20 transition-all"
            >
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span><strong>5.0 Rating</strong> on Google Business Profile</span>
              <ExternalLink className="w-3 h-3 text-amber-400/80" />
            </a>
          </div>
        </div>

        {/* Col 3: Core Agency Solutions */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Core Solutions</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Meta Ads & Instagram Funnels</Link></li>
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Google Ads PPC & Search Ads</Link></li>
            <li><Link href="/web-development" className="hover:text-white transition-colors">Next.js Web Development</Link></li>
            <li><Link href="/ecommerce-development" className="hover:text-white transition-colors">Shopify & WooCommerce Stores</Link></li>
            <li><Link href="/mobile-app-development" className="hover:text-white transition-colors">Mobile App Development</Link></li>
            <li><Link href="/branding-design" className="hover:text-white transition-colors">Brand Identity & UI/UX Design</Link></li>
          </ul>
        </div>

        {/* Col 4: Platform & Intelligence */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Platform & Resources</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/calculator" className="hover:text-white transition-colors font-medium text-purple-300">⚡ Interactive Ad ROI Calculator</Link></li>
            <li><Link href="/results" className="hover:text-white transition-colors">Client Case Studies & Proof</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Marketing & SEO Growth Blog</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Helix 24 Solutions</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Request Strategy Proposal</Link></li>
            <li><a href="https://share.google/bRqB2ePsNrm8f73wR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Google Maps Profile <ExternalLink className="w-2.5 h-2.5" /></a></li>
          </ul>
        </div>

        {/* Col 5: Direct Contact */}
        <div className="space-y-3 text-xs">
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Direct Contact</h4>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-400 shrink-0" />
            <a href="mailto:hello@helix24.com" className="hover:text-white">hello@helix24.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-purple-400 shrink-0" />
            <a href="tel:+919048009044" className="hover:text-white">+91 9048009044</a>
          </div>
          <div className="flex items-start gap-2 pt-1">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">Kochi & Kozhikode, Kerala, India — Serving India, UAE & GCC</span>
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24%20Solutions%2C%20I%20am%20interested%20in%20scaling%20my%20business%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-900/60 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-6 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/50">
        <p>© 2026 HELIX 24 SOLUTIONS PVT LTD (CIN: U62011KL2026PTC107185). ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <a href="https://share.google/bRqB2ePsNrm8f73wR" target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Reviews</a>
        </div>
      </div>
    </footer>
  );
}
