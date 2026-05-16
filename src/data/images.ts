// Centralized image mapping for the entire site.
// All images proxied through /gallery/images/ rewrite (never expose Supabase URL).

const G = "/gallery/images";

// ---------- Club hero & card images ----------
export const clubImages: Record<
  string,
  { hero: string; card: string; alt: string; extra: string[] }
> = {
  "cirque-le-soir": {
    hero: `${G}/DSC_7400.jpg`,
    card: `${G}/DSC_7350.jpg`,
    alt: "Cirque Le Soir nightclub VIP bottle service London",
    extra: [`${G}/DSC_7341.jpg`, `${G}/DSC_7358.jpg`, `${G}/DSC_7371.jpg`],
  },
  "tape-london": {
    hero: `${G}/DSC_6749.jpg`,
    card: `${G}/DSC_6763.jpg`,
    alt: "Tape London VIP table booking Mayfair",
    extra: [`${G}/DSC_6773.jpg`, `${G}/DSC_6780.jpg`, `${G}/DSC_6795.jpg`],
  },
  "cuckoo-club": {
    hero: `${G}/DSC_6810.jpg`,
    card: `${G}/DSC_6820.jpg`,
    alt: "Cuckoo Club Mayfair VIP bottle service",
    extra: [`${G}/DSC_6827.jpg`, `${G}/DSC_6830.jpg`, `${G}/DSC_6837.jpg`],
  },
  "maddox": {
    hero: `${G}/DSC_6868.jpg`,
    card: `${G}/DSC_6873.jpg`,
    alt: "Maddox Club VIP table booking Mayfair nightclub",
    extra: [`${G}/DSC_6874.jpg`, `${G}/DSC_6882.jpg`, `${G}/DSC_6890.jpg`],
  },
  "tabu-london": {
    hero: `${G}/DSC_6902.jpg`,
    card: `${G}/DSC_6910.jpg`,
    alt: "Tabu London VIP bottle service Mayfair",
    extra: [`${G}/DSC_6919.jpg`, `${G}/DSC_6920.jpg`, `${G}/DSC_6922.jpg`],
  },
  "london-reign": {
    hero: `${G}/DSC_6945.jpg`,
    card: `${G}/DSC_6946.jpg`,
    alt: "Reign London showclub VIP tables Piccadilly",
    extra: [`${G}/DSC_6981.jpg`, `${G}/DSC_6982.jpg`, `${G}/DSC_6984.jpg`],
  },
  "selene-london": {
    hero: `${G}/DSC_6989.jpg`,
    card: `${G}/DSC_6997.jpg`,
    alt: "Selene London nightclub VIP bottle service Mayfair",
    extra: [`${G}/DSC_7013.jpg`, `${G}/DSC_7019.jpg`, `${G}/DSC_7021.jpg`],
  },
  "funky-buddha": {
    hero: `${G}/DSC_7034.jpg`,
    card: `${G}/DSC_7040.jpg`,
    alt: "Funky Buddha London VIP table booking Mayfair",
    extra: [`${G}/DSC_7047.jpg`, `${G}/DSC_7056.jpg`, `${G}/DSC_7058.jpg`],
  },
  "scotch-of-st-james": {
    hero: `${G}/DSC_7059.jpg`,
    card: `${G}/DSC_7060.jpg`,
    alt: "Scotch of St James VIP bottle service London",
    extra: [`${G}/DSC_7066.jpg`, `${G}/DSC_7072.jpg`, `${G}/DSC_7081.jpg`],
  },
  "dear-darling": {
    hero: `${G}/DSC_7086.jpg`,
    card: `${G}/DSC_7089.jpg`,
    alt: "Dear Darling Mayfair VIP tables bottle service",
    extra: [`${G}/DSC_7092.jpg`, `${G}/DSC_7136.jpg`, `${G}/DSC_7150.jpg`],
  },
  "beat-london": {
    hero: `${G}/DSC_7154.jpg`,
    card: `${G}/DSC_7155.jpg`,
    alt: "Beat London nightclub VIP bottle service",
    extra: [`${G}/DSC_7164.jpg`, `${G}/DSC_7167.jpg`, `${G}/DSC_7170.jpg`],
  },
  "the-box": {
    hero: `${G}/DSC_7171.jpg`,
    card: `${G}/DSC_7176.jpg`,
    alt: "The Box London VIP table booking Soho",
    extra: [`${G}/DSC_7178.jpg`, `${G}/DSC_7181.jpg`, `${G}/DSC_7183.jpg`],
  },
  "luna-club-london": {
    hero: `${G}/DSC_7219.jpg`,
    card: `${G}/DSC_7230.jpg`,
    alt: "Luna Club London VIP bottle service",
    extra: [`${G}/DSC_7252.jpg`, `${G}/DSC_7257.jpg`, `${G}/DSC_7260.jpg`],
  },
  "maison-close": {
    hero: `${G}/fe4414_0023ee263fca4fe9806bc09d74113eaa.jpg`,
    card: `${G}/fe4414_002538ddacfe4ce1a4fe89fa0e8305ae.jpg`,
    alt: "Maison Close Mayfair VIP bottle service house music",
    extra: [`${G}/fe4414_00edcb5adc4c4c4cb5dd97d80ea2f4c4.jpg`, `${G}/fe4414_0152b4f29a9540be8eef055230e66221.jpg`, `${G}/fe4414_016460dc35074665a9f15d051da0d9de.jpg`],
  },
  // Closed clubs — kept for SEO pages
  "libertine": {
    hero: `${G}/DSC_7276.jpg`,
    card: `${G}/DSC_7331.jpg`,
    alt: "Libertine London nightclub (permanently closed)",
    extra: [],
  },
  "lio-london": {
    hero: `${G}/DSC_7333.jpg`,
    card: `${G}/DSC_7347.jpg`,
    alt: "Lio London nightclub (permanently closed)",
    extra: [],
  },
};

// ---------- Blog post featured images ----------
export const blogImages: Record<
  string,
  { featured: string; alt: string; inline?: string[] }
> = {
  "how-much-does-bottle-service-cost-london": {
    featured: `${G}/DSC_7399.jpg`,
    alt: "Champagne bottle service at a London Mayfair nightclub",
    inline: [`${G}/DSC_7404.jpg`, `${G}/DSC_7420.jpg`],
  },
  "best-clubs-for-birthday-london": {
    featured: `${G}/DSC_7422.jpg`,
    alt: "Birthday celebration with sparklers at a VIP table in London",
    inline: [`${G}/DSC_7424.jpg`, `${G}/DSC_7435.jpg`],
  },
  "mayfair-dress-code-what-to-wear": {
    featured: `${G}/DSC_7447.jpg`,
    alt: "Well-dressed guests arriving at a Mayfair nightclub",
    inline: [`${G}/DSC_7453.jpg`, `${G}/DSC_7454.jpg`],
  },
  "how-to-get-into-exclusive-london-clubs": {
    featured: `${G}/DSC_7457.jpg`,
    alt: "Entrance to an exclusive London nightclub in Mayfair",
    inline: [`${G}/DSC_7496.jpg`, `${G}/DSC_7507.jpg`],
  },
  "celebrity-clubs-london-where-famous-people-party": {
    featured: `${G}/DSC_7511.jpg`,
    alt: "VIP area at a celebrity-favourite London club",
    inline: [`${G}/DSC_7537.jpg`, `${G}/DSC_7610.jpg`],
  },
  "london-nightlife-guide-first-timers": {
    featured: `${G}/DSC_7611.jpg`,
    alt: "Vibrant London nightclub scene for first-time visitors",
    inline: [`${G}/DSC_7612.jpg`, `${G}/DSC_7613.jpg`],
  },
  "best-champagne-bottle-service-london-clubs": {
    featured: `${G}/DSC_7616.jpg`,
    alt: "Premium champagne bottle service at a London nightclub",
    inline: [`${G}/DSC_7617.jpg`, `${G}/DSC_7618.jpg`],
  },
  "hen-party-london-clubs-mayfair": {
    featured: `${G}/DSC_7638.jpg`,
    alt: "Hen party celebration at a Mayfair club VIP table",
    inline: [`${G}/DSC_7671.jpg`, `${G}/DSC_7672.jpg`],
  },
  "mayfair-vs-shoreditch-nightlife-compared": {
    featured: `${G}/DSC_7676.jpg`,
    alt: "Mayfair nightclub atmosphere compared to East London",
    inline: [`${G}/DSC_7679.jpg`, `${G}/DSC_7705.jpg`],
  },
  "corporate-event-london-clubs-entertaining-clients": {
    featured: `${G}/DSC_7715.jpg`,
    alt: "Corporate entertainment at a premium London nightclub",
    inline: [`${G}/DSC_7717.jpg`, `${G}/DSC_7737.jpg`],
  },
  "dear-darling-mayfair-guide": {
    featured: `${G}/DSC_7740.jpg`,
    alt: "Inside Dear Darling Mayfair nightclub",
    inline: [`${G}/DSC_7741.jpg`, `${G}/DSC_7767.jpg`],
  },
  "the-box-soho-bottle-service-guide": {
    featured: `${G}/DSC_7787.jpg`,
    alt: "The Box Soho performance venue VIP area",
    inline: [`${G}/DSC_7810.jpg`, `${G}/DSC_7812.jpg`],
  },
  "luna-club-london-guide": {
    featured: `${G}/DSC_7821.jpg`,
    alt: "Luna Club London nightclub interior",
    inline: [`${G}/DSC_7823.jpg`, `${G}/DSC_7828.jpg`],
  },
  "best-hip-hop-clubs-mayfair-bottle-service": {
    featured: `${G}/DSC_7830.jpg`,
    alt: "Hip-hop night at a Mayfair VIP nightclub",
    inline: [`${G}/DSC_7852.jpg`, `${G}/DSC_7854.jpg`],
  },
  "saturday-night-mayfair-table-booking-guide": {
    featured: `${G}/DSC_7857.jpg`,
    alt: "Saturday night VIP tables at a packed Mayfair club",
    inline: [`${G}/DSC_7860.jpg`, `${G}/DSC_7863.jpg`],
  },
  "stag-do-london-best-clubs-bachelor-party": {
    featured: `${G}/DSC_7877.jpg`,
    alt: "Stag party celebration at a London nightclub",
    inline: [`${G}/DSC_7884.jpg`, `${G}/DSC_7900.jpg`],
  },
  "what-to-order-london-club-bottle-menu-guide": {
    featured: `${G}/DSC_7916.jpg`,
    alt: "Premium bottle menu at a London nightclub table",
    inline: [`${G}/DSC_7931.jpg`, `${G}/DSC_7940.jpg`],
  },
  "best-house-music-clubs-london-bottle-service": {
    featured: `${G}/DSC_7942.jpg`,
    alt: "DJ performing house music at a London nightclub",
    inline: [`${G}/DSC_7943.jpg`, `${G}/DSC_7952.jpg`],
  },
  "where-to-sit-table-positioning-london-clubs": {
    featured: `${G}/DSC_7984.jpg`,
    alt: "VIP table positioning and views at a London club",
    inline: [`${G}/DSC_7988.jpg`, `${G}/DSC_7990.jpg`],
  },
  "mayfair-night-out-dinner-drinks-club-itinerary": {
    featured: `${G}/DSC_7993.jpg`,
    alt: "A perfect Mayfair evening out from dinner to nightclub",
    inline: [`${G}/DSC_7995.jpg`, `${G}/DSC_7999.jpg`],
  },
  "london-club-age-policy-id-guide": {
    featured: `${G}/DSC_8000.jpg`,
    alt: "Entrance security at a London nightclub checking ID",
    inline: [`${G}/DSC_8002.jpg`, `${G}/DSC_8017.jpg`],
  },
  "best-london-clubs-large-groups": {
    featured: `${G}/DSC_8026.jpg`,
    alt: "Large group celebrating at VIP tables in London",
    inline: [`${G}/DSC_8129.jpg`, `${G}/DSC_8155.jpg`],
  },
  "friday-night-vs-saturday-night-london-clubs": {
    featured: `${G}/DSC_8160.jpg`,
    alt: "Busy London nightclub comparing Friday and Saturday",
    inline: [`${G}/DSC_8163.jpg`, `${G}/DSC_8169.jpg`],
  },
  "best-london-clubs-for-couples": {
    featured: `${G}/fe4414_86bcb7e5839b4041967c5ec08ce3ccf6.jpg`,
    alt: "Couple enjoying VIP bottle service at a Mayfair nightclub",
    inline: [],
  },
  "best-weeknight-clubs-london-midweek": {
    featured: `${G}/fe4414_c9dd665262784006ac4c486b67700611.jpg`,
    alt: "Midweek VIP bottle service at a Mayfair nightclub",
    inline: [],
  },
  "bottle-service-etiquette-london-clubs": {
    featured: `${G}/maison-close-657.jpg`,
    alt: "Bottle service table setup at a London nightclub",
    inline: [],
  },
  "what-comes-with-bottle-service-london-club": {
    featured: `${G}/maison-close-843.jpg`,
    alt: "VIP bottle service setup with mixers and ice at a London nightclub",
    inline: [],
  },
  "is-bottle-service-london-worth-it": {
    featured: `${G}/31-DSC03353.jpg`,
    alt: "VIP bottle service table at a London nightclub",
    inline: [],
  },
  "how-london-club-minimum-spend-works": {
    featured: `${G}/fe4414_8736c3fa5a0c46c6ae844af5dfd7ef3b.jpg`,
    alt: "Bottle service table with spirits and champagne at a London nightclub",
    inline: [],
  },
  "bottle-service-deposits-payments-london": {
    featured: `${G}/fe4414_c1fe834a912c4dcd8facbae41f182d22.jpg`,
    alt: "VIP bottle service payment and card transaction at a London nightclub",
    inline: [],
  },
  "champagne-vs-spirits-london-bottle-menu": {
    featured: `${G}/maison-close-069.jpg`,
    alt: "Champagne and spirits bottle service at a London nightclub table",
    inline: [],
  },
  "how-far-in-advance-to-book-bottle-service-london": {
    featured: `${G}/12-DSC03270.jpg`,
    alt: "VIP bottle service table booking at a Mayfair nightclub in London",
    inline: [],
  },
};

// ---------- Page-level hero images ----------
export const pageImages = {
  home: {
    hero: `${G}/0.jpg`,
    alt: "London bottle service VIP table booking at Mayfair nightclubs",
  },
  bookATable: {
    hero: `${G}/1.jpg`,
    alt: "Book a VIP table at London's best nightclubs",
  },
  bottleServiceGuide: {
    hero: `${G}/3.jpg`,
    alt: "Complete guide to bottle service at London nightclubs",
  },
  clubsByNight: {
    hero: `${G}/5.jpg`,
    alt: "London nightclubs open every night of the week",
  },
  bestClubs: {
    hero: `${G}/7.jpg`,
    alt: "Best nightclubs for bottle service in London",
  },
  bestVipTables: {
    hero: `${G}/8.jpg`,
    alt: "Best VIP tables in London nightclubs",
  },
  tablePrices: {
    hero: `${G}/9.jpg`,
    alt: "Club table prices comparison London",
  },
  guestlistVsTable: {
    hero: `${G}/10.jpg`,
    alt: "Guestlist versus VIP table booking at London clubs",
  },
  mayfairGuide: {
    hero: `${G}/11.jpg`,
    alt: "Mayfair table booking guide nightclubs",
  },
  blogIndex: {
    hero: `${G}/12.jpg`,
    alt: "London nightlife blog guides and tips",
  },
};

// ---------- Section / CTA background images ----------
export const sectionImages = {
  ctaBackground: `${G}/2.jpg`,
  trustSection: `${G}/4.4.jpg`,
  howItWorks: `${G}/6.jpg`,
  clubsGrid: `${G}/14.jpg`,
  divider1: `${G}/19.jpg`,
  divider2: `${G}/20.jpg`,
  divider3: `${G}/23.jpg`,
};

// Helper: get club images with fallback
export function getClubImages(slug: string) {
  return (
    clubImages[slug] ?? {
      hero: pageImages.home.hero,
      card: pageImages.home.hero,
      alt: "VIP bottle service at a London nightclub",
      extra: [],
    }
  );
}

// Helper: get blog images with fallback
export function getBlogImages(slug: string) {
  return (
    blogImages[slug] ?? {
      featured: pageImages.blogIndex.hero,
      alt: "London nightlife guide",
      inline: [],
    }
  );
}
