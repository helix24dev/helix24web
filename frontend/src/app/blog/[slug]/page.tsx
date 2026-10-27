import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, CheckCircle2, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME, OG_IMAGE, ORG_ID } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import Faq from '@/components/Faq';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { whatsappLink } from '@/components/ServiceSections';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blogPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Article Not Found | Helix24',
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      tags: [post.category],
      siteName: SITE_NAME,
      locale: 'en_IN',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [OG_IMAGE.url],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    image: [`${SITE_URL}${OG_IMAGE.url}`],
    inLanguage: 'en-IN',
    // Team byline is an organisation; switch to '@type': 'Person' with a profile URL once posts carry named authors
    author: { '@type': 'Organization', name: post.author.name, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />

      <article className="max-w-[820px] mx-auto px-6 py-10 space-y-12">
        <header className="space-y-5 border-b border-purple-900/30 pb-8">
          <span className="chip inline-block px-3 py-1 text-xs font-semibold">{post.category}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.15] font-heading">{post.title}</h1>
          <p className="text-base sm:text-lg text-purple-200 leading-relaxed">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-purple-300">
            <span>By <strong className="text-white">{post.author.name}</strong></span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated {formatDate(post.updatedDate)}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </header>

        <aside aria-label="Key points" className="glass-panel p-6 sm:p-8 space-y-4 border border-purple-500/20">
          <h2 className="text-lg font-bold text-white font-heading">In this guide</h2>
          <ul className="space-y-3 text-base text-purple-100">
            {post.keyTakeaways.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-base sm:text-lg text-purple-200 leading-relaxed">{p}</p>
              ))}
              {section.bulletPoints && (
                <ul className="space-y-3 pl-1">
                  {section.bulletPoints.map((point) => (
                    <li key={point.slice(0, 40)} className="flex items-start gap-3 text-base sm:text-lg text-purple-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-3 shrink-0"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <div className="glass-panel p-5 sm:p-6 border border-purple-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-white">
                    {section.callout.type === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Lightbulb className="w-4 h-4 text-emerald-400" />
                    )}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-base text-purple-200 leading-relaxed">{section.callout.text}</p>
                </div>
              )}
            </section>
          ))}
        </div>

        {post.faq.length > 0 && (
          <Faq id="post-faq" title="Frequently asked questions" items={post.faq.map((f) => ({ q: f.question, a: f.answer }))} />
        )}

        <section className="glass-panel p-8 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">Want help with this for your business?</h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-md">
              Send us a message and we will look at your current setup and suggest what to do first.
            </p>
          </div>
          <a
            href={whatsappLink(`Hi Helix24, I read "${post.title}" and would like some advice.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </section>

        {relatedPosts.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-purple-900/30">
            <h2 className="text-xl font-bold text-white font-heading">More guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="glass-panel p-6 space-y-3 border border-purple-500/20 hover:border-purple-400/50 transition-all block">
                  <span className="text-xs font-semibold text-purple-300">{rel.category}</span>
                  <h3 className="text-base font-bold text-white leading-snug">{rel.title}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-purple-300">Read guide <ArrowRight className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
