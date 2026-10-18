'use client';

import React, { useState } from 'react';
import { 
  FileEdit, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export default function CmsDashboardShowcase() {
  const [activeTab, setActiveTab] = useState<'cms' | 'telemetry' | 'crm'>('cms');

  return (
    <section className="px-6 max-w-[1240px] mx-auto space-y-10">
      
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 text-xs font-mono text-purple-800 dark:text-purple-300 font-semibold">
          <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          <span>ZERO-CODE CLIENT CONTROL &amp; CMS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Full Control Over Your Website. <br className="hidden sm:inline" />
          <span className="gradient-text">No Developer Retainers Needed.</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-purple-200/80 leading-relaxed">
          Every website built by <strong>Helix 24 Solutions</strong> comes equipped with an intuitive, visual Headless CMS and real-time lead telemetry. Update copy, change banners, launch blogs, and view sales inquiries in real time.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-1.5 rounded-2xl bg-slate-100 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40 max-w-2xl mx-auto">
        <button
          onClick={() => setActiveTab('cms')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'cms'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950/50'
              : 'text-slate-600 dark:text-purple-300/80 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileEdit className="w-4 h-4" />
          <span>Visual Headless CMS</span>
        </button>

        <button
          onClick={() => setActiveTab('telemetry')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'telemetry'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950/50'
              : 'text-slate-600 dark:text-purple-300/80 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Live ROAS &amp; Ad Telemetry</span>
        </button>

        <button
          onClick={() => setActiveTab('crm')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'crm'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950/50'
              : 'text-slate-600 dark:text-purple-300/80 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp CRM Lead Desk</span>
        </button>
      </div>

      {/* Interactive Visual Dashboard Container */}
      <div className="glass-panel p-4 sm:p-8 rounded-3xl border border-purple-300 dark:border-purple-500/30 shadow-2xl relative overflow-hidden bg-slate-50 dark:bg-[#0B061A]">
        
        {/* Mock Browser/Dashboard Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-200 dark:border-purple-800/40 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-slate-500 dark:text-purple-300 hidden sm:inline">
              helix-admin.cloud // Connected to Next.js Edge CDN
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 font-semibold text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              Live Synced (0.4s Cache Purge)
            </span>
          </div>
        </div>

        {/* Tab 1: Visual CMS Preview */}
        {activeTab === 'cms' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Page Tree */}
            <div className="p-4 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/30 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-400 font-bold block">
                Manage Content Structure
              </span>
              <div className="space-y-1.5 text-xs">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/50 font-bold text-purple-950 dark:text-white flex items-center justify-between">
                  <span>Homepage Hero &amp; Headlines</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Published</span>
                </div>
                <div className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-purple-900/20 text-slate-700 dark:text-purple-200 flex items-center justify-between cursor-pointer">
                  <span>Product Catalog / Pricing</span>
                  <span className="text-[10px] text-purple-500 font-mono">14 Items</span>
                </div>
                <div className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-purple-900/20 text-slate-700 dark:text-purple-200 flex items-center justify-between cursor-pointer">
                  <span>Blog Playbooks &amp; Case Studies</span>
                  <span className="text-[10px] text-purple-500 font-mono">6 Articles</span>
                </div>
                <div className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-purple-900/20 text-slate-700 dark:text-purple-200 flex items-center justify-between cursor-pointer">
                  <span>Offers &amp; Festival Banners</span>
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">Draft</span>
                </div>
              </div>
            </div>

            {/* Center Live Editor Mockup */}
            <div className="lg:col-span-2 p-5 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-800/30 pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">Editing: Homepage Hero Banner</span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Summer 2026 Promotional Campaign</h4>
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Publish Instantly</span>
                </button>
              </div>

              {/* Form Input Mockups */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-600 dark:text-purple-300/80 font-mono text-[11px] mb-1">Headline Text (Auto-renders in Malayalam &amp; English)</label>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800/50 font-semibold text-slate-900 dark:text-white">
                    Premium Handcrafted Kerala Sarees — Direct From Weavers
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 dark:text-purple-300/80 font-mono text-[11px] mb-1">Promotional Discount Subhead</label>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800/50 text-slate-700 dark:text-purple-200">
                    Get Flat 20% Off on all Festival Orders. Free express delivery to UAE &amp; GCC over ₹5,000.
                  </div>
                </div>

                {/* Media Uploader Mock */}
                <div>
                  <label className="block text-slate-600 dark:text-purple-300/80 font-mono text-[11px] mb-1">Hero Product Image (WebP Auto-Compression)</label>
                  <div className="p-4 rounded-xl border-2 border-dashed border-purple-300 dark:border-purple-700/50 flex items-center justify-between bg-purple-50/50 dark:bg-purple-950/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-xs">
                        IMG
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">kerala_collection_hero.webp</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Optimized: 48KB (98% smaller than PNG)</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-400">Replace Media</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Live ROAS Telemetry Preview */}
        {activeTab === 'telemetry' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40">
                <span className="text-[11px] font-mono uppercase text-purple-700 dark:text-purple-400 font-bold block">Attributed Revenue</span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">₹14,82,400</span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block pt-1">↑ +38.4% vs last month</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40">
                <span className="text-[11px] font-mono uppercase text-purple-700 dark:text-purple-400 font-bold block">Meta &amp; Google Spend</span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">₹1,12,000</span>
                <span className="text-[11px] text-purple-700 dark:text-purple-300 font-mono block pt-1">CAPI Match Quality: 9.2/10</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40">
                <span className="text-[11px] font-mono uppercase text-purple-700 dark:text-purple-400 font-bold block">Blended Campaign ROAS</span>
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">13.2×</span>
                <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold block pt-1">High-Profit Multiplier</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40">
                <span className="text-[11px] font-mono uppercase text-purple-700 dark:text-purple-400 font-bold block">Core Web Vitals Speed</span>
                <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">99 / 100</span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block pt-1">0.7s Mobile LCP</span>
              </div>
            </div>

            {/* Campaign Breakdown Bar */}
            <div className="p-5 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 space-y-3">
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold block uppercase tracking-wider">
                Live Channels // Attributed Real-Time Conversion Streams
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="font-semibold text-slate-900 dark:text-white">Meta Advantage+ Shopping (UAE Malayali Expatriates)</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">18.4× ROAS</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-semibold text-slate-900 dark:text-white">Google Search High-Intent Commercial (Kochi &amp; Kozhikode)</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">11.8× ROAS</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: WhatsApp CRM Preview */}
        {activeTab === 'crm' && (
          <div className="p-5 rounded-2xl bg-white dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-800/30 pb-3">
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider">
                Live Inquiries Synced Directly to Sales Desk WhatsApp
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Average Response Time: 4 minutes
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    W
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Dr. Ananya Nair — Clinic Appointment Booking</span>
                    <span className="text-slate-500 dark:text-purple-300 text-[11px]">Location: Kakkanad, Kochi • Source: Google Maps Local 3-Pack</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400">Verified Phone</span>
                  <span className="text-slate-400">2 mins ago</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    W
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Mr. Faisal Rahman — Luxury Villa Inquiry (Dubai Expat)</span>
                    <span className="text-slate-500 dark:text-purple-300 text-[11px]">Location: Dubai, UAE • Source: Meta Ads Advantage+ Funnel</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">High-Ticket HNI</span>
                  <span className="text-slate-400">14 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
