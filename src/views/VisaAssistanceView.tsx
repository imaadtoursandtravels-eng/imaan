import React from 'react';
import { ArrowLeft, FileCheck, UserCheck, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface Props {
  navigate: (path: string) => void;
}

export const VisaAssistanceView: React.FC<Props> = ({ navigate }) => {
  const waMsg = "Assalamu Alaikum, I would like to inquire about Umrah visa documentation requirements.";

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.heroKaaba}
          alt="Umrah Visa Support for Pilgrims"
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/75 to-transparent" />

        <div className="absolute top-6 left-4 sm:left-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-xs text-[#D4AF37] hover:text-white font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-12 max-w-3xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Consular & Documentation Guidance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Umrah Visa Assistance
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            End-to-end documentation review, electronic submission, and biometric app guidance.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Consular Disclaimer */}
        <div className="bg-[#071E59] border border-amber-600/40 rounded-2xl p-4 sm:p-5 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All visa issuance decisions rest exclusively with the Ministry of Foreign Affairs (MOFA) and the Kingdom of Saudi Arabia consular authorities. We act as facilitators and cannot guarantee approvals.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <FileCheck className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Passport Validity</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Minimum 6 months validity from planned departure date and 2 blank observation pages.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <UserCheck className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Digital Photos & Bio</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Assistance with white-background specifications and the Saudi Visa Bio biometric app.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Health Advisories</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Advisories on mandatory immunization rules (Meningococcal ACWY) and health directives.
            </p>
          </div>
        </div>

        {/* Action Strip */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-medium">
            Send passport copies for preliminary eligibility check:
          </p>
          <a
            href={getWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Visa Desk</span>
          </a>
        </div>

        {/* Form */}
        <ContactForm defaultPackage="Visa Assistance Only" sourcePage="Visa Assistance Page" />

      </div>

    </div>
  );
};
