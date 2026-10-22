import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { Logo } from './Logo';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#030919] text-neutral-300 border-t border-[#D4AF37]/25 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Compact 4-Zone Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10 text-xs">
          
          {/* Brand & Tagline */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="text-left focus:outline-none inline-block hover:opacity-90 transition-opacity"
              aria-label="Imaad International Tours & Travels Home"
            >
              <Logo size="md" showText={true} />
            </button>
            <p className="text-xs text-[#D4AF37] font-serif italic">
              "{BUSINESS_INFO.tagline}"
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-[#071E59] hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-[#071E59] hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-[#071E59] hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Umrah Packages */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Umrah Packages
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => navigate('/basic-umrah-package')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex justify-between w-full pr-4"
                >
                  <span>Basic Umrah</span>
                  <span className="text-[#D4AF37] font-semibold">₹79,000</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/standard-umrah-package')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex justify-between w-full pr-4"
                >
                  <span>Standard Umrah</span>
                  <span className="text-[#D4AF37] font-semibold">₹95,000</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/deluxe-umrah-package')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex justify-between w-full pr-4"
                >
                  <span>Deluxe Umrah</span>
                  <span className="text-[#D4AF37] font-semibold">₹1,10,000</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/umrah-flight-dates')}
                  className="hover:text-[#D4AF37] transition-colors text-left text-neutral-300"
                >
                  14 Advertised Flight Dates
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Destinations & Services
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => navigate('/makkah-ziyarat')} className="hover:text-[#D4AF37] transition-colors">
                  Makkah Ziyarat (13 Sites)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/madina-ziyarat')} className="hover:text-[#D4AF37] transition-colors">
                  Madina Ziyarat (7 Sites)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/hotels')} className="hover:text-[#D4AF37] transition-colors">
                  Makkah & Madina Hotels
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/gallery')} className="hover:text-[#D4AF37] transition-colors">
                  Pilgrimage Photo Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Address */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Hyderabad Office
            </h4>
            <div className="space-y-1.5 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-[11px]">
                  18-13-8/75/1, Rahamath Nagar Road, beside Pista House, Bandlaguda, Hyderabad 500005.
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`} className="text-white hover:text-[#D4AF37] font-semibold">
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-neutral-300 hover:text-[#D4AF37] text-[11px]">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#D4AF37] hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Compact Legal Strip */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-[#D4AF37]">Privacy Policy</button>
            <button onClick={() => navigate('/terms-and-conditions')} className="hover:text-[#D4AF37]">Terms & Conditions</button>
            <button onClick={() => navigate('/cancellation-refund-policy')} className="hover:text-[#D4AF37]">Cancellation & Refund</button>
            <button onClick={() => navigate('/booking-payment-policy')} className="hover:text-[#D4AF37]">Booking & Payment</button>
            <button onClick={() => navigate('/disclaimer')} className="hover:text-[#D4AF37]">Disclaimer</button>
          </div>
          <div>
            © {new Date().getFullYear()} Imaad International Tours & Travels. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
