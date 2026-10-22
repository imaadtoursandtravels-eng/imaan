import React from 'react';
import { ArrowLeft, User, HeartHandshake, ShieldCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface Props {
  navigate: (path: string) => void;
}

export const IndividualUmrahView: React.FC<Props> = ({ navigate }) => {
  const waMsg = "Assalamu Alaikum, I would like to plan an Individual / Family Umrah package tailored to our specific dates.";

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.familyJourney}
          alt="Family Umrah in Madina"
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
            Customized Pilgrimage Planning
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Individual & Family Umrah
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Tailor travel dates, private hotel suites, and executive transport for your loved ones.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <User className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Your Preferred Dates</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Fly on dates that suit your family leave or school holidays departing directly from Hyderabad.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Private Suites</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Double, triple, or interconnected family rooms near the Haram with zero sharing with strangers.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Private Vehicle Transfers</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Private GMC or sedan transfers between Jeddah, Makkah, and Madina at your family's relaxed pace.
            </p>
          </div>
        </div>

        {/* WhatsApp Fast-Track Strip */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-medium">
            Wish to discuss exact family dates and room categories?
          </p>
          <a
            href={getWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Form */}
        <ContactForm defaultPackage="Individual / Family Custom Umrah" sourcePage="Individual Umrah Page" />

      </div>

    </div>
  );
};
