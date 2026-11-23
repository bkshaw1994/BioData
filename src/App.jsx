import React, { useState } from 'react';
import { initialBioData } from './data/biodata';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalInfo } from './components/PersonalInfo';
import { EducationCareer } from './components/EducationCareer';
import { FamilySection } from './components/FamilySection';
// import { PartnerPreferences } from './components/PartnerPreferences';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { PhotoModal } from './components/PhotoModal';
import { PrintBioData } from './components/PrintBioData';
import { Share2 } from 'lucide-react';

export default function App() {
  const [bioData] = useState(() => {
    try {
      ['biodata_bishal_v1', 'biodata_bishal_v2', 'biodata_bishal_v3', 'biodata_bishal_v4', 'biodata_bishal_v5', 'biodata_bishal_v6', 'biodata_bishal_v7', 'biodata_bishal_v8', 'biodata_bishal_v9', 'biodata_bishal_v10'].forEach(k => localStorage.removeItem(k));
    } catch (e) {
      // Ignore
    }
    return initialBioData;
  });

  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-800 antialiased selection:bg-gold-200 selection:text-gold-900 bg-mandala-pattern">

      {/* SCREEN VIEW (Hidden during @media print) */}
      <div className="print:hidden">
        {/* Navigation Bar */}
        <Navbar
          data={bioData}
          onOpenShare={() => setShareModalOpen(true)}
          onPrint={handlePrint}
        />

        {/* Main Content Sections */}
        <main>
          {/* Section A: Hero Section */}
          <Hero
            data={bioData}
            onPrint={handlePrint}
            onOpenShare={() => setShareModalOpen(true)}
            onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          />

          {/* Section B: Personal & Horoscope Details */}
          <PersonalInfo
            data={bioData}
          />

          {/* Section C: Education & Career */}
          <EducationCareer
            data={bioData}
          />

          {/* Section D: Family Background */}
          <FamilySection
            data={bioData}
          />

          {/* Desired Partner Preferences */}
          {/* <PartnerPreferences
            data={bioData}
          /> */}

          {/* Photo Gallery & Lifestyle */}
          <PhotoGallery
            data={bioData}
            onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          />

          {/* Family Contact & Communication */}
          <ContactSection
            data={bioData}
            onOpenShare={() => setShareModalOpen(true)}
            onPrint={handlePrint}
          />
        </main>

        {/* Footer */}
        <Footer
          data={bioData}
          onPrint={handlePrint}
          onOpenShare={() => setShareModalOpen(true)}
        />

        {/* Floating Quick Action Widget for Mobile & Desktop */}
        <div id="whatsapp-floating" className="no-print fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
          <button
            onClick={() => setShareModalOpen(true)}
            className="group flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            title="Share Bio-Data via WhatsApp"
          >
            <Share2 className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-semibold">Share on WhatsApp</span>
          </button>
        </div>

        {/* Interactive Modals */}
        <ShareModal
          isOpen={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
          data={bioData}
        />

        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      </div>

      {/* DEDICATED PRINT / PDF OUTPUT (Only visible when printing or saving as PDF) */}
      <PrintBioData data={bioData} />

    </div>
  );
}
