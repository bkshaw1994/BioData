import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageSquare, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ShareModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://bishalkumarshaw-biodata.web.app';
  
  const candidateName = data?.personal?.fullName || "Bishal Kumar Shaw";
  const role = data?.personal?.title || "Senior / Lead Full-Stack & Frontend Engineer at Cognizant";
  const location = data?.personal?.location || "Bengaluru";

  const prefilledMessage = `Namaste / Hello,\n\nSharing the Marriage Bio-Data of ${candidateName} (${role}, ${location}):\n\n${currentUrl}\n\nPlease feel free to review the profile, Kundli particulars, and family background. Looking forward to connecting respectfully.`;

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(prefilledMessage);
      setCopied(true);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppOpen = () => {
    const encoded = encodeURIComponent(prefilledMessage);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-emerald-300 flex flex-col z-10 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 px-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal-900">
                Share Bio-Data via WhatsApp
              </h3>
              <p className="text-xs text-charcoal-500 font-sans">
                Polite & respectful pre-formatted message for prospective families
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-emerald-100 text-charcoal-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <label className="text-xs font-bold text-charcoal-600 uppercase tracking-wider block">
            Message Preview:
          </label>
          
          <div className="p-4 bg-ivory-50 rounded-2xl border border-warmborder text-xs sm:text-sm text-charcoal-700 whitespace-pre-line font-sans leading-relaxed">
            {prefilledMessage}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleWhatsAppOpen}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Open in WhatsApp</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-charcoal-800 bg-ivory-100 hover:bg-ivory-200 border border-warmborder transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gold-600" />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Message & Link"}</span>
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="p-3 bg-ivory-50 text-center text-xs text-charcoal-500 border-t border-warmborder">
          Shared with cordial respect and matrimonial intent.
        </div>

      </div>
    </div>
  );
};

