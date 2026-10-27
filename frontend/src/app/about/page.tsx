import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, KeyRound, ChartColumn, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { pageMetadata, SITE_URL, WEBSITE_ID, ORG_ID, GBP_URL } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { CardGrid, whatsappLink } from '@/components/ServiceSections';

export const metadata: Metadata = pageMetadata({
  title: 'About Helix24 Solutions | Digital Agency in Kochi, Kerala',
  description: 'Helix24 Solutions Pvt Ltd is a registered digital marketing and web development company in Kochi, serving businesses across Kerala and the GCC.',
  path: '/about',
});

const principles = [
  {
    icon: ChartColumn,
    title: 'Measured by enquiries and sales',
    text: 'We set up tracking before we spend your budget, and report on leads, cost per lead and sales rather than likes and impressions.',
  },
  {
    icon: KeyRound,
    title: 'Everything stays in your name',
    text: 'Ad accounts, Meta Pixel, analytics, website code and domains are created in your name. If you ever move on, you keep all of it.',
  },
  {
    icon: MessageCircle,
    title: 'Direct communication',
    text: 'You talk to the people doing the work, on WhatsApp, phone or video call, without messages passing through layers of account managers.',
  },
  {
    icon: ShieldCheck,
    title: 'A registered company',
    text: 'Helix24 Solutions Pvt Ltd is registered with the Registrar of Companies, Kerala. We work with written proposals, GST invoices and NDAs on request.',
  },
];

const areas = [
  { name: 'Kochi', href: '/locations/kochi', text: 'Our registered office. We work with businesses across Ernakulam.' },
  { name: 'Kozhikode (Calicut)', href: '/locations/kozhikode', text: 'Retail, healthcare and D2C brands across Calicut and the Malabar region.' },
  { name: 'Trivandrum', href: '/locations/trivandrum', text: 'Technopark companies, institutions and local businesses in South Kerala.' },
  { name: 'UAE & GCC', href: '/social-media-marketing', text: 'Campaigns for brands selling to customers in Dubai, Abu Dhabi and Saudi Arabia.' },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Helix24 Solutions Pvt Ltd',
    url: `${SITE_URL}/about`,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <section className="text-center space-y-5 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 font-mono">About Helix24</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Marketing and websites, <span className="gradient-text">under one roof</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            Helix24 Solutions Pvt Ltd is a digital marketing and web development company in Kochi, Kerala. We help businesses across Kerala and the GCC get found online, build websites that work well on a phone, and get more calls and WhatsApp messages from customers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:opacity-95 transition-all keep-white">
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm">
              Our Google Business Profile
            </a>
          </div>
        </section>

        <section aria-labelledby="about-what" className="glass-panel p-8 sm:p-12 border border-purple-500/20 space-y-4">
          <h2 id="about-what" className="text-2xl sm:text-3xl font-extrabold text-white font-heading">What we do</h2>
          <p className="text-sm sm:text-base text-purple-200 leading-relaxed max-w-3xl">
            Most businesses we meet have been told to choose between a marketing agency and a web developer. In practice the two depend on each other: ads send people to a website, and the website decides whether they enquire. So we do both, with one team responsible for the result.
          </p>
          <p className="text-sm sm:text-base text-purple-200 leading-relaxed max-w-3xl">
            Our services cover <Link href="/social-media-marketing" className="text-purple-300 underline underline-offset-4 hover:text-white">social media marketing</Link>,{' '}
            <Link href="/digital-marketing-seo" className="text-purple-300 underline underline-offset-4 hover:text-white">Google Ads and SEO</Link>,{' '}
            <Link href="/web-development" className="text-purple-300 underline underline-offset-4 hover:text-white">websites</Link>,{' '}
            <Link href="/ecommerce-development" className="text-purple-300 underline underline-offset-4 hover:text-white">online stores</Link>,{' '}
            <Link href="/mobile-app-development" className="text-purple-300 underline underline-offset-4 hover:text-white">mobile apps</Link> and{' '}
            <Link href="/branding-design" className="text-purple-300 underline underline-offset-4 hover:text-white">branding</Link>.
          </p>
        </section>

        <section aria-labelledby="about-how" className="space-y-10">
          <h2 id="about-how" className="text-2xl sm:text-4xl font-extrabold text-white font-heading">How we work</h2>
          <CardGrid items={principles} columns={2} />
        </section>

        <section aria-labelledby="about-areas" className="space-y-8">
          <div className="space-y-2">
            <h2 id="about-areas" className="text-2xl sm:text-4xl font-extrabold text-white font-heading">From Kochi, working across Kerala and the GCC</h2>
            <p className="text-sm sm:text-base text-purple-200">We work with clients in these regions on WhatsApp, phone and video calls.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link key={area.name} href={area.href} className="glass-panel p-6 space-y-2 border border-purple-500/20 hover:border-purple-400/60 transition-all">
                <span className="flex items-center gap-2 text-lg font-bold text-white font-heading">
                  <MapPin className="w-4 h-4 text-purple-300" /> {area.name}
                </span>
                <p className="text-sm text-purple-200 leading-relaxed">{area.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="glass-panel p-8 sm:p-12 border border-purple-500/20 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Let&apos;s talk about your business</h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto">
            Tell us what you are working on. We will reply within 24 hours with honest advice on what is worth doing first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-all keep-white">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappLink('Hi Helix24, I would like to talk to your team.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
