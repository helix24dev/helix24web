import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { pageMetadata, SITE_URL, WEBSITE_ID, ORG_ID } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RichText from '@/components/RichText';
import { CardGrid } from '@/components/ServiceSections';
import { ABOUT, SETTINGS, whatsappLink } from '@/lib/content';

// Content: /content/about.json (CMS: About page)
export const metadata: Metadata = pageMetadata({ ...ABOUT.seo, path: '/about' });

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
          <span className="text-xs font-bold uppercase tracking-wider text-purple-300 font-mono">{ABOUT.hero.eyebrow}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            {ABOUT.hero.title} <span className="gradient-text">{ABOUT.hero.highlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">{ABOUT.hero.intro}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:opacity-95 transition-all keep-white">
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={SETTINGS.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm">
              Our Google Business Profile
            </a>
          </div>
        </section>

        <section aria-labelledby="about-what" className="glass-panel p-8 sm:p-12 border border-purple-500/20 space-y-4">
          <h2 id="about-what" className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{ABOUT.story.title}</h2>
          {ABOUT.story.paragraphs.map((para) => (
            <p key={para.slice(0, 24)} className="text-sm sm:text-base text-purple-200 leading-relaxed max-w-3xl">
              <RichText text={para} />
            </p>
          ))}
        </section>

        <section aria-labelledby="about-how" className="space-y-10">
          <h2 id="about-how" className="text-2xl sm:text-4xl font-extrabold text-white font-heading">{ABOUT.principles.title}</h2>
          <CardGrid items={ABOUT.principles.items} columns={2} />
        </section>

        <section aria-labelledby="about-areas" className="space-y-8">
          <div className="space-y-2">
            <h2 id="about-areas" className="text-2xl sm:text-4xl font-extrabold text-white font-heading">{ABOUT.areas.title}</h2>
            <p className="text-sm sm:text-base text-purple-200">{ABOUT.areas.intro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.areas.items.map((area) => (
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{ABOUT.cta.title}</h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto">
            {ABOUT.cta.text}
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
