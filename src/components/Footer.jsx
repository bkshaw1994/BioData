import React from 'react';
import { Heart, FileDown, Sparkles, ArrowUp } from 'lucide-react';
import { GoldDivider, LotusIcon } from './DecorativeIcons';

export const Footer = ({ onDownload, isDownloading, data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="no-print bg-[#1A1A1A] text-white pt-12 pb-8 border-t-2 border-gold-400/40 relative overflow-hidden">
      {/* Background ambient gold touch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Auspicious Shloka & Blessing */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-gold-400">
            <LotusIcon className="w-4 h-4 text-gold-400" />
            <span className="font-serif text-sm tracking-widest font-semibold uppercase">
              Shubh Vivah • Auspicious Matrimony
            </span>
            <LotusIcon className="w-4 h-4 text-gold-400" />
          </div>

          <p className="font-serif text-base sm:text-lg text-gold-200/90 italic font-semibold">
            "|| शुभं करोति कल्याणम् आरोग्यं धनसंपदा | शत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तुते ||"
          </p>

          <p className="text-xs text-white/60 font-sans max-w-md mx-auto pt-1">
            "May the sacred journey of matrimony bring auspiciousness, sound health, prosperity, and lifelong companionship."
          </p>

          <GoldDivider className="my-4" />
        </div>

        {/* Quick Links & CTAs */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-serif font-bold text-base text-white">
              {data?.personal?.fullName || "Bishal Kumar Shaw"}
            </div>
            <div className="text-xs text-white/50 font-sans">
              Senior Associate at Cognizant, Bengaluru
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gold-600 hover:bg-gold-500 transition-colors shadow-sm disabled:opacity-60"
              title="Directly downloads the PDF Bio-Data"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{isDownloading ? "Downloading..." : "Download Bio-Data"}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 text-center text-[11px] text-white/40 font-sans">
          © {new Date().getFullYear()} Matrimonial Bio-Data • Designed with modern elegance & traditional warmth.
        </div>

      </div>
    </footer>
  );
};

