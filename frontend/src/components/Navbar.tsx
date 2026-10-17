'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Sparkles, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('helix_theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('helix_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/digital-marketing-seo', label: 'Meta Ads & SEO' },
    { href: '/web-development', label: 'Web Dev' },
    { href: '/ecommerce-development', label: 'E-Commerce' },
    { href: '/results', label: 'Case Studies' },
    { href: '/calculator', label: 'ROI Calculator' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3.5 transition-all">
      <div className="max-w-[1280px] mx-auto glass-panel px-5 py-3 flex items-center justify-between border border-purple-500/25 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
        
        {/* Brand Logo & Telemetry Indicator */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600/40 to-indigo-600/40 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-inner">
              <Sparkles className="w-4 h-4 text-purple-200" />
            </div>
            <span>Helix<span className="text-purple-400 font-extrabold">24</span></span>
          </Link>

          {/* Telemetry Radar Pill */}
          <div className="hidden xl:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 font-mono text-[10px] uppercase tracking-wider text-purple-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>KOCHI IST • ONLINE</span>
          </div>
        </div>

        {/* Desktop Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-purple-950/50 border border-purple-800/30 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all text-xs font-medium ${
                  isActive
                    ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-900/60'
                    : 'text-purple-200/80 hover:text-white hover:bg-purple-900/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-purple-500/20 bg-purple-950/40 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <a
            href="tel:+919048009044"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 hover:text-white hover:border-purple-400 text-xs font-semibold transition-all"
          >
            <PhoneCall className="w-3 h-3 text-purple-400" />
            <span className="font-mono text-[11px]">+91 9048009044</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-purple-900/50 transition-all whitespace-nowrap"
          >
            <span>Book Strategy Call</span>
            <span className="font-bold">→</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-purple-200 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-slate-950/98 backdrop-blur-2xl z-40 p-6 flex flex-col gap-3 border-t border-purple-900/40 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-purple-900/30">
            <span className="font-mono text-xs text-purple-400">{'// HELIX 24 SOLUTIONS PVT LTD'}</span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ONLINE
            </span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-2 px-4 rounded-xl transition-all ${
                pathname === link.href ? 'bg-purple-900/50 text-white font-bold' : 'text-purple-200/80 hover:bg-purple-950/40'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-xl"
            >
              Book Strategy Call →
            </Link>
            <a
              href="https://share.google/bRqB2ePsNrm8f73wR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold"
            >
              ⭐ 5.0 Rating on Google Business Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
