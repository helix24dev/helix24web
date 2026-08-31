import Link from 'next/link';
import { Sparkles, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-slate-950/80 pt-16 pb-12 text-sm text-purple-200/70">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4 text-purple-300" />
            </div>
            <span>Helix<span className="text-purple-400 font-extrabold">24</span></span>
          </Link>
          <p className="text-xs leading-relaxed text-purple-300/70">
            Helix24 Solutions is an enterprise Meta Ads, Social Media Management, Google Ads, and Web Development agency serving ambitious businesses across Kerala (Kochi & Kozhikode), UAE, and the GCC.
          </p>
        </div>

        {/* Col 2: Specializations */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Specializations</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Meta Ads & Social Media Management</Link></li>
            <li><Link href="/digital-marketing-seo" className="hover:text-white transition-colors">Google Ads PPC & Local SEO</Link></li>
            <li><Link href="/web-development" className="hover:text-white transition-colors">Website & Custom Software Dev</Link></li>
            <li><Link href="/mobile-app-development" className="hover:text-white transition-colors">Mobile App Engineering (iOS & Android)</Link></li>
            <li><Link href="/ecommerce-development" className="hover:text-white transition-colors">Shopify & WooCommerce Stores</Link></li>
            <li><Link href="/branding-design" className="hover:text-white transition-colors">Branding & Visual UI/UX Design</Link></li>
          </ul>
        </div>

        {/* Col 3: Resources & Platform */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Platform & Resources</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/calculator" className="hover:text-white transition-colors font-medium text-purple-300">⚡ Interactive Ad ROI Calculator</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & SEO Guide (Kerala & GCC)</Link></li>
            <li><Link href="/results" className="hover:text-white transition-colors">Results & Proven Case Studies</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Our Agency</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Get Strategy Proposal</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Locations */}
        <div className="space-y-3 text-xs">
          <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider text-purple-300">Direct Contact</h4>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-400" />
            <a href="mailto:hello@helix24.com" className="hover:text-white">hello@helix24.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-purple-400" />
            <a href="tel:+919048009044" className="hover:text-white">+91 9048009044</a>
          </div>
          <div className="flex items-start gap-2 pt-1">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span>Kochi & Kozhikode, Kerala, India (Serving UAE & GCC)</span>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-12 pt-6 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/50">
        <p>© 2026 HELIX24 SOLUTIONS — WEBSITE DEVELOPMENT & DIGITAL MARKETING AGENCY</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
