import Image from 'next/image';
import { BRAND_MARKS, type BrandId } from '@/data/platforms';
import {
  AlarmClock, Bell, BookOpen, Briefcase, Building2, CalendarDays, ChartColumn, Clapperboard, Clock, CreditCard,
  FileText, Gauge, Globe2, GraduationCap, ImageIcon, KeyRound, LayoutDashboard, LifeBuoy, Laptop, Mail, MapPin,
  Megaphone, MessageCircle, Package, Palette, PencilRuler, Phone, Plug, Search, Server, ShieldCheck, ShoppingBag,
  Smartphone, Stethoscope, Store, Target, Truck, Zap,
  type LucideIcon,
} from 'lucide-react';

// Feature icons are shown as Fluent Emoji 3D-style illustrations (MIT, Microsoft; /public/icons/3d).
// Pages keep passing lucide components so the data stays readable; this maps each one to its 3D icon
// and falls back to the outline icon for anything not mapped yet.
const ICONS = new Map<LucideIcon, string>([
  [AlarmClock, 'alarm-clock'], [Bell, 'bell'], [BookOpen, 'open-book'], [Briefcase, 'briefcase'],
  [Building2, 'office-building'], [CalendarDays, 'spiral-calendar'], [ChartColumn, 'bar-chart'],
  [Clapperboard, 'clapper-board'], [Clock, 'alarm-clock'], [CreditCard, 'credit-card'], [FileText, 'page-facing-up'],
  [Gauge, 'stopwatch'], [Globe2, 'globe-with-meridians'], [GraduationCap, 'graduation-cap'], [ImageIcon, 'framed-picture'],
  [KeyRound, 'key'], [LayoutDashboard, 'chart-increasing'], [LifeBuoy, 'ring-buoy'], [Laptop, 'laptop'], [Mail, 'e-mail'],
  [MapPin, 'round-pushpin'], [Megaphone, 'megaphone'], [MessageCircle, 'speech-balloon'], [Package, 'package'],
  [Palette, 'artist-palette'], [PencilRuler, 'triangular-ruler'], [Phone, 'telephone-receiver'], [Plug, 'electric-plug'],
  [Search, 'magnifying-glass-tilted-left'], [Server, 'gear'], [ShieldCheck, 'shield'], [ShoppingBag, 'shopping-bags'],
  [Smartphone, 'mobile-phone'], [Stethoscope, 'stethoscope'], [Store, 'convenience-store'], [Target, 'bullseye'],
  [Truck, 'delivery-truck'], [Zap, 'high-voltage'],
]);

// `brands` shows the logos of the platforms a service runs on (e.g. Facebook + Instagram for Meta Ads) in place of the
// 3D icon; customers recognise a logo faster than they read a label. Use 3D icons only where no brand fits.
export default function FeatureIcon({ icon: Icon, brands, size = 'md' }: { icon: LucideIcon; brands?: BrandId[]; size?: 'sm' | 'md' }) {
  const file = ICONS.get(Icon);
  const box = size === 'sm' ? 'w-10 h-10 rounded-lg' : 'w-12 h-12 rounded-xl';
  const px = size === 'sm' ? 24 : 30;
  if (brands?.length) {
    return (
      <span className={`${size === 'sm' ? 'h-10 rounded-lg px-2 gap-1.5' : 'h-12 rounded-xl px-2.5 gap-2'} shrink-0 inline-flex items-center bg-white border border-slate-200 shadow-sm`}>
        {brands.map((id) => (
          <Image key={id} src={BRAND_MARKS[id].src} alt={BRAND_MARKS[id].name} title={BRAND_MARKS[id].name} width={px - 2} height={px - 2} unoptimized className="object-contain" style={{ width: px - 2, height: px - 2 }} />
        ))}
      </span>
    );
  }
  return (
    <span className={`${box} shrink-0 inline-flex items-center justify-center bg-white border border-slate-200 shadow-sm`}>
      {file ? (
        <Image src={`/icons/3d/${file}.svg`} alt="" width={px} height={px} unoptimized />
      ) : (
        <Icon className="w-5 h-5 text-purple-700" aria-hidden="true" />
      )}
    </span>
  );
}
