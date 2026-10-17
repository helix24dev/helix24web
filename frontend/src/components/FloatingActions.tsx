'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Star, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Google Business Profile Verified Badge */}
      <a
        href="https://share.google/bRqB2ePsNrm8f73wR"
        target="_blank"
        rel="noopener noreferrer"
        className="group hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-medium shadow-xl hover:bg-slate-900 hover:border-amber-400 transition-all backdrop-blur-md"
        aria-label="View Helix24 Verified Google Business Profile & 5.0 Reviews"
      >
        <span className="flex items-center text-amber-400">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
        </span>
        <span className="font-semibold text-white">5.0</span>
        <span className="text-amber-200/80 text-[11px]">Google Verified Business</span>
      </a>

      <div className="flex items-center gap-2">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 flex items-center justify-center shadow-lg backdrop-blur-md transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Direct Chat Trigger */}
        <a
          href="https://wa.me/919048009044?text=Hi%20Helix24%20Solutions%2C%20I%20am%20interested%20in%20scaling%20my%20business%20with%20your%20ads%2C%20SEO%20and%20web%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-2xl shadow-emerald-950/80 transition-all transform hover:scale-105"
          aria-label="Chat directly on WhatsApp with Helix24"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline font-mono tracking-tight">WhatsApp Strategy</span>
        </a>
      </div>
    </div>
  );
}
