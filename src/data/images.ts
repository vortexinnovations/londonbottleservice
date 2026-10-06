// Centralized image mapping for the entire site.
// All images proxied through /gallery/images/ rewrite (never expose Supabase URL).

const G = "/gallery/images";

// ---------- Club hero & card images ----------
export const clubImages: Record<
  string,
  { hero: string; card: string; alt: string; extra: string[] }
> = {
  "cirque-le-soir": {
    hero: `${G}/fe4414_8d1b76fde5204b9d845400d8d6d40739.jpg`,
    card: `${G}/fe4414_e8d36bbc2efc4a019f285b39fa00b28f.jpg`,
    alt: "Cirque Le Soir nightclub VIP bottle service London",
    extra: [`${G}/fe4414_e922024731294a3ea658c81cc1c1c77f.jpg`, `${G}/fe4414_5dd524d974ed4435b62b0b022ff2d04a.jpg`, `${G}/fe4414_f00637f3a2a740078b492ed93e5ec5e5.jpg`],
  },
  "tape-london": {
    hero: `${G}/fe4414_f7b94570ec1a43bf9764e96c7fedd9fd.jpg`,
    card: `${G}/fe4414_1d15c82a7aeb4dd18e991cfd561ab9b8.jpg`,
    alt: "Tape London VIP table booking Mayfair",
    extra: [`${G}/fe4414_dc822275ef5e4630a7ba77292a4b39c4.jpg`, `${G}/fe4414_92f7d4129dfa48ec911e2595a2317aac.jpg`, `${G}/fe4414_1726ac3dd44f4c1387da5f489b5cab86.jpg`],
  },
  "cuckoo-club": {
    hero: `${G}/fe4414_423495393edf437d9425d453f03729f1.jpg`,
    card: `${G}/fe4414_f06a962e34d74d8d88f62e3607c5dab0.jpg`,
    alt: "Cuckoo Club Mayfair VIP bottle service",
    extra: [`${G}/fe4414_243e282bb43f4d2cb03320ddb0cf5549.jpg`, `${G}/fe4414_abfb3ef6a9794a8ab2e27779ebfab3f5.jpg`, `${G}/fe4414_938458d67f614f5cb736ac0e2e4fe1f9.jpg`],
  },
  "maddox": {
    hero: `${G}/fe4414_16a4f9f6906b41aa8f20b18ac3899475.jpg`,
    card: `${G}/fe4414_4cdad8e2e343466889cfb9614f83379f.jpg`,
    alt: "Maddox Club VIP table booking Mayfair nightclub",
    extra: [`${G}/fe4414_9bf346cb801649ea839f8fe1bab5182f.jpg`, `${G}/fe4414_c5d71df402634f1bb95e48817e645371.jpg`, `${G}/fe4414_301f1e2620f043329538b41abec3c184.jpg`],
  },
  "tabu-london": {
    hero: `${G}/fe4414_2927b7810b9c4b14a8358df996c0408e.jpg`,
    card: `${G}/fe4414_48ae7b23f1e04f0a94a53da7e6a08ea9.jpg`,
    alt: "Tabu London VIP bottle service Mayfair",
    extra: [`${G}/fe4414_d03ed6fb1e754a34a815beebf6a14835.jpg`, `${G}/fe4414_c1cdde8590474c1fa5509122636f79d1.jpg`, `${G}/fe4414_4d46bfda41374b7b9f1779d9757bc871.jpg`],
  },
  "london-reign": {
    hero: `${G}/DSC_6945.jpg`,
    card: `${G}/DSC_6946.jpg`,
    alt: "Reign London showclub VIP tables Piccadilly",
    extra: [`${G}/DSC_6981.jpg`, `${G}/DSC_6982.jpg`, `${G}/DSC_6984.jpg`],
  },
  "selene-london": {
    hero: `${G}/fe4414_5e23eeafd6314264963165b315a2d5f7.jpg`,
    card: `${G}/fe4414_1016cb8f2f854fcba503d8b29d4ebf9d.jpg`,
    alt: "Selene London nightclub VIP bottle service Mayfair",
    extra: [`${G}/fe4414_85b9fc90bd9d4311919bf108aa1b75f0.jpg`, `${G}/fe4414_4a9e8d6a5af24e05a5817d8d20c43909.jpg`, `${G}/fe4414_1462f563979d4a04a8a2991d56c3b384.jpg`],
  },
  "funky-buddha": {
    hero: `${G}/fe4414_affd1145589143f7a655ebcb34a0a7c8.jpg`,
    card: `${G}/fe4414_950de24e4f2b429ba47a022f13479db5.jpg`,
    alt: "Funky Buddha London VIP table booking Mayfair",
    extra: [`${G}/fe4414_80bf23f50fb443a99d16df14a145ffe5.jpg`, `${G}/fe4414_ff953c00db3a4af5b4b7a6575ab8abae.jpg`, `${G}/fe4414_6e2adddf70f24f388d49faeba85db960.jpg`],
  },
  "scotch-of-st-james": {
    hero: `${G}/fe4414_58f05bf5164c42dc994932151da108be.jpg`,
    card: `${G}/fe4414_872ac846290a4666b58be8ddf31d25bf.jpg`,
    alt: "Scotch of St James VIP bottle service London",
    extra: [`${G}/fe4414_5a886c260d914f009b5e498b98c5dfe4.jpg`, `${G}/fe4414_6f2589c074724205998ccd4113a4a94b.jpg`, `${G}/fe4414_072d223d158244a6815f1ed7b01e900b.jpg`],
  },
  "dear-darling": {
    hero: `${G}/fe4414_b3ddf2c48c9d49dfbd53bd0710bcf757.jpg`,
    card: `${G}/fe4414_b4633e7c60fa491e8c26bea776d3e98c.jpg`,
    alt: "Dear Darling Mayfair VIP tables bottle service",
    extra: [`${G}/fe4414_9584be9cd3af42b28799afa2a52a64ec.jpg`, `${G}/fe4414_344fbd63598246e7aa317196b7721a0c.jpg`, `${G}/fe4414_141a8e5a0dc0400caa5217cf2d206ba5.jpg`],
  },
  "beat-london": {
    hero: `${G}/fe4414_c0f53cc6cfe84299987ece034fa64e25.jpg`,
    card: `${G}/fe4414_d98580822591406082db347183f9192a.jpg`,
    alt: "Beat London nightclub VIP bottle service",
    extra: [`${G}/fe4414_2b0b9405f5084a1bb087854db63c68ab.jpg`, `${G}/fe4414_9bca79c7758d42a48f33bfe38f57e6d0.jpg`, `${G}/fe4414_11a552e726fa49a4a469fe4ce46a7272.jpg`],
  },
  "the-box": {
    hero: `${G}/fe4414_97067774a6b844efbd5fe0c818358b30.jpg`,
    card: `${G}/fe4414_756101535dbf49548edff376706b2635.jpg`,
    alt: "The Box London VIP table booking Soho",
    extra: [`${G}/fe4414_1700d1cd0c8f417493e5e7a301dbcfa7.jpg`, `${G}/fe4414_689a9421d94a4eea995ef11e2cacc696.jpg`, `${G}/fe4414_486e18bdbca0451bb2f8be457b112419.jpg`],
  },
  "luna-club-london": {
    hero: `${G}/fe4414_de7fc0b8b7b04a1e956a7161623452b6.jpg`,
    card: `${G}/fe4414_d0f23381f8094125a6bf2ee0f93def16.jpg`,
    alt: "Luna Club London VIP bottle service",
    extra: [`${G}/fe4414_4c672667e7a5457b9224ad73e3c5dda7.jpg`, `${G}/fe4414_e949276097ce47268f86b1b06b938c57.jpg`, `${G}/fe4414_c6667a69785e4fac823c8041211beae8.jpg`],
  },
  "maison-close": {
    hero: `${G}/fe4414_0023ee263fca4fe9806bc09d74113eaa.jpg`,
    card: `${G}/fe4414_002538ddacfe4ce1a4fe89fa0e8305ae.jpg`,
    alt: "Maison Close Mayfair VIP bottle service house music",
    extra: [`${G}/fe4414_00edcb5adc4c4c4cb5dd97d80ea2f4c4.jpg`, `${G}/fe4414_0152b4f29a9540be8eef055230e66221.jpg`, `${G}/fe4414_016460dc35074665a9f15d051da0d9de.jpg`],
  },
  // Closed clubs — kept for SEO pages
  "libertine": {
    hero: `${G}/fe4414_8742ffee41884142b564cb9eb73dbd2e.jpg`,
    card: `${G}/fe4414_54a8200c73ae49e7a5ee7170777de8bf.jpg`,
    alt: "Libertine London nightclub (permanently closed)",
    extra: [],
  },
  "lio-london": {
    hero: `${G}/fe4414_e139c9c3f58a470ba008a1ac6ddbd730.jpg`,
    card: `${G}/fe4414_491c64bede334c11aad784d7517742a7.jpg`,
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
    featured: `${G}/fe4414_cb6727818fb2488fb44821b0bd034ee3.jpg`,
    alt: "Champagne bottle service at a London Mayfair nightclub",
    inline: [`${G}/fe4414_07f1808f9ba84bdd8fe93d124ef624ae.jpg`, `${G}/fe4414_61e31710f1314c0980898b5bbc38aef9.jpg`],
  },
  "best-clubs-for-birthday-london": {
    featured: `${G}/fe4414_c855b43f41f44f79891ae18f1e6a765c.jpg`,
    alt: "Birthday celebration with sparklers at a VIP table in London",
    inline: [`${G}/fe4414_887bb3b2e8fb4e78b11ba07df5c714df.jpg`, `${G}/fe4414_a6cf0a77ee0945f1be8dcfa6a7e80bb6.jpg`],
  },
  "mayfair-dress-code-what-to-wear": {
    featured: `${G}/fe4414_ac46780a925545bcaf2d13a3bf58a69d.jpg`,
    alt: "Well-dressed guests arriving at a Mayfair nightclub",
    inline: [`${G}/fe4414_88442f0d9c6440da8380f9be7dd9ca1f.jpg`, `${G}/fe4414_e91875d535ad4a6cb1e532787d6eb75d.jpg`],
  },
  "how-to-get-into-exclusive-london-clubs": {
    featured: `${G}/fe4414_a3f920470cba4a0683e607d82d845041.jpg`,
    alt: "Entrance to an exclusive London nightclub in Mayfair",
    inline: [`${G}/fe4414_079171b00717438b8594796362b0247d.jpg`, `${G}/fe4414_4b25a078578f419581101465f5cd5a1b.jpg`],
  },
  "celebrity-clubs-london-where-famous-people-party": {
    featured: `${G}/fe4414_ed8d19202a414f6097fb4efff5a2cb19.jpg`,
    alt: "VIP area at a celebrity-favourite London club",
    inline: [`${G}/fe4414_db8c3311a92b4ad9b9f580a239dedf45.jpg`, `${G}/fe4414_a13d781f5e24493ebc3133845efa340e.jpg`],
  },
  "london-nightlife-guide-first-timers": {
    featured: `${G}/fe4414_dd3d752ca08e46f7aebea56aa8e56258.jpg`,
    alt: "Vibrant London nightclub scene for first-time visitors",
    inline: [`${G}/fe4414_9d8870308b1e4940994470819a516c56.jpg`, `${G}/fe4414_2107b337ac804698b2950ce330519049.jpg`],
  },
  "best-champagne-bottle-service-london-clubs": {
    featured: `${G}/fe4414_27f834dc205f48d394f6757bc73550b4.jpg`,
    alt: "Premium champagne bottle service at a London nightclub",
    inline: [`${G}/fe4414_0528f444f562494791e99146e727f269.jpg`, `${G}/fe4414_14215a177bd145bc8a61ed0ee4b18217.jpg`],
  },
  "hen-party-london-clubs-mayfair": {
    featured: `${G}/fe4414_248f34e1849a4e7688a7b3eb2ef234d2.jpg`,
    alt: "Hen party celebration at a Mayfair club VIP table",
    inline: [`${G}/fe4414_278db07c31a840f799c9b1550ac218fb.jpg`, `${G}/fe4414_bb3fa2c87a4a4de1bc65543ad26ecad0.jpg`],
  },
  "mayfair-vs-shoreditch-nightlife-compared": {
    featured: `${G}/fe4414_1e96036086e7443ca089920a9797bbc3.jpg`,
    alt: "Mayfair nightclub atmosphere compared to East London",
    inline: [`${G}/fe4414_28685897121b4816a8e61668db72bd17.jpg`, `${G}/fe4414_58aaf7df66954c47a4dbfcf1ee8f3b5a.jpg`],
  },
  "corporate-event-london-clubs-entertaining-clients": {
    featured: `${G}/fe4414_7dbdf5ed43004438868b9407b4e14146.jpg`,
    alt: "Corporate entertainment at a premium London nightclub",
    inline: [`${G}/fe4414_46f66a79ce954aa3b93d8276b7f33ab0.jpg`, `${G}/fe4414_f388f903679b48dd8cf0d497dcc66fcf.jpg`],
  },
  "dear-darling-mayfair-guide": {
    featured: `${G}/fe4414_af41f902101148d3866c12c28816d0d0.jpg`,
    alt: "Inside Dear Darling Mayfair nightclub",
    inline: [`${G}/fe4414_cb890a122c024a4ab9ebfd0340633155.jpg`, `${G}/fe4414_d06e7bf2872e4c60853096d8aa8afe24.jpg`],
  },
  "the-box-soho-bottle-service-guide": {
    featured: `${G}/fe4414_f1539b2b74d347678d7d315f7b59397d.jpg`,
    alt: "The Box Soho performance venue VIP area",
    inline: [`${G}/fe4414_458bf79db0954e1ea5f6d28ea1917064.jpg`, `${G}/fe4414_a674720f37584280b76863c91b91ae54.jpg`],
  },
  "luna-club-london-guide": {
    featured: `${G}/fe4414_d9c7d11ba4494929b40a6173e605018a.jpg`,
    alt: "Luna Club London nightclub interior",
    inline: [`${G}/fe4414_a96c1c8ad3b04bc38b80332d307f8724.jpg`, `${G}/fe4414_0de6edc0e91842caa94cd80d20c6a200.jpg`],
  },
  "best-hip-hop-clubs-mayfair-bottle-service": {
    featured: `${G}/fe4414_e337aea78df64aa49a43b349af76eeaa.jpg`,
    alt: "Hip-hop night at a Mayfair VIP nightclub",
    inline: [`${G}/fe4414_e2f0482a8a69492e892195e6e4455f86.jpg`, `${G}/fe4414_fc4a1ef840984a7bb84667b22fb43180.jpg`],
  },
  "saturday-night-mayfair-table-booking-guide": {
    featured: `${G}/fe4414_22246854daae4814bd1b4a551b4fd3b6.jpg`,
    alt: "Saturday night VIP tables at a packed Mayfair club",
    inline: [`${G}/fe4414_556d6f1de0fe45cc9f898a07c1a0c9f3.jpg`, `${G}/fe4414_66d11cfc01954bc08e72f39cff100b13.jpg`],
  },
  "stag-do-london-best-clubs-bachelor-party": {
    featured: `${G}/fe4414_fa34c1f26de442cf8c5123fccb7c45c6.jpg`,
    alt: "Stag party celebration at a London nightclub",
    inline: [`${G}/fe4414_17bbb73e0d7f46828a7212e9b95e2db3.jpg`, `${G}/fe4414_62305106cc704481bbe1e1f491623aa6.jpg`],
  },
  "what-to-order-london-club-bottle-menu-guide": {
    featured: `${G}/fe4414_6d507247baac4421994a083792186142.jpg`,
    alt: "Premium bottle menu at a London nightclub table",
    inline: [`${G}/fe4414_80e594b4040a4dcbb77174d98fc62c17.jpg`, `${G}/fe4414_b2a1d43d08754dcab93d1a4ee9fffc9c.jpg`],
  },
  "best-house-music-clubs-london-bottle-service": {
    featured: `${G}/fe4414_1c3722895a874a6b99b368ecfd004be1.jpg`,
    alt: "DJ performing house music at a London nightclub",
    inline: [`${G}/fe4414_0b56407f8e7340daab04b2f48da1b04a.jpg`, `${G}/fe4414_647c76f0ae1044c891b4e8c65cea4fb2.jpg`],
  },
  "where-to-sit-table-positioning-london-clubs": {
    featured: `${G}/fe4414_886a7574a4284548acf1de5ec0e7407d.jpg`,
    alt: "VIP table positioning and views at a London club",
    inline: [`${G}/fe4414_c8917e9b64714d4293f49977efc98aad.jpg`, `${G}/fe4414_ea0f3fcb4f4f40b0a544bd40b712de87.jpg`],
  },
  "mayfair-night-out-dinner-drinks-club-itinerary": {
    featured: `${G}/fe4414_e21b0c7b60694081b5a518042936b4a9.jpg`,
    alt: "A perfect Mayfair evening out from dinner to nightclub",
    inline: [`${G}/fe4414_bacab3488b8a4beb92e3a205b5d590eb.jpg`, `${G}/fe4414_f9da40e2a4fd41729f7888dc3d32d62d.jpg`],
  },
  "london-club-age-policy-id-guide": {
    featured: `${G}/fe4414_2b63e378623d4fb9ab305854ebc0e7c0.jpg`,
    alt: "Entrance security at a London nightclub checking ID",
    inline: [`${G}/fe4414_6065c524df994488b51efb6653100bf4.jpg`, `${G}/fe4414_ee8397130c4a4bcd90927e75254afb1a.jpg`],
  },
  "best-london-clubs-large-groups": {
    featured: `${G}/fe4414_a5dd778100da407aafdb91bf7dcc1453.jpg`,
    alt: "Large group celebrating at VIP tables in London",
    inline: [`${G}/fe4414_943f8f6d08ad4832b9b65d77acbe0ba3.jpg`, `${G}/fe4414_92a48f1ce7d3408bbaaccb025caedb29.jpg`],
  },
  "friday-night-vs-saturday-night-london-clubs": {
    featured: `${G}/fe4414_aa4a4a1a7685443eb8061a40ae66a28e.jpg`,
    alt: "Busy London nightclub comparing Friday and Saturday",
    inline: [`${G}/fe4414_c80c4539ed5c478aa4b8fe2fb4949d36.jpg`, `${G}/fe4414_6f5584e578c649c890c9a1482404f27c.jpg`],
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
  "champagne-bottle-sizes-explained": {
    featured: `${G}/maison-close-001.jpg`,
    alt: "Champagne bottle service presentation at a London Mayfair nightclub",
    inline: [],
  },
  "how-many-bottles-for-a-club-table": {
    featured: `${G}/maison-close-310.jpg`,
    alt: "Bottle service order arriving at a London nightclub table",
    inline: [],
  },
  "how-long-do-you-get-a-club-table-london": {
    featured: `${G}/maison-close-1033.jpg`,
    alt: "Bottle service table dressed with ice buckets in a dark London club",
    inline: [],
  },
  "how-to-split-club-table-cost-london": {
    featured: `${G}/maison-close-199.jpg`,
    alt: "Group sharing bottle service at a London nightclub table",
    inline: [],
  },
  "non-alcoholic-bottle-service-london": {
    featured: `${G}/maison-close-023.jpg`,
    alt: "Alcohol-free sparkling served in an ice bucket at a London club table",
    inline: [],
  },
  "can-you-take-bottles-home-from-a-london-club": {
    featured: `${G}/maison-close-609.jpg`,
    alt: "Bottles on ice at a London club table late in the night",
    inline: [],
  },
  "why-is-bottle-service-so-expensive-london": {
    featured: `${G}/maison-close-946.jpg`,
    alt: "Bottle service presentation at an upscale London club table",
    inline: [],
  },
  "service-charge-bottle-service-london": {
    featured: `${G}/maison-close-517.jpg`,
    alt: "Final bill and card settlement at a London club table",
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
