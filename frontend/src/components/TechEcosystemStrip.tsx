import PlatformLogo from '@/components/PlatformLogo';
import { PLATFORMS } from '@/lib/content';

// Logo wall, edited in the CMS under "Platforms we work with". These are platforms Helix24 works with,
// not partner certifications: only add a "Partner" badge once a certification is real.
export default function TechEcosystemStrip() {
  return (
    <section aria-label="Platforms we work with" className="px-6 max-w-[1240px] mx-auto">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="space-y-1 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-heading">{PLATFORMS.title}</h2>
          <p className="text-sm sm:text-base text-slate-600">{PLATFORMS.intro}</p>
        </div>

        <div className="space-y-6">
          {PLATFORMS.groups.map((group) => (
            <div key={group.title} className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-3 lg:gap-6 items-center">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">{group.title}</h3>
              <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5">
                {group.items.map((item) => (
                  <li key={item.name} className="h-11 sm:h-12 px-3 sm:px-4 flex items-center rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
                    <PlatformLogo item={item} />
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
