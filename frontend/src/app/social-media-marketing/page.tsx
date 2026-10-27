import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clapperboard, MessageCircle, Target, CalendarDays, ChartColumn, ChevronDown } from 'lucide-react';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = pageMetadata({
  title: 'Social Media Marketing Agency in Kerala | Helix24',
  description: 'Instagram and Facebook marketing for Kerala businesses: content, Reels, community management and Meta Ads that send enquiries to your WhatsApp.',
  path: '/social-media-marketing',
});

const services = [
  {
    icon: CalendarDays,
    title: 'Social Media Management',
    text: 'A monthly content calendar, post and carousel design, captions and community replies across Instagram and Facebook, so your pages stay active and on-brand without taking up your time.',
  },
  {
    icon: Clapperboard,
    title: 'Instagram Reels & Video Content',
    text: 'Short vertical videos scripted around a clear hook, shot or edited for Reels, YouTube Shorts and ads. Video is where most reach on Instagram comes from today.',
  },
  {
    icon: Target,
    title: 'Meta Ads (Facebook & Instagram Ads)',
    text: 'Paid campaigns targeted by location, interest and behaviour, from your city in Kerala to Malayali audiences in the UAE and Saudi Arabia. Budgets are set around cost per enquiry, not likes.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Lead Funnels',
    text: 'Click-to-WhatsApp ads and instant forms that put interested customers straight into a WhatsApp conversation with your team, which is how most Kerala customers prefer to enquire.',
  },
  {
    icon: ChartColumn,
    title: 'Tracking & Reporting',
    text: 'Meta Pixel and server-side Conversions API set up correctly, so ad results are measured accurately. Reports show enquiries, cost per lead and sales, not just followers.',
  },
];

const steps = [
  { title: 'Review', text: 'We look at your current pages, past ads and competitors, and agree on what a good result looks like for your business.' },
  { title: 'Plan', text: 'A content plan and ad strategy for the month: themes, Reels ideas, offers, audiences and budget.' },
  { title: 'Create & launch', text: 'We produce the posts, videos and ad creatives, publish on schedule and launch campaigns.' },
  { title: 'Measure & improve', text: 'We track enquiries and cost per lead, keep what works, replace what does not, and report back to you.' },
];

const faqs = [
  {
    q: 'What does a social media marketing agency do?',
    a: 'A social media marketing agency plans and creates content for your Instagram and Facebook pages, manages comments and messages, and runs paid ads (Meta Ads) to reach new customers. Helix24 focuses on turning that attention into enquiries on WhatsApp and phone.',
  },
  {
    q: 'Do you handle both organic posting and paid ads?',
    a: 'Yes. Organic content builds trust with people who already follow you, while Meta Ads reach new customers. Most businesses get the best results from both working together, and we can run either one on its own.',
  },
  {
    q: 'Which platforms do you work with?',
    a: 'Mainly Instagram and Facebook, which are where most Kerala customers spend their time, plus WhatsApp for lead handling. We also adapt video content for YouTube Shorts.',
  },
  {
    q: 'Can you target customers in the UAE and Saudi Arabia?',
    a: 'Yes. Meta Ads can target specific cities and audiences in the GCC, including Malayali communities in Dubai, Abu Dhabi and Riyadh, which suits real estate, education and export-focused brands.',
  },
  {
    q: 'How much does social media marketing cost in Kerala?',
    a: 'It depends on how much content you need and your ad budget, which is paid to Meta separately from our management fee. Tell us your goals on WhatsApp or through the contact form and we will send a clear proposal.',
  },
];

export default function SocialMediaMarketingPage() {
  const jsonLd = serviceSchema({
    name: 'Social Media Marketing',
    description: metadata.description as string,
    path: '/social-media-marketing',
    serviceType: 'Social Media Marketing',
    areaServed: ['Kerala', 'United Arab Emirates', 'Saudi Arabia'],
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumbs items={[{ name: 'Social Media Marketing', path: '/social-media-marketing' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <section className="text-center space-y-5 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Instagram · Facebook · WhatsApp</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Social Media Marketing Agency in <span className="gradient-text">Kerala</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200/85 leading-relaxed">
            Helix24 plans, creates and runs social media for businesses in Kochi, Kozhikode, Trivandrum and the GCC: content people actually stop for, and Meta Ads that turn that attention into enquiries on your WhatsApp and phone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg transition-all hover:opacity-95 keep-white">
              <span>Get a Social Media Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:text-white text-sm font-semibold transition-all">
              Estimate Your Ad Results
            </Link>
          </div>
        </section>

        <section aria-labelledby="smm-services" className="space-y-10">
          <div className="space-y-2 max-w-2xl">
            <h2 id="smm-services" className="text-2xl sm:text-4xl font-extrabold text-white font-heading">What our social media marketing includes</h2>
            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed">
              Choose the full service or just the parts you need. Every engagement is measured by the enquiries it brings in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-panel p-7 space-y-3 border border-purple-500/20">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
                  <p className="text-sm text-purple-200/80 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="smm-why" className="glass-panel p-8 sm:p-12 border border-purple-500/20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 id="smm-why" className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Followers are nice. Enquiries pay the bills.</h2>
            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed">
              Plenty of agencies in Kerala can post regularly and report on likes. We set up every campaign around the action that matters to your business, whether that is a WhatsApp message, a call, a store visit or an online order, and we track it properly.
            </p>
            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed">
              You keep full ownership of your pages, ad account and Meta Pixel. If you ever move on, everything stays with you.
            </p>
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-purple-100">
            {[
              'Content planned around your offers and seasons, not filler posts',
              'Reels scripted for the first three seconds, where viewers decide to stay',
              'Ads targeted by city, from Kochi to Dubai',
              'Leads routed straight into WhatsApp',
              'Clear monthly reports on enquiries and cost per lead',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="smm-process" className="space-y-10">
          <h2 id="smm-process" className="text-2xl sm:text-4xl font-extrabold text-white font-heading">How we work</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="glass-panel p-6 space-y-2 border border-purple-500/20">
                <span className="text-xs font-mono font-bold text-purple-400">Step {i + 1}</span>
                <h3 className="text-lg font-bold text-white font-heading">{step.title}</h3>
                <p className="text-sm text-purple-200/80 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="smm-related" className="space-y-6">
          <h2 id="smm-related" className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Related services and guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <Link href="/digital-marketing-seo" className="glass-panel p-5 border border-purple-500/20 hover:border-purple-400/60 text-purple-100 hover:text-white transition-all">Google Ads &amp; SEO services</Link>
            <Link href="/branding-design" className="glass-panel p-5 border border-purple-500/20 hover:border-purple-400/60 text-purple-100 hover:text-white transition-all">Branding &amp; creative design</Link>
            <Link href="/blog/google-ads-vs-meta-ads-kerala" className="glass-panel p-5 border border-purple-500/20 hover:border-purple-400/60 text-purple-100 hover:text-white transition-all">Google Ads vs Meta Ads: which is better?</Link>
            <Link href="/blog/social-media-marketing-cost-kerala" className="glass-panel p-5 border border-purple-500/20 hover:border-purple-400/60 text-purple-100 hover:text-white transition-all">Social media marketing cost in Kerala</Link>
          </div>
        </section>

        <section aria-labelledby="smm-faq" className="max-w-[900px] mx-auto space-y-6">
          <h2 id="smm-faq" className="text-2xl sm:text-3xl font-extrabold text-white font-heading text-center">Social media marketing FAQs</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group glass-panel border border-purple-500/20 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-base sm:text-lg font-semibold text-white">
                  <h3 className="font-heading">{item.q}</h3>
                  <ChevronDown className="w-5 h-5 shrink-0 text-purple-300 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 -mt-1 text-sm sm:text-base text-purple-200/85 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <LeadForm />
      </div>
    </>
  );
}
