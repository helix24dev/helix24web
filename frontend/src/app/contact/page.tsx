import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  ExternalLink, 
  MessageCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Helix24 Solutions Pvt Ltd | Digital Agency Kochi & Calicut',
  description: 'Connect with Helix24 Solutions Pvt Ltd (CIN: U62011KL2026PTC107185). Request a customized Meta Ads, Google Ads PPC, or Next.js web development proposal for Kerala & GCC.',
  keywords: 'contact helix24 solutions, digital marketing agency kochi contact, web development company kerala phone number, helix24 solutions pvt ltd address',
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Helix24 Solutions Pvt Ltd',
    description: 'Get in touch with Helix24 Solutions Pvt Ltd for performance marketing, SEO, and web development consultations.',
    mainEntity: {
      '@type': 'Corporation',
      name: 'Helix24 Solutions Pvt Ltd',
      telephone: '+91 9048009044',
      email: 'hello@helix24.com',
      taxID: 'AAJCH0136Q',
      hasMap: 'https://share.google/bRqB2ePsNrm8f73wR',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kochi & Kozhikode',
        addressRegion: 'Kerala',
        postalCode: '682030',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-16">
        
        {/* Telemetry Header */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              DIRECT STRATEGY DESK // 24-HOUR RESPONSE SLA
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Let&apos;s Build Your <span className="gradient-text">Revenue Engine</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-2xl mx-auto">
            Get in touch with <strong>Helix24 Solutions Pvt Ltd</strong>. Submit your project requirements below to receive a customized ad and web proposal, or contact our strategy desk on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="glass-panel p-8 space-y-6 flex flex-col justify-between border border-purple-500/30">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold block">Official Corporate Office</span>
                <h2 className="text-xl font-bold text-white">Corporate Contact &amp; Strategy Desk</h2>
                <h3 className="text-sm font-semibold text-purple-200 mt-1">Helix24 Solutions Pvt Ltd</h3>
              </div>

              {/* Legal Identifiers Card */}
              <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/40 text-[11px] font-mono space-y-1.5 text-purple-300/80">
                <div className="flex items-center gap-1.5 text-purple-200 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Corporate Identifiers</span>
                </div>
                <div className="space-y-0.5 pt-1">
                  <div><span className="text-purple-400">CIN:</span> U62011KL2026PTC107185</div>
                  <div><span className="text-purple-400">PAN:</span> AAJCH0136Q</div>
                  <div><span className="text-purple-400">TAN:</span> CHNH05061A</div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">Email Consultation</span>
                    <a href="mailto:hello@helix24.com" className="text-purple-300 hover:text-white">hello@helix24.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">Phone & Strategy Desk</span>
                    <a href="tel:+919048009044" className="text-purple-300 hover:text-white">+91 9048009044</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">Operating Locations</span>
                    <span className="text-purple-200/70 block leading-relaxed">
                      Kochi (Infopark / Kakkanad) & Kozhikode, Kerala, India (Serving India & GCC)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-white">Business Hours</span>
                    <span className="text-purple-200/70">Mon – Sat: 9:30 AM – 7:00 PM IST</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="pt-4 space-y-3 border-t border-purple-900/30">
              <a
                href="https://share.google/bRqB2ePsNrm8f73wR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-semibold hover:bg-amber-500/20 transition-all"
              >
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>5.0 Rating on Google</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919048009044?text=Hi%20Helix24%20Solutions%2C%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-emerald-950/60"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Strategy Chat</span>
              </a>
            </div>

          </div>

          {/* Main Lead Form */}
          <div className="lg:col-span-2">
            <LeadForm />
          </div>

        </div>

      </div>
    </>
  );
}
