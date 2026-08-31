import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { Smartphone, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile App Development Services (iOS & Android) | Helix24 Agency',
  description: 'Custom iOS, Android, and cross-platform mobile application development engineered for high performance, smooth UI, and app store growth in Kerala & GCC.',
};

export default function MobileAppDevelopmentPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          iOS, Android & Cross-Platform Applications
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Mobile App Engineering for <span className="gradient-text">iOS & Android</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We engineer high-performance mobile applications — from on-demand booking systems and logistics tracking to SaaS product companions and e-commerce apps.
        </p>
      </div>

      {/* Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Smartphone className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Cross-Platform Flutter Development</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Single codebase targeting iOS and Android simultaneously with native 60fps rendering, reducing time-to-market and development costs.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Native 60fps UI Performance</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Unified iOS & Android Codebase</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Push Notifications & Offline Sync</li>
          </ul>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Layers className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">App Store Optimization (ASO)</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            End-to-end App Store Optimization (ASO), metadata configuration, app store screenshot designs, and review automation that drive organic app downloads.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Apple App Store & Google Play Submission</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> In-App Payment Gateway Integration</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> User Analytics & Behavior Tracking</li>
          </ul>
        </div>

      </div>

      <LeadForm />
    </div>
  );
}
