import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Helix24 | Digital Marketing, Meta Ads & Web Agency (Kerala & GCC)',
  description: 'Learn about Helix24 Solutions. We specialize in Meta Ads, Social Media Management, Google Ads PPC, Local SEO, and Next.js web development.',
};

export default function AboutPage() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">About Helix24 Solutions</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Digital Growth & Engineering Under One Roof</h1>
        <p className="text-xs sm:text-sm text-purple-200/70">
          Combining high-converting Meta & Google ad campaign execution with fast Next.js web application development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Target className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Performance-Driven Marketing</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            We focus strictly on bottom-line business metrics — Cost-Per-Lead (CPL), Return On Ad Spend (ROAS), and verified lead pipelines. No fluff or vanity metrics.
          </p>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <ShieldCheck className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Full Technical Ownership</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            All ad accounts, Meta Pixels, Google Analytics containers, and custom codebases are set up under 100% client ownership with complete operational transparency.
          </p>
        </div>
      </div>

      <div className="glass-panel p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Ready to scale your business across Kerala & the GCC?</h3>
        <p className="text-xs text-purple-200/70 max-w-lg mx-auto">
          Talk to our growth marketing and engineering team today to receive a free strategy breakdown.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-all">
          <span>Request Consultation Proposal →</span>
        </Link>
      </div>
    </div>
  );
}
