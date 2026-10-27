import { Building2, Globe2, KeyRound, MessageCircle } from 'lucide-react';

// Facts only. Add performance figures here only once they are confirmed client results.
const facts = [
  { icon: Building2, value: 'Kochi, Kerala', label: 'Registered Pvt Ltd company' },
  { icon: Globe2, value: 'Kerala & GCC', label: 'Markets we work in' },
  { icon: KeyRound, value: 'Your accounts', label: 'Ads, data and code stay yours' },
  { icon: MessageCircle, value: 'Within 24 hours', label: 'Reply to every enquiry' },
];

export default function ProofMetricsStrip() {
  return (
    <section aria-label="About Helix24 at a glance" className="px-6 max-w-[1240px] mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-y border-purple-200 dark:border-purple-900/30 py-10 sm:py-12">
        {facts.map((fact) => {
          const Icon = fact.icon;
          return (
            <li key={fact.value} className="space-y-2 text-center sm:text-left">
              <Icon className="w-6 h-6 text-purple-700 dark:text-purple-300 mx-auto sm:mx-0" />
              <span className="block text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-heading">{fact.value}</span>
              <span className="block text-sm text-slate-600 dark:text-purple-200">{fact.label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
