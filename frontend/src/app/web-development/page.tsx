import type { Metadata } from 'next';
import { Gauge, PencilRuler, Search, Plug, LayoutDashboard, LifeBuoy } from 'lucide-react';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, Steps, RelatedLinks, ContactBlock } from '@/components/ServiceSections';

export const metadata: Metadata = pageMetadata({
  title: 'Web Development Company in Kochi, Kerala | Helix24',
  description: 'Fast, SEO-ready websites and custom web applications built in Next.js by Helix24 in Kochi, with an easy-to-edit CMS. For Kerala and GCC businesses.',
  path: '/web-development',
});

const services = [
  {
    icon: Gauge,
    title: 'Business Websites',
    text: 'Fast, mobile-first websites for service businesses, clinics, builders and retailers. Most visitors in Kerala arrive on a phone, so we design for that first.',
    points: ['Custom design, not a reused template', 'Contact forms and WhatsApp buttons', 'Easy-to-edit content'],
  },
  {
    icon: Search,
    title: 'SEO Built In',
    text: 'Clean page structure, titles, descriptions, schema markup and a sitemap from day one, so Google can understand and rank your pages.',
  },
  {
    icon: PencilRuler,
    title: 'Landing Pages for Ads',
    text: 'Focused pages for Google and Meta campaigns, built to load quickly and turn ad clicks into enquiries.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Applications & Portals',
    text: 'Booking systems, client portals, dashboards and internal tools built around how your team actually works.',
  },
  {
    icon: Plug,
    title: 'Integrations',
    text: 'Connect your site to the tools you already use: Razorpay or Stripe payments, WhatsApp, CRMs such as Zoho, and Google Sheets.',
  },
  {
    icon: LifeBuoy,
    title: 'Hosting & Maintenance',
    text: 'Optional monthly support for updates, backups, security patches and small changes, so your site stays fast and working.',
  },
];

const steps = [
  { title: 'Plan', text: 'We agree on your goals, pages and features, and you get a written scope and timeline.' },
  { title: 'Design', text: 'Page designs for mobile and desktop that you review and approve before we build.' },
  { title: 'Build', text: 'Development in Next.js, with a preview link so you can see progress as it happens.' },
  { title: 'Launch', text: 'Testing on real phones, SEO checks, then launch. The code and domain are yours.' },
];

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'A typical business website takes 2 to 3 weeks from approved design to launch. Larger web applications, portals and dashboards usually take 4 to 8 weeks, with demos at each milestone.',
  },
  {
    q: 'Why do you build with Next.js instead of WordPress?',
    a: 'Next.js sites load quickly, need far fewer plugins and are easier to keep secure. WordPress is still a sensible choice for some businesses, and we will tell you honestly which suits your needs and budget.',
  },
  {
    q: 'Can I update the website content myself?',
    a: 'Yes. We can include a simple content editor so you can change text, photos and blog posts without a developer.',
  },
  {
    q: 'Who owns the website once it is built?',
    a: 'You do. The code, domain and hosting accounts are set up in your name.',
  },
];

export default function WebDevelopmentPage() {
  const jsonLd = serviceSchema({
    name: 'Website Development',
    description: metadata.description as string,
    path: '/web-development',
    serviceType: 'Web Development',
    areaServed: ['Kerala', 'India', 'United Arab Emirates'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Website Development', path: '/web-development' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow="Websites · Landing Pages · Web Apps"
          title="Web Development Company in"
          highlight="Kochi, Kerala"
          intro="Helix24 builds fast, search-friendly websites and web applications for businesses in Kerala and the GCC, designed to turn visitors into enquiries."
          primary={{ label: 'Get a Website Quote', href: '/contact' }}
          whatsappMessage="Hi Helix24, I would like a quote for a website."
        />

        <section aria-labelledby="web-services" className="space-y-10">
          <SectionHeading
            id="web-services"
            title="What we build"
            intro="From a five-page business site to a custom portal, every project starts with what the site needs to do for your business."
          />
          <CardGrid items={services} />
        </section>

        <Steps id="web-process" title="How a website project works" steps={steps} />

        <RelatedLinks
          id="web-related"
          links={[
            { href: '/ecommerce-development', label: 'E-commerce websites' },
            { href: '/mobile-app-development', label: 'Mobile app development' },
            { href: '/digital-marketing-seo', label: 'SEO & Google Ads' },
            { href: '/blog/nextjs-vs-wordpress-website-cost-kerala', label: 'Next.js vs WordPress' },
          ]}
        />

        <Faq id="web-faq" title="Website development FAQs" items={faqs} />

        <section className="space-y-8">
          <ContactBlock
            title="Tell us about your website"
            text="Share what you need and we will reply within 24 hours with questions, a rough timeline and a quote."
          />
          <LeadForm />
        </section>
      </div>
    </>
  );
}
