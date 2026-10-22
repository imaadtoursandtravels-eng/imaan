import React from 'react';
import { ArrowLeft, Plane, Luggage, Clock, MessageCircle, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface Props {
  navigate: (path: string) => void;
}

export const FlightBookingView: React.FC<Props> = ({ navigate }) => {
  const waMsg = "Assalamu Alaikum, I would like to enquire about Umrah flight bookings from Hyderabad.";

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.madinaMosque}
          alt="Flight Bookings to Holy Sanctuaries"
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
            Airline Reservations
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Flight Booking Enquiries
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Departing Rajiv Gandhi International Airport (HYD) to Jeddah (JED) & Madina (MED).
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Notice */}
        <div className="bg-[#071E59] border border-amber-600/40 rounded-2xl p-4 sm:p-5 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Seat availability, carriers, baggage allowances, and flight fares are managed exclusively by operating airlines. No ticket holds are guaranteed until PNRs are ticketed.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Plane className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Direct & Connecting</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Options across Saudia, Air India, IndiGo, Emirates, Qatar Airways, and Gulf Air.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Luggage className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Baggage & Zamzam</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Verified allowances and complimentary 5L Zamzam carriage rules per airline regulations.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Clock className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Group PNRs</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Family and group seat reservations traveling on the exact same flight sector.
            </p>
          </div>
        </div>

        {/* Action Strip */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-medium">
            Search live carrier fares for your travel dates:
          </p>
          <a
            href={getWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Check Flights on WhatsApp</span>
          </a>
        </div>

        {/* Form */}
        <ContactForm defaultPackage="Flight Booking Only" sourcePage="Flight Booking Page" />

      </div>

    </div>
  );
};
