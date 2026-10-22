import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Calendar,
  Compass,
  Plane,
  FileCheck,
  Hotel,
  MapPin,
  ArrowRight,
  Shield,
  Eye,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import {
  BUSINESS_INFO,
  getWhatsAppUrl,
  UMRAH_PACKAGES,
  UMRAH_FLIGHT_SCHEDULE
} from '../lib/site-data';
import { PackageCard } from '../components/PackageCard';
import { ASSET_IMAGES } from '../assets/images';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox';

interface HomeViewProps {
  navigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ navigate }) => {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Gallery Images for Lightbox
  const galleryImages: LightboxImage[] = [
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
      caption: 'The illuminated umbrellas and the Green Dome in Madina at tranquil sunset.'
    },
    {
      src: ASSET_IMAGES.ziyaratJabalNour,
      title: 'Jabal al-Nour & Cave of Hira',
      location: 'Makkah al-Mukarramah',
      caption: 'The Mountain of Light where the first verses of the Holy Quran were revealed.'
    },
    {
      src: ASSET_IMAGES.ziyaratQuba,
      title: 'Masjid Quba',
      location: 'Madina al-Munawwarah',
      caption: 'The first mosque in Islamic history with iconic white domes and date palms.'
    },
    {
      src: ASSET_IMAGES.ziyaratUhud,
      title: 'Mount Uhud & Archers Hill',
      location: 'Madina al-Munawwarah',
      caption: 'Historic battlefield terrain and martyrs resting grounds in northern Madina.'
    },
    {
      src: ASSET_IMAGES.ziyaratArafat,
      title: 'Jabal al-Rahmah (Mount of Mercy)',
      location: 'Arafat Plain, Makkah',
      caption: 'Sacred grounds of Wuquf where the Farewell Sermon was delivered.'
    },
    {
      src: ASSET_IMAGES.luxuryHotelSuite,
      title: 'Sanctuary View Hospitality',
      location: 'Makkah & Madina Accommodations',
      caption: 'Panoramic views of the Haram from premium pilgrimage hotel suites.'
    },
    {
      src: ASSET_IMAGES.packageBasic,
      title: 'Devoted Pilgrims in Ihram',
      location: 'Holy Sanctuaries',
      caption: 'Pilgrims performing the sacred rites with humility and brotherhood.'
    }
  ];

  const openLightboxAt = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  // Makkah Explore Cards
  const makkahCards = [
    {
      name: 'Jabal al-Nour',
      desc: 'The Mountain of Light and Cave of Hira.',
      img: ASSET_IMAGES.ziyaratJabalNour
    },
    {
      name: 'Jabal Thawr',
      desc: 'The historic cave refuge during the Hijrah migration.',
      img: ASSET_IMAGES.ziyaratJabalThawr
    },
    {
      name: 'Arafat & Jabal al-Rahmah',
      desc: 'The sacred plain of forgiveness and the Farewell Sermon.',
      img: ASSET_IMAGES.ziyaratArafat
    },
    {
      name: 'Mina Valley',
      desc: 'The seasonal tent city and traditional encampment grounds.',
      img: ASSET_IMAGES.ziyaratMina
    },
    {
      name: 'Muzdalifah',
      desc: "Sacred night rest area under open desert skies at Mash'ar al-Haram.",
      img: ASSET_IMAGES.makkahLandscape
    },
    {
      name: 'Masjid al-Khaif',
      desc: 'Historic mosque in Mina where prophets of old offered prayers.',
      img: ASSET_IMAGES.heroKaaba
    }
  ];

  // Madina Discover Cards
  const madinaCards = [
    {
      name: 'Masjid Quba',
      desc: 'The first mosque in Islam; two rakats carry reward of an Umrah.',
      img: ASSET_IMAGES.ziyaratQuba
    },
    {
      name: 'Masjid al-Qiblatain',
      desc: 'Where the direction of prayer was divinely turned toward the Kaaba.',
      img: ASSET_IMAGES.ziyaratQiblatain
    },
    {
      name: 'Mount Uhud',
      desc: "'A mountain that loves us and we love it', site of noble martyrs.",
      img: ASSET_IMAGES.ziyaratUhud
    },
    {
      name: 'The Seven Mosques',
      desc: 'Command stations on the perimeter of the Battle of the Trench.',
      img: ASSET_IMAGES.madinaMosque
    },
    {
      name: 'Khandaq Historical Area',
      desc: 'The defensive trench line strategized by Salman al-Farsi (RA).',
      img: ASSET_IMAGES.ziyaratUhud
    },
    {
      name: 'Masjid al-Nabawi',
      desc: 'The Prophet’s Mosque, Rawdah Mubarak, and gardens of Paradise.',
      img: ASSET_IMAGES.madinaMosque
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* SECTION 1: FULL-SCREEN HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/30">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSET_IMAGES.heroKaaba}
            alt="The Holy Kaaba and Masjid al-Haram in Makkah"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/75 to-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-24 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123B82]/80 border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Imaad International Tours & Travels · Hyderabad</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight text-balance">
            Your Sacred Journey Begins Here
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-[#F3E5AB] italic">
            Plan Your Umrah with Imaad International Tours & Travels.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/umrah-packages')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#e0be4d] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <span>Explore Umrah Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum, I would like to plan my Umrah journey from Hyderabad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#123B82] hover:bg-[#1a4ba3] border border-[#D4AF37]/40 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISUAL TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#071E59]/80 border border-[#D4AF37]/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
            
            <button
              onClick={() => navigate('/umrah-packages')}
              className="pt-2 sm:pt-0 flex flex-col items-center gap-2 p-2 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#123B82] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-white group-hover:text-[#D4AF37]">
                Umrah Packages
              </span>
            </button>

            <button
              onClick={() => navigate('/flight-booking')}
              className="pt-2 sm:pt-0 flex flex-col items-center gap-2 p-2 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#123B82] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-white group-hover:text-[#D4AF37]">
                Flight Assistance
              </span>
            </button>

            <button
              onClick={() => navigate('/hotels')}
              className="pt-2 sm:pt-0 flex flex-col items-center gap-2 p-2 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#123B82] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Hotel className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-white group-hover:text-[#D4AF37]">
                Hotel Enquiries
              </span>
            </button>

            <button
              onClick={() => navigate('/makkah-ziyarat')}
              className="pt-2 sm:pt-0 flex flex-col items-center gap-2 p-2 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#123B82] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-white group-hover:text-[#D4AF37]">
                Makkah Ziyarat
              </span>
            </button>

            <button
              onClick={() => navigate('/madina-ziyarat')}
              className="pt-2 sm:pt-0 flex flex-col items-center gap-2 p-2 hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#123B82] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-white group-hover:text-[#D4AF37]">
                Madina Ziyarat
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* SECTION 3: UMRAH PACKAGES (VISUAL ROW & MOBILE CAROUSEL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Curated Pricing Tiers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Umrah Packages
            </h2>
          </div>
          <button
            onClick={() => navigate('/umrah-packages')}
            className="text-xs font-semibold text-[#D4AF37] hover:underline inline-flex items-center gap-1"
          >
            <span>Compare All Inclusions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Large Image Cards (Swipeable on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto pb-4 snap-x">
          {UMRAH_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="snap-center">
              <PackageCard
                pkg={pkg}
                featured={pkg.id === 'standard'}
                onViewDetails={(slug) => navigate(`/${slug}`)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EXPLORE MAKKAH (WIDE PHOTOGRAPHIC SECTION & CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Wide Panorama Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 h-80 sm:h-96 image-zoom-card">
          <img
            src={ASSET_IMAGES.makkahLandscape}
            alt="Makkah Mountain Terrain and Holy Sanctuary"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Historical Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Explore Makkah al-Mukarramah
              </h2>
              <p className="text-xs text-neutral-200 max-w-xl">
                Walk the ancient grounds of prophecy, divine revelation, and sacred pilgrimage rites.
              </p>
            </div>
            <button
              onClick={() => navigate('/makkah-ziyarat')}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors shrink-0 shadow-lg"
            >
              Explore Makkah Ziyarat
            </button>
          </div>
        </div>

        {/* 6 Destination Image Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {makkahCards.map((loc, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#071E59] flex flex-col justify-between hover:border-[#D4AF37] transition-all"
            >
              <div className="h-36 w-full overflow-hidden image-zoom-card">
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {loc.name}
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-2 mt-0.5">
                    {loc.desc}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/makkah-ziyarat')}
                  className="text-[11px] text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1 pt-2"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: DISCOVER MADINA (GREEN DOME VISUAL THEME) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Wide Panorama Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 h-80 sm:h-96 image-zoom-card">
          <img
            src={ASSET_IMAGES.madinaMosque}
            alt="Masjid al-Nabawi Prophet Mosque in Madina"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                The City of Light
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Discover Madina al-Munawwarah
              </h2>
              <p className="text-xs text-neutral-200 max-w-xl">
                Experience profound peace in the city of the Beloved Prophet (peace be upon him).
              </p>
            </div>
            <button
              onClick={() => navigate('/madina-ziyarat')}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors shrink-0 shadow-lg"
            >
              Explore Madina Ziyarat
            </button>
          </div>
        </div>

        {/* 6 Destination Image Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {madinaCards.map((loc, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#071E59] flex flex-col justify-between hover:border-[#D4AF37] transition-all"
            >
              <div className="h-36 w-full overflow-hidden image-zoom-card">
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {loc.name}
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-2 mt-0.5">
                    {loc.desc}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/madina-ziyarat')}
                  className="text-[11px] text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1 pt-2"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: INDIVIDUAL AND GROUP UMRAH (SPLIT-SCREEN VISUAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          
          {/* Left: Large Authentic Pilgrimage Photograph */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[360px] overflow-hidden image-zoom-card">
            <img
              src={ASSET_IMAGES.familyJourney}
              alt="Family performing Umrah together in Madina"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#071E59]/80 hidden lg:block" />
          </div>

          {/* Right: Short Text & 3 Service Cards */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Personalized Formats
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Travel Your Way
              </h2>
              <p className="text-xs text-neutral-300 mt-2">
                Tailored arrangements for individuals, families, and community groups.
              </p>
            </div>

            <div className="space-y-3">
              {/* Individual Card */}
              <div className="bg-[#050E24]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-[#D4AF37]/60 transition-colors">
                <div>
                  <h3 className="font-serif text-sm font-bold text-white">Individual Umrah</h3>
                  <p className="text-[11px] text-neutral-400">Flexible dates and personal accommodation.</p>
                </div>
                <button
                  onClick={() => navigate('/individual-umrah')}
                  className="px-3 py-1.5 rounded-lg bg-[#123B82] text-xs font-semibold text-white hover:bg-[#D4AF37] hover:text-black transition-colors shrink-0"
                >
                  Learn More
                </button>
              </div>

              {/* Family Card */}
              <div className="bg-[#050E24]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-[#D4AF37]/60 transition-colors">
                <div>
                  <h3 className="font-serif text-sm font-bold text-white">Family Umrah</h3>
                  <p className="text-[11px] text-neutral-400">Dedicated family suites and private transfers.</p>
                </div>
                <button
                  onClick={() => navigate('/individual-umrah')}
                  className="px-3 py-1.5 rounded-lg bg-[#123B82] text-xs font-semibold text-white hover:bg-[#D4AF37] hover:text-black transition-colors shrink-0"
                >
                  Learn More
                </button>
              </div>

              {/* Group Card */}
              <div className="bg-[#050E24]/80 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-[#D4AF37]/60 transition-colors">
                <div>
                  <h3 className="font-serif text-sm font-bold text-white">Group Umrah</h3>
                  <p className="text-[11px] text-neutral-400">Coordinated flights and group discounts.</p>
                </div>
                <button
                  onClick={() => navigate('/group-umrah')}
                  className="px-3 py-1.5 rounded-lg bg-[#123B82] text-xs font-semibold text-white hover:bg-[#D4AF37] hover:text-black transition-colors shrink-0"
                >
                  Learn More
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: SCHOLAR-GUIDED UMRAH (WIDE PHOTOGRAPH & SHORT TEXT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 h-80 sm:h-96 image-zoom-card shadow-2xl">
          <img
            src={ASSET_IMAGES.scholarGuidance}
            alt="Pilgrims attending religious guidance orientation"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050E24] via-[#071E59]/80 to-transparent" />
          
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-center max-w-xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Spiritual Mentorship
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Guidance for Your Sacred Journey
            </h2>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
              Enquire about Umrah departures with religious guidance, subject to confirmed availability.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/guided-umrah')}
                className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FLIGHT DATES (COMPACT ELEGANT PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#123B82] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider block">
                  Promotional Departures (Oct 2026 – Jan 2027)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Upcoming Umrah Departures
                </h2>
              </div>
            </div>

            <button
              onClick={() => navigate('/umrah-flight-dates')}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors shrink-0 shadow"
            >
              View All Dates
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {UMRAH_FLIGHT_SCHEDULE.slice(0, 4).map((slot) => (
              <div
                key={slot.id}
                className="bg-[#050E24]/80 border border-white/10 rounded-xl p-4 space-y-2 hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#D4AF37]">Slot #{slot.id}</span>
                  <span className="text-[10px] bg-amber-950/60 border border-amber-800/60 text-amber-300 px-2 py-0.5 rounded">
                    Subject to Confirmation
                  </span>
                </div>
                <div className="text-sm font-bold text-white">{slot.departureDate}</div>
                <div className="text-xs text-neutral-300">Return: {slot.returnDate}</div>
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(`Assalamu Alaikum, I would like to check seat availability for departure: ${slot.departureDate}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TRAVEL SERVICES (6-CARD IMAGE/ICON GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Full Pilgrimage Support
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Travel Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button
            onClick={() => navigate('/flight-booking')}
            className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-5 text-center flex flex-col items-center justify-between gap-3 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#123B82] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              <Plane className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
              Flights
            </span>
          </button>

          <button
            onClick={() => navigate('/visa-assistance')}
            className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-5 text-center flex flex-col items-center justify-between gap-3 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#123B82] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
              Visa Assistance
            </span>
          </button>

          <button
            onClick={() => navigate('/hotels')}
            className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-5 text-center flex flex-col items-center justify-between gap-3 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#123B82] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              <Hotel className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
              Hotels
            </span>
          </button>

          <button
            onClick={() => navigate('/makkah-ziyarat')}
            className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-5 text-center flex flex-col items-center justify-between gap-3 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#123B82] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
              Makkah Ziyarat
            </span>
          </button>

          <button
            onClick={() => navigate('/madina-ziyarat')}
            className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-5 text-center flex flex-col items-center justify-between gap-3 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#123B82] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
              Madina Ziyarat
            </span>
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="bg-[#071E59] border border-white/10 hover:border-[#D4AF37] rounded-2xl p-5 text-center flex flex-col items-center justify-between gap-3 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[#123B82] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#D4AF37]">
              Custom Enquiry
            </span>
          </button>
        </div>
      </section>

      {/* SECTION 10: IMMERSIVE PHOTO GALLERY WITH LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Visual Chronicle
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Pilgrimage Photo Gallery
            </h2>
          </div>
          <button
            onClick={() => navigate('/gallery')}
            className="text-xs font-semibold text-[#D4AF37] hover:underline inline-flex items-center gap-1"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Responsive Image Grid with Lightbox Click Handlers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightboxAt(idx)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 h-52 sm:h-64 cursor-pointer image-zoom-card shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-xs font-bold text-white">{img.title}</span>
                <span className="text-[10px] text-[#D4AF37] flex items-center gap-1 mt-0.5">
                  <Eye className="w-3 h-3" />
                  <span>Click to expand</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: CONTACT BANNER (FULL-WIDTH PHOTOGRAPH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] h-80 sm:h-96 image-zoom-card shadow-2xl">
          <img
            src={ASSET_IMAGES.heroKaaba}
            alt="Masjid al-Haram at night"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050E24] via-[#071E59]/90 to-transparent" />

          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-center max-w-lg space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Begin Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Ready to Plan Your Umrah?
            </h2>
            <div className="text-sm font-semibold text-white space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`} className="hover:text-[#D4AF37]">
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`} className="hover:text-[#D4AF37]">
                  {BUSINESS_INFO.secondaryPhone}
                </a>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors shadow-lg"
              >
                Call Now
              </a>
              <a
                href={getWhatsAppUrl("Assalamu Alaikum, I am ready to plan my Umrah pilgrimage with Imaad Tours.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-colors shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)}
        onPrev={() => setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
      />

    </div>
  );
};
