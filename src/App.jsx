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
import { PhotoModal } from './components/PhotoModal';
import { PrintBioData } from './components/PrintBioData';
import { downloadBioDataPDF } from './utils/downloadPdf';

export default function App() {
  const [bioData] = useState(() => {
    try {
      ['biodata_bishal_v1', 'biodata_bishal_v2', 'biodata_bishal_v3', 'biodata_bishal_v4', 'biodata_bishal_v5', 'biodata_bishal_v6', 'biodata_bishal_v7', 'biodata_bishal_v8', 'biodata_bishal_v9', 'biodata_bishal_v10'].forEach(k => localStorage.removeItem(k));
    } catch (e) {
      // Ignore
    }
    return initialBioData;
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadBioDataPDF();
    } catch (e) {
      console.error("Direct download failed", e);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-800 antialiased selection:bg-gold-200 selection:text-gold-900 bg-mandala-pattern">

      {/* SCREEN VIEW */}
      <div>
        {/* Navigation Bar */}
        <Navbar
          data={bioData}
          onDownload={handleDownload}
          isDownloading={isDownloading}
        />

        {/* Main Content Sections */}
        <main>
          {/* Section A: Hero Section */}
          <Hero
            data={bioData}
            onDownload={handleDownload}
            isDownloading={isDownloading}
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
            onDownload={handleDownload}
            isDownloading={isDownloading}
          />
        </main>

        {/* Footer */}
        <Footer
          data={bioData}
          onDownload={handleDownload}
          isDownloading={isDownloading}
        />

        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      </div>

      {/* DEDICATED PDF EXPORT DOM CONTAINER (Rendered off-screen for instant PDF direct download) */}
      <PrintBioData data={bioData} />

    </div>
  );
}
