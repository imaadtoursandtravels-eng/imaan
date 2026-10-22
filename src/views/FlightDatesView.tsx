import React, { useState } from 'react';
import { ArrowLeft, Calendar, Plane, AlertCircle, MessageCircle } from 'lucide-react';
import { UMRAH_FLIGHT_SCHEDULE, getWhatsAppUrl, FlightScheduleItem } from '../lib/site-data';
import { ASSET_IMAGES } from '../assets/images';
import { ContactForm } from '../components/ContactForm';

interface Props {
  navigate: (path: string) => void;
}

export const FlightDatesView: React.FC<Props> = ({ navigate }) => {
  const [selectedSlot, setSelectedSlot] = useState<FlightScheduleItem | null>(null);

  const getSlotWaUrl = (row: FlightScheduleItem) => {
    const text = `Assalamu Alaikum, I would like to check seat availability for Umrah Departure: ${row.departureDate} returning ${row.returnDate} (${row.durationDays} days) from Hyderabad.`;
    return getWhatsAppUrl(text);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Full-width Image Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden border-b border-[#D4AF37]/30">
        <img
          src={ASSET_IMAGES.heroKaaba}
          alt="Umrah Pilgrimage Flight Departures"
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
            Promotional Poster Schedule
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Umrah Flight Dates (2026–2027)
          </h1>
          <p className="text-xs sm:text-sm text-neutral-200">
            14 scheduled group departure slots from Rajiv Gandhi International Airport (HYD).
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Important Notice */}
        <div className="bg-[#071E59] border border-amber-600/40 rounded-2xl p-4 sm:p-5 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Dates below are transcribed from the promotional poster and represent planned windows. All departures, airline allocations, and seat availability are subject to carrier confirmation.
          </p>
        </div>

        {/* 14 Rows Responsive Table */}
        <div className="bg-[#071E59] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-5 sm:p-6 bg-[#05143C] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-xl font-bold text-white">
                Upcoming Departure & Return Schedule
              </h2>
              <p className="text-xs text-neutral-300">
                Click "Check Availability" on any slot for direct WhatsApp inquiry.
              </p>
            </div>
            <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              14 Total Departures
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-neutral-300 border-collapse">
              <thead>
                <tr className="bg-[#061848] border-b border-white/10 text-[#D4AF37] uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-4 text-center w-12">#</th>
                  <th className="py-3.5 px-4">Departure Date</th>
                  <th className="py-3.5 px-4">Return Date</th>
                  <th className="py-3.5 px-4 text-center">Duration</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#050E24]">
                {UMRAH_FLIGHT_SCHEDULE.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-[#092260] transition-colors ${
                      selectedSlot?.id === row.id ? 'bg-[#0E2C78]' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4 text-center font-mono text-neutral-400">
                      {row.id}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{row.departureDate}</span>
                    </td>
                    <td className="py-3.5 px-4 text-neutral-200">
                      {row.returnDate}
                    </td>
                    <td className="py-3.5 px-4 text-center tabular-nums">
                      {row.durationDays} Days
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block text-[11px] text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedSlot(row)}
                        className="px-2.5 py-1 text-[11px] rounded border border-white/20 hover:border-[#D4AF37] text-white transition-colors"
                      >
                        Select
                      </button>
                      <a
                        href={getSlotWaUrl(row)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold rounded transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Check Availability</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Slot Notice */}
        {selectedSlot && (
          <div className="bg-[#071E59] border-2 border-[#D4AF37] rounded-2xl p-5 sm:p-6 space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
              Slot #{selectedSlot.id} Selected
            </span>
            <p className="text-sm text-white">
              Departure: <strong>{selectedSlot.departureDate}</strong> · Return: <strong>{selectedSlot.returnDate}</strong> ({selectedSlot.durationDays} Days).
            </p>
            <div>
              <a
                href={getSlotWaUrl(selectedSlot)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Availability for This Slot via WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Form */}
        <ContactForm
          defaultPackage={selectedSlot ? `Umrah Flight Slot: ${selectedSlot.departureDate}` : 'Umrah Flight Date Inquiry'}
          sourcePage="Flight Dates Page"
        />

      </div>

    </div>
  );
};
