'use client';

import { useState } from 'react';
import FeatureIcon from '@/components/FeatureIcon';
import CaseJourney from '@/components/CaseJourney';
import type { Project } from '@/lib/content';

// Sector filter and case-study grid for /results; the list comes from the server page so no other content ships to the browser
const filters: { id: 'all' | Project['category']; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'retail', label: 'Retail & e-commerce' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'realestate', label: 'Real estate' },
];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]['id']>('all');
  const shown = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
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
                  <FeatureIcon icons={[p.icon]} image={p.image} />
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
    </>
  );
}
