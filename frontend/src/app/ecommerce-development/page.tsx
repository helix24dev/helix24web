import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { ShoppingBag, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Commerce Storefront Development (Shopify & WooCommerce) | Helix24',
  description: 'Custom Shopify Plus, Shopify Liquid, and WooCommerce online store development built for high sales conversions, mobile checkout, and ad feed sync in Kerala & GCC.',
};

export default function EcommerceDevelopmentPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-12 space-y-16">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          Shopify & WooCommerce E-Commerce Solutions
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          High-Converting <span className="gradient-text">E-Commerce Storefronts</span>
        </h1>
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
          We build high-converting Shopify and WooCommerce online stores with custom product pages, fast mobile checkouts, Razorpay/Stripe/COD payment gateway setups, and automated Google Shopping feeds.
        </p>
      </div>

      {/* Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <ShoppingBag className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Custom Shopify & WooCommerce Stores</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Tailored e-commerce store design built for high conversion rates, fast product search, custom product filters, and seamless mobile purchasing.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Custom Shopify Liquid & WooCommerce Themes</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Mobile 1-Click Checkout Optimization</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Automated Abandoned Cart Recovery Sequences</li>
          </ul>
        </div>

        <div className="glass-panel p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <CreditCard className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-xl font-bold text-white">Payment & Merchant Feed Integration</h3>
          <p className="text-xs text-purple-200/75 leading-relaxed">
            Integration with leading local and international payment gateways (Razorpay, Stripe, Tap Payments, Cash On Delivery) and automated Meta/Google Shopping catalog feeds.
          </p>
          <ul className="space-y-2 text-xs text-purple-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Multi-Currency & Regional Tax Configuration</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Automated Meta Catalog & Google Merchant Sync</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Courier & Shipping Logistics API Integrations</li>
          </ul>
        </div>

      </div>

      <LeadForm />
    </div>
  );
}
