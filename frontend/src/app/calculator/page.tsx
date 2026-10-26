import AdSpendCalculator from '@/components/AdSpendCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://helix24.in/calculator',
  },
  title: 'Interactive Meta & Google Ads ROI Calculator | Helix24',
  description: 'Calculate projected CPL (Cost-Per-Lead), lead volume, and return on ad spend (ROAS) for your business in Kerala (Kochi/Kozhikode) or the GCC.',
};

export default function CalculatorPage() {
  return (
    <div className="px-6 py-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Interactive Estimator</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Ad Spend & ROAS Calculator</h1>
        <p className="text-xs sm:text-sm text-purple-200/70">
          Estimate your monthly lead volume and cost per acquisition across Meta Ads (Facebook/Instagram) and Google Search PPC.
        </p>
      </div>

      <AdSpendCalculator />
    </div>
  );
}
