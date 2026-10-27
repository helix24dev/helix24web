'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

// Project summaries describe the work done. Specific outcome figures were removed until each one is
// confirmed with the client; add confirmed results back as `results: ['…']` on the relevant project.
type Project = {
  id: string;
  category: 'retail' | 'healthcare' | 'realestate';
  sector: string;
  region: string;
  title: string;
  image: string;
  challenge: string;
  work: string[];
  results?: string[];
};

const projects: Project[] = [
  {
    id: 'retail-group',
    category: 'retail',
    sector: 'Multi-branch retail',
    region: 'Kerala',
    title: 'Connecting store enquiries across a retail group',
    image: '/images/service_web_real.svg',
    challenge: 'A retail group with several branches was running ads for each store separately, and enquiries were followed up late or not at all.',
    work: [
      'One website with a page for each branch',
      'Instagram and Facebook ads targeted around each store',
      'WhatsApp routing so every enquiry reaches the right branch',
    ],
  },
  {
    id: 'd2c-store',
    category: 'retail',
    sector: 'D2C online store',
    region: 'Kerala & GCC',
    title: 'Rebuilding an online store for mobile shoppers',
    image: '/images/service_ecom_real.svg',
    challenge: 'A consumer brand had a slow store that was hard to use on a phone, and ad results were difficult to measure.',
    work: [
      'A faster store designed for mobile checkout',
      'Meta Pixel and Conversions API set up to measure sales accurately',
      'Short video ads and abandoned-cart reminders on WhatsApp',
    ],
  },
  {
    id: 'clinic',
    category: 'healthcare',
    sector: 'Healthcare clinic',
    region: 'Kochi',
    title: 'Getting a clinic found on Google Maps',
    image: '/images/service_seo_real.svg',
    challenge: 'A specialist clinic rarely appeared in local search results and was paying for broad keywords that brought few bookings.',
    work: [
      'Google Business Profile completed and kept active',
      'Search ads focused on specific treatments in nearby areas',
      'Appointment enquiries tracked from ad to booking',
    ],
  },
  {
    id: 'real-estate',
    category: 'realestate',
    sector: 'Real estate developer',
    region: 'Kochi & GCC',
    title: 'Reaching NRI home buyers in the Gulf',
    image: '/images/hero_real.svg',
    challenge: 'A developer was getting many low-quality leads from property portals and few from serious buyers working abroad.',
    work: [
      'Project landing pages with plans, photos and pricing',
      'Meta lead campaigns targeted at Malayali audiences in the UAE and Saudi Arabia',
      'Brochures and site-visit booking sent instantly on WhatsApp',
    ],
  },
];

const filters: { id: 'all' | Project['category']; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'retail', label: 'Retail & e-commerce' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'realestate', label: 'Real estate' },
];

export default function ResultsPage() {
  const [active, setActive] = useState<(typeof filters)[number]['id']>('all');
  const shown = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Our Work', path: '/results' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-14">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            A selection of projects for businesses in Kerala and the GCC: what each client needed and what we did. Client names are kept private.
          </p>
        </section>

        <div role="group" aria-label="Filter projects by sector" className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
              className="chip px-4 py-2 text-sm font-semibold"
            >
              {f.label}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {shown.map((p) => (
            <article key={p.id} className="glass-panel p-7 sm:p-9 border border-purple-500/20 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
                <span className="chip px-3 py-1 text-xs font-semibold">{p.sector}</span>
                <span className="text-purple-300 font-mono text-xs">{p.region}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">{p.title}</h2>
              <div className="w-full aspect-[3/2] rounded-2xl bg-purple-950/40 border border-purple-800/40 overflow-hidden relative">
                <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
              </div>
              <p className="text-sm sm:text-base text-purple-200 leading-relaxed">
                <strong className="text-white">The challenge:</strong> {p.challenge}
              </p>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white">What we did</h3>
                <ul className="space-y-2 text-sm sm:text-base text-purple-100">
                  {p.work.map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {p.results && (
                <ul className="pt-4 border-t border-purple-900/30 space-y-1 text-sm text-white">
                  {p.results.map((r) => <li key={r}>{r}</li>)}
                </ul>
              )}
            </article>
          ))}
        </section>

        <section className="glass-panel p-8 sm:p-12 text-center space-y-5 border border-purple-500/20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Have a similar project?</h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto leading-relaxed">
            Tell us where you are today and what you want to achieve. We will review your website and ads and suggest a plan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-95 transition-all keep-white">
              <span>Get a Free Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/calculator" className="btn-secondary inline-flex items-center px-6 py-3.5 rounded-full text-sm font-semibold">
              Estimate Ad Results
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
