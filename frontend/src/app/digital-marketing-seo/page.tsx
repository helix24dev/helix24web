import type { Metadata } from 'next';
import { Search, MapPin, Target, ChartColumn, FileText, MessageCircle } from 'lucide-react';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, Steps, RelatedLinks, ContactBlock } from '@/components/ServiceSections';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing & SEO Company in Kerala | Helix24',
  description: 'Google Ads, SEO, local Google Maps ranking and Meta Ads from Helix24, a Kochi-based digital marketing company serving businesses across Kerala and the GCC.',
  path: '/digital-marketing-seo',
});

const services = [
  {
    icon: Search,
    title: 'Google Ads',
    text: 'Search campaigns that show your business when people are already looking for what you sell, with budgets and keywords set around enquiries rather than clicks.',
    points: ['Keyword research for your city and service', 'Negative keywords to stop wasted spend', 'Call and form tracking'],
  },
  {
    icon: FileText,
    title: 'Search Engine Optimisation (SEO)',
    text: 'Fixing the technical basics, writing pages that answer what your customers search for, and building the signals that help Google trust your site.',
    points: ['Technical SEO audit and fixes', 'Service and location page content', 'Monthly ranking and traffic reports'],
  },
  {
    icon: MapPin,
    title: 'Local SEO & Google Maps',
    text: 'A complete, active Google Business Profile, consistent listings across directories and a steady flow of genuine reviews, so you show up for "near me" searches.',
    points: ['Google Business Profile setup and posts', 'Directory listings with matching details', 'Review requests from real customers'],
  },
  {
    icon: Target,
    title: 'Meta Ads',
    text: 'Facebook and Instagram campaigns that reach people before they start searching. See our social media marketing page for content and Reels.',
    points: ['Audience targeting by city or region', 'Lead forms and Click-to-WhatsApp ads', 'Creative testing'],
  },
  {
    icon: ChartColumn,
    title: 'Tracking & Reporting',
    text: 'Google Analytics, Meta Pixel and conversion tracking set up properly, so every report shows where your enquiries actually came from.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Lead Handling',
    text: 'Enquiries from ads and your website routed to WhatsApp, where most Kerala customers prefer to talk, so your team can reply quickly.',
  },
];

const steps = [
  { title: 'Audit', text: 'We review your website, Google Business Profile, past ads and competitors, and agree on goals.' },
  { title: 'Plan', text: 'A channel plan and budget split between Google, Meta and SEO, based on how your customers buy.' },
  { title: 'Launch', text: 'Tracking first, then campaigns, page updates and profile improvements.' },
  { title: 'Review', text: 'Monthly reports on enquiries and cost per lead, with changes made from what the numbers show.' },
];

const faqs = [
  {
    q: 'What is the difference between SEO and Google Ads?',
    a: 'Google Ads puts you at the top of search results straight away, and you pay for each click. SEO improves your free (organic) rankings over a few months and keeps bringing visitors without paying per click. Most businesses use ads for quick enquiries while SEO builds up.',
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'Local SEO and Google Business Profile improvements can show within a few weeks. Ranking for competitive searches usually takes three to six months of steady work, depending on your website and competitors.',
  },
  {
    q: 'Do you manage the ad budget, or do we pay Google and Meta directly?',
    a: 'You pay Google and Meta directly from your own ad accounts, so you always control the spend. Our management fee is separate and agreed upfront.',
  },
  {
    q: 'Can you run campaigns for both Kerala and the GCC?',
    a: 'Yes. Campaigns can target specific cities in Kerala as well as the UAE, Saudi Arabia and other GCC countries, with separate budgets and messaging for each market.',
  },
];

export default function DigitalMarketingSeoPage() {
  const jsonLd = serviceSchema({
    name: 'Digital Marketing & SEO',
    description: metadata.description as string,
    path: '/digital-marketing-seo',
    serviceType: 'Digital Marketing',
    areaServed: ['Kerala', 'United Arab Emirates', 'Saudi Arabia'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Digital Marketing & SEO', path: '/digital-marketing-seo' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow="Google Ads · SEO · Local SEO · Meta Ads"
          title="Digital Marketing & SEO Company in"
          highlight="Kerala"
          intro="Helix24 helps businesses in Kochi, Kozhikode, Trivandrum and the GCC get found on Google and turn that attention into calls, WhatsApp messages and sales."
          primary={{ label: 'Get a Free Marketing Review', href: '/contact' }}
          whatsappMessage="Hi Helix24, I would like to discuss digital marketing for my business."
        />

        <section aria-labelledby="dm-services" className="space-y-10">
          <SectionHeading
            id="dm-services"
            title="What we do"
            intro="Pick one channel or combine them. Everything is set up in your own accounts and measured by the enquiries it brings."
          />
          <CardGrid items={services} />
        </section>

        <Steps id="dm-process" title="How we work" steps={steps} />

        <RelatedLinks
          id="dm-related"
          links={[
            { href: '/social-media-marketing', label: 'Social media marketing' },
            { href: '/web-development', label: 'Website development' },
            { href: '/blog/google-ads-vs-meta-ads-kerala', label: 'Google Ads vs Meta Ads' },
            { href: '/blog/local-seo-kochi-kozhikode-google-maps', label: 'How to rank on Google Maps' },
          ]}
        />

        <Faq id="dm-faq" title="Digital marketing & SEO FAQs" items={faqs} />

        <section className="space-y-8">
          <ContactBlock
            title="Get a free marketing review"
            text="Tell us about your business and goals. We will look at your website, Google profile and ads, and reply with a plan within 24 hours."
          />
          <LeadForm />
        </section>
      </div>
    </>
  );
}
