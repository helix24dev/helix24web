// Platforms Helix24 works with: used by the logo wall and the "Built with" rows on project cards.
// Logos live in /public/assets/platforms: Wikimedia Commons (public domain; Next.js CC BY-SA 4.0),
// devicon v2.16.0 (MIT) and Simple Icons 13.21.0 (CC0). These are not partner certifications:
// only add a "Partner" badge once a certification is real.
// `wordmark` logos already spell the brand name, so the name is not repeated as text beside them.

export type Platform = { name: string; src: string; width: number; height: number; wordmark?: boolean };

export const PLATFORMS = {
  googleAds: { name: 'Google Ads', src: '/assets/platforms/google-ads.svg', width: 251, height: 232 },
  meta: { name: 'Meta', src: '/assets/platforms/meta.svg', width: 948, height: 191, wordmark: true },
  facebook: { name: 'Facebook', src: '/assets/platforms/facebook.svg', width: 667, height: 667 },
  instagram: { name: 'Instagram', src: '/assets/platforms/instagram.svg', width: 1000, height: 1000 },
  whatsapp: { name: 'WhatsApp', src: '/assets/platforms/whatsapp.svg', width: 64, height: 64 },
  analytics: { name: 'Google Analytics', src: '/assets/platforms/google-analytics.svg', width: 24, height: 24 },
  figma: { name: 'Figma', src: '/assets/platforms/figma.svg', width: 128, height: 128 },
  nextjs: { name: 'Next.js', src: '/assets/platforms/nextjs.svg', width: 394, height: 80, wordmark: true },
  react: { name: 'React', src: '/assets/platforms/react.svg', width: 128, height: 128 },
  wordpress: { name: 'WordPress', src: '/assets/platforms/wordpress.svg', width: 24, height: 24 },
  shopify: { name: 'Shopify', src: '/assets/platforms/shopify.svg', width: 612, height: 192, wordmark: true },
  woocommerce: { name: 'WooCommerce', src: '/assets/platforms/woocommerce.svg', width: 128, height: 128 },
  razorpay: { name: 'Razorpay', src: '/assets/platforms/razorpay.svg', width: 1896, height: 401, wordmark: true },
  flutter: { name: 'Flutter', src: '/assets/platforms/flutter.svg', width: 128, height: 128 },
  nodejs: { name: 'Node.js', src: '/assets/platforms/nodejs.svg', width: 128, height: 128 },
  firebase: { name: 'Firebase', src: '/assets/platforms/firebase.svg', width: 128, height: 128 },
  aws: { name: 'AWS', src: '/assets/platforms/aws.svg', width: 128, height: 77, wordmark: true },
  googleCloud: { name: 'Google Cloud', src: '/assets/platforms/google-cloud.svg', width: 128, height: 128 },
  docker: { name: 'Docker', src: '/assets/platforms/docker.svg', width: 128, height: 128 },
  cloudflare: { name: 'Cloudflare', src: '/assets/platforms/cloudflare.svg', width: 128, height: 128 },
  netlify: { name: 'Netlify', src: '/assets/platforms/netlify.svg', width: 128, height: 128 },
} satisfies Record<string, Platform>;

export type PlatformId = keyof typeof PLATFORMS;

// Square brand marks for service cards, so customers recognise a service from its logo without reading.
// Extra marks live in /public/assets/brands (Wikimedia Commons, public domain; Simple Icons 13.21.0, CC0).
export const BRAND_MARKS = {
  google: { name: 'Google Search', src: '/assets/brands/google.svg' },
  googleAds: { name: 'Google Ads', src: '/assets/platforms/google-ads.svg' },
  googleMaps: { name: 'Google Maps', src: '/assets/brands/google-maps.svg' },
  analytics: { name: 'Google Analytics', src: '/assets/platforms/google-analytics.svg' },
  facebook: { name: 'Facebook', src: '/assets/platforms/facebook.svg' },
  instagram: { name: 'Instagram', src: '/assets/platforms/instagram.svg' },
  meta: { name: 'Meta', src: '/assets/brands/meta.svg' },
  whatsapp: { name: 'WhatsApp', src: '/assets/platforms/whatsapp.svg' },
  youtube: { name: 'YouTube', src: '/assets/brands/youtube.svg' },
  shopify: { name: 'Shopify', src: '/assets/brands/shopify.svg' },
  woocommerce: { name: 'WooCommerce', src: '/assets/platforms/woocommerce.svg' },
  wordpress: { name: 'WordPress', src: '/assets/platforms/wordpress.svg' },
  razorpay: { name: 'Razorpay', src: '/assets/brands/razorpay.svg' },
  nextjs: { name: 'Next.js', src: '/assets/brands/nextjs.svg' },
  figma: { name: 'Figma', src: '/assets/platforms/figma.svg' },
  appStore: { name: 'App Store', src: '/assets/brands/app-store.svg' },
  googlePlay: { name: 'Google Play', src: '/assets/brands/google-play.svg' },
  flutter: { name: 'Flutter', src: '/assets/platforms/flutter.svg' },
  firebase: { name: 'Firebase', src: '/assets/platforms/firebase.svg' },
} satisfies Record<string, { name: string; src: string }>;

export type BrandId = keyof typeof BRAND_MARKS;

// Type-checked list of brand marks for card data: `brands: logos('facebook', 'instagram')`
export const logos = (...ids: BrandId[]) => ids;

export const PLATFORM_GROUPS: { title: string; ids: PlatformId[] }[] = [
  { title: 'Ads & analytics', ids: ['googleAds', 'meta', 'facebook', 'instagram', 'whatsapp', 'analytics'] },
  { title: 'Websites & online stores', ids: ['figma', 'nextjs', 'react', 'wordpress', 'shopify', 'woocommerce', 'razorpay'] },
  { title: 'Apps, hosting & cloud', ids: ['flutter', 'nodejs', 'firebase', 'aws', 'googleCloud', 'docker', 'cloudflare', 'netlify'] },
];
