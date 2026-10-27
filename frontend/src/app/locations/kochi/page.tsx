import type { Metadata } from 'next';
import { Search, MapPin, Target, Laptop } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import LocationPage, { type LocationContent } from '@/components/LocationPage';
import { logos } from '@/data/platforms';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing Agency in Kochi, Ernakulam | Helix24',
  description: 'Meta Ads, Google Ads, local SEO and web development for businesses in Kochi, Kakkanad, Infopark and across Ernakulam, from a team in Kochi.',
  path: '/locations/kochi',
});

const content: LocationContent = {
  slug: 'kochi',
  city: 'Kochi',
  crumb: 'Digital Marketing in Kochi',
  schemaAreas: ['Kochi', 'Ernakulam', 'Kakkanad'],
  eyebrow: 'Kochi · Kakkanad · Ernakulam',
  title: 'Digital Marketing Agency in',
  highlight: 'Kochi',
  intro: 'Our registered office is in Kochi. We help local businesses get found on Google, run ads on Instagram and Facebook, and get more calls and WhatsApp enquiries.',
  whatsappMessage: 'Hi Helix24, I am looking for digital marketing services in Kochi.',
  marketTitle: 'Marketing in a competitive city',
  market: [
    'Kochi has more businesses competing for the same searches than anywhere else in Kerala, from clinics and builders in Kakkanad to shops and restaurants around MG Road and Edappally. Showing up in the Google Maps results for your area, and having reviews that back you up, often decides who gets the call.',
    'Many Kochi businesses also sell to Malayalis working in the Gulf, especially in real estate and education. Campaigns can target Kochi and GCC audiences separately, with their own budgets and messages.',
  ],
  services: [
    { icon: MapPin, brands: logos('googleMaps'), title: 'Local SEO & Google Maps', text: 'A complete Google Business Profile and local listings so you appear for searches in your part of Kochi.' },
    { icon: Search, brands: logos('googleAds'), title: 'Google Ads', text: 'Search ads for people in Kochi already looking for your service, with tracked calls and forms.' },
    { icon: Target, brands: logos('facebook', 'instagram'), title: 'Instagram & Facebook Ads', text: 'Meta campaigns targeted by area and interest, with leads sent straight to WhatsApp.' },
    { icon: Laptop, title: 'Websites', text: 'Fast, mobile-first websites and landing pages built to convert local visitors.' },
  ],
  areas: ['Kakkanad', 'Infopark', 'Edappally', 'MG Road', 'Kaloor', 'Vyttila', 'Fort Kochi', 'Aluva', 'Tripunithura', 'Ernakulam North'],
  faqs: [
    { q: 'How do you work with Kochi businesses?', a: 'Our team works from Kochi. Planning, approvals and updates happen on WhatsApp, phone and video calls, with a monthly report on results.' },
    { q: 'Which types of Kochi businesses do you work with?', a: 'Service businesses such as clinics, builders, education providers and professional firms, as well as retailers and restaurants that want more local customers.' },
    { q: 'How do I rank higher on Google Maps in Kochi?', a: 'Complete every section of your Google Business Profile, choose the right categories, post regularly, keep your name, address and phone identical everywhere online, and ask happy customers for reviews. We can handle this for you.' },
  ],
};

export default function KochiLocationPage() {
  return <LocationPage c={content} />;
}
