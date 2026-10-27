import ICONS from '@/data/icons.json';

// A card's picture, chosen in the CMS: up to two icons from src/data/icons.json (official brand logos, "logo-…",
// and Fluent Emoji 3D icons, MIT, "3d-…"), or an uploaded image, which replaces them.
// Plain <img>: these are small SVGs that need no resizing, and next/image would add its client runtime to every page.
const BY_KEY = new Map(ICONS.map((i) => [i.key, i]));

export default function FeatureIcon({ icons, image, size = 'md' }: { icons?: string[]; image?: string; size?: 'sm' | 'md' }) {
  const px = size === 'sm' ? 24 : 30;
  const found = image
    ? [{ key: image, label: '', src: image }]
    : (icons ?? []).map((k) => BY_KEY.get(k)).filter((i): i is (typeof ICONS)[number] => !!i).slice(0, 2);
  if (!found.length) return null;
  const isLogo = !image && found.every((i) => i.key.startsWith('logo-'));
  return (
    <span
      className={`${size === 'sm' ? 'h-10 rounded-lg' : 'h-12 rounded-xl'} ${found.length > 1 ? 'px-2.5 gap-2' : size === 'sm' ? 'w-10' : 'w-12'} shrink-0 inline-flex items-center justify-center bg-white border border-slate-200 shadow-sm overflow-hidden`}
    >
      {found.map((i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i.key}
          src={i.src}
          alt={isLogo ? i.label.replace(/^Logo: /, '') : ''}
          width={px}
          height={px}
          loading="lazy"
          decoding="async"
          className="object-contain"
          style={{ width: isLogo ? px - 2 : px, height: isLogo ? px - 2 : px }}
        />
      ))}
    </span>
  );
}
