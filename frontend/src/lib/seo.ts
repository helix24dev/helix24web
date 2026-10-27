import type { Metadata } from 'next';

export const SITE_URL = 'https://helix24.in';
export const SITE_NAME = 'Helix24 Solutions';

export const OG_IMAGE = {
  url: '/assets/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Helix24 Solutions — Digital Marketing & Web Development in Kerala',
};

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
