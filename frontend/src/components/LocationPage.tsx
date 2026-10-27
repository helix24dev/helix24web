import { MapPin, Clock, Phone, type LucideIcon } from 'lucide-react';
import { serviceSchema, GBP_URL } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq, { type FaqItem } from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, RelatedLinks, ContactBlock } from '@/components/ServiceSections';

export type LocationContent = {
  slug: string;
  city: string;            // display name, e.g. "Calicut"
  crumb: string;
  schemaAreas: string[];
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  whatsappMessage: string;
  marketTitle: string;
  market: string[];        // paragraphs about the local market, unique per city
  services: { icon: LucideIcon; title: string; text: string }[];
  areas: string[];         // neighbourhoods and nearby towns served
  faqs: FaqItem[];
};

// Service-area page: Helix24's only office is the registered office in Kochi (see organizationSchema),
// so these pages describe the area served and never claim a local address.
export default function LocationPage({ c }: { c: LocationContent }) {
  const jsonLd = serviceSchema({
    name: `Digital Marketing Services in ${c.city}`,
    description: c.intro,
    path: `/locations/${c.slug}`,
    serviceType: 'Digital Marketing',
    areaServed: c.schemaAreas,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: c.crumb, path: `/locations/${c.slug}` }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow={c.eyebrow}
          title={c.title}
          highlight={c.highlight}
          intro={c.intro}
          primary={{ label: 'Get a Free Marketing Review', href: '/contact' }}
          whatsappMessage={c.whatsappMessage}
        />

        <section aria-labelledby="loc-market" className="glass-panel p-8 sm:p-12 border border-purple-500/20 space-y-4">
          <h2 id="loc-market" className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{c.marketTitle}</h2>
          {c.market.map((para) => (
            <p key={para.slice(0, 24)} className="text-sm sm:text-base text-purple-200 leading-relaxed max-w-3xl">{para}</p>
          ))}
        </section>

        <section aria-labelledby="loc-services" className="space-y-10">
          <SectionHeading id="loc-services" title={`Our services in ${c.city}`} />
          <CardGrid items={c.services} />
        </section>

        <section aria-labelledby="loc-areas" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8 border border-purple-500/20 space-y-4">
            <h2 id="loc-areas" className="text-xl sm:text-2xl font-extrabold text-white font-heading">Areas we serve</h2>
            <ul className="flex flex-wrap gap-2">
              {c.areas.map((area) => (
                <li key={area} className="chip px-3.5 py-1.5 text-sm">{area}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-8 border border-purple-500/20 space-y-3 text-sm sm:text-base text-purple-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading">How we work with {c.city} businesses</h2>
            <p className="leading-relaxed">
              Our team is based in Kochi and works with clients across Kerala and the GCC on WhatsApp, phone and video calls.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-300" /> Helix24 Solutions Pvt Ltd, Kochi, Kerala 682030</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-purple-300" /> Monday to Saturday, 9:30 AM to 7:00 PM IST</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-purple-300" /> <a href="tel:+919048009044" className="hover:text-white">+91 9048009044</a></div>
            </div>
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex mt-2 px-5 py-2.5 rounded-full text-sm font-semibold">
              Read our Google reviews
            </a>
          </div>
        </section>

        <RelatedLinks
          id="loc-related"
          links={[
            { href: '/digital-marketing-seo', label: 'Digital marketing & SEO' },
            { href: '/social-media-marketing', label: 'Social media marketing' },
            { href: '/web-development', label: 'Website development' },
            { href: '/blog/local-seo-kochi-kozhikode-google-maps', label: 'How to rank on Google Maps' },
          ]}
        />

        <Faq id="loc-faq" title={`Digital marketing in ${c.city}: FAQs`} items={c.faqs} />

        <section className="space-y-8">
          <ContactBlock
            title={`Grow your business in ${c.city}`}
            text="Tell us about your business and goals, and we will reply within 24 hours with a plan."
          />
          <LeadForm />
        </section>
      </div>
    </>
  );
}
