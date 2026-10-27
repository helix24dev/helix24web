import type { Metadata } from 'next';
import AdSpendCalculator from '@/components/AdSpendCalculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Meta & Google Ads ROI Calculator | Helix24',
  description: 'Estimate leads, sales, revenue and return on ad spend from your own budget, cost per lead and sale value, for campaigns in Kerala or the GCC.',
  path: '/calculator',
});

export default function CalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Ad Spend Calculator', path: '/calculator' }]} />
      <div className="px-6 py-10 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">Ad Spend &amp; ROI Calculator</h1>
          <p className="text-base sm:text-lg text-purple-200">
            See roughly what a monthly ad budget could bring in for your business, based on your own numbers.
          </p>
        </div>
        <AdSpendCalculator />
      </div>
    </>
  );
}
