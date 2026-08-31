import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { Target, Search, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meta Ads & Social Media Management Agency Kerala (Kochi & Kozhikode) — Helix24',
  description: 'Drive high-ROI Meta Ads (Facebook & Instagram), Social Media Management (SMM), Google Ads PPC, and Local SEO for businesses in Kerala, UAE & GCC.',
};

export default function MetaAdsServicePage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">High-ROI Paid Social & Search</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Meta Ads, SMM & <span className="gradient-text">Google Ads Performance</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We build full-funnel lead generation campaigns across Meta (Facebook & Instagram) and Google Search PPC, integrated with Server-Side CAPI tracking and automated WhatsApp conversion funnels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Target className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Meta Ads & Lead Funnels</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Custom ad video creatives, Instagram Reels production, target audience segmentation, and Click-to-WhatsApp direct lead conversion.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Server-Side Meta CAPI Integration</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instagram Reels Ad Video Production</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> WhatsApp Direct Lead Funnel Setup</li>
          </ul>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Search className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Google Ads & Local SEO</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Capture high-intent search traffic on Google Search PPC and dominate local Map pack rankings in Kochi, Ernakulam, and Kozhikode.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> High-Intent Search Keyword Management</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Google Maps Local 3-Pack Optimization</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Negative Keyword & Bid Management</li>
          </ul>
        </div>
      </div>

      <LeadForm />
    </div>
  );
}
