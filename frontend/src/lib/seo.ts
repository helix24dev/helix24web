import type { Metadata } from 'next';

export const SITE_URL = 'https://helix24.in';
export const SITE_NAME = 'Helix24 Solutions';

export const OG_IMAGE = {
  url: '/assets/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Helix24 Solutions — Digital Marketing & Web Development in Kerala',
};

// One business entity, defined once (in the root layout) and referenced everywhere else by @id,
// so search engines and AI systems see a single consistent organisation rather than several variants.
export const ORG_ID = `${SITE_URL}/#organization`;
export const GBP_URL = 'https://share.google/9wuyhr3TC4Utsw4V1';
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'Helix24 Solutions Pvt Ltd',
      alternateName: ['Helix24', 'Helix24 Solutions'],
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png` },
      image: `${SITE_URL}${OG_IMAGE.url}`,
      description:
        'Digital marketing and web development company in Kochi, Kerala: Meta Ads, Google Ads, SEO, websites, online stores and mobile apps for businesses in Kerala and the GCC.',
      telephone: '+91 9048009044',
      email: 'info@helix24.in',
      identifier: [
        { '@type': 'PropertyValue', name: 'CIN', value: 'U62011KL2026PTC107185' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kochi',
        addressRegion: 'Kerala',
        postalCode: '682030',
        addressCountry: 'IN',
      },
      hasMap: GBP_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 9048009044',
        email: 'info@helix24.in',
        contactType: 'sales',
        areaServed: ['IN', 'AE', 'SA'],
        availableLanguage: ['English'],
      },
      areaServed: [
        { '@type': 'City', name: 'Kochi' },
        { '@type': 'City', name: 'Kozhikode' },
        { '@type': 'City', name: 'Thiruvananthapuram' },
        { '@type': 'State', name: 'Kerala' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
      // Official profiles: keep in sync when a profile URL changes
      sameAs: [
        'https://www.linkedin.com/company/helix24-solutions/',
        'https://www.instagram.com/helix24solutions/',
        'https://www.facebook.com/profile.php?id=61591480144101',
        GBP_URL,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-IN',
      publisher: { '@id': ORG_ID },
    },
  ],
};

// Service schema for service and location pages; the provider points at the single organisation entity.
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = ['Kerala'],
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: areaServed.map((place) => ({ '@type': 'Place', name: place })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

// Next.js replaces (not merges) the layout's openGraph/twitter when a page sets its own,
// so every page builds the full set here to get its own title, description and URL in link previews.
// Keep titles under ~60 characters and descriptions under ~160 so Google doesn't truncate them.
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'en_IN',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
