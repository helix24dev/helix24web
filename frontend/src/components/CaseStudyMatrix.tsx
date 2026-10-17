'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

interface CaseItem {
  id: string;
  title: string;
  industry: 'retail' | 'd2c' | 'healthcare' | 'realestate';
  industryLabel: string;
  region: 'kerala' | 'gcc';
  regionLabel: string;
  highlightMetric: string;
  highlightLabel: string;
  summary: string;
  deliverables: string[];
  link: string;
}

export default function CaseStudyMatrix() {
  const [activeIndustry, setActiveIndustry] = useState<string>('all');
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const cases: CaseItem[] = [
    {
      id: 'omnichannel-retail',
      title: '18 Retail Outlets Unified Under One Live Next.js Command Center',
      industry: 'retail',
      industryLabel: 'Jewellery & Retail Group',
      region: 'kerala',
      regionLabel: 'Kerala & UAE',
      highlightMetric: '₹4.75 Cr',
      highlightLabel: 'Attributed Sales',
      summary: 'Replaced disconnected POS and fragmented branch marketing with a centralized Next.js dashboard, automated WhatsApp lead distribution, and Meta CAPI campaigns.',
      deliverables: ['Next.js 14 App Router', 'Meta CAPI Tracking', 'WhatsApp CRM Routing'],
      link: '/results',
    },
    {
      id: 'd2c-appliances',
      title: '36.9× Peak ROAS on Meta Ads With Next.js Commerce Storefront',
      industry: 'd2c',
      industryLabel: 'D2C E-Commerce',
      region: 'kerala',
      regionLabel: 'Kerala & India',
      highlightMetric: '36.9×',
      highlightLabel: 'Peak Campaign ROAS',
      summary: 'Migrated from slow legacy store to a sub-second Next.js commerce platform paired with dynamic catalog Meta Ads and automated 1-click Razorpay checkout.',
      deliverables: ['0.8s Mobile Checkout', 'Dynamic Meta Catalog', 'Automated Cart Recovery'],
      link: '/results',
    },
    {
      id: 'clinic-central',
      title: '+340% High-Intent Patient Leads Via Google 3-Pack & PPC',
      industry: 'healthcare',
      industryLabel: 'Healthcare & Clinic',
      region: 'kerala',
      regionLabel: 'Kochi & Calicut',
      highlightMetric: '#1 Rank',
      highlightLabel: 'Google Maps 3-Pack',
      summary: 'Dominated the Google 3-Pack across 12 high-intent search queries in Central Kerala while running hyper-targeted Google Search Ads with automated WhatsApp qualification.',
      deliverables: ['Google Business Profile 3-Pack', 'Local SEO Schema', 'Google Search PPC'],
      link: '/results',
    },
    {
      id: 'luxury-villas',
      title: '₹14 Cr in Closed Villa Deals from Ultra-Targeted NRI Campaigns',
      industry: 'realestate',
      industryLabel: 'Real Estate & Luxury Villas',
      region: 'gcc',
      regionLabel: 'Dubai & Kerala NRI',
      highlightMetric: '₹14 Cr',
      highlightLabel: 'Closed Property Value',
      summary: 'Built high-converting Next.js project landing pages with interactive floorplans, combined with Meta Lead Forms featuring dynamic income gating for GCC investors.',
      deliverables: ['Interactive Next.js Landing Page', 'NRI Income-Gated Ads', 'WhatsApp 3D Tour Bot'],
      link: '/results',
    },
    {
      id: 'gcc-fashion',
      title: 'D2C Apparel Brand Expansion Across UAE, Saudi & Kuwait',
      industry: 'd2c',
      industryLabel: 'D2C E-Commerce',
      region: 'gcc',
      regionLabel: 'Dubai & GCC Market',
      highlightMetric: '28.4×',
      highlightLabel: 'GCC Campaign ROAS',
      summary: 'Localized Arabic and English ad funnels, multi-currency checkout (AED/SAR), and Tabby/Tamara Buy-Now-Pay-Later integrations driving massive repeat orders.',
      deliverables: ['Shopify Plus Storefront', 'Tabby & Tamara BNPL', 'Arabic TikTok/Meta Ads'],
      link: '/results',
    },
    {
      id: 'super-speciality',
      title: 'Multi-Speciality Hospital Patient Inflow Engine',
      industry: 'healthcare',
      industryLabel: 'Healthcare & Clinic',
      region: 'kerala',
      regionLabel: 'Ernakulam & Thrissur',
      highlightMetric: '-46%',
      highlightLabel: 'Cost Per Consultation',
      summary: 'Eliminated wasted ad spend on generic keywords by restructuring Google Ads into medical departmental silos with automated call tracking and WhatsApp confirmations.',
      deliverables: ['Departmental Google PPC', 'CallRail Attribution', 'Doctor Booking Flow'],
      link: '/results',
    },
  ];

  const filteredCases = cases.filter((item) => {
    const matchIndustry = activeIndustry === 'all' || item.industry === activeIndustry;
    const matchRegion = activeRegion === 'all' || item.region === activeRegion;
    return matchIndustry && matchRegion;
  });

  return (
    <div className="space-y-8">
      {/* Filter Tabs (Industry and Region Classification) */}
      <div className="glass-panel p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-purple-500/20">
        
        {/* Industry Filter */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 mr-2 shrink-0">Industry:</span>
          {[
            { id: 'all', label: 'All Industries' },
            { id: 'retail', label: 'Retail & Jewellery' },
            { id: 'd2c', label: 'D2C Brands' },
            { id: 'healthcare', label: 'Healthcare' },
            { id: 'realestate', label: 'Real Estate' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveIndustry(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeIndustry === tab.id
                  ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-900/50'
                  : 'text-purple-200/70 hover:text-white hover:bg-purple-950/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Region Filter */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 mr-2">Region:</span>
          {[
            { id: 'all', label: 'All' },
            { id: 'kerala', label: 'Kerala' },
            { id: 'gcc', label: 'UAE & GCC' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveRegion(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeRegion === tab.id
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-950/50'
                  : 'text-purple-200/70 hover:text-white hover:bg-purple-950/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Filtered Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((item) => (
          <div
            key={item.id}
            className="glass-panel p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-purple-500/25 hover:border-purple-400/60 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-purple-900/50 border border-purple-700/30 text-[10px] font-mono text-purple-300 uppercase tracking-wide">
                  {item.industryLabel}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <MapPin className="w-3 h-3" />
                  <span>{item.regionLabel}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-purple-200/75 leading-relaxed">
                {item.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {item.deliverables.map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-2 py-0.5 rounded-md bg-purple-950/70 border border-purple-800/40 text-[10px] font-mono text-purple-300"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
              <div>
                <span className="block text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                  {item.highlightMetric}
                </span>
                <span className="text-[10px] uppercase font-mono text-purple-400">
                  {item.highlightLabel}
                </span>
              </div>

              <Link
                href={item.link}
                className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-700/30 text-purple-300 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-all"
                aria-label={`View details for ${item.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
