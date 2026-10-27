import { ChevronDown } from 'lucide-react';

export type FaqItem = { q: string; a: string };

// Visible FAQ list plus matching FAQPage JSON-LD, so the two can never drift apart
export default function Faq({ items, title = 'Frequently asked questions', id = 'faq' }: { items: FaqItem[]; title?: string; id?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section aria-labelledby={id} className="max-w-[900px] mx-auto space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 id={id} className="text-2xl sm:text-3xl font-extrabold text-white font-heading text-center">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <details key={item.q} className="group glass-panel border border-purple-500/20 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-base sm:text-lg font-semibold text-white">
              <h3 className="font-heading">{item.q}</h3>
              <ChevronDown className="w-5 h-5 shrink-0 text-purple-300 transition-transform group-open:rotate-180" />
            </summary>
            <p className="px-6 pb-6 -mt-1 text-sm sm:text-base text-purple-200 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
