'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, Target, Users, ArrowRight } from 'lucide-react';

export default function AdSpendCalculator() {
  const [adSpend, setAdSpend] = useState<number>(30000);
  const [region, setRegion] = useState<'kerala' | 'gcc'>('kerala');
  const [industry, setIndustry] = useState<'realestate' | 'healthcare' | 'ecommerce' | 'services'>('services');

  // Benchmark metrics per region and industry
  const cplBenchmarks: Record<string, Record<string, number>> = {
    kerala: {
      services: 120,    // ₹120 per lead
      realestate: 350,  // ₹350 per lead
      healthcare: 250,  // ₹250 per lead
      ecommerce: 80,    // ₹80 per acquisition
    },
    gcc: {
      services: 650,    // AED/INR converted CPL equivalent
      realestate: 1200,
      healthcare: 900,
      ecommerce: 450,
    },
  };

  const estimatedCpl = cplBenchmarks[region][industry] || 150;
  const projectedLeads = Math.floor(adSpend / estimatedCpl);
  const projectedROAS = (industry === 'ecommerce' ? 4.2 : 5.5).toFixed(1);

  return (
    <div className="glass-panel p-8 max-w-4xl mx-auto my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
          <Calculator className="w-5 h-5 text-purple-300" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Interactive Meta & Google Ads ROI Estimator</h3>
          <p className="text-xs text-purple-200/70">Adjust your monthly ad budget and target market to calculate projected lead volume and ROAS.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Input Controls */}
        <div className="space-y-6">
          {/* Monthly Budget Slider */}
          <div>
            <div className="flex justify-between items-center mb-2 text-sm font-semibold">
              <span className="text-purple-200">Monthly Ad Budget</span>
              <span className="text-purple-400 font-mono font-bold text-base">
                ₹{adSpend.toLocaleString('en-IN')} / mo
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="300000"
              step="5000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-[11px] text-purple-300 font-semibold mt-1 font-mono">
              <span>₹10,000</span>
              <span>₹1,50,000</span>
              <span>₹3,00,000+</span>
            </div>
          </div>

          {/* Target Region */}
          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-2">Target Market Region</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRegion('kerala')}
                className={`py-2.5 px-4 rounded-xl text-xs font-medium border transition-all ${
                  region === 'kerala'
                    ? 'bg-purple-600 text-white border-purple-400 font-bold shadow-lg shadow-purple-900/50'
                    : 'bg-purple-950/40 text-purple-300 border-purple-500/20 hover:border-purple-400'
                }`}
              >
                🌴 Kerala (Kochi/Kozhikode)
              </button>
              <button
                type="button"
                onClick={() => setRegion('gcc')}
                className={`py-2.5 px-4 rounded-xl text-xs font-medium border transition-all ${
                  region === 'gcc'
                    ? 'bg-purple-600 text-white border-purple-400 font-bold shadow-lg shadow-purple-900/50'
                    : 'bg-purple-950/40 text-purple-300 border-purple-500/20 hover:border-purple-400'
                }`}
              >
                🏙️ UAE & GCC (Dubai/Abu Dhabi)
              </button>
            </div>
          </div>

          {/* Industry Type */}
          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-2">Industry Sector</label>
            <select
              value={industry}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setIndustry(e.target.value as 'services' | 'realestate' | 'healthcare' | 'ecommerce')}
              className="w-full py-2.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
            >
              <option value="services">B2B & Professional Services</option>
              <option value="realestate">Real Estate & Construction</option>
              <option value="healthcare">Healthcare & Medical Clinics</option>
              <option value="ecommerce">D2C E-Commerce & Retail</option>
            </select>
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-purple-950/50 border border-purple-800/40 rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">Projected Monthly Metrics</h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-900/40 border border-purple-700/30 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 text-purple-300 text-xs mb-1 font-medium">
                  <Users className="w-3.5 h-3.5" />
                  <span>Est. Qualified Leads</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">{projectedLeads}</div>
                <span className="text-[10px] text-purple-300 font-medium">Targeted inquiries / mo</span>
              </div>

              <div className="bg-purple-900/40 border border-purple-700/30 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 text-purple-300 text-xs mb-1 font-medium">
                  <Target className="w-3.5 h-3.5" />
                  <span>Est. Cost Per Lead</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">₹{estimatedCpl}</div>
                <span className="text-[10px] text-purple-300 font-medium">Based on Meta & Google Ads</span>
              </div>
            </div>

            <div className="bg-purple-900/40 border border-purple-700/30 p-4 rounded-xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-purple-300 text-xs mb-1 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Projected Campaign ROAS</span>
                </div>
                <span className="text-xs text-purple-200 font-medium">Estimated Return On Ad Spend</span>
              </div>
              <div className="text-2xl font-black text-emerald-400 font-mono">{projectedROAS}x</div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-purple-900/50 transition-all"
          >
            <span>Lock In This Strategy & Get Custom Plan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
