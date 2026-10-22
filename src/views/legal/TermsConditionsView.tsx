import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/site-data';

export const TermsConditionsView: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
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
          Customer Agreement
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Terms & Conditions
        </h1>
        <p className="text-xs text-neutral-400">
          Last Updated: October 2026 · Imaad International Tours & Travels
        </p>
      </div>

      <div className="bg-[#0C1222] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 text-xs text-neutral-300 leading-relaxed">
        
        <div className="bg-neutral-900 border border-neutral-700 p-4 rounded-lg text-neutral-400 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <p>
            <strong>Owner Notice:</strong> Specific commercial terms, definitive payment schedules, and third-party contracts must be reviewed and countersigned in the final booking agreement before ticket issuance.
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">1. Scope of Facilitation</h2>
          <p>
            Imaad International Tours & Travels acts as an intermediary travel coordinator between pilgrims and third-party principals, including airlines, Saudi hotel operators, transportation providers, and visa processing agents. All bookings are subject to the terms and operating conditions established by those respective principals.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">2. Quotations & Price Validity</h2>
          <p>
            Package prices displayed on this website (Basic ₹79,000, Standard ₹95,000, Deluxe ₹1,10,000) reflect advertised baseline promotional tiers. Final package pricing depends on seasonal airline fares, exchange rate fluctuations (INR/SAR), chosen hotel properties, and room sharing occupancy (Quad, Triple, Double). A binding contract exists only upon written confirmation and receipt of initial booking advance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">3. Passport & Documentation Responsibilities</h2>
          <p>
            The pilgrim is solely responsible for ensuring that all traveling family members possess a valid Indian passport with a minimum of six (6) months validity remaining from the planned departure date, correct personal details matching government databases, and necessary medical records.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">4. Regulatory Changes & Force Majeure</h2>
          <p>
            Imaad International Tours & Travels shall not be held liable for delays, itinerary alterations, missed flights, or non-performance caused by acts of God, weather conditions, government directives, flight re-routings by airlines, airport closures, or entry rule amendments enacted by the Kingdom of Saudi Arabia.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">5. Governing Law & Jurisdiction</h2>
          <p>
            Any disputes arising from or in connection with travel consultation or agreements shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.
          </p>
        </section>
      </div>
    </div>
  );
};
