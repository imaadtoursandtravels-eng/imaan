import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { UmrahPackage, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';

interface PackageCardProps {
  pkg: UmrahPackage;
  onViewDetails: (slug: string) => void;
  featured?: boolean;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onViewDetails, featured = false }) => {
  // Select distinct high-res image for each package tier
  const cardImage = pkg.id === 'basic'
    ? ASSET_IMAGES.packageBasic
    : pkg.id === 'standard'
    ? ASSET_IMAGES.packageStandard
    : ASSET_IMAGES.packageDeluxe;

  const waMsg = `Assalamu Alaikum, I am interested in booking the ${pkg.name} (${pkg.priceFormatted} per person) with Imaad Tours.`;

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
        featured
          ? 'border-[#D4AF37] shadow-2xl scale-[1.02] bg-[#071E59]'
          : 'border-white/10 hover:border-[#D4AF37]/60 shadow-xl bg-[#05143C]'
      }`}
    >
      {/* Featured Tag */}
      {featured && (
        <div className="absolute top-3 right-3 z-20 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      {/* Large Image Header with Hover Zoom */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden image-zoom-card">
        <img
          src={cardImage}
          alt={`${pkg.name} from Hyderabad`}
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05143C] via-transparent to-black/30" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
            {pkg.durationLabel}
          </span>
          <h3 className="font-serif text-2xl font-bold text-white drop-shadow">
            {pkg.name}
          </h3>
        </div>
      </div>

      {/* Price & Action Section (Low text, high impact) */}
      <div className="p-5 space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[11px] text-neutral-400 block uppercase tracking-wider">Price per person</span>
            <span className="text-3xl font-serif font-bold text-white tabular-nums tracking-tight">
              {pkg.priceFormatted}
            </span>
          </div>
          <span className="text-xs text-neutral-400 font-medium">Hyderabad Departure</span>
        </div>

        <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
          {pkg.tagline}
        </p>

        {/* Buttons */}
        <div className="pt-2 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onViewDetails(pkg.slug)}
            className="py-2.5 px-3 rounded-lg text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#e0be4d] flex items-center justify-center gap-1 transition-colors uppercase tracking-wider shadow"
          >
            <span>View Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getWhatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#123B82] hover:bg-[#1a4ba3] border border-[#D4AF37]/30 flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
