import { Star } from 'lucide-react';

export default function ProofMetricsStrip() {
  const metrics = [
    {
      value: '₹9 Cr+',
      label: 'Attributed Pipeline',
      sub: 'Client revenue generated',
      color: 'text-slate-900 dark:text-white',
    },
    {
      value: '36.9×',
      label: 'Peak Campaign ROAS',
      sub: 'D2C and retail campaigns',
      color: 'text-emerald-600 dark:text-emerald-400 metric-emerald',
    },
    {
      value: '100+',
      label: 'Deployments',
      sub: 'Web apps & paid campaigns',
      color: 'text-purple-900 dark:text-purple-300 metric-purple',
    },
    {
      value: '5.0',
      isRating: true,
      label: 'Google Verified Rating',
      sub: '100% 5-Star Client Reviews',
      color: 'text-amber-600 dark:text-amber-400 metric-amber',
    },
  ];

  return (
    <section aria-label="Key Performance Metrics" className="px-6 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 border-y border-purple-200 dark:border-purple-900/30 py-12 sm:py-16">
        {metrics.map((item, idx) => (
          <div key={idx} className="space-y-2 text-center sm:text-left">
            <div className="flex items-baseline justify-center sm:justify-start gap-2 flex-wrap">
              <span className={`block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading ${item.color}`}>
                {item.value}
              </span>
              {item.isRating && (
                <div className="flex items-center gap-0.5 pb-1 self-center" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500 dark:fill-amber-400 text-amber-500 dark:text-amber-400" />
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-1">
              <span className="block text-xs sm:text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-purple-200 font-mono">
                {item.label}
              </span>
              <span className="block text-xs sm:text-sm text-slate-600 dark:text-purple-300/80 font-medium">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
