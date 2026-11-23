import React from 'react';
import { 
  Heart, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Ruler, 
  Utensils, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GoldDivider, CornerOrnament } from './DecorativeIcons';

export const PartnerPreferences = ({ data }) => {
  const pref = data?.partnerPreferences || {};

  return (
    <section id="preferences" className="py-12 sm:py-16 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-100/60 px-3 py-1 rounded-full border border-gold-200">
            <Heart className="w-3.5 h-3.5 text-gold-600" />
            <span>Compatibility & Expectations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mt-2">
            Desired Partner Profile
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans mt-2">
            Looking for a life partner with mutual respect, shared cultural understanding, and a warm heart.
          </p>
          <GoldDivider className="my-3" />
        </div>

        {/* Highlighted Thoughtful Vision Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-warmborder shadow-card relative">
          <CornerOrnament position="top-left" />
          <CornerOrnament position="bottom-right" />

          <p className="font-serif italic text-base sm:text-lg text-charcoal-800 text-center leading-relaxed max-w-2xl mx-auto">
            "{pref.summary || "Seeking an understanding, cheerful, and educated life partner with a healthy balance of traditional warmth and modern outlook. Someone who values family bonds, mutual encouragement, and companionship in all walks of life."}"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-warmborder/80">
            
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-ivory-50 border border-warmborder/70">
              <Calendar className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500 block">Age Preference</span>
                <span className="text-sm font-semibold text-charcoal-800">{pref.ageRange || "26 – 31 Years"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-ivory-50 border border-warmborder/70">
              <Ruler className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500 block">Height Preference</span>
                <span className="text-sm font-semibold text-charcoal-800">{pref.heightRange || "5'2\" – 5'8\""}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-ivory-50 border border-warmborder/70">
              <GraduationCap className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500 block">Education</span>
                <span className="text-sm font-semibold text-charcoal-800">{pref.education || "Graduate / Post-Graduate in any discipline"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-ivory-50 border border-warmborder/70">
              <Briefcase className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500 block">Career & Profession</span>
                <span className="text-sm font-semibold text-charcoal-800">{pref.profession || "Working professional / Career-oriented (encouraged & supported)"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-ivory-50 border border-warmborder/70">
              <Utensils className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500 block">Diet & Habits</span>
                <span className="text-sm font-semibold text-charcoal-800">{pref.diet || "Vegetarian or Non-Vegetarian"}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-ivory-50 border border-warmborder/70">
              <MapPin className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-charcoal-500 block">Location Compatibility</span>
                <span className="text-sm font-semibold text-charcoal-800">{pref.location || "Open to Bengaluru or mutual relocation"}</span>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-warmborder/60 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-600 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Belief in equality, emotional maturity, open dialogue, and shared life goals.</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

