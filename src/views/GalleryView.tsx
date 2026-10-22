import React, { useState } from 'react';
import { ArrowLeft, Eye, MessageCircle } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/images';
import { getWhatsAppUrl } from '../lib/site-data';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox';

interface Props {
  navigate: (path: string) => void;
}

export const GalleryView: React.FC<Props> = ({ navigate }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const galleryList: LightboxImage[] = [
    {
      src: ASSET_IMAGES.heroKaaba,
      title: 'Masjid al-Haram & The Holy Kaaba',
      location: 'Makkah al-Mukarramah',
      caption: 'Pilgrims circumambulating the Holy Kaaba during evening prayers under illuminated minarets.'
    },
    {
      src: ASSET_IMAGES.madinaMosque,
      title: "Masjid al-Nabawi & The Prophet's Dome",
      location: 'Madina al-Munawwarah',
      caption: 'The towering umbrella canopies and the iconic Green Dome in Madina at tranquil sunset.'
    },
    {
      src: ASSET_IMAGES.packageDeluxe,
      title: 'Sanctuary Balcony Suite',
      location: 'Makkah Luxury Accommodations',
      caption: 'Direct panoramic viewpoint of the holy courtyard from premium pilgrim suites.'
    },
    {
      src: ASSET_IMAGES.familyJourney,
      title: 'Family Pilgrimage in Madina',
      location: 'Masjid al-Nabawi Plaza',
      caption: 'Multi-generational family walking peacefully in the marble courtyard of Madina.'
    },
    {
      src: ASSET_IMAGES.ziyaratJabalNour,
      title: 'Jabal al-Nour & Cave of Hira',
      location: 'Makkah al-Mukarramah',
      caption: 'The Mountain of Light where the first revelation of the Holy Quran commenced.'
    },
    {
      src: ASSET_IMAGES.ziyaratQuba,
      title: 'Masjid Quba',
      location: 'Madina al-Munawwarah',
      caption: 'The historical first mosque of Islam surrounded by verdant date palm trees.'
    },
    {
      src: ASSET_IMAGES.ziyaratUhud,
      title: 'Mount Uhud & Archers Hill',
      location: 'Madina al-Munawwarah',
      caption: 'The historic red sandstone mountain beloved by the Prophet Muhammad (peace be upon him).'
    },
    {
      src: ASSET_IMAGES.ziyaratArafat,
      title: 'Jabal al-Rahmah (Mount of Mercy)',
      location: 'Arafat Plain, Makkah',
      caption: 'The sacred rocky hill where pilgrims gather for heartfelt supplications during Hajj.'
    },
    {
      src: ASSET_IMAGES.ziyaratMina,
      title: 'Mina Tent City',
      location: 'Mina Valley, Makkah',
      caption: 'The sprawling white tent encampment sheltered between desert mountains.'
    },
    {
      src: ASSET_IMAGES.ziyaratQiblatain,
      title: 'Masjid al-Qiblatain',
      location: 'Madina al-Munawwarah',
      caption: 'The historic mosque of two Qiblas marking the orientation towards the Kaaba.'
    },
    {
      src: ASSET_IMAGES.scholarGuidance,
      title: 'Spiritual Fiqh Mentorship',
      location: 'Educational Session',
      caption: 'Pilgrims learning the sacred rites of Ihram, Tawaf, and Sa’i with devotional focus.'
    },
    {
      src: ASSET_IMAGES.packageBasic,
      title: 'Pilgrims in White Ihram',
      location: 'Holy Sanctuary Courtyard',
      caption: 'Pilgrims walking in unified devotion on polished marble floors towards the Kaaba.'
    }
  ];

  const openLightbox = (index: number) => {
    setActiveIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Banner */}
      <div className="relative h-72 sm:h-80 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.heroKaaba}
          alt="Holy Sanctuaries of Islam"
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
            Visual Chronicle
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Pilgrimage Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Click any photograph to view in high resolution with historical context.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 h-60 sm:h-72 cursor-pointer image-zoom-card shadow-lg bg-[#071E59]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </span>
                <span className="text-[10px] text-neutral-300 mt-0.5">
                  {item.location}
                </span>
                <span className="text-[10px] text-[#D4AF37] flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3" />
                  <span>Click to expand</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Ready to Experience the Blessed Sanctuaries?
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              Join our scheduled group departures or plan a private family pilgrimage from Hyderabad.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/umrah-packages')}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors"
            >
              View Packages
            </button>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum, I would like to plan my Umrah pilgrimage.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={galleryList}
        currentIndex={activeIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveIdx((prev) => (prev + 1) % galleryList.length)}
        onPrev={() => setActiveIdx((prev) => (prev - 1 + galleryList.length) % galleryList.length)}
      />

    </div>
  );
};
