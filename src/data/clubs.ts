export interface ClubPricing {
  floorTable: number;
  vipTable: number;
}

export interface Club {
  slug: string;
  name: string;
  shortName: string;
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

export const WHATSAPP_NUMBER = "447880662708";

export function getWhatsAppLink(clubName?: string): string {
  let message: string;
  if (clubName) {
    message = `Hi, I'd like to book a table at ${clubName}. Here are my details:\n\nDate:\nGroup size:\nOccasion:\nAny preferences:`;
  } else {
    message = `Hi, I found you on londonbottleservice.com and I'd like to book a table. Here are my details:\n\nClub:\nDate:\nGroup size:\nOccasion:\nAny preferences:`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const clubs: Club[] = [
  {
    slug: "cirque-le-soir",
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
    openingNights: ["Wednesday", "Friday", "Saturday"],
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
    openingNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingHours: "10:30 PM – 3:30 AM",
    pricing: {
      floorTable: 1500,
      vipTable: 3000,
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
    name: "Cuckoo Club",
    shortName: "Cuckoo",
    tagline: "Two floors of Mayfair nightlife done right",
    description:
      "The Cuckoo Club on Swallow Street has been a Mayfair staple for years — a two-floor venue that manages to feel both polished and fun without taking itself too seriously. The ground floor leans towards house music while the basement goes harder with hip-hop and RnB. It's one of the most versatile clubs in the area.",
    longDescription:
      "Cuckoo Club has the kind of longevity that most Mayfair clubs would kill for, and that's because it gets the formula right. The ground floor is a stylish lounge-bar that transitions into a club as the night goes on, with deep house and tech house setting the tone. Head downstairs and you're in a different world — the basement is a dedicated hip-hop and RnB room where the energy is higher and the music is harder. This two-floor setup is what makes Cuckoo special. You're not locked into one vibe for the whole night. If your group has mixed music tastes, this is the answer. The crowd is a good mix of Mayfair regulars, young professionals, and international visitors. It's less celebrity-focused than Tape or Cirque but the atmosphere is consistently strong, especially on Fridays and Saturdays. Tables are available on both floors, with basement tables being the most popular for hip-hop fans.",
    address: "58 Swallow Street, Mayfair, London W1B 4DG",
    area: "Mayfair",
    musicPolicy:
      "Ground floor: House, Deep House, Tech House. Basement: Hip-Hop, RnB, Afrobeats",
    dressCode:
      "Smart casual to smart. Collared shirts for men, no trainers or sportswear. Women should dress for a Mayfair night out. The door is firm but fair — make an effort and you'll be fine.",
    openingNights: ["Tuesday", "Thursday", "Friday", "Saturday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table and seating area on your chosen floor",
      "Personal table service all night",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Access to both floors of the venue",
    ],
    knownFor: [
      "Two distinct floors with different music policies",
      "Consistent Mayfair atmosphere without pretension",
      "Strong Thursday and Friday nights",
      "One of the longest-running Mayfair clubs",
    ],
    bestFor:
      "Groups with mixed music tastes who don't want to commit to one genre all night. Also great for a solid Mayfair night without the sky-high price tags of the ultra-exclusive venues.",
    atmosphere:
      "Stylish but approachable. The two-floor layout keeps things interesting — upstairs is sophisticated, downstairs is where things get rowdy.",
    capacity: "Approximately 350 across both floors",
    faqs: [
      {
        question: "How much is a table at Cuckoo Club?",
        answer:
          "Tables at Cuckoo Club start from £1,000 minimum spend. VIP tables and premium positions start from £2,000. Prices can vary depending on the night of the week and any special events.",
      },
      {
        question: "Does Cuckoo Club play hip-hop?",
        answer:
          "Yes — the basement at Cuckoo Club is dedicated to hip-hop, RnB, and Afrobeats. If hip-hop is what you're after, request a basement table when you book. The ground floor plays house music.",
      },
      {
        question: "What nights is Cuckoo Club open?",
        answer:
          "Cuckoo Club is open Tuesday, Thursday, Friday, and Saturday. Thursday and Friday are particularly popular. Saturdays are the biggest night with the highest minimum spends.",
      },
      {
        question: "What's the dress code at Cuckoo Club?",
        answer:
          "Smart casual to smart. Men should wear collared shirts and smart shoes. Women should dress for a night in Mayfair. The dress code is enforced but isn't as strict as some of the more exclusive members' clubs.",
      },
      {
        question: "Is Cuckoo Club good for birthdays?",
        answer:
          "Cuckoo is a great birthday venue, especially if your group is split between house music and hip-hop fans — the two-floor layout means everyone's happy. We can arrange cakes, sparklers, and birthday packages.",
      },
    ],
  },
  {
    slug: "maddox",
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
    name: "Tabu London",
    shortName: "Tabu",
    tagline: "Japanese-inspired underground clubbing in Mayfair",
    description:
      "Tabu London brings a Japanese underground aesthetic to Mayfair with a dark, moody interior, hip-hop-heavy music policy, and an atmosphere that feels like Tokyo's late-night scene transplanted into central London. It's intimate, stylish, and different from the typical Mayfair offering.",
    longDescription:
      "Tabu is what happens when someone takes the best elements of Tokyo's underground nightlife and drops them into Mayfair. The venue is deliberately dark with Japanese-inspired design touches — think low lighting, rich textures, and an aesthetic that's more Shibuya than Swallow Street. The music policy is firmly hip-hop and RnB, with DJs who lean into the harder, more underground end of the spectrum rather than the commercial top-40 approach. The crowd tends to be younger, fashion-forward, and more diverse than some of the older Mayfair establishments. It's attracted a loyal following since opening and has quickly become one of the go-to spots for anyone who wants Mayfair bottle service without the traditional Mayfair stuffiness. The venue is relatively compact which keeps the atmosphere intense and the energy high. If you've been to the big Mayfair clubs and found them a bit safe or predictable, Tabu is designed to be the antidote.",
    address: "35 Albemarle Street, Mayfair, London W1S 4JE",
    area: "Mayfair",
    musicPolicy: "Hip-Hop, RnB, UK Rap, Drill, Afrobeats",
    dressCode:
      "Smart and fashion-forward. Tabu is more relaxed than traditional Mayfair clubs but still expects effort. Smart trainers may be accepted depending on the overall outfit. No sportswear or casual wear.",
    openingNights: ["Thursday", "Friday", "Saturday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table in an intimate setting",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "An atmosphere you won't find anywhere else in Mayfair",
    ],
    knownFor: [
      "Japanese underground-inspired interior",
      "Strong hip-hop and RnB music policy",
      "Fashion-forward crowd",
      "Dark, moody atmosphere",
    ],
    bestFor:
      "Hip-hop fans who want bottle service in Mayfair without the traditional Mayfair vibe. Groups who value aesthetics, good music, and an atmosphere that's more underground than upscale.",
    atmosphere:
      "Dark, intimate, and stylish. The Japanese-inspired design creates a unique backdrop that makes Tabu feel completely separate from the standard Mayfair club circuit.",
    capacity: "Approximately 200",
    faqs: [
      {
        question: "How much is a table at Tabu London?",
        answer:
          "Tables at Tabu London start from £1,000 minimum spend for a floor table. VIP tables start from £2,000. For a newer venue, the pricing is competitive with established Mayfair clubs.",
      },
      {
        question: "What type of music does Tabu play?",
        answer:
          "Tabu focuses on hip-hop, RnB, UK rap, drill, and Afrobeats. The music policy leans more underground than commercial — expect deep cuts alongside the big tracks. If you're after house music, look at Maddox instead.",
      },
      {
        question: "What nights is Tabu London open?",
        answer:
          "Tabu is open Thursday, Friday, and Saturday nights. All three nights maintain a strong atmosphere thanks to the intimate size of the venue.",
      },
      {
        question: "What's the dress code at Tabu?",
        answer:
          "Smart and fashion-forward. Tabu is slightly more relaxed than traditional Mayfair clubs — smart trainers can work if the overall outfit is on point. But no sportswear, no casual gear, and no flip-flops.",
      },
      {
        question: "What's the Japanese theme about?",
        answer:
          "Tabu's interior design draws inspiration from Japanese underground nightlife — dark lighting, Japanese aesthetic elements, and a moody atmosphere reminiscent of Tokyo's late-night scene. It's a design concept rather than a themed venue.",
      },
    ],
  },
  {
    slug: "london-reign",
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
    openingNights: ["Friday", "Saturday"],
    openingHours: "10:00 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2500,
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
    openingNights: ["Thursday", "Friday", "Saturday"],
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
          "Selene is open Thursday, Friday, and Saturday nights. As a newer venue, they occasionally add special event nights — check with us for the latest schedule.",
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
    slug: "funky-buddha",
    name: "Funky Buddha",
    shortName: "Funky Buddha",
    tagline: "The iconic Mayfair name returns with a fresh identity",
    description:
      "Funky Buddha (formerly Luxx) is the reborn version of one of Mayfair's most legendary club names. Located in the heart of Mayfair, the venue has been refreshed with a new look while keeping the open-format music policy that appeals to groups who don't want to be locked into one genre all night.",
    longDescription:
      "The Funky Buddha name carries serious weight in London nightlife — the original was one of the defining Mayfair clubs of its era, known for an eclectic crowd and music policy that crossed every boundary. The rebranded venue keeps that spirit alive with an open-format approach where DJs move between hip-hop, house, RnB, afrobeats, and commercial anthems depending on the crowd and the energy. It's the kind of club where the music follows the room rather than dictating it. The venue has been refitted and modernised but retains a Mayfair-standard interior — it's sleek, dark, and designed for a proper night out. The crowd is mixed in the best way: regulars who remember the original name, new visitors drawn by the relaunch, and Mayfair's usual international mix. Tables start from £1,000 and the open-format music makes it one of the easier sells for mixed groups where people have different musical preferences.",
    address: "15 Berkeley Street, Mayfair, London W1J 8DY",
    area: "Mayfair",
    musicPolicy:
      "Open format — Hip-Hop, House, RnB, Afrobeats, Commercial. DJs read the room.",
    dressCode:
      "Smart. Standard Mayfair expectations — smart shoes, collared shirts for men. No sportswear, trainers, or casual wear.",
    openingNights: ["Friday", "Saturday"],
    openingHours: "10:30 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table and seating area",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Open-format music that adapts to the crowd",
    ],
    knownFor: [
      "Revived legendary Mayfair club name",
      "Open-format music policy (not locked to one genre)",
      "Strong mixed crowd",
      "Classic Mayfair club atmosphere",
    ],
    bestFor:
      "Groups with mixed music tastes who want a reliable Mayfair night out without committing to one genre. Also great if you have nostalgia for the original Funky Buddha name.",
    atmosphere:
      "Classic Mayfair club energy — well-dressed crowd, strong music, and the buzz of a venue that doesn't need to try too hard because the formula works.",
    capacity: "Approximately 300",
    faqs: [
      {
        question: "How much is a table at Funky Buddha?",
        answer:
          "Tables at Funky Buddha start from £1,000 minimum spend. VIP tables start from £2,000. The pricing is standard for a Mayfair club of this calibre.",
      },
      {
        question: "Is Funky Buddha the same as the original?",
        answer:
          "The venue was previously known as Luxx before rebranding to Funky Buddha, reviving one of Mayfair's most iconic club names. The spirit is similar — eclectic, fun, well-dressed — but the venue has been updated and modernised.",
      },
      {
        question: "What music does Funky Buddha play?",
        answer:
          "Funky Buddha operates an open-format music policy. DJs move between hip-hop, house, RnB, Afrobeats, and commercial anthems based on the crowd and energy. This makes it ideal for mixed groups.",
      },
      {
        question: "What nights is Funky Buddha open?",
        answer:
          "Funky Buddha is open Friday and Saturday nights. Both are strong nights with the Friday crowd skewing slightly more local and Saturday drawing a broader mix.",
      },
      {
        question: "What's the dress code at Funky Buddha?",
        answer:
          "Standard Mayfair smart dress code. Collared shirts and smart shoes for men, dressed-up for women. No sportswear, casual trainers, or shorts. The door will turn you away if you're not dressed appropriately.",
      },
    ],
  },
  {
    slug: "scotch-of-st-james",
    description:
      "Libertine is one of Mayfair's most high-energy nightclubs — a venue that attracts a young, international crowd who come to party hard. Located on Winsley Street just off Oxford Circus, it's known for its anything-goes atmosphere, celebrity appearances, and music that spans hip-hop, RnB, and commercial anthems.",
    longDescription:
      "Libertine has carved out a reputation as the club where Mayfair's rules get bent. The atmosphere is deliberately more hedonistic than the polished, restrained vibe you find at some of the area's more established venues. The interior is dark and club-focused — this isn't a lounge that becomes a club, it's a nightclub from the moment you walk in. The music policy centres on hip-hop and RnB with commercial crossover, and the DJs know how to build energy through the night. The crowd skews young and international — models, influencers, visiting celebrities, and groups who are specifically looking for a big night rather than a sophisticated dinner-and-drinks affair. Tables are positioned around the dance floor, putting you right in the middle of the action. Libertine doesn't pretend to be understated — it's loud, it's fun, and it's unapologetically a party. If you want refinement, look elsewhere. If you want one of the best parties in Mayfair, this is it.",
    address: "4 Winsley Street, London W1W 8HF",
    area: "Fitzrovia (edge of Mayfair)",
    musicPolicy: "Hip-Hop, RnB, Commercial, Afrobeats",
    dressCode:
      "Smart and stylish. No sportswear, trainers, or casual wear. The door is selective — dress like you're going somewhere that matters.",
    openingNights: ["Thursday", "Friday", "Saturday"],
    openingHours: "10:30 PM – 3:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 2000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table and seating area",
      "Personal table service all night",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Access to one of Mayfair's highest-energy atmospheres",
    ],
    knownFor: [
      "High-energy, anything-goes party atmosphere",
      "Young, international crowd",
      "Regular celebrity appearances",
      "One of the most fun clubs in the Mayfair area",
    ],
    bestFor:
      "Groups who want a proper party rather than a civilised night out. Big birthdays, wild celebrations, and anyone who thinks most Mayfair clubs are too restrained.",
    atmosphere:
      "High-energy, hedonistic, loud. The opposite of Mayfair's usual restraint — Libertine is where the rules relax.",
    capacity: "Approximately 300",
    faqs: [
      {
        question: "How much is a table at Libertine?",
        answer:
          "Tables at Libertine start from £1,000 minimum spend for floor tables. VIP tables start from £2,000. Prices vary by night, with Saturdays commanding the highest minimums.",
      },
      {
        question: "What nights is Libertine open?",
        answer:
          "Libertine is open Thursday, Friday, and Saturday nights. All three nights draw strong crowds, with Saturday being the biggest.",
      },
      {
        question: "What's the vibe at Libertine?",
        answer:
          "Libertine is Mayfair's wildest club. The atmosphere is high-energy, the crowd is young and international, and the music is built to make people dance. If you want refined and sophisticated, try Maddox. If you want a party, Libertine delivers.",
      },
      {
        question: "What's the dress code at Libertine?",
        answer:
          "Smart and stylish. The door is selective so make an effort. No sportswear, no casual trainers, no shorts. Smart shoes and a collared shirt for men, dressed-up for women.",
      },
      {
        question: "Is Libertine good for birthdays?",
        answer:
          "Libertine is excellent for birthday parties, especially if your group wants a high-energy celebration. The party atmosphere makes birthdays feel like genuine events. We can arrange cakes and sparklers.",
      },
    ],
  },
  {
    slug: "scotch-of-st-james",
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
    openingNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
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
    openingNights: ["Thursday", "Friday", "Saturday"],
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
    openingNights: ["Friday", "Saturday"],
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
          "BEAT is for electronic music what Tabu is for hip-hop — a venue built around the music first. If you care about sound quality and DJ talent over celebrity sightings, BEAT is the choice.",
      },
    ],
  },
  {
    slug: "ministry-of-sound",
    name: "Ministry of Sound",
    shortName: "Ministry",
    tagline: "The world's most famous nightclub, right here in London",
    description:
      "Ministry of Sound needs no introduction. One of the most famous nightclubs on the planet, located in Elephant & Castle, South London. A multi-room superclub with one of the best sound systems ever built, hosting the world's top DJs across house, techno, drum & bass, and beyond. This is clubbing at its most iconic.",
    longDescription:
      "Ministry of Sound is a different proposition to the Mayfair clubs on this site — and that's exactly the point. While Mayfair offers intimate, exclusive bottle service in small venues, Ministry is a full-scale superclub that has been at the centre of global dance music culture since 1991. The main room (The Box) houses a custom-built sound system that's been refined over three decades — many consider it the best club sound system in the world. The venue spans multiple rooms, each with its own music policy and atmosphere: The Box for the headline acts, 103 for a different vibe, The Loft for a more intimate feel, and The Bar for a breather between rooms. VIP and table service at Ministry is a different experience from Mayfair. You get elevated areas with bottle service while being part of an event that can hold over a thousand people. The line-ups feature the biggest names in electronic music — this is where world-class DJs want to play. If you want Mayfair-style intimacy, this isn't it. If you want to experience one of the most legendary nightclubs ever built with world-class music and a crowd of genuine music lovers, Ministry of Sound is in a league of its own.",
    address: "103 Gaunt Street, Elephant & Castle, London SE1 6DP",
    area: "Elephant & Castle, South London",
    musicPolicy: "House, Techno, Drum & Bass, Electronic — depending on the event. World-class DJ bookings.",
    dressCode:
      "More relaxed than Mayfair. Smart casual is fine. Trainers are generally accepted. No excessively casual or offensive clothing. The focus is on the music, not the dress code.",
    openingNights: ["Friday", "Saturday"],
    openingHours: "11:00 PM – 6:00 AM",
    pricing: {
      floorTable: 1000,
      vipTable: 3000,
    },
    whatsIncluded: [
      "VIP entry and access to elevated table areas",
      "Reserved table and seating in VIP section",
      "Personal table service",
      "Premium spirits or champagne",
      "Mixers, ice, and garnishes",
      "Access to all rooms and one of the world's best sound systems",
    ],
    knownFor: [
      "One of the most famous nightclubs in the world",
      "Custom-built, world-class sound system",
      "Multi-room layout with different music in each",
      "Heritage dating back to 1991",
      "The biggest names in electronic music perform here",
    ],
    bestFor:
      "Electronic music fans who want a legendary clubbing experience. Groups who want bottle service but also want to be part of a real music event. Anyone visiting London who wants to tick off a bucket-list club.",
    atmosphere:
      "Epic, music-driven, communal. The energy of a thousand people united by world-class music on a world-class sound system. Nothing in Mayfair comes close to this scale.",
    capacity: "Over 1,500 across multiple rooms",
    faqs: [
      {
        question: "How much is a table at Ministry of Sound?",
        answer:
          "VIP tables at Ministry of Sound start from £1,000 minimum spend, with premium positions from £3,000+. Pricing varies significantly depending on the event and the DJ line-up. Major headliner nights command higher minimums.",
      },
      {
        question: "Is Ministry of Sound different from Mayfair clubs?",
        answer:
          "Completely different. Ministry is a superclub focused on electronic music with 1,500+ capacity and the world's best sound system. Mayfair clubs are intimate, 200-400 capacity venues focused on exclusivity. Ministry is about the music and the communal experience; Mayfair is about privacy and personal service.",
      },
      {
        question: "What music does Ministry of Sound play?",
        answer:
          "Ministry hosts different events with different music policies — house, techno, drum & bass, trance, and more. The line-ups feature world-class DJs. Check the specific event for the night you're attending. The venue's heritage is rooted in house and electronic music.",
      },
      {
        question: "What nights is Ministry of Sound open?",
        answer:
          "Ministry of Sound operates primarily on Fridays and Saturdays, with some events running until 6:00 AM. Occasional special events happen on other nights. It's event-driven rather than operating a fixed weekly schedule.",
      },
      {
        question: "Where is Ministry of Sound?",
        answer:
          "Ministry of Sound is in Elephant & Castle, South London — a short taxi ride from central London and Mayfair. The nearest tube station is Elephant & Castle on the Northern and Bakerloo lines. It's not in Mayfair, but it's absolutely worth the journey.",
      },
    ],
  },
  {
    slug: "lio-london",
    name: "Lio Club London",
    shortName: "Lio",
    tagline: "Mediterranean cabaret meets Mayfair nightlife",
    description:
      "Lio Club London brings the spirit of its famous Ibiza original to the heart of London. A cabaret-style showclub combining Mediterranean glamour, live performances, world-class dining, and late-night clubbing. Think Cirque du Soleil meets Ibiza beach club meets Mayfair supper club — it's an experience that spans the entire evening.",
    longDescription:
      "Lio is the London outpost of the famous Ibiza venue, and it brings that Mediterranean energy to Mayfair with serious ambition. The concept is dinner-and-show-and-club rolled into one spectacular evening. You start with a Mediterranean fine dining experience — the food is genuinely restaurant-quality, not club food. As dinner progresses, live cabaret performances begin: dancers, acrobats, vocalists, and theatrical acts perform throughout the venue. Then, as the night deepens, the space transforms into a full nightclub with DJs taking over. The production quality is exceptional — costumes, choreography, lighting, and staging are all at a level you'd expect from a professional theatre production. The venue itself is lavishly designed with Mediterranean influences, lush fabrics, and an interior that feels like you've stepped into a glamorous Mediterranean villa. Tables are positioned to give everyone a view of the performances, and the transition from dinner to show to club happens seamlessly. The crowd is international, well-heeled, and here for the full experience. Lio is not cheap — this is one of the premium experiences in London nightlife — but for a truly memorable evening that combines multiple experiences, it's hard to match.",
    address: "Mayfair, London W1",
    area: "Mayfair",
    musicPolicy: "Mixed — Mediterranean, House, Commercial during dinner and show. Transitioning to House, Hip-Hop during the late-night club phase.",
    dressCode:
      "Smart and glamorous. This is a high-end dinner-show-club concept — dress for the best restaurant you've ever been to. Men: jacket or blazer encouraged, smart shoes essential. Women: cocktail or evening dress. No casual wear.",
    openingNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingHours: "Dinner from 7:30 PM, Show from 9:30 PM, Club until 3:00 AM",
    pricing: {
      floorTable: 1500,
      vipTable: 3000,
    },
    whatsIncluded: [
      "Priority entry for your group",
      "Reserved table with performance views",
      "Personal table service throughout dinner, show, and club",
      "Premium spirits or champagne (club phase)",
      "Mixers, ice, and garnishes",
      "World-class cabaret performances",
      "Option to combine dinner and bottle service packages",
    ],
    knownFor: [
      "Mediterranean cabaret performances of exceptional quality",
      "Dinner-show-club concept spanning the full evening",
      "Offshoot of the iconic Lio Ibiza",
      "Lavish, Mediterranean-inspired interior",
      "One of London's most complete nightlife experiences",
    ],
    bestFor:
      "Groups who want an entire evening in one venue — dinner, show, and clubbing. Special occasions that deserve something extraordinary. Couples who love Ibiza's glamour. Anyone who wants their night out to feel like an event.",
    atmosphere:
      "Glamorous, theatrical, Mediterranean. The combination of fine dining, cabaret, and nightclub creates an evening that builds in energy and spectacle.",
    capacity: "Approximately 350",
    faqs: [
      {
        question: "How much is a table at Lio London?",
        answer:
          "Club tables at Lio London start from £1,500 minimum spend. VIP tables start from £3,000. Dinner-and-show packages are priced separately. Lio is a premium experience and the pricing reflects the quality of the food, performances, and venue.",
      },
      {
        question: "Is Lio London the same as Lio Ibiza?",
        answer:
          "Lio London is the London version of the famous Lio in Ibiza. The concept is the same — Mediterranean dining, cabaret performances, and late-night clubbing — adapted for a Mayfair setting. If you've been to the Ibiza original, the London venue delivers the same spirit.",
      },
      {
        question: "What kind of shows does Lio London have?",
        answer:
          "Lio features professional cabaret performances including dancers, acrobats, live vocalists, and theatrical acts. The production quality is closer to a West End show than a standard club. Performances happen throughout dinner and continue into the club phase.",
      },
      {
        question: "Can I just do bottle service without dinner at Lio?",
        answer:
          "Yes — you can book just the late-night club portion with bottle service, starting after the show. However, the full dinner-show-club experience is the best way to experience Lio. We can arrange either option depending on your preference.",
      },
      {
        question: "What nights is Lio London open?",
        answer:
          "Lio London is open Wednesday through Saturday. The full dinner-show-club programme runs every night they're open. Fridays and Saturdays are the biggest nights.",
      },
    ],
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}
