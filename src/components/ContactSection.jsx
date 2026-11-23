import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Share2, 
  Copy, 
  Check, 
  Printer, 
  MessageCircle,
  Sparkles,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { GoldDivider, CornerOrnament, LotusIcon } from './DecorativeIcons';

export const ContactSection = ({ data, onOpenShare, onPrint, onOpenEdit }) => {
  const contact = data?.contact || {};
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text, type) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Contact Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-warmborder shadow-card relative flex flex-col justify-between">
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
                        {contact.phone || "+91 98765 43210 [Click Customize to Edit]"}
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
                        {contact.alternatePhone || "+91 91234 56789 [Click Customize to Edit]"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-2xl bg-ivory-50 border border-warmborder flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-charcoal-500 font-semibold block">
                        Email Address
                      </span>
                      <span className="text-sm font-semibold text-charcoal-900">
                        {contact.email || "bishal.shaw@example.com [Editable]"}
                      </span>
                    </div>
                  </div>

                  <div className="no-print">
                    <button
                      onClick={() => copyToClipboard(contact.email || "bishal.shaw@example.com", 'email')}
                      className="p-2 rounded-lg text-charcoal-600 hover:text-gold-600 hover:bg-white border border-transparent hover:border-warmborder transition-all"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Timing & Respectful Note */}
            <div className="mt-6 pt-4 border-t border-warmborder/80 flex items-center gap-2 text-xs text-charcoal-600">
              <Clock className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Preferred time for calls: <strong>{contact.bestTimeToCall || "10:00 AM – 8:00 PM IST"}</strong></span>
            </div>

          </div>

          {/* Residential & Native Address Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-6 sm:p-8 border-2 border-gold-200 shadow-card flex flex-col justify-between">
            <CornerOrnament position="top-left" />

            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-gold-200/70">
                <div className="w-9 h-9 rounded-xl bg-gold-100 flex items-center justify-center text-gold-700 border border-gold-300">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">
                    Addresses & Locations
                  </h3>
                  <span className="text-xs text-gold-700 font-sans">
                    Current residence & native roots
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                
                {/* Current Residence */}
                <div className="p-4 rounded-2xl bg-white border border-gold-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    Current Residence
                  </span>
                  <h4 className="font-serif font-bold text-charcoal-900 text-base mt-2">
                    Bengaluru, Karnataka
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-1">
                    {contact.residenceAddress || "Bengaluru, Karnataka, India"}
                  </p>
                  <span className="text-[11px] text-charcoal-500 block mt-1">
                    (Close to Cognizant / IT Tech Corridors)
                  </span>
                </div>

                {/* Permanent / Native Address */}
                <div className="p-4 rounded-2xl bg-white border border-gold-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-600 bg-ivory-200 px-2 py-0.5 rounded">
                    Permanent / Hometown Address
                  </span>
                  <h4 className="font-serif font-bold text-charcoal-900 text-base mt-2">
                    Jasidih, Deoghar District
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-1">
                    {contact.nativeAddress || "Jasidih, Deoghar District, Jharkhand - 814142"}
                  </p>
                  <span className="text-[11px] text-charcoal-500 block mt-1">
                    (Spiritual & Cultural Heritage town of Baba Baidyanath Dham)
                  </span>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons in Card */}
            <div className="no-print mt-6 pt-4 border-t border-gold-200/70 flex items-center gap-3">
              <button
                onClick={onOpenShare}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Share</span>
              </button>

              <button
                onClick={onPrint}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gold-500 hover:bg-gold-600 shadow-sm transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print PDF</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

