import type { Metadata } from 'next';
import { Palette, PencilRuler, Clapperboard, Image as ImageIcon, BookOpen, Package } from 'lucide-react';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, RelatedLinks, ContactBlock } from '@/components/ServiceSections';

export const metadata: Metadata = pageMetadata({
  title: 'Branding & UI/UX Design Agency in Kochi | Helix24',
  description: 'Brand identity, logo design, Figma UI/UX prototypes and vertical video Reels for your business, from Helix24 in Kochi, Kerala.',
  path: '/branding-design',
});

const services = [
  {
    icon: Palette,
    title: 'Logo & Brand Identity',
    text: 'A logo, colour palette and type choices that work everywhere: on your signboard, website, Instagram and invoices.',
    points: ['Logo concepts and revisions', 'Colour and font system', 'Files for print and digital'],
  },
  {
    icon: BookOpen,
    title: 'Brand Guidelines',
    text: 'A short guide showing how to use your logo, colours and tone, so everything your team produces looks consistent.',
  },
  {
    icon: PencilRuler,
    title: 'Website & App Design (UI/UX)',
    text: 'Page and screen designs in Figma, built around what your customers need to find and do.',
  },
  {
    icon: Clapperboard,
    title: 'Reels & Video Ads',
    text: 'Short vertical videos and motion graphics for Instagram, Facebook and YouTube Shorts, planned around a clear opening hook.',
  },
  {
    icon: ImageIcon,
    title: 'Social Media Creatives',
    text: 'Post, carousel and ad designs in your brand style, ready for organic posting or paid campaigns.',
  },
  {
    icon: Package,
    title: 'Print & Packaging',
    text: 'Business cards, brochures, signage and packaging that match the rest of your brand.',
  },
];

const faqs = [
  {
    q: 'How long does a logo and brand identity take?',
    a: 'Usually 2 to 3 weeks, including first concepts, your feedback and final files. A full brand guide can add another week.',
  },
  {
    q: 'What files will I receive?',
    a: 'Your logo in vector (SVG, PDF, AI) and image formats (PNG, JPG), in colour, black and white versions, plus your colour codes and fonts.',
  },
  {
    q: 'Do you also make video content for Instagram?',
    a: 'Yes. We script, edit and design Reels and short video ads, and can run them as part of our social media marketing service.',
  },
];

export default function BrandingDesignPage() {
  const jsonLd = serviceSchema({
    name: 'Branding & Design',
    description: metadata.description as string,
    path: '/branding-design',
    serviceType: 'Graphic Design',
    areaServed: ['Kerala', 'India', 'United Arab Emirates'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Branding & Design', path: '/branding-design' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow="Logos · Brand Identity · UI/UX · Video"
          title="Branding & Design Agency in"
          highlight="Kochi"
          intro="Helix24 creates logos, brand identities, website designs and video content that help growing businesses look as good as the work they do."
          primary={{ label: 'Discuss Your Brand', href: '/contact' }}
          whatsappMessage="Hi Helix24, I would like to discuss branding and design."
        />

        <section aria-labelledby="brand-services" className="space-y-10">
          <SectionHeading id="brand-services" title="What we design" intro="Start with a logo, or bring us in for your full brand, website and content." />
          <CardGrid items={services} />
        </section>

        <RelatedLinks
          id="brand-related"
          links={[
            { href: '/social-media-marketing', label: 'Social media marketing' },
            { href: '/web-development', label: 'Website development' },
            { href: '/mobile-app-development', label: 'Mobile app design' },
            { href: '/contact', label: 'Contact our team' },
          ]}
        />

        <Faq id="brand-faq" title="Branding & design FAQs" items={faqs} />

        <section className="space-y-8">
          <ContactBlock title="Tell us about your brand" text="Share what you have today and where you want to go. We will reply within 24 hours." />
          <LeadForm />
        </section>
      </div>
    </>
  );
}
