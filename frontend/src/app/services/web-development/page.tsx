import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { Code, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Website & Next.js Software Development Services | Helix24 Agency',
  description: 'Build fast, secure custom websites, web applications, and enterprise software built for high performance, SEO visibility, and scalable growth in Kerala & GCC.',
};

export default function WebDevServicePage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">High-Speed Digital Solutions</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          Next.js Web & <span className="gradient-text">Custom Software Development</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We build lightning-fast Next.js 14 web applications, NestJS enterprise backends, custom Shopify Plus storefronts, and WooCommerce platforms designed for maximum conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Code className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Next.js & React Web Apps</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Ultra-fast static and server-rendered web platforms with 0.8s load times, perfect lighthouse scores, and deep technical SEO architecture.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> React 18 & Next.js 14 App Router</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100/100 Lighthouse Performance & SEO</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Full Security & Mobile Optimization</li>
          </ul>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <ShoppingBag className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Shopify & WooCommerce E-Commerce</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            High-converting storefronts built for D2C brands, complete with 1-click payment gateways, automated inventory sync, and Google Shopping feed connections.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom Shopify Liquid & WooCommerce Themes</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Payment Gateway Integration (Stripe, Razorpay, COD)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cart & Checkout Conversion Optimization</li>
          </ul>
        </div>
      </div>

      <LeadForm />
    </div>
  );
}
