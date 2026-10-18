import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  HelpCircle, 
  MapPin,
  Building2
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blogPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Article Not Found — Helix24 Solutions Pvt Ltd',
    };
  }

  const url = `https://helix24.in/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      tags: [post.category, 'Kerala Digital Marketing', 'Kochi Meta Ads', 'GCC E-commerce'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Schema: BlogPosting & BreadcrumbList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: 'https://helix24.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Helix24 Solutions Pvt Ltd',
      url: 'https://helix24.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://helix24.in/assets/helix24-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://helix24.in/blog/${post.slug}`,
    },
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://helix24.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://helix24.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://helix24.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <article className="max-w-[1020px] mx-auto px-6 py-12 space-y-12">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-purple-300">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1 px-3 rounded-full bg-purple-950/40 border border-purple-500/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-2 text-purple-400/80">
            <span>{'// RESEARCH BRIEF'}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pt-4 border-b border-purple-900/30 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-purple-900/40 border border-purple-500/30 text-purple-300">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-purple-200/85 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-purple-300/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>Published: {post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{post.author.location}</span>
            </div>
            <div className="text-purple-400">
              By <strong className="text-white">{post.author.name}</strong> ({post.author.role})
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="glass-panel p-6 sm:p-8 space-y-4 border border-emerald-500/30 bg-emerald-950/10">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Executive Summary & Key Takeaways</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-purple-100">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Body Sections */}
        <div className="space-y-12 text-sm sm:text-base text-purple-200/90 leading-relaxed font-sans">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-purple-500 pl-4">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-purple-200/80">
                  {p}
                </p>
              ))}

              {section.bulletPoints && (
                <ul className="space-y-2.5 my-4 pl-2">
                  {section.bulletPoints.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-3 text-xs sm:text-sm text-purple-100">
                      <span className="text-purple-400 font-bold shrink-0">▸</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <div
                  className={`p-5 rounded-xl my-6 border ${
                    section.callout.type === 'warning'
                      ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                      : section.callout.type === 'stat'
                      ? 'bg-purple-950/40 border-purple-500/40 text-purple-200'
                      : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                    {section.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                    {section.callout.type === 'stat' && <TrendingUp className="w-4 h-4 text-purple-400" />}
                    {section.callout.type === 'pro-tip' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-purple-900/30">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <div className="space-y-4">
              {post.faq.map((f, fIdx) => (
                <div key={fIdx} className="glass-panel p-6 space-y-2 border border-purple-500/20">
                  <h3 className="text-base font-bold text-white">{f.question}</h3>
                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WhatsApp Conversion Callout Card */}
        <section className="glass-panel p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-purple-950/60 to-emerald-950/20 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
              {'// DIRECT EXECUTION DESK'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Want us to audit or execute this strategy for your business?
            </h3>
            <p className="text-xs text-purple-200/75 max-w-xl">
              Connect directly with our performance media buyers and web engineers. We review your ad account, tracking setup, and web architecture on a live 20-minute strategy call.
            </p>
          </div>

          <a
            href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20read%20your%20blog%20article%20and%20would%20like%20a%20strategy%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-zinc-950 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </section>

        {/* Corporate Authority Dossier */}
        <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Published by Helix24 Solutions Pvt Ltd</span>
              <span className="text-[11px] font-mono text-purple-400">
                CIN: U62011KL2026PTC107185 • RoC Kerala • PAN: AAJCH0136Q
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-mono text-[11px]"
            >
              ★ 5.0 Google Business Profile Verified
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-purple-900/30">
            <h3 className="text-xl font-bold text-white">Recommended Strategy Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel, rIdx) => (
                <Link
                  key={rIdx}
                  href={`/blog/${rel.slug}`}
                  className="glass-panel p-6 space-y-3 border border-purple-500/20 hover:border-purple-400/50 transition-all group block"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/20">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-purple-200/70 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </article>
    </>
  );
}
