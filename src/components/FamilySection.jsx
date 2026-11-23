import React from 'react';
import {
  Users,
  Heart,
  UserCheck,
  User,
  Home,
  Sparkles,
  MapPin,
  Smile,
  Shield,
  GraduationCap
} from 'lucide-react';
import { GoldDivider, CornerOrnament, LotusIcon } from './DecorativeIcons';

export const FamilySection = ({ data }) => {
  const family = data?.family || {};
  const members = family?.members || [];

  return (
    <section id="family" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-warmborder/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-100/60 px-3 py-1 rounded-full border border-gold-200">
            <Users className="w-3.5 h-3.5 text-gold-600" />
            <span>Family Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mt-2">
            Family Background
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans mt-2">
            A close-knit, cultured, and supportive family rooted in Jasidih, Jharkhand with traditional values and modern warmth.
          </p>
          <GoldDivider className="my-3" />
        </div>

        {/* Family Ethos & Origin Banner */}
        <div className="mb-10 bg-gradient-to-r from-gold-50 via-white to-gold-50 border border-gold-200/90 rounded-2xl p-5 sm:p-6 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-700 shrink-0 border border-gold-300">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-gold-700 block">
                Ancestral Hometown & Roots
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                {family?.origin || "Jasidih, Deoghar District, Jharkhand"}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-sans mt-0.5">
                {family?.values || "Traditional Indian values blended with modern progressive perspectives. A supportive and close-knit family."}
              </p>
            </div>
          </div>
        </div>

        {/* Distinct Respectful Profile Cards for Each Family Member */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Father Card */}
          <div className="bg-white rounded-3xl p-6 border border-warmborder shadow-card hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <CornerOrnament position="top-right" />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200">
                  Father
                </span>
                <UserCheck className="w-5 h-5 text-gold-500" />
              </div>

              <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-3">
                {members[0]?.name || "Bishwanath Shaw"}
              </h3>

              <div className="text-xs font-semibold text-gold-600 mt-0.5">
                {members[0]?.status || "Businessman"}
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed mt-3 font-sans">
                {members[0]?.description || "Head of the family, providing guidance with wisdom, strong moral principles, and continuous encouragement for all family aspirations."}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-warmborder/80 flex items-center justify-between text-[11px] text-charcoal-500">
              <span>Origin: Jasidih, Jharkhand</span>
              <span className="text-emerald-700 font-medium font-serif">Paternal Head</span>
            </div>
          </div>

          {/* 2. Mother Card */}
          <div className="bg-white rounded-3xl p-6 border border-warmborder shadow-card hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <CornerOrnament position="top-right" />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  Mother
                </span>
                <Heart className="w-5 h-5 text-rose-400" />
              </div>

              <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-3">
                {members[1]?.name || "Laxmi Devi"}
              </h3>

              <div className="text-xs font-semibold text-charcoal-700 mt-0.5">
                {members[1]?.status || "Homemaker"}
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed mt-3 font-sans">
                {members[1]?.description || "The heart and emotional soul of our household, upholding cultural values, hospitality, and nurturing warmth across generations."}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-warmborder/80 flex items-center justify-between text-[11px] text-charcoal-500">
              <span>Home: Jasidih, Jharkhand</span>
              <span className="text-rose-600 font-medium font-serif">Maternal Pillar</span>
            </div>
          </div>

          {/* 3. Younger Brother - Badal Kumar Shaw */}
          <div className="bg-white rounded-3xl p-6 border border-warmborder shadow-card hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <CornerOrnament position="top-right" />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200">
                  Younger Brother
                </span>
                <User className="w-5 h-5 text-gold-500" />
              </div>

              <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-3">
                {members[2]?.name || "Badal Kumar Shaw"}
              </h3>

              <div className="text-xs font-semibold text-charcoal-700 mt-0.5">
                {members[2]?.status || "Preparing for Banking"}
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed mt-3 font-sans">
                {members[2]?.description || "Supportive younger brother, career-focused, well-educated, and actively preparing for banking examinations."}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-warmborder/80 flex items-center justify-between text-[11px] text-charcoal-500">
              <span>Location: Jasidih, Jharkhand</span>
              <span className="text-charcoal-600 font-medium">Brother</span>
            </div>
          </div>

          {/* 4. Younger Sister - Bishakha Shaw (Married) Card */}
          <div className="bg-white rounded-3xl p-6 border border-warmborder shadow-card hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <CornerOrnament position="top-right" />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  Younger Sister
                </span>
                <Smile className="w-5 h-5 text-purple-500" />
              </div>

              <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-3">
                {members[3]?.name || "Bishakha Shaw"}
              </h3>

              <div className="text-xs font-semibold text-purple-700 mt-1 inline-flex items-center gap-1 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                {members[3]?.status || "Married & Well-Settled"}
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed mt-3 font-sans">
                {members[3]?.description || "Married, cultured, and family-oriented younger sister, well-settled with family."}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-warmborder/80 flex items-center justify-between text-[11px] text-charcoal-500">
              <span>Status: Married</span>
              <span className="text-purple-700 font-medium">Younger Sister</span>
            </div>
          </div>

          {/* 5. Younger Brother - Shawan Shaw (Studying in Graduation) Card */}
          <div className="bg-white rounded-3xl p-6 border border-warmborder shadow-card hover:shadow-md transition-shadow relative flex flex-col justify-between">
            <CornerOrnament position="top-right" />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Younger Brother
                </span>
                <GraduationCap className="w-5 h-5 text-amber-600" />
              </div>

              <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-3">
                {members[4]?.name || "Shawan Shaw"}
              </h3>

              <div className="text-xs font-semibold text-amber-800 mt-1 inline-flex items-center gap-1 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {members[4]?.status || "Studying in Graduation"}
              </div>

              <p className="text-xs text-charcoal-600 leading-relaxed mt-3 font-sans">
                {members[4]?.description || "Supportive and ambitious younger brother, currently pursuing his graduation."}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-warmborder/80 flex items-center justify-between text-[11px] text-charcoal-500">
              <span>Location: Jasidih, Jharkhand</span>
              <span className="text-amber-800 font-medium">Younger Brother</span>
            </div>
          </div>



          {/* 6. Family Values & Cultural Summary Card
          <div className="bg-gradient-to-br from-[#FAF5EC] to-[#F3ECE0] rounded-3xl p-6 border-2 border-gold-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gold-700">
                <LotusIcon className="w-5 h-5 text-gold-600" />
                <span className="text-xs uppercase font-bold tracking-wider">Family Ethos</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-3">
                Mutual Respect & Harmony
              </h3>

              <p className="text-xs text-charcoal-700 leading-relaxed mt-2.5 font-sans">
                Our family holds high regard for education, cultural integrity, and mutual respect. We celebrate traditional Indian festivals with joy while maintaining a progressive and welcoming attitude toward new family members.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gold-300/60 flex items-center justify-between text-xs text-gold-800 font-serif font-semibold">
              <span>Community: Shaw</span>
              <span>Deoghar, Jharkhand</span>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
};

