import React from 'react';
import { ShieldCheck, Target, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ExecutionProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Full Tracking Diagnostic & CAPI Setup',
      icon: ShieldCheck,
      description: 'We audit your ad accounts and install First-Party Server-Side Conversions API (CAPI) on Meta and Google. No lost data, no reliance on blocked browser cookies.',
      outcome: '100% Signal Match Quality (EMQ 9.0+)',
    },
    {
      num: '02',
      title: 'Sub-Second Web & High-Hook Creative Sprint',
      icon: Zap,
      description: 'We engineer sub-second Next.js landing pages paired with high-converting Malayalam and English vertical Reels videos that capture audience attention within 3 seconds.',
      outcome: '<1.2s Mobile LCP & High CTR',
    },
    {
      num: '03',
      title: 'Precision Geo-Fencing & High-Intent Bidding',
      icon: Target,
      description: 'We deploy tightly segmented campaigns targeting local buyers in Kochi, Kozhikode, and Trivandrum, or high-net-worth Malayali expats across Dubai, Saudi Arabia, and Qatar.',
      outcome: 'Zero Wasted Search Ad Spend',
    },
    {
      num: '04',
      title: 'Instant WhatsApp CRM Sync & ROAS Scaling',
      icon: TrendingUp,
      description: 'Inquiries are automatically routed directly to your sales team’s WhatsApp within 90 seconds. We double down on winning ad sets to scale verified revenue.',
      outcome: 'Predictable Monthly Acquisition',
    },
  ];

  return (
    <section className="px-6 max-w-[1240px] mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block font-mono">
          Execution Flywheel
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          How We Engineer <span className="gradient-text">Predictable Revenue</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 leading-relaxed">
          From tracking remediation to high-velocity ad creative testing, every step follows a proven 4-stage deployment methodology.
        </p>
      </div>

      {/* Process Grid with Visual Integration */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-200 dark:border-purple-500/20 hover:border-purple-400/60 transition-all flex flex-col justify-between space-y-6 group relative overflow-hidden bg-white/50 dark:bg-purple-950/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-purple-300/40 dark:text-purple-700/40 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-300">
                    <StepIcon className="w-4.5 h-4.5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-purple-200/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/40 flex items-center gap-2 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{step.outcome}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Diagram Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-lg">
          <span className="text-[11px] font-mono text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider block">
            Sub-Second Architecture Benchmark
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            100% Core Web Vitals Pass Rate Across All Client Deployments
          </h4>
          <p className="text-xs text-slate-600 dark:text-purple-200/70 leading-relaxed">
            All codebases are built in Next.js 14 and statically generated on high-speed global edge CDNs, ensuring near-instant loading across mobile 4G/5G connections in Kerala and the GCC.
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <div className="text-center p-3 sm:p-4 rounded-xl bg-white dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800/40">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">100</span>
            <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-purple-300">Lighthouse SEO</span>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-xl bg-white dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800/40">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-300">0.8s</span>
            <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-purple-300">Avg Mobile LCP</span>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-xl bg-white dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800/40">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">0.00</span>
            <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-purple-300">Layout Shift (CLS)</span>
          </div>
        </div>
      </div>

    </section>
  );
}
