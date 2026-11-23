import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Ruler, 
  Home, 
  FileDown, 
  ArrowDown, 
  Share2, 
  Award, 
  CheckCircle2, 
  Maximize2,
  Sparkles,
  Heart
} from 'lucide-react';
import { GoldDivider, CornerOrnament, LotusIcon } from './DecorativeIcons';

export const Hero = ({ data, onPrint, onOpenShare, onOpenEdit, onSelectPhoto }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const photos = data?.photos || [];
  const currentPhoto = photos[activePhotoIdx] || photos[0];

  const scrollToPersonal = () => {
    const el = document.querySelector('#personal');
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="overview" className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      {/* Delicate background ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio Details & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Auspicious Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-700 text-xs sm:text-sm font-medium shadow-sm">
              <LotusIcon className="w-4 h-4 text-gold-600" />
              <span>Auspicious Marriage Bio-Data</span>
              <span className="text-gold-400">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified Profile
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal-900 tracking-tight leading-tight">
                {data?.personal?.fullName || "Bishal Kumar Shaw"}
              </h1>
              
              <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-serif text-gold-600 font-semibold italic">
                  Senior / Lead Full-Stack & Frontend Engineer
                </span>
                <span className="hidden sm:inline text-charcoal-400">|</span>
                <span className="inline-flex items-center gap-1 text-sm font-sans font-medium text-charcoal-600 bg-ivory-200/80 px-2.5 py-0.5 rounded-md border border-warmborder">
                  <Briefcase className="w-3.5 h-3.5 text-gold-600" />
                  Cognizant Technology Solutions
                </span>
              </div>
            </div>

            {/* Quick Highlights Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-warmborder shadow-soft flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-gold-600 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Age & DOB</span>
                </div>
                <div className="mt-1 font-serif font-bold text-charcoal-900 text-base">
                  {data?.personal?.age || "32 Years"}
                </div>
                <div className="text-[11px] text-charcoal-500 font-sans">
                  {data?.personal?.dob || "July 9, 1994"}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-warmborder shadow-soft flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-gold-600 text-xs font-semibold">
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Height</span>
                </div>
                <div className="mt-1 font-serif font-bold text-charcoal-900 text-base">
                  {data?.personal?.height || "6'0\" (183 cm)"}
                </div>
                <div className="text-[11px] text-charcoal-500 font-sans">
                  Athletic & Fit
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-warmborder shadow-soft flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-gold-600 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Current City</span>
                </div>
                <div className="mt-1 font-serif font-bold text-charcoal-900 text-base truncate">
                  Bengaluru
                </div>
                <div className="text-[11px] text-charcoal-500 font-sans truncate">
                  Karnataka, India
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-warmborder shadow-soft flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-gold-600 text-xs font-semibold">
                  <Home className="w-3.5 h-3.5" />
                  <span>Hometown</span>
                </div>
                <div className="mt-1 font-serif font-bold text-charcoal-900 text-base truncate">
                  Jasidih
                </div>
                <div className="text-[11px] text-charcoal-500 font-sans truncate">
                  Jharkhand, India
                </div>
              </div>
            </div>

            {/* About / Summary Note */}
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans bg-white/50 p-4 rounded-xl border border-warmborder/60">
              {data?.personal?.aboutMe || 
                "A balanced, warm-hearted, and grounded individual who believes in mutual respect, family values, and continuous growth. Passionate about software architecture, clean code, and emerging AI technologies, while equally enjoying peaceful weekends, good movies, road trips, and quality time with loved ones."}
            </p>

            {/* Special Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-charcoal-700">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-100/70 border border-gold-200 text-gold-800">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                Cognizant Ambassador (#CognizantAmbassadorBLR)
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Non-Smoker & Teetotaler
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Non-Manglik
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="no-print pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToPersonal}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-gold-500 via-gold-600 to-terracotta-600 hover:from-gold-600 hover:to-terracotta-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Full Profile</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onPrint}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-charcoal-800 bg-white hover:bg-ivory-200 border border-gold-300 shadow-soft hover:shadow transition-all transform hover:-translate-y-0.5"
                title="Saves a clean, professionally formatted PDF"
              >
                <FileDown className="w-4 h-4 text-gold-600" />
                <span>Save / Print PDF</span>
              </button>

              <button
                onClick={onOpenShare}
                className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-soft transition-all"
                title="Share Bio-Data directly to WhatsApp"
              >
                <Share2 className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">Share on WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Featured Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Outer Decorative Gold Frame */}
              <div className="relative p-3 sm:p-4 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F3ECE0] border-2 border-gold-300 shadow-card">
                
                {/* Traditional Corner Accents */}
                <CornerOrnament position="top-left" />
                <CornerOrnament position="top-right" />
                <CornerOrnament position="bottom-left" />
                <CornerOrnament position="bottom-right" />

                {/* Inner Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal-800 border border-gold-200/80 shadow-inner">
                  <img
                    src={currentPhoto?.url}
                    alt={currentPhoto?.caption || "Bishal Kumar Shaw"}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-black/15 pointer-events-none"></div>

                  {/* Top Badge: Role */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                    <span>{currentPhoto?.tag || "Featured Profile"}</span>
                  </div>

                  {/* Click to Enlarge Button */}
                  <button
                    onClick={() => onSelectPhoto && onSelectPhoto(currentPhoto)}
                    className="no-print absolute top-3 left-3 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110"
                    title="Click to view full image"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="font-serif text-white font-bold text-lg sm:text-xl drop-shadow-sm">
                      {data?.personal?.fullName || "Bishal Kumar Shaw"}
                    </div>
                    <div className="text-xs text-gold-200 font-sans flex items-center gap-1.5 drop-shadow-sm">
                      <span>{currentPhoto?.caption || "Senior / Lead Frontend Engineer"}</span>
                      <span>•</span>
                      <span>{data?.personal?.location || "Bengaluru"}</span>
                    </div>
                  </div>
                </div>

                {/* Photo Gallery Selector Thumbnails */}
                {photos.length > 1 && (
                  <div className="no-print mt-3.5 pt-3 border-t border-gold-200/60 flex items-center justify-center gap-2.5">
                    {photos.map((p, idx) => (
                      <button
                        key={p.id || idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`relative w-12 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          activePhotoIdx === idx
                            ? 'border-gold-500 scale-105 ring-2 ring-gold-300 shadow-sm'
                            : 'border-warmborder opacity-70 hover:opacity-100 hover:border-gold-300'
                        }`}
                        title={p.caption}
                      >
                        <img
                          src={p.url}
                          alt={p.caption}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Heritage & Astrological Snapshot pill below photo */}
              <div className="mt-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-warmborder text-xs text-charcoal-700 font-medium flex items-center justify-center gap-3 shadow-soft">
                <span className="text-gold-700 font-serif font-bold">Hindu</span>
                <span className="text-warmborder">|</span>
                <span>Shaw Community</span>
                <span className="text-warmborder">|</span>
                <span className="text-emerald-700 font-semibold">Non-Manglik</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

