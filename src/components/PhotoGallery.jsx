import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Award, MapPin, Heart } from 'lucide-react';
import { GoldDivider, CornerOrnament } from './DecorativeIcons';

export const PhotoGallery = ({ data, onSelectPhoto }) => {
  const photos = data?.photos || [];

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-100/60 px-3 py-1 rounded-full border border-gold-200">
            <Camera className="w-3.5 h-3.5 text-gold-600" />
            <span>Visual Portrait</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mt-2">
            Photo Gallery
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans mt-2">
            Moments reflecting professional leadership, lifestyle, travel, and cultural traditions.
          </p>
          <GoldDivider className="my-3" />
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id || index}
              onClick={() => onSelectPhoto && onSelectPhoto(photo)}
              className="group cursor-pointer bg-white rounded-3xl p-3 border border-warmborder hover:border-gold-300 shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal-900">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-gold-300" />
                  <span>{photo.tag}</span>
                </div>

                {/* Enlarge Icon on Hover */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-sm font-serif font-bold text-white block drop-shadow-sm">
                    {photo.caption}
                  </span>
                  <span className="text-[11px] text-gold-200 block drop-shadow-sm font-sans">
                    Click to view full photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

