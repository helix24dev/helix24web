import { ArrowRight, Circle } from 'lucide-react';
import FeatureIcon from '@/components/FeatureIcon';
import type { JourneyStep } from '@/data/projects';

// "How a customer finds and buys now" as logo steps, readable at a glance without a paragraph.
// Steps run left to right with arrows on wide layouts, and stack (numbered) on phones or when `compact`.
export default function CaseJourney({ steps, compact = false }: { steps: JourneyStep[]; compact?: boolean }) {
  const row = !compact;
  return (
    <ol className={`grid gap-2 ${row ? 'sm:flex sm:items-stretch sm:gap-0' : ''}`}>
      {steps.map((step, i) => (
        <li key={step.label} className={`flex items-stretch ${row ? 'sm:flex-1' : ''}`}>
          <div className={`flex-1 flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-2.5 ${row ? 'sm:flex-col sm:items-start sm:p-3.5' : ''}`}>
            <FeatureIcon icon={step.icon ?? Circle} brands={step.brands} size="sm" />
            <span className="text-sm text-slate-800 font-medium leading-snug">
              <span className={`text-slate-400 font-mono mr-1.5 ${row ? 'sm:hidden' : ''}`}>{i + 1}.</span>
              {step.label}
            </span>
          </div>
          {row && i < steps.length - 1 && (
            <span aria-hidden="true" className="hidden sm:flex items-center px-1.5 text-slate-400">
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
