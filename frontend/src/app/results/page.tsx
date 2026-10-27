'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import FeatureIcon from '@/components/FeatureIcon';
import CaseJourney from '@/components/CaseJourney';
import { PROJECTS, type Project } from '@/data/projects';

const filters: { id: 'all' | Project['category']; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'retail', label: 'Retail & e-commerce' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'realestate', label: 'Real estate' },
];

export default function ResultsPage() {
  const [active, setActive] = useState<(typeof filters)[number]['id']>('all');
  const shown = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Breadcrumbs items={[{ name: 'Our Work', path: '/results' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-14">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            Real problems from businesses like yours, and how their customers now find them and get in touch. Client names are kept private.
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

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {shown.map((p) => (
            <article key={p.id} className="glass-panel p-6 sm:p-8 border border-slate-200 bg-white space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="flex items-center gap-3">
                  <FeatureIcon icon={p.icon} />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">{p.sector}</span>
                </span>
                <span className="text-slate-500 font-mono text-xs">{p.region}</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">{p.title}</h2>
                <p className="text-sm sm:text-base text-purple-200 leading-relaxed">{p.problem}</p>
              </div>

              <CaseJourney steps={p.journey} />

              {p.results && (
                <ul className="pt-4 border-t border-slate-100 space-y-1 text-sm text-white">
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
