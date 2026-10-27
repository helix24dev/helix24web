import type { PlatformItem } from '@/lib/content';
import { cdnImage } from '@/lib/image';

// One logo in the "Platforms we work with" wall. Wordmarks already spell the brand name, so they render alone;
// icon logos get the name beside them. Plain <img> for the same reason as FeatureIcon.
export default function PlatformLogo({ item }: { item: PlatformItem }) {
  return (
    <span className="inline-flex items-center gap-2" title={item.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cdnImage(item.logo, item.wordmark ? 312 : 84)}
        alt={item.wordmark ? item.name : ''}
        width={item.wordmark ? 104 : 28}
        height={item.wordmark ? 24 : 28}
        loading="lazy"
        decoding="async"
        className={`${item.wordmark ? 'h-5 sm:h-6 w-auto max-w-[88px] sm:max-w-[104px]' : 'h-6 w-6 sm:h-7 sm:w-7'} object-contain`}
      />
      {!item.wordmark && <span className="text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">{item.name}</span>}
    </span>
  );
}
