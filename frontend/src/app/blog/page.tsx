import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { whatsappLink } from '@/components/ServiceSections';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing & SEO Guides for Kerala | Helix24 Blog',
  description: 'Practical guides on Meta Ads, Google Ads, local SEO, web development and GCC e-commerce for businesses in Kerala, written by the Helix24 team.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const [featured, ...rest] = posts;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Helix24 Blog',
    description: metadata.description,
    url: `${SITE_URL}/blog`,
    hasPart: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedDate,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />

      <div className="max-w-[1240px] mx-auto px-6 py-10 space-y-14">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-heading">
            Marketing <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">
            Plain-English guides on advertising, SEO, websites and selling online, written for business owners in Kerala and the GCC.
          </p>
        </section>

        {featured && (
          <article className="glass-panel p-8 sm:p-10 border border-purple-500/30 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-purple-300">
              <span className="chip is-active px-3 py-1 text-xs font-semibold">Latest guide</span>
              <span>{featured.category}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featured.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
              <Link href={`/blog/${featured.slug}`} className="hover:text-purple-200">{featured.title}</Link>
            </h2>
            <p className="text-base text-purple-200 leading-relaxed max-w-3xl">{featured.excerpt}</p>
            <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white">
              Read the guide <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        )}

        <section aria-labelledby="all-guides" className="space-y-6">
          <h2 id="all-guides" className="text-xl sm:text-2xl font-bold text-white font-heading">All guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="glass-panel p-6 sm:p-7 flex flex-col justify-between gap-5 border border-purple-500/20 hover:border-purple-400/50 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-purple-300">
                    <span className="font-semibold">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug font-heading">
                    <Link href={`/blog/${post.slug}`} className="hover:text-purple-200">{post.title}</Link>
                  </h3>
                  <p className="text-sm text-purple-200 leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-purple-300 hover:text-white">
                  Read <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-panel p-8 border border-purple-500/20 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">Have a question we haven&apos;t covered?</h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto">Ask us directly. We are happy to point you in the right direction, even if you are not ready to hire anyone yet.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink('Hi Helix24, I have a question about digital marketing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
