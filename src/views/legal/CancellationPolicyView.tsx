import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/site-data';

export const CancellationPolicyView: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
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
          Cancellation & Returns
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Cancellation and Refund Policy
        </h1>
        <p className="text-xs text-neutral-400">
          Imaad International Tours & Travels · Hyderabad Office
        </p>
      </div>

      <div className="bg-[#0C1222] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 text-xs text-neutral-300 leading-relaxed">
        
        {/* Owner Verification Notice */}
        <div className="bg-amber-950/40 border border-amber-800/60 p-4 rounded-lg text-amber-200 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>Business Confirmation Required:</strong> The specific cancellation slabs, deduction percentages, and processing timelines below must be finalized by the business owner according to actual carrier contracts before official commercial execution.
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">1. Airline Ticket Cancellations</h2>
          <p>
            Group Umrah air tickets are generally issued under specialized non-refundable group fare tariffs (Group PNRs). Individual airline ticket cancellations, date changes, or passenger name alterations are subject to the specific fare rules and penalty charges imposed by the operating airline. Any airline cancellation fees are passed through at actuals.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">2. Visa Processing Fees</h2>
          <p>
            Once visa applications have been submitted to the Saudi Ministry of Foreign Affairs (MOFA) or consular portals, official government visa fees and insurance charges are non-refundable under all circumstances, irrespective of whether the visa is granted, rejected, or delayed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">3. Hotel & Land Transport Components</h2>
          <p>
            Hotel accommodation during peak pilgrimage periods (e.g., Ramadan, School Holidays, and Winter breaks) is contracted under strict cancellation policies by Saudi hospitality providers. Cancellations initiated within contractual cut-off windows may incur complete retention charges by the hotels.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">4. Refund Processing</h2>
          <p>
            Eligible refunds, if approved following deduction of non-recoverable supplier costs and administrative handling fees, are processed back to the original source bank account within 14–21 business days after supplier reconciliation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">5. Cancellation Notices</h2>
          <p>
            All cancellation requests must be submitted in writing via email to <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#D4AF37] underline">{BUSINESS_INFO.email}</a> and confirmed in person or telephonically with our Bandlaguda Hyderabad office.
          </p>
        </section>
      </div>
    </div>
  );
};
