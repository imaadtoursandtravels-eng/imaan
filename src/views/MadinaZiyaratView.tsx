import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, AlertCircle, Eye } from 'lucide-react';
import { MADINA_ZIYARAT_SITES, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox';

interface Props {
  navigate: (path: string) => void;
}

export const MadinaZiyaratView: React.FC<Props> = ({ navigate }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const siteImages: Record<string, string> = {
    'masjid-quba': ASSET_IMAGES.ziyaratQuba,
    'masjid-al-qiblatain': ASSET_IMAGES.ziyaratQiblatain,
    'seven-mosques': ASSET_IMAGES.madinaMosque,
    'mount-uhud': ASSET_IMAGES.ziyaratUhud,
    'khandaq-battlefield': ASSET_IMAGES.ziyaratUhud,
    'salman-farsi-garden': ASSET_IMAGES.ziyaratQuba,
    'masjid-al-nabawi': ASSET_IMAGES.madinaMosque
  };

  const lightboxItems: LightboxImage[] = MADINA_ZIYARAT_SITES.map((site) => ({
    src: siteImages[site.id] || ASSET_IMAGES.madinaMosque,
    title: site.name,
    location: 'Madina al-Munawwarah',
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
          src={ASSET_IMAGES.madinaMosque}
          alt="Masjid al-Nabawi Green Dome in Madina"
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
            The Illuminated Sanctuary
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Madina Ziyarat (7 Sacred Sites)
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Reverent visits to the landmarks of the Prophet Muhammad (peace be upon him).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Permits Notice */}
        <div className="bg-[#071E59] border border-amber-600/40 rounded-2xl p-4 sm:p-5 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Rawdah Mubarak visits inside Masjid al-Nabawi require official scheduling through the Saudi <strong>Nusuk</strong> app. Our team provides step-by-step assistance.
          </p>
        </div>

        {/* 7 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MADINA_ZIYARAT_SITES.map((site, index) => {
            const imgSrc = siteImages[site.id] || ASSET_IMAGES.madinaMosque;

            return (
              <div
                key={site.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37] bg-[#071E59] flex flex-col justify-between shadow-xl transition-all"
              >
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
                      {site.isTraditionalOnly ? 'Traditional Association' : 'Prophetic Landmark'}
                    </span>
                    <a
                      href={getWhatsAppUrl(`Assalamu Alaikum, I would like to enquire about visiting ${site.name} in Madina.`)}
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
          <ContactForm defaultPackage="Madina Ziyarat Tour Enquiry" sourcePage="Madina Ziyarat View" />
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
