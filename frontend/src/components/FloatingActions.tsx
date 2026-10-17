'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 flex items-center justify-center shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <a
        href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20would%20like%20to%20discuss%20a%20strategy%20consultation%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs shadow-xl transition-all"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
