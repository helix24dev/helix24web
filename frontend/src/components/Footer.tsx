import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import HelixLogo from '@/components/HelixLogo';
import { organizationSchema } from '@/lib/seo';

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-[#070310] pt-20 pb-28 text-sm text-[#A39BB5] relative z-10">
      {/* Crawler-Accessible Structured Entity Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 sm:gap-16">
        
        {/* Col 1 & 2: Brand & service areas */}
        <div className="md:col-span-2 space-y-5">
          <Link href="/" className="inline-block group">
            <HelixLogo size="md" />
          </Link>
          <p className="text-xs leading-relaxed text-[#A39BB5] max-w-sm">
            Digital marketing and web development company in Kochi, Kerala. Social media marketing, Google Ads, SEO, websites and apps for businesses across Kerala and the GCC.
          </p>

          <div className="text-xs text-purple-300/80 space-y-1 pt-1 font-mono">
            <span className="block text-zinc-400 font-sans text-[11px] uppercase tracking-wider font-semibold">Serving:</span>
            <span>Kochi • Kozhikode • Trivandrum • UAE &amp; GCC</span>
          </div>

          <div className="pt-2">
            <a
              href="https://share.google/9wuyhr3TC4Utsw4V1"
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
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Digital Marketing &amp; SEO</Link></li>
            <li><Link href="/social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
            <li><Link href="/web-development" className="hover:text-white transition-colors">Website Development</Link></li>
            <li><Link href="/ecommerce-development" className="hover:text-white transition-colors">E-Commerce Websites</Link></li>
            <li><Link href="/mobile-app-development" className="hover:text-white transition-colors">Mobile App Development</Link></li>
            <li><Link href="/branding-design" className="hover:text-white transition-colors">Branding &amp; Design</Link></li>
          </ul>

          <h4 className="font-semibold text-white mt-8 mb-4 text-xs uppercase tracking-wider text-purple-300">Locations</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/locations/kochi" className="hover:text-white transition-colors">Digital Marketing in Kochi</Link></li>
            <li><Link href="/locations/kozhikode" className="hover:text-white transition-colors">Digital Marketing in Calicut</Link></li>
            <li><Link href="/locations/trivandrum" className="hover:text-white transition-colors">Digital Marketing in Trivandrum</Link></li>
          </ul>
        </div>

        {/* Col 4: Platform & Playbooks */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Resources</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/results" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/calculator" className="hover:text-white transition-colors">Ad Spend ROI Calculator</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Marketing Guides</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Helix24</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 5: Hubs & Direct Contact */}
        <div className="space-y-3 text-xs">
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Direct Contact</h4>
          {/* NAP: keep identical to organizationSchema in lib/seo.ts and the Google Business Profile */}
          <address className="not-italic text-[#A39BB5] leading-relaxed text-xs">
            Helix24 Solutions Pvt Ltd<br />
            Kochi, Kerala 682030, India
          </address>
          <div className="pt-2 space-y-1.5">
            <div><a href="tel:+919048009044" className="hover:text-white text-purple-200">+91 9048009044</a></div>
            <div><a href="mailto:hello@helix24.in" className="hover:text-white text-purple-200">hello@helix24.in</a></div>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-16 pt-8 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© 2026 HELIX24 SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-zinc-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-zinc-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
