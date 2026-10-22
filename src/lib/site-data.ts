/**
 * Centralised Business Configuration & Data for Imaad International Tours & Travels
 */

export const BUSINESS_INFO = {
  name: "Imaad International Tours & Travels",
  legalName: "Imaad International Tours & Travels",
  tagline: "Your Sacred Journey, Beautifully Planned.",
  website: "https://www.imaadinternationaltravels.com/",
  logo: "/images/imaad-international-logo.png",
  favicon: "/images/imaad-international-logo.png",
  email: "imaadtoursandtravels@gmail.com",
  primaryPhone: "+91 79891 15941",
  primaryPhoneRaw: "+917989115941",
  secondaryPhone: "+91 91000 07815",
  secondaryPhoneRaw: "+919100007815",
  primaryWhatsAppRaw: "917989115941",
  address: {
    line1: "18-13-8/75/1, Rahamath Nagar Road, beside Pista House",
    line2: "Mallanna Gutta, Bandlaguda, Jawahar Nagar",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500005",
    country: "India",
    full: "18-13-8/75/1, Rahamath Nagar Road, beside Pista House, Mallanna Gutta, Bandlaguda, Jawahar Nagar, Hyderabad, Telangana 500005, India."
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Imaad+International+Tours+and+Travels+Bandlaguda+Hyderabad",
  instagram: "https://www.instagram.com/imaadtoursandtravels",
  instagramHandle: "@imaadtoursandtravels",
  facebook: "https://www.facebook.com/imaadtoursandtravels",
  youtube: "https://www.youtube.com/@imaadtoursandtravels",
  businessHours: "9:00 AM – 9:00 PM IST (Daily — subject to business confirmation)",
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Assalamu Alaikum, I would like to enquire about Umrah Packages with Imaad International Tours & Travels.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.primaryWhatsAppRaw}?text=${encoded}`;
}

export interface PackageFeature {
  text: string;
  isConfirmed: boolean;
  notes?: string;
}

export interface UmrahPackage {
  id: string;
  name: string;
  slug: string;
  pricePerPerson: number;
  priceFormatted: string;
  durationLabel: string;
  tagline: string;
  summary: string;
  features: PackageFeature[];
  hotelGuidance: string;
  flightGuidance: string;
  visaGuidance: string;
  transportGuidance: string;
  bestSuitedFor: string;
}

export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: "basic",
    name: "Basic Package",
    slug: "basic-umrah-package",
    pricePerPerson: 79000,
    priceFormatted: "₹79,000",
    durationLabel: "14 - 15 Days Typical",
    tagline: "Essential pilgrimage itinerary focused on spiritual devotion with budget-conscious arrangements.",
    summary: "The Basic Umrah Package provides essential arrangements for your sacred pilgrimage from Hyderabad, structured around core travel needs.",
    features: [
      { text: "Advertised base price ₹79,000 per person", isConfirmed: true },
      { text: "Departure dates as per promotional schedule (subject to confirmation)", isConfirmed: true },
      { text: "Umrah visa documentation & processing assistance", isConfirmed: true },
      { text: "Economy hotel accommodation in Makkah & Madina", isConfirmed: false, notes: "Specific hotel and distance to Haram subject to confirmation at booking" },
      { text: "Return airfare guidance / airline arrangements", isConfirmed: false, notes: "Airline carrier & routing to be confirmed upon quotation" },
      { text: "Local inter-city & Ziyarat transport arrangements", isConfirmed: false, notes: "Bus / coach category subject to group confirmation" },
      { text: "Daily meal plans (if arranged)", isConfirmed: false, notes: "Meal inclusions vary by group quotation" }
    ],
    hotelGuidance: "Budget-conscious standard hotels situated within accessible transit distance or walking proximity to Haram gates. Specific properties confirmed upon date finalization.",
    flightGuidance: "Standard economy class seats from Hyderabad (HYD) to Jeddah/Madina with scheduled carrier options.",
    visaGuidance: "Complete assistance with Tourist/Umrah electronic visa documentation and submission.",
    transportGuidance: "Air-conditioned intercity bus transfers for airport, hotel, and group Ziyarat routes.",
    bestSuitedFor: "Individual pilgrims, students, and budget-conscious families seeking an affordable sacred journey."
  },
  {
    id: "standard",
    name: "Standard Package",
    slug: "standard-umrah-package",
    pricePerPerson: 95000,
    priceFormatted: "₹95,000",
    durationLabel: "14 - 15 Days Typical",
    tagline: "Balanced comfort with closer proximity accommodation and enhanced group arrangements.",
    summary: "The Standard Umrah Package offers an ideal balance of comfort, convenience, and attentive service for individuals and families travelling from Hyderabad.",
    features: [
      { text: "Advertised base price ₹95,000 per person", isConfirmed: true },
      { text: "Departure dates as per promotional schedule (subject to confirmation)", isConfirmed: true },
      { text: "Umrah visa documentation & processing assistance", isConfirmed: true },
      { text: "Enhanced standard hotels in Makkah & Madina", isConfirmed: false, notes: "Closer proximity options subject to seasonal availability" },
      { text: "Return airfare arrangements", isConfirmed: false, notes: "Specific airline confirmed upon date selection" },
      { text: "Comprehensive Makkah & Madina Ziyarat guided itinerary", isConfirmed: false, notes: "Subject to local municipal regulations" },
      { text: "Buffet / set catering meal options", isConfirmed: false, notes: "Confirm meal arrangement during booking consultation" }
    ],
    hotelGuidance: "Comfort-grade hotels within reasonable walking distance or convenient shuttle service to Masjid al-Haram and Masjid al-Nabawi.",
    flightGuidance: "Reputable scheduled international airlines from Hyderabad (direct or convenient one-stop).",
    visaGuidance: "End-to-end visa paperwork and biometric registration guidance.",
    transportGuidance: "Comfortable air-conditioned coaches for all airport, inter-holy city, and Ziyarat journeys.",
    bestSuitedFor: "Families, couples, and small groups looking for reliable comfort and easy mosque access."
  },
  {
    id: "deluxe",
    name: "Deluxe Package",
    slug: "deluxe-umrah-package",
    pricePerPerson: 110000,
    priceFormatted: "₹1,10,000",
    durationLabel: "14 - 15 Days Typical",
    tagline: "Premium pilgrimage experience featuring upscale accommodation and dedicated support.",
    summary: "The Deluxe Umrah Package is designed for pilgrims seeking enhanced hospitality, superior hotel positioning, and elevated personal care throughout their sacred stay.",
    features: [
      { text: "Advertised base price ₹1,10,000 per person", isConfirmed: true },
      { text: "Departure dates as per promotional schedule (subject to confirmation)", isConfirmed: true },
      { text: "Expedited Umrah visa guidance and assistance", isConfirmed: true },
      { text: "Premium hotel tier in Makkah & Madina close to the Harams", isConfirmed: false, notes: "Hotel brand, tower, and room type confirmed on quotation" },
      { text: "Premium scheduled airline options", isConfirmed: false, notes: "Baggage and seating subject to chosen carrier" },
      { text: "Comprehensive historical Ziyarat tour in Makkah & Madina", isConfirmed: false, notes: "Itinerary subject to local site permissions" },
      { text: "Dedicated coordination & customer assistance", isConfirmed: true }
    ],
    hotelGuidance: "Upscale 4-star / 5-star style properties or prime courtyard proximity in both Makkah and Madina for effortless prayers in the Haram.",
    flightGuidance: "Prime scheduled airline options departing Rajiv Gandhi International Airport (HYD) with generous baggage policies.",
    visaGuidance: "Priority visa processing support and family documentation coordination.",
    transportGuidance: "Modern luxury buses or private vehicle options on request for all sector travel.",
    bestSuitedFor: "Elderly parents, families with young children, and pilgrims desiring maximum proximity and peace of mind."
  }
];

export interface FlightScheduleItem {
  id: number;
  departureDate: string;
  returnDate: string;
  durationDays: number;
  status: string;
  notes: string;
}

export const UMRAH_FLIGHT_SCHEDULE: FlightScheduleItem[] = [
  { id: 1, departureDate: "29 October 2026", returnDate: "13 November 2026", durationDays: 15, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 2, departureDate: "03 November 2026", returnDate: "17 November 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 3, departureDate: "06 November 2026", returnDate: "20 November 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 4, departureDate: "10 November 2026", returnDate: "24 November 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 5, departureDate: "16 November 2026", returnDate: "30 November 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 6, departureDate: "27 November 2026", returnDate: "11 December 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 7, departureDate: "30 November 2026", returnDate: "14 December 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 8, departureDate: "03 December 2026", returnDate: "18 December 2026", durationDays: 15, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 9, departureDate: "07 December 2026", returnDate: "18 December 2026", durationDays: 11, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 10, departureDate: "11 December 2026", returnDate: "26 December 2026", durationDays: 15, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 11, departureDate: "16 December 2026", returnDate: "30 December 2026", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 12, departureDate: "21 December 2026", returnDate: "04 January 2027", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 13, departureDate: "26 December 2026", returnDate: "09 January 2027", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" },
  { id: 14, departureDate: "30 December 2026", returnDate: "13 January 2027", durationDays: 14, status: "Subject to Confirmation", notes: "Transcribed from promotional poster" }
];

export interface ZiyaratLocation {
  id: string;
  name: string;
  arabicName?: string;
  historicalContext: string;
  spiritualSignificance: string;
  accessNotice: string;
  isTraditionalOnly?: boolean;
}

export const MAKKAH_ZIYARAT_SITES: ZiyaratLocation[] = [
  {
    id: "jabal-thawr",
    name: "Jabal Thawr and Cave of Thawr",
    arabicName: "جبل ثور وغار ثور",
    historicalContext: "The rugged mountain located south of Makkah where the Prophet Muhammad (peace be upon him) and his noble companion Abu Bakr al-Siddiq (may Allah be pleased with him) took refuge for three days during the historic Hijrah (migration) to Madina.",
    spiritualSignificance: "Symbolizes absolute trust in Allah's divine protection (Tawakkul) during pivotal trials in the founding of Islam.",
    accessNotice: "Viewed from the foot of the mountain during typical tours. Ascent to the cave involves a demanding steep hike not typically included in standard bus tours."
  },
  {
    id: "arafat-plain",
    name: "Arafat Plain",
    arabicName: "صعيد عرفات",
    historicalContext: "The vast sacred plain located approximately 20 kilometres east of Makkah where pilgrims gather on the 9th day of Dhul Hijjah for the pinnacle rite of the Hajj pilgrimage (Wuquf).",
    spiritualSignificance: "The ground upon which the Prophet (peace be upon him) delivered his renowned Farewell Sermon (Khutbat al-Wada) advocating human equality, justice, and devotion.",
    accessNotice: "Open plain accessible year-round for reflection, subject to seasonal traffic and municipal regulations."
  },
  {
    id: "masjid-nimrah",
    name: "Masjid Nimrah",
    arabicName: "مسجد نمرة",
    historicalContext: "The grand mosque located at the border of Arafat where the Prophet (peace be upon him) camped and delivered the Farewell Sermon before leading combined Dhuhr and Asr prayers.",
    spiritualSignificance: "A major focal point of prayer and unity for millions of pilgrims during the annual Day of Arafat.",
    accessNotice: "Exterior view during standard Umrah ziyarat; open fully for prayers during the Hajj season."
  },
  {
    id: "jabal-al-rahmah",
    name: "Jabal al-Rahmah (Mount of Mercy)",
    arabicName: "جبل الرحمة",
    historicalContext: "A small rocky granite hill situated in the Arafat plain where the Prophet (peace be upon him) made earnest supplications to Allah Almighty on the Day of Arafat.",
    spiritualSignificance: "A revered place of contemplation and supplication (Du'a) seeking Allah's boundless mercy and forgiveness.",
    accessNotice: "Pilgrims can walk around the base. Visitors are advised that climbing the steps is optional and acts such as writing on rocks are against regulatory guidelines."
  },
  {
    id: "ain-zubaidah",
    name: "Ain Zubaidah (Historic Zubaidah Waterworks)",
    arabicName: "عين زبيدة",
    historicalContext: "The historic aqueduct and water channel system commissioned over twelve centuries ago by Queen Zubaidah bint Ja'far, wife of Abbasid Caliph Harun al-Rashid, to supply fresh mountain spring water across rugged terrain to pilgrims in Makkah, Mina, and Arafat.",
    spiritualSignificance: "A monument to visionary Islamic civic philanthropy, enduring Sadaqah Jariyah, and public service for holy pilgrims.",
    accessNotice: "Ruins and channel aqueducts visible along designated valley routes near Arafat."
  },
  {
    id: "muzdalifah",
    name: "Muzdalifah & Masjid al-Mash'ar al-Haram",
    arabicName: "مزدلفة والمشعر الحرام",
    historicalContext: "The sacred valley situated between Mina and Arafat where Hajj pilgrims spend the night under the open sky after departing Arafat, collecting pebbles for the Jamarat.",
    spiritualSignificance: "Specifically mentioned in the Holy Quran (Surah Al-Baqarah 2:198) where believers are commanded to remember Allah at al-Mash'ar al-Haram.",
    accessNotice: "Viewed and traversed along the main pilgrimage highway during typical vehicle ziyarat."
  },
  {
    id: "mina",
    name: "Mina (The City of Tents)",
    arabicName: "منى",
    historicalContext: "The historic valley east of Makkah that accommodates millions of pilgrims during the days of Tashreeq in a vast network of fire-retardant tent installations.",
    spiritualSignificance: "The seasonal encampment where pilgrims stay following the Sunnah of the Prophet Muhammad (peace be upon him).",
    accessNotice: "Readily visible during inter-city routes. Vehicle access inside Mina depends on municipal gate passes and seasonal operations."
  },
  {
    id: "traditional-sacrifice-site",
    name: "Traditional Site of Ibrahim's (AS) Sacrifice",
    arabicName: "موقع التضحية التقليدي",
    historicalContext: "The general area in Mina traditionally associated with the profound trial where Prophet Ibrahim (AS) showed complete obedience to Allah's command regarding Prophet Ismail (AS), commemorated globally by Muslims during Eid al-Adha.",
    spiritualSignificance: "A remembrance of paramount faith, submission, and sacrifice for the sake of the Creator.",
    accessNotice: "This is a traditional historical association; specific exact coordinates are not uniquely isolated in scripture. Mentioned for educational and reflective context.",
    isTraditionalOnly: true
  },
  {
    id: "jamarat",
    name: "Jamarat (Pillars of Stoning)",
    arabicName: "الجمرات",
    historicalContext: "The multi-level modern bridge complex in Mina housing the three stone pillars (Jamrat al-Sughra, al-Wusta, and al-Kubra/Aqabah) where pilgrims perform the symbolic Ramy al-Jamarat.",
    spiritualSignificance: "Commemorates Prophet Ibrahim's (AS) firm rejection of Satan's whispers, reinforcing spiritual resolve against temptation.",
    accessNotice: "Large modern pedestrian facility. Viewed from exterior roadways during non-Hajj seasons."
  },
  {
    id: "jabal-al-nour",
    name: "Jabal al-Nour & Cave of Hira",
    arabicName: "جبل النور وغار حراء",
    historicalContext: "The Mountain of Light northeast of Makkah housing the blessed Cave of Hira, where the Prophet Muhammad (peace be upon him) received the very first revelation of the Holy Quran through Angel Jibreel (Surah Al-Alaq: 'Iqra').",
    spiritualSignificance: "The dawn of divine revelation in Islam and the spiritual sanctuary of contemplation.",
    accessNotice: "Viewed from below during vehicle ziyarat. Climbing to the cave summit requires a strenuous climb of 1,200+ steps, which is not part of group bus excursions."
  },
  {
    id: "jannat-al-mualla",
    name: "Jannat al-Mu'alla (Al-Ma'lat Cemetery)",
    arabicName: "جنة المعلاة",
    historicalContext: "The ancient cemetery in Makkah situated north of the Grand Mosque where many members of the Prophet's family are buried, including his beloved first wife Sayyidah Khadijah (RA), his grandfather Abdul Muttalib, and his uncle Abu Talib.",
    spiritualSignificance: "A revered place for offering prayers for the deceased and reflecting on the early struggles of the believers.",
    accessNotice: "Located in central Makkah; respect cemetery boundaries and guidelines as established by local authorities."
  },
  {
    id: "masjid-al-jinn",
    name: "Masjid al-Jinn",
    arabicName: "مسجد الجن",
    historicalContext: "A historic mosque near Jannat al-Mu'alla where a gathering of Jinn listened to the Prophet Muhammad (peace be upon him) recite the Holy Quran and pledged allegiance to Islam, referencing Surah Al-Jinn.",
    spiritualSignificance: "Commemorates the universal message of the Quran addressed to all conscious creation.",
    accessNotice: "Active mosque open for daily prayers near central Makkah."
  },
  {
    id: "masjid-al-khaif",
    name: "Masjid al-Khaif",
    arabicName: "مسجد الخيف",
    historicalContext: "The prominent mosque located at the base of the mountain in Mina where seventy previous Prophets are narrated by traditional hadith to have offered prayers.",
    spiritualSignificance: "A deeply historic sanctuary tied to the lineage of prophetic worship across millennia.",
    accessNotice: "Primarily opened for congregation during the days of Hajj; viewed from outside during Umrah periods."
  }
];

export const MADINA_ZIYARAT_SITES: ZiyaratLocation[] = [
  {
    id: "masjid-quba",
    name: "Masjid Quba",
    arabicName: "مسجد قباء",
    historicalContext: "The first mosque constructed in Islamic history, established by the Prophet Muhammad (peace be upon him) upon his arrival in Madina during the Hijrah in 622 CE.",
    spiritualSignificance: "The Prophet (peace be upon him) stated: 'Whoever purifies himself in his house, then comes to the mosque of Quba and prays two units of prayer therein, will have a reward like that of an Umrah.' (Sunan Ibn Majah)",
    accessNotice: "A primary stop on all Madina itineraries. Open daily with ample ablution and prayer facilities."
  },
  {
    id: "masjid-al-qiblatain",
    name: "Masjid al-Qiblatain (Mosque of the Two Qiblas)",
    arabicName: "مسجد القبلتين",
    historicalContext: "The mosque where the Prophet Muhammad (peace be upon him) received divine revelation during prayer instructing the believers to shift the direction of prayer (Qibla) from Masjid al-Aqsa in Jerusalem to the Kaaba in Makkah (Surah Al-Baqarah 2:144).",
    spiritualSignificance: "Marks a historic milestone in defining the universal spiritual orientation of the Muslim Ummah.",
    accessNotice: "Fully modernized mosque open for daily prayers."
  },
  {
    id: "seven-mosques",
    name: "The Seven Mosques (Sab'ah Masajid)",
    arabicName: "المساجد السبعة",
    historicalContext: "A complex of small historic mosques situated on the western edge of Mount Sela where tactical command outposts were stationed during the Battle of the Trench (Ghazwat al-Khandaq) in 5 AH.",
    spiritualSignificance: "Reflects the military perseverance, strategic wisdom, and brotherhood of the Companions under siege.",
    accessNotice: "Now centered around the grand new Masjid al-Khandaq with nearby historic prayer alcoves."
  },
  {
    id: "mount-uhud",
    name: "Mount Uhud & Uhud Martyrs Cemetery",
    arabicName: "جبل أحد ومقبرة شهداء أحد",
    historicalContext: "The legendary mountain north of Madina where the Battle of Uhud took place in 3 AH. Adjacent is the resting ground of seventy Companions, including the Prophet's beloved uncle Hamza ibn Abdul Muttalib (RA) and Mus'ab ibn Umayr (RA).",
    spiritualSignificance: "The Prophet (peace be upon him) remarked: 'Uhud is a mountain that loves us and we love it.' (Sahih al-Bukhari). A place to reflect upon steadfastness and pay salutations to the martyrs.",
    accessNotice: "Standard accessible stop on Madina Ziyarat. The Archers' Hill (Jabal al-Rumat) and cemetery perimeter are accessible."
  },
  {
    id: "khandaq-battlefield",
    name: "The Khandaq (Battle of the Trench Perimeter)",
    arabicName: "الخندق",
    historicalContext: "The strategic agricultural perimeter where Salman al-Farsi (RA) advised digging a defensive trench that prevented the allied confederate armies from invading Madina.",
    spiritualSignificance: "Illustrates open consultation, ingenuity, and unity across ethnic and geographic origins.",
    accessNotice: "Integrated into the urban landscape and the Seven Mosques park area."
  },
  {
    id: "salman-farsi-garden",
    name: "Date Garden Associated with Salman al-Farsi (RA)",
    arabicName: "بستان سلمان الفارسي",
    historicalContext: "The fertile grove area historically and traditionally associated with the palm trees planted by the Prophet (peace be upon him) to assist in purchasing the freedom of Salman al-Farsi (RA).",
    spiritualSignificance: "A profound demonstration of prophetic compassion, community solidarity, and honour for converted believers.",
    accessNotice: "Traditional association; exact historical property lines are not independently verifiable. Visited subject to guide route.",
    isTraditionalOnly: true
  },
  {
    id: "masjid-al-nabawi",
    name: "Masjid al-Nabawi (The Prophet's Mosque & Rawdah Mubarak)",
    arabicName: "المسجد النبوي الشريف والروضة الشريفة",
    historicalContext: "The second holiest site in Islam, established by the Prophet Muhammad (peace be upon him), containing the sacred burial chamber of the Prophet (peace be upon him) and his two noble companions, Abu Bakr (RA) and Umar (RA).",
    spiritualSignificance: "A single prayer inside carries the reward of 1,000 prayers elsewhere (outside Masjid al-Haram). The Rawdah Mubarak is described by the Prophet as 'a garden from the gardens of Paradise.'",
    accessNotice: "Open 24 hours. Access to pray inside the Rawdah Mubarak requires an official permit scheduled via the Nusuk application."
  }
];

export interface HotelListing {
  id: string;
  name: string;
  city: "Makkah" | "Madina";
  tierReference: string;
  distanceReference: string;
  isConfirmed: boolean;
  notes: string;
}

export const HOTEL_CATALOGUE: HotelListing[] = [
  {
    id: "h1",
    name: "Courtyard & Central Zone Hotel Option",
    city: "Makkah",
    tierReference: "Deluxe / 5-Star Class Category (Subject to Confirmation)",
    distanceReference: "0 - 350m to Haram Courtyard (Illustrative)",
    isConfirmed: false,
    notes: "Exact property, tower, and room view confirmed upon quotation based on travel dates."
  },
  {
    id: "h2",
    name: "Ajyad / Ibrahim Khalil Corridor Hotel Option",
    city: "Makkah",
    tierReference: "Standard / 4-Star Class Category (Subject to Confirmation)",
    distanceReference: "400 - 800m Walking or Dedicated Shuttle (Illustrative)",
    isConfirmed: false,
    notes: "Popular choice for families balancing distance and budget."
  },
  {
    id: "h3",
    name: "Economy Pilgrim Hotel Option",
    city: "Makkah",
    tierReference: "Economy / Budget Class Category (Subject to Confirmation)",
    distanceReference: "900m+ or Continuous Bus Shuttle (Illustrative)",
    isConfirmed: false,
    notes: "Comfortable air-conditioned lodging for budget-focused travellers."
  },
  {
    id: "h4",
    name: "Northern / Markaziah Sanctuary Hotel Option",
    city: "Madina",
    tierReference: "Deluxe / 5-Star Class Category (Subject to Confirmation)",
    distanceReference: "Courtyard Proximity to Masjid al-Nabawi (Illustrative)",
    isConfirmed: false,
    notes: "Immediate access to prayer gates and the Ladies' entrance."
  },
  {
    id: "h5",
    name: "Southern Markaziah Zone Hotel Option",
    city: "Madina",
    tierReference: "Standard / 4-Star Class Category (Subject to Confirmation)",
    distanceReference: "150 - 450m from Mosque Gates (Illustrative)",
    isConfirmed: false,
    notes: "Convenient walking distance with nearby dining and shopping facilities."
  },
  {
    id: "h6",
    name: "Western District Hotel Option",
    city: "Madina",
    tierReference: "Economy / Budget Class Category (Subject to Confirmation)",
    distanceReference: "500 - 900m from Mosque Gates (Illustrative)",
    isConfirmed: false,
    notes: "Cost-effective accommodation with clean essential amenities."
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    q: "Where is Imaad International Tours & Travels located in Hyderabad?",
    a: "Our office is located at 18-13-8/75/1, Rahamath Nagar Road, beside Pista House, Mallanna Gutta, Bandlaguda, Jawahar Nagar, Hyderabad, Telangana 500005, India. You are welcome to visit our office or reach us directly at +91 79891 15941 or +91 91000 07815."
  },
  {
    q: "What are the advertised Umrah package prices?",
    a: "Based on our current promotional schedule, our advertised base packages start from ₹79,000 per person for the Basic Package, ₹95,000 per person for the Standard Package, and ₹1,10,000 per person for the Deluxe Package. Specific inclusions, room sharing categories, and dates are confirmed upon consultation."
  },
  {
    q: "Are the advertised flight dates confirmed departures?",
    a: "The dates shown on our website (October 2026 – January 2027) are transcribed directly from our promotional poster. Because flight schedules, seat allocations, and airline operations depend on regulatory and carrier availability, all specific departures must be confirmed with our team at the time of quotation."
  },
  {
    q: "Do you assist with Umrah Visas and documentation?",
    a: "Yes, we provide end-to-end guidance and submission assistance for Saudi Umrah and tourist visas. Please note that visa issuance and approval decisions remain solely at the discretion of the Ministry of Hajj & Umrah and relevant consular authorities."
  },
  {
    q: "Can I book a customized or individual family package?",
    a: "Certainly. Alongside our group departure options, we specialize in individual, couple, and customized family itineraries where you can select your preferred dates, hotel categories in Makkah and Madina, and private transfer vehicles."
  },
  {
    q: "What is scholar-guided Umrah?",
    a: "On select confirmed group departures, an experienced Islamic scholar accompanies pilgrims to provide step-by-step religious guidance for the rites of Umrah and lecture sessions. Because scholar presence is departure-specific, please check with us regarding scheduled guided groups."
  }
];
