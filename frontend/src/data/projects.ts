import { Store, ShoppingBag, Stethoscope, Building2, Phone, Laptop, CalendarDays, type LucideIcon } from 'lucide-react';
import { logos, type BrandId } from '@/data/platforms';

// Case studies, shared by the homepage and /results. Written the way a customer would describe them:
// who the client is, the problem in plain words, and how a customer now finds and buys (the journey).
// Outcome figures were removed until each one is confirmed with the client; add confirmed results as
// `results: ['…']`. Client names are kept private, so do not add details the client has not approved.

export type JourneyStep = { label: string; brands?: BrandId[]; icon?: LucideIcon };

export type Project = {
  id: string;
  category: 'retail' | 'healthcare' | 'realestate';
  icon: LucideIcon;
  sector: string;
  region: string;
  title: string;
  problem: string;
  journey: JourneyStep[];
  work: string[];
  results?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'retail-group',
    category: 'retail',
    icon: Store,
    sector: 'Shop with several branches',
    region: 'Kerala',
    title: 'Getting every enquiry to the right branch',
    problem: 'Customers messaged one main number, so enquiries for the other branches were answered late or not at all.',
    journey: [
      { brands: logos('facebook', 'instagram'), label: 'Sees an ad for their nearest branch' },
      { brands: logos('whatsapp'), label: 'Taps to chat on WhatsApp' },
      { icon: Store, label: 'The chat goes straight to that branch' },
    ],
    work: [
      'A website with its own page for each branch',
      'Instagram and Facebook ads shown to people living near each store',
      'WhatsApp set up so each branch gets its own enquiries',
    ],
  },
  {
    id: 'd2c-store',
    category: 'retail',
    icon: ShoppingBag,
    sector: 'Brand selling online',
    region: 'Kerala & GCC',
    title: 'Making an online store easy to buy from on a phone',
    problem: 'Most shoppers came from Instagram on their phones, but the store was slow and checkout took too many steps.',
    journey: [
      { brands: logos('instagram'), label: 'Watches a short video ad' },
      { brands: logos('shopify'), label: 'Shops on a fast, phone-friendly store' },
      { brands: logos('razorpay'), label: 'Pays by UPI or card' },
      { brands: logos('whatsapp'), label: 'Gets a reminder if they leave items in the cart' },
    ],
    work: [
      'A faster store with a shorter checkout',
      'Tracking set up so we can see which ads bring sales',
      'Short video ads and WhatsApp reminders for unfinished orders',
    ],
  },
  {
    id: 'clinic',
    category: 'healthcare',
    icon: Stethoscope,
    sector: 'Specialist clinic',
    region: 'Kochi',
    title: 'Helping a clinic show up on Google Maps',
    problem: 'The clinic rarely appeared when people nearby searched for its treatments, and its ads were paying for searches that never booked.',
    journey: [
      { brands: logos('google'), label: 'Searches for the treatment nearby' },
      { brands: logos('googleMaps'), label: 'Finds the clinic on Google Maps, with reviews' },
      { icon: Phone, label: 'Calls or books an appointment' },
    ],
    work: [
      'Google Business Profile completed and kept up to date',
      'Search ads only for specific treatments in nearby areas',
      'Calls and bookings tracked back to the ad that brought them',
    ],
  },
  {
    id: 'real-estate',
    category: 'realestate',
    icon: Building2,
    sector: 'Home builder',
    region: 'Kochi & GCC',
    title: 'Selling Kerala homes to Malayalis in the Gulf',
    problem: 'Property portals sent many enquiries, but few were serious buyers, and families working abroad were hard to reach.',
    journey: [
      { brands: logos('facebook'), label: 'A Malayali family in Dubai sees the project ad' },
      { icon: Laptop, label: 'Opens a page with plans, photos and price' },
      { brands: logos('whatsapp'), label: 'Gets the brochure on WhatsApp straight away' },
      { icon: CalendarDays, label: 'Books a site visit for their next trip home' },
    ],
    work: [
      'A page for each project with plans, photos and pricing',
      'Facebook and Instagram ads for Malayalis in the UAE and Saudi Arabia',
      'Brochures and site-visit booking sent automatically on WhatsApp',
    ],
  },
];
