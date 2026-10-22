import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/site-data';

export const BookingPaymentPolicyView: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
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
          Financial Policies
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
          Booking and Payment Policy
        </h1>
        <p className="text-xs text-neutral-400">
          Imaad International Tours & Travels · Hyderabad Office
        </p>
      </div>

      <div className="bg-[#0C1222] border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 text-xs text-neutral-300 leading-relaxed">
        
        {/* Owner Notice */}
        <div className="bg-amber-950/40 border border-amber-800/60 p-4 rounded-lg text-amber-200 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>Business Confirmation Notice:</strong> Deposit amounts, instalment schedules, and accepted banking methods must be reviewed and customized by the agency management for every departure group.
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">1. Booking Advance & Confirmation</h2>
          <p>
            To initiate an Umrah booking and block airline group seats, an initial booking deposit per pilgrim is required along with clear passport copies. No reservation is deemed confirmed until the initial advance is received and verified by our Hyderabad office.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">2. Balance Payment Schedule</h2>
          <p>
            The remaining balance of the package cost must be remitted prior to visa processing submission and airline ticketing, typically at least 21 days before the scheduled departure date, or as specified in your individual booking agreement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">3. Mode of Payment</h2>
          <p>
            Payments are accepted via authorized banking channels: NEFT, RTGS, IMPS, UPI, or account payee cheques made in favor of the official business entity. Cash transactions must comply with Indian Income Tax regulatory ceilings. Always obtain an official numbered receipt for every payment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-base font-bold text-white">4. Currency Fluctuations & Tax Impositions</h2>
          <p>
            Package quotations are computed on prevailing foreign exchange rates (INR vs SAR) and airline fuel surcharges. Any significant volatility in currency exchange or newly levied taxes by Saudi or Indian authorities prior to full payment will be reflected in the final invoice.
          </p>
        </section>
      </div>
    </div>
  );
};
