import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { Logo } from './Logo';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [ziyaratOpen, setZiyaratOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setPackagesOpen(false);
    setZiyaratOpen(false);
  };

  return (
    <>
      {/* Top Announcements & Quick Contact Bar */}
      <div className="bg-[#040C20] border-b border-[#D4AF37]/20 text-xs py-2 px-4 sm:px-8 text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-[#D4AF37] font-semibold">Hyderabad Desk:</span>
            <span className="hidden md:inline text-neutral-300">Rahamath Nagar Road, Bandlaguda</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-300">9 AM – 9 PM IST</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.primaryPhone}</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
            >
              <span>{BUSINESS_INFO.secondaryPhone}</span>
            </a>
            <span className="text-neutral-600 hidden lg:inline">|</span>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum, I would like to enquire about Umrah Packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-[#3ce07b] transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#071E59]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Zone 1: Single Brand Title / Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left group shrink-0 focus:outline-none"
            aria-label="Imaad International Tours & Travels Home"
          >
            <Logo size="md" showText={true} />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-neutral-100">
            <button
              onClick={() => handleNavClick('/')}
              className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath === '/' ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
            >
              Home
            </button>

            {/* Umrah Packages Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleNavClick('/umrah-packages')}
                className={`flex items-center gap-1 hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath.includes('package') ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
              >
                <span>Packages</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full pt-2 w-64 hidden group-hover:block transition-all z-50">
                <div className="bg-[#071E59] border border-[#D4AF37]/40 rounded-xl p-2 shadow-2xl space-y-1">
                  <button
                    onClick={() => handleNavClick('/umrah-packages')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-white hover:text-[#D4AF37] font-medium"
                  >
                    All Packages & Prices
                  </button>
                  <button
                    onClick={() => handleNavClick('/basic-umrah-package')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-neutral-200 hover:text-[#D4AF37] flex justify-between"
                  >
                    <span>Basic Umrah</span>
                    <span className="text-[#D4AF37] font-bold">₹79,000</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/standard-umrah-package')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-neutral-200 hover:text-[#D4AF37] flex justify-between"
                  >
                    <span>Standard Umrah</span>
                    <span className="text-[#D4AF37] font-bold">₹95,000</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/deluxe-umrah-package')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-neutral-200 hover:text-[#D4AF37] flex justify-between"
                  >
                    <span>Deluxe Umrah</span>
                    <span className="text-[#D4AF37] font-bold">₹1,10,000</span>
                  </button>
                  <div className="border-t border-white/10 my-1"></div>
                  <button
                    onClick={() => handleNavClick('/individual-umrah')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-neutral-200 hover:text-[#D4AF37]"
                  >
                    Individual & Family Umrah
                  </button>
                  <button
                    onClick={() => handleNavClick('/group-umrah')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-neutral-200 hover:text-[#D4AF37]"
                  >
                    Group Umrah Services
                  </button>
                  <button
                    onClick={() => handleNavClick('/guided-umrah')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-neutral-200 hover:text-[#D4AF37]"
                  >
                    Scholar-Guided Umrah
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('/umrah-flight-dates')}
              className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath === '/umrah-flight-dates' ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
            >
              Flight Dates
            </button>

            {/* Ziyarat Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath.includes('ziyarat') ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
              >
                <span>Ziyarat</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block transition-all z-50">
                <div className="bg-[#071E59] border border-[#D4AF37]/40 rounded-xl p-2 shadow-2xl space-y-1">
                  <button
                    onClick={() => handleNavClick('/makkah-ziyarat')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-white hover:text-[#D4AF37] font-medium"
                  >
                    Makkah Ziyarat (13 Locations)
                  </button>
                  <button
                    onClick={() => handleNavClick('/madina-ziyarat')}
                    className="w-full text-left px-3 py-2 text-xs rounded hover:bg-[#123B82] text-white hover:text-[#D4AF37] font-medium"
                  >
                    Madina Ziyarat (7 Locations)
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('/hotels')}
              className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath === '/hotels' ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
            >
              Hotels
            </button>

            <button
              onClick={() => handleNavClick('/gallery')}
              className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath === '/gallery' ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath === '/about' ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`hover:text-[#D4AF37] transition-colors whitespace-nowrap ${currentPath === '/contact' ? 'text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-0.5' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-5 py-2.5 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#e0be4d] rounded-lg transition-all whitespace-nowrap shadow-lg tracking-wide uppercase"
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-white hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#071E59] border-b border-[#D4AF37]/40 max-h-[80vh] overflow-y-auto px-4 py-6 space-y-4">
            <div className="pb-3 border-b border-white/10">
              <button
                onClick={() => handleNavClick('/')}
                className="text-left focus:outline-none"
                aria-label="Imaad International Tours & Travels Home"
              >
                <Logo size="md" showText={true} />
              </button>
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('/')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Home
              </button>

              {/* Packages section accordion */}
              <div className="border border-white/10 rounded-lg p-2 bg-[#05143C]">
                <button
                  onClick={() => setPackagesOpen(!packagesOpen)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#D4AF37] py-1"
                >
                  <span>Umrah Packages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${packagesOpen ? 'rotate-180' : ''}`} />
                </button>
                {packagesOpen && (
                  <div className="mt-2 space-y-1 pl-2 border-l border-[#D4AF37]/30">
                    <button
                      onClick={() => handleNavClick('/umrah-packages')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      All Packages & Comparison
                    </button>
                    <button
                      onClick={() => handleNavClick('/basic-umrah-package')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Basic Umrah (₹79,000)
                    </button>
                    <button
                      onClick={() => handleNavClick('/standard-umrah-package')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Standard Umrah (₹95,000)
                    </button>
                    <button
                      onClick={() => handleNavClick('/deluxe-umrah-package')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Deluxe Umrah (₹1,10,000)
                    </button>
                    <button
                      onClick={() => handleNavClick('/individual-umrah')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Individual & Family Umrah
                    </button>
                    <button
                      onClick={() => handleNavClick('/group-umrah')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Group Umrah Services
                    </button>
                    <button
                      onClick={() => handleNavClick('/guided-umrah')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Scholar-Guided Umrah
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('/umrah-flight-dates')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Flight Dates (14 Departures)
              </button>

              {/* Ziyarat accordion */}
              <div className="border border-white/10 rounded-lg p-2 bg-[#05143C]">
                <button
                  onClick={() => setZiyaratOpen(!ziyaratOpen)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#D4AF37] py-1"
                >
                  <span>Sacred Ziyarat</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${ziyaratOpen ? 'rotate-180' : ''}`} />
                </button>
                {ziyaratOpen && (
                  <div className="mt-2 space-y-1 pl-2 border-l border-[#D4AF37]/30">
                    <button
                      onClick={() => handleNavClick('/makkah-ziyarat')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Makkah Ziyarat (13 Locations)
                    </button>
                    <button
                      onClick={() => handleNavClick('/madina-ziyarat')}
                      className="w-full text-left py-1.5 text-xs text-neutral-200 hover:text-white"
                    >
                      Madina Ziyarat (7 Locations)
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('/hotels')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Hotels
              </button>
              <button
                onClick={() => handleNavClick('/flight-booking')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Flight Booking
              </button>
              <button
                onClick={() => handleNavClick('/visa-assistance')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Visa Assistance
              </button>
              <button
                onClick={() => handleNavClick('/gallery')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Photo Gallery
              </button>
              <button
                onClick={() => handleNavClick('/about')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full text-left py-2.5 px-3 rounded text-sm text-white hover:bg-[#123B82]"
              >
                Contact
              </button>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="flex items-center gap-2 text-xs text-white"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call: {BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#25D366] font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 79891 15941)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
