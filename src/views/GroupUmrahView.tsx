import React from 'react';
import { ArrowLeft, Users, Bus, Building, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface Props {
  navigate: (path: string) => void;
}

export const GroupUmrahView: React.FC<Props> = ({ navigate }) => {
  const waMsg = "Assalamu Alaikum, I would like to enquire about Group Umrah departures from Hyderabad.";

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.packageBasic}
          alt="Pilgrims in group brotherhood"
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/75 to-transparent" />

        <div className="absolute top-6 left-4 sm:left-8">
          <button
            onClick={() => navigate('/umrah-packages')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-xs text-[#D4AF37] hover:text-white font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Packages</span>
          </button>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-12 max-w-3xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Community & Delegations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Group Umrah Services
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Coordinated flights, group quotations, block hotel rooms, and guided bus transfers.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Users className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Group Airfares</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Coordinated group seats on scheduled carriers from Hyderabad with dedicated luggage support.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Building className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Block Room Wings</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Stay in the same hotel wing with customized quad, triple, or double occupancy setups.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Bus className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Private Group Buses</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Dedicated air-conditioned luxury coaches for all airport transfers and sacred Ziyarat tours.
            </p>
          </div>
        </div>

        {/* WhatsApp Fast-Track Strip */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-medium">
            Planning for 10 or more pilgrims in Telangana?
          </p>
          <a
            href={getWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request Group Quote</span>
          </a>
        </div>

        {/* Form */}
        <ContactForm defaultPackage="Group Umrah Quotation" sourcePage="Group Umrah Page" />

      </div>

    </div>
  );
};
