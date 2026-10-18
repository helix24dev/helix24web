import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import { 
  ShoppingBag, 
  CreditCard, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Truck, 
  RefreshCw, 
  MessageCircle, 
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Commerce Website Development in Kochi, Kerala | Shopify & WooCommerce | Helix24',
  description: 'Helix24 Solutions Pvt Ltd builds high-converting Shopify Plus, WooCommerce, and Headless Next.js online stores. Fast mobile checkouts, Razorpay/Stripe, WhatsApp cart recovery, and Meta CAPI sync for Kerala & GCC.',
  keywords: 'ecommerce website development kerala, shopify development company kochi, woocommerce developers kerala, headless ecommerce nextjs, shopify plus agency kerala, d2c ecommerce development kochi',
};

export default function EcommerceDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-Commerce Website Development Services',
    serviceType: 'E-Commerce Development',
    provider: {
      '@type': 'Corporation',
      name: 'Helix24 Solutions Pvt Ltd',
      url: 'https://helix24.in',
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
    description: 'High-converting custom Shopify and headless e-commerce store engineering with integrated payment gateways, courier logistics, and Meta CAPI catalog feeds.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Should I choose Shopify or WooCommerce for my e-commerce business in Kerala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most D2C brands, Shopify is the superior choice due to its high server reliability, built-in security, and frictionless 1-click checkout. WooCommerce is ideal if you require 100% data ownership and bespoke database customizations. We also build Headless Next.js storefronts that combine Shopify backend with blazing 0.8s frontend speed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which payment gateways do you integrate for India and the GCC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For India, we configure Razorpay, Cashfree, PayU, and automated Cash on Delivery (COD) OTP verification. For UAE and the GCC, we integrate Stripe, Tap Payments, and Buy Now Pay Later (BNPL) providers like Tabby and Tamara.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you handle abandoned cart recovery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We set up automated WhatsApp Cloud API recovery flows with discount triggers alongside multi-stage email sequences. This consistently recovers 15% to 28% of abandoned checkouts.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-10 space-y-20">
        
        {/* Hero Header */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="hud-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              HIGH-CONVERTING SHOPIFY & HEADLESS COMMERCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            E-Commerce Storefront Development in <span className="gradient-text">Kerala & GCC</span>
          </h1>

          <p className="text-base sm:text-lg text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
            Stop losing shoppers at the checkout page. <strong>Helix24 Solutions Pvt Ltd</strong> engineers ultra-fast <strong>Shopify Plus, WooCommerce, and Headless Next.js</strong> storefronts with 1-click mobile checkouts, automated WhatsApp cart recovery, and seamless Meta catalog synchronization.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-900/40 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <span>Build Your E-Commerce Store</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/results"
              className="px-6 py-3.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 hover:text-white text-sm font-semibold transition-all flex items-center gap-2"
            >
              <span>View E-Commerce Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* E-Commerce Benchmarks */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-emerald-400">+28%</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Checkout Conversion</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-white">36.9×</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Peak Ad ROAS</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-purple-300">&lt;1.0s</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Mobile Load Time</span>
            </div>
            <div className="glass-panel p-4 text-center">
              <span className="block font-mono text-2xl font-bold text-amber-400">1-Click</span>
              <span className="text-[11px] uppercase tracking-wider text-purple-300/70">Instant Pay Gateways</span>
            </div>
          </div>
        </div>

        {/* Core E-Commerce Solutions Bento Grid */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Our E-Commerce Stack</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Engineered For Higher Average Order Value (AOV)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Custom Shopify Liquid & Plus */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Custom Shopify & Shopify Plus</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                Tailored Shopify Liquid themes built without heavy bloated apps. Custom product bundle builders, sticky mobile add-to-cart bars, and rapid checkout flows.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom Shopify Liquid theme development</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Sticky mobile cart & 1-click upsells</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Multi-currency support (INR, AED, SAR, USD)</li>
              </ul>
            </div>

            {/* 2. Headless Next.js Commerce */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Headless Next.js Commerce</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                For high-volume brands seeking zero lag. Next.js App Router frontend connected to Shopify or MedusaJS backend via GraphQL. Sub-second transitions and instant product discovery.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Instant instant-page transitions & prefetching</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Unlimited design freedom without template limits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Built-in technical e-commerce SEO schema</li>
              </ul>
            </div>

            {/* 3. Automated WhatsApp Cart Recovery */}
            <div className="glass-panel p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">WhatsApp Automated Retention</h3>
              <p className="text-xs text-purple-200/75 leading-relaxed">
                98% of WhatsApp messages are opened within 3 minutes. We build automated abandoned checkout notifications, order tracking links, and COD confirmation bots.
              </p>
              <ul className="space-y-2 text-xs text-purple-300/80 pt-2 border-t border-purple-900/30">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Official WhatsApp Cloud API integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated COD to prepaid conversion offers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Automated shipping updates via Shiprocket</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Payment & Logistics Integration Ecosystem */}
        <section className="glass-panel p-10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">End-To-End Infrastructure</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Integrated With Leading Gateways & Logistics Providers</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <CreditCard className="w-6 h-6 text-purple-400" />
              <h4 className="font-bold text-white text-sm">Payment Gateways</h4>
              <p className="text-[11px] text-purple-200/70">Razorpay, Cashfree, PayU, Stripe, Apple Pay, Google Pay.</p>
            </div>
            <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h4 className="font-bold text-white text-sm">GCC BNPL Providers</h4>
              <p className="text-[11px] text-purple-200/70">Tabby, Tamara, Tap Payments for UAE, Saudi, and Kuwait shoppers.</p>
            </div>
            <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <Truck className="w-6 h-6 text-purple-400" />
              <h4 className="font-bold text-white text-sm">Logistics & Shipping</h4>
              <p className="text-[11px] text-purple-200/70">Shiprocket, Delhivery, Bluedart, DHL Express with automated tracking.</p>
            </div>
            <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-800/30 space-y-2">
              <RefreshCw className="w-6 h-6 text-purple-400" />
              <h4 className="font-bold text-white text-sm">Meta & Google Feeds</h4>
              <p className="text-[11px] text-purple-200/70">Live dynamic product catalog sync for high-converting retargeting ads.</p>
            </div>
          </div>
        </section>

        {/* E-Commerce Case Study Highlight */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs uppercase">
                <span>Featured E-Commerce Case</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                How a Kerala D2C Brand Scaled to 36.9× Peak ROAS
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/75 leading-relaxed">
                By rebuilding their store on an optimized fast-loading framework, implementing Server-Side Meta CAPI tracking, and automating WhatsApp cart recovery, we drove 5,316 orders in 9 months while reducing ad acquisition costs by 38%.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-purple-900/40 border border-purple-700/40 text-purple-200">5,316 Verified Orders</span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-900/40 border border-purple-700/40 text-purple-200">₹1.8 Cr+ Net Revenue</span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-900/40 border border-purple-700/40 text-emerald-300 font-bold">36.9× Peak ROAS</span>
              </div>
            </div>

            <div className="space-y-4 bg-purple-950/40 p-6 rounded-2xl border border-purple-800/30">
              <h4 className="font-bold text-white text-sm">Key Optimizations Implemented:</h4>
              <ul className="space-y-2.5 text-xs text-purple-200/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Eliminated 11 bloated apps, speeding up checkout by 2.4 seconds on 4G connections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Configured First-Party Meta CAPI with 9.2/10 Event Match Quality score on purchases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automated COD confirmation on WhatsApp to reduce Return-To-Origin (RTO) rates by 22%.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">E-Commerce Development FAQs</h2>
          </div>

          <div className="space-y-4">
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>Should I choose Shopify or WooCommerce for my brand?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                For most fast-growing D2C brands, Shopify is the superior choice due to its high server reliability, bank-grade security, and 1-click checkout. WooCommerce is great if you require 100% data hosting control. We build on both platforms based on your scale.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>Can you integrate WhatsApp order updates and cart recovery?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                Yes. We configure the official WhatsApp Cloud API to automatically send abandoned cart recovery discounts, order confirmations, and live courier tracking links.
              </p>
            </div>
            <div className="glass-panel p-6 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>How do you ensure our store syncs with Instagram and Google Shopping?</span>
                <ChevronDown className="w-4 h-4 text-purple-400" />
              </h3>
              <p className="text-xs text-purple-200/75 leading-relaxed pt-1">
                We build automated dynamic XML and API product feeds that sync your real-time inventory, pricing, and variant data directly with Meta Commerce Manager and Google Merchant Center.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="glass-panel p-8 sm:p-12 border border-purple-500/30">
          <div className="text-center space-y-3 max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Launch Your High-Converting <span className="gradient-text">Storefront</span>
            </h2>
            <p className="text-xs text-purple-200/70">
              Tell us about your brand and product catalog. Helix24 Solutions Pvt Ltd will provide a tailored e-commerce blueprint within 24 hours.
            </p>
          </div>
          <LeadForm />
        </section>

      </div>
    </>
  );
}
