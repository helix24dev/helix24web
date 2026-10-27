import Link from 'next/link';
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import FeatureIcon from '@/components/FeatureIcon';

// Shared building blocks for service and location pages, so headings, cards and buttons look the same everywhere

export const WHATSAPP_NUMBER = '919048009044';

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  primary,
  whatsappMessage,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  primary: { label: string; href: string };
  whatsappMessage: string;
}) {
  return (
    <section className="text-center space-y-5 max-w-3xl mx-auto">
      <span className="text-xs font-bold uppercase tracking-wider text-purple-300 font-mono">{eyebrow}</span>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h1>
      <p className="text-base sm:text-lg text-purple-200 leading-relaxed">{intro}</p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href={primary.href}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg transition-all hover:opacity-95 keep-white"
        >
          <span>{primary.label}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </section>
  );
}

export function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="space-y-2 max-w-2xl">
      <h2 id={id} className="text-2xl sm:text-4xl font-extrabold text-white font-heading">{title}</h2>
      {intro && <p className="text-sm sm:text-base text-purple-200 leading-relaxed">{intro}</p>}
    </div>
  );
}

export type ServiceCard = { icon: LucideIcon; title: string; text: string; points?: string[] };

export function CardGrid({ items, columns = 3 }: { items: ServiceCard[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-6`}>
      {items.map((item) => {
        return (
          <div key={item.title} className="glass-panel p-7 space-y-3 border border-purple-500/20">
            <FeatureIcon icon={item.icon} />
            <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
            <p className="text-sm text-purple-200 leading-relaxed">{item.text}</p>
            {item.points && (
              <ul className="space-y-2 pt-2 text-sm text-purple-100">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Steps({ id, title, steps }: { id: string; title: string; steps: { title: string; text: string }[] }) {
  return (
    <section aria-labelledby={id} className="space-y-10">
      <h2 id={id} className="text-2xl sm:text-4xl font-extrabold text-white font-heading">{title}</h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <li key={step.title} className="glass-panel p-6 space-y-2 border border-purple-500/20">
            <span className="text-xs font-mono font-bold text-purple-300">Step {i + 1}</span>
            <h3 className="text-lg font-bold text-white font-heading">{step.title}</h3>
            <p className="text-sm text-purple-200 leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function RelatedLinks({ id, title = 'Related services and guides', links }: { id: string; title?: string; links: { href: string; label: string }[] }) {
  return (
    <section aria-labelledby={id} className="space-y-6">
      <h2 id={id} className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="glass-panel p-5 border border-purple-500/20 hover:border-purple-400/60 text-purple-100 hover:text-white transition-all flex items-center justify-between gap-3"
          >
            <span>{link.label}</span>
            <ArrowRight className="w-4 h-4 shrink-0 text-purple-300" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ContactBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-center space-y-2 max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{title}</h2>
      <p className="text-sm sm:text-base text-purple-200 leading-relaxed">{text}</p>
    </div>
  );
}
