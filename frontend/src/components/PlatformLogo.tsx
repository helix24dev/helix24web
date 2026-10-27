import Image from 'next/image';
import { PLATFORMS, type PlatformId } from '@/data/platforms';

// One platform logo. Wordmarks render alone; icon logos get the brand name beside them unless `iconOnly`.
export default function PlatformLogo({ id, size = 'md', iconOnly = false }: { id: PlatformId; size?: 'sm' | 'md'; iconOnly?: boolean }) {
  const p = PLATFORMS[id];
  const wordmark = 'wordmark' in p && p.wordmark;
  const imgClass = wordmark
    ? size === 'sm' ? 'h-4 w-auto max-w-[72px]' : 'h-5 sm:h-6 w-auto max-w-[88px] sm:max-w-[104px]'
    : size === 'sm' ? 'h-5 w-5' : 'h-6 w-6 sm:h-7 sm:w-7';
  return (
    <span className="inline-flex items-center gap-2" title={p.name}>
      <Image src={p.src} alt={wordmark || iconOnly ? p.name : ''} width={p.width} height={p.height} unoptimized className={`${imgClass} object-contain`} />
      {!wordmark && !iconOnly && (
        <span className={`${size === 'sm' ? 'text-xs' : 'text-xs sm:text-sm'} font-semibold text-slate-800 whitespace-nowrap`}>{p.name}</span>
      )}
    </span>
  );
}
