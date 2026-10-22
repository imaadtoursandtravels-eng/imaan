import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ExternalLink, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

export const ContactView: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.heroKaaba}
          alt="Contact Imaad International Tours & Travels"
          className="w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-[#071E59]/75 to-transparent" />

        <div className="absolute bottom-8 left-4 sm:left-12 max-w-3xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Hyderabad Head Office
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            Reach our travel consultants directly via phone, WhatsApp, or walk-in consultation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address */}
            <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif text-base font-bold text-white">Office Location</h3>
              </div>
              <address className="not-italic text-xs text-neutral-300 leading-relaxed">
                {BUSINESS_INFO.address.full}
              </address>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF37] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Calling */}
            <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Phone className="w-5 h-5" />
                <h3 className="font-serif text-base font-bold text-white">Telephone & WhatsApp</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-neutral-400 block text-[11px]">Primary Phone / WhatsApp:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                    className="text-white hover:text-[#D4AF37] font-bold text-sm"
                  >
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[11px]">Secondary Phone:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                    className="text-white hover:text-[#D4AF37] font-bold text-sm"
                  >
                    {BUSINESS_INFO.secondaryPhone}
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Assalamu Alaikum, I am contacting you regarding an Umrah inquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Start WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="bg-[#071E59] border border-white/10 rounded-2xl p-6 space-y-3 shadow-xl text-xs">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#D4AF37]">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 pt-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_INFO.businessHours}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm defaultPackage="General Consultation" sourcePage="Contact Page" />
          </div>

        </div>

      </div>

    </div>
  );
};
