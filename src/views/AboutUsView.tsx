import React from 'react';
import { ArrowLeft, Shield, Compass, Heart, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { Logo } from '../components/Logo';

interface Props {
  navigate: (path: string) => void;
}

export const AboutUsView: React.FC<Props> = ({ navigate }) => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.packageDeluxe}
          alt="Pilgrimage Hospitality in Makkah"
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
            Dedicated Pilgrimage Planners
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            About Imaad International Tours & Travels
          </h1>
          <p className="font-serif text-sm sm:text-base text-[#F3E5AB] italic">
            "{BUSINESS_INFO.tagline}"
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Short scannable intro with official brand crest */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
          <Logo size="lg" showText={false} />
          <p className="text-sm text-neutral-200 leading-relaxed">
            Based in Bandlaguda, Hyderabad, Imaad International Tours & Travels facilitates sacred Umrah journeys, airline bookings, hotel reservations, visa documentation, and holy Ziyarat arrangements.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Shield className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Ethical Transparency</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Verified package base pricing with clear distinctions between confirmed inclusions and variable airline/hotel quotations.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Compass className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Pilgrim-First Care</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Attentive care for individual family needs, elderly mobility requirements, and comfortable room configurations.
            </p>
          </div>

          <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
            <Heart className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Spiritual Reverence</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We treat our work as an honorable service to the guests of the House of Allah (Duyuf al-Rahman).
            </p>
          </div>
        </div>

        {/* Hyderabad Office Presence */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-white">
              Visit Our Hyderabad Office
            </h2>
            <p className="text-xs text-neutral-300 max-w-md leading-relaxed">
              Meet our consultants face-to-face in Bandlaguda to review passports, flight dates, and packages.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] pt-1">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Rahamath Nagar Road, beside Pista House, Bandlaguda, Hyderabad</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors"
            >
              Contact Office
            </button>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum, I would like to visit your Hyderabad office.")}
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

    </div>
  );
};
