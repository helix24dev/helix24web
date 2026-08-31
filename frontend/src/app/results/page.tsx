import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Results & Proven Case Studies | Helix24 Web Development & Marketing',
  description: 'Explore real client growth metrics, website development case studies, and digital marketing results delivered by Helix24 Solutions in Kerala & GCC.',
};

export default function ResultsPage() {
  const cases = [
    {
      tag: 'SEO & Next.js Rebuild',
      title: 'UrbanNest Real Estate',
      summary: 'Rebuilt legacy WordPress platform into a fast Next.js website coupled with technical SEO and Google Ads management for Kerala real estate listings.',
      metrics: [
        { label: 'Organic Lead Growth', value: '+300%' },
        { label: 'Core Web Vitals Load Time', value: '0.8s' },
      ],
    },
    {
      tag: 'Mobile App & Performance Ads',
      title: 'FitTrack Pro App',
      summary: 'Engineered Flutter cross-platform booking mobile app and ran targeted Meta ad acquisition campaigns.',
      metrics: [
        { label: 'Monthly Bookings Surge', value: '11x' },
        { label: 'Acquisition CPA Reduction', value: '45%' },
      ],
    },
    {
      tag: 'Shopify E-Commerce',
      title: 'Bloom Co. Apparel',
      summary: 'Custom Shopify Plus storefront rebuild with automated Google Shopping feeds and conversion checkout optimization.',
      metrics: [
        { label: 'Return On Ad Spend (ROAS)', value: '4.2x' },
        { label: 'Total Revenue Surge', value: '+180%' },
      ],
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Client Growth Showcase</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Real Numbers, Proven Outcomes</h1>
        <p className="text-xs sm:text-sm text-purple-200/70">
          Explore how our integrated web engineering and targeted ad campaigns helped businesses expand revenue and capture market dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((item, idx) => (
          <div key={idx} className="glass-panel p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 border border-purple-500/20 px-3 py-1 rounded-full inline-block">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">{item.summary}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-purple-900/30">
              {item.metrics.map((m, mIdx) => (
                <div key={mIdx} className="bg-purple-950/60 p-3 rounded-xl border border-purple-800/30">
                  <div className="text-lg font-black text-purple-300 font-mono">{m.value}</div>
                  <div className="text-[10px] text-purple-300/60">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-all">
          <span>Ready to Generate Measurable Results? Request Proposal →</span>
        </Link>
      </div>
    </div>
  );
}
