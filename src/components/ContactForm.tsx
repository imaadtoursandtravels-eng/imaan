import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/site-data';

interface ContactFormProps {
  defaultPackage?: string;
  sourcePage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultPackage = 'General Enquiry',
  sourcePage = 'Contact Form'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageType: defaultPackage,
    preferredDepartureDate: '',
    travelersCount: 2,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validations
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Please provide your full name (at least 2 characters).');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setError('Please enter a valid telephone or WhatsApp number with area code.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          sourcePage
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please check details or try WhatsApp.');
      }

      setSuccessResult({
        referenceId: data.referenceId,
        message: data.message
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'A network error occurred while submitting your request.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccessResult(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      packageType: defaultPackage,
      preferredDepartureDate: '',
      travelersCount: 2,
      message: ''
    });
  };

  if (successResult) {
    const waFollowup = `Assalamu Alaikum, I have submitted an Umrah enquiry via your website. My Reference ID is ${successResult.referenceId} for ${formData.packageType} (${formData.travelersCount} travelers). Kindly provide availability and quotation.`;

    return (
      <div className="bg-[#0C1222] border border-[#D4AF37]/40 rounded-xl p-8 text-center space-y-5 shadow-2xl">
        <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] rounded-full mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold text-white">Enquiry Verified & Saved</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Server Confirmation Reference:{' '}
            <span className="font-mono text-[#D4AF37] font-semibold tracking-wider">
              {successResult.referenceId}
            </span>
          </p>
        </div>
        <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
          {successResult.message}
        </p>

        {/* WhatsApp Fast-Track */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl(waFollowup)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fast-Track via WhatsApp (+91 79891 15941)</span>
          </a>
          <button
            onClick={resetForm}
            className="w-full sm:w-auto px-4 py-2.5 rounded border border-neutral-700 hover:border-neutral-500 text-xs text-neutral-300 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0C1222] border border-[#D4AF37]/25 rounded-xl p-6 sm:p-8 space-y-5 shadow-xl">
      <div>
        <h3 className="font-serif text-xl font-bold text-white tracking-wide">
          Enquire for Umrah Pilgrimage
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Direct verification from our Bandlaguda Hyderabad office. No automated quotes or unverified promises.
        </p>
      </div>

      {error && (
        <div className="bg-red-950/40 border border-red-800/60 rounded-lg p-3 text-xs text-red-200 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium">{error}</p>
            <p className="text-[11px] text-red-300">
              You can also contact our Hyderabad desk directly on WhatsApp at{' '}
              <a
                href={getWhatsAppUrl(`Assalamu Alaikum, I experienced an issue submitting the enquiry form for ${formData.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white font-medium"
              >
                +91 79891 15941
              </a>.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Full Name <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Mohammed Farhan"
            className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Mobile / WhatsApp */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Contact Number / WhatsApp <span className="text-[#D4AF37]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Address */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourname@gmail.com"
            className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Package Interest */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Package / Service Required
          </label>
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
          >
            <option value="Basic Package (₹79,000)">Basic Package (₹79,000)</option>
            <option value="Standard Package (₹95,000)">Standard Package (₹95,000)</option>
            <option value="Deluxe Package (₹1,10,000)">Deluxe Package (₹1,10,000)</option>
            <option value="Individual / Family Custom Umrah">Individual / Family Custom Umrah</option>
            <option value="Group Umrah Quotation">Group Umrah Quotation</option>
            <option value="Scholar-Guided Umrah">Scholar-Guided Umrah</option>
            <option value="Flight Booking Only">Flight Booking Only</option>
            <option value="Visa Assistance Only">Visa Assistance Only</option>
            <option value="Makkah / Madina Hotel Enquiry">Makkah / Madina Hotel Enquiry</option>
            <option value="General Consultation">General Consultation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Preferred Departure Date */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Preferred Departure Month / Date
          </label>
          <input
            type="text"
            name="preferredDepartureDate"
            value={formData.preferredDepartureDate}
            onChange={handleChange}
            placeholder="e.g. November 2026 or Any Date"
            className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Number of Pilgrims */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1">
            Number of Pilgrims (Travelers)
          </label>
          <input
            type="number"
            min={1}
            max={50}
            name="travelersCount"
            value={formData.travelersCount}
            onChange={handleChange}
            className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-neutral-300 mb-1">
          Special Requirements or Questions
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please mention room sharing preference (Double, Triple, Quad), elderly assistance, or specific travel dates..."
          className="w-full bg-[#06080F] border border-neutral-800 focus:border-[#D4AF37] rounded px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
        ></textarea>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#e0be4d] disabled:opacity-60 text-black font-semibold text-xs rounded transition-colors shadow-md"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying & Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Genuine Enquiry</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-neutral-500 text-center sm:text-right">
          Direct submission to Imaad Tours backend. We never share your contact details.
        </p>
      </div>
    </form>
  );
};
