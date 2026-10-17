import { TrendingUp, Zap, ShieldCheck, Star } from 'lucide-react';

export default function ProofMetricsStrip() {
  const metrics = [
    {
      value: '₹9 Cr+',
      label: 'Attributed Pipeline',
      sub: 'Client revenue generated',
      icon: TrendingUp,
      color: 'text-white',
    },
    {
      value: '36.9×',
      label: 'Peak Campaign ROAS',
      sub: 'Top D2C & Retail returns',
      icon: Zap,
      color: 'text-emerald-400',
    },
    {
      value: '5.0 ★',
      label: 'Google Verified Profile',
      sub: '85+ verified reviews',
      icon: Star,
      color: 'text-amber-400',
    },
    {
      value: '<0.8s',
      label: 'Next.js 14 Page Load',
      sub: '100/100 Lighthouse score',
      icon: Zap,
      color: 'text-purple-300',
    },
    {
      value: '100%',
      label: 'Corporate Compliance',
      sub: 'CIN: U62011KL2026PTC107185',
      icon: ShieldCheck,
      color: 'text-cyan-400',
    },
  ];

  return (
    <section aria-label="Key Proof Metrics" className="px-6 py-8 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-5 text-center flex flex-col justify-between space-y-2 border border-purple-500/20 hover:border-purple-400/50 transition-all group"
            >
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-0.5">
                <span className={`block font-mono text-2xl sm:text-3xl font-extrabold ${item.color}`}>
                  {item.value}
                </span>
                <span className="block text-xs font-bold text-white uppercase tracking-wider font-mono">
                  {item.label}
                </span>
                <span className="block text-[11px] text-purple-300/70">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
