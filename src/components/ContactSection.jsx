import React, { useState } from 'react';
import {
  Phone,
  Copy,
  Check,
  FileDown,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { GoldDivider, CornerOrnament } from './DecorativeIcons';

export const ContactSection = ({ data, onDownload, isDownloading }) => {
  const contact = data?.contact || {};
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAltPhone, setCopiedAltPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedAltPhone(true);
        setTimeout(() => setCopiedAltPhone(false), 2000);
      }
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-warmborder/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-100/60 px-3 py-1 rounded-full border border-gold-200">
            <Phone className="w-3.5 h-3.5 text-gold-600" />
            <span>Connect & Communicate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mt-2">
            Family Contact & Communication
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-sans mt-2">
            We welcome prospective families to reach out directly for matrimonial discussions and horoscope matching.
          </p>
          <GoldDivider className="my-3" />
        </div>

        {/* Centered Main Contact Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-warmborder shadow-card relative flex flex-col justify-between">
          <CornerOrnament position="top-right" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-warmborder">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 border border-gold-200">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                    Primary Contact Persons
                  </h3>
                  <span className="text-xs text-charcoal-500 font-sans">
                    {contact.primaryContactPerson || "Bishwanath Shaw (Father) / Bishal Kumar Shaw"}
                  </span>
                </div>
              </div>

              <span className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Direct Family
              </span>
            </div>

            {/* Contact list with interactive copy/call buttons */}
            <div className="mt-6 space-y-4 font-sans">

              {/* Phone 1 */}
              <div className="p-3.5 rounded-2xl bg-ivory-50 border border-warmborder flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">
                      Primary Phone / WhatsApp
                    </span>
                    <span className="text-sm font-bold text-charcoal-900 font-mono">
                      {contact.phone || "+91 98765 43210"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 no-print">
                  <button
                    onClick={() => copyToClipboard(contact.phone || "+91 98765 43210", 'phone')}
                    className="p-2 rounded-lg text-charcoal-600 hover:text-gold-600 hover:bg-white border border-transparent hover:border-warmborder transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${contact.phone?.replace(/[^0-9+]/g, '') || ''}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gold-500 hover:bg-gold-600 shadow-sm"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Alternate Phone */}
              <div className="p-3.5 rounded-2xl bg-ivory-50 border border-warmborder flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">
                      Alternate Family Contact
                    </span>
                    <span className="text-sm font-bold text-charcoal-900 font-mono">
                      {contact.alternatePhone || "+91 91234 56789"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 no-print">
                  <button
                    onClick={() => copyToClipboard(contact.alternatePhone || "+91 91234 56789", 'altPhone')}
                    className="p-2 rounded-lg text-charcoal-600 hover:text-gold-600 hover:bg-white border border-transparent hover:border-warmborder transition-all"
                    title="Copy Alternate Phone Number"
                  >
                    {copiedAltPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${contact.alternatePhone?.replace(/[^0-9+]/g, '') || ''}`}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gold-500 hover:bg-gold-600 shadow-sm"
                  >
                    Call
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Action Download Button */}
          <div className="no-print mt-6 pt-5 border-t border-warmborder">
            <button
              onClick={onDownload}
              disabled={isDownloading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gold-500 hover:bg-gold-600 shadow-sm transition-all disabled:opacity-60"
              title="Directly downloads the PDF Bio-Data"
            >
              <FileDown className="w-4 h-4" />
              <span>{isDownloading ? "Downloading Bio-Data..." : "Download Bio-Data PDF"}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
