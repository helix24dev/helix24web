import type { Metadata } from 'next';
import { Briefcase, Search, GraduationCap, Gauge } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import LocationPage, { type LocationContent } from '@/components/LocationPage';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing Agency in Trivandrum | Helix24',
  description: 'B2B lead generation, Google Ads, SEO and web applications for Technopark companies and businesses across Trivandrum (Thiruvananthapuram).',
  path: '/locations/trivandrum',
});

const content: LocationContent = {
  slug: 'trivandrum',
  city: 'Trivandrum',
  crumb: 'Digital Marketing in Trivandrum',
  schemaAreas: ['Thiruvananthapuram', 'Technopark'],
  eyebrow: 'Trivandrum · Technopark · Thiruvananthapuram',
  title: 'Digital Marketing Agency in',
  highlight: 'Trivandrum',
  intro: 'We help Trivandrum businesses, from Technopark companies to schools, clinics and local services, generate leads through Google, social media and better websites.',
  whatsappMessage: 'Hi Helix24, I am looking for digital marketing services in Trivandrum.',
  marketTitle: 'Marketing for B2B and institutions',
  market: [
    'Trivandrum has a large base of technology companies around Technopark and Kazhakoottam, along with government-linked organisations, colleges and hospitals. For many of them, the goal is fewer but better leads: a demo request, an admission enquiry or a consultation booking.',
    'That usually means search ads and SEO aimed at specific services, clear landing pages, and tracking that shows which campaigns bring qualified enquiries rather than just traffic.',
  ],
  services: [
    { icon: Briefcase, title: 'B2B Lead Generation', text: 'Google Ads and landing pages for IT and professional services, with lead tracking.' },
    { icon: GraduationCap, title: 'Education & Admissions', text: 'Campaigns and pages for schools, colleges and training institutes during admission seasons.' },
    { icon: Search, title: 'SEO', text: 'Technical fixes and content so your services rank for the searches your buyers make.' },
    { icon: Gauge, title: 'Websites & Web Apps', text: 'Fast company websites, portals and dashboards built in Next.js.' },
  ],
  areas: ['Technopark', 'Kazhakoottam', 'Kowdiar', 'Pattom', 'Vellayambalam', 'Kesavadasapuram', 'Kovalam', 'Neyyattinkara', 'Kollam'],
  faqs: [
    { q: 'Do you work with Technopark companies?', a: 'Yes. We build websites and run lead generation campaigns for IT and technology companies, including campaigns aimed at clients outside India.' },
    { q: 'Can you run admission campaigns for a college or school in Trivandrum?', a: 'Yes. We plan Google and Meta campaigns around admission dates, with landing pages and enquiry tracking so you can see which courses get interest.' },
    { q: 'Do I need to visit your office?', a: 'No. Our team is based in Kochi and works with Trivandrum clients on WhatsApp, phone and video calls.' },
  ],
};

export default function TrivandrumLocationPage() {
  return <LocationPage c={content} />;
}
