import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import HelixLogo from '@/components/HelixLogo';

export default function Footer() {
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Helix24 Solutions Pvt Ltd',
    alternateName: 'Helix24 Solutions',
    url: 'https://helix24.in',
    logo: 'https://helix24.in/assets/logo.png',
    telephone: '+91 9048009044',
    email: 'hello@helix24.in',
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
      {
        '@type': 'PropertyValue',
        name: 'RoC',
        value: 'RoC Kerala',
      },
    ],
    hasMap: 'https://share.google/bRqB2ePsNrm8f73wR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      postalCode: '682030',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Kozhikode' },
      { '@type': 'City', name: 'Trivandrum' },
      { '@type': 'State', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
    ],
  };

  return (
    <footer className="border-t border-purple-900/30 bg-[#070310] pt-20 pb-12 text-sm text-[#A39BB5] relative z-10">
      {/* Crawler-Accessible Structured Entity Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />

      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 sm:gap-16">
        
        {/* Col 1 & 2: Corporate Brand & Hub Presence */}
        <div className="md:col-span-2 space-y-5">
          <Link href="/" className="inline-block group">
            <HelixLogo size="md" />
          </Link>
          <p className="text-xs leading-relaxed text-[#A39BB5] max-w-sm">
            Performance marketing agency and web engineering partner delivering high-converting Meta Ads, Google Ads PPC, Local SEO, and Next.js applications across Kerala and the GCC.
          </p>

          <div className="text-xs text-purple-300/80 space-y-1 pt-1 font-mono">
            <span className="block text-zinc-400 font-sans text-[11px] uppercase tracking-wider font-semibold">Strategic Hubs:</span>
            <span>Kochi • Kozhikode • Trivandrum • GCC Desk</span>
          </div>

          <div className="pt-2">
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-purple-200 hover:text-white transition-colors"
            >
              <span>5.0 Rating on Google Business Profile</span>
              <ExternalLink className="w-3 h-3 text-purple-400" />
            </a>
          </div>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Services</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Performance Marketing</Link></li>
            <li><Link href="/web-development" className="hover:text-white transition-colors">Web &amp; App Development</Link></li>
            <li><Link href="/ecommerce-development" className="hover:text-white transition-colors">E-Commerce Stores</Link></li>
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Local SEO &amp; Maps 3-Pack</Link></li>
            <li><Link href="/branding-design" className="hover:text-white transition-colors">Brand Identity &amp; UI/UX</Link></li>
          </ul>
        </div>

        {/* Col 4: Platform & Playbooks */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Resources</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/results" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/calculator" className="hover:text-white transition-colors">ROI Calculator</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Strategy Playbooks</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Hub</Link></li>
          </ul>
        </div>

        {/* Col 5: Hubs & Direct Contact */}
        <div className="space-y-3 text-xs">
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Direct Contact</h4>
          <p className="text-[#A39BB5] leading-relaxed text-xs">
            Operating from Kochi, Kozhikode, and Trivandrum to Dubai &amp; GCC.
          </p>
          <div className="pt-2 space-y-1.5">
            <div><a href="tel:+919048009044" className="hover:text-white text-purple-200">+91 9048009044</a></div>
            <div><a href="mailto:hello@helix24.in" className="hover:text-white text-purple-200">hello@helix24.in</a></div>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-16 pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© 2026 HELIX24 SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-zinc-300">Privacy Policy</Link>
          <Link href="/about" className="hover:text-zinc-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
