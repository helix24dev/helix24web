'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
          className="w-11 h-11 rounded-full bg-[#110B22]/90 backdrop-blur-md border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1230] flex items-center justify-center shadow-lg shadow-purple-950/50 transition-all hover:-translate-y-0.5 active:scale-95"
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
        className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white font-semibold text-sm shadow-xl shadow-emerald-950/40 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        aria-label="Chat directly with Helix24 on WhatsApp"
        title="Chat on WhatsApp (+91 9048009044)"
      >
        {/* Pulsing Online Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#090514]"></span>
        </span>

        {/* Official WhatsApp Vector Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-white shrink-0 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.108 1.523 5.834L0 24l6.326-1.655C8.002 23.364 9.944 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.567-.492-5.064-1.353l-.363-.208-3.757.983.999-3.664-.23-.367C2.65 15.86 2 13.998 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
        </svg>

        {/* Text Label */}
        <span className="font-heading tracking-tight text-white whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
