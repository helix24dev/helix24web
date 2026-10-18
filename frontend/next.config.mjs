/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
    workerThreads: false,
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
    ];
  },
};

export default nextConfig;

