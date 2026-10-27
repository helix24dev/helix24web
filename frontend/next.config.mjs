// Set here rather than in netlify.toml: Netlify header rules don't reach responses served by the Next.js runtime
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://www.googleadservices.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://www.facebook.com https://region1.google-analytics.com; frame-src https://www.googletagmanager.com;",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/web-development.html', destination: '/web-development', permanent: true },
      { source: '/web-dev', destination: '/web-development', permanent: true },
      { source: '/digital-marketing-seo.html', destination: '/digital-marketing-seo', permanent: true },
      { source: '/seo', destination: '/digital-marketing-seo', permanent: true },
      { source: '/ecommerce-development.html', destination: '/ecommerce-development', permanent: true },
      { source: '/e-commerce', destination: '/ecommerce-development', permanent: true },
      { source: '/mobile-app-development.html', destination: '/mobile-app-development', permanent: true },
      { source: '/mobile-apps', destination: '/mobile-app-development', permanent: true },
      { source: '/branding-design.html', destination: '/branding-design', permanent: true },
      { source: '/results.html', destination: '/results', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
    ];
  },
};

export default nextConfig;

