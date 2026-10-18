import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { getAllBlogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Digital Marketing & Web SEO Guides (Kerala & GCC) — Blog | Helix24 Solutions Pvt Ltd',
  description: 'In-depth research and execution playbooks on Meta Ads, Google Ads PPC, Local SEO 3-Pack, Next.js web development, and GCC cross-border e-commerce by Helix24 Solutions Pvt Ltd.',
  alternates: {
    canonical: 'https://helix24.in/blog',
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Helix24 Solutions Digital Strategy Blog',
    description: 'Engineering and performance marketing insights for Kerala and GCC businesses.',
    url: 'https://helix24.in/blog',
    hasPart: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://helix24.in/blog/${post.slug}`,
      datePublished: post.publishedDate,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-16">
        
        {/* Header with Telemetry HUD */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="hud-tag inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-300 font-mono text-[11px] font-semibold tracking-wider uppercase">
              {'// HELIX24 INTELLIGENCE DESK • OPEN PLAYBOOKS'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering &amp; Growth <span className="gradient-text">Playbooks</span>
          </h1>

          <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Data-backed playbooks on Meta Ads Server-Side CAPI, Local SEO 3-Pack dominance, custom Next.js web architecture, and cross-border GCC expansion for high-growth businesses.
          </p>
        </div>

        {/* Featured Post Card (Top Article) */}
        {posts.length > 0 && (
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-purple-500/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-600/20 transition-all"></div>
            
            <div className="space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Featured Playbook
                </span>
                <span className="text-xs font-mono text-purple-400">{posts[0].category}</span>
                <span className="text-purple-600">•</span>
                <span className="text-xs font-mono text-purple-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {posts[0].readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-purple-300 transition-colors leading-tight">
                <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                {posts[0].excerpt}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300/80">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{posts[0].author.name} • {posts[0].author.location}</span>
                </div>

                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300"
                >
                  <span>Read Complete Playbook</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All Other Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-purple-900/30 pb-4">
            <h2 className="text-xl font-bold text-white">All Strategy &amp; Architecture Guides</h2>
            <span className="text-xs font-mono text-purple-400">{posts.length} Verified Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, idx) => (
              <article
                key={idx}
                className="glass-panel p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-purple-500/20 hover:border-purple-400/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 border border-purple-500/20 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-purple-200/75 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-purple-400/80 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishedDate}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 group-hover:text-white"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Strategy Consultation Banner */}
        <div className="glass-panel p-8 rounded-2xl border border-purple-500/30 text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            {'// DIRECT ENGINEERING CONSULTATION'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a project in mind for Kerala or GCC?
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80 max-w-xl mx-auto">
            Get in touch directly with the founders and engineers at Helix24 Solutions Pvt Ltd for a direct strategy assessment of your ad campaigns or tech stack.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20or%20web%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Strategy Desk</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-900/60 hover:bg-purple-800 border border-purple-600/40 text-white font-semibold text-xs transition-all"
            >
              <span>Schedule Corporate Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
