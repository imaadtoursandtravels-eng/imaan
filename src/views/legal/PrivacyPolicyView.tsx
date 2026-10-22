import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/site-data';

export const PrivacyPolicyView: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-xs text-[#D4AF37] hover:underline font-semibold"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </button>

      <div className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
          Legal & Privacy Safeguards
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-400">
          Last Updated: October 2026 · Imaad International Tours & Travels
        </p>
      </div>

      <div className="bg-[#0C1222] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 text-xs text-neutral-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">1. Introduction</h2>
          <p>
            Imaad International Tours & Travels ("we", "us", or "our"), situated at 18-13-8/75/1, Rahamath Nagar Road, beside Pista House, Mallanna Gutta, Bandlaguda, Jawahar Nagar, Hyderabad, Telangana 500005, India, respects your privacy and is committed to protecting the personal information you share with us.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">2. Information We Collect</h2>
          <p>
            When you submit an enquiry through our website or connect via WhatsApp/telephone, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-400">
            <li>Contact Information: Full name, mobile phone number, WhatsApp contact number, and email address.</li>
            <li>Pilgrimage Preferences: Preferred departure dates, package tier (Basic, Standard, Deluxe), number of travelers, room sharing preferences, and special needs (e.g. wheelchair access).</li>
            <li>Documentation Data (Offline/Post-Confirmation): Passport details, photo scans, and biometric submission records required exclusively for official Umrah visa processing and airline ticketing.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">3. How Your Information Is Used</h2>
          <p>
            Your information is used solely to respond to your pilgrimage enquiries, verify flight and hotel room inventory, provide written quotations, process mandatory visa filings with the authorized consular portals, and coordinate local transportation. We do not sell, rent, or monetize personal information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">4. Data Storage & Security</h2>
          <p>
            Website enquiries submitted via our form are processed through secure server-side endpoints and stored on restricted servers for legitimate customer relationship follow-ups. We apply reasonable technical safeguards to protect against unauthorized access.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">5. Contact & Data Inquiries</h2>
          <p>
            For questions regarding this policy or to request updating or deleting your contact records, please contact us at <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#D4AF37] underline">{BUSINESS_INFO.email}</a> or visit our Hyderabad office.
          </p>
        </section>
      </div>
    </div>
  );
};
