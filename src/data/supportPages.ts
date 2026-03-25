import { clubs } from "./clubs";

export type SupportPageType =
  | "table-prices"
  | "vip-tables"
  | "minimum-spend"
  | "guestlist-vs-table-booking"
  | "how-to-get-in";

export interface SupportPageData {
  slug: string;
  clubSlug: string;
  type: SupportPageType;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
}

interface ClubInfo {
  slug: string;
  name: string;
  shortName: string;
  area: string;
  floorPrice: number;
  vipPrice: number;
  music: string;
  dressCode: string;
  nights: string;
  hours: string;
  bookingSlug: string;
}

function getClubInfo(clubSlug: string): ClubInfo | null {
  const c = clubs.find((cl) => cl.slug === clubSlug);
  if (!c) return null;
  return {
    slug: c.slug,
    name: c.name,
    shortName: c.shortName,
    area: c.area,
    floorPrice: c.pricing.floorTable,
    vipPrice: c.pricing.vipTable,
    music: c.musicPolicy,
    dressCode: c.dressCode,
    nights: c.openingNights.join(", "),
    hours: c.openingHours,
    bookingSlug: c.bookingSlug || "",
  };
}

function generateTablePrices(c: ClubInfo): Omit<SupportPageData, "slug" | "clubSlug" | "type"> {
  return {
    metaTitle: `${c.name} Table Prices 2026 | Floor & VIP Tables from £${c.floorPrice.toLocaleString()}`,
    metaDescription: `${c.name} table prices: floor tables from £${c.floorPrice.toLocaleString()}, VIP from £${c.vipPrice.toLocaleString()}. Full price breakdown by night, group size, and table position. Book via WhatsApp.`,
    h1: `${c.name} Table Prices — How Much Does a Table Cost?`,
    intro: `If you're searching for ${c.name} table prices, here are the real numbers. Floor tables start from £${c.floorPrice.toLocaleString()} minimum spend and VIP tables from £${c.vipPrice.toLocaleString()}. These are starting minimums — prices vary by night of the week, group size, table position, and special events. Below is a complete breakdown so you know exactly what to budget.`,
    sections: [
      {
        heading: `${c.name} Table Price Breakdown`,
        content: `Floor tables at ${c.name} start from £${c.floorPrice.toLocaleString()} minimum spend. These are standard tables on the main floor with full service — a personal waitress, premium spirits or champagne, mixers, ice, and garnishes all included. VIP tables start from £${c.vipPrice.toLocaleString()} and give you premium positioning, better sightlines, and enhanced service.\n\nThe minimum spend is not an entry fee or cover charge. It's the amount you spend on drinks at your table. If your minimum is £${c.floorPrice.toLocaleString()}, you order £${c.floorPrice.toLocaleString()} worth of bottles — spirits, champagne, or a combination. Your waitress helps you choose within your budget.\n\nPer person, a £${c.floorPrice.toLocaleString()} table with 8 guests works out to £${Math.round(c.floorPrice / 8)} each. That includes your drinks, table, service, and priority entry — often cheaper than buying individual drinks at the bar all night.`,
      },
      {
        heading: "How Prices Vary by Night",
        content: `${c.name} is open ${c.nights}. Saturday is the most expensive night with the highest minimums and strongest demand. Friday is a close second. Midweek nights (${c.nights.includes("Thursday") ? "Thursday" : c.nights.includes("Wednesday") ? "Wednesday" : "weeknights"}) typically have lower minimums and are excellent value if your group is flexible on timing.\n\nPrices also vary for special events, bank holidays, and New Year's Eve. For the most accurate pricing on your specific date, message us on WhatsApp and we'll confirm the exact minimum for your group.`,
      },
      {
        heading: "What's Included in the Price",
        content: `Every table booking at ${c.name} includes: priority entry for your entire group (skip the queue), a reserved table and seating area, a personal waitress assigned to your table for the night, your choice of premium spirits or champagne, and all mixers, ice, and garnishes.\n\nYou are not paying a separate entry fee on top of the minimum spend. The minimum IS your spend for the night — it covers everything. The only additional cost would be if you order beyond your minimum, which is entirely your choice.`,
      },
      {
        heading: "Is a VIP Table Worth the Upgrade?",
        content: `VIP tables at ${c.name} start from £${c.vipPrice.toLocaleString()} — a step up from the £${c.floorPrice.toLocaleString()} floor tables. The upgrade gets you a premium position in the venue, typically with better views, more space, and closer proximity to the DJ or stage.\n\nFor birthdays, celebrations, or corporate groups, the VIP upgrade is usually worth it. The positioning makes your group feel like the centre of the evening. For a casual night with friends, the standard floor table delivers a fantastic experience at a lower price point.`,
      },
    ],
    faqs: [
      {
        question: `How much is a table at ${c.name}?`,
        answer: `Floor tables at ${c.name} start from £${c.floorPrice.toLocaleString()} minimum spend. VIP tables start from £${c.vipPrice.toLocaleString()}. Prices vary by night — Saturdays are the most expensive, midweek nights offer the best value.`,
      },
      {
        question: `What does the minimum spend include at ${c.name}?`,
        answer: `The minimum spend covers your drinks (premium spirits, champagne, or both), a reserved table and seating, a personal waitress, priority entry for your group, and all mixers, ice, and garnishes. There's no additional entry fee.`,
      },
      {
        question: `How much is a table at ${c.name} per person?`,
        answer: `With a £${c.floorPrice.toLocaleString()} floor table and 8 guests, it works out to £${Math.round(c.floorPrice / 8)} per person. With 6 guests: £${Math.round(c.floorPrice / 6)}. With 10: £${Math.round(c.floorPrice / 10)}. Larger groups get better per-person value.`,
      },
      {
        question: `Are ${c.name} table prices cheaper on weeknights?`,
        answer: `Yes. Midweek nights typically have lower minimum spends than Friday and Saturday. If your group is flexible, booking on a ${c.nights.includes("Thursday") ? "Thursday" : "weeknight"} can save you significantly while still getting a great atmosphere.`,
      },
      {
        question: `Do ${c.name} table prices include entry?`,
        answer: `Yes. When you book a table, priority entry for your entire group is included. You skip the queue and walk straight in. There's no separate cover charge or entry fee.`,
      },
    ],
  };
}

function generateVipTables(c: ClubInfo): Omit<SupportPageData, "slug" | "clubSlug" | "type"> {
  return {
    metaTitle: `${c.name} VIP Tables | Premium Bottle Service from £${c.vipPrice.toLocaleString()}`,
    metaDescription: `Book VIP tables at ${c.name} from £${c.vipPrice.toLocaleString()}. Premium positions, enhanced service, best views. Instant WhatsApp booking, no fees.`,
    h1: `${c.name} VIP Tables — Premium Bottle Service Experience`,
    intro: `VIP tables at ${c.name} are the premium tier of the bottle service experience. Starting from £${c.vipPrice.toLocaleString()} minimum spend, VIP gets you the best table positions in the venue, enhanced personal service, and the kind of night that makes standard tables look like the cheap seats. Here's exactly what you get and whether the upgrade is worth it for your group.`,
    sections: [
      {
        heading: `What Makes ${c.name} VIP Tables Different`,
        content: `The difference between a standard floor table and a VIP table at ${c.name} comes down to three things: position, space, and service. VIP tables are in prime locations — better sightlines, closer to the energy, and positioned where you want to be seen. You get more space for your group, which matters when you're spending £${c.vipPrice.toLocaleString()}+ and want to enjoy it.\n\nThe service level steps up too. Your waitress is more attentive, bottle presentations are more theatrical, and the overall experience is elevated. If you're celebrating something, the VIP treatment makes it feel like a genuine event rather than just a night at a club.`,
      },
      {
        heading: "VIP vs Standard Floor Tables",
        content: `Standard floor tables at ${c.name} start from £${c.floorPrice.toLocaleString()} and deliver an excellent experience. You get a reserved table, full bottle service, and priority entry. For a regular night out with friends, floor tables are perfect.\n\nVIP tables start from £${c.vipPrice.toLocaleString()} — the premium gets you better positioning, more space, and an elevated service experience. For birthdays, anniversaries, corporate entertaining, or any night where you want the best, VIP is the move.\n\nThe per-person cost difference is smaller than you'd think. With 8 guests, a floor table is £${Math.round(c.floorPrice / 8)} each. VIP is £${Math.round(c.vipPrice / 8)} each. For an extra £${Math.round(c.vipPrice / 8) - Math.round(c.floorPrice / 8)} per person, the upgrade is significant.`,
      },
      {
        heading: "Best Nights for VIP Tables",
        content: `${c.name} operates ${c.nights}. Saturday night VIP tables are the most sought-after and command the highest minimums. If budget is a factor, Friday VIP tables offer a similar atmosphere at a slightly lower price point.\n\n${c.nights.includes("Thursday") ? "Thursday VIP tables are the smart choice for groups who want the premium experience at the most competitive price. The atmosphere is still strong but minimums are lower." : "Midweek nights offer VIP at lower minimums — perfect for groups who want the premium experience without peak pricing."}`,
      },
      {
        heading: "Who Should Book VIP",
        content: `VIP tables at ${c.name} are ideal for: birthday celebrations where you want the group to feel special, corporate entertaining where impressions matter, date nights where you want privacy and premium positioning, groups of 6+ who will appreciate the extra space, and anyone who's done standard tables before and wants to level up.\n\nIf you're booking for a casual night with a small group, the standard floor table is excellent value. Save VIP for the occasions that deserve it.`,
      },
    ],
    faqs: [
      {
        question: `How much is a VIP table at ${c.name}?`,
        answer: `VIP tables at ${c.name} start from £${c.vipPrice.toLocaleString()} minimum spend. Pricing varies by night and table position. Saturday VIP commands the highest minimums.`,
      },
      {
        question: `What's the difference between VIP and standard tables at ${c.name}?`,
        answer: `VIP tables have premium positioning, more space, and enhanced service. Standard floor tables start from £${c.floorPrice.toLocaleString()} and still include full bottle service. VIP starts from £${c.vipPrice.toLocaleString()} for the upgraded experience.`,
      },
      {
        question: `Is VIP worth it at ${c.name}?`,
        answer: `For birthdays, celebrations, and corporate nights — absolutely. The premium positioning and service make a noticeable difference. For a casual night out, standard tables deliver excellent value. The per-person upgrade cost is typically £${Math.round(c.vipPrice / 8) - Math.round(c.floorPrice / 8)} extra with 8 guests.`,
      },
      {
        question: `How do I book a VIP table at ${c.name}?`,
        answer: `Message us on WhatsApp with your preferred date, group size, and budget. We'll confirm VIP availability and secure the best position for your group — usually within minutes.`,
      },
      {
        question: `Can I request a specific VIP table position at ${c.name}?`,
        answer: `Yes. Tell us your preferences when you message us and we'll do our best to secure your preferred position. Early booking gives you the best selection — popular VIP spots on Saturdays sell out fast.`,
      },
    ],
  };
}

function generateMinimumSpend(c: ClubInfo): Omit<SupportPageData, "slug" | "clubSlug" | "type"> {
  return {
    metaTitle: `${c.name} Minimum Spend Explained | From £${c.floorPrice.toLocaleString()} Per Table`,
    metaDescription: `${c.name} minimum spend starts at £${c.floorPrice.toLocaleString()} for floor tables, £${c.vipPrice.toLocaleString()} for VIP. Learn exactly what minimum spend means and what it covers.`,
    h1: `${c.name} Minimum Spend — What It Means & What You Pay`,
    intro: `The minimum spend at ${c.name} starts from £${c.floorPrice.toLocaleString()} for a standard floor table. This is the single most misunderstood part of London nightclub pricing. It is not an entry fee, not a cover charge, and not money you lose. Here's exactly how it works so you can budget properly.`,
    sections: [
      {
        heading: "What Minimum Spend Actually Means",
        content: `The minimum spend is the amount you spend on drinks at your table. If your minimum is £${c.floorPrice.toLocaleString()}, you order £${c.floorPrice.toLocaleString()} worth of bottles — premium spirits like Grey Goose or Belvedere, champagne like Moët or Veuve Clicquot, or a mix of both.\n\nYou are buying drinks. The minimum is a commitment to spend at least that amount. Your personal waitress helps you choose bottles that meet your minimum without going significantly over. Most groups hit their minimum naturally over the course of the night.\n\nMixers (tonic, Coke, Red Bull, juices), ice, and garnishes are all included in your minimum spend. You don't pay extra for them.`,
      },
      {
        heading: `${c.name} Minimum Spend by Table Type`,
        content: `Floor tables: from £${c.floorPrice.toLocaleString()} minimum spend. Standard tables on the main floor with full service.\n\nVIP tables: from £${c.vipPrice.toLocaleString()} minimum spend. Premium positions with enhanced service and better views.\n\nPrices are starting minimums and vary by night. Saturdays have the highest minimums, midweek nights are the most affordable. Special events and bank holidays may have elevated pricing.`,
      },
      {
        heading: "Cost Per Person Breakdown",
        content: `The minimum spend is per table, not per person. Split between your group, the per-person cost drops significantly:\n\nOn a £${c.floorPrice.toLocaleString()} floor table: 4 guests = £${Math.round(c.floorPrice / 4)} each, 6 guests = £${Math.round(c.floorPrice / 6)} each, 8 guests = £${Math.round(c.floorPrice / 8)} each, 10 guests = £${Math.round(c.floorPrice / 10)} each.\n\nFor context, buying drinks individually at a Mayfair bar costs £15–20 per drink. Over a full night (8–10 drinks), you'd spend £120–200 per person standing at the bar. A table at £${Math.round(c.floorPrice / 8)} per person (group of 8) gives you a reserved table, personal service, priority entry, and no queuing — for roughly the same money.`,
      },
      {
        heading: "What Happens If You Don't Meet the Minimum?",
        content: `If your group doesn't reach the minimum spend through drinks alone, you'll be asked to order additional bottles to make up the difference. This rarely happens with a properly sized group — your waitress guides you throughout the night.\n\nTo avoid any issues, make sure your group size matches your minimum. A group of 4 on a £${c.floorPrice.toLocaleString()} minimum should be comfortable spending £${Math.round(c.floorPrice / 4)} each on drinks. If that feels like a stretch, book a midweek night with lower minimums or bring a larger group to reduce the per-person cost.`,
      },
    ],
    faqs: [
      {
        question: `What is the minimum spend at ${c.name}?`,
        answer: `The minimum spend starts from £${c.floorPrice.toLocaleString()} for floor tables and £${c.vipPrice.toLocaleString()} for VIP tables. This is the amount you spend on drinks at your table, not an entry fee.`,
      },
      {
        question: "Is the minimum spend an entry fee?",
        answer: `No. The minimum spend is the amount you spend on drinks (bottles of spirits or champagne). Priority entry is included with your table booking at no extra cost. There's no separate cover charge.`,
      },
      {
        question: `What's included in the minimum spend at ${c.name}?`,
        answer: `Your minimum spend covers premium bottles (spirits or champagne), a reserved table and seating, personal table service, priority entry, and all mixers, ice, and garnishes. Everything except the bottles themselves is free.`,
      },
      {
        question: "What if we don't reach the minimum spend?",
        answer: `Your waitress will help you manage your spend throughout the night. If you're running short, she'll suggest additional bottles. With a properly sized group, reaching the minimum happens naturally over the course of the evening.`,
      },
      {
        question: `Can I share the minimum spend at ${c.name} across my group?`,
        answer: `Yes — the minimum is per table, not per person. Your entire group contributes to the spend. With 8 guests on a £${c.floorPrice.toLocaleString()} table, that's just £${Math.round(c.floorPrice / 8)} each.`,
      },
    ],
  };
}

function generateGuestlistVsBooking(c: ClubInfo): Omit<SupportPageData, "slug" | "clubSlug" | "type"> {
  return {
    metaTitle: `${c.name}: Guestlist vs Table Booking — Which Should You Choose?`,
    metaDescription: `Should you get on the guestlist or book a table at ${c.name}? Compare costs, entry, experience, and value. Tables from £${c.floorPrice.toLocaleString()}.`,
    h1: `${c.name} — Guestlist vs Table Booking: Which Is Right for You?`,
    intro: `Deciding between guestlist and a table booking at ${c.name} is one of the most common questions we get. The short answer: guestlist gets you through the door (sometimes), table booking gets you through the door and into a seat with personal service. Here's the full comparison so you can make the right call for your group.`,
    sections: [
      {
        heading: "What Guestlist Actually Gets You",
        content: `Being on the guestlist at ${c.name} means your name is on a list at the door. In theory, this gives you priority entry or reduced entry fees. In practice, guestlist at Mayfair clubs is unreliable.\n\nGuestlist does not guarantee entry. Door staff still make the final call based on appearance, group composition, and how busy the venue is. A full guestlist on a Saturday night doesn't help if the club is at capacity. You could queue for 30 minutes and still get turned away.\n\nGuestlist also doesn't give you anywhere to sit, no bottle service, no personal waitress, and no reserved space. You're competing for bar service with everyone else.`,
      },
      {
        heading: "What Table Booking Gets You",
        content: `A table booking at ${c.name} starting from £${c.floorPrice.toLocaleString()} guarantees: priority entry for your entire group (skip the queue), a reserved table and seating area, a personal waitress for the night, premium spirits or champagne, and all mixers included.\n\nThe key difference is certainty. With a table booking, you know you're getting in, you know where you're sitting, and you know what your night costs. There's no uncertainty, no queuing, and no risk of being turned away.`,
      },
      {
        heading: "Cost Comparison",
        content: `Guestlist at ${c.name}: typically free or a small cover charge (£10–30). But you'll spend £15–20 per drink at the bar. Over a full night (6–10 drinks), that's £90–200 per person with no table, no priority entry, and no guaranteed admission.\n\nTable booking: from £${Math.round(c.floorPrice / 8)} per person (group of 8 on a £${c.floorPrice.toLocaleString()} table). You get a table, full bottle service, priority entry, and a personal waitress. For groups of 6+, the per-person cost of bottle service is often comparable to — or cheaper than — buying drinks at the bar all night.\n\nThe maths clearly favours table booking for any group of 6 or more.`,
      },
      {
        heading: "When Guestlist Makes Sense",
        content: `Guestlist is suitable if: you're going solo or as a pair on a quiet weeknight, you have a connection who can genuinely guarantee entry (not just a list), your budget is genuinely under £${Math.round(c.floorPrice / 8)} per person, or you're happy to stand and queue.\n\nFor any group of 4+, any celebration, any weekend night, or any time where certainty matters — book a table. The per-person cost difference is minimal and the experience gap is enormous.`,
      },
    ],
    faqs: [
      {
        question: `Should I get on the guestlist or book a table at ${c.name}?`,
        answer: `For groups of 4+, celebrations, or weekend nights — book a table. The per-person cost is comparable to buying bar drinks all night, but you get a reserved space, bottle service, and guaranteed entry. Guestlist only makes sense for 1-2 people on a quiet weeknight.`,
      },
      {
        question: `Does ${c.name} guestlist guarantee entry?`,
        answer: `No. Guestlist puts your name on a list but the door team makes the final call. On busy nights (Friday/Saturday), guestlist does not guarantee entry. Table bookings guarantee entry for your entire group.`,
      },
      {
        question: `Is a table at ${c.name} worth the money vs guestlist?`,
        answer: `Yes, for groups. With 8 guests, a table at ${c.name} works out to £${Math.round(c.floorPrice / 8)} per person — similar to what you'd spend on bar drinks without a table. You get guaranteed entry, seating, personal service, and a premium experience.`,
      },
      {
        question: `How much cheaper is guestlist than a table at ${c.name}?`,
        answer: `Guestlist entry might be free or £10-30, but bar drinks cost £15-20 each. Over a full night you'll spend £90-200 per person. A table at £${Math.round(c.floorPrice / 8)} per person (group of 8) often works out similar or cheaper, with far more included.`,
      },
    ],
  };
}

function generateHowToGetIn(c: ClubInfo): Omit<SupportPageData, "slug" | "clubSlug" | "type"> {
  return {
    metaTitle: `How to Get Into ${c.name} | Entry Guide, Door Policy & Tips`,
    metaDescription: `Everything you need to know about getting into ${c.name}: door policy, dress code, best times to arrive, and how to guarantee entry with a table booking.`,
    h1: `How to Get Into ${c.name} — Entry Guide & Door Policy`,
    intro: `Getting into ${c.name} isn't as simple as showing up and joining the queue — especially on weekends. The door is selective, the dress code is enforced, and without a plan, you risk being turned away. Here's everything you need to know to guarantee entry and have the best possible experience.`,
    sections: [
      {
        heading: "The Guaranteed Way In",
        content: `The simplest way to guarantee entry at ${c.name} is to book a table. When you have a table booking, your name is confirmed with the venue. You arrive, give your name at the door, and walk straight in — no queue, no uncertainty.\n\nTable bookings start from £${c.floorPrice.toLocaleString()} minimum spend. This includes your drinks, a reserved table, personal service, and priority entry for your entire group. If entry matters (and if you're reading this, it does), a table booking removes all risk.`,
      },
      {
        heading: `${c.name} Dress Code`,
        content: `${c.dressCode}\n\nThe door team enforces this strictly, especially on Friday and Saturday. If someone in your group doesn't meet the standard, the whole group may be turned away. Check with everyone before you arrive. When in doubt, overdress — you can always relax, but you can't fix being underdressed at the door.`,
      },
      {
        heading: "Best Time to Arrive",
        content: `${c.name} opens at ${c.hours.split("–")[0]?.trim() || "10:30 PM"}. For the smoothest entry, arrive within the first hour of opening. The queue builds after midnight and the door becomes more selective as the venue fills up.\n\nWith a table booking, arrival time is more flexible since your entry is guaranteed. But arriving by 11:30 PM means you get the most out of your night and your table is ready and waiting.`,
      },
      {
        heading: "Common Entry Mistakes",
        content: `The most common reasons people get turned away from ${c.name}:\n\n1. Wrong shoes — trainers, casual sneakers, or anything that doesn't look smart. This is the number one reason for rejection.\n\n2. Large groups of one gender — a group of 8 men with no women will struggle at any Mayfair club. Mixed groups get in more easily.\n\n3. Arriving too late and too drunk — if you've clearly been drinking heavily before arriving, the door team will turn you away regardless of your booking or outfit.\n\n4. No booking and no guestlist — walking up to the door on a Saturday night with no reservation and hoping for the best. It rarely works.\n\n5. Arguing with the door staff — if they say no, accept it. Being confrontational guarantees you won't get in.`,
      },
      {
        heading: "Entry Without a Table Booking",
        content: `Without a table booking, entry at ${c.name} depends on: the night (weeknights are easier), your appearance (dress code must be perfect), group composition (mixed groups preferred), time of arrival (earlier is better), and how busy the venue is.\n\nGuestlist can help but doesn't guarantee entry. The only certainty is a confirmed table booking. For groups of 4+, the per-person cost of a table (from £${Math.round(c.floorPrice / 8)} with 8 guests) is worth it for the guaranteed entry alone, before you factor in the table, service, and drinks.`,
      },
    ],
    faqs: [
      {
        question: `How do I get into ${c.name}?`,
        answer: `The guaranteed way is to book a table (from £${c.floorPrice.toLocaleString()}). Your name is confirmed with the venue and you walk straight in. Without a booking, you need to meet the dress code, arrive early, and hope the venue isn't at capacity.`,
      },
      {
        question: `What is the dress code at ${c.name}?`,
        answer: `Smart and stylish. Men need smart shoes and a collared shirt minimum. Women should dress for a Mayfair night out. No sportswear, casual trainers, or shorts. The door enforces this strictly.`,
      },
      {
        question: `What time should I arrive at ${c.name}?`,
        answer: `${c.name} opens at ${c.hours.split("–")[0]?.trim() || "10:30 PM"}. For the smoothest entry, arrive within the first hour. After midnight, the queue builds and the door becomes more selective. Table bookings have more flexibility.`,
      },
      {
        question: `Can I get into ${c.name} without a booking?`,
        answer: `It's possible on quiet nights but risky on weekends. Without a booking, you're relying on the door team's discretion. For any group or any weekend night, a table booking is strongly recommended.`,
      },
      {
        question: `Do I need ID to get into ${c.name}?`,
        answer: `Yes. Bring valid photo ID (passport or driving licence). The door team checks ID, especially if you look under 25. Expired or damaged ID may be rejected.`,
      },
    ],
  };
}

const typeSlugMap: Record<SupportPageType, (clubSlug: string) => string> = {
  "table-prices": (s) => {
    const c = clubs.find((cl) => cl.slug === s);
    const prefix = s === "maddox" ? "maddox-club" : s === "the-box" ? "the-box-london" : s === "london-reign" ? "reign-london" : s;
    return `${prefix}-table-prices`;
  },
  "vip-tables": (s) => {
    const c = clubs.find((cl) => cl.slug === s);
    const prefix = s === "maddox" ? "maddox-club" : s === "the-box" ? "the-box-london" : s === "london-reign" ? "reign-london" : s;
    return `${prefix}-vip-tables`;
  },
  "minimum-spend": (s) => {
    const prefix = s === "maddox" ? "maddox-club" : s === "the-box" ? "the-box-london" : s === "london-reign" ? "reign-london" : s;
    return `${prefix}-minimum-spend`;
  },
  "guestlist-vs-table-booking": (s) => {
    const prefix = s === "maddox" ? "maddox-club" : s === "the-box" ? "the-box-london" : s === "london-reign" ? "reign-london" : s;
    return `${prefix}-guestlist-vs-table-booking`;
  },
  "how-to-get-in": (s) => {
    const prefix = s === "maddox" ? "maddox-club" : s === "the-box" ? "the-box-london" : s === "london-reign" ? "reign-london" : s;
    return `${prefix}-how-to-get-in`;
  },
};

const generators: Record<SupportPageType, (c: ClubInfo) => Omit<SupportPageData, "slug" | "clubSlug" | "type">> = {
  "table-prices": generateTablePrices,
  "vip-tables": generateVipTables,
  "minimum-spend": generateMinimumSpend,
  "guestlist-vs-table-booking": generateGuestlistVsBooking,
  "how-to-get-in": generateHowToGetIn,
};

const pageTypes: SupportPageType[] = [
  "table-prices",
  "vip-tables",
  "minimum-spend",
  "guestlist-vs-table-booking",
  "how-to-get-in",
];

const allClubSlugs = clubs.map((c) => c.slug);

export const supportPages: SupportPageData[] = allClubSlugs.flatMap((clubSlug) => {
  const info = getClubInfo(clubSlug);
  if (!info) return [];
  return pageTypes.map((type) => {
    const data = generators[type](info);
    return {
      slug: typeSlugMap[type](clubSlug),
      clubSlug,
      type,
      ...data,
    };
  });
});

export function getSupportPageBySlug(slug: string): SupportPageData | undefined {
  return supportPages.find((p) => p.slug === slug);
}

export function getSupportPagesForClub(clubSlug: string): SupportPageData[] {
  return supportPages.filter((p) => p.clubSlug === clubSlug);
}
