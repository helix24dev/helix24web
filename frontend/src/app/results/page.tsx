import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProjectFilter from '@/components/ProjectFilter';
import { pageMetadata } from '@/lib/seo';
import { PROJECTS } from '@/lib/content';

// Content: /content/projects.json (CMS: Case studies)
export const metadata: Metadata = pageMetadata({ ...PROJECTS.seo, path: '/results' });

export default function ResultsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Our Work', path: '/results' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-14">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            {PROJECTS.title} <span className="gradient-text">{PROJECTS.highlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            {PROJECTS.intro}
          </p>
        </section>

        <ProjectFilter projects={PROJECTS.items} />

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
