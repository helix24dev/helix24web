import { Store, ShoppingBag, Stethoscope, Building2, type LucideIcon } from 'lucide-react';

// Case studies, shared by the homepage and /results: who the client is, the problem in one line, and how a
// customer now finds and buys, as a few short steps. Keep it short; the steps carry the story.
// Outcome figures were removed until each one is confirmed with the client; add confirmed results as
// `results: ['…']`. Client names are kept private, so do not add details the client has not approved.

export type Project = {
  id: string;
  category: 'retail' | 'healthcare' | 'realestate';
  icon: LucideIcon;
  sector: string;
  region: string;
  title: string;
  problem: string;
  journey: string[];
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
    problem: 'Enquiries all went to one number, so other branches replied late or not at all.',
    journey: ['Instagram or Facebook ad', 'WhatsApp chat', 'Nearest branch replies'],
  },
  {
    id: 'd2c-store',
    category: 'retail',
    icon: ShoppingBag,
    sector: 'Brand selling online',
    region: 'Kerala & GCC',
    title: 'Making an online store easy to buy from on a phone',
    problem: 'Shoppers came from Instagram on their phones, but the store was slow and checkout was long.',
    journey: ['Instagram video ad', 'Quick phone checkout', 'UPI or card payment', 'WhatsApp cart reminder'],
  },
  {
    id: 'clinic',
    category: 'healthcare',
    icon: Stethoscope,
    sector: 'Specialist clinic',
    region: 'Kochi',
    title: 'Helping a clinic show up on Google Maps',
    problem: 'People searching nearby rarely found the clinic, and its ads paid for searches that never booked.',
    journey: ['Google search nearby', 'Google Maps listing', 'Call or booking'],
  },
  {
    id: 'real-estate',
    category: 'realestate',
    icon: Building2,
    sector: 'Home builder',
    region: 'Kochi & GCC',
    title: 'Selling Kerala homes to Malayalis in the Gulf',
    problem: 'Portals sent plenty of enquiries, but few serious buyers, and families abroad were hard to reach.',
    journey: ['Facebook ad in the Gulf', 'Project page', 'Brochure on WhatsApp', 'Site visit on their trip home'],
  },
];
