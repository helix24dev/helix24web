import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { Code, Zap, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Development Company in Kochi, Kerala | Helix24',
  description: 'Custom responsive web development, web applications, and enterprise software built for high speed, Core Web Vitals performance, and conversion growth in Kerala & GCC.',
};

export default function WebDevelopmentPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          High-Speed Web Platforms & Custom Software
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Website & Custom <span className="gradient-text">Software Development</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We build high-performance, mobile-responsive websites and custom web applications engineered for sub-second page loads, 100/100 Core Web Vitals scores, and maximum lead conversion.
        </p>
      </div>

      {/* Capabilities Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Code className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Custom Web Application Development</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Scalable custom web software tailored to your specific business workflows, admin dashboards, customer portals, and CRM integrations.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Bespoke Frontend & Backend Architecture</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Custom Admin Dashboards & Data Pipelines</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Scalable Database & API Integrations</li>
          </ul>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Zap className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Core Web Vitals & Speed Optimization</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Fast websites rank higher on Google and convert more ad traffic. We optimize asset delivery, image compression, and script execution for sub-second page loads.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Sub-second First Contentful Paint (FCP)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Mobile-First Responsive Design</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Technical On-Page SEO & Schema Markup</li>
          </ul>
        </div>

      </div>

      <LeadForm />
    </div>
  );
}
