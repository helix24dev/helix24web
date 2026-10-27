import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin, ChevronDown } from 'lucide-react';
import TechEcosystemStrip from '@/components/TechEcosystemStrip';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import FeatureIcon from '@/components/FeatureIcon';
import CaseJourney from '@/components/CaseJourney';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { HOME, PROJECTS, whatsappLink } from '@/lib/content';

// Content: /content/home.json (CMS: Homepage); case studies: /content/projects.json (marked "Show on homepage")
export const metadata: Metadata = pageMetadata({ ...HOME.seo, path: '/' });

export default function HomePage() {
  const { hero, projects, services, trust, areas, faq, cta } = HOME;
  const selectedWorks = PROJECTS.items.filter((p) => p.featured).slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative px-6 pt-16 sm:pt-24 max-w-[1240px] mx-auto text-center space-y-8">

        {/* Display headline with the quote as the visual hook; the H1 carries the search keyword */}
        <div className="max-w-5xl mx-auto space-y-6">
          <figure className="space-y-6">
            <blockquote className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading block">
              &ldquo;{hero.quote} <span className="gradient-text">{hero.quoteHighlight}&rdquo;</span>
            </blockquote>

            {hero.quoteAuthor && (
              <figcaption className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase">
                <span className="w-10 h-px bg-purple-500/40"></span>
                <cite className="not-italic">{hero.quoteAuthor}</cite>
                <span className="w-10 h-px bg-purple-500/40"></span>
              </figcaption>
            )}
          </figure>

          <h1 className="text-xl sm:text-2xl font-semibold text-purple-700 tracking-tight font-heading block">
            {hero.heading}
          </h1>
        </div>

        <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
          {hero.intro}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={hero.primaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-950/60 keep-white"
          >
            <span>{hero.primaryLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {hero.secondaryLabel && (
            <Link
              href={hero.secondaryHref}
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>{hero.secondaryLabel}</span>
              <ArrowUpRight className="w-4 h-4 text-purple-700" />
            </Link>
          )}
        </div>

      </section>

      {/* Platforms we work with */}
      <TechEcosystemStrip />

      {/* Selected Work (Case Studies) */}
      <section className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-purple-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
              {projects.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
              {projects.title}
            </h2>
          </div>

          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors shrink-0"
          >
            <span>{projects.linkLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {selectedWorks.map((work) => (
            <Link
              key={work.id}
              href="/results"
              className="glass-panel p-7 flex flex-col gap-5 border border-slate-200 hover:border-purple-300 transition-all group bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FeatureIcon icons={[work.icon]} image={work.image} />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                    {work.sector}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug font-heading">
                {work.title}
              </h3>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <CaseJourney steps={work.journey} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            {services.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium leading-relaxed">
            {services.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.items.map((item) => (
            <div
              key={item.title}
              className="glass-panel p-8 sm:p-10 flex flex-col justify-between space-y-8 border border-purple-200 hover:border-purple-400/50 transition-all group bg-white/70"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <FeatureIcon icons={item.icons} image={item.image} />
                  <span className="text-xs font-mono text-purple-700 font-bold block uppercase tracking-wider">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors font-heading">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag, tIdx) => (
                    <span key={tag} className="text-xs text-purple-700 font-mono">
                      {tag} {tIdx < item.tags.length - 1 && '•'}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  aria-label={`Explore ${item.title}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="trust-heading" className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            {trust.eyebrow}
          </span>
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {trust.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            {trust.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {trust.items.map((point) => (
            <div key={point.title} className="glass-panel p-7 sm:p-8 flex gap-5 border border-purple-200 bg-white/70">
              <FeatureIcon icons={point.icons} image={point.image} />
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">{point.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas: internal links to location pages */}
      <section aria-labelledby="areas-heading" className="px-6 max-w-[1240px] mx-auto space-y-12">
        <div className="space-y-2 border-b border-purple-200 pb-8">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            {areas.eyebrow}
          </span>
          <h2 id="areas-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {areas.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
            {areas.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.items.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="glass-panel p-7 space-y-3 border border-purple-200 hover:border-purple-400/60 transition-all group bg-white/70"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-lg font-bold text-slate-900 font-heading">
                  <MapPin className="w-4 h-4 text-purple-700" />
                  {area.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-purple-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{area.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ: mirrors the FAQPage JSON-LD above */}
      <section aria-labelledby="faq-heading" className="px-6 max-w-[900px] mx-auto space-y-10">
        <div className="space-y-2 text-center">
          <span className="text-xs uppercase tracking-widest text-purple-700 font-bold block font-mono">
            {faq.eyebrow}
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            {faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group glass-panel border border-purple-200 bg-white/70 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-base sm:text-lg font-semibold text-slate-900">
                <h3 className="font-heading">{item.q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-purple-700 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 -mt-1 text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="px-6 max-w-[1240px] mx-auto">
        <div className="cta-banner p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-purple-950/80 via-slate-950 to-purple-950/50 border border-purple-500/30 text-center space-y-6 shadow-2xl">
          {cta.badge && (
            <div className="cta-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-[11px] font-mono text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{cta.badge}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto font-heading">
            {cta.title}
          </h2>

          <p className="text-base text-purple-200/80 max-w-xl mx-auto leading-relaxed">
            {cta.text}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <span>Send Your Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
