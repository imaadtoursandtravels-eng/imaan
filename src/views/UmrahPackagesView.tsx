import React from 'react';
import { ArrowRight, MessageCircle, Info, Check, HelpCircle } from 'lucide-react';
import { UMRAH_PACKAGES, getWhatsAppUrl } from '../lib/site-data';
import { PackageCard } from '../components/PackageCard';
import { ContactForm } from '../components/ContactForm';
import { ASSET_IMAGES } from '../assets/images';

interface UmrahPackagesViewProps {
  navigate: (path: string) => void;
}

export const UmrahPackagesView: React.FC<UmrahPackagesViewProps> = ({ navigate }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.heroKaaba}
          alt="Umrah Pilgrims at Masjid al-Haram"
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/75 to-transparent" />
        <div className="absolute bottom-8 left-4 sm:left-12 max-w-3xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Hyderabad Departures
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Umrah Packages & Pricing
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Compare our three advertised packages: Basic (₹79,000), Standard (₹95,000), and Deluxe (₹1,10,000).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Visual Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UMRAH_PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              featured={pkg.id === 'standard'}
              onViewDetails={(slug) => navigate(`/${slug}`)}
            />
          ))}
        </div>

        {/* Compact Comparison Table */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="font-serif text-2xl font-bold text-white">
              Package Inclusions Comparison
            </h2>
            <span className="text-xs text-[#D4AF37] font-semibold">
              Per Person Base Rates
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white font-serif">
                  <th className="py-3.5 px-4 bg-[#05143C]">Feature</th>
                  <th className="py-3.5 px-4 bg-[#071E59] text-center">
                    <div className="font-bold text-[#D4AF37]">Basic Umrah</div>
                    <div className="text-white text-sm tabular-nums">₹79,000</div>
                  </th>
                  <th className="py-3.5 px-4 bg-[#123B82]/50 text-center border-x border-[#D4AF37]/40">
                    <div className="font-bold text-[#D4AF37]">Standard Umrah</div>
                    <div className="text-white text-sm tabular-nums">₹95,000</div>
                  </th>
                  <th className="py-3.5 px-4 bg-[#071E59] text-center">
                    <div className="font-bold text-[#D4AF37]">Deluxe Umrah</div>
                    <div className="text-white text-sm tabular-nums">₹1,10,000</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-[#050E24]">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Duration</td>
                  <td className="py-3 px-4 text-center">14 - 15 Days</td>
                  <td className="py-3 px-4 text-center bg-[#123B82]/20 border-x border-[#D4AF37]/20">14 - 15 Days</td>
                  <td className="py-3 px-4 text-center">14 - 15 Days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Visa Processing</td>
                  <td className="py-3 px-4 text-center text-emerald-400">Included Assistance</td>
                  <td className="py-3 px-4 text-center text-emerald-400 bg-[#123B82]/20 border-x border-[#D4AF37]/20">Included Assistance</td>
                  <td className="py-3 px-4 text-center text-emerald-400">Priority Assistance</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Hotel Level</td>
                  <td className="py-3 px-4 text-center">Economy transit/shuttle</td>
                  <td className="py-3 px-4 text-center bg-[#123B82]/20 border-x border-[#D4AF37]/20">Comfort class proximity</td>
                  <td className="py-3 px-4 text-center">4–5★ Courtyard Tier</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Flights from HYD</td>
                  <td className="py-3 px-4 text-center text-amber-300">Subject to quote</td>
                  <td className="py-3 px-4 text-center text-amber-300 bg-[#123B82]/20 border-x border-[#D4AF37]/20">Subject to quote</td>
                  <td className="py-3 px-4 text-center text-amber-300">Subject to quote</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Ziyarat Tours</td>
                  <td className="py-3 px-4 text-center">Group Bus</td>
                  <td className="py-3 px-4 text-center bg-[#123B82]/20 border-x border-[#D4AF37]/20">Guided Group Bus</td>
                  <td className="py-3 px-4 text-center">Comprehensive Tour</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Dedicated Details</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => navigate('/basic-umrah-package')}
                      className="text-xs text-[#D4AF37] font-bold hover:underline"
                    >
                      View Details →
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center bg-[#123B82]/20 border-x border-[#D4AF37]/20">
                    <button
                      onClick={() => navigate('/standard-umrah-package')}
                      className="text-xs text-[#D4AF37] font-bold hover:underline"
                    >
                      View Details →
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => navigate('/deluxe-umrah-package')}
                      className="text-xs text-[#D4AF37] font-bold hover:underline"
                    >
                      View Details →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm defaultPackage="Umrah Package Consultation" sourcePage="Umrah Packages Overview" />
        </div>

      </div>

    </div>
  );
};
