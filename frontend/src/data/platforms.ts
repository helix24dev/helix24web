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

export const PLATFORM_GROUPS: { title: string; ids: PlatformId[] }[] = [
  { title: 'Ads & analytics', ids: ['googleAds', 'meta', 'facebook', 'instagram', 'whatsapp', 'analytics'] },
  { title: 'Websites & online stores', ids: ['figma', 'nextjs', 'react', 'wordpress', 'shopify', 'woocommerce', 'razorpay'] },
  { title: 'Apps, hosting & cloud', ids: ['flutter', 'nodejs', 'firebase', 'aws', 'googleCloud', 'docker', 'cloudflare', 'netlify'] },
];
