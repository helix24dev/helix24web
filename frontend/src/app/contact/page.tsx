import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { pageMetadata, SITE_URL, WEBSITE_ID, ORG_ID } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import FeatureIcon from '@/components/FeatureIcon';
import { CONTACT, SETTINGS, phoneHref, whatsappLink } from '@/lib/content';

// Content: /content/contact.json (CMS: Contact page); phone, email, address and hours: CMS → Site settings
export const metadata: Metadata = pageMetadata({ ...CONTACT.seo, path: '/contact' });

const { address } = SETTINGS;
const details = [
  { icons: ['logo-whatsapp'], label: 'Phone & WhatsApp', value: SETTINGS.phone, href: phoneHref() },
  { icons: ['3d-e-mail'], label: 'Email', value: SETTINGS.email, href: `mailto:${SETTINGS.email}` },
  { icons: ['3d-round-pushpin'], label: 'Registered office', value: `${SETTINGS.companyName}, ${address.locality}, ${address.region} ${address.postalCode}, ${address.country}` },
  { icons: ['3d-alarm-clock'], label: 'Hours', value: SETTINGS.hours },
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
            {CONTACT.title} <span className="gradient-text">{CONTACT.highlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            {CONTACT.intro}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="glass-panel p-8 space-y-6 border border-purple-500/20 h-fit">
            <h2 className="text-xl font-bold text-white font-heading">Get in touch</h2>

            <ul className="space-y-5 text-sm">
              {details.map((d) => {
                return (
                  <li key={d.label} className="flex items-start gap-3">
                    <FeatureIcon icons={d.icons} size="sm" />
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
                href={SETTINGS.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm"
              >
                <span>See our reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 border-t border-purple-900/30 text-xs text-purple-300 font-mono space-y-1">
              {SETTINGS.cin && <div>CIN: {SETTINGS.cin}</div>}
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
