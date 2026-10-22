import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, MapPin, AlertCircle, Eye, Info } from 'lucide-react';
import { MAKKAH_ZIYARAT_SITES, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox';

interface Props {
  navigate: (path: string) => void;
}

export const MakkahZiyaratView: React.FC<Props> = ({ navigate }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Map each site to high-res photograph
  const siteImages: Record<string, string> = {
    'jabal-thawr': ASSET_IMAGES.ziyaratJabalThawr,
    'arafat-plain': ASSET_IMAGES.ziyaratArafat,
    'masjid-nimrah': ASSET_IMAGES.makkahLandscape,
    'jabal-al-rahmah': ASSET_IMAGES.ziyaratArafat,
    'ain-zubaidah': ASSET_IMAGES.makkahLandscape,
    'muzdalifah': ASSET_IMAGES.makkahLandscape,
    'mina': ASSET_IMAGES.ziyaratMina,
    'traditional-sacrifice-site': ASSET_IMAGES.ziyaratMina,
    'jamarat': ASSET_IMAGES.ziyaratMina,
    'jabal-al-nour': ASSET_IMAGES.ziyaratJabalNour,
    'jannat-al-mualla': ASSET_IMAGES.makkahLandscape,
    'masjid-al-jinn': ASSET_IMAGES.heroKaaba,
    'masjid-al-khaif': ASSET_IMAGES.ziyaratMina
  };

  const lightboxItems: LightboxImage[] = MAKKAH_ZIYARAT_SITES.map((site) => ({
    src: siteImages[site.id] || ASSET_IMAGES.makkahLandscape,
    title: site.name,
    location: 'Makkah al-Mukarramah',
    caption: site.historicalContext
  }));

  const openLightbox = (index: number) => {
    setActiveIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.makkahLandscape}
          alt="Makkah Mountains and Sacred Terrain"
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
            Sacred Geography & History
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Makkah Ziyarat (13 Locations)
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Guided visits to historical sanctuaries and holy pilgrimage landmarks in Makkah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Regulatory Notice */}
        <div className="bg-[#071E59] border border-amber-600/40 rounded-2xl p-4 sm:p-5 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Site access and transport routes are subject to municipal permits and Hajj-season closures. Not all 13 locations are guaranteed in every routine itinerary.
          </p>
        </div>

        {/* 13 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAKKAH_ZIYARAT_SITES.map((site, index) => {
            const imgSrc = siteImages[site.id] || ASSET_IMAGES.makkahLandscape;

            return (
              <div
                key={site.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37] bg-[#071E59] flex flex-col justify-between shadow-xl transition-all"
              >
                {/* Photo with Click-to-Expand */}
                <div
                  onClick={() => openLightbox(index)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer image-zoom-card"
                >
                  <img
                    src={imgSrc}
                    alt={site.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071E59] via-transparent to-black/20" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#D4AF37] text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                    <Eye className="w-3 h-3" />
                    <span>View</span>
                  </div>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-[10px] font-mono text-[#D4AF37]">
                      Site #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-1 line-clamp-3">
                      {site.historicalContext}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-[#D4AF37] italic font-serif">
                      {site.isTraditionalOnly ? 'Traditional Association' : 'Historical Landmark'}
                    </span>
                    <a
                      href={getWhatsAppUrl(`Assalamu Alaikum, I would like to enquire about visiting ${site.name} in Makkah.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#D4AF37] font-semibold"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enquiry Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm defaultPackage="Makkah Ziyarat Tour Enquiry" sourcePage="Makkah Ziyarat View" />
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={lightboxItems}
        currentIndex={activeIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveIdx((prev) => (prev + 1) % lightboxItems.length)}
        onPrev={() => setActiveIdx((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length)}
      />

    </div>
  );
};
