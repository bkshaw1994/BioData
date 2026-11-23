import React, { useState, useEffect } from 'react';
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
import { EditBioModal } from './components/EditBioModal';
import { ShareModal } from './components/ShareModal';
import { PhotoModal } from './components/PhotoModal';
import { PrintBioData } from './components/PrintBioData';
import { Share2, Printer, Sparkles, Edit3 } from 'lucide-react';

export default function App() {
  const [bioData, setBioData] = useState(() => {
    try {
      const saved = localStorage.getItem('biodata_bishal_v10') || localStorage.getItem('biodata_bishal_v9') || localStorage.getItem('biodata_bishal_v8') || localStorage.getItem('biodata_bishal_v7') || localStorage.getItem('biodata_bishal_v6') || localStorage.getItem('biodata_bishal_v5') || localStorage.getItem('biodata_bishal_v4') || localStorage.getItem('biodata_bishal_v3') || localStorage.getItem('biodata_bishal_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure real photos are used if previously saved photos were placeholders
        if (parsed?.photos?.[0]?.url?.includes('unsplash')) {
          parsed.photos = initialBioData.photos;
        }
        // Remove Postgraduate certificate and Schooling if present in saved storage
        if (parsed?.education?.postGraduation) {
          delete parsed.education.postGraduation;
        }
        if (parsed?.education?.schooling) {
          delete parsed.education.schooling;
        }
        // Ensure degree reflects Electronics & Communication Engineering
        if (parsed?.education?.graduation) {
          parsed.education.graduation.degree = "Bachelor of Technology (B.Tech) - Electronics & Communication Engineering";
          parsed.education.graduation.details = "First Class with Distinction in Electronics and Communication Engineering (ECE).";
        }
        // Clean brother-in-law details from elder sister
        if (parsed?.family?.members?.[3]) {
          delete parsed.family.members[3].spouse;
          parsed.family.members[3].status = "Married & Well-Settled";
          parsed.family.members[3].description = "Happily married and well-settled with family.";
        }
        // Remove smoking and drinking fields
        if (parsed?.personal?.smoking) {
          delete parsed.personal.smoking;
        }
        if (parsed?.personal?.drinking) {
          delete parsed.personal.drinking;
        }
        // Update title to Senior Associate if old title present
        if (!parsed.personal) parsed.personal = {};
        parsed.personal.title = "Senior Associate";
        parsed.personal.tagline = "Senior Associate at Cognizant | Bengaluru, Karnataka";
        if (!parsed.career) parsed.career = {};
        parsed.career.currentRole = "Senior Associate";
        if (parsed.career.workHistory?.[0]) {
          parsed.career.workHistory[0].role = "Senior Associate";
        }
        // Remove Ambassador from highlights
        if (parsed?.career?.highlights) {
          parsed.career.highlights = parsed.career.highlights.filter(h => !h.includes("Ambassador"));
        }
        // Update Manglik status
        if (!parsed.horoscope) parsed.horoscope = {};
        parsed.horoscope.manglik = "Manglik";
        return parsed;
      }
    } catch (e) {
      console.error("Failed to load saved biodata", e);
    }
    return initialBioData;
  });

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSaveData = (updatedData) => {
    // Ensure clean fields
    if (updatedData?.education?.postGraduation) {
      delete updatedData.education.postGraduation;
    }
    if (updatedData?.education?.schooling) {
      delete updatedData.education.schooling;
    }
    if (updatedData?.personal?.smoking) {
      delete updatedData.personal.smoking;
    }
    if (updatedData?.personal?.drinking) {
      delete updatedData.personal.drinking;
    }
    if (updatedData?.career?.highlights) {
      updatedData.career.highlights = updatedData.career.highlights.filter(h => !h.includes("Ambassador"));
    }
    if (updatedData?.family?.members?.[3]) {
      delete updatedData.family.members[3].spouse;
    }
    setBioData(updatedData);
    try {
      localStorage.setItem('biodata_bishal_v10', JSON.stringify(updatedData));
    } catch (e) {
      console.error("Failed to persist biodata", e);
    }
  };

  const handleResetData = () => {
    setBioData(initialBioData);
    try {
      localStorage.removeItem('biodata_bishal_v10');
      localStorage.removeItem('biodata_bishal_v9');
      localStorage.removeItem('biodata_bishal_v8');
      localStorage.removeItem('biodata_bishal_v7');
      localStorage.removeItem('biodata_bishal_v6');
      localStorage.removeItem('biodata_bishal_v5');
      localStorage.removeItem('biodata_bishal_v4');
      localStorage.removeItem('biodata_bishal_v3');
      localStorage.removeItem('biodata_bishal_v2');
      localStorage.removeItem('biodata_bishal_v1');
    } catch (e) {
      console.error("Failed to clear biodata", e);
    }
  };

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
          onOpenEdit={() => setEditModalOpen(true)}
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
            onOpenEdit={() => setEditModalOpen(true)}
            onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          />

          {/* Section B: Personal & Horoscope Details */}
          <PersonalInfo
            data={bioData}
            onOpenEdit={() => setEditModalOpen(true)}
          />

          {/* Section C: Education & Career */}
          <EducationCareer
            data={bioData}
            onOpenEdit={() => setEditModalOpen(true)}
          />

          {/* Section D: Family Background */}
          <FamilySection
            data={bioData}
            onOpenEdit={() => setEditModalOpen(true)}
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
            onOpenEdit={() => setEditModalOpen(true)}
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
            onClick={() => setEditModalOpen(true)}
            className="group flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-white text-gold-700 hover:text-gold-800 border border-gold-300 shadow-md hover:shadow-lg transition-all hover:scale-105"
            title="Customize details"
          >
            <Edit3 className="w-5 h-5 text-gold-600" />
            <span className="hidden sm:inline text-xs font-semibold">Customize Bio</span>
          </button>

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
        <EditBioModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          data={bioData}
          onSave={handleSaveData}
          onReset={handleResetData}
        />

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

