import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { pageMetadata, SITE_URL, WEBSITE_ID, ORG_ID, GBP_URL } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import FeatureIcon from '@/components/FeatureIcon';
import { whatsappLink } from '@/components/ServiceSections';
import { logos } from '@/data/platforms';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Helix24 | Digital Marketing Agency in Kochi',
  description: 'Call or WhatsApp +91 9048009044, or send your project details and get a Meta Ads, Google Ads or website proposal within 24 hours.',
  path: '/contact',
});

const details = [
  { icon: Phone, brands: logos('whatsapp'), label: 'Phone & WhatsApp', value: '+91 9048009044', href: 'tel:+919048009044' },
  { icon: Mail, label: 'Email', value: 'info@helix24.in', href: 'mailto:info@helix24.in' },
  { icon: MapPin, label: 'Registered office', value: 'Helix24 Solutions Pvt Ltd, Kochi, Kerala 682030, India' },
  { icon: Clock, label: 'Hours', value: 'Monday to Saturday, 9:30 AM to 7:00 PM IST' },
];

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Helix24 Solutions Pvt Ltd',
    url: `${SITE_URL}/contact`,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-14">
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Contact <span className="gradient-text">Helix24</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            Tell us about your business and what you need. We reply to every enquiry within 24 hours, usually much sooner on WhatsApp.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="glass-panel p-8 space-y-6 border border-purple-500/20 h-fit">
            <h2 className="text-xl font-bold text-white font-heading">Get in touch</h2>

            <ul className="space-y-5 text-sm">
              {details.map((d) => {
                return (
                  <li key={d.label} className="flex items-start gap-3">
                    <FeatureIcon icon={d.icon} brands={d.brands} size="sm" />
                    <span>
                      <span className="block font-semibold text-white">{d.label}</span>
                      {d.href ? (
                        <a href={d.href} className="text-purple-200 hover:text-white">{d.value}</a>
                      ) : (
                        <span className="text-purple-200">{d.value}</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="space-y-3 pt-2">
              <a
                href={whatsappLink('Hi Helix24, I would like to discuss a project for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm"
              >
                <span>See our reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 border-t border-purple-900/30 text-xs text-purple-300 font-mono space-y-1">
              <div>CIN: U62011KL2026PTC107185</div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </>
  );
}
