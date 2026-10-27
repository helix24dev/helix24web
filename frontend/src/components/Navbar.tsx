'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import HelixLogo from '@/components/HelixLogo';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide on scroll down, reveal on scroll up; always shown near the top of the page
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 80) setHidden(false);
        else if (Math.abs(y - lastY) > 8) setHidden(y > lastY);
        if (Math.abs(y - lastY) > 8 || y < 80) lastY = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/digital-marketing-seo', label: 'Digital Marketing' },
    { href: '/social-media-marketing', label: 'Social Media' },
    { href: '/web-development', label: 'Websites' },
    { href: '/results', label: 'Our Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-transform duration-300 ease-out ${
        hidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between rounded-full bg-white border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        
        {/* Brand Logo */}
        <Link href="/" className="group shrink-0">
          <HelixLogo size="sm" priority />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'nav-active text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-700 text-white font-semibold text-xs transition-all keep-white"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1240px] mx-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.1)] space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-slate-950 py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-full bg-slate-900 hover:bg-slate-700 text-white font-semibold text-xs mt-2 keep-white"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
