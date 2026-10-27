import Image from 'next/image';
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

export default function FeatureIcon({ icon: Icon, size = 'md' }: { icon: LucideIcon; size?: 'sm' | 'md' }) {
  const file = ICONS.get(Icon);
  const box = size === 'sm' ? 'w-10 h-10 rounded-lg' : 'w-12 h-12 rounded-xl';
  const px = size === 'sm' ? 24 : 30;
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
