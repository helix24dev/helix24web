import React from 'react';

export default function TechEcosystemStrip() {
  const partners = [
    {
      name: 'Google Partner',
      badge: 'Certified Partner',
      category: 'Search & PMax',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: 'Meta Business Partner',
      badge: 'Official Agency Partner',
      category: 'Instagram & CAPI',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0668E1]">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
    },
    {
      name: 'Shopify Partner',
      badge: 'Certified Developer',
      category: 'D2C Commerce',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#95BF47]">
          <path d="M19.34 7.64l-1.39-4.35a.8.8 0 00-.77-.54h-2.1L12.5 1.5a.8.8 0 00-.78-.5H7.7a.8.8 0 00-.79.67L5.5 10.3l-2.84.87a.8.8 0 00-.54.76c0 .12.03.24.08.34l7.15 13.2a.8.8 0 00.7.43h.05a.8.8 0 00.7-.45l10.9-17a.8.8 0 00-.1-1.01l-1.5-1.8z"/>
        </svg>
      ),
    },
    {
      name: 'Next.js & Vercel',
      badge: 'Edge Infrastructure',
      category: 'Sub-Second Web',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      ),
    },
    {
      name: 'Razorpay & Stripe',
      badge: 'Verified Checkout',
      category: 'Payment Gateways',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0C2340]">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252 1.144 15.688.8 12.822.8 7.375.8 3.5 3.593 3.5 8.169c0 4.148 3.5 5.795 6.438 6.883 2.378.88 3.2 1.54 3.2 2.502 0 .973-.854 1.528-2.348 1.528-2.122 0-4.887-.993-6.848-2.029l-.92 5.613C4.858 23.385 7.78 24 10.647 24c5.787 0 9.773-2.678 9.773-7.534 0-4.32-3.32-5.968-6.444-7.316z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="border-y border-purple-200/50 dark:border-purple-900/30 bg-purple-50/50 dark:bg-[#0C061A]/60 py-6 backdrop-blur-md">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="shrink-0 space-y-0.5 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-700 dark:text-purple-400 font-bold block">
              Official Accreditations
            </span>
            <span className="text-xs font-semibold text-slate-800 dark:text-white">
              Certified Technology &amp; Ad Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/40 shadow-xs hover:border-purple-400 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0">
                  {partner.iconSvg}
                </div>
                <div className="leading-tight overflow-hidden">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-purple-700 dark:text-purple-300/80 font-mono block truncate">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
