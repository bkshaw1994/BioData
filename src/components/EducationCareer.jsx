import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Layers, 
  Cpu, 
  Cloud, 
  Edit3, 
  Sparkles, 
  ExternalLink,
  CheckCircle2,
  Calendar,
  MapPin
} from 'lucide-react';
import { GoldDivider, CornerOrnament } from './DecorativeIcons';

export const EducationCareer = ({ data, onOpenEdit }) => {
  const career = data?.career || {};
  const edu = data?.education || {};

  return (
    <section id="career" className="py-12 sm:py-16 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-100/60 px-3 py-1 rounded-full border border-gold-200">
            <Briefcase className="w-3.5 h-3.5 text-gold-600" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mt-2">
            Career & Educational Background
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans mt-2">
            10+ years of software engineering excellence, technical leadership, and continuous learning.
          </p>
          <GoldDivider className="my-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Career & Technical Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Current Position Main Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warmborder shadow-card relative overflow-hidden">
              <CornerOrnament position="top-right" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-warmborder">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2.5 py-1 rounded-md border border-gold-200 inline-block mb-1">
                    Present Position
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                    {career.currentRole || "Senior / Lead Frontend & Full-Stack Developer"}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-charcoal-700">
                    <span className="text-gold-600 font-bold">{career.currentCompany || "Cognizant"}</span>
                    <span>•</span>
                    <span className="text-charcoal-500 font-normal">{career.currentLocation || "Bengaluru, Karnataka"}</span>
                  </div>
                </div>

                <div className="text-left sm:text-right bg-ivory-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                  <div className="font-serif font-bold text-xl sm:text-2xl text-gold-600">
                    {career.totalExperience || "10+ Years"}
                  </div>
                  <div className="text-xs text-charcoal-500 uppercase tracking-wider font-semibold">
                    Industry Experience
                  </div>
                </div>
              </div>

              {/* Specializations Tags */}
              <div className="mt-6">
                <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider block mb-2.5">
                  Core Specializations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(career.specializations || [
                    "React & Next.js Architecture",
                    "Micro Frontends & Scalable UI",
                    "AI-Driven Enterprise Interfaces",
                    "Performance & Multi-Cloud Systems"
                  ]).map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory-50/80 border border-warmborder text-xs text-charcoal-800 font-medium">
                      <Code2 className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights & Brand Ambassador */}
              <div className="mt-6 pt-5 border-t border-warmborder/80">
                <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider block mb-3">
                  Key Professional Highlights
                </span>
                <div className="space-y-2.5">
                  {(career.highlights || [
                    "Cognizant Brand Ambassador (#CognizantAmbassadorBLR)",
                    "Technical Panelist & Senior Interviewer for Frontend & Full-Stack Engineering",
                    "Leads distributed engineering teams building high-scale enterprise applications",
                    "Active mentor for junior developers and engineering excellence evangelist"
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Career Timeline Note */}
            <div className="bg-[#FAF5EC] p-5 rounded-2xl border border-gold-200/80 flex items-start gap-3">
              <Award className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div className="text-xs text-charcoal-700 leading-relaxed">
                <strong className="text-charcoal-900 block font-serif text-sm mb-0.5">Recognized Technical Leadership</strong>
                With a decade of hands-on software development across leading IT enterprises, Bishal combines modern architecture proficiency with high organizational trust and team mentorship.
              </div>
            </div>

          </div>

          {/* Education Timeline & Certification Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-warmborder shadow-card relative">
              <CornerOrnament position="top-left" />

              <div className="flex items-center justify-between pb-4 border-b border-warmborder">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 border border-gold-200">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">
                      Education & Certifications
                    </h3>
                    <span className="text-xs text-charcoal-500 font-sans">
                      Degrees and professional qualifications
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenEdit}
                  className="no-print text-xs font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1 bg-gold-50 px-2.5 py-1 rounded-lg border border-gold-200"
                  title="Customize College & Degree details"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Details</span>
                </button>
              </div>

              {/* Education Cards Stack */}
              <div className="mt-5 space-y-4">
                
                {/* 1. Bachelor's Degree Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-ivory-50 to-white border border-gold-200 shadow-sm relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-gold-700 bg-gold-100/80 px-2.5 py-0.5 rounded tracking-wider">
                      Undergraduate Degree (Bachelor's)
                    </span>
                    <button
                      onClick={onOpenEdit}
                      className="no-print text-[11px] text-gold-600 hover:underline flex items-center gap-0.5"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit University</span>
                    </button>
                  </div>
                  <h4 className="font-serif font-bold text-charcoal-900 text-lg mt-2">
                    {edu?.graduation?.degree || "Bachelor of Technology / Engineering (B.Tech / B.E.)"}
                  </h4>
                  <div className="text-sm font-semibold text-charcoal-700 mt-1">
                    {edu?.graduation?.institution || "Engineering College / University [Click to customize]"}
                  </div>
                  <div className="text-xs text-gold-600 font-medium mt-0.5">
                    {edu?.graduation?.year || "2012 - 2016"}
                  </div>
                  <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                    {edu?.graduation?.details || "First Class in Computer Science & Engineering with strong analytical, algorithms, and software design foundation."}
                  </p>
                </div>

                {/* 2. Schooling */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-ivory-50 to-white border border-warmborder">
                  <span className="text-[10px] uppercase font-bold text-charcoal-500 bg-ivory-200 px-2 py-0.5 rounded tracking-wider">
                    Schooling & Higher Secondary
                  </span>
                  <h4 className="font-serif font-bold text-charcoal-900 text-base mt-1.5">
                    {edu?.schooling?.school || "Senior Secondary High School"}
                  </h4>
                  <div className="text-xs text-charcoal-600 mt-0.5 font-medium">
                    {edu?.schooling?.location || "Jasidih / Deoghar, Jharkhand"}
                  </div>
                  <p className="text-xs text-charcoal-500 mt-1.5">
                    {edu?.schooling?.details || "Science Stream (Mathematics, Physics, Chemistry)."}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

