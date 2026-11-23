import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sparkles, User, Briefcase, GraduationCap, Users, Phone, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EditBioModal = ({ isOpen, onClose, data, onSave, onReset }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState('family');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handlePersonalChange = (field, val) => {
    setFormData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: val }
    }));
  };

  const handleHoroscopeChange = (field, val) => {
    setFormData(prev => ({
      ...prev,
      horoscope: { ...prev.horoscope, [field]: val }
    }));
  };

  const handleEducationChange = (level, field, val) => {
    setFormData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [level]: { ...prev.education[level], [field]: val }
      }
    }));
  };

  const handleContactChange = (field, val) => {
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: val }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const tabs = [
    { id: 'family', label: 'Family & Parents', icon: Users },
    { id: 'education', label: 'Education & Degree', icon: GraduationCap },
    { id: 'personal', label: 'Personal & Kundli', icon: User },
    { id: 'career', label: 'Career & Role', icon: Briefcase },
    { id: 'contact', label: 'Contact Numbers', icon: Phone },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-gold-300 flex flex-col z-10 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 px-6 bg-gradient-to-r from-ivory-100 to-gold-50 border-b border-warmborder flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gold-500 text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                Customize Bio-Data Information
              </h3>
              <p className="text-xs text-charcoal-500 font-sans">
                Fill in exact family names, university degrees, or contact numbers. Changes persist in your browser.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gold-200/50 text-charcoal-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-warmborder bg-ivory-50 px-4 py-2 gap-2 scrollbar-none">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  active
                    ? 'bg-gold-500 text-white shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 bg-[#FAF9F6]">
          
          {/* TAB 1: FAMILY BACKGROUND */}
          {activeTab === 'family' && (
            <div className="space-y-4">
              <div className="p-3 bg-gold-50 rounded-xl border border-gold-200 text-xs text-gold-900">
                💡 Fill in your Mother's name, Father's occupation, and Brother's work details below:
              </div>

              {/* Father */}
              <div className="p-4 bg-white rounded-2xl border border-warmborder shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block">Father's Details</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-charcoal-600 font-medium block mb-1">Father's Full Name</label>
                    <input
                      type="text"
                      value={formData.family?.members?.[0]?.name || "Bishwanath Shaw"}
                      onChange={(e) => {
                        const members = [...formData.family.members];
                        members[0].name = e.target.value;
                        setFormData({ ...formData, family: { ...formData.family, members } });
                      }}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-charcoal-600 font-medium block mb-1">Occupation / Status</label>
                    <input
                      type="text"
                      placeholder="e.g. Businessman / Retired Professional"
                      value={formData.family?.members?.[0]?.status || ""}
                      onChange={(e) => {
                        const members = [...formData.family.members];
                        members[0].status = e.target.value;
                        setFormData({ ...formData, family: { ...formData.family, members } });
                      }}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                    />
                  </div>
                </div>
              </div>

              {/* Mother */}
              <div className="p-4 bg-white rounded-2xl border border-warmborder shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">Mother's Details</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-charcoal-600 font-medium block mb-1">Mother's Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Smt. [Mother's Name]"
                      value={formData.family?.members?.[1]?.name || ""}
                      onChange={(e) => {
                        const members = [...formData.family.members];
                        members[1].name = e.target.value;
                        setFormData({ ...formData, family: { ...formData.family, members } });
                      }}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-charcoal-600 font-medium block mb-1">Occupation / Status</label>
                    <input
                      type="text"
                      placeholder="e.g. Homemaker"
                      value={formData.family?.members?.[1]?.status || "Homemaker"}
                      onChange={(e) => {
                        const members = [...formData.family.members];
                        members[1].status = e.target.value;
                        setFormData({ ...formData, family: { ...formData.family, members } });
                      }}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                    />
                  </div>
                </div>
              </div>

              {/* Brother */}
              <div className="p-4 bg-white rounded-2xl border border-warmborder shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block">Younger Brother's Details</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-charcoal-600 font-medium block mb-1">Brother's Full Name</label>
                    <input
                      type="text"
                      value={formData.family?.members?.[2]?.name || "Badal Kumar Shaw"}
                      onChange={(e) => {
                        const members = [...formData.family.members];
                        members[2].name = e.target.value;
                        setFormData({ ...formData, family: { ...formData.family, members } });
                      }}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-charcoal-600 font-medium block mb-1">Occupation / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Professional / Bengaluru"
                      value={formData.family?.members?.[2]?.status || ""}
                      onChange={(e) => {
                        const members = [...formData.family.members];
                        members[2].status = e.target.value;
                        setFormData({ ...formData, family: { ...formData.family, members } });
                      }}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                    />
                  </div>
                </div>
              </div>

              {/* Hometown */}
              <div className="p-4 bg-white rounded-2xl border border-warmborder shadow-sm">
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Family Ancestral Hometown / Origin</label>
                <input
                  type="text"
                  value={formData.family?.origin || "Jasidih, Deoghar District, Jharkhand"}
                  onChange={(e) => setFormData({ ...formData, family: { ...formData.family, origin: e.target.value } })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
            </div>
          )}

          {/* TAB 2: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              <div className="p-3 bg-gold-50 rounded-xl border border-gold-200 text-xs text-gold-900">
                🎓 Update your College / University name and Graduation details:
              </div>

              {/* Bachelor's Degree */}
              <div className="p-4 bg-white rounded-2xl border border-warmborder shadow-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-700 block">Undergraduate Degree (Bachelor's)</span>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Degree Title</label>
                  <input
                    type="text"
                    value={formData.education?.graduation?.degree || "Bachelor of Technology / Engineering (B.Tech / B.E.)"}
                    onChange={(e) => handleEducationChange('graduation', 'degree', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">College / University Name</label>
                  <input
                    type="text"
                    placeholder="Enter your College or University name"
                    value={formData.education?.graduation?.institution || ""}
                    onChange={(e) => handleEducationChange('graduation', 'institution', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Graduation Period / Additional Details</label>
                  <input
                    type="text"
                    value={formData.education?.graduation?.year || "2012 - 2016"}
                    onChange={(e) => handleEducationChange('graduation', 'year', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PERSONAL & HOROSCOPE */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Date of Birth</label>
                  <input
                    type="text"
                    value={formData.personal?.dob || ""}
                    onChange={(e) => handlePersonalChange('dob', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Time of Birth</label>
                  <input
                    type="text"
                    value={formData.personal?.tob || ""}
                    onChange={(e) => handlePersonalChange('tob', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Place of Birth</label>
                  <input
                    type="text"
                    value={formData.personal?.pob || ""}
                    onChange={(e) => handlePersonalChange('pob', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Height</label>
                  <input
                    type="text"
                    value={formData.personal?.height || ""}
                    onChange={(e) => handlePersonalChange('height', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Rashi (Moon Sign)</label>
                  <input
                    type="text"
                    value={formData.horoscope?.rashi || ""}
                    onChange={(e) => handleHoroscopeChange('rashi', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Nakshatra</label>
                  <input
                    type="text"
                    value={formData.horoscope?.nakshatra || ""}
                    onChange={(e) => handleHoroscopeChange('nakshatra', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Manglik Status</label>
                  <input
                    type="text"
                    value={formData.horoscope?.manglik || ""}
                    onChange={(e) => handleHoroscopeChange('manglik', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-600 font-medium block mb-1">Gotra</label>
                  <input
                    type="text"
                    value={formData.personal?.gotra || ""}
                    onChange={(e) => handlePersonalChange('gotra', e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CAREER */}
          {activeTab === 'career' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Current Role Title</label>
                <input
                  type="text"
                  value={formData.career?.currentRole || ""}
                  onChange={(e) => setFormData({ ...formData, career: { ...formData.career, currentRole: e.target.value } })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
              <div>
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Company</label>
                <input
                  type="text"
                  value={formData.career?.currentCompany || ""}
                  onChange={(e) => setFormData({ ...formData, career: { ...formData.career, currentCompany: e.target.value } })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
              <div>
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Total Experience</label>
                <input
                  type="text"
                  value={formData.career?.totalExperience || "10+ Years"}
                  onChange={(e) => setFormData({ ...formData, career: { ...formData.career, totalExperience: e.target.value } })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Primary Phone / WhatsApp</label>
                <input
                  type="text"
                  value={formData.contact?.phone || ""}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
              <div>
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Alternate Phone</label>
                <input
                  type="text"
                  value={formData.contact?.alternatePhone || ""}
                  onChange={(e) => handleContactChange('alternatePhone', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
              <div>
                <label className="text-xs text-charcoal-600 font-medium block mb-1">Email Address</label>
                <input
                  type="text"
                  value={formData.contact?.email || ""}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-warmborder focus:outline-none focus:border-gold-500 bg-ivory-50"
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 px-6 bg-white border-t border-warmborder flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm("Reset all details back to default values?")) {
                onReset();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-charcoal-500 hover:text-rose-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-700 hover:bg-ivory-100 border border-warmborder"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gold-500 hover:bg-gold-600 shadow-sm"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-white" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? "Saved!" : "Save Changes"}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

