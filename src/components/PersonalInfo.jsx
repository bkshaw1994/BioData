import React from 'react';
import {
  User,
  Calendar,
  Clock,
  MapPin,
  Ruler,
  Compass,
  Utensils,
  Heart,
  Sparkles,
  Languages,
  ShieldCheck,
  Activity,
  Smile,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { GoldDivider, CornerOrnament, LotusIcon } from './DecorativeIcons';

export const PersonalInfo = ({ data }) => {
  const p = data?.personal || {};
  const h = data?.horoscope || {};

  return (
    <section id="personal" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-warmborder/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-100/60 px-3 py-1 rounded-full border border-gold-200">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Profile Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mt-2">
            Personal & Astrological Details
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans mt-2">
            Key physical attributes, lifestyle habits, birth details, and horoscope specifications.
          </p>
          <GoldDivider className="my-3" />
        </div>

        {/* 2-Column Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Column 1: Personal Attributes (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-warmborder shadow-card relative">
            <CornerOrnament position="top-right" />

            <div className="flex items-center justify-between pb-4 border-b border-warmborder/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 border border-gold-200">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                    Personal Profile & Lifestyle
                  </h3>
                  <span className="text-xs text-charcoal-500 font-sans">
                    General, physical, and day-to-day characteristics
                  </span>
                </div>
              </div>
            </div>

            {/* Structured 2-column key-value grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-6">

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <User className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Full Name</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.fullName || "Bishal Kumar Shaw"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Calendar className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Date of Birth</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.dob || "July 9, 1994"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Clock className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Time of Birth</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.tob || "03:55 AM"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Place of Birth</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.pob || "Jasidih, Jharkhand, India"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Calendar className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Age</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.age || "32 Years"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Ruler className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Height</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.height || "6'0\" (183 cm)"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Current Residence</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.location || "Bengaluru, Karnataka"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Hometown</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.hometown || "Jasidih, Jharkhand"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Heart className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Marital Status</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.maritalStatus || "Never Married"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Compass className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Religion & Caste</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.religion} • {p.casteCommunity}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Sparkles className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Gotra</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.gotra || "Kashyap"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-ivory-50 transition-colors">
                <Activity className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold block">Complexion & Weight</span>
                  <span className="text-sm font-semibold text-charcoal-800">{p.complexion || "Wheatish"} • {p.weight || "78 kg"}</span>
                </div>
              </div>

            </div>

            {/* Diet & Lifestyle Highlight Box */}
            <div className="mt-6 pt-5 border-t border-warmborder/80 space-y-4">
              <div className="bg-ivory-100 p-4 rounded-2xl border border-warmborder flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-charcoal-700 uppercase tracking-wide block">Dietary Preference</span>
                    <p className="text-sm text-charcoal-800 font-medium">
                      {p.diet || "Vegetarian & Non-Vegetarian"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages Known Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-charcoal-600 flex items-center gap-1 mr-1">
                  <Languages className="w-3.5 h-3.5 text-gold-500" />
                  Languages Known:
                </span>
                {(p.languages || ["English", "Hindi", "Bengali"]).map((lang, idx) => (
                  <span key={idx} className="text-xs bg-gold-50 text-gold-800 border border-gold-200 px-2.5 py-1 rounded-full font-medium">
                    {lang}
                  </span>
                ))}
              </div>

              {/* Hobbies & Leisure */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-charcoal-600 flex items-center gap-1 mr-1">
                  <Smile className="w-3.5 h-3.5 text-gold-500" />
                  Interests:
                </span>
                {(p.hobbies || ["Cooking", "Road trips & Long drives", "Cinema & Storytelling", "Tech & Gaming"]).map((hobby, idx) => (
                  <span key={idx} className="text-xs bg-white text-charcoal-700 border border-warmborder px-2.5 py-0.5 rounded-md">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Astrological & Kundli Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-6 sm:p-8 border-2 border-gold-200/90 shadow-card relative">
            <CornerOrnament position="top-left" />
            <CornerOrnament position="bottom-right" />

            <div className="flex items-center justify-between pb-4 border-b border-gold-200/70">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gold-100 flex items-center justify-center text-gold-700 border border-gold-300">
                  <LotusIcon className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                    Horoscope & Kundli Details
                  </h3>
                  <span className="text-xs text-gold-700 font-sans font-medium">
                    Astrological and planetary positions
                  </span>
                </div>
              </div>
            </div>

            {/* Auspicious Manglik status highlight banner */}
            <div className="mt-5 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <div>
                  <span className="text-xs font-bold text-amber-950 uppercase tracking-wide block">Manglik Status</span>
                  <span className="text-sm font-bold text-amber-900">{h.manglik || "Manglik"}</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                Kundli Particular
              </span>
            </div>

            {/* Kundli parameters table */}
            <div className="mt-5 space-y-3 font-sans">
              <div className="flex items-center justify-between py-2 border-b border-gold-200/50">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Rashi (Moon Sign)</span>
                <span className="text-sm font-serif font-bold text-charcoal-900">{h.rashi || "Kanya (Virgo)"}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gold-200/50">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Nakshatra</span>
                <span className="text-sm font-semibold text-charcoal-900">{h.nakshatra || "Pushya / Punarvasu"}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gold-200/50">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Charan</span>
                <span className="text-sm font-semibold text-charcoal-900">{h.charan || "4th Charan"}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gold-200/50">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Gan</span>
                <span className="text-sm font-semibold text-charcoal-900">{h.gan || "Dev Gan"}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gold-200/50">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Nadi</span>
                <span className="text-sm font-semibold text-charcoal-900">{h.nadi || "Madhya"}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gold-200/50">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Sun Sign</span>
                <span className="text-sm font-semibold text-charcoal-900">{h.sunSign || "Cancer"}</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Gotra</span>
                <span className="text-sm font-semibold text-charcoal-900">{p.gotra || "Kashyap"}</span>
              </div>
            </div>

            {/* Note on Kundli matching */}
            <div className="mt-6 p-4 rounded-2xl bg-white/80 border border-gold-200 text-center">
              <span className="text-xs text-charcoal-600 block leading-relaxed">
                ✨ <strong>Astrological Note:</strong> Complete Kundli chart and detailed birth particulars are gladly available for gun milan / horoscope matching upon mutual interest.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

