'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import HelixLogo from '@/components/HelixLogo';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
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

  useEffect(() => {
    const savedTheme = (localStorage.getItem('helix_theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('helix_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/digital-marketing-seo', label: 'Performance Ads' },
    { href: '/web-development', label: 'Web & Apps' },
    { href: '/results', label: 'Work' },
    { href: '/calculator', label: 'ROI Calculator' },
    { href: '/blog', label: 'Playbooks' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-transform duration-300 ease-out ${
        hidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between rounded-full bg-[#110B22]/85 border border-purple-500/20 backdrop-blur-xl shadow-2xl">
        
        {/* Brand Logo */}
        <Link href="/" className="group shrink-0">
          <HelixLogo size="sm" />
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
                    ? 'text-white font-semibold'
                    : 'text-purple-300/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="p-2 rounded-full text-purple-300 hover:text-white hover:bg-purple-900/40 transition-all"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md transition-all keep-white"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-purple-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1240px] mx-auto p-6 rounded-2xl bg-[#110B22] border border-purple-500/30 shadow-2xl space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-purple-200 hover:text-white py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs mt-2"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
