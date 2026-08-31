'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

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
    { href: '/services/meta-ads', label: 'Meta & Google Ads' },
    { href: '/services/web-development', label: 'Web Dev' },
    { href: '/calculator', label: 'ROI Calculator' },
    { href: '/blog', label: 'Blog & FAQs' },
    { href: '/results', label: 'Results' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all">
      <div className="max-w-[1240px] mx-auto glass-panel px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
          <div className="w-8 h-8 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-purple-300" />
          </div>
          <span>Helix<span className="text-purple-400 font-extrabold">24</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-purple-950/40 border border-purple-800/20 rounded-full px-4 py-1.5 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-medium ${
                  isActive
                    ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-900/50'
                    : 'text-purple-200/75 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-purple-500/20 bg-purple-950/40 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-purple-900/40 transition-all"
          >
            Get Free Proposal →
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-purple-200 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-slate-950/95 backdrop-blur-2xl z-40 p-6 flex flex-col gap-4 border-t border-purple-900/30">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium py-2 px-4 rounded-xl ${
                pathname === link.href ? 'bg-purple-900/50 text-white font-bold' : 'text-purple-200/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center py-3.5 rounded-xl bg-purple-600 text-white font-semibold"
          >
            Get Free Proposal →
          </Link>
        </div>
      )}
    </header>
  );
}
