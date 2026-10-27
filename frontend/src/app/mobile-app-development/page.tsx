import type { Metadata } from 'next';
import { Smartphone, Server, Bell, Store, PencilRuler, LifeBuoy } from 'lucide-react';
import { pageMetadata, serviceSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import { PageHero, SectionHeading, CardGrid, Steps, RelatedLinks, ContactBlock } from '@/components/ServiceSections';
import { logos } from '@/data/platforms';

export const metadata: Metadata = pageMetadata({
  title: 'Mobile App Development Company in Kochi, Kerala | Helix24',
  description: 'iOS, Android and Flutter app development by Helix24 in Kochi, with native performance, push notifications and App Store and Play Store launch support.',
  path: '/mobile-app-development',
});

const services = [
  {
    icon: Smartphone,
    brands: logos('apple', 'android'),
    title: 'iOS & Android Apps',
    text: 'One codebase in Flutter or React Native for both platforms, which keeps cost and timelines down without giving up a native feel.',
    points: ['Booking, delivery and shopping apps', 'Camera, location and login features', 'Works offline where needed'],
  },
  {
    icon: PencilRuler,
    brands: logos('figma'),
    title: 'App Design',
    text: 'Screens designed and prototyped in Figma, so you can tap through the app and approve it before development starts.',
  },
  {
    icon: Server,
    brands: logos('firebase'),
    title: 'Backend & Admin Panel',
    text: 'The server, database and admin dashboard your team needs to manage users, orders and content.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    text: 'Order updates, reminders and offers sent to users through Firebase notifications.',
  },
  {
    icon: Store,
    brands: logos('appStore', 'googlePlay'),
    title: 'App Store & Play Store Launch',
    text: 'We prepare listings, screenshots and submissions, and handle review feedback from Apple and Google.',
  },
  {
    icon: LifeBuoy,
    title: 'Updates & Support',
    text: 'Bug fixes, OS updates and new features after launch, on a monthly plan or as needed.',
  },
];

const steps = [
  { title: 'Scope', text: 'Features, users and budget agreed, with a written scope and timeline.' },
  { title: 'Design', text: 'Clickable Figma prototype for you to review on your phone.' },
  { title: 'Build', text: 'App and backend development with regular test builds you can install.' },
  { title: 'Launch', text: 'Store submission, launch and a support period for fixes.' },
];

const faqs = [
  {
    q: 'How long does it take to build a mobile app?',
    a: 'A simple app usually takes 6 to 10 weeks. Apps with payments, real-time tracking or complex admin panels take longer. We give you a timeline after scoping.',
  },
  {
    q: 'Should I build a native app or a cross-platform app?',
    a: 'For most businesses, a cross-platform app in Flutter or React Native is the better value: one codebase covers both iPhone and Android. Fully native apps make sense for very graphics-heavy or hardware-specific features.',
  },
  {
    q: 'Do you publish the app to the App Store and Play Store?',
    a: 'Yes. We prepare the listings and handle the submission. The developer accounts are created in your business name so you own the apps.',
  },
];

export default function MobileAppDevelopmentPage() {
  const jsonLd = serviceSchema({
    name: 'Mobile App Development',
    description: metadata.description as string,
    path: '/mobile-app-development',
    serviceType: 'Mobile Application Development',
    areaServed: ['Kerala', 'India', 'United Arab Emirates'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Mobile App Development', path: '/mobile-app-development' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-20">
        <PageHero
          eyebrow="iOS · Android · Flutter · React Native"
          title="Mobile App Development in"
          highlight="Kochi, Kerala"
          intro="Helix24 designs and builds mobile apps for businesses in Kerala and the GCC, from booking and delivery apps to customer loyalty and shopping apps."
          primary={{ label: 'Discuss Your App Idea', href: '/contact' }}
          whatsappMessage="Hi Helix24, I would like to discuss a mobile app."
        />

        <section aria-labelledby="app-services" className="space-y-10">
          <SectionHeading id="app-services" title="What we offer" intro="Design, development and launch handled by one team." />
          <CardGrid items={services} />
        </section>

        <Steps id="app-process" title="How an app project works" steps={steps} />

        <RelatedLinks
          id="app-related"
          links={[
            { href: '/web-development', label: 'Website development' },
            { href: '/ecommerce-development', label: 'E-commerce websites' },
            { href: '/branding-design', label: 'Branding & design' },
            { href: '/contact', label: 'Contact our team' },
          ]}
        />

        <Faq id="app-faq" title="Mobile app FAQs" items={faqs} />

        <section className="space-y-8">
          <ContactBlock title="Tell us about your app" text="Share your idea and we will reply within 24 hours with questions and next steps." />
          <LeadForm />
        </section>
      </div>
    </>
  );
}
