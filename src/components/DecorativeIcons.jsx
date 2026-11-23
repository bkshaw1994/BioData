import React from 'react';

// Delicate Gold Floral / Mandala Flourish for headings & cards
export const GoldDivider = ({ className = "my-4" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold-400 to-gold-500 opacity-60"></div>
    <div className="text-gold-500 flex items-center gap-1.5 opacity-90">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400"></span>
      <svg className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L14.2 8.5L21 9.2L16 13.8L17.5 20.5L12 17L6.5 20.5L8 13.8L3 9.2L9.8 8.5L12 2Z" />
      </svg>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400"></span>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-gold-400 to-gold-500 opacity-60"></div>
  </div>
);

// Traditional Corner Ornament
export const CornerOrnament = ({ position = "top-left" }) => {
  const getStyles = () => {
    switch (position) {
      case "top-left":
        return "top-1.5 left-1.5";
      case "top-right":
        return "top-1.5 right-1.5 rotate-90";
      case "bottom-left":
        return "bottom-1.5 left-1.5 -rotate-90";
      case "bottom-right":
        return "bottom-1.5 right-1.5 rotate-180";
      default:
        return "top-1.5 left-1.5";
    }
  };

  return (
    <div className={`absolute ${getStyles()} pointer-events-none opacity-40 text-gold-500`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 10C2 5.58172 5.58172 2 10 2" strokeLinecap="round" />
        <path d="M2 6C2 3.79086 3.79086 2 6 2" strokeLinecap="round" />
        <circle cx="12" cy="4" r="1.5" fill="currentColor" />
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

// Lotus Icon
export const LotusIcon = ({ className = "w-5 h-5 text-gold-500" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4C10 7.5 8 11 8 15C8 17.5 9.8 19.5 12 19.5C14.2 19.5 16 17.5 16 15C16 11 14 7.5 12 4Z" />
    <path d="M8 15C5.5 14 3 15.5 3 17.5C3 19 4.5 20 6.5 20C8 20 9.5 19 10 18" />
    <path d="M16 15C18.5 14 21 15.5 21 17.5C21 19 19.5 20 17.5 20C16 20 14.5 19 14 18" />
  </svg>
);

// Auspicious Kalash / Diya Icon
export const DiyaIcon = ({ className = "w-5 h-5 text-gold-500" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C12 2 10 5 10 7C10 8.1 10.9 9 12 9C13.1 9 14 8.1 14 7C14 5 12 2 12 2Z" fill="currentColor" fillOpacity="0.4" />
    <path d="M4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14H4Z" fill="currentColor" fillOpacity="0.15" />
    <line x1="2" y1="14" x2="22" y2="14" />
  </svg>
);

