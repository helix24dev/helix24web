import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { Palette, PenTool, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Branding & UI/UX Design Services | Helix24 Agency',
  description: 'Elevate your business identity with Helix24. Logo design, brand strategy guidelines, web design systems, and conversion-focused UI/UX interfaces.',
};

export default function BrandingDesignPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          Visual Identity & Modern UI/UX Design Systems
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Brand Design & <span className="gradient-text">User Interface (UI/UX)</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We craft memorable brand identities, modern vector logo marks, typography standards, and interactive UI/UX interfaces that command trust and drive engagement across all screens.
        </p>
      </div>

      {/* Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Palette className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Logo & Brand Identity Systems</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Memorable logo design, color palettes, vector brand marks, typography guidelines, and digital brand style guides for web and print.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Custom Logo Marks & Vector Assets</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Brand Color Palette & Typography Rules</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Social Media & Ad Banner Creative Guidelines</li>
          </ul>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <PenTool className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">UI/UX Wireframing & Design Systems</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Figma prototypes, interactive wireframes, user journey mapping, and scalable UI component libraries validated before development.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Figma Interactive Wireframes & Prototypes</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Scalable UI Component Systems</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Conversion-Focused User Experience Design</li>
          </ul>
        </div>

      </div>

      <LeadForm />
    </div>
  );
}
