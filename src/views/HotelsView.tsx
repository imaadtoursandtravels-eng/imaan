import React, { useState } from 'react';
import { ArrowLeft, Hotel, AlertCircle, MessageCircle, MapPin } from 'lucide-react';
import { HOTEL_CATALOGUE, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface Props {
  navigate: (path: string) => void;
}

export const HotelsView: React.FC<Props> = ({ navigate }) => {
  const [cityFilter, setCityFilter] = useState<'All' | 'Makkah' | 'Madina'>('All');

  const filteredHotels = cityFilter === 'All'
    ? HOTEL_CATALOGUE
    : HOTEL_CATALOGUE.filter(h => h.city === cityFilter);

  const waMsg = "Assalamu Alaikum, I would like to request hotel options in Makkah and Madina.";

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.luxuryHotelSuite}
          alt="Pilgrim luxury suite with view of Holy Sanctuary"
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
            Pilgrim Hospitality
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Makkah & Madina Hotels
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            From budget-friendly economy lodging with shuttle service to prime courtyard luxury suites.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Verification Notice */}
        <div className="bg-[#071E59] border border-amber-600/40 rounded-2xl p-4 sm:p-5 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Specific hotel properties, star classifications, and distances are unverified illustrative references and subject to confirmation upon date selection. We do not claim a hotel is booked until formal vouchers are issued.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 p-1 bg-[#071E59] rounded-xl border border-white/10">
            <button
              onClick={() => setCityFilter('All')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                cityFilter === 'All' ? 'bg-[#D4AF37] text-black' : 'text-neutral-300 hover:text-white'
              }`}
            >
              All Hotels
            </button>
            <button
              onClick={() => setCityFilter('Makkah')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                cityFilter === 'Makkah' ? 'bg-[#D4AF37] text-black' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Makkah
            </button>
            <button
              onClick={() => setCityFilter('Madina')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                cityFilter === 'Madina' ? 'bg-[#D4AF37] text-black' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Madina
            </button>
          </div>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            Showing {filteredHotels.length} categories
          </span>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    {hotel.city}
                  </span>
                  <span className="text-[10px] bg-amber-950/70 border border-amber-800/70 text-amber-300 px-2 py-0.5 rounded">
                    Subject to Confirmation
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white">
                  {hotel.name}
                </h3>

                <div className="space-y-1.5 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{hotel.tierReference}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{hotel.distanceReference}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed pt-2 border-t border-white/10">
                  {hotel.notes}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(`Assalamu Alaikum, I would like to request hotel options for ${hotel.name} in ${hotel.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#123B82] hover:bg-[#1a4ba3] border border-[#D4AF37]/30 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Request Hotel Options</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm defaultPackage="Makkah / Madina Hotel Enquiry" sourcePage="Hotels Page" />
        </div>

      </div>

    </div>
  );
};
