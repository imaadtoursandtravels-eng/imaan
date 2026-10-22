import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Quick Phone Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
        className="w-11 h-11 bg-[#111A30] hover:bg-[#1A2647] text-[#D4AF37] border border-[#D4AF37]/50 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        aria-label="Call Imaad International Tours & Travels"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl("Assalamu Alaikum, I would like to enquire about Umrah Packages with Imaad Tours.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full shadow-2xl transition-transform hover:scale-105 font-medium text-xs sm:text-sm"
        aria-label="Chat with Imaad Tours on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-semibold tracking-wide hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
};
