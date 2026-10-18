import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { Smartphone, CheckCircle2, Layers, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mobile App Development in Kochi, Kerala | iOS & Android | Helix24',
  description: 'Custom iOS, Android, and Flutter cross-platform mobile application development by Helix24 Solutions Pvt Ltd. 60fps native performance, push CRM, and app store deployment in Kerala & GCC.',
  keywords: 'mobile app development company kochi, flutter app developers kerala, ios app development kochi, android app development calicut, react native agency kerala',
};

export default function MobileAppDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App Development Services',
    serviceType: 'Mobile Application Development',
    provider: {
      '@type': 'Corporation',
      name: 'Helix24 Solutions Pvt Ltd',
      url: 'https://helix24.com',
      telephone: '+91 9048009044',
      taxID: 'AAJCH0136Q',
      hasMap: 'https://share.google/bRqB2ePsNrm8f73wR',
    },
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Kozhikode' },
      { '@type': 'State', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Hero */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              NATIVE 60FPS FLUTTER & REACT NATIVE APPS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Mobile App Development in <span className="gradient-text">Kochi, Kerala</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            From on-demand booking systems and logistics tracking to D2C mobile shopping apps. <strong>Helix24 Solutions Pvt Ltd</strong> builds fast, crash-resilient <strong>iOS and Android applications</strong> with seamless NestJS backend APIs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Get Mobile App Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <section className="space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Mobile App Architecture</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Cross-Platform Engineering for iOS &amp; Android</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Cross-Platform Flutter & React Native</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Target both iOS and Android simultaneously with one clean codebase. Enjoy buttery 60fps animations, native hardware access, and reduced development costs.
            </p>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Unified iOS & Android development</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Native device camera, GPS & biometric authentication</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Offline data caching with SQLite/Hive</li>
            </ul>
          </div>

          <div className="glass-panel p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Real-Time Backend & Push Notification CRM</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Reliable NestJS cloud APIs, real-time WebSockets, Firebase Cloud Messaging (FCM), and automated user retention triggers.
            </p>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Sub-second REST & GraphQL API response</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated push notification sequences via FCM</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Secure JWT token authorization</li>
            </ul>
          </div>

          <div className="glass-panel p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">App Store & Play Store Deployment</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              We manage the entire submission pipeline: Apple App Store guidelines compliance, Google Play Console setup, App Store Optimization (ASO), and crashlytics.
            </p>
            <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100% App Store approval guarantee</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> App Store keyword optimization (ASO)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Crashlytics & performance monitoring</li>
            </ul>
          </div>
        </div>
      </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Launch Your <span className="gradient-text">Mobile Application</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Tell us about your app concept. Helix24 Solutions Pvt Ltd will provide a comprehensive technical scoping document and timeline.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
