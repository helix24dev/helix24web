import Image from 'next/image';

// Horizontal "HELIX24 SOLUTIONS PVT. LTD." lockup for the white site. next/image serves it resized through
// Netlify's Image CDN; `priority` only for the navbar copy, which is above the fold.
const HEIGHTS = {
  sm: { className: 'h-9 sm:h-10 w-auto', px: 40 },
  md: { className: 'h-12 sm:h-14 w-auto', px: 56 },
  lg: { className: 'h-16 sm:h-18 w-auto', px: 72 },
};

export default function HelixLogo({ className = '', size = 'md', priority = false }: { className?: string; size?: keyof typeof HEIGHTS; priority?: boolean }) {
  const h = HEIGHTS[size];
  return (
    <div className={`flex items-center shrink-0 group-hover:scale-[1.02] transition-transform ${className}`}>
      <Image
        src="/assets/helix-logo-horizontal.png"
        alt="Helix24 Solutions Pvt. Ltd."
        width={Math.round(h.px * 2.5)}
        height={h.px}
        className={`${h.className} max-w-none object-contain`}
        priority={priority}
      />
    </div>
  );
}
