'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';

type Region = 'kerala' | 'gcc';
type Industry = 'services' | 'realestate' | 'healthcare' | 'ecommerce';

// Starting cost-per-lead assumptions in INR. They are rough planning defaults, not promises:
// the visitor can change them, and every result is calculated from the visitor's own inputs.
const DEFAULT_CPL: Record<Region, Record<Industry, number>> = {
  kerala: { services: 150, realestate: 400, healthcare: 250, ecommerce: 100 },
  gcc: { services: 650, realestate: 1200, healthcare: 900, ecommerce: 450 },
};

const INDUSTRIES: { id: Industry; label: string }[] = [
  { id: 'services', label: 'Professional & B2B services' },
  { id: 'realestate', label: 'Real estate & construction' },
  { id: 'healthcare', label: 'Healthcare & clinics' },
  { id: 'ecommerce', label: 'Online store & retail' },
];

const inr = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;

function NumberField({ id, label, value, onChange, prefix, suffix, min = 0, step = 1 }: {
  id: string; label: string; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string; min?: number; step?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-purple-200 mb-1.5">{label}</label>
      <div className="field flex items-center rounded-xl bg-purple-950/80 border border-purple-500/30 focus-within:border-purple-400 px-3.5">
        {prefix && <span className="text-purple-300 text-sm pr-1">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="w-full py-2.5 bg-transparent text-white text-sm focus:outline-none"
        />
        {suffix && <span className="text-purple-300 text-sm pl-1">{suffix}</span>}
      </div>
    </div>
  );
}

export default function AdSpendCalculator() {
  const [budget, setBudget] = useState(30000);
  const [region, setRegion] = useState<Region>('kerala');
  const [industry, setIndustry] = useState<Industry>('services');
  const [cpl, setCpl] = useState(DEFAULT_CPL.kerala.services);
  const [closeRate, setCloseRate] = useState(10);
  const [saleValue, setSaleValue] = useState(20000);

  const resetCpl = (r: Region, i: Industry) => setCpl(DEFAULT_CPL[r][i]);

  const leads = cpl > 0 ? Math.floor(budget / cpl) : 0;
  const sales = Math.floor(leads * (closeRate / 100));
  const revenue = sales * saleValue;
  const roas = budget > 0 ? revenue / budget : 0;

  return (
    <div className="glass-panel p-6 sm:p-8 max-w-4xl mx-auto border border-purple-500/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="budget" className="text-sm font-semibold text-purple-200">Monthly ad budget</label>
              <span className="text-white font-mono font-bold">{inr(budget)}</span>
            </div>
            <input
              id="budget"
              type="range"
              min={10000}
              max={300000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 rounded-lg cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-purple-300 mt-1 font-mono">
              <span>₹10,000</span>
              <span>₹3,00,000</span>
            </div>
          </div>

          <div>
            <span className="block text-sm font-semibold text-purple-200 mb-2">Where are your customers?</span>
            <div role="group" aria-label="Target market" className="flex flex-wrap gap-2">
              {(['kerala', 'gcc'] as Region[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={region === r}
                  onClick={() => { setRegion(r); resetCpl(r, industry); }}
                  className="chip px-4 py-2 text-sm font-semibold"
                >
                  {r === 'kerala' ? 'Kerala' : 'UAE & GCC'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-purple-200 mb-1.5">Your industry</label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => { const i = e.target.value as Industry; setIndustry(i); resetCpl(region, i); }}
              className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
            >
              {INDUSTRIES.map((i) => <option key={i.id} value={i.id}>{i.label}</option>)}
            </select>
          </div>

          <NumberField id="cpl" label="Expected cost per lead" prefix="₹" value={cpl} onChange={setCpl} min={1} step={10} />
          <div className="grid grid-cols-2 gap-4">
            <NumberField id="close" label="Leads that buy" suffix="%" value={closeRate} onChange={(v) => setCloseRate(Math.min(100, v))} step={1} />
            <NumberField id="sale" label="Average sale value" prefix="₹" value={saleValue} onChange={setSaleValue} step={500} />
          </div>
        </div>

        <div className="rounded-2xl bg-purple-950/50 border border-purple-800/40 p-6 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-300">Your monthly estimate</h2>
            <dl className="grid grid-cols-2 gap-4">
              {[
                ['Leads', leads.toLocaleString('en-IN')],
                ['Sales', sales.toLocaleString('en-IN')],
                ['Revenue', inr(revenue)],
                ['Return on ad spend', `${roas.toFixed(1)}×`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-purple-900/40 border border-purple-700/30 p-4">
                  <dt className="text-xs text-purple-300">{label}</dt>
                  <dd className="text-xl sm:text-2xl font-extrabold text-white font-mono">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="flex items-start gap-2 text-sm text-purple-200 leading-relaxed">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-purple-300" />
              <span>A rough planning estimate. The starting cost per lead is a typical figure for your market and industry; change it if you know your own. Real results depend on your offer, website and follow-up.</span>
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all keep-white"
          >
            <span>Get a Plan for Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
