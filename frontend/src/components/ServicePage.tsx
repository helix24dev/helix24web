import { CheckCircle2 } from 'lucide-react';
import { serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, Steps, RelatedLinks, ContactBlock } from '@/components/ServiceSections';
import type { ServicePageContent } from '@/lib/content';

// One template for every service page; the content comes from /content/services/<slug>.json (CMS: Service pages)
export default function ServicePage({ c, path }: { c: ServicePageContent; path: string }) {
  const id = path.slice(1);
  const jsonLd = serviceSchema({
    name: c.schema.name,
    description: c.seo.description,
    path,
    serviceType: c.schema.serviceType,
    areaServed: c.schema.areaServed,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: c.breadcrumb, path }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow={c.hero.eyebrow}
          title={c.hero.title}
          highlight={c.hero.highlight}
          intro={c.hero.intro}
          primary={{ label: c.hero.primaryLabel, href: c.hero.primaryHref }}
          secondary={c.hero.secondaryLabel && c.hero.secondaryHref ? { label: c.hero.secondaryLabel, href: c.hero.secondaryHref } : undefined}
          whatsappMessage={c.hero.whatsappMessage}
        />

        <section aria-labelledby={`${id}-services`} className="space-y-10">
          <SectionHeading id={`${id}-services`} title={c.servicesSection.title} intro={c.servicesSection.intro} />
          <CardGrid items={c.services} />
        </section>

        {c.highlight?.title && (
          <section aria-labelledby={`${id}-highlight`} className="glass-panel p-8 sm:p-12 border border-purple-500/20 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 id={`${id}-highlight`} className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{c.highlight.title}</h2>
              {c.highlight.paragraphs?.map((para) => (
                <p key={para.slice(0, 24)} className="text-sm sm:text-base text-purple-200/80 leading-relaxed">{para}</p>
              ))}
            </div>
            {!!c.highlight.points?.length && (
              <ul className="space-y-3 text-sm sm:text-base text-purple-100">
                {c.highlight.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {!!c.steps?.length && <Steps id={`${id}-process`} title={c.stepsTitle || 'How we work'} steps={c.steps} />}

        {!!c.related?.length && <RelatedLinks id={`${id}-related`} links={c.related} />}

        {!!c.faqs?.length && <Faq id={`${id}-faq`} title={c.faqTitle} items={c.faqs} />}

        <section className="space-y-8">
          {c.contact?.title && <ContactBlock title={c.contact.title} text={c.contact.text} />}
          <LeadForm />
        </section>
      </div>
    </>
  );
}
