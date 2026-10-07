// null = price on request (e.g. a venue that has changed its name and has no
// confirmed minimum spend yet). Never invent a figure to fill the gap.
export interface ClubPricing {
  floorTable: number | null;
  vipTable: number | null;
}

export interface Club {
  slug: string;
  bookingSlug?: string;
  name: string;
  shortName: string;
  /** Previous trading name, for a venue that has been renamed. */
  formerName?: string;
  /** Closed venues only: one sentence naming the owner-confirmed successor, shown after "has closed". */
  successorNote?: string;
  /** Open clubs to suggest alongside a renamed venue (slugs from `clubs`). */
  alternativeSlugs?: string[];
  tagline: string;
  description: string;
  longDescription: string;
  address: string;
  area: string;
  musicPolicy: string;
  dressCode: string;
  openingNights: string[];
  openingHours: string;
  pricing: ClubPricing;
  whatsIncluded: string[];
  knownFor: string[];
  bestFor: string;
  atmosphere: string;
  capacity: string;
  faqs: { question: string; answer: string }[];
}

export const clubs: Club[] = [
  {
    slug: "cirque-le-soir",
    bookingSlug: "cirque-le-soir-table-booking",
    name: "Cirque Le Soir",
    shortName: "Cirque",
    tagline: "London's most theatrical nightclub experience",
    description:
      "Cirque Le Soir is London's original circus-themed nightclub on Ganton Street, Soho — a favourite of A-list celebrities and anyone looking for a night that goes beyond a standard club. Fire breathers, contortionists, stilt walkers and sword swallowers perform throughout the night while you drink from your table. It's loud, it's outrageous, and there's genuinely nothing else like it in London.",
    longDescription:
      "Walking into Cirque Le Soir feels like stepping into a fever dream directed by someone with a serious circus obsession and an unlimited budget. The venue is deliberately dark, intimate, and chaotic in the best possible way. Performers weave between tables throughout the night — you might have a contortionist bending over your champagne while a fire breather lights up the dance floor behind you. The music is primarily hip-hop and RnB, with DJs who know how to read a room that's already been warmed up by the spectacle. The crowd is international, well-dressed, and here for a big night. You'll spot celebrities regularly — the club has hosted everyone from Drake to Rihanna. If you want a table here, book early. Weekend tables sell out fast, especially for groups celebrating birthdays or special occasions.",
    address: "15-21 Ganton Street, Soho, London W1F 9BN",
    area: "Soho (minutes from Mayfair)",
    musicPolicy: "Hip-Hop, RnB, with occasional commercial crossover",
    dressCode:
      "Smart and stylish. No sportswear, no trainers, no shorts. Think Mayfair-ready — collared shirts for men, heels or smart boots for women. The door is selective so make an effort.",
    openingNights: ["Monday", "Wednesday", "Friday", "Saturday"],
    openingHours: "10:30 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group (skip the queue entirely)",
      "A dedicated table and seating area for your party",
      "A personal waitress assigned to your table for the night",
      "Your choice of premium spirits or champagne (covered by your minimum spend)",
      "Mixers, ice, and garnishes included",
      "Front-row views of the live circus performances",
    ],
    knownFor: [
      "Live circus performers throughout the night",
      "Regular celebrity sightings",
      "Theatrical, immersive atmosphere",
      "One of London's most photographed clubs",
    ],
    bestFor:
      "Birthdays, special occasions, and anyone who wants a night they'll actually remember. If you've done the standard Mayfair club and want something completely different, this is it.",
    atmosphere:
      "Intimate, high-energy, theatrical. The venue is deliberately small which makes the atmosphere intense — there's no dead corner in this club.",
    capacity: "Approximately 250",
    faqs: [
      {
        question: "How much is a table at Cirque Le Soir?",
        answer:
          "Floor tables at Cirque Le Soir start from £1,000 minimum spend. VIP tables closer to the stage and in prime positions start from £2,000. Prices can vary depending on the night and any special events. The minimum spend covers your drinks — premium spirits, champagne, or a mix of both.",
      },
      {
        question: "What is the minimum spend at Cirque Le Soir?",
        answer:
          "The minimum spend starts at £1,000 for a standard floor table. This isn't an entry fee — it's the amount you spend on drinks at your table. Your personal waitress will help you choose bottles within your budget.",
      },
      {
        question: "What nights is Cirque Le Soir open?",
        answer:
          "Cirque Le Soir is open Wednesday, Friday, and Saturday nights. Saturdays are the busiest and most in-demand. Wednesdays and Fridays tend to have a slightly lower minimum spend and are great for smaller groups.",
      },
      {
        question: "Is there a dress code at Cirque Le Soir?",
        answer:
          "Yes, the dress code is smart and stylish. Men should wear collared shirts and smart shoes — no trainers, sportswear, or shorts. Women should dress for a night out — heels, dresses, or smart separates. The door team is selective, especially on Saturdays.",
      },
      {
        question: "Can I book a table at Cirque Le Soir for a birthday?",
        answer:
          "Absolutely — Cirque Le Soir is one of the most popular birthday venues in London. The theatrical setting and live performances make it feel like a genuine event rather than just a night at a club. We can arrange birthday cakes, sparklers, and special announcements. Just let us know when you book.",
      },
    ],
  },
  {
    slug: "tape-london",
    bookingSlug: "tape-london-table-booking",
    name: "Tape London",
    shortName: "Tape",
    tagline: "Mayfair's most exclusive members' club nightlife experience",
    description:
      "Tape London on Hanover Square is one of Mayfair's most exclusive late-night venues — a members' club with a recording-studio-inspired interior that attracts music industry heavyweights, celebrities, and serious nightlife connoisseurs. This isn't a high-volume superclub. It's intimate, dark, and deliberately hard to get into.",
    longDescription:
      "Tape London was designed for people who have been everywhere else and want something more private. The interior is inspired by recording studios — think sound-panelled walls, low lighting, and an atmosphere that feels like a private party rather than a public nightclub. The music policy is hip-hop focused with a strong lean towards US rap and RnB, though DJs will cross genres when the room calls for it. The crowd is small, curated, and well-connected — you're as likely to bump into a Premier League footballer as a music producer. Tables here start higher than most Mayfair clubs because you're paying for exclusivity. The venue holds under 200 people and they are very selective about who gets in. If you're booking a table through us, you'll get guaranteed entry for your group, but the venue expects a certain standard in terms of dress and conduct.",
    address: "17 Hanover Square, Mayfair, London W1S 1BN",
    area: "Mayfair",
    musicPolicy: "Hip-Hop, RnB, US Rap, occasional Afrobeats",
    dressCode:
      "Strictly smart. Men must wear smart shoes and a collared shirt minimum — jackets are encouraged but not required. Women should dress elegantly. No streetwear, no casual trainers, no exceptions. This is a members' club environment.",
    openingNights: ["Tuesday", "Friday", "Saturday", "Sunday"],
    openingHours: "10:30 PM – 3:30 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Guaranteed entry to a private members' club (normally inaccessible to the public)",
      "A reserved table in an intimate, exclusive setting",
      "Personal table service throughout the night",
      "Premium spirits or champagne of your choice",
      "Mixers, ice, and garnishes",
      "Access to one of the most exclusive crowds in London",
    ],
    knownFor: [
      "Members' club exclusivity with limited capacity",
      "Recording studio-inspired interior design",
      "Celebrity and music industry crowd",
      "One of the hardest doors in Mayfair",
    ],
    bestFor:
      "Groups who want exclusivity over spectacle. If you've done the big Mayfair clubs and want something more private, more curated, and genuinely exclusive, Tape is the move.",
    atmosphere:
      "Intimate, dark, exclusive. The small capacity means the energy is concentrated — it feels like you've been invited to someone's very expensive private party.",
    capacity: "Under 200",
    faqs: [
      {
        question: "How much is a table at Tape London?",
        answer:
          "Tables at Tape London start from £1,500 minimum spend for a standard table. Premium and VIP positions start from £3,000. Tape is one of the more exclusive (and expensive) venues in Mayfair, but you're paying for an experience most people can't access.",
      },
      {
        question: "Is Tape London a members' club?",
        answer:
          "Yes, Tape London operates as a members' club. However, when you book a table through us, we arrange guest access for your entire group. You get the members' club experience without needing a membership.",
      },
      {
        question: "What nights is Tape London open?",
        answer:
          "Tape London is open Wednesday through Saturday. Fridays and Saturdays are the busiest and most expensive. Thursday is an excellent night — still a strong crowd and atmosphere, with slightly lower minimum spends.",
      },
      {
        question: "What's the dress code at Tape London?",
        answer:
          "Strictly smart. This is a members' club and the dress code reflects that. Men need smart shoes and a collared shirt at minimum. Jackets are encouraged. Women should dress elegantly — cocktail dresses, heels, smart separates. No streetwear or casual attire.",
      },
      {
        question: "How do I get into Tape London without a membership?",
        answer:
          "The easiest way is to book a table through us. We have a direct relationship with the venue and can arrange guest entry for your group. Walk-ins without a membership or table booking are extremely unlikely to get in.",
      },
    ],
  },
  {
    slug: "cuckoo-club",
    bookingSlug: "cuckoo-club-table-booking",
    name: "99 Regent Street (formerly Cuckoo Club)",
    shortName: "99 Regent Street",
    formerName: "Cuckoo Club",
    alternativeSlugs: ["maddox", "tape-london", "selene-london"],
    tagline: "The Mayfair club formerly known as Cuckoo Club, now trading as 99 Regent Street",
    description:
      "99 Regent Street is the new name of the Mayfair club formerly known as Cuckoo Club. Table minimums, music and opening nights under the new name are confirmed on enquiry: message us with your date and group size for current details.",
    longDescription:
      "Cuckoo Club now trades as 99 Regent Street. The venue is still in Mayfair, and the old name is still how many people search for it, so this page keeps both. Because the venue has changed its name, the floor and VIP minimum spends, music policy and opening nights published for Cuckoo Club no longer apply automatically. Rather than show out-of-date figures, this guide lists prices as on request: send your date, group size and any occasion on WhatsApp and the current minimum spend, table options and door policy will be confirmed before you commit.",
    address: "Mayfair, London",
    area: "Mayfair",
    musicPolicy: "Confirmed on enquiry",
    dressCode:
      "Confirmed with your booking. Smart Mayfair dress is the safe default: collared shirts and smart shoes for men, no sportswear.",
    openingNights: [],
    openingHours: "Confirmed on enquiry",
    pricing: {
      floorTable: null,
      vipTable: null,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table and seating area",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
    ],
    knownFor: [
      "Formerly Cuckoo Club",
      "Mayfair location",
    ],
    bestFor:
      "Groups who knew Cuckoo Club and want to book the venue under its new name. Ask for the current minimum spend before you book.",
    atmosphere:
      "Confirmed on enquiry. The venue has a new name, so ask for current details before booking.",
    capacity: "Confirmed on enquiry",
    faqs: [
      {
        question: "Is Cuckoo Club still open?",
        answer:
          "Cuckoo Club now trades as 99 Regent Street, in Mayfair. Tables can still be booked: message us with your date and group size for current availability.",
      },
      {
        question: "How much is a table at 99 Regent Street?",
        answer:
          "Table minimums under the new name are confirmed on enquiry. Message us with your date and group size and the current floor and VIP minimum spend will be confirmed before you book.",
      },
      {
        question: "What nights is 99 Regent Street open?",
        answer:
          "Opening nights under the new name are confirmed on enquiry. Send your preferred date and availability will be checked for you.",
      },
    ],
  },
  {
    slug: "maddox",
    bookingSlug: "maddox-club-table-booking",
    name: "Maddox",
    shortName: "Maddox",
    tagline: "Where Mayfair dining meets late-night clubbing",
    description:
      "Maddox is a restaurant-nightclub hybrid in the heart of Mayfair that does both genuinely well. Start with Italian fine dining, then stay as the venue transforms into a club with house music and a well-dressed crowd. It's the best option if you want dinner and clubbing in one venue without compromising on either.",
    longDescription:
      "Maddox solves a problem that most Mayfair venues don't even attempt — how to combine a genuine fine dining experience with serious late-night clubbing under one roof. The restaurant serves high-quality Italian cuisine in an elegant setting, and as the night progresses, the lights drop, the music gets louder, and the space transforms into a proper nightclub. The music policy leans towards house, deep house, and commercial house — it's sophisticated rather than aggressive. The crowd reflects this: well-dressed professionals, couples who started with dinner and decided to stay, and groups who specifically chose Maddox because they wanted the full evening in one place. Tables for the club element start from £1,000 minimum spend, but many groups opt for a dinner booking first and then transition to bottle service. If you're hosting clients, celebrating an anniversary, or just want a more grown-up night out that still goes late, Maddox is the answer.",
    address: "3-5 Mill Street, Mayfair, London W1S 2AU",
    area: "Mayfair",
    musicPolicy: "House, Deep House, Commercial House, occasional soulful sets",
    dressCode:
      "Smart. This is Mayfair fine dining meets nightclub — dress accordingly. Jackets encouraged for men, smart shoes essential. Women should dress elegantly. No casual wear.",
    openingNights: ["Thursday", "Friday", "Saturday"],
    openingHours:
      "Restaurant from 7:00 PM, club from 10:30 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority club entry for your group",
      "Reserved table and seating",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Option to combine dinner and bottle service",
    ],
    knownFor: [
      "Seamless dinner-to-club transition",
      "High-quality Italian restaurant on-site",
      "Sophisticated house music policy",
      "Ideal for corporate entertainment and date nights",
    ],
    bestFor:
      "Groups who want dinner and clubbing in one place. Corporate entertaining, anniversaries, date nights, or anyone who prefers a more polished, house-music-focused night out.",
    atmosphere:
      "Sophisticated and grown-up. The dinner-to-club transition creates a natural arc to the evening that feels intentional rather than chaotic.",
    capacity: "Approximately 300",
    faqs: [
      {
        question: "How much is a table at Maddox?",
        answer:
          "Club tables at Maddox start from £1,000 minimum spend. VIP positions start from £2,000. Many guests also book dinner first (separate pricing) and then transition to bottle service for the club portion of the evening.",
      },
      {
        question: "Can I have dinner and then bottle service at Maddox?",
        answer:
          "Yes, this is actually one of the best ways to experience Maddox. Book dinner at the restaurant, then transition seamlessly into the club with a table booking. We can arrange both — just let us know your group size and preferred time.",
      },
      {
        question: "What type of music does Maddox play?",
        answer:
          "Maddox focuses on house music — deep house, tech house, and commercial house. The music is sophisticated and fits the dining-to-clubbing concept. If you're looking for hip-hop, one of the other venues might be a better fit.",
      },
      {
        question: "What nights is Maddox open?",
        answer:
          "The club at Maddox is open Thursday, Friday, and Saturday. The restaurant operates more broadly but the late-night club element runs those three nights.",
      },
      {
        question: "What's the dress code at Maddox?",
        answer:
          "Smart. This is one of the more upscale venues in Mayfair. Men should wear smart shoes and a collared shirt minimum — jackets are encouraged. Women should dress elegantly. Think fine dining dress code that carries into the night.",
      },
    ],
  },
  {
    slug: "tabu-london",
    bookingSlug: "tabu-london-table-booking",
    name: "Rumour (formerly Tabu)",
    shortName: "Rumour",
    formerName: "Tabu",
    alternativeSlugs: ["tape-london", "selene-london", "dear-darling"],
    tagline: "The Mayfair club formerly known as Tabu, now trading as Rumour",
    description:
      "Rumour is the new name of the Mayfair club formerly known as Tabu. Table minimums, music and opening nights under the new name are confirmed on enquiry: message us with your date and group size for current details.",
    longDescription:
      "Tabu now trades as Rumour. The venue is still in Mayfair, and the old name is still searched, so this page keeps both. Because the venue has changed its name, the floor and VIP minimum spends, music policy and opening nights published for Tabu no longer apply automatically. Rather than show out-of-date figures, this guide lists prices as on request: send your date, group size and any occasion on WhatsApp and the current minimum spend, table options and door policy will be confirmed before you commit.",
    address: "Mayfair, London",
    area: "Mayfair",
    musicPolicy: "Confirmed on enquiry",
    dressCode:
      "Confirmed with your booking. Smart Mayfair dress is the safe default: no sportswear or casual wear.",
    openingNights: [],
    openingHours: "Confirmed on enquiry",
    pricing: {
      floorTable: null,
      vipTable: null,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table and seating area",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
    ],
    knownFor: [
      "Formerly Tabu",
      "Mayfair location",
    ],
    bestFor:
      "Groups who knew Tabu and want to book the venue under its new name. Ask for the current minimum spend before you book.",
    atmosphere:
      "Confirmed on enquiry. The venue has a new name, so ask for current details before booking.",
    capacity: "Confirmed on enquiry",
    faqs: [
      {
        question: "Is Tabu London still open?",
        answer:
          "Tabu now trades as Rumour, in Mayfair. Tables can still be booked: message us with your date and group size for current availability.",
      },
      {
        question: "How much is a table at Rumour?",
        answer:
          "Table minimums under the new name are confirmed on enquiry. Message us with your date and group size and the current floor and VIP minimum spend will be confirmed before you book.",
      },
      {
        question: "What nights is Rumour open?",
        answer:
          "Opening nights under the new name are confirmed on enquiry. Send your preferred date and availability will be checked for you.",
      },
    ],
  },
  {
    slug: "london-reign",
    bookingSlug: "reign-london-table-booking",
    name: "London Reign",
    shortName: "Reign",
    tagline: "Mayfair's most extravagant showclub",
    description:
      "London Reign on Piccadilly is a full-scale showclub — think aerial performers, dancers, live vocalists, and production values that rival a West End show. If Cirque Le Soir is theatrical, Reign is the full Broadway production. It's Mayfair's answer to the big Las Vegas nightclub experience.",
    longDescription:
      "London Reign doesn't do anything by halves. The venue on Piccadilly is designed from the ground up as a showclub — a space where live entertainment and nightclub culture merge into something that's closer to a Las Vegas residency than a standard London night out. Expect aerial acrobats performing above the dance floor, professional dancers, live vocalists, fire performers, and production values that most London clubs can't match. The venue itself is large by Mayfair standards, with a proper stage area, multiple table sections, and enough space for the performances to have real impact. The music crosses genres — commercial hits, house, hip-hop — because the entertainment is the headline act, not the DJ. The crowd is a mix of tourists who've heard about the spectacle, London regulars who want something bigger than a standard club night, and groups celebrating major occasions who want a venue that matches the size of the event. Tables start from £1,000 and the VIP sections offer excellent views of the performances.",
    address: "12-14 Piccadilly, Mayfair, London W1J 0DD",
    area: "Piccadilly / Mayfair",
    musicPolicy:
      "Mixed — commercial, house, hip-hop. The live entertainment is the main attraction.",
    dressCode:
      "Smart. Similar standards to other Mayfair clubs. Men need smart shoes and a collared shirt. Women should dress up. The venue is high-production, so the crowd tends to make an effort.",
    openingNights: ["Tuesday", "Thursday", "Friday", "Saturday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table with views of the live shows",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "World-class live entertainment throughout the night",
    ],
    knownFor: [
      "Aerial performers and acrobatic acts",
      "Las Vegas-style production values",
      "Live vocalists and dancers",
      "One of the biggest show-format venues in Mayfair",
    ],
    bestFor:
      "Groups who want a spectacle. Major birthdays, hen parties that want something upscale, tourists experiencing London nightlife, and anyone who's been to standard clubs and wants something bigger.",
    atmosphere:
      "Grand, high-energy, spectacular. The live performances create waves of energy throughout the night — it builds rather than flatlines.",
    capacity: "Approximately 500",
    faqs: [
      {
        question: "How much is a table at London Reign?",
        answer:
          "Tables at London Reign start from £1,000 minimum spend for floor tables. VIP tables with premium stage views start from £2,500. The production quality justifies the spend — you're getting a show and a club night in one.",
      },
      {
        question: "What kind of shows does London Reign have?",
        answer:
          "London Reign features aerial acrobats, professional dancers, fire performers, live vocalists, and choreographed routines throughout the night. The production values are closer to a West End show than a standard club. New acts rotate regularly.",
      },
      {
        question: "What nights is London Reign open?",
        answer:
          "London Reign is open Friday and Saturday nights. Both nights feature the full show programme. Saturdays tend to be busier and have higher minimum spends.",
      },
      {
        question: "Is London Reign good for hen parties?",
        answer:
          "It's one of the best hen party venues in Mayfair. The show element makes it feel like a genuine event, and the venue can accommodate larger groups with multiple tables. Let us know you're celebrating and we'll help arrange something special.",
      },
      {
        question: "How does London Reign compare to Cirque Le Soir?",
        answer:
          "Both are show-format venues but the style is different. Cirque Le Soir is intimate, circus-themed, and in-your-face — performers are at your table. London Reign is bigger, more polished, and more like a Las Vegas showclub. Cirque is wild and unpredictable, Reign is grand and spectacular.",
      },
    ],
  },
  {
    slug: "selene-london",
    bookingSlug: "selene-london-table-booking",
    name: "Selene London",
    shortName: "Selene",
    tagline: "Mayfair's newest multi-room club with bowling",
    description:
      "Selene London is one of Mayfair's newest additions — a multi-room venue that combines a proper nightclub with private bowling lanes and multiple distinct spaces. It's built for groups who want options, variety, and a night that goes beyond sitting at a table in one room.",
    longDescription:
      "Selene is the kind of venue that only exists because someone asked 'what if a Mayfair nightclub also had bowling?' The result is surprisingly good. The venue spans multiple rooms, each with its own identity — the main club room plays hip-hop and RnB with the standard Mayfair bottle service setup, but there are also private bowling lanes where you can book a table and bowl between drinks. A third room offers a different vibe again. This multi-room concept makes Selene one of the most versatile venues in Mayfair. Groups can move between spaces throughout the night, which keeps things interesting and avoids the fatigue that can set in at single-room venues. The bowling lanes are particularly popular for birthday groups and corporate nights — it adds an activity element that gives people something to do beyond drinking and dancing. The venue is well-designed, the sound systems are proper, and the fit-out is high-end Mayfair standard. It's still relatively new on the scene, which means it hasn't yet developed the queues and sky-high pricing of some established venues.",
    address: "25 Sackville Street, Mayfair, London W1S 3AX",
    area: "Mayfair",
    musicPolicy: "Hip-Hop, RnB, Afrobeats across multiple rooms",
    dressCode:
      "Smart. Standard Mayfair dress code — collared shirts and smart shoes for men, dressed-up for women. No casual wear.",
    openingNights: ["Thursday", "Friday", "Saturday", "Sunday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table in your chosen room",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Access to all rooms including bowling (depending on package)",
    ],
    knownFor: [
      "Private bowling lanes within a Mayfair nightclub",
      "Multiple distinct rooms with different vibes",
      "One of the newest venues in Mayfair",
      "Group-friendly layout and activities",
    ],
    bestFor:
      "Groups who want variety and options. Birthdays where you want an activity element, corporate groups who need an icebreaker, or anyone who gets bored sitting at one table all night.",
    atmosphere:
      "Modern, varied, and social. The multi-room layout creates natural movement and energy shifts throughout the night.",
    capacity: "Approximately 400 across all rooms",
    faqs: [
      {
        question: "How much is a table at Selene London?",
        answer:
          "Tables at Selene London start from £1,000 minimum spend. VIP tables start from £2,000. Bowling lane packages may have different pricing structures — contact us for the latest availability.",
      },
      {
        question: "Can you go bowling at Selene London?",
        answer:
          "Yes — Selene has private bowling lanes that you can book alongside your table reservation. It's one of the unique selling points of the venue and particularly popular for birthdays and group celebrations.",
      },
      {
        question: "What nights is Selene open?",
        answer:
          "Selene is open Thursday, Friday, Saturday and Sunday nights. As a newer venue, they occasionally add special event nights — check with us for the latest schedule.",
      },
      {
        question: "How does Selene compare to other Mayfair clubs?",
        answer:
          "Selene is more activity-focused than most Mayfair clubs. If you want a straightforward bottle service night, any of the established venues will deliver. If you want bowling, multiple rooms, and variety throughout the night, Selene is unique in Mayfair.",
      },
      {
        question: "Is Selene good for large groups?",
        answer:
          "Excellent for large groups. The multi-room layout means a group of 20+ can spread across spaces without feeling cramped. The bowling element also gives people something to do together, which is great for groups where not everyone knows each other.",
      },
    ],
  },
  {
    slug: "scotch-of-st-james",
    bookingSlug: "scotch-of-st-james-table-booking",
    name: "Scotch of St James",
    shortName: "Scotch",
    tagline: "London's most iconic underground music venue reborn",
    description:
      "Scotch of St James on Mason's Yard has a legendary history — this is the venue where Jimi Hendrix, The Beatles, and The Rolling Stones used to party. Today it operates as an intimate, music-focused members' club with a strong cocktail programme and a crowd that genuinely cares about what's playing.",
    longDescription:
      "Few venues in London carry as much musical history as Scotch of St James. The original club on Mason's Yard was the epicentre of 1960s rock and roll culture — a tiny basement where the biggest names in music would drink, jam, and party into the early hours. The modern incarnation respects that heritage while updating it for a contemporary audience. The venue remains deliberately intimate with a capacity well under 200, creating an atmosphere that feels more like a private party than a public nightclub. The music policy is eclectic and quality-driven — expect everything from soul and funk to hip-hop and disco, curated by DJs who are selected for taste rather than name recognition. The crowd is older and more discerning than most Mayfair clubs — musicians, creatives, industry people, and anyone who values a great soundtrack over bottle parades. The cocktail programme is taken seriously, which sets it apart from clubs where the drinks list is just a vehicle for minimum spend. If you care about music and atmosphere more than spectacle, Scotch is in a league of its own.",
    address: "13 Mason's Yard, St James's, London SW1Y 6BU",
    area: "St James's",
    musicPolicy: "Eclectic — Soul, Funk, Disco, Hip-Hop, Rock. Quality-curated, not commercial.",
    dressCode:
      "Smart but with personality. Scotch appreciates style over formality. Smart-casual is the baseline but they value individual expression. No sportswear or very casual attire.",
    openingNights: ["Friday", "Saturday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Access to one of London's most historically significant music venues",
      "Reserved table in an intimate setting",
      "Personal table service",
      "Premium spirits, champagne, or expertly crafted cocktails",
      "Mixers, ice, and garnishes",
      "A music experience curated for quality",
    ],
    knownFor: [
      "Legendary rock and roll history (Hendrix, Beatles, Stones)",
      "Intimate, music-focused atmosphere",
      "Quality cocktail programme",
      "Discerning, creative crowd",
    ],
    bestFor:
      "Music lovers who want substance over spectacle. Couples, smaller groups, and anyone who values a great soundtrack and strong drinks in an iconic setting.",
    atmosphere:
      "Intimate, musically rich, and effortlessly cool. The history of the venue gives it a weight that newer clubs can't replicate.",
    capacity: "Under 200",
    faqs: [
      {
        question: "How much is a table at Scotch of St James?",
        answer:
          "Tables at Scotch of St James start from £1,000 minimum spend. VIP tables start from £2,000. The intimate size means tables are limited, so booking ahead is important.",
      },
      {
        question: "Is Scotch of St James a members' club?",
        answer:
          "Scotch operates as a members' club, but we can arrange guest access for table bookings. You get the members' club experience and atmosphere without needing your own membership.",
      },
      {
        question: "What music does Scotch of St James play?",
        answer:
          "The music policy is eclectic and quality-driven — soul, funk, disco, hip-hop, and rock depending on the night and the DJ. It's curated for taste rather than commercial appeal. If you care about music, you'll appreciate what they do here.",
      },
      {
        question: "What nights is Scotch of St James open?",
        answer:
          "Scotch is open Wednesday through Saturday. Each night has its own character, with weekends being busier and midweek offering a more intimate experience.",
      },
      {
        question: "What's the history of Scotch of St James?",
        answer:
          "The original Scotch of St James opened in the 1960s and became the go-to spot for rock royalty. Jimi Hendrix was a regular, The Beatles and Rolling Stones frequented it, and it was central to London's swinging sixties scene. The modern venue honours that legacy while updating it for today.",
      },
    ],
  },
  {
    slug: "dear-darling",
    bookingSlug: "dear-darling-table-booking",
    name: "Dear Darling",
    shortName: "Dear Darling",
    tagline: "Mayfair's stylish newcomer with serious late-night energy",
    description:
      "Dear Darling is one of Mayfair's newer nightlife additions — a stylish, design-led venue that combines a strong cocktail bar with a proper late-night club atmosphere. It's attracted a well-dressed, savvy crowd since opening and has quickly established itself as a serious contender on the Mayfair circuit.",
    longDescription:
      "Dear Darling arrived on the Mayfair scene with a clear vision: create a space that's beautiful enough for early-evening cocktails but has the sound system and energy to carry a serious late-night crowd. The interior is carefully designed with warm tones, textured surfaces, and lighting that shifts as the night progresses from cocktail bar to full nightclub mode. The music policy leans towards hip-hop, RnB, and Afrobeats, with DJs who balance crowd-pleasers with deeper cuts. What sets Dear Darling apart from established Mayfair clubs is the attention to detail in the drinks programme — the cocktails are genuinely good, not an afterthought. The crowd is fashion-conscious, predominantly in their late twenties to thirties, and the atmosphere manages to be both stylish and genuinely fun. It's the kind of venue that appeals to people who've grown out of the bigger, louder Mayfair clubs but still want a proper night out. Tables are well-positioned and the venue's size keeps the energy concentrated without feeling cramped.",
    address: "Mayfair, London W1",
    area: "Mayfair",
    musicPolicy: "Hip-Hop, RnB, Afrobeats, with quality cocktail bar earlier in the evening",
    dressCode:
      "Smart and fashion-forward. Similar standards to other Mayfair clubs — collared shirts and smart shoes for men, dressed-up for women. The crowd here tends to be well put-together.",
    openingNights: ["Thursday", "Friday", "Saturday", "Sunday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table and seating",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Access to one of Mayfair's most design-conscious venues",
    ],
    knownFor: [
      "Design-led interior with real attention to detail",
      "Strong cocktail programme alongside bottle service",
      "Fashion-conscious, discerning crowd",
      "Fresh energy as one of Mayfair's newer venues",
    ],
    bestFor:
      "Groups who want a stylish, well-designed night out with good music. People who've outgrown the bigger clubs but still want energy. Date nights that transition into a late night.",
    atmosphere:
      "Stylish, warm, and energetic without being overwhelming. The design creates a premium feel that matches the Mayfair location.",
    capacity: "Approximately 250",
    faqs: [
      {
        question: "How much is a table at Dear Darling?",
        answer:
          "Tables at Dear Darling start from £1,000 minimum spend. VIP tables start from £2,000. As a newer venue, the pricing is competitive with established Mayfair clubs.",
      },
      {
        question: "What nights is Dear Darling open?",
        answer:
          "Dear Darling is open Thursday, Friday, and Saturday nights. All three nights maintain a strong atmosphere, with Saturdays being the busiest.",
      },
      {
        question: "What's the vibe at Dear Darling?",
        answer:
          "Stylish and energetic without being chaotic. The venue transitions from a sophisticated cocktail bar early in the evening to a proper nightclub later. The crowd is well-dressed and the design of the space is a step above most clubs.",
      },
      {
        question: "What's the dress code at Dear Darling?",
        answer:
          "Smart and fashion-forward. Standard Mayfair expectations — smart shoes, collared shirts for men, dressed-up for women. The crowd here tends to make an effort so you'll want to match.",
      },
      {
        question: "Is Dear Darling good for a date night?",
        answer:
          "It's one of the better Mayfair clubs for a date. The cocktail bar element early in the evening creates a more intimate, conversational atmosphere before transitioning into the club. The design and ambience are a cut above most nightclubs.",
      },
    ],
  },
  {
    slug: "beat-london",
    bookingSlug: "beat-london-table-booking",
    name: "BEAT London",
    shortName: "BEAT",
    tagline: "Underground-inspired electronic music in the heart of London",
    description:
      "BEAT London brings a genuine electronic music focus to the London club scene. If you're into house, techno, and electronic music played on a proper sound system in a venue that cares about the music first, BEAT is built for you.",
    longDescription:
      "BEAT London exists for people who care about electronic music. While most Mayfair clubs treat their DJ bookings as background to the bottle service spectacle, BEAT puts the music front and centre. The sound system is serious — designed for electronic music rather than retrofitted into a space built for conversation. The music policy spans house, tech house, and techno, with guest DJs who are booked for their ability behind the decks rather than their Instagram following. The venue design reflects this music-first approach: the dance floor is the focal point, the lighting is reactive and immersive, and the layout is built to create the best possible clubbing experience. Table service is available for those who want it, positioned to give you both comfort and proximity to the action. The crowd is a mix of genuine electronic music fans and groups looking for a different kind of London club night. If you've been to the hip-hop and RnB clubs and want something different, or if you're coming from cities with strong electronic music cultures (Berlin, Amsterdam, Ibiza), BEAT will feel like home.",
    address: "London",
    area: "Central London",
    musicPolicy: "House, Tech House, Techno, Electronic",
    dressCode:
      "Smart casual with a more relaxed approach than traditional Mayfair. Smart trainers may be accepted. No sportswear or very casual attire.",
    openingNights: ["Thursday", "Friday", "Saturday"],
    openingHours: "10:00 PM – 4:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table with dance floor views",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "A sound system and music experience built for electronic music",
    ],
    knownFor: [
      "Serious sound system designed for electronic music",
      "Quality DJ bookings focused on talent",
      "Music-first approach to nightclub design",
      "Immersive lighting and production",
    ],
    bestFor:
      "Electronic music fans who want bottle service without sacrificing music quality. Groups who are bored of hip-hop clubs and want a different energy. Anyone who's been to Ibiza or Berlin and wants that feeling in London.",
    atmosphere:
      "Immersive, music-driven, energetic. The sound system and lighting create an experience that's closer to Ibiza than Mayfair.",
    capacity: "Approximately 400",
    faqs: [
      {
        question: "How much is a table at BEAT London?",
        answer:
          "Tables at BEAT London start from £1,000 minimum spend. VIP tables start from £2,000. The pricing is competitive and you're getting a music experience that most London clubs can't match.",
      },
      {
        question: "What music does BEAT London play?",
        answer:
          "BEAT focuses on house, tech house, and techno. The music policy is electronic-focused with guest DJs booked for their talent. If you're after hip-hop or RnB, this isn't the venue — try Tabu or Cirque instead.",
      },
      {
        question: "What nights is BEAT London open?",
        answer:
          "BEAT is open Friday and Saturday nights, typically running later than most Mayfair clubs — often until 4:00 AM.",
      },
      {
        question: "What's the dress code at BEAT?",
        answer:
          "More relaxed than traditional Mayfair — smart casual is the standard. Smart trainers can work. No sportswear or flip-flops, but you don't need a suit either.",
      },
      {
        question: "How does BEAT compare to other London clubs?",
        answer:
          "BEAT is a venue built around the music first. If you care about sound quality and DJ talent over celebrity sightings, BEAT is the choice.",
      },
    ],
  },
  {
    slug: "the-box",
    bookingSlug: "the-box-london-table-booking",
    name: "The Box",
    shortName: "The Box",
    tagline: "London's most provocative and boundary-pushing nightclub",
    description:
      "The Box Soho is London's most daring nightclub — a theatrical, provocative venue where avant-garde performances, burlesque, and nightlife collide. Located in the heart of Soho, it's inspired by the famous New York original and attracts a creative, fashion-forward crowd who come for experiences they won't find anywhere else in London.",
    longDescription:
      "The Box is not for the faint-hearted. Inspired by its infamous New York counterpart, The Box London takes the concept of a nightclub and pushes it into genuinely theatrical territory. The performances are provocative, boundary-pushing, and designed to shock as much as entertain — think burlesque, cabaret, performance art, and acts that blur the line between nightclub and avant-garde theatre. The venue is intimate and deliberately decadent, with plush interiors, low lighting, and an atmosphere that feels like stepping into a private members' party from another era. The crowd is a mix of creatives, fashion industry insiders, celebrities, and people who actively seek out experiences that break the mould. Table service is available and the minimum spend reflects the exclusivity and production quality of the venue. The music policy varies but typically spans hip-hop, house, and eclectic DJ sets that complement the theatrical programme. If you want safe and predictable, The Box is the wrong choice. If you want a night that genuinely surprises you and gives you stories to tell, there's nowhere in London quite like it.",
    address: "11-12 Walker's Court, Soho, London W1F 0ED",
    area: "Soho",
    musicPolicy: "Eclectic — Hip-Hop, House, Disco, and sets that complement the live performances",
    dressCode:
      "Creative and fashionable. The Box rewards effort and individuality. Smart is the baseline but fashion-forward is encouraged. No sportswear or casual wear. The door is famously selective.",
    openingNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingHours: "10:30 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 3000,
    },
    whatsIncluded: [
      "Priority entry past The Box's famously selective door",
      "Reserved table and seating area",
      "Personal table service throughout the night",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Front-row access to London's most provocative live performances",
    ],
    knownFor: [
      "Avant-garde, boundary-pushing live performances",
      "One of London's most selective doors",
      "Celebrity and fashion industry crowd",
      "Inspired by the famous New York original",
      "Intimate, decadent atmosphere",
    ],
    bestFor:
      "Creatives, fashion-forward groups, and anyone who wants a nightclub experience that's genuinely unlike anything else. Not for the easily shocked — The Box is deliberately provocative.",
    atmosphere:
      "Decadent, provocative, theatrical. The intimate size means the performances feel intensely personal. The energy builds throughout the night from sophisticated to wild.",
    capacity: "Approximately 200",
    faqs: [
      {
        question: "How much is a table at The Box?",
        answer:
          "Tables at The Box start from £1,500 minimum spend. VIP and premium positions start from £3,000. The pricing reflects the exclusivity of the venue and the quality of the live entertainment.",
      },
      {
        question: "What kind of shows does The Box have?",
        answer:
          "The Box features provocative, avant-garde performances including burlesque, cabaret, performance art, and theatrical acts that push boundaries. The shows are designed to surprise, shock, and entertain in equal measure. They're not for everyone — and that's the point.",
      },
      {
        question: "What nights is The Box open?",
        answer:
          "The Box is open Wednesday through Saturday. Friday and Saturday are the biggest nights. Wednesday and Thursday offer a slightly more intimate experience with the same quality performances.",
      },
      {
        question: "How hard is it to get into The Box?",
        answer:
          "The Box has one of the most selective doors in London. Booking a table through us guarantees entry for your group. Walk-ins are extremely difficult, especially on weekends. The door team looks for creative, well-dressed guests who fit the venue's vibe.",
      },
      {
        question: "Is The Box London the same as The Box New York?",
        answer:
          "The Box London is inspired by the famous New York original and follows the same concept of combining provocative theatrical performances with a nightclub setting. The London venue has its own identity while honouring the spirit of the original.",
      },
    ],
  },
];

// Permanently closed clubs — kept for SEO purposes only (people still search for these)
export const closedClubs: Club[] = [
  {
    slug: "funky-buddha",
    name: "Funky Buddha",
    shortName: "Funky Buddha",
    tagline: "Open-format Mayfair club on Berkeley Street (permanently closed)",
    successorNote: "Itzel now operates at its Berkeley Street address.",
    description:
      "Funky Buddha was a Mayfair nightclub on Berkeley Street with an open-format music policy that moved between hip-hop, house, RnB and commercial anthems. Funky Buddha is now permanently closed, and Itzel now operates at its Berkeley Street address.",
    longDescription:
      "Funky Buddha carried one of the best-known names in Mayfair nightlife, and its open-format music policy made it an easy choice for mixed groups who did not want to commit to one genre all night. The venue is now permanently closed. For a similar Mayfair night with table service, Cirque Le Soir, Selene London or Dear Darling are the closest alternatives: send your date and group size on WhatsApp for a recommendation.",
    address: "15 Berkeley Street, Mayfair, London W1J 8DY",
    area: "Mayfair",
    musicPolicy: "Open format: Hip-Hop, House, RnB, Afrobeats, Commercial",
    dressCode: "Not applicable: the venue has closed.",
    openingNights: [],
    openingHours: "Permanently Closed",
    pricing: { floorTable: null, vipTable: null },
    whatsIncluded: [],
    knownFor: [
      "Well-known Mayfair club name",
      "Open-format music policy",
      "Mixed crowd",
    ],
    bestFor: "Funky Buddha is permanently closed. For a similar Mayfair night with table service, try Cirque Le Soir, Selene London or Dear Darling.",
    atmosphere: "Classic Mayfair club energy with open-format music.",
    capacity: "Approximately 300",
    faqs: [
      {
        question: "Is Funky Buddha still open?",
        answer: "No, Funky Buddha has permanently closed, and Itzel now operates at its Berkeley Street address. For a similar Mayfair night with table service, Cirque Le Soir, Selene London or Dear Darling are the closest alternatives. Message us on WhatsApp with your date and group size for a recommendation.",
      },
      {
        question: "Can I still book a table at Funky Buddha?",
        answer: "No. Funky Buddha is closed, so tables can no longer be booked there. Tables at open Mayfair clubs can be arranged instead: send your date, group size and budget on WhatsApp.",
      },
    ],
  },
  {
    slug: "luna-club-london",
    name: "Luna Club London",
    shortName: "Luna Club London",
    tagline: "Intimate Mayfair hip-hop club (permanently closed)",
    description:
      "Luna Club London was an intimate Mayfair club with a hip-hop, RnB and Afrobeats music policy. Luna Club London is now permanently closed.",
    longDescription:
      "Luna Club London was a compact Mayfair venue built around hip-hop, RnB, Afrobeats and UK rap, with tables close to the dancefloor. The venue is now permanently closed. For a similar Mayfair night with table service, Cirque Le Soir, Selene London or Dear Darling are the closest alternatives: send your date and group size on WhatsApp for a recommendation.",
    address: "Mayfair, London W1",
    area: "Mayfair",
    musicPolicy: "Hip-Hop, RnB, Afrobeats, UK Rap",
    dressCode: "Not applicable: the venue has closed.",
    openingNights: [],
    openingHours: "Permanently Closed",
    pricing: { floorTable: null, vipTable: null },
    whatsIncluded: [],
    knownFor: [
      "Intimate Mayfair setting",
      "Hip-hop and RnB music policy",
    ],
    bestFor: "Luna Club London is permanently closed. For a similar Mayfair night with table service, try Cirque Le Soir, Selene London or Dear Darling.",
    atmosphere: "Sleek and intimate, with a hip-hop focus.",
    capacity: "Approximately 250",
    faqs: [
      {
        question: "Is Luna Club London still open?",
        answer: "No, Luna Club London has permanently closed. For a similar Mayfair night with table service, Cirque Le Soir, Selene London or Dear Darling are the closest alternatives. Message us on WhatsApp with your date and group size for a recommendation.",
      },
      {
        question: "Can I still book a table at Luna Club London?",
        answer: "No. Luna Club London is closed, so tables can no longer be booked there. Tables at open Mayfair clubs can be arranged instead: send your date, group size and budget on WhatsApp.",
      },
    ],
  },
  {
    slug: "maison-close",
    name: "Maison Close",
    shortName: "Maison Close",
    tagline: "French-inspired house music club on Swallow Street (permanently closed)",
    description:
      "Maison Close was an intimate, French-inspired Mayfair club on Swallow Street with a house music policy. Maison Close is now permanently closed.",
    longDescription:
      "Maison Close stood out in a hip-hop-heavy Mayfair scene by committing to house music, in a small room with a Parisian-inspired interior. The venue is now permanently closed. For house music with table service, Maddox and BEAT London are the closest alternatives on this site; for a general Mayfair night, try Cirque Le Soir, Selene London or Dear Darling. Send your date and group size on WhatsApp for a recommendation.",
    address: "9 Swallow Street, London W1B 4DF",
    area: "Mayfair",
    musicPolicy: "House music",
    dressCode: "Not applicable: the venue has closed.",
    openingNights: [],
    openingHours: "Permanently Closed",
    pricing: { floorTable: null, vipTable: null },
    whatsIncluded: [],
    knownFor: [
      "House music programming",
      "Parisian-inspired interior",
      "Intimate room",
    ],
    bestFor: "Maison Close is permanently closed. For a similar Mayfair night with table service, try Maddox or BEAT London for house music.",
    atmosphere: "Intimate and Parisian-inspired, with a house music focus.",
    capacity: "Approximately 160",
    faqs: [
      {
        question: "Is Maison Close still open?",
        answer: "No, Maison Close has permanently closed. For a similar Mayfair night with table service, Cirque Le Soir, Selene London or Dear Darling are the closest alternatives. Message us on WhatsApp with your date and group size for a recommendation.",
      },
      {
        question: "Can I still book a table at Maison Close?",
        answer: "No. Maison Close is closed, so tables can no longer be booked there. Tables at open Mayfair clubs can be arranged instead: send your date, group size and budget on WhatsApp.",
      },
    ],
  },
  {
    slug: "libertine",
    name: "Libertine",
    shortName: "Libertine",
    tagline: "Mayfair's high-energy party headquarters (permanently closed)",
    successorNote: "Selene now operates in its place.",
    description:
      "Libertine was one of Mayfair's most high-energy nightclubs — a venue that attracted a young, international crowd who came to party hard. Located on Winsley Street just off Oxford Circus, it was known for its anything-goes atmosphere, celebrity appearances, and music that spanned hip-hop, RnB, and commercial anthems. Libertine is now permanently closed, and Selene now operates in its place.",
    longDescription:
      "Libertine carved out a reputation as the club where Mayfair's rules got bent. The atmosphere was deliberately more hedonistic than the polished, restrained vibe found at some of the area's more established venues. The interior was dark and club-focused — this wasn't a lounge that became a club, it was a nightclub from the moment you walked in. The music policy centred on hip-hop and RnB with commercial crossover, and the DJs knew how to build energy through the night. The crowd skewed young and international — models, influencers, visiting celebrities, and groups who were specifically looking for a big night rather than a sophisticated dinner-and-drinks affair. Tables were positioned around the dance floor, putting you right in the middle of the action. Libertine didn't pretend to be understated — it was loud, fun, and unapologetically a party. While Libertine has now permanently closed, the spirit of high-energy Mayfair partying lives on at venues like Cirque Le Soir, Selene London and Dear Darling.",
    address: "4 Winsley Street, London W1W 8HF",
    area: "Fitzrovia (edge of Mayfair)",
    musicPolicy: "Hip-Hop, RnB, Commercial, Afrobeats",
    dressCode: "Smart and stylish. No sportswear, trainers, or casual wear.",
    openingNights: [],
    openingHours: "Permanently Closed",
    pricing: { floorTable: 1000, vipTable: 2000 },
    whatsIncluded: [],
    knownFor: [
      "High-energy, anything-goes party atmosphere",
      "Young, international crowd",
      "Regular celebrity appearances",
    ],
    bestFor: "Libertine is permanently closed and Selene London now operates in its place. For a similar high-energy Mayfair experience, try Selene London or Cirque Le Soir.",
    atmosphere: "High-energy, hedonistic, loud. Libertine was the opposite of Mayfair's usual restraint.",
    capacity: "Approximately 300",
    faqs: [
      {
        question: "Is Libertine London still open?",
        answer: "No, Libertine London has permanently closed, and Selene now operates in its place. For a similar high-energy party atmosphere, we recommend Selene London, Cirque Le Soir or Dear Darling. Message us on WhatsApp and we'll help you find the perfect alternative.",
      },
      {
        question: "What happened to Libertine London?",
        answer: "Libertine London permanently closed its doors. The venue was known for its wild, high-energy atmosphere and celebrity crowd. Several excellent Mayfair clubs now carry that same spirit — get in touch and we'll recommend the best alternative for your group.",
      },
    ],
  },
  {
    slug: "lio-london",
    name: "Lio Club London",
    shortName: "Lio",
    tagline: "Mediterranean cabaret meets Mayfair nightlife (permanently closed)",
    description:
      "Lio Club London brought the spirit of its famous Ibiza original to the heart of London. A cabaret-style showclub combining Mediterranean glamour, live performances, world-class dining, and late-night clubbing. Lio London is now permanently closed.",
    longDescription:
      "Lio was the London outpost of the famous Ibiza venue, and it brought Mediterranean energy to Mayfair with serious ambition. The concept was dinner-and-show-and-club rolled into one spectacular evening. You started with a Mediterranean fine dining experience, then live cabaret performances began — dancers, acrobats, vocalists, and theatrical acts performed throughout the venue. As the night deepened, the space transformed into a full nightclub. The production quality was exceptional and the venue was lavishly designed with Mediterranean influences. While Lio London has now permanently closed, similar theatrical dining-and-nightlife experiences can be found at Cirque Le Soir and London Reign.",
    address: "Mayfair, London W1",
    area: "Mayfair",
    musicPolicy: "Mixed — Mediterranean, House, Commercial, Hip-Hop",
    dressCode: "Smart and glamorous. Jacket or blazer encouraged for men.",
    openingNights: [],
    openingHours: "Permanently Closed",
    pricing: { floorTable: 1500, vipTable: 3000 },
    whatsIncluded: [],
    knownFor: [
      "Mediterranean cabaret performances",
      "Dinner-show-club concept",
      "Offshoot of the iconic Lio Ibiza",
    ],
    bestFor: "Lio London is permanently closed. For theatrical nightlife with performances, try Cirque Le Soir or London Reign.",
    atmosphere: "Glamorous, theatrical, Mediterranean.",
    capacity: "Approximately 350",
    faqs: [
      {
        question: "Is Lio London still open?",
        answer: "No, Lio London has permanently closed. For a similar dinner-show-club experience with live performances, we recommend Cirque Le Soir for theatrical entertainment or London Reign for spectacular shows. Message us on WhatsApp for help finding the right venue.",
      },
      {
        question: "What happened to Lio London?",
        answer: "Lio Club London has permanently closed. The venue was the London version of the famous Lio Ibiza, known for combining Mediterranean dining, cabaret performances, and late-night clubbing. For similar experiences in London, contact us and we'll recommend alternatives.",
      },
    ],
  },
];

// All clubs combined (for SEO pages that need closed clubs too)
export const allClubs: Club[] = [...clubs, ...closedClubs];

export function getClubBySlug(slug: string): Club | undefined {
  return allClubs.find((c) => c.slug === slug);
}

export function getOpenClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}

export function isClosedClub(slug: string): boolean {
  return closedClubs.some((c) => c.slug === slug);
}

/** "£1,000", or "On request" when no confirmed figure exists. */
export function formatPrice(value: number | null): string {
  return value === null ? "On request" : `£${value.toLocaleString()}`;
}

/** Sort key that puts price-on-request venues after priced ones. */
export function priceSortValue(value: number | null): number {
  return value === null ? Number.POSITIVE_INFINITY : value;
}

/** "From £1,000" (label configurable), or `onRequest` when no figure exists. */
export function fromPrice(
  value: number | null,
  label = "From",
  onRequest = "Price on request"
): string {
  return value === null ? onRequest : `${label} £${value.toLocaleString()}`;
}

/**
 * Opening nights for display. Falls back to openingHours ("Confirmed on
 * enquiry", "Permanently Closed") when no nights are listed.
 */
export function formatNights(
  club: Pick<Club, "openingNights" | "openingHours">,
  separator = ", ",
  short = false
): string {
  if (club.openingNights.length === 0) return club.openingHours;
  return club.openingNights
    .map((n) => (short ? n.slice(0, 3) : n))
    .join(separator);
}
