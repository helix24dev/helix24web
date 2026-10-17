import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function KeralaToGCCStory() {
  const milestones = [
    {
      year: 'THE GENESIS',
      title: 'Built in Code. Proven in ROI.',
      accent: 'bg-[#13BE89]',
      description: 'We started with a contrarian premise: traditional marketing agencies sell vanity likes and build slow templates that leak ad spend. We built Helix24 as an engineering-led growth lab.',
      stats: '0.8s Next.js FCP',
    },
    {
      year: 'THE KERALA CORRIDOR',
      title: 'Kochi & Kozhikode Grounding',
      accent: 'bg-[#00A3FF]',
      description: 'Headquartered in Kerala, serving the bustling retail, healthcare, and D2C ecosystems across Kakkanad/Infopark, Ernakulam, Calicut, and Malabar.',
      stats: '100+ Brands Scaled',
    },
    {
      year: 'THE GCC CROSSING',
      title: 'Expanding to UAE & Saudi Arabia',
      accent: 'bg-[#FFC83D]',
      description: 'Connecting Kerala-grown businesses with GCC high-net-worth investors and shoppers across Dubai, Abu Dhabi, Riyadh, and Kuwait with localized Arabic & English funnels.',
      stats: '₹14 Cr Closed Deals',
    },
    {
      year: 'CORPORATE COMPLIANCE',
      title: 'Helix 24 Solutions Pvt Ltd',
      accent: 'bg-[#A855F7]',
      description: 'Formally incorporated as a Private Limited company with Ministry of Corporate Affairs (CIN: U62011KL2026PTC107185). Enterprise SLA contracts and 100% intellectual property protection.',
      stats: '5.0 Verified on Google',
    },
  ];

  return (
    <section className="px-6 py-20 border-t border-purple-900/20 bg-purple-950/10">
      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* Editorial Growth Manifesto */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            The Helix 24 Solutions Story
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            While others played it safe with templates,{' '}
            <span className="gradient-text">we engineered revenue.</span>
          </h2>

          <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/30 space-y-3">
            <p className="font-mono text-base sm:text-xl text-purple-200 font-semibold italic">
              &quot;Because Revenue is the only language every business understands. We don&apos;t sell &apos;likes&apos; or bloated retainers. We engineer cash flow.&quot;
            </p>
            <span className="block text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
              — The Helix24 Engineering & Performance Manifesto
            </span>
          </div>
        </div>

        {/* Milestone Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-purple-500/25 relative group hover:border-purple-400/60 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-sm ${item.accent}`}></span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-purple-200/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  {item.stats}
                </span>
                <span className="text-purple-500 font-mono text-xs">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Geographic Hubs Strip */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-500/20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
              <MapPin className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Operating Hubs in Kerala & GCC</span>
              <span className="text-[11px] text-purple-200/70 font-mono">
                Kochi (Infopark Corridor) • Kozhikode (Calicut Hub) • Dubai, UAE Desk
              </span>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-purple-900/50 hover:bg-purple-900 border border-purple-700/40 text-purple-200 hover:text-white text-xs font-semibold transition-all shrink-0"
          >
            <span>Read Our Full Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
