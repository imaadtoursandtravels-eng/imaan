import React from 'react';
import { ArrowLeft, MessageCircle, Check, HelpCircle, Hotel, Plane, FileCheck, Compass } from 'lucide-react';
import { UmrahPackage, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface PackageDetailViewProps {
  pkg: UmrahPackage;
  navigate: (path: string) => void;
}

export const PackageDetailView: React.FC<PackageDetailViewProps> = ({ pkg, navigate }) => {
  const cardImage = pkg.id === 'basic'
    ? ASSET_IMAGES.packageBasic
    : pkg.id === 'standard'
    ? ASSET_IMAGES.packageStandard
    : ASSET_IMAGES.packageDeluxe;

  const waMsg = `Assalamu Alaikum, I would like to book the ${pkg.name} (${pkg.priceFormatted} per person) from Hyderabad.`;

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-[450px] overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={cardImage}
          alt={pkg.name}
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/70 to-black/40" />

        <div className="absolute top-6 left-4 sm:left-8">
          <button
            onClick={() => navigate('/umrah-packages')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-xs text-[#D4AF37] hover:text-white font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Packages</span>
          </button>
        </div>

        <div className="absolute bottom-8 left-4 sm:left-12 right-4 max-w-4xl flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              {pkg.durationLabel} · Hyderabad Departures
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {pkg.name}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-200 max-w-xl">
              {pkg.tagline}
            </p>
          </div>

          <div className="bg-[#071E59]/90 border border-[#D4AF37]/50 p-4 sm:p-5 rounded-2xl text-center sm:text-right shrink-0 shadow-2xl backdrop-blur-md">
            <span className="text-[10px] text-neutral-300 uppercase tracking-wider block">Advertised Price</span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums my-0.5">
              {pkg.priceFormatted}
            </div>
            <span className="text-[11px] text-[#D4AF37] block font-medium">per person</span>
            <div className="mt-3">
              <a
                href={getWhatsAppUrl(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg transition-colors shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* 4 Visual Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-5 space-y-2">
            <Hotel className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif text-sm font-bold text-white">Accommodation</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">{pkg.hotelGuidance}</p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-5 space-y-2">
            <Plane className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif text-sm font-bold text-white">Flights from HYD</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">{pkg.flightGuidance}</p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-5 space-y-2">
            <FileCheck className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif text-sm font-bold text-white">Visa Processing</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">{pkg.visaGuidance}</p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-5 space-y-2">
            <Compass className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif text-sm font-bold text-white">Ziyarat Transfers</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">{pkg.transportGuidance}</p>
          </div>
        </div>

        {/* Inclusions Checklist */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h2 className="font-serif text-xl font-bold text-white">
            Confirmed Inclusions vs Quotation Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {pkg.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050E24]/80 border border-white/5">
                {feat.isConfirmed ? (
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                ) : (
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className={feat.isConfirmed ? 'text-white font-medium' : 'text-neutral-300'}>
                    {feat.text}
                  </span>
                  {feat.notes && (
                    <span className="block text-[11px] text-neutral-400 italic mt-0.5">
                      ({feat.notes})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-white text-center">
            Enquire for {pkg.name}
          </h2>
          <p className="text-xs text-neutral-400 text-center max-w-md mx-auto">
            Direct verification with our Hyderabad office consultants.
          </p>
          <ContactForm defaultPackage={`${pkg.name} (${pkg.priceFormatted})`} sourcePage={`Package: ${pkg.name}`} />
        </div>

      </div>

    </div>
  );
};
