import LeadForm from '@/components/LeadForm';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Growth Proposal | Meta Ads & Web Agency Kochi — Helix24',
  description: 'Get in touch with Helix24 Solutions. Request a custom Meta Ads, Social Media Management, Google Ads PPC, or Web Development proposal for your business in Kerala & GCC.',
};

export default function ContactPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Free Strategy Consultation</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Let&apos;s Scale Your Digital Growth</h1>
        <p className="text-xs sm:text-sm text-purple-200/70">
          Submit your project details below to receive a customized engineering and ad strategy proposal within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info Sidebar */}
        <div className="glass-panel p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-purple-900/30 pb-3">Agency Contact Info</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Email Address</span>
                  <a href="mailto:hello@helix24.com" className="text-purple-300 hover:text-white">hello@helix24.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Phone & WhatsApp</span>
                  <a href="tel:+919048009044" className="text-purple-300 hover:text-white">+91 9048009044</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Regional Hubs</span>
                  <span className="text-purple-200/70">Kochi & Kozhikode, Kerala, India (Serving UAE & GCC)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-700/30 text-purple-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Business Hours</span>
                  <span className="text-purple-200/70">Monday – Friday: 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 text-[11px] text-purple-300/80">
            💬 Fast Response Guarantee: WhatsApp messages sent to +91 9048009044 receive direct responses within 2 hours.
          </div>
        </div>

        {/* Lead Form Column */}
        <div className="lg:col-span-2">
          <LeadForm />
        </div>

      </div>
    </div>
  );
}
