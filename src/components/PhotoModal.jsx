import React from 'react';
import { X, Sparkles, MapPin, Maximize2 } from 'lucide-react';

export const PhotoModal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative max-w-3xl w-full max-h-[90vh] bg-charcoal-900 rounded-3xl overflow-hidden shadow-2xl border border-gold-400/30 flex flex-col z-10">
        
        {/* Header Bar */}
        <div className="p-4 px-6 flex items-center justify-between border-b border-white/10 bg-black/40">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              {photo.caption || "Photograph"}
            </h3>
            <span className="text-xs text-gold-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{photo.tag || "Bishal Kumar Shaw"}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/60">
          <img
            src={photo.url}
            alt={photo.caption}
            className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
          />
        </div>

        {/* Footer info */}
        <div className="p-3 bg-black/50 text-center text-xs text-white/60">
          Marriage Bio-Data • Bishal Kumar Shaw • Senior/Lead Frontend Engineer at Cognizant
        </div>
      </div>
    </div>
  );
};

