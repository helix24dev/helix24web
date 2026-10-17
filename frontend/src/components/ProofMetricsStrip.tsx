export default function ProofMetricsStrip() {
  const metrics = [
    {
      value: '₹9 Cr+',
      label: 'Attributed Pipeline',
      sub: 'Client revenue generated',
      color: 'text-white',
    },
    {
      value: '36.9×',
      label: 'Peak Campaign ROAS',
      sub: 'D2C and retail campaigns',
      color: 'text-emerald-400',
    },
    {
      value: '100+',
      label: 'Deployments',
      sub: 'Web apps & paid campaigns',
      color: 'text-purple-300',
    },
    {
      value: '5.0 Rating',
      label: 'Google Verified Profile',
      sub: 'Kochi · Calicut · Trivandrum · GCC',
      color: 'text-amber-300',
    },
  ];

  return (
    <section aria-label="Key Performance Metrics" className="px-6 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 border-y border-purple-900/30 py-12 sm:py-16">
        {metrics.map((item, idx) => (
          <div key={idx} className="space-y-2 text-center sm:text-left">
            <span className={`block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading ${item.color}`}>
              {item.value}
            </span>
            <div className="space-y-0.5">
              <span className="block text-xs uppercase tracking-wider font-semibold text-purple-200 font-mono">
                {item.label}
              </span>
              <span className="block text-xs text-purple-300/70">
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
