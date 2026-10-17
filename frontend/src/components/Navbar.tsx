'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

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
    { href: '/digital-marketing-seo', label: 'Performance Ads' },
    { href: '/web-development', label: 'Web & Apps' },
    { href: '/results', label: 'Work' },
    { href: '/calculator', label: 'ROI Calculator' },
    { href: '/blog', label: 'Playbooks' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all">
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between rounded-full bg-[#110B22]/85 border border-purple-500/20 backdrop-blur-xl shadow-2xl">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white group shrink-0">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-inner">
            H
          </div>
          <span className="font-heading">Helix 24<span className="text-purple-400 font-normal"> Solutions</span></span>
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
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md transition-all"
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
