// Contact details and profiles from /content/settings.json (CMS: Site settings). Small on purpose: client
// components (the floating WhatsApp button) import this instead of the full content module.
import settingsJson from '../../content/settings.json';

export type Settings = {
  companyName: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: { locality: string; region: string; postalCode: string; country: string };
  hours: string;
  cin: string;
  googleBusinessProfile: string;
  social: { linkedin: string; instagram: string; facebook: string };
  servingLine: string;
  footerText: string;
};

export const SETTINGS = settingsJson as Settings;

export function whatsappLink(message?: string) {
  return `https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(message || SETTINGS.whatsappMessage)}`;
}

export const phoneHref = () => `tel:${SETTINGS.phone.replace(/[^\d+]/g, '')}`;
