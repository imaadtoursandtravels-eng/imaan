import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeView } from './views/HomeView';
import { UmrahPackagesView } from './views/UmrahPackagesView';
import { PackageDetailView } from './views/PackageDetailView';
import { IndividualUmrahView } from './views/IndividualUmrahView';
import { GroupUmrahView } from './views/GroupUmrahView';
import { GuidedUmrahView } from './views/GuidedUmrahView';
import { FlightDatesView } from './views/FlightDatesView';
import { MakkahZiyaratView } from './views/MakkahZiyaratView';
import { MadinaZiyaratView } from './views/MadinaZiyaratView';
import { HotelsView } from './views/HotelsView';
import { FlightBookingView } from './views/FlightBookingView';
import { VisaAssistanceView } from './views/VisaAssistanceView';
import { AboutUsView } from './views/AboutUsView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { PrivacyPolicyView } from './views/legal/PrivacyPolicyView';
import { TermsConditionsView } from './views/legal/TermsConditionsView';
import { CancellationPolicyView } from './views/legal/CancellationPolicyView';
import { BookingPaymentPolicyView } from './views/legal/BookingPaymentPolicyView';
import { DisclaimerView } from './views/legal/DisclaimerView';
import { UMRAH_PACKAGES } from './lib/site-data';

interface RouteSEO {
  title: string;
  description: string;
}

const ROUTE_SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: 'Umrah Packages in Hyderabad — Imaad International Tours & Travels',
    description: 'Plan your Umrah journey from Hyderabad with Imaad International Tours & Travels. Explore Basic (₹79k), Standard (₹95k), Deluxe (₹1.1L) packages, flights, and Ziyarat.'
  },
  '/umrah-packages': {
    title: 'Umrah Packages from Hyderabad — Basic, Standard & Deluxe | Imaad Tours',
    description: 'Compare advertised Umrah packages from Hyderabad: Basic (₹79,000), Standard (₹95,000), and Deluxe (₹1,10,000). Inclusions, flights, and quotations.'
  },
  '/basic-umrah-package': {
    title: 'Basic Umrah Package (₹79,000) — Imaad International Tours & Travels',
    description: 'Essential Umrah package from Hyderabad starting at ₹79,000 per person. Ideal for budget-conscious pilgrims seeking verified travel arrangements.'
  },
  '/standard-umrah-package': {
    title: 'Standard Umrah Package (₹95,000) — Imaad International Tours & Travels',
    description: 'Balanced comfort Umrah package from Hyderabad at ₹95,000 per person. Closer proximity hotels, visa processing, and guided group Ziyarat.'
  },
  '/deluxe-umrah-package': {
    title: 'Deluxe Umrah Package (₹1,10,000) — Imaad International Tours & Travels',
    description: 'Premium Umrah package from Hyderabad at ₹1,10,000 per person. Upscale hotel tier close to the holy sanctuaries, priority support, and transfers.'
  },
  '/individual-umrah': {
    title: 'Individual & Family Umrah Packages from Hyderabad — Imaad Tours',
    description: 'Customized individual and family Umrah planning from Hyderabad. Tailor your travel dates, private room configurations, and private transportation.'
  },
  '/group-umrah': {
    title: 'Group Umrah Services & Departures from Hyderabad — Imaad Tours',
    description: 'Organized group Umrah packages from Hyderabad for extended families, masjids, and community groups with coordinated flights, buses, and hotels.'
  },
  '/guided-umrah': {
    title: 'Scholar-Guided Umrah Departures from Hyderabad — Imaad Tours',
    description: 'Perform Umrah with religious peace of mind. Fiqh workshops and accompanied rites on confirmed scheduled departures with verified scholars.'
  },
  '/umrah-flight-dates': {
    title: 'Umrah Flight Dates & Schedule 2026–2027 from Hyderabad | Imaad Tours',
    description: 'Advertised departure and return flight dates from Hyderabad (HYD) between October 2026 and January 2027. Check availability on WhatsApp.'
  },
  '/makkah-ziyarat': {
    title: 'Makkah Ziyarat Guide (13 Historical Sites) — Imaad Tours Hyderabad',
    description: 'Respectfully curated guide to 13 sacred landmarks in Makkah al-Mukarramah, including Jabal Thawr, Arafat, Cave of Hira, Jamarat, and Mina.'
  },
  '/madina-ziyarat': {
    title: 'Madina Ziyarat Guide (7 Sacred Sites) — Imaad Tours Hyderabad',
    description: 'Spiritual guide to 7 revered locations in Madina al-Munawwarah: Masjid Quba, Masjid al-Qiblatain, Mount Uhud, The Seven Mosques, and Masjid al-Nabawi.'
  },
  '/hotels': {
    title: 'Makkah & Madina Hotel Enquiries — Imaad Tours & Travels Hyderabad',
    description: 'Inquire regarding verified hotel options in Makkah and Madina. Economy, standard, and deluxe categories with honest proximity disclosures.'
  },
  '/flight-booking': {
    title: 'Flight Booking Enquiries in Hyderabad — Imaad Tours & Travels',
    description: 'Direct and connecting flight booking assistance departing Rajiv Gandhi International Airport (HYD) to Jeddah and Madina.'
  },
  '/visa-assistance': {
    title: 'Umrah Visa Assistance in Hyderabad — Imaad Tours & Travels',
    description: 'Expert documentation, passport validity check, and electronic visa filing assistance for pilgrims in Hyderabad.'
  },
  '/about': {
    title: 'About Us — Imaad International Tours & Travels Hyderabad',
    description: 'Learn about Imaad International Tours & Travels, based in Bandlaguda, Hyderabad. Our pilgrimage consultation values and customer commitment.'
  },
  '/gallery': {
    title: 'Pilgrimage Photo Gallery — Imaad International Tours & Travels',
    description: 'Sacred imagery of the Holy Kaaba in Makkah, Masjid al-Nabawi in Madina, and historical pilgrim landscapes.'
  },
  '/contact': {
    title: 'Contact Us — Imaad International Tours & Travels Hyderabad',
    description: 'Reach our Hyderabad office at +91 79891 15941 or visit us in Bandlaguda beside Pista House. Direct WhatsApp, phone, and inquiry form.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy — Imaad International Tours & Travels',
    description: 'Our data protection commitments, lead storage practices, and pilgrimage privacy terms.'
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions — Imaad International Tours & Travels',
    description: 'Customer agreements, booking consultation conditions, and service facilitation policies.'
  },
  '/cancellation-refund-policy': {
    title: 'Cancellation and Refund Policy — Imaad International Tours & Travels',
    description: 'Transparent policies regarding airline ticket rules, visa fees, and hotel cancellation guidelines.'
  },
  '/booking-payment-policy': {
    title: 'Booking and Payment Policy — Imaad International Tours & Travels',
    description: 'Advance deposits, payment milestones, authorized banking methods, and currency exchange terms.'
  },
  '/disclaimer': {
    title: 'General Disclaimer — Imaad International Tours & Travels',
    description: 'Regulatory information regarding third-party airlines, Saudi entry visas, and historical Ziyarat descriptions.'
  }
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route-Aware SEO Dynamic Title & Meta Tag Updates
  useEffect(() => {
    const cleanPath = currentPath === '' ? '/' : currentPath;
    const seo = ROUTE_SEO_MAP[cleanPath] || {
      title: 'Imaad International Tours & Travels — Umrah Packages in Hyderabad',
      description: 'Your Sacred Journey, Beautifully Planned. Umrah packages, flight schedules, visa assistance, and Ziyarat tours from Hyderabad.'
    };

    document.title = seo.title;

    // Update meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', seo.description);

    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    // Update og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.imaadinternationaltravels.com${cleanPath === '/' ? '' : cleanPath}`);
  }, [currentPath]);

  // Route View Resolver
  const renderCurrentView = () => {
    switch (currentPath) {
      case '/':
        return <HomeView navigate={navigate} />;
      case '/umrah-packages':
        return <UmrahPackagesView navigate={navigate} />;
      case '/basic-umrah-package':
        return <PackageDetailView pkg={UMRAH_PACKAGES[0]} navigate={navigate} />;
      case '/standard-umrah-package':
        return <PackageDetailView pkg={UMRAH_PACKAGES[1]} navigate={navigate} />;
      case '/deluxe-umrah-package':
        return <PackageDetailView pkg={UMRAH_PACKAGES[2]} navigate={navigate} />;
      case '/individual-umrah':
        return <IndividualUmrahView navigate={navigate} />;
      case '/group-umrah':
        return <GroupUmrahView navigate={navigate} />;
      case '/guided-umrah':
        return <GuidedUmrahView navigate={navigate} />;
      case '/umrah-flight-dates':
        return <FlightDatesView navigate={navigate} />;
      case '/makkah-ziyarat':
        return <MakkahZiyaratView navigate={navigate} />;
      case '/madina-ziyarat':
        return <MadinaZiyaratView navigate={navigate} />;
      case '/hotels':
        return <HotelsView navigate={navigate} />;
      case '/flight-booking':
        return <FlightBookingView navigate={navigate} />;
      case '/visa-assistance':
        return <VisaAssistanceView navigate={navigate} />;
      case '/about':
        return <AboutUsView navigate={navigate} />;
      case '/gallery':
        return <GalleryView navigate={navigate} />;
      case '/contact':
        return <ContactView />;
      case '/privacy-policy':
        return <PrivacyPolicyView navigate={navigate} />;
      case '/terms-and-conditions':
        return <TermsConditionsView navigate={navigate} />;
      case '/cancellation-refund-policy':
        return <CancellationPolicyView navigate={navigate} />;
      case '/booking-payment-policy':
        return <BookingPaymentPolicyView navigate={navigate} />;
      case '/disclaimer':
        return <DisclaimerView navigate={navigate} />;
      default:
        return <HomeView navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main className="flex-1">
        {renderCurrentView()}
      </main>
      <Footer navigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}
