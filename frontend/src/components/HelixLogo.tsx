import React from 'react';

interface HelixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function HelixLogo({ 
  className = '', 
  size = 'md', 
  showText = true 
}: HelixLogoProps) {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[size];

  const textClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Precision Geometric Double-Helix Vector Mark */}
      <div className={`relative ${iconDimensions} rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#6366F1] to-[#4338CA] p-0.5 shadow-md shadow-purple-950/40 shrink-0 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Outer glowing glow effect */}
          <circle cx="16" cy="16" r="14" stroke="url(#helix_glow)" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
          
          {/* Primary Strand 1 */}
          <path
            d="M8 8C12 12 20 12 24 16C28 20 20 24 16 26"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="drop-shadow-xs"
          />
          {/* Secondary Intersecting Strand 2 */}
          <path
            d="M24 8C20 12 12 12 8 16C4 20 12 24 16 26"
            stroke="#A7F3D0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 3"
            opacity="0.9"
          />
          {/* Core Energy Nodes */}
          <circle cx="16" cy="12" r="2" fill="#38BDF8" />
          <circle cx="16" cy="20" r="2" fill="#FBBF24" />
          <circle cx="8" cy="8" r="1.5" fill="white" />
          <circle cx="24" cy="8" r="1.5" fill="white" />
          
          <defs>
            <linearGradient id="helix_glow" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold tracking-tight text-white ${textClasses} font-heading flex items-center gap-1`}>
            <span>Helix 24</span>
            <span className="text-purple-400 font-medium">Solutions</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-purple-300/70 uppercase pt-0.5">
            Pvt Ltd • Kerala &amp; GCC
          </span>
        </div>
      )}
    </div>
  );
}
