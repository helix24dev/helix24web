import { ArrowRight } from 'lucide-react';

// How a customer now finds and buys, as short steps joined by arrows (plain text: the logo wall already shows the brands)
export default function CaseJourney({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-1.5">
          <span className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 shrink-0 text-slate-400" />}
        </li>
      ))}
    </ol>
  );
}
