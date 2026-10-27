import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/seo';

type Crumb = { name: string; path: string };

// Visible breadcrumb trail plus matching BreadcrumbList schema; Home is prepended automatically
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1280px] mx-auto px-6 pt-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(trail)) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-purple-300/80">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-purple-100">{crumb.name}</span>
              ) : (
                <>
                  <Link href={crumb.path} className="hover:text-white transition-colors">{crumb.name}</Link>
                  <ChevronRight className="w-3 h-3 text-purple-500/60" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
