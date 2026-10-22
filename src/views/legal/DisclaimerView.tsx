import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/site-data';

export const DisclaimerView: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
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
          Legal Disclosures
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          General & Regulatory Disclaimer
        </h1>
        <p className="text-xs text-neutral-400">
          Imaad International Tours & Travels · Hyderabad Office
        </p>
      </div>

      <div className="bg-[#0C1222] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 text-xs text-neutral-300 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">1. Informational & Promotional Nature of Website</h2>
          <p>
            The content, package prices (Basic ₹79,000, Standard ₹95,000, Deluxe ₹1,10,000), flight departure tables (October 2026 – January 2027), and hotel listings presented on this website are compiled from current promotional publications for informational and planning consultation. They do not constitute an open commercial offer or a guarantee of real-time seat or room inventory.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">2. Visa Decisions & Sovereign Authorities</h2>
          <p>
            Imaad International Tours & Travels does not issue visas. The granting, rejection, or delay of entry visas is solely within the prerogative of the Ministry of Hajj & Umrah, the Ministry of Foreign Affairs, and the Embassy/Consulates of the Kingdom of Saudi Arabia. We accept no liability for any losses, non-refundable hotel costs, or re-ticketing charges resulting from visa rejections or government delays.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">3. Third-Party Airlines, Hotels & Ground Operators</h2>
          <p>
            All air carriage, lodging, and road transportation are performed by independent commercial third parties. Imaad International Tours & Travels is not liable for flight delays, mechanical cancellations, baggage damage/loss, hotel overbooking, room view variations, or local traffic detours outside our direct operational control.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">4. Historical Ziyarat Information</h2>
          <p>
            Descriptions of historical ziyarat sites in Makkah and Madina are provided for educational and spiritual appreciation. Certain traditional associations are drawn from traditional narratives and may not represent scientifically verified archaeological coordinates. Access to any specific site may be restricted without prior notice due to municipal civil works or religious authority mandates.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">5. Direct Verification</h2>
          <p>
            Pilgrims are strongly encouraged to verify all current package inclusions, flight schedules, and hotel property details directly with our Hyderabad office representatives prior to signing contracts or transferring funds.
          </p>
        </section>
      </div>
    </div>
  );
};
