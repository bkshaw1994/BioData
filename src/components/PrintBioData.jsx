import React from 'react';
import { LotusIcon, DiyaIcon } from './DecorativeIcons';

export const PrintBioData = ({ data }) => {
  const p = data?.personal || {};
  const h = data?.horoscope || {};
  const c = data?.career || {};
  const e = data?.education || {};
  const f = data?.family || {};
  const pref = data?.partnerPreferences || {};
  const contact = data?.contact || {};
  const primaryPhoto = data?.photos?.[0] || {};

  return (
    <div
      id="pdf-download-wrapper"
      className="print:w-full print:bg-white print:text-black font-sans text-[10pt] leading-tight"
      style={{
        position: 'fixed',
        left: '-99999px',
        top: 0,
        width: '794px',
        zIndex: -100,
        pointerEvents: 'none'
      }}
    >

      {/* PAGE 1: Personal, Astrological, Career & Education */}
      <div
        id="pdf-page-1"
        className="w-[794px] min-h-[1120px] p-8 bg-white text-black border-2 border-amber-800/40 relative flex flex-col justify-between"
        style={{ pageBreakAfter: 'always' }}
      >

        <div>
          {/* Top Auspicious Header */}
          <div className="text-center pb-2 border-b-2 border-amber-700/60 mb-4">
            <div className="text-amber-900 font-serif font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2">
              <span>|| ॐ श्री गणेशाय नमः ||</span>
            </div>
            <div className="font-serif text-2xl font-bold text-gray-900 tracking-tight mt-1">
              MARRIAGE BIO-DATA
            </div>
          </div>

          {/* Candidate Summary Box with Photo */}
          <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-amber-700/30 bg-amber-50/20 mb-4">
            <div className="flex-1 space-y-1">
              <h1 className="font-serif text-2xl font-bold text-gray-950">
                {p.fullName || "Bishal Kumar Shaw"}
              </h1>
              <div className="text-amber-800 font-semibold text-xs font-serif">
                {c.currentRole || "Senior Associate"} at {c.currentCompany || "Cognizant"}
              </div>
              <div className="text-[9.5pt] text-gray-700 pt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                <span><strong>Age:</strong> {p.age || "32 Years"}</span>
                <span>•</span>
                <span><strong>Height:</strong> {p.height || "6'0\" (183 cm)"}</span>
                <span>•</span>
                <span><strong>DOB:</strong> {p.dob || "July 9, 1994"}</span>
                <span>•</span>
                <span><strong>Location:</strong> {p.location || "Bengaluru, Karnataka"}</span>
              </div>
              <div className="text-[9pt] text-gray-600 italic pt-1">
                "{p.aboutMe}"
              </div>
            </div>

            {/* Passport Size Portrait */}
            {primaryPhoto?.url && (
              <div className="w-28 h-36 rounded-lg overflow-hidden border-2 border-amber-800/60 shadow-sm shrink-0">
                <img
                  src={primaryPhoto.url}
                  alt={p.fullName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>

          {/* Section: Personal & Astrological Details (2 Columns) */}
          <div className="mb-4">
            <div className="bg-amber-100/70 border-l-4 border-amber-700 px-3 py-1 font-serif font-bold text-xs text-amber-950 uppercase tracking-wider mb-2">
              1. Personal & Astrological (Kundli) Particulars
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[9.5pt]">
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Full Name:</span>
                <span className="font-semibold text-gray-900">{p.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Date of Birth:</span>
                <span className="font-semibold text-gray-900">{p.dob}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Time of Birth:</span>
                <span className="font-semibold text-gray-900">{p.tob}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Place of Birth:</span>
                <span className="font-semibold text-gray-900">{p.pob}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Height:</span>
                <span className="font-semibold text-gray-900">{p.height}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Complexion:</span>
                <span className="font-semibold text-gray-900">{p.complexion || "Wheatish"}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Religion & Community:</span>
                <span className="font-semibold text-gray-900">{p.religion} • {p.casteCommunity}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Gotra:</span>
                <span className="font-semibold text-gray-900">{p.gotra || "Kashyap"}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Rashi:</span>
                <span className="font-semibold text-gray-900">{h.rashi || "Cancer"}</span>
              </div>
              {/* Commented out as of now - to be added later
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Nakshatra:</span>
                <span className="font-semibold text-gray-900">{h.nakshatra || "Pushya / Punarvasu"}</span>
              </div>
              */}

              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Manglik Status:</span>
                <span className="font-bold text-gray-900">{h.manglik || "Manglik"}</span>
              </div>
              {/* Commented out as of now - to be added later
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Gan / Charan:</span>
                <span className="font-semibold text-gray-900">{h.gan || "Dev"} / {h.charan || "4th"}</span>
              </div>
              */}

              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Hobbies:</span>
                <span className="font-semibold text-gray-900">{Array.isArray(p.hobbies) ? p.hobbies.join(', ') : "Cooking, Road trips, Cinema, Tech"}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-0.5">
                <span className="text-gray-600">Languages Known:</span>
                <span className="font-semibold text-gray-900">English, Hindi, Bengali</span>
              </div>
            </div>
          </div>

          {/* Section: Professional & Educational Credentials */}
          <div className="mb-4">
            <div className="bg-amber-100/70 border-l-4 border-amber-700 px-3 py-1 font-serif font-bold text-xs text-amber-950 uppercase tracking-wider mb-2">
              2. Career & Educational Qualifications
            </div>

            <div className="space-y-2 text-[9.5pt]">
              <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50/50">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>{c.currentRole || "Senior Associate"}</span>
                  <span className="text-amber-800">{c.totalExperience || "10+ Years Experience"}</span>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  {c.currentCompany || "Cognizant Technology Solutions"} • {c.currentLocation || "Bengaluru, Karnataka"}
                </div>
                <div className="text-[9pt] text-gray-600 mt-1">
                  <strong>Specialization:</strong> React, Next.js, Micro Frontends, AI Enterprise UI, Cloud Deployment. Senior Technical Interviewer & Engineering Mentor.
                </div>
              </div>

              <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50/40 text-[9pt]">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-gray-900 block text-xs">
                      {e?.graduation?.degree || "Bachelor of Technology (B.Tech) - Electronics & Communication Engineering"}
                    </span>
                    <span className="text-gray-700 font-semibold">{e?.graduation?.institution || "Engineering College / University"}</span>
                  </div>
                  <span className="text-amber-800 font-semibold text-[8.5pt]">{e?.graduation?.year || "2012 - 2016"}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Page 1 Footer */}
        <div className="text-center pt-2 border-t border-gray-300 text-[8.5pt] text-gray-500 flex justify-between">
          <span>Marriage Bio-Data: Bishal Kumar Shaw</span>
          <span>Page 1 of 2</span>
        </div>

      </div>

      {/* PAGE 2: Family Background, Partner Preferences & Contact Details */}
      <div
        id="pdf-page-2"
        className="w-[794px] min-h-[1120px] p-8 bg-white text-black border-2 border-amber-800/40 relative flex flex-col justify-between"
      >

        <div>
          {/* Top Header Page 2 */}
          <div className="text-center pb-2 border-b-2 border-amber-700/60 mb-4">
            <div className="text-amber-900 font-serif font-bold text-sm tracking-widest uppercase">
              || शुभम् अस्तु ||
            </div>
            <div className="font-serif text-xl font-bold text-gray-900 tracking-tight">
              BISHAL KUMAR SHAW — FAMILY & CONTACT PARTICULARS
            </div>
          </div>

          {/* Section: Family Background */}
          <div className="mb-4">
            <div className="bg-amber-100/70 border-l-4 border-amber-700 px-3 py-1 font-serif font-bold text-xs text-amber-950 uppercase tracking-wider mb-2">
              3. Family Details & Heritage
            </div>

            <div className="p-2.5 rounded-lg border border-gray-200 bg-gray-50/50 mb-3 text-[9.5pt]">
              <div><strong>Ancestral Roots & Hometown:</strong> {f.origin || "Jasidih, Deoghar District, Jharkhand"}</div>
              <div className="text-gray-600 text-[9pt] mt-0.5"><strong>Family Values:</strong> {f.values || "Moderate, close-knit, cultured family with traditional warmth and progressive thinking."}</div>
            </div>

            <div className="space-y-2 text-[9.5pt]">
              {/* Father */}
              <div className="p-2 rounded-lg border border-gray-200 flex justify-between items-start">
                <div>
                  <span className="font-bold text-gray-900">Father: </span>
                  <span className="font-semibold text-gray-800">{f.members?.[0]?.name || "Bishwanath Shaw"}</span>
                  <div className="text-xs text-gray-600">{f.members?.[0]?.status || "Businessman / Retired Professional"}</div>
                </div>
                <span className="text-[8.5pt] uppercase text-gray-500 font-bold">Paternal</span>
              </div>

              {/* Mother */}
              <div className="p-2 rounded-lg border border-gray-200 flex justify-between items-start">
                <div>
                  <span className="font-bold text-gray-900">Mother: </span>
                  <span className="font-semibold text-gray-800">{f.members?.[1]?.name || "Smt. Shaw"}</span>
                  <div className="text-xs text-gray-600">{f.members?.[1]?.status || "Homemaker"}</div>
                </div>
                <span className="text-[8.5pt] uppercase text-gray-500 font-bold">Maternal</span>
              </div>

              {/* Brother */}
              <div className="p-2 rounded-lg border border-gray-200 flex justify-between items-start">
                <div>
                  <span className="font-bold text-gray-900">Younger Brother: </span>
                  <span className="font-semibold text-gray-800">{f.members?.[2]?.name || "Badal Kumar Shaw"}</span>
                  <div className="text-xs text-gray-600">{f.members?.[2]?.status || "Software Professional / Working"}</div>
                </div>
                <span className="text-[8.5pt] uppercase text-gray-500 font-bold">Brother</span>
              </div>

              {/* Younger Sister */}
              <div className="p-2 rounded-lg border border-gray-200 flex justify-between items-start">
                <div>
                  <span className="font-bold text-gray-900">Younger Sister: </span>
                  <span className="font-semibold text-gray-800">{f.members?.[3]?.name || "Bishakha Shaw"}</span>
                  <div className="text-xs text-gray-600">{f.members?.[3]?.status || "Married & Well-Settled"}</div>
                </div>
                <span className="text-[8.5pt] uppercase text-gray-500 font-bold">Sister</span>
              </div>

              {/* Younger Brother - Shawan */}
              <div className="p-2 rounded-lg border border-gray-200 flex justify-between items-start">
                <div>
                  <span className="font-bold text-gray-900">Younger Brother: </span>
                  <span className="font-semibold text-gray-800">{f.members?.[4]?.name || "Shawan Shaw"}</span>
                  <div className="text-xs text-gray-600">{f.members?.[4]?.status || "Studying in Graduation"}</div>
                </div>
                <span className="text-[8.5pt] uppercase text-gray-500 font-bold">Brother</span>
              </div>
            </div>
          </div>

          {/* Section: Contact & Communication */}
          <div className="mb-4">
            <div className="bg-amber-100/70 border-l-4 border-amber-700 px-3 py-1 font-serif font-bold text-xs text-amber-950 uppercase tracking-wider mb-2">
              4. Contact & Addresses for Communication
            </div>

            <div className="grid grid-cols-2 gap-4 text-[9.5pt]">
              <div className="p-2.5 rounded-lg border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">Direct Family Contacts:</span>
                <div><strong>Primary Contact:</strong> {contact.primaryContactPerson || "Bishwanath Shaw"}</div>
                <div><strong>Primary Phone:</strong> {contact.phone || "+91 9031938060"}</div>
                <div><strong>Alternate Contact:</strong> {contact.alternatePhone || "+91 7209151048"}</div>
              </div>

              <div className="p-2.5 rounded-lg border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">Addresses:</span>
                <div><strong>Current Residence:</strong> {contact.residenceAddress || "Bengaluru, Karnataka"}</div>
                <div className="mt-1"><strong>Hometown Address:</strong> {contact.nativeAddress || "Jasidih, Deoghar District, Jharkhand - 814142"}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Page 2 Blessing Footer */}
        <div className="text-center pt-3 border-t-2 border-amber-700/60 text-[9pt] text-gray-600">
          <div className="font-serif italic font-semibold text-amber-900">
            "शुभं करोति कल्याणम् आरोग्यं धनसंपदा"
          </div>
          <div className="text-[8pt] text-gray-500 mt-0.5">
            Document generated from verified Marriage Bio-Data web portal • Page 2 of 2
          </div>
        </div>

      </div>

    </div>
  );
};

