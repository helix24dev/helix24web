'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

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
    <aside aria-label="Quick contact and page navigation" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-purple-700 hover:bg-purple-800 text-white keep-white flex items-center justify-center shadow-lg shadow-purple-900/25 transition-all hover:-translate-y-0.5 active:scale-95"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Official WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/919048009044?text=Hi%20Helix24,%20I%20would%20like%20to%20discuss%20a%20strategy%20consultation%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-2.5 w-14 h-14 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full btn-whatsapp font-semibold text-sm shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        aria-label="Chat directly with Helix24 on WhatsApp"
        title="Chat on WhatsApp (+91 9048009044)"
      >
        {/* Pulsing Online Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
        </span>

        {/* Official WhatsApp Vector Icon (white on WhatsApp green, per the brand guidelines) */}
        <WhatsAppIcon className="w-7 h-7 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition-transform" />

        {/* Text Label: icon-only round button on mobile */}
        <span className="hidden sm:inline tracking-tight whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
