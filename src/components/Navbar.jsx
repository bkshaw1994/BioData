import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, ChevronRight } from 'lucide-react';
import { LotusIcon } from './DecorativeIcons';

export const Navbar = ({ onDownload, isDownloading, data }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Personal & Kundli", href: "#personal" },
    { name: "Career & Education", href: "#career" },
    { name: "Family", href: "#family" },
    { name: "Preferences", href: "#preferences" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 105;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="no-print sticky top-0 z-40">
      {/* Top Auspicious Invocation Header */}
      <div className="bg-[#FAF6EE] border-b border-gold-200/60 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-serif text-gold-700 tracking-wider font-semibold">
          <LotusIcon className="w-3.5 h-3.5 text-gold-600 inline" />
          <span>|| ॐ श्री गणेशाय नमः ||</span>
          <LotusIcon className="w-3.5 h-3.5 text-gold-600 inline" />
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`relative transition-all duration-300 ${scrolled
          ? 'bg-ivory-100/95 backdrop-blur-md shadow-soft border-b border-warmborder/80 py-2.5'
          : 'bg-ivory-100/80 backdrop-blur-sm border-b border-warmborder/40 py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, '#overview')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-terracotta-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                BKS
              </div>
              <div className="text-left">
                <span className="block font-serif text-lg font-bold text-charcoal-800 tracking-tight leading-none group-hover:text-gold-600 transition-colors">
                  {data?.personal?.fullName || "Bishal Kumar Shaw"}
                </span>
                <span className="text-[11px] font-sans text-gold-600 font-medium tracking-wide">
                  Senior Associate • Bengaluru
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase font-semibold tracking-wider text-charcoal-700 hover:text-gold-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Download Bio-Data Button */}
              <button
                onClick={onDownload}
                disabled={isDownloading}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-terracotta-600 shadow-sm hover:shadow transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                title="Download Bio-Data PDF directly"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{isDownloading ? "Downloading..." : "Download Bio-Data"}</span>
              </button>
            </div>

            {/* Mobile Menu & Quick Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onDownload}
                disabled={isDownloading}
                className="p-2 rounded-full text-white bg-gold-500 hover:bg-gold-600 shadow-sm disabled:opacity-60"
                title="Download Bio-Data"
              >
                <FileDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-charcoal-700 hover:text-gold-600 hover:bg-ivory-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Right-Side Translucent Dropdown Menu with Popover Arrow & Top-to-Bottom Slide Transition */}
        <div
          className={`sm:hidden absolute top-full right-3 mt-2 w-60 max-w-[85vw] rounded-2xl bg-white/85 backdrop-blur-md border border-gold-200/90 shadow-2xl p-2.5 transform transition-all duration-300 ease-in-out origin-top-right z-50 ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
              : 'opacity-0 -translate-y-3 pointer-events-none scale-95'
          }`}
        >
          {/* Top Indicator Arrow pointing directly to menubar button */}
          <div className="absolute -top-[7px] right-4 w-3.5 h-3.5 bg-white/85 border-t border-l border-gold-200/90 rotate-45 backdrop-blur-md" />

          <nav className="flex flex-col space-y-1 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-charcoal-800 hover:text-gold-700 hover:bg-gold-100/60 transition-all flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gold-500 transform group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </nav>
        </div>

        {/* Backdrop for tapping outside to slide close */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="sm:hidden fixed inset-0 z-40 bg-black/5 backdrop-blur-[0.5px] transition-opacity"
            aria-hidden="true"
          />
        )}
      </header>
    </div>
  );
};

