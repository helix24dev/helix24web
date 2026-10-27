import PlatformLogo from '@/components/PlatformLogo';
import { PLATFORM_GROUPS } from '@/data/platforms';

export default function TechEcosystemStrip() {
  return (
    <section aria-label="Platforms we work with" className="px-6 max-w-[1240px] mx-auto">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="space-y-1 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-heading">Platforms we work with</h2>
          <p className="text-sm sm:text-base text-slate-600">The tools behind our campaigns, websites and apps.</p>
        </div>

        <div className="space-y-6">
          {PLATFORM_GROUPS.map((group) => (
            <div key={group.title} className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-3 lg:gap-6 items-center">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">{group.title}</h3>
              <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5">
                {group.ids.map((id) => (
                  <li key={id} className="h-11 sm:h-12 px-3 sm:px-4 flex items-center rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
                    <PlatformLogo id={id} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
