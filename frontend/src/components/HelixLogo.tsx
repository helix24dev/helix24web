import React from 'react';
import Image from 'next/image';

interface HelixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'auto' | 'dark' | 'light' | 'white';
  layout?: 'horizontal' | 'icon' | 'vertical';
}

export default function HelixLogo({ 
  className = '', 
  size = 'md', 
  showText = true,
  variant = 'auto',
  layout = 'horizontal'
}: HelixLogoProps) {
  // If showText is false, force icon-only layout
  const actualLayout = !showText ? 'icon' : layout;

  if (actualLayout === 'icon') {
    const iconDimensions = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    }[size];

    const pixelDimensions = {
      sm: 32,
      md: 40,
      lg: 48,
    }[size];

    return (
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform ${className}`}>
        <Image
          src="/assets/helix-logo.png"
          alt="Helix24 Logo Mark"
          width={pixelDimensions}
          height={pixelDimensions}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(147,51,234,0.35)]"
          priority
        />
      </div>
    );
  }

  if (actualLayout === 'vertical') {
    const verticalDimensions = {
      sm: 'w-24 h-24',
      md: 'w-32 h-32',
      lg: 'w-40 h-40',
    }[size];

    return (
      <div className={`relative ${verticalDimensions} shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform ${className}`}>
        <Image
          src="/assets/helix-logo-vertical-whitebg.png"
          alt="Helix24 Solutions Pvt. Ltd."
          width={160}
          height={160}
          className="w-full h-full object-contain rounded-xl shadow-lg"
          priority
        />
      </div>
    );
  }

  // Horizontal full company name lockup ("HELIX24 SOLUTIONS PVT. LTD.")
  const heightClasses = {
    sm: 'h-9 sm:h-10 w-auto',
    md: 'h-12 sm:h-14 w-auto',
    lg: 'h-16 sm:h-18 w-auto',
  }[size];

  const pixelHeight = {
    sm: 40,
    md: 56,
    lg: 72,
  }[size];

  const pixelWidth = Math.round(pixelHeight * 2.5);

  const imgClass = `${heightClasses} max-w-none object-contain filter drop-shadow-[0_2px_10px_rgba(147,51,234,0.35)]`;

  // 'auto' renders both lockups and lets globals.css show the one that suits the active theme
  // (the dark-mode lockup has white lettering, which disappears on the light theme's white header)
  const showDark = variant === 'auto' || variant === 'dark' || variant === 'white';
  const showLight = variant === 'auto' || variant === 'light';

  return (
    <div className={`flex items-center shrink-0 group-hover:scale-[1.02] transition-transform ${className}`}>
      <div className="relative flex items-center">
        {showDark && (
          <Image
            src="/assets/helix-logo-horizontal-darkmode.png"
            alt="Helix24 Solutions Pvt. Ltd."
            width={pixelWidth}
            height={pixelHeight}
            className={`${imgClass} ${variant === 'auto' ? 'logo-on-dark' : ''}`}
            priority
          />
        )}
        {showLight && (
          <Image
            src="/assets/helix-logo-horizontal.png"
            alt={showDark ? '' : 'Helix24 Solutions Pvt. Ltd.'}
            aria-hidden={showDark ? true : undefined}
            width={pixelWidth}
            height={pixelHeight}
            className={`${imgClass} ${variant === 'auto' ? 'logo-on-light' : ''}`}
          />
        )}
      </div>
    </div>
  );
}
