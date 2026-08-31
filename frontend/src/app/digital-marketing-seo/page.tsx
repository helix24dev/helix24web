import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { Target, Share2, Search, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing, Meta Ads & Google Ads Agency | Helix24',
  description: 'Drive high-ROI lead funnels with Helix24. Specialized Meta Ads (Facebook & Instagram), Social Media Management (SMM), Google Ads PPC, and Local SEO for Kerala & GCC.',
};

export default function DigitalMarketingSeoPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          Meta Ads • Social Media Management • Google Ads • Local SEO
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Performance Marketing & <span className="gradient-text">Meta Ads Agency</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We run high-converting Meta ad funnels, end-to-end Social Media Management, Google Ads Search PPC, and Local SEO — capturing leads across <strong>Kochi, Kozhikode, Kerala, UAE, and the GCC</strong>.
        </p>
      </div>

      {/* Specialization Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Meta Ads */}
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Target className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Meta Ads & Lead Funnels</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Data-driven Facebook & Instagram ad campaigns paired with server-side Conversion API (CAPI) tracking, custom Reels video ad creatives, and direct WhatsApp lead conversion.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Server-Side Meta CAPI Integration</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Custom Instagram Reels & Graphic Creatives</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Click-to-WhatsApp Direct Conversion Funnels</li>
          </ul>
        </div>

        {/* Social Media Management */}
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Share2 className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Social Media Management (SMM)</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            End-to-end brand management: Instagram Reels production, aesthetic feed curation, carousel graphics, community moderation, and transparent ROI reporting.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Weekly Instagram Reels & Story Strategy</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Content Calendar & Brand Messaging</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Audience Engagement & Follower Growth</li>
          </ul>
        </div>

        {/* Google Ads */}
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Search className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Google Ads PPC & Search</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Target high-intent customers actively searching for your services on Google Search. Continuous negative keyword filtering, bid management, and conversion tracking.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> High-Intent Search Term Bidding</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Performance Max & Display Campaigns</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Negative Keyword Optimization</li>
          </ul>
        </div>

        {/* Local SEO */}
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <TrendingUp className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Local SEO & Google Maps Ranking</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Dominate the Google 3-Pack Map Results in Kochi, Ernakulam, Kozhikode, and Calicut. Google Business Profile optimization, review automation, and LocalBusiness JSON-LD schema.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Google Business Profile (GBP) Management</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Local Map Pack 3-Rank Strategy</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Local Keyword & Structured Data Schema</li>
          </ul>
        </div>

      </div>

      <LeadForm />
    </div>
  );
}
