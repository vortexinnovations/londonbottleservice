export interface BookingPageData {
  bookingSlug: string;
  clubSlug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheading: string;
  pricingIntro: string;
  vipUpsellPitch: string;
  weekdayDeal: string;
  arrivalGuide: string;
  guestlistComparison?: string;
  entryGuide?: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
  relatedBookingPages: string[];
  relatedBlogSlugs: string[];
}

export const bookingPages: BookingPageData[] = [
  // 1. Cirque Le Soir
  {
    bookingSlug: "cirque-le-soir-table-booking",
    clubSlug: "cirque-le-soir",
    metaTitle: "Cirque Le Soir Table Booking | Circus Shows & VIP from £1,000",
    metaDescription:
      "Book a VIP table at Cirque Le Soir from £1,000 minimum spend. Skip the queue, get personal service & front-row circus acts. Message us on WhatsApp now.",
    h1: "Book a Table at Cirque Le Soir",
    heroSubheading:
      "London's original circus-themed nightclub on Ganton Street, Soho. Fire breathers, contortionists, and a night you won't forget — with your own table and bottle service.",
    pricingIntro:
      "Floor tables at Cirque Le Soir start from £1,000 minimum spend on standard nights. This covers your drinks — premium spirits, champagne, or a combination. Your personal waitress will walk you through the bottle menu when you arrive. Wednesdays and Fridays tend to sit at the lower end of the range, while Saturday minimums can climb depending on the event calendar.",
    vipUpsellPitch:
      "VIP tables start from £2,000 and put you in the best seats in the house — front-row positions next to the stage where performers are literally within arm's reach. If you're celebrating something worth celebrating, VIP is the difference between watching the show and being part of it. Sparklers on arrival, priority bottle selection, and the best sightlines in the venue.",
    weekdayDeal:
      "Wednesday is the insider's night at Cirque. The full circus show runs, the crowd is strong, but the minimum spend is often lower than Friday or Saturday. If your group is flexible on dates, Wednesday gives you the full Cirque experience without the weekend premium. Friday sits between the two — excellent atmosphere, slightly lower minimums than Saturday.",
    arrivalGuide:
      "Cirque Le Soir is at 15-21 Ganton Street, just off Carnaby Street in Soho. Doors open at 10:30 PM but most tables arrive between 11:00 PM and midnight. With a table booking through us, you'll skip the general queue entirely — give your name at the door and you'll be walked straight to your table. Your waitress will introduce herself and take your first bottle order. Oxford Circus is the nearest tube, about a 3-minute walk.",
    guestlistComparison:
      "Cirque Le Soir does operate a guestlist, but it's one of the more misleading options in London nightlife. Getting your name on a list doesn't guarantee entry — the door team still makes the final call, and on Fridays and Saturdays they turn away guestlist names regularly when the venue is at capacity. Even when guestlist works, you're joining the general admission queue and paying a cover charge that typically runs £20-30 per person. For a group of eight, that's potentially £240 spent just to stand in a packed room with no guaranteed seating and no table service.\n\nThe real issue with guestlist at Cirque is that the venue is small — around 250 capacity — and the live circus performances are specifically designed to be experienced from the tables. Standing on the fringes watching fire breathers perform to table guests is a fundamentally different night out than having the contortionists perform at your table while your waitress tops up your drinks. Guestlist puts you in the audience; a table puts you in the show.\n\nFor groups of four or more, the maths makes table booking the clear winner. Split a £1,000 minimum across eight people and you're paying £125 each for guaranteed entry, a reserved table, personal service, premium drinks, and front-row seats to the circus acts. Compare that to £30 each on guestlist with no guarantees, no seat, and drinks at bar prices that add up fast. The table isn't just better value — it's a completely different experience.",
    entryGuide:
      "Cirque Le Soir's door is selective but not impossible — it falls somewhere between the ultra-exclusive members' clubs and the more accessible Mayfair venues. The dress code is smart and stylish with a theatrical edge that matches the venue's personality. Men need collared shirts and smart shoes as an absolute minimum; trainers, sportswear, and shorts will get you turned away without discussion. Women should dress for a memorable night out — heels, dresses, or sharp separates. The circus theme doesn't mean costumes, but the crowd tends to put genuine effort into how they look.\n\nThe door team pays attention to group composition and energy. Large groups of men without women will have a harder time, even with a booking. Mixed groups who look like they're there for a good time get through smoothly. The most common mistake is treating Cirque like a casual night out — people who've heard about the circus acts sometimes assume the vibe is relaxed. It isn't. This is still a Soho venue with Mayfair-level standards at the door.\n\nWith a table booking through us, the entry process changes entirely. You give your name at the door, your group is checked off the list, and you're walked directly to your table. No queue, no negotiating with the door team, no risk of being turned away because the room is full. Arrive between 11:00 PM and midnight — early enough to catch the first round of performances, late enough that the energy is building. Oxford Circus tube is three minutes away, so there's no excuse for being late.",
    sections: [
      {
        heading: "Best Nights to Book at Cirque Le Soir",
        content:
          "Saturday is the flagship night — the biggest crowd, the full performer lineup, and the highest energy. If this is a special occasion, Saturday is the one. Friday is nearly as good with a slightly more relaxed door and often a lower minimum spend. Wednesday is the underrated pick: the full show runs, the crowd is a loyal mix of regulars and in-the-know visitors, and you'll often get a better table position for less. For first-timers, Friday or Saturday guarantees the spectacle. For repeat visitors or budget-conscious groups, Wednesday delivers genuine value.",
      },
      {
        heading: "Birthday & Celebration Packages at Cirque Le Soir",
        content:
          "Cirque Le Soir is one of the most popular birthday venues in London for good reason — the live circus performances turn your night into an event without you having to organise anything. We can arrange birthday cakes, sparklers, LED signs with the guest of honour's name, and a shoutout from the performers. For milestone birthdays (21st, 30th, 40th), the VIP tables next to the stage are worth the upgrade. Groups of 10-15 are the sweet spot for one table; larger parties can book adjacent tables so you're all together. Let us know the occasion when you message us and we'll handle the details.",
      },
      {
        heading: "What Makes Cirque Le Soir Different",
        content:
          "Most Mayfair clubs offer a table, bottles, and music. Cirque Le Soir adds a live circus show that runs throughout the entire night — fire breathers, contortionists, stilt walkers, and sword swallowers performing between tables and on stage. The venue is deliberately small (around 250 capacity) which means the energy is intense and the performers are right in your face. It's the most photographed club in London for a reason. If you've done the standard Mayfair bottle service circuit and want something that actually gives you stories to tell, this is the move.",
      },
      {
        heading: "Group Booking Guide for Cirque Le Soir",
        content:
          "A standard floor table comfortably seats 6-8 guests. For groups of 10-15, we'll arrange a larger table or adjacent tables so your party stays together. Groups over 15 should get in touch early — prime table configurations sell out fast on weekends. Every booking includes priority entry for your full group, so no one gets stuck in the general queue. If your group has mixed preferences (some want to dance, others want to sit), corner tables offer the best of both — close enough to the action but with space to spread out.",
      },
    ],
    faqs: [
      {
        question: "How much does a table cost at Cirque Le Soir?",
        answer:
          "Floor tables start from £1,000 minimum spend. VIP tables closer to the stage start from £2,000. This is a drinks spend, not a fee — it covers premium spirits, champagne, or both. Prices can vary by night and event, so message us for an exact quote for your date.",
      },
      {
        question: "How do I book a table at Cirque Le Soir?",
        answer:
          "The fastest way is to message us on WhatsApp with your preferred date, group size, and any occasion details. We'll confirm availability and pricing within minutes. We have a direct relationship with the venue so we can often secure tables that aren't available through other channels.",
      },
      {
        question: "What's the best night to book at Cirque Le Soir?",
        answer:
          "Saturday is the biggest night with the full performer lineup. Friday is almost as good with slightly lower minimum spends. Wednesday is the insider pick — full show, great crowd, lower minimums. For birthdays and special occasions, Saturday or Friday is the recommendation.",
      },
      {
        question: "What's the dress code for table bookings at Cirque Le Soir?",
        answer:
          "Smart and stylish is the rule. Men need collared shirts and smart shoes — absolutely no trainers, sportswear, or shorts. Women should dress for a night out: heels, dresses, or smart separates. Having a table doesn't exempt you from the dress code — the door is selective even for bookings.",
      },
      {
        question: "How far in advance should I book at Cirque Le Soir?",
        answer:
          "For Saturday nights, book at least 1-2 weeks in advance. Peak dates (bank holidays, New Year's, Halloween) sell out weeks ahead. Wednesday and Friday bookings can sometimes be arranged with a few days' notice, but earlier is always better for securing your preferred table position.",
      },
      {
        question: "What's included with a table booking at Cirque Le Soir?",
        answer:
          "Your booking includes priority entry for your entire group (skip the queue), a reserved table and seating area, a personal waitress for the night, your choice of premium spirits or champagne (covered by minimum spend), all mixers, ice, and garnishes, plus front-row views of the live circus performances.",
      },
      {
        question: "Can I book Cirque Le Soir for a birthday?",
        answer:
          "Absolutely — it's one of London's top birthday venues. The circus performances make it feel like a proper event. We can arrange birthday cakes, sparklers, LED name signs, and performer shoutouts. Just mention the occasion when you message us and we'll coordinate everything.",
      },
    ],
    relatedBookingPages: [
      "the-box-london-table-booking",
      "reign-london-table-booking",
      "tape-london-table-booking",
      "tabu-london-table-booking",
    ],
    relatedBlogSlugs: [
      "best-clubs-for-birthday-london",
      "celebrity-clubs-london",
      "how-much-does-bottle-service-cost-london",
    ],
  },

  // 2. Tape London
  {
    bookingSlug: "tape-london-table-booking",
    clubSlug: "tape-london",
    metaTitle: "Tape London Table Booking | Members Club VIP from £1,500",
    metaDescription:
      "Book a VIP table at Tape London from £1,500. Access Mayfair's most exclusive members' club without a membership. Message us on WhatsApp for availability.",
    h1: "Book a Table at Tape London",
    heroSubheading:
      "One of Mayfair's most exclusive members' clubs on Hanover Square. Recording-studio interiors, an A-list crowd, and an atmosphere most people never get to experience — unless you have a table.",
    pricingIntro:
      "Tables at Tape London start from £1,500 minimum spend. This is one of the pricier venues in Mayfair, but you're paying for access to a genuine members' club that doesn't normally let non-members through the door. Your spend covers premium spirits and champagne — the bottle menu is curated and your server will guide you through the options.",
    vipUpsellPitch:
      "VIP tables start from £3,000 and give you the prime positions in the venue — the best sightlines, the most space, and proximity to the DJ booth. At a venue this small and exclusive, VIP isn't just a label; it's a genuinely different experience. If you're entertaining clients or hosting something that needs to impress, VIP at Tape is as good as it gets in Mayfair.",
    weekdayDeal:
      "Thursday is the smart booking at Tape. The crowd is strong — industry people, regulars, and a more relaxed atmosphere than the weekend rush. Minimum spends are typically lower than Friday or Saturday, and the venue feels even more intimate with a slightly smaller crowd. Wednesday is the most accessible night in terms of pricing and availability.",
    arrivalGuide:
      "Tape London is at 17 Hanover Square in Mayfair. Doors open at 10:30 PM. With a table booking through us, your entire group gets guaranteed entry — just give your name at the door. Arrive between 11:00 PM and midnight for the best experience. The venue is small so it fills up fast. Oxford Circus tube is a 5-minute walk. Dress impeccably — this is a members' club environment and the door team will turn away anyone not meeting the standard, table booking or not.",
    guestlistComparison:
      "There is no realistic guestlist route into Tape London. This is a private members' club with a capacity under 200 people, and they don't operate a public guestlist in any meaningful sense. Promoters who claim they can get you on a Tape guestlist are either misleading you or talking about a different venue entirely. The door at Tape is managed for members and their guests, plus table bookings arranged through recognised partners. If you're not a member and you don't have a table, your chances of getting through that door on any given night are close to zero.\n\nThis isn't Tape being difficult for the sake of it — it's a function of how the venue operates. Under 200 capacity means every person in the room has been deliberately allowed in. Members have priority, table bookings fill the remaining space, and walk-ups or guestlist hopefuls are what's left over, which on busy nights means nothing. Even on a quiet Wednesday, the door team would rather run a half-empty room than compromise the crowd by letting in people who don't fit the standard.\n\nA table booking is the only reliable way for non-members to experience Tape. Starting at £1,500 minimum spend, it's not cheap — but you're buying access to a room that money alone can't normally enter. Split across a group of six to eight, the per-person cost is reasonable for what is genuinely one of the most exclusive nightlife experiences in London. There is no budget alternative here. Either you book a table and you're in, or you don't and you're not.",
    entryGuide:
      "Getting into Tape London without a membership or table booking is, for practical purposes, not going to happen. The door at Tape is run with the precision of a private members' club because that's exactly what it is. There's no queue to join — the door team isn't looking at the line and deciding who looks good enough. They're checking a list. If your name isn't on it, the conversation is over before it starts. This is the reality of a sub-200-capacity venue that counts Premier League footballers and music industry executives among its regular crowd.\n\nThe dress code at Tape is the strictest in Mayfair. Smart shoes and a collared shirt are the absolute bare minimum for men, and even that might not be enough — jackets are strongly encouraged and the door team has been known to turn away people in smart shirts who simply didn't look polished enough. Women should dress in cocktail-level elegance: think designer or at least designer-adjacent. Streetwear, no matter how expensive, won't fly here. The members' club standard applies to everyone, including table bookings.\n\nWith a table booked through us, your group gets guaranteed entry as guests of the venue. Give your name at the door, your group is confirmed against the booking, and you're walked in. But guaranteed entry doesn't mean guaranteed entry in tracksuit bottoms — the dress code is non-negotiable even for bookings. Arrive between 11:00 PM and midnight looking like you belong in a room full of people who are used to the best of everything, and you'll have no issues.",
    sections: [
      {
        heading: "Best Nights to Book at Tape London",
        content:
          "Saturday is the premier night — the biggest names in the crowd, the highest energy, and the fullest room. Friday is nearly as exclusive with a slightly more relaxed feel. Thursday is the value pick and genuinely one of the best nights at Tape: the crowd is industry-heavy (music, fashion, media), the atmosphere is more conversational early on before building into a proper party, and minimums are noticeably lower. Wednesday works for smaller groups who want the Tape experience at the most accessible price point.",
      },
      {
        heading: "Why Tape London Is Worth the Premium",
        content:
          "Tape operates as a genuine members' club — under 200 capacity, a famously selective door, and a crowd that's there because they've earned access. The recording-studio-inspired interior (sound-panelled walls, studio-grade acoustics) creates an atmosphere that feels like a private party rather than a commercial nightclub. When you book through us, you get members' club access without the membership. That means guaranteed entry for your group to a venue most people in London will never see inside. The music is hip-hop and RnB focused, the drinks are premium, and the intimacy of the space makes it feel genuinely exclusive rather than just expensive.",
      },
      {
        heading: "Corporate & Client Entertainment at Tape",
        content:
          "Tape is arguably the best venue in Mayfair for impressing clients or hosting a corporate night. The members' club cachet, the intimate atmosphere, and the calibre of the crowd all signal a level of access that opens conversations. A VIP table at Tape says more than a restaurant reservation. Groups of 6-10 work best for corporate entertaining — large enough to feel like an event, small enough for conversation. We can pre-arrange your bottle selection so everything is ready when you arrive.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Tape London?",
        answer:
          "Tables start from £1,500 minimum spend. VIP positions start from £3,000. This is a members' club so pricing reflects the exclusivity. Your spend covers premium spirits and champagne from a curated menu.",
      },
      {
        question: "How do I get into Tape London without a membership?",
        answer:
          "Book a table through us. We arrange guest access for your entire group. Without a table booking or membership, getting through the door at Tape is extremely unlikely — it's one of the most selective venues in Mayfair.",
      },
      {
        question: "What's the best night to visit Tape London?",
        answer:
          "Saturday is the flagship night. Thursday is the insider pick — strong crowd, lower minimums, and a more intimate feel. Friday sits between the two. Wednesday is the most accessible entry point.",
      },
      {
        question: "What's the dress code for Tape London?",
        answer:
          "Strictly smart. This is a members' club. Men need smart shoes and a collared shirt minimum; jackets are encouraged. Women should dress elegantly — cocktail dresses, heels, or smart separates. No streetwear, no casual trainers, no exceptions. The door will refuse entry even with a booking if you're not dressed appropriately.",
      },
      {
        question: "How far in advance should I book Tape London?",
        answer:
          "Book at least 2 weeks in advance for Friday or Saturday. Tape has very limited capacity so tables sell out quickly. Thursday and Wednesday can sometimes be booked with shorter notice. For peak dates, a month ahead is not excessive.",
      },
      {
        question: "Is Tape London good for birthdays?",
        answer:
          "Yes, if your group values exclusivity over spectacle. Tape doesn't have live performers or big productions — the appeal is being in one of the most exclusive rooms in London with a crowd that matches. For milestone birthdays where the guest of honour appreciates that kind of access, it's perfect.",
      },
      {
        question: "What music does Tape London play?",
        answer:
          "Hip-hop, RnB, US rap, and occasional Afrobeats. The music policy is consistent and well-curated. If you're looking for house or electronic music, Tape isn't the right fit — try Maddox or BEAT instead.",
      },
    ],
    relatedBookingPages: [
      "cirque-le-soir-table-booking",
      "the-box-london-table-booking",
      "scotch-of-st-james-table-booking",
      "luna-club-london-table-booking",
    ],
    relatedBlogSlugs: [
      "how-to-get-into-exclusive-london-clubs",
      "celebrity-clubs-london",
      "how-much-does-bottle-service-cost-london",
    ],
  },

  // 3. London Reign
  {
    bookingSlug: "reign-london-table-booking",
    clubSlug: "london-reign",
    metaTitle: "London Reign Table Booking | Showclub & VIP from £1,000",
    metaDescription:
      "Book a VIP table at London Reign from £1,000. Las Vegas-style shows, aerial performers & bottle service on Piccadilly. WhatsApp us for instant availability.",
    h1: "Book a Table at London Reign",
    heroSubheading:
      "Mayfair's most spectacular showclub on Piccadilly. Aerial acrobats, live vocalists, fire performers, and production values that rival Las Vegas — all from your VIP table.",
    pricingIntro:
      "Floor tables at London Reign start from £1,000 minimum spend. This covers your drinks for the night — premium spirits, champagne, or a mix. The show is included with every table booking, so your minimum spend gets you both the entertainment and the bottle service. Friday and Saturday are the main event nights, with Saturday commanding the highest minimums.",
    vipUpsellPitch:
      "VIP tables start from £2,500 and are positioned for the best possible views of the aerial performances and stage shows. At Reign, table position matters more than at most clubs because the entertainment is the centrepiece. VIP puts you front and centre — the performers are above you, beside you, and the entire production is designed to be experienced from these positions. For groups celebrating a birthday or special occasion, VIP transforms the night from a club visit into a genuine event.",
    weekdayDeal:
      "Reign operates Friday and Saturday only, so there's no midweek discount option. However, Friday tends to have slightly lower minimum spends than Saturday while delivering the same full show programme. If your dates are flexible, Friday gives you the identical Reign experience with a bit more breathing room on price and availability.",
    arrivalGuide:
      "London Reign is at 12-14 Piccadilly, right in the heart of Mayfair. Doors open at 10:00 PM. With a table booking, you'll have priority entry — give your name at the door and you're in. The shows start around 11:00 PM and run in waves throughout the night, so arriving by 10:30-11:00 PM means you won't miss the first set. Green Park and Piccadilly Circus tubes are both a short walk. The venue is large by Mayfair standards, so the vibe builds as the room fills up.",
    guestlistComparison:
      "London Reign does run a guestlist on some nights, and it can work — you may get through the door with a reduced or waived cover charge, typically around £20 per person. But here's what guestlist actually gets you at Reign: standing room in a 500-capacity venue, competing for space at the bar, and watching aerial acrobats and fire performers from whatever gap in the crowd you can find. The entire venue is designed around table positions that face the stage and performance areas. Guestlist puts you in the gaps between those tables.\n\nThe comparison is particularly stark at Reign because the live entertainment is the main attraction. The aerial performers, the dancers, the live vocalists — all of this is choreographed to be viewed from the seated table areas. Standing at the back or along the edges, you're seeing maybe 60% of what the venue offers. A table booking puts you in the positions the venue was literally designed around, with unobstructed sightlines to every performance.\n\nFor groups — and Reign attracts a lot of hen parties and large birthday groups — guestlist makes even less sense. Try coordinating a group of twelve through a general admission queue on a Saturday night. People get separated, someone doesn't meet dress code, the queue is long, and by the time everyone's inside the first show has already happened. A table booking from £1,000 gets your whole group in together with priority entry, seats facing the stage, and a personal server. For a venue where the show is the point, watching it properly isn't optional — it's the entire reason you came.",
    entryGuide:
      "London Reign sits on Piccadilly, which means it draws from a broader crowd than the tucked-away Mayfair side-street clubs. The door is selective but reasonable — this isn't The Box or Tape where getting in without a booking is a major challenge. The dress code is standard Mayfair smart: men need collared shirts and smart shoes, women should dress up. The showclub setting means the crowd naturally makes an effort — people know they're going to see performances and tend to dress for the occasion. Sportswear, trainers, and casual wear will get you turned away.\n\nThe most common mistake at Reign is arriving too late. Because the venue is large (around 500 capacity) people assume it won't fill up, but the Friday and Saturday shows draw serious demand. The first wave of performances starts around 11:00 PM, and if you're still in a taxi at that point, you're missing the opening spectacle. Aim to arrive by 10:30 PM — early enough to settle in, order your first round, and be ready when the lights go down and the aerialists take the ceiling.\n\nA table booking changes the Reign experience from a night at a club to a night at a show with bottle service. Priority entry means your full group walks in together regardless of queue length. You're escorted to a table positioned to face the stage, your server introduces themselves, and you're set up before the performances begin. For hen parties and large birthday groups, this logistics advantage alone is worth the booking — no splitting up at the door, no hunting for space in a crowded room.",
    sections: [
      {
        heading: "What to Expect from the Shows at London Reign",
        content:
          "London Reign is a showclub in the truest sense. Throughout the night, aerial acrobats perform above the dance floor suspended from the ceiling, professional dancers deliver choreographed routines on stage, live vocalists perform hit songs, and fire performers add spectacle between acts. The production values are closer to a West End show than anything you'll find in a standard nightclub. New acts rotate regularly so repeat visitors get fresh entertainment. The shows run in waves — building intensity through the night — so every table gets multiple rounds of performances regardless of when you arrive.",
      },
      {
        heading: "Hen Parties & Large Group Bookings at London Reign",
        content:
          "Reign is one of the best hen party venues in London. The show element means the entertainment is handled for you — no need to organise activities or worry about keeping everyone engaged. The venue can comfortably accommodate large groups with multiple adjacent tables. For hen parties, we can arrange sashes, sparklers, and a shoutout during the show. Groups of 15-20 are common here and the venue's size (around 500 capacity) means you won't feel cramped. Birthday groups get similar treatment — cakes, sparklers, and the kind of production that makes the night feel truly special.",
      },
      {
        heading: "London Reign vs Cirque Le Soir: Which Should You Book?",
        content:
          "Both are show-format venues but they deliver very different experiences. Cirque Le Soir is intimate (250 capacity), chaotic, and the performers are in your face — contortionists at your table, fire breathers between courses. Reign is grander (500 capacity), more polished, and the performances happen on a proper stage with professional production. Choose Cirque if you want immersive, unpredictable, and wild. Choose Reign if you want spectacular, high-production, and Vegas-style. For hen parties and large groups, Reign's size is usually the better fit. For smaller groups wanting an intense experience, Cirque wins.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at London Reign?",
        answer:
          "Floor tables start from £1,000 minimum spend. VIP tables with premium stage views start from £2,500. The live entertainment is included — your minimum spend covers drinks and the full show experience.",
      },
      {
        question: "How do I book a table at London Reign?",
        answer:
          "WhatsApp us with your preferred date, group size, and occasion. We'll confirm availability and pricing within minutes. Weekend tables sell out regularly so booking ahead is recommended, especially for groups.",
      },
      {
        question: "What nights is London Reign open?",
        answer:
          "Friday and Saturday only. Both nights feature the full show programme. Saturday is busier with higher minimums. Friday offers the same entertainment with slightly better availability.",
      },
      {
        question: "Is London Reign good for a hen party?",
        answer:
          "One of the best in London. The live shows handle the entertainment, the venue accommodates large groups easily, and we can arrange hen party extras like sparklers and shoutouts. Groups of 15-20 are common and well-catered for.",
      },
      {
        question: "What's the dress code at London Reign?",
        answer:
          "Smart. Men need smart shoes and a collared shirt. Women should dress up — the crowd here tends to make an effort given the showclub setting. No sportswear, trainers, or casual wear.",
      },
      {
        question: "How early should I arrive at London Reign?",
        answer:
          "Doors open at 10:00 PM. Aim to arrive by 10:30-11:00 PM. The first round of shows typically begins around 11:00 PM and you'll want to be settled at your table with drinks ordered before the entertainment starts.",
      },
      {
        question: "Can I book London Reign for a birthday?",
        answer:
          "Absolutely. The production quality makes birthdays here feel like a proper event. We can organise cakes, sparklers, and a birthday announcement during the show. VIP tables are particularly popular for birthday bookings because of the prime stage views.",
      },
    ],
    relatedBookingPages: [
      "cirque-le-soir-table-booking",
      "the-box-london-table-booking",
      "selene-london-table-booking",
      "funky-buddha-table-booking",
    ],
    relatedBlogSlugs: [
      "hen-party-london-clubs",
      "best-clubs-for-birthday-london",
      "how-much-does-bottle-service-cost-london",
    ],
  },

  // 4. Tabu London
  {
    bookingSlug: "tabu-london-table-booking",
    clubSlug: "tabu-london",
    metaTitle: "Tabu London Table Booking | Japanese Underground VIP from £1,000",
    metaDescription:
      "Book a VIP table at Tabu London from £1,000. Japanese-inspired underground vibe with hip-hop & RnB in Mayfair. WhatsApp us for instant booking confirmation.",
    h1: "Book a Table at Tabu London",
    heroSubheading:
      "Japanese underground aesthetics meet Mayfair bottle service on Albemarle Street. Dark, moody, and hip-hop focused — Tabu is the antidote to predictable Mayfair clubs.",
    pricingIntro:
      "Tables at Tabu London start from £1,000 minimum spend for a floor table. This covers your bottles for the night — premium spirits and champagne from a well-stocked menu. As a newer venue on the Mayfair circuit, Tabu's pricing is competitive while delivering an atmosphere and design that stands out from the established competition.",
    vipUpsellPitch:
      "VIP tables start from £2,000 and give you the best positions in this intimate, design-led space. At a venue this compact, VIP isn't just about location — it's about having more space and a premium setup in a room where every detail has been considered. If you want to feel like you own the room, VIP at Tabu delivers that energy.",
    weekdayDeal:
      "Thursday is Tabu's underrated night. The venue is open Thursday through Saturday, and Thursday consistently delivers a strong crowd of regulars and fashion-forward Mayfair goers at minimum spends that are often lower than the weekend. The intimate size means the atmosphere doesn't suffer on quieter nights — 150 people in a 200-capacity venue feels busier than 300 in a 500-capacity room.",
    arrivalGuide:
      "Tabu is at 35 Albemarle Street in Mayfair. Doors open at 10:00 PM. Table bookings get priority entry — arrive between 10:30 PM and 11:30 PM for the sweet spot where the venue is filling up but you're settled before peak energy. Green Park tube is a 3-minute walk. The dress code is smart but fashion-forward: Tabu is slightly more relaxed than traditional Mayfair, so smart trainers can work if the overall outfit is sharp. But don't push it — the door still has standards.",
    guestlistComparison:
      "Tabu does run a guestlist, and as a newer venue building its reputation, it can be slightly more accessible than the established Mayfair clubs. On a Thursday night, guestlist can genuinely work — you'll likely get in with a reduced cover charge around £15-20. But the guestlist experience at Tabu highlights exactly why tables make more sense for groups. The venue is compact, around 200 capacity, with a Japanese-underground design that's specifically built around the booth and table areas. The standing space is limited and often cramped, especially once the venue fills up after midnight.\n\nThe atmosphere that makes Tabu special — the dark lighting, the moody Japanese aesthetic, the intimate energy — is designed to be experienced from the tables. Standing by the bar in a 200-person venue, you're essentially watching other people enjoy the space the way it was intended. The hip-hop and RnB sounds better from the booth positions where the sound design was calibrated, and the visual impact of the interior loses its effect when you're squeezed between the bar and the wall.\n\nFor groups who care about the music and the vibe — which is the entire reason to choose Tabu over a generic Mayfair club — table booking is the move. At £1,000 minimum split across six to eight people, you're paying £125-170 each for a reserved spot in one of Mayfair's most distinctive venues, drinks included. Guestlist gets you through the door with a cover charge and bar-price drinks that will likely cost you £100+ per person anyway, minus the table, the service, and the actual experience the venue was built to deliver.",
    entryGuide:
      "Tabu's door operates differently from the old-guard Mayfair clubs. The dress code is smart but fashion-forward, which means the traditional Mayfair uniform of a blue shirt and brogues isn't necessarily enough. Tabu's crowd skews younger and more style-conscious — think fashion-week adjacent rather than finance-bro smart. Smart trainers can work here if the rest of the outfit is strong: a well-put-together look with designer trainers will get you in before a boring shirt-and-shoes combination. But this flexibility has limits. Sportswear is still out, casual is still out, and turning up looking like you got dressed in the dark won't fly.\n\nThe door team at Tabu pays attention to the overall energy of your group more than individual outfit checks. A group that looks like they're going to add to the atmosphere gets through easily. A group of six men in identical outfits looking like they're on a stag do will have problems regardless of how smart the shirts are. Mixed groups, people who look like they've thought about their outfit, and anyone who matches Tabu's fashion-forward, underground identity will have no trouble.\n\nWith a table booking, the door situation becomes straightforward. Priority entry means you name-check at the door and walk in, full group together. This matters more at Tabu than bigger venues because the compact size means they hit capacity early on Saturdays — general admission effectively closes while table bookings continue to walk in. Arrive between 10:30 PM and 11:30 PM. Green Park tube is three minutes away. Look sharp, look considered, and look like you belong in a venue that was inspired by late-night Tokyo rather than traditional Mayfair.",
    sections: [
      {
        heading: "Best Nights to Book at Tabu London",
        content:
          "Saturday is the headline night at Tabu — the fullest room, the most energy, and the strongest DJ lineups. Friday is excellent and tends to attract a slightly more local crowd versus Saturday's international mix. Thursday is the dark horse: lower minimums, a loyal crowd of regulars, and an atmosphere that punches above its weight thanks to the intimate venue size. For groups who care more about the music and vibe than being seen, Thursday at Tabu is genuinely one of the best nights out in Mayfair.",
      },
      {
        heading: "What Makes Tabu Different from Other Mayfair Clubs",
        content:
          "Most Mayfair clubs follow the same formula: gold accents, crystal chandeliers, and a generic luxury aesthetic. Tabu threw that playbook out. The Japanese underground-inspired design — dark lighting, rich textures, moody atmosphere reminiscent of a late-night Tokyo bar — creates a setting that feels completely separate from the rest of Mayfair. The music policy matches: hip-hop, RnB, UK rap, drill, and Afrobeats, leaning into the underground rather than the commercial. If every Mayfair club has started to blur together for you, Tabu is a genuine reset.",
      },
      {
        heading: "Birthday & Special Occasion Bookings at Tabu",
        content:
          "Tabu works brilliantly for birthdays, especially for groups in their mid-twenties to thirties who want a stylish setting without the theatrical productions of show-format venues. The intimate size means your group naturally becomes part of the room's energy rather than being lost in a cavernous space. We can arrange sparklers, birthday cakes, and dedicated table setups. The Japanese-inspired backdrop photographs exceptionally well — your Instagram will thank you. For milestone celebrations, a VIP table with a premium champagne package makes a statement.",
      },
    ],
    faqs: [
      {
        question: "How much does a table at Tabu London cost?",
        answer:
          "Floor tables start from £1,000 minimum spend. VIP tables start from £2,000. Pricing is competitive for a Mayfair venue, especially given the quality of the design and atmosphere. Message us on WhatsApp for exact pricing for your preferred date.",
      },
      {
        question: "How do I book a table at Tabu London?",
        answer:
          "Send us a WhatsApp message with your date, group size, and any occasion details. We'll confirm availability and pricing quickly. Tabu is an intimate venue with limited tables, so booking ahead — especially for Saturdays — is strongly recommended.",
      },
      {
        question: "What's the dress code at Tabu London?",
        answer:
          "Smart and fashion-forward. Tabu is more relaxed than traditional Mayfair clubs — smart trainers can work if the rest of the outfit is strong. But no sportswear, casual wear, or anything that looks like you didn't try. Think of it as Mayfair meets streetwear at its best.",
      },
      {
        question: "What music does Tabu London play?",
        answer:
          "Hip-hop, RnB, UK rap, drill, and Afrobeats. The music policy leans underground rather than commercial top-40. If you want deeper cuts alongside the big tracks, Tabu's DJs deliver. For house music, look at Maddox or BEAT instead.",
      },
      {
        question: "What nights is Tabu open?",
        answer:
          "Thursday, Friday, and Saturday. All three nights have strong energy thanks to the compact venue. Thursday is the value pick with lower minimums. Saturday is the busiest with the highest demand.",
      },
      {
        question: "How far in advance should I book Tabu?",
        answer:
          "For Saturday, book at least a week in advance — preferably two. The venue has limited capacity and tables sell out. Thursday and Friday can sometimes be arranged with shorter notice but earlier booking always means better table selection.",
      },
      {
        question: "Is Tabu good for groups who want hip-hop in Mayfair?",
        answer:
          "Tabu is specifically built for hip-hop fans who want Mayfair bottle service. Unlike clubs where hip-hop is one option on a mixed playlist, Tabu's entire identity is built around the genre. If your group lives for hip-hop, RnB, and Afrobeats, this is your venue.",
      },
    ],
    relatedBookingPages: [
      "luna-club-london-table-booking",
      "cuckoo-club-table-booking",
      "cirque-le-soir-table-booking",
      "dear-darling-table-booking",
    ],
    relatedBlogSlugs: [
      "mayfair-dress-code-what-to-wear",
      "how-much-does-bottle-service-cost-london",
      "mayfair-vs-shoreditch-nightlife",
    ],
  },

  // 5. Funky Buddha
  {
    bookingSlug: "funky-buddha-table-booking",
    clubSlug: "funky-buddha",
    metaTitle: "Funky Buddha Table Booking | Mayfair Icon, VIP from £1,000",
    metaDescription:
      "Book a VIP table at Funky Buddha Mayfair from £1,000. Legendary name, open-format music & classic Mayfair energy. WhatsApp us to book your table tonight.",
    h1: "Book a Table at Funky Buddha",
    heroSubheading:
      "One of Mayfair's most iconic club names, reborn on Berkeley Street. Open-format music, a well-dressed crowd, and the kind of classic Mayfair energy that made the original legendary.",
    pricingIntro:
      "Tables at Funky Buddha start from £1,000 minimum spend. This covers your drinks — spirits, champagne, or a mix from the bottle menu. The pricing is standard for a Mayfair club of this calibre, and the open-format music policy means your group gets variety without having to venue-hop. Friday and Saturday are the operating nights, with Saturday typically carrying the higher minimum.",
    vipUpsellPitch:
      "VIP tables start from £2,000 and give you premium positioning in the venue — more space, better sightlines, and priority bottle service. For groups celebrating an occasion or simply wanting the best experience, VIP at Funky Buddha delivers the classic Mayfair bottle service experience done properly. Pre-order a champagne package and have it waiting at your table when you arrive.",
    weekdayDeal:
      "Funky Buddha operates Friday and Saturday only. Friday tends to draw a more local, regular crowd and often has slightly lower minimum spends than Saturday. If you're flexible on dates, Friday gives you the full Funky Buddha atmosphere with less competition for prime tables.",
    arrivalGuide:
      "Funky Buddha is at 15 Berkeley Street in the heart of Mayfair. Doors open at 10:30 PM. With a table booking, arrive between 11:00 PM and midnight — you'll have priority entry so skip the general queue and give your name at the door. Green Park tube is the nearest station, about a 4-minute walk. The dress code is standard Mayfair smart: collared shirts and smart shoes for men, dressed-up for women. The door team will turn you away if you don't meet the standard.",
    guestlistComparison:
      "Funky Buddha is one of the Mayfair venues where guestlist can actually work on the right night. Friday evenings before midnight, guestlist gets you through the door with a cover charge of around £15-20 per person. The venue operates at a good capacity (around 300) and the open-format music means it draws a broad crowd, so guestlist availability tends to be decent outside of peak Saturday nights and special events. If you're a couple or a small group of three to four on a Friday, guestlist is a legitimate option here.\n\nWhere guestlist falls apart at Funky Buddha is groups. The moment you're trying to get six, eight, or twelve people in together, guestlist becomes a coordination headache. Not everyone arrives at the same time, the queue moves slowly, and there's always the risk that the door team decides the venue is full and starts turning guestlist names away. You end up with half your group inside and half stuck outside — a scenario that ruins more nights out in Mayfair than bad music ever will.\n\nThe table booking maths at Funky Buddha is straightforward. A £1,000 minimum for a group of eight works out to £125 each for guaranteed entry, a reserved table, personal service, and premium drinks. On guestlist, you're paying £20 entry plus drinks at bar prices — three or four rounds of cocktails later you've each spent £80-100 with nothing to show for it but a sore back from standing all night. For groups of five or more, the table is objectively better value and an incomparably better experience. Funky Buddha's open-format music and classic Mayfair energy are best enjoyed with your own space and a bottle on the table.",
    entryGuide:
      "Funky Buddha's door sits in the middle of the Mayfair strictness spectrum. It's not as selective as Tape or Scotch (which operate as members' clubs), but it's more discerning than a standard nightclub. The dress code is straightforward Mayfair smart: collared shirts and proper shoes for men, dressed-up for women. No trainers of any description — Funky Buddha doesn't have the fashion-forward flexibility of somewhere like Tabu where smart trainers might slide. Shorts, sportswear, and casual wear are non-starters. If you're in doubt, overdress rather than underdress.\n\nThe door team at Funky Buddha is experienced and consistent. They're looking for groups that look like they fit the Mayfair standard — well-dressed, sociable, and ready for a night out. Large all-male groups face more scrutiny than mixed groups, which is standard across Mayfair. The crowd inside tends to be a mix of Mayfair regulars, people who remember the original Funky Buddha name, and international visitors — it's a crowd that dresses well without being aggressively fashionable.\n\nWith a table booking, the door process is simple and stress-free. Give your name, your group is confirmed, and you're escorted past the queue to your table. This matters on Saturday nights when Berkeley Street gets busy and the general queue can stretch. For groups celebrating birthdays or occasions, the priority entry means everyone arrives together and you're settled at your table before the energy peaks. Arrive between 11:00 PM and midnight. Green Park tube is four minutes away.",
    sections: [
      {
        heading: "The Funky Buddha Legacy: Why This Name Matters",
        content:
          "The original Funky Buddha was one of the defining Mayfair clubs of its era — a venue where the music crossed every genre, the crowd was eclectic, and the nights were legendary. The rebranded venue on Berkeley Street carries that spirit into a modernised space with an open-format music policy that DJs adapt to the room. Hip-hop, house, RnB, Afrobeats, and commercial anthems all get airtime depending on the crowd and energy. If the original Funky Buddha was part of your nightlife history, the new version will feel familiar. If you're discovering the name for the first time, you're getting a Mayfair club that prioritises fun over pretension.",
      },
      {
        heading: "Why Open-Format Music Makes Funky Buddha Perfect for Groups",
        content:
          "The biggest challenge of booking a table for a mixed group is the music. Half your friends want hip-hop, the other half want house. At most clubs, someone's compromising. Funky Buddha's open-format policy solves this — DJs read the room and move between genres throughout the night. You'll hear RnB flow into house into Afrobeats into a commercial anthem, and the transitions feel natural rather than jarring. For birthday groups, work nights out, or any gathering where people have different tastes, this flexibility is genuinely valuable.",
      },
      {
        heading: "Birthday Bookings at Funky Buddha",
        content:
          "Funky Buddha's atmosphere lends itself well to birthday celebrations — the energy is high without being chaotic, and the open-format music means everyone in your group hears something they like. We can arrange cakes, sparklers, and a birthday setup at your table. Groups of 8-15 are the sweet spot for a single table. For larger birthdays, adjacent tables keep your party together. The VIP upgrade is worth considering for birthdays — more space, better positioning, and a premium feel that makes the guest of honour feel genuinely special.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Funky Buddha?",
        answer:
          "Tables start from £1,000 minimum spend. VIP tables start from £2,000. This covers premium spirits and champagne from the bottle menu. Prices may vary by night and event — WhatsApp us for exact quotes.",
      },
      {
        question: "What music does Funky Buddha play?",
        answer:
          "Open format. DJs move between hip-hop, house, RnB, Afrobeats, and commercial anthems based on the crowd and energy. It's the best option in Mayfair if your group has mixed musical tastes.",
      },
      {
        question: "Is Funky Buddha the same as the original?",
        answer:
          "The venue was previously operating as Luxx before rebranding to the iconic Funky Buddha name. The spirit is similar — eclectic, fun, well-dressed — but the venue has been updated and modernised. Same energy, fresh look.",
      },
      {
        question: "What's the dress code at Funky Buddha?",
        answer:
          "Standard Mayfair smart. Collared shirts and smart shoes for men. No sportswear, trainers, or shorts. Women should dress for a Mayfair night out. The door team enforces the code regardless of booking status.",
      },
      {
        question: "What nights is Funky Buddha open?",
        answer:
          "Friday and Saturday. Friday typically has a more local crowd and slightly lower minimums. Saturday is the bigger night with more demand and higher pricing.",
      },
      {
        question: "How do I book a table at Funky Buddha?",
        answer:
          "WhatsApp us with your date, group size, and any occasion details. We'll confirm availability and pricing within minutes. Weekend tables are popular so booking at least a week ahead is recommended.",
      },
    ],
    relatedBookingPages: [
      "cuckoo-club-table-booking",
      "tabu-london-table-booking",
      "maddox-club-table-booking",
      "selene-london-table-booking",
    ],
    relatedBlogSlugs: [
      "london-nightlife-first-timers",
      "mayfair-dress-code-what-to-wear",
      "best-clubs-for-birthday-london",
    ],
  },

  // 6. Cuckoo Club
  {
    bookingSlug: "cuckoo-club-table-booking",
    clubSlug: "cuckoo-club",
    metaTitle: "Cuckoo Club Table Booking | Two Floors, VIP from £1,000",
    metaDescription:
      "Book a VIP table at Cuckoo Club from £1,000. Two floors — house upstairs, hip-hop downstairs. The best of both in Mayfair. WhatsApp us to book now.",
    h1: "Book a Table at Cuckoo Club",
    heroSubheading:
      "Two floors, two vibes, one booking. House music upstairs, hip-hop and RnB in the basement. Cuckoo Club on Swallow Street has been getting Mayfair right for years.",
    pricingIntro:
      "Tables at Cuckoo Club start from £1,000 minimum spend. VIP tables and premium positions start from £2,000. You can book tables on either floor — the ground floor for house music or the basement for hip-hop and RnB. Your minimum spend covers premium spirits and champagne, with your personal server guiding you through the options.",
    vipUpsellPitch:
      "VIP tables from £2,000 get you the prime spots on either floor — the best positions next to the dance floor where the energy is highest. Basement VIP tables are the most in-demand (everyone wants to be in the hip-hop room with a prime seat), so book early if that's your preference. VIP includes a dedicated server and priority bottle selection.",
    weekdayDeal:
      "Tuesday and Thursday are the smart bookings at Cuckoo. Both nights run both floors with lower minimum spends than the weekend. Thursday in particular has built a loyal following — it's one of the strongest midweek nights in Mayfair. If your schedule allows it, Thursday at Cuckoo gives you the full two-floor experience at a friendlier price point.",
    arrivalGuide:
      "Cuckoo Club is at 58 Swallow Street, just off Regent Street in Mayfair. Doors open at 10:00 PM. Table bookings get priority entry — give your name at the door and you'll be escorted to your table. Arrive between 10:30 PM and 11:30 PM. Piccadilly Circus tube is a 2-minute walk. When booking, let us know if you want a ground floor table (house music) or a basement table (hip-hop) so we can secure the right position.",
    guestlistComparison:
      "Cuckoo Club is one of the more guestlist-friendly Mayfair venues, particularly on Tuesday and Thursday nights. The two-floor layout and 350-person capacity mean there's more room for general admission than at the smaller, more exclusive clubs. On a Tuesday or Thursday, guestlist will likely get you through the door with a cover charge around £15-20. You'll have access to both floors and can move between the house music upstairs and hip-hop downstairs. For a couple or a small group mid-week, this is a reasonable way to experience the venue.\n\nThe guestlist calculation changes on Friday and Saturday. The venue fills up faster, the door becomes more selective, and guestlist names get turned away once capacity is reached. Even when you get in, the experience as a general admission guest at a packed Cuckoo on a Saturday is standing room in the gaps between tables — and the best positions on both floors are occupied by table bookings. The basement hip-hop room, which is where most people want to be, is particularly tight on weekends. Standing in a packed basement trying to enjoy hip-hop while table guests have space to move and drinks being served is a lesson in why tables exist.\n\nCuckoo's two-floor layout actually makes the table booking case stronger than at single-room venues. When you book a table, you choose your floor — ground floor for house, basement for hip-hop — and you have a guaranteed base. But you still have access to both floors, so your group can explore. Without a table, you're roaming between two packed floors with no home base and no guarantee of finding space on either. A £1,000 table split across six to eight people costs less per head than a night of buying rounds at bar prices, and it comes with a reserved space on the floor you actually want to be on.",
    entryGuide:
      "Cuckoo Club strikes a good balance at the door — it's selective enough to maintain a quality crowd but not so exclusive that well-dressed groups face a genuine risk of rejection. The dress code is smart casual to smart, which in practice means collared shirts and smart shoes for men, and a proper going-out outfit for women. This is less demanding than the members' clubs (Tape, Scotch) but still firmly Mayfair — no trainers, no sportswear, no casual streetwear. The ground floor's house music crowd tends to dress slightly more polished, while the basement's hip-hop crowd can lean a touch more fashion-forward, but the entry standard is the same.\n\nThe door team at Cuckoo has been doing this for years and they're efficient. Groups that look well-dressed, are in a good mood, and don't cause a fuss get through quickly. The club's longevity in Mayfair means the door operation is well-oiled rather than inconsistent. The most common issue is groups arriving too late on a Saturday — after midnight, general admission can close entirely if both floors are at capacity. Tuesday and Thursday nights are the most accessible, with shorter queues and a more relaxed door.\n\nWith a table booking, you bypass the queue entirely. Name-check at the door, confirmation against the list, and you're walked to your table on your chosen floor. This is particularly valuable at Cuckoo because you're guaranteed your preferred floor — if you've booked a basement table for hip-hop, you know you'll have space there even when the room is packed. Arrive between 10:30 PM and 11:30 PM. Piccadilly Circus is a two-minute walk, making Cuckoo one of the most accessible Mayfair clubs by transport.",
    sections: [
      {
        heading: "Ground Floor vs Basement: Which Room Should You Book?",
        content:
          "This is the key decision at Cuckoo. The ground floor is a stylish lounge-to-club space playing deep house, tech house, and sophisticated electronic music. It's more conversational earlier in the night and builds into a proper club atmosphere. The basement is dedicated hip-hop, RnB, and Afrobeats territory — higher energy, darker, and louder from the start. If your group is split, book the ground floor and visit the basement during the night — your table booking gives you access to both. If everyone wants hip-hop, go straight for a basement table. For corporate groups or date-adjacent nights, the ground floor's more sophisticated tone usually works better.",
      },
      {
        heading: "Why Cuckoo Club Has Lasted So Long in Mayfair",
        content:
          "Mayfair clubs come and go. Cuckoo has outlasted most of them because the two-floor formula works — it hedges your bets on music, gives groups options, and creates natural movement throughout the night. The crowd reflects this longevity: a core of regulars who've been coming for years, mixed with new visitors who've heard it recommended. The atmosphere is polished but approachable — less pretentious than the ultra-exclusive members' clubs, more curated than the high-volume party venues. It's the reliable choice in Mayfair, and reliability has real value when you're spending £1,000+.",
      },
      {
        heading: "Group Booking Guide for Cuckoo Club",
        content:
          "Cuckoo's two-floor layout makes it particularly strong for larger groups where people have different preferences. Book a table on one floor as your base, then let people explore the other room freely. For groups of 10-15, a single table works well. For 15-20, adjacent tables on the same floor keep you together. Groups over 20 can even split across floors with a table on each — the staircase between them is quick and easy. For mixed birthday groups where half the crowd wants to dance to house and the other half wants hip-hop, Cuckoo is the obvious solution.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Cuckoo Club?",
        answer:
          "Tables start from £1,000 minimum spend. VIP and premium positions start from £2,000. Prices vary by night — Tuesday and Thursday are typically more accessible than Friday and Saturday.",
      },
      {
        question: "Can I choose which floor my table is on?",
        answer:
          "Yes. When you book through us, specify whether you want the ground floor (house music) or the basement (hip-hop and RnB). Basement tables are more popular so book early if that's your preference. Either way, you have access to both floors.",
      },
      {
        question: "What's the best night to visit Cuckoo Club?",
        answer:
          "Thursday and Friday are the strongest nights. Thursday is the insider pick with a loyal crowd and lower minimums. Saturday is the biggest night. Tuesday is the most accessible in terms of pricing and is surprisingly strong for a weeknight.",
      },
      {
        question: "What's the dress code at Cuckoo Club?",
        answer:
          "Smart casual to smart. Collared shirts and smart shoes for men. No sportswear, trainers, or casual wear. Women should dress for a Mayfair night. The dress code is enforced but isn't as strict as members' clubs like Tape.",
      },
      {
        question: "Is Cuckoo Club good for birthdays?",
        answer:
          "Excellent, especially if your group has mixed music tastes. The two-floor layout means everyone's happy. We can arrange cakes, sparklers, and birthday packages. The basement is particularly popular for birthday groups who want a high-energy hip-hop atmosphere.",
      },
      {
        question: "How do I book a table at Cuckoo Club?",
        answer:
          "WhatsApp us with your date, group size, preferred floor, and any occasion details. We'll confirm availability and pricing quickly. Midweek tables can sometimes be booked at short notice; weekends need at least a week's lead time.",
      },
    ],
    relatedBookingPages: [
      "funky-buddha-table-booking",
      "tabu-london-table-booking",
      "maddox-club-table-booking",
      "dear-darling-table-booking",
    ],
    relatedBlogSlugs: [
      "mayfair-vs-shoreditch-nightlife",
      "how-much-does-bottle-service-cost-london",
      "london-nightlife-first-timers",
    ],
  },

  // 7. Scotch of St James
  {
    bookingSlug: "scotch-of-st-james-table-booking",
    clubSlug: "scotch-of-st-james",
    metaTitle: "Scotch of St James Table Booking | Legendary Music Venue from £1,000",
    metaDescription:
      "Book a VIP table at Scotch of St James from £1,000. Historic music venue, eclectic DJs & craft cocktails in St James's. WhatsApp us for availability.",
    h1: "Book a Table at Scotch of St James",
    heroSubheading:
      "The venue where Hendrix, The Beatles, and The Stones used to party — reborn as an intimate members' club on Mason's Yard. Eclectic music, serious cocktails, and an atmosphere that money alone can't buy.",
    pricingIntro:
      "Tables at Scotch of St James start from £1,000 minimum spend. VIP tables start from £2,000. Unlike most clubs where the spend is purely about bottles, Scotch's cocktail programme means you can split between cocktails and bottle service — the bartenders here are genuinely talented. The intimate capacity (under 200) means tables are limited, so booking ahead is essential.",
    vipUpsellPitch:
      "VIP tables from £2,000 place you in the most coveted positions in one of London's most historically significant venues. The space is small enough that every table feels close to the action, but VIP gives you the definitive positions — more space, the best sound, and a setup that matches the prestige of the room. If you're booking Scotch, you're already choosing quality over quantity. VIP takes that philosophy further.",
    weekdayDeal:
      "Wednesday and Thursday at Scotch are genuinely special. The crowd is smaller and more intimate, the DJs often play deeper cuts, and the atmosphere is closer to a private party than a club night. Minimum spends tend to be lower on these nights. If you're a music lover who wants to actually hear the DJ's craft without a packed room, midweek at Scotch is one of London's best-kept secrets.",
    arrivalGuide:
      "Scotch of St James is at 13 Mason's Yard in St James's — a quiet, tucked-away courtyard that feels deliberately hidden. That's part of the charm. Doors open at 10:00 PM. With a table booking through us, you get guest access to this members' club. Arrive between 10:30 PM and 11:30 PM. Green Park tube is the nearest station, about a 5-minute walk. The dress code is smart but with personality — Scotch values individual style over formal uniformity.",
    guestlistComparison:
      "Scotch of St James operates as a members' club, and that fundamentally changes the guestlist equation. There is no public guestlist in the way most people understand it. You can't text a promoter and get your name on a list — access is controlled through membership and table bookings. Some promoters claim guestlist access to Scotch, but the reality is that the door team recognises members and checks bookings, and everyone else is at the mercy of whoever's managing the door that night. On a quiet Wednesday you might talk your way in, but it's never guaranteed and you'll likely pay a premium cover charge for the privilege.\n\nWhat makes the guestlist question particularly irrelevant at Scotch is the nature of the venue. This is an intimate, sub-200-capacity space where the cocktail programme is genuinely excellent and the music is curated by DJs selected for taste. The experience is built around sitting with a drink in your hand, listening to soul or funk or disco, and being part of a room that feels like the best private party you've ever attended. Standing at the bar with no seat in a room that small isn't a fallback option — it's awkward.\n\nA table booking at Scotch starts from £1,000 and grants your group guest access to the members' club. This is the only reliable route in for non-members, and it comes with the full experience: reserved seating, personal service, premium spirits and cocktails against your minimum spend, and a spot in one of London's most historically significant music venues. The cocktail programme at Scotch means your minimum spend goes further than at bottle-only venues — genuinely crafted drinks rather than just pouring from a bottle.",
    entryGuide:
      "Scotch of St James is hidden on Mason's Yard in St James's, down a quiet courtyard that most people walk past without noticing. Finding it is the first test; getting in is the second. As a members' club, the door isn't a standard Mayfair queue-and-check operation. Members walk in. Table bookings are confirmed at the door. Everyone else is assessed on a case-by-case basis, and on busy nights that assessment is heavily weighted towards 'no.' The venue holds under 200 people and they'd rather keep it uncrowded than fill the room with walk-ins.\n\nThe dress code at Scotch is unique in Mayfair. While most clubs want smart-formal, Scotch values personality and style. The baseline is smart-casual, but creative dressing is encouraged — think vintage, fashion-forward, or effortfully individual rather than corporate. A well-dressed musician will get more respect at the door than a man in a generic business suit. This reflects the venue's heritage: this is where Hendrix and the Stones used to drink, and the modern door team looks for people who carry that same creative energy. No sportswear, no very casual attire, but the interpretation of 'smart' here is broader than anywhere else in Mayfair.\n\nA table booking through us gives your group guaranteed guest access. You arrive at Mason's Yard, find the entrance (look for the discreet signage), give your name, and you're in. The process is low-key and understated, which matches the venue's character. Arrive between 10:30 PM and 11:30 PM — earlier on midweek nights when the atmosphere is more conversational, closer to 11:00 PM on weekends when the music builds later. Green Park tube is five minutes away. Dress with personality and arrive with the expectation of a genuinely special night rather than a standard club experience.",
    sections: [
      {
        heading: "The Musical Heritage of Scotch of St James",
        content:
          "Scotch of St James isn't trading on a vague historical connection — this venue was genuinely one of the most important music spots in 1960s London. The original club was where rock and roll royalty came to party, jam, and be seen. That musical DNA runs through everything the modern venue does: the DJ bookings prioritise talent and taste over Instagram followers, the sound system is built for listening as much as dancing, and the eclectic music policy (soul, funk, disco, hip-hop, rock) reflects a venue that cares about the playlist. For music lovers, booking a table here isn't just a night out — it's a pilgrimage.",
      },
      {
        heading: "Cocktails & Bottle Service at Scotch",
        content:
          "Most Mayfair clubs treat cocktails as an afterthought — the real business is bottles. Scotch is different. The cocktail programme is taken seriously, with bartenders who know their craft and a menu that rewards exploration. You can absolutely go the traditional bottle service route (premium spirits and champagne are all available), but the option to work cocktails into your minimum spend sets Scotch apart. For groups who appreciate a well-made drink as much as a big bottle with sparklers, this flexibility is a genuine selling point.",
      },
      {
        heading: "Best Nights to Experience Scotch of St James",
        content:
          "Friday and Saturday deliver the fullest rooms and highest energy. But the real insider move at Scotch is Wednesday or Thursday. The smaller crowd means the atmosphere becomes almost private-party-like, the DJs play longer sets with more depth, and you'll have conversations with people who are there because they genuinely love the venue rather than because it's the weekend and they need somewhere to go. For couples, smaller groups, and music purists, midweek Scotch is one of London's finest nights out.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Scotch of St James?",
        answer:
          "Tables start from £1,000 minimum spend. VIP tables start from £2,000. The intimate venue size means tables are limited — early booking is important, especially for weekends.",
      },
      {
        question: "Is Scotch of St James a members' club?",
        answer:
          "Yes, Scotch operates as a members' club. When you book a table through us, we arrange guest access for your entire group. You get the full members' club experience without needing your own membership.",
      },
      {
        question: "What music does Scotch of St James play?",
        answer:
          "Eclectic and quality-driven. Expect soul, funk, disco, hip-hop, and rock depending on the night and the DJ. The music is curated for taste, not commercial appeal. If you care about what's playing, you'll appreciate Scotch.",
      },
      {
        question: "What's the dress code at Scotch?",
        answer:
          "Smart with personality. Scotch values individual style over strict formality. Smart-casual is the baseline but fashion-forward or creative dressing is encouraged. No sportswear or very casual attire. Think effortfully cool rather than corporate smart.",
      },
      {
        question: "What nights is Scotch open?",
        answer:
          "Wednesday through Saturday. Weekends are busier but midweek nights (Wednesday and Thursday) offer a more intimate, music-focused experience with lower minimum spends.",
      },
      {
        question: "Is Scotch good for a date night?",
        answer:
          "One of the best options in London. The intimate size, quality cocktails, eclectic music, and historical atmosphere create a setting that's genuinely interesting and memorable. Midweek is particularly strong for dates — intimate, conversational, and effortlessly cool.",
      },
      {
        question: "How far in advance should I book Scotch?",
        answer:
          "For Friday and Saturday, at least 1-2 weeks ahead. The venue holds under 200 people so table inventory is very limited. Wednesday and Thursday can sometimes be arranged at shorter notice. Contact us on WhatsApp and we'll check availability immediately.",
      },
    ],
    relatedBookingPages: [
      "tape-london-table-booking",
      "the-box-london-table-booking",
      "dear-darling-table-booking",
      "maddox-club-table-booking",
    ],
    relatedBlogSlugs: [
      "how-to-get-into-exclusive-london-clubs",
      "celebrity-clubs-london",
      "best-champagne-bottle-service",
    ],
  },

  // 8. Dear Darling
  {
    bookingSlug: "dear-darling-table-booking",
    clubSlug: "dear-darling",
    metaTitle: "Dear Darling Table Booking | Mayfair's Newest Club from £1,000",
    metaDescription:
      "Book a VIP table at Dear Darling Mayfair from £1,000. Design-led cocktail bar meets late-night club. Fashion-forward crowd. WhatsApp us for instant booking.",
    h1: "Book a Table at Dear Darling",
    heroSubheading:
      "Mayfair's most design-conscious newcomer. Craft cocktails early, hip-hop and RnB late, and a fashion-forward crowd that makes every night feel curated.",
    pricingIntro:
      "Tables at Dear Darling start from £1,000 minimum spend. VIP positions start from £2,000. The spend covers premium spirits and champagne, but Dear Darling's cocktail programme is genuinely strong — worth working into your order rather than going straight to bottles. Your server will guide you through the options and help you make the most of your minimum spend.",
    vipUpsellPitch:
      "VIP tables from £2,000 give you the best positions in one of Mayfair's most beautifully designed venues. Dear Darling's VIP setup matches the attention to detail in the rest of the space — premium positioning, extra space, and a level of service that feels personal rather than transactional. For groups who chose Dear Darling specifically for the design and atmosphere, VIP ensures you experience it at its best.",
    weekdayDeal:
      "Thursday is Dear Darling's sweet spot. The venue transitions beautifully from cocktail bar to club on all three nights (Thursday to Saturday), but Thursday's crowd tends to be more discerning — regulars, fashion industry people, and couples who appreciate a venue where every detail has been considered. Minimum spends are lower and table availability is better than the weekend.",
    arrivalGuide:
      "Dear Darling is in Mayfair. With a table booking, you'll have priority entry for your group. The venue transitions from cocktail bar to club as the night progresses, so arriving earlier (around 10:00-10:30 PM) lets you enjoy the cocktail bar phase before the energy shifts into full club mode around 11:30 PM. Dress code is smart and fashion-forward — the crowd here puts effort in, so match the energy. Green Park tube is nearby.",
    guestlistComparison:
      "Dear Darling, as a newer addition to the Mayfair circuit, does offer guestlist on some nights — particularly Thursdays when the venue is still building its regular crowd. Getting on a guestlist can get you through the door with a cover charge around £15-20, and during the earlier cocktail bar phase (before 11:00 PM) general admission is usually straightforward. The venue is still establishing itself, so the door isn't as battle-hardened as somewhere like Cuckoo or Cirque that have been turning people away for years.\n\nThe problem with guestlist at Dear Darling is that you miss the venue's best feature. The cocktail-to-club transition is designed as a journey — you start in a beautifully designed space with genuinely excellent cocktails, the lighting shifts, the music builds, and by midnight you're in a proper hip-hop and RnB club. Experiencing this from a table, with craft cocktails flowing into bottle service as the night evolves, is the way Dear Darling was designed to be enjoyed. Standing at the bar, you get fragments of this experience rather than the full arc.\n\nFor couples on a date, guestlist during the cocktail bar phase can work — it's a beautiful space to have a drink in, and if you arrive before 10:30 PM the atmosphere is relaxed and conversational. But for groups of four or more, a table booking makes dramatically more sense. The £1,000 minimum lets you start with rounds of craft cocktails (which count towards your spend) before moving to bottles as the club energy kicks in. You're experiencing the full Dear Darling concept rather than standing on the edges of it. And because the venue's design is genuinely one of its strongest selling points, you want to be positioned to appreciate it properly.",
    entryGuide:
      "Dear Darling's door reflects its identity as a design-conscious, fashion-forward venue. The dress code is smart with an emphasis on considered style — the crowd here tends to be late twenties to thirties, creative-adjacent, and dressed like they thought about their outfit rather than just grabbing the nearest smart shirt. Men should aim for smart with a point of interest: a well-cut jacket, interesting shoes, or a look that shows personality beyond the basic Mayfair uniform. Women dress elegantly with a fashion edge. Smart trainers can work if the outfit around them is polished, but this isn't a given — it depends on the overall look.\n\nThe dual personality of the venue affects when and how the door operates. During the earlier cocktail bar hours (before 11:00 PM), the atmosphere is more relaxed and the door is correspondingly accessible. As the venue transitions to club mode, the door tightens — the team is looking to maintain the quality of crowd that Dear Darling has cultivated since opening. Fashion industry regulars, creative professionals, and couples who chose the venue for its design and atmosphere set the tone, and the door team filters for people who add to that energy.\n\nWith a table booking, you get the best of both phases. Priority entry means you can arrive during the cocktail bar phase — around 10:00-10:30 PM — settle into your table with a round of craft cocktails, and experience the full transition into club mode without ever worrying about the door. This early arrival is actually a genuine advantage at Dear Darling, not just a logistical detail: the cocktail bar phase is a highlight in its own right, and most general admission guests who arrive after 11:30 PM miss it entirely. Green Park tube is the nearest station.",
    sections: [
      {
        heading: "The Cocktail-to-Club Transition at Dear Darling",
        content:
          "What sets Dear Darling apart from most Mayfair clubs is the dual personality. Early in the evening, it operates as a genuine cocktail bar — well-crafted drinks, warm lighting, and an atmosphere that's conversational and sophisticated. As the night progresses, the lights drop, the music volume increases, and the space transforms into a proper hip-hop and RnB club. This transition is seamless and intentional. For groups who want a complete evening in one venue — starting with quality cocktails before moving into a late-night party — Dear Darling delivers both halves without compromising on either.",
      },
      {
        heading: "Date Nights & Couples at Dear Darling",
        content:
          "Dear Darling is one of the best date-night venues in Mayfair. The cocktail bar phase gives you a genuine, intimate experience — good drinks, beautiful surroundings, and the ability to actually hear each other talk. If the chemistry is right and you want to stay, the club transition means you don't need to go anywhere else. The design-led interior is also significantly more interesting than the standard Mayfair club aesthetic, which gives you something to talk about beyond the drinks. For a date that can flex from civilised drinks to a late-night party, this is the move.",
      },
      {
        heading: "Why Dear Darling Appeals to the Fashion Crowd",
        content:
          "Dear Darling has attracted a fashion-conscious, design-aware crowd since opening — and that's by design. The interior uses warm tones, textured surfaces, and lighting that shifts with the night's mood. The music policy (hip-hop, RnB, Afrobeats) is curated rather than generic. The overall experience feels considered rather than thrown together. This attention to detail resonates with people who notice these things — creatives, designers, fashion industry regulars — and their presence raises the atmospheric bar for everyone in the room.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Dear Darling?",
        answer:
          "Tables start from £1,000 minimum spend. VIP tables start from £2,000. The pricing is competitive for Mayfair and the cocktail programme means your spend goes further if you mix cocktails and bottles.",
      },
      {
        question: "What's the vibe at Dear Darling?",
        answer:
          "Stylish and energetic without being chaotic. It transitions from a sophisticated cocktail bar early in the evening to a proper hip-hop and RnB club later. The crowd is well-dressed, fashion-forward, and predominantly late twenties to thirties.",
      },
      {
        question: "What nights is Dear Darling open?",
        answer:
          "Thursday, Friday, and Saturday. Thursday is the insider pick — strong crowd, lower minimums. Saturday is the biggest night. All three maintain a good atmosphere thanks to the venue's size and design.",
      },
      {
        question: "Is Dear Darling good for a date?",
        answer:
          "Arguably the best date-night club in Mayfair. The cocktail bar phase is intimate and conversational. The club transition means you can extend the night without moving venues. The design is genuinely beautiful. Thursday is ideal for dates.",
      },
      {
        question: "What's the dress code at Dear Darling?",
        answer:
          "Smart and fashion-forward. The crowd here makes an effort. Smart shoes and collared shirts for men, dressed-up for women. The vibe is more fashion-aware than traditional Mayfair — think considered style rather than just smart.",
      },
      {
        question: "How do I book a table at Dear Darling?",
        answer:
          "WhatsApp us with your preferred date, group size, and any occasion details. We'll confirm availability and pricing. As a newer venue with growing demand, booking at least a week ahead for weekends is recommended.",
      },
      {
        question: "Can I start with cocktails and then have bottle service?",
        answer:
          "Absolutely — that's one of the best ways to experience Dear Darling. Arrive during the cocktail bar phase, enjoy a few rounds of craft cocktails, and then transition to bottle service as the club kicks in. Your minimum spend applies to both cocktails and bottles.",
      },
    ],
    relatedBookingPages: [
      "tabu-london-table-booking",
      "scotch-of-st-james-table-booking",
      "luna-club-london-table-booking",
      "cuckoo-club-table-booking",
    ],
    relatedBlogSlugs: [
      "dear-darling-mayfair-guide",
      "mayfair-dress-code-what-to-wear",
      "best-champagne-bottle-service",
    ],
  },

  // 9. Maddox
  {
    bookingSlug: "maddox-club-table-booking",
    clubSlug: "maddox",
    metaTitle: "Maddox Club Table Booking | Dinner & Club VIP from £1,000",
    metaDescription:
      "Book a VIP table at Maddox from £1,000. Italian fine dining + late-night house music under one roof in Mayfair. WhatsApp us for dinner-to-club packages.",
    h1: "Book a Table at Maddox Club",
    heroSubheading:
      "The only venue in Mayfair where Italian fine dining seamlessly becomes late-night house music and bottle service. Dinner, drinks, dancing — all without leaving the building.",
    pricingIntro:
      "Club tables at Maddox start from £1,000 minimum spend, covering your drinks for the night. Many groups also book dinner at the restaurant first (separate pricing) before transitioning to bottle service — this dinner-to-club combination is Maddox's signature experience. VIP tables start from £2,000. The music is house-focused, the atmosphere is sophisticated, and the crowd reflects both.",
    vipUpsellPitch:
      "VIP tables from £2,000 put you in the prime positions as the restaurant transforms into a club. More space, a dedicated server who knows the menu inside out, and positioning that works whether you're dancing or conversing. For client entertainment or special occasions where you want the dinner-to-club transition to feel seamless and impressive, VIP is the way to go. We can pre-arrange your bottle selection and even coordinate your dinner booking to flow perfectly into the club portion.",
    weekdayDeal:
      "Thursday is the entry point to Maddox. The dinner service runs and the club follows, but with lower minimum spends than Friday or Saturday. The Thursday crowd tends to be professionals winding down the working week — polished, sociable, and there for the house music as much as the bottles. If you're considering the dinner-to-club combination, Thursday gives you the full experience at the most accessible price.",
    arrivalGuide:
      "Maddox is at 3-5 Mill Street in Mayfair. If you're doing the dinner-to-club combination, the restaurant opens from 7:00 PM — book your dinner for 8:00-9:00 PM and you'll be perfectly positioned as the club element starts at 10:30 PM. For club-only bookings, arrive between 10:30 PM and 11:30 PM. Table bookings include priority entry. Oxford Circus and Bond Street tubes are both close. Dress smart — this is one of the more upscale venues in Mayfair and jackets are encouraged for men.",
    guestlistComparison:
      "Maddox doesn't really fit the traditional guestlist model because the venue operates as a restaurant-nightclub hybrid. During the dinner hours, you're booking a restaurant table (separate from the club). For the club element that starts around 10:30 PM, there is some guestlist availability, but the nature of Maddox means the club fills significantly with dinner guests who decide to stay. By the time the club is in full swing, a large portion of the room is already occupied by people who transitioned from dinner — and they have priority.\n\nThe guestlist calculation at Maddox is further complicated by the music policy. House music attracts a crowd that tends to be slightly older, more sophisticated, and less interested in standing around at a bar. The people who choose Maddox specifically for its deep house and Italian dining combination generally book tables. General admission at Maddox on a Saturday night often means standing in limited space while the table areas — which take up most of the venue — are occupied by groups who planned ahead.\n\nThe smarter play at Maddox is to lean into what makes the venue unique. Book dinner at the restaurant, then transition to a club table for bottle service. You get the full Maddox experience: fine Italian dining flowing seamlessly into house music and champagne. If you only want the club portion, a table from £1,000 puts you in the best positions with dedicated service. For corporate entertaining or anniversaries, the dinner-to-club table combination is genuinely one of the most impressive evenings you can arrange in Mayfair, and it's only available through booking.",
    entryGuide:
      "Maddox is one of the more upscale venues in Mayfair, and the dress code reflects the fine-dining element. This isn't a club that happens to serve food — it's a restaurant that transforms into a club, and the standard is set by the restaurant end. Men should wear smart shoes as a minimum, with jackets encouraged (not required, but you'll feel underdressed without one on a Saturday). Women should dress elegantly — cocktail dresses, smart separates, or anything you'd wear to a high-end restaurant. No trainers of any kind, no streetwear, no casual wear. The Maddox crowd dresses for dinner and stays dressed for the club.\n\nThe door at Maddox has a slightly different dynamic because of the dinner element. Many guests enter through the restaurant before transitioning to the club, so the club door isn't the frantic queue you see at other Mayfair venues. This can create a false sense of accessibility — the door is still selective for club-only guests, and the team is looking for people who match the sophisticated, house-music-loving crowd already inside. Groups that look like they're after a house music night and are dressed for a high-end evening will have no trouble. Groups that look like they picked the first club on the map will get filtered.\n\nWith a table booking — particularly the dinner-to-club combination — entry is seamless. You arrive for dinner, enjoy the restaurant experience, and as the lights shift and the DJ takes over, you're already inside with your evening naturally transitioning to the club phase. For club-only bookings, priority entry means a quick name-check at the door and you're escorted to your table. Arrive between 10:30 PM and 11:30 PM for the club element. Oxford Circus and Bond Street tubes are both close.",
    sections: [
      {
        heading: "The Dinner-to-Club Experience at Maddox",
        content:
          "Maddox's signature experience is starting with Italian fine dining and staying as the venue transforms into a house-music-focused nightclub. This isn't a gimmick — the restaurant is genuinely excellent and the club transition is seamless. You finish your meal, the lights shift, the DJ takes over, and suddenly you're in one of Mayfair's best house music venues without having moved. For groups who hate the logistics of moving from restaurant to club, Maddox eliminates the gap. We can coordinate both bookings so your evening flows naturally. The dinner minimum spend and club minimum spend are separate, so budget accordingly.",
      },
      {
        heading: "Corporate & Client Entertainment at Maddox",
        content:
          "Maddox is the strongest option in Mayfair for corporate entertaining. The dinner element gives your evening structure and professionalism, the transition to the club adds excitement, and the house music policy keeps things sophisticated without tipping into the louder, harder energy of hip-hop venues. Clients get a genuinely impressive experience — fine dining followed by VIP bottle service — in a single booking. Groups of 6-12 work best for corporate nights. We can pre-arrange menus, bottle selections, and table positioning so everything runs smoothly.",
      },
      {
        heading: "House Music Lovers: Why Maddox Is Your Venue",
        content:
          "If your group is into house music, Maddox is one of the few Mayfair clubs that makes it the headline genre rather than a secondary offering. The music policy spans deep house, tech house, and commercial house with occasional soulful sets. The DJs are selected for their ability to read a room that's transitioning from dinner to dancing — the sets build gradually, starting atmospheric and deepening as the night goes on. For anyone who's been to Mayfair clubs and found the hip-hop rotation predictable, Maddox offers a genuinely different sonic experience.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Maddox?",
        answer:
          "Club tables start from £1,000 minimum spend. VIP positions start from £2,000. Dinner bookings at the restaurant are priced separately. Many guests combine both — we can arrange the full dinner-to-club experience.",
      },
      {
        question: "Can I book dinner and bottle service together?",
        answer:
          "Yes, and it's the best way to experience Maddox. We coordinate your dinner reservation and club table booking so the transition is seamless. Just tell us your group size and preferred timing and we'll handle both.",
      },
      {
        question: "What type of music does Maddox play?",
        answer:
          "House music — deep house, tech house, and commercial house. The music is sophisticated and fits the dining-to-clubbing concept. If you're specifically looking for hip-hop, Tabu or Cuckoo's basement would be better fits.",
      },
      {
        question: "What's the dress code at Maddox?",
        answer:
          "Smart. This is one of Mayfair's more upscale venues. Jackets are encouraged for men, smart shoes are essential. Women should dress elegantly. Think fine-dining dress code that carries into the night.",
      },
      {
        question: "What nights is Maddox open?",
        answer:
          "The club runs Thursday, Friday, and Saturday. The restaurant operates more broadly. Thursday is the most accessible night in terms of pricing. Friday and Saturday have higher minimums and more competition for tables.",
      },
      {
        question: "Is Maddox good for an anniversary or special date?",
        answer:
          "Ideal. Start with Italian fine dining, then transition to house music and bottle service. The evening has a natural arc that feels planned and impressive. For anniversaries, a VIP table after dinner adds the finishing touch.",
      },
    ],
    relatedBookingPages: [
      "cuckoo-club-table-booking",
      "beat-london-table-booking",
      "funky-buddha-table-booking",
      "scotch-of-st-james-table-booking",
    ],
    relatedBlogSlugs: [
      "corporate-event-entertainment-london",
      "how-much-does-bottle-service-cost-london",
      "best-champagne-bottle-service",
    ],
  },

  // 10. The Box
  {
    bookingSlug: "the-box-london-table-booking",
    clubSlug: "the-box",
    metaTitle: "The Box London Table Booking | Avant-Garde Shows from £1,500",
    metaDescription:
      "Book a VIP table at The Box Soho from £1,500. London's most provocative nightclub — burlesque, cabaret & avant-garde. WhatsApp us for guaranteed entry.",
    h1: "Book a Table at The Box London",
    heroSubheading:
      "London's most daring nightclub on Walker's Court in Soho. Provocative performances, burlesque, avant-garde theatre, and a door that turns away more people than it lets in. A table is your guaranteed way inside.",
    pricingIntro:
      "Tables at The Box start from £1,500 minimum spend. VIP and premium positions start from £3,000. The higher price point reflects both the exclusivity of the venue and the production quality of the live performances. This isn't just bottle service — you're paying for access to an experience that most people in London will never see. Your spend covers premium spirits and champagne, served by dedicated table staff.",
    vipUpsellPitch:
      "VIP tables from £3,000 give you front-row positions for performances that range from breathtaking to genuinely shocking. At The Box, where you sit determines what you see — VIP tables are positioned so the acts perform directly to you. The performances are intimate, provocative, and designed for close-up viewing. If you're booking The Box, VIP is the difference between attending the show and being in the show.",
    weekdayDeal:
      "Wednesday and Thursday at The Box offer the same provocative performances with slightly lower minimum spends and better table availability. The crowd on these nights tends to be more creative and fashion-forward — industry people, artists, and in-the-know visitors rather than the weekend tourist contingent. Thursday in particular is a favourite among Box regulars. The performances are just as daring, the atmosphere is more intimate, and the value is noticeably better.",
    arrivalGuide:
      "The Box is at 11-12 Walker's Court in Soho — a narrow alley off Brewer Street that's easy to miss if you don't know where you're going. That's intentional. Doors open at 10:30 PM. With a table booking through us, you'll bypass The Box's notoriously selective door — give your name and your group is in. Arrive by 11:00 PM to catch the early performances. Leicester Square and Piccadilly Circus tubes are both nearby. Dress creatively — The Box rewards fashion-forward, individual style. Smart is the minimum; creative is preferred.",
    guestlistComparison:
      "Let's be direct: there is no functioning guestlist at The Box in any normal sense of the word. The venue has one of the most notoriously selective doors in London, and 'getting on the guestlist' isn't a recognised path inside. Promoters who claim they can get you on The Box's guestlist are either working a different venue or selling something that doesn't exist. The door team turns away more people than it admits on any given night, and having a name on a list that the door team doesn't recognise or respect is meaningless. People queue for hours on Walker's Court and get turned away. That's not an exaggeration — it's a regular occurrence.\n\nThe Box's exclusivity is the product, not a side effect. The intimate 200-person capacity, the provocative performances, the creative crowd — all of this depends on the door team ruthlessly controlling who enters the room. The performers are doing acts designed for a sophisticated, open-minded, creatively dressed audience. Filling the room with general admission guestlist traffic would destroy the very thing that makes The Box worth going to. The venue understands this, which is why the door operates the way it does.\n\nA table booking starting from £1,500 is the only reliable way to experience The Box if you're not a recognised regular or connected to the creative industry crowd that forms the venue's core. Your booking guarantees entry for your group, puts you in a position to see the performances properly, and gives you personal table service in a room where most people in London will never set foot. There is no cheaper alternative that actually works. Either you book a table and you're part of the night, or you join the queue on Walker's Court and hope — which is not a strategy anyone should spend a Saturday night on.",
    entryGuide:
      "The Box's door on Walker's Court is legendary for a reason. It's not selective in the Mayfair sense of wanting smart shoes and a collared shirt. It's selective in the New York members' club sense of wanting people who look interesting, creative, and like they belong in a room full of avant-garde performance art. The dress code is officially 'creative and fashionable,' and the door team interprets this with genuine intention. A standard Mayfair smart outfit — blue shirt, dark trousers, brogues — might get you into every other club in this guide, but it could easily get you turned away at The Box. They want personality. They want fashion-forward. They want people who look like they chose their outfit because it expresses something, not because it meets a minimum standard.\n\nThe door team at The Box is not playing a power game — they're curating a room for performances that are genuinely provocative and boundary-pushing. The acts need an audience that can handle them, appreciate them, and add to the atmosphere. This means the door looks for creative types, fashion industry people, artists, and anyone whose presence in the room feels additive rather than dilutive. Large groups of men in matching outfits looking for a standard night out will struggle. Mixed groups with creative energy, couples who look like they've been to gallery openings, and individuals with genuine style will do better.\n\nWith a table booking through us, your group gets guaranteed entry — but the dress code still applies. The door team will assess your group's appearance even with a confirmed booking, and they have been known to refuse entry to table guests who don't meet the creative dress standard. This is not standard Mayfair — it's a venue with its own rules. Arrive by 11:00 PM to catch the early performances. Walker's Court is a narrow alley off Brewer Street in Soho. Leicester Square and Piccadilly Circus tubes are nearby. Dress like you're going to the most interesting party you've ever been invited to, because that's exactly what it is.",
    sections: [
      {
        heading: "What to Expect from The Box's Performances",
        content:
          "The Box is not a standard nightclub with occasional entertainment. It's a theatrical experience with a nightclub attached. Performances run throughout the night and are deliberately provocative — burlesque, cabaret, performance art, and acts designed to push boundaries. Some will make you laugh, some will make your jaw drop, and some will make you look away. That unpredictability is the point. The acts rotate regularly so even repeat visitors get fresh material. If you're easily shocked or prefer conventional nightclub entertainment, The Box is the wrong choice. If you want a night that genuinely surprises you, there's nothing else like it in London.",
      },
      {
        heading: "Getting Past The Box's Famously Selective Door",
        content:
          "The Box has one of the hardest doors in London. Walk-ups without a booking are routinely turned away, even on quieter nights. The door team curates the crowd as carefully as the venue curates its performances. Booking a table through us guarantees entry for your entire group — we have a direct relationship with the venue. But guaranteed entry doesn't mean you can turn up in tracksuit bottoms. The dress code is creative and fashionable: think fashion-forward, individual, and interesting. Smart is the baseline; looking like you belong in a creative, artistic space is the goal.",
      },
      {
        heading: "Birthday & Special Occasion Bookings at The Box",
        content:
          "The Box is a birthday venue for people who want to tell stories the next day. The provocative performances, the exclusive atmosphere, and the creative crowd combine to create a night that's genuinely memorable rather than just another club. VIP tables are the recommended booking for birthdays — prime positions for the shows and more space for your group. We can arrange sparklers and special touches, though The Box's version of a birthday celebration tends to be a bit more anarchic than the standard sparkler-and-cake routine. Groups of 6-12 work best. Let us know you're celebrating and the venue may incorporate your group into the night's energy.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at The Box London?",
        answer:
          "Tables start from £1,500 minimum spend. VIP and premium positions start from £3,000. The pricing reflects the exclusivity, the selective door, and the quality of the live entertainment. It's one of London's pricier venues but the experience is proportionally unique.",
      },
      {
        question: "How do I get into The Box?",
        answer:
          "Book a table through us. The Box has one of London's most selective doors and walk-ins are extremely difficult. A table booking through us guarantees entry for your group. You'll still need to meet the dress code — creative, fashion-forward attire is expected.",
      },
      {
        question: "What kind of shows does The Box have?",
        answer:
          "Provocative, avant-garde performances including burlesque, cabaret, and performance art. The shows are designed to surprise, shock, and entertain. They're not for the easily offended — boundary-pushing is the entire concept. Acts rotate regularly.",
      },
      {
        question: "What's the dress code at The Box?",
        answer:
          "Creative and fashionable. Smart is the minimum but The Box rewards individuality and style. Think fashion-forward rather than corporate smart. The door team looks for guests who fit the venue's artistic, creative atmosphere. No sportswear or casual wear.",
      },
      {
        question: "What nights is The Box open?",
        answer:
          "Wednesday through Saturday. Friday and Saturday are the biggest nights. Wednesday and Thursday offer a more intimate experience with the same quality performances and typically lower minimum spends.",
      },
      {
        question: "Is The Box appropriate for everyone?",
        answer:
          "No, and it doesn't try to be. The performances are deliberately provocative and boundary-pushing. If you or your group members are easily shocked or prefer conventional entertainment, this is the wrong venue. If you want a night that's genuinely unlike anything else in London, it's perfect.",
      },
      {
        question: "How far in advance should I book The Box?",
        answer:
          "At least 2 weeks for Friday or Saturday. The venue is small (around 200 capacity) and demand is consistently high. Wednesday and Thursday can sometimes be booked with shorter notice. Peak dates and holidays sell out well in advance.",
      },
    ],
    relatedBookingPages: [
      "cirque-le-soir-table-booking",
      "tape-london-table-booking",
      "scotch-of-st-james-table-booking",
      "reign-london-table-booking",
    ],
    relatedBlogSlugs: [
      "the-box-soho-bottle-service-guide",
      "celebrity-clubs-london",
      "how-to-get-into-exclusive-london-clubs",
    ],
  },

  // 11. Luna Club London
  {
    bookingSlug: "luna-club-london-table-booking",
    clubSlug: "luna-club-london",
    metaTitle: "Luna Club London Table Booking | Hip-Hop VIP from £1,000",
    metaDescription:
      "Book a VIP table at Luna Club London from £1,000. Sleek Mayfair club with hip-hop, RnB & a well-connected crowd. WhatsApp us for instant table availability.",
    h1: "Book a Table at Luna Club London",
    heroSubheading:
      "Sleek, intimate, and consistently good. Luna Club delivers exactly what Mayfair hip-hop fans want: strong music, a well-connected crowd, and proper bottle service without the gimmicks.",
    pricingIntro:
      "Tables at Luna Club London start from £1,000 minimum spend for floor tables. VIP tables start from £2,000. The pricing is competitive with other Mayfair hip-hop clubs, and the intimate size of the venue means even standard floor tables feel well-positioned. Your spend covers premium spirits and champagne, served by dedicated table staff who know the menu well.",
    vipUpsellPitch:
      "VIP tables from £2,000 give you the prime positions at Luna — closest to the DJ, most space, and the best energy in the room. In a venue this intimate, VIP is less about separation from the crowd and more about being in the centre of the action with room to enjoy it. For groups who want to be where the atmosphere peaks, VIP at Luna is the move.",
    weekdayDeal:
      "Thursday at Luna is a properly good night. The venue is open Thursday through Saturday, and Thursday has developed a loyal following of Mayfair regulars who treat it as their weekly anchor. The energy is strong thanks to the small venue size, minimum spends are lower, and the crowd tends to be more local and connected versus the weekend's broader mix. If you want the authentic Luna experience without Saturday's premium pricing, Thursday delivers.",
    arrivalGuide:
      "Luna Club London is in Mayfair. Doors open at 10:30 PM. With a table booking, arrive between 11:00 PM and midnight for the best experience — the intimate venue fills up quickly and the energy builds fast once it does. Table bookings include priority entry for your entire group. The dress code is standard Mayfair smart: collared shirts and smart shoes for men, dressed-up for women. Green Park tube is the most convenient station.",
    guestlistComparison:
      "Luna Club does operate a guestlist, and like most mid-tier Mayfair clubs, it works best on quieter nights. Thursday is your best bet for guestlist entry — the venue is building the room and welcomes well-dressed general admission guests with a cover charge around £15-20. Friday guestlist is hit-or-miss depending on demand. Saturday guestlist is largely unreliable — the venue fills with table bookings and regular crowd, and guestlist names are the first to get cut when the room approaches its 250-person capacity.\n\nLuna's identity as a no-nonsense hip-hop club means the guestlist experience is particularly underwhelming compared to having a table. The venue is intimate and designed around its booth seating — the DJ is positioned relative to the tables, the sound is calibrated for the seated areas, and the energy flows from the table sections outward. General admission at Luna means standing in the spaces between those tables, which in a 250-capacity venue isn't much space at all. You're close to the action but you don't have a stake in it.\n\nThe per-person cost comparison is telling. Luna's crowd tends to drink well — premium spirits, champagne, cocktails at Mayfair bar prices. A night of buying rounds for a group of six on general admission easily runs to £100+ per person once you add the cover charge. A £1,000 table split six ways is £167 each, and that includes your drinks, guaranteed entry, a reserved booth, and personal service. You're paying a modest premium for an incomparably better experience. For Luna specifically, where the whole appeal is being part of a well-connected, intimate room with strong music, the table is how you actually become part of that room rather than hovering on its edges.",
    entryGuide:
      "Luna Club London runs a standard Mayfair door — selective, professional, and consistent. The dress code is firmly smart: collared shirts and smart shoes for men, properly dressed up for women. There's no fashion-forward flexibility here like you'd get at Tabu or Dear Darling — Luna is classic Mayfair, and the door expects classic Mayfair dressing. No trainers, no streetwear, no casual wear. The crowd inside is well-connected and well-dressed without being ostentatious, and the door maintains that standard reliably.\n\nLuna draws a crowd that knows the Mayfair circuit — regulars who've tried the other venues and settled on Luna for its straightforward delivery of good hip-hop, good crowd, and good service. The door team reflects this: they're looking for people who look like they belong in a Mayfair club, are in a good mood, and aren't going to be trouble. Mixed groups of men and women get through smoothly. Groups of men who look like they're on a night out together are assessed more carefully, which is universal across Mayfair. The most important thing is looking like you've made an effort appropriate to the venue.\n\nWith a table booking, entry is simple. Name-check at the door, confirmation, and you're walked to your booth. This matters at Luna because the intimate size means the venue hits capacity early on Saturdays — by midnight, general admission often closes entirely while table bookings continue to be welcomed. Arrive between 11:00 PM and midnight. Green Park tube is the nearest station. If you're comparing Luna to similar hip-hop venues like Tabu, the entry standard at Luna is more traditionally Mayfair — smarter, less streetwear-friendly, but also less likely to surprise you with an unexpected rejection if you've dressed properly.",
    sections: [
      {
        heading: "Why Luna Is the No-Nonsense Mayfair Hip-Hop Club",
        content:
          "Luna doesn't try to be everything to everyone. There's no gimmick, no theme, no multi-room concept. It's a well-designed, intimate Mayfair club that plays excellent hip-hop, RnB, Afrobeats, and UK rap to a well-connected crowd. The DJs balance crowd-pleasers with deeper cuts that show genuine musical knowledge. The intimate capacity (around 250) keeps the energy concentrated — there's no dead zone in the venue. For groups who know what they want (hip-hop, good crowd, proper table service) and don't need theatrics or activities to have a good night, Luna is the straightforward, reliable choice.",
      },
      {
        heading: "Best Nights to Book at Luna Club",
        content:
          "Saturday is the main event — fullest room, highest energy, strongest DJ lineups. If it's a special occasion, Saturday is the recommendation. Friday is excellent with a slightly more relaxed atmosphere and better table availability. Thursday is the value pick and a genuinely great night in its own right — the regular crowd keeps the energy high and the minimum spends are noticeably lower. For first-time visitors, Saturday or Friday gives you Luna at its peak. For repeat visitors or budget-conscious groups, Thursday is the smart play.",
      },
      {
        heading: "Birthday & Group Celebrations at Luna",
        content:
          "Luna works well for birthday groups in the 6-15 person range. The intimate size means your group becomes part of the room's energy rather than being isolated in a corner, and the hip-hop-focused music keeps the dance floor active all night. We can arrange sparklers, cakes, and a birthday table setup. VIP tables are popular for birthdays — more space and better positioning give the celebration a premium feel. For larger groups (15+), we can arrange adjacent tables. Let us know the occasion and group size when you message us.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Luna Club London?",
        answer:
          "Floor tables start from £1,000 minimum spend. VIP tables start from £2,000. Pricing is competitive with similar Mayfair clubs. WhatsApp us for exact pricing for your preferred date.",
      },
      {
        question: "What music does Luna Club play?",
        answer:
          "Hip-hop, RnB, Afrobeats, and UK rap. The music policy is focused and consistent — DJs balance mainstream hits with deeper cuts. If you want house or electronic music, try Maddox or BEAT instead. Luna is for hip-hop fans.",
      },
      {
        question: "What nights is Luna Club London open?",
        answer:
          "Thursday, Friday, and Saturday. All three nights have strong atmosphere thanks to the intimate venue. Thursday is the value pick, Saturday is the flagship.",
      },
      {
        question: "What's the dress code at Luna?",
        answer:
          "Standard Mayfair smart. Collared shirts and smart shoes for men, dressed-up for women. No sportswear, casual trainers, or shorts. The door is selective so dress appropriately even with a table booking.",
      },
      {
        question: "How does Luna compare to Tabu?",
        answer:
          "Both are intimate Mayfair hip-hop clubs with £1,000 starting minimums. Tabu has the Japanese underground aesthetic and a slightly more fashion-forward, younger crowd. Luna is more classically Mayfair — sleek, well-connected, and straightforward. If design and concept matter to you, try Tabu. If you want reliable music and atmosphere without a theme, Luna is the pick.",
      },
      {
        question: "Is Luna good for a birthday?",
        answer:
          "Yes. The intimate size means your group is naturally part of the energy, not tucked away. We can arrange sparklers, cakes, and birthday setups. Groups of 6-15 are the sweet spot. VIP tables add a premium touch for the guest of honour.",
      },
      {
        question: "How do I book a table at Luna?",
        answer:
          "WhatsApp us with your date, group size, and any occasion. We'll confirm availability and pricing quickly. Tables are limited due to Luna's small capacity, so booking at least a week ahead for weekends is recommended.",
      },
    ],
    relatedBookingPages: [
      "tabu-london-table-booking",
      "dear-darling-table-booking",
      "cuckoo-club-table-booking",
      "funky-buddha-table-booking",
    ],
    relatedBlogSlugs: [
      "luna-club-london-guide",
      "how-much-does-bottle-service-cost-london",
      "mayfair-dress-code-what-to-wear",
    ],
  },

  // 12. Selene London
  {
    bookingSlug: "selene-london-table-booking",
    clubSlug: "selene-london",
    metaTitle: "Selene London Table Booking | Multi-Room & Bowling from £1,000",
    metaDescription:
      "Book a VIP table at Selene London from £1,000. Multi-room Mayfair club with private bowling lanes. Perfect for groups. WhatsApp us for availability.",
    h1: "Book a Table at Selene London",
    heroSubheading:
      "The Mayfair club that gives you options. Multiple rooms, private bowling lanes, and hip-hop across the board. Built for groups who refuse to sit in one place all night.",
    pricingIntro:
      "Tables at Selene London start from £1,000 minimum spend. VIP tables start from £2,000. Bowling lane packages may have different pricing structures depending on the combination — message us for the latest options. Your minimum spend covers premium spirits and champagne. The multi-room layout means you choose which space suits your group best, or move between them throughout the night.",
    vipUpsellPitch:
      "VIP tables from £2,000 get you the prime positions in Selene's main club room — the best sound, the most space, and first-class service. For groups who want to combine bowling with bottle service, we can arrange VIP bowling packages that include a dedicated lane alongside your club table. It's the most complete night-out package available in Mayfair.",
    weekdayDeal:
      "Thursday is Selene's midweek offering and it's a solid option for groups who want the full multi-room experience at lower minimum spends. As a newer venue, Selene occasionally runs themed nights and special events — check with us for the latest schedule. Thursday gives you access to all rooms including bowling (subject to availability) with more competitive pricing than the weekend.",
    arrivalGuide:
      "Selene London is at 25 Sackville Street in Mayfair. Doors open at 10:00 PM. Table bookings include priority entry. If you've booked a bowling lane alongside your table, arrive by 10:30 PM so you can get a few games in before the club energy peaks around midnight. Piccadilly Circus tube is the nearest station, about a 3-minute walk. The dress code is standard Mayfair smart — no surprises. Let us know when booking if you want a club table, a bowling lane, or both.",
    guestlistComparison:
      "Selene is a newer venue on the Mayfair scene, and that newness works in favour of guestlist accessibility — the venue is still growing its audience and is generally more welcoming to general admission guests than the established clubs. Guestlist on a Thursday can reliably get you through the door with a cover charge around £10-15. Friday and Saturday guestlist is possible but less guaranteed as demand increases. The multi-room layout and 400-person capacity across all rooms mean there's physically more space for general admission than at the intimate 200-capacity clubs.\n\nThe issue with guestlist at Selene isn't getting in — it's what you miss. Selene's entire selling point is the multi-room experience: bowling lanes, multiple club spaces, and the ability to move between them. On guestlist, you have access to the general club areas, but the bowling lanes are typically reserved for bookings. So you're getting the standard nightclub portion of a venue whose unique value is the activity element. It's like going to a theme park and only being allowed on the benches.\n\nFor groups — and Selene is specifically designed for groups — the table booking makes the evening. A table from £1,000 gives you a base in the main club room, and you can add a bowling lane package on top. Your group has somewhere to gather between bowling games, a place to leave bags and jackets, drinks being served to you rather than queued for at the bar, and the flexibility to split between activities without losing your spot. For birthday groups and corporate events, which are Selene's bread and butter, the table-and-bowling combination creates a structured evening that guestlist simply cannot replicate. You can't coordinate a group of fifteen through a guestlist queue and then hope to find bowling availability on the night.",
    entryGuide:
      "Selene's door is among the more accessible in Mayfair, partly because the venue is newer and partly because the multi-room, activity-focused concept naturally draws a broader crowd. The dress code is standard Mayfair smart — collared shirts and smart shoes for men, dressed-up for women — but the enforcement is practical rather than aggressive. If you look like you've made an effort for a Mayfair night out, you'll be fine. The venue doesn't have the creative dress expectations of The Box or the members' club polish of Tape. It's straightforward: look smart, behave well, and you're in.\n\nThe biggest consideration at Selene isn't the door — it's the timing, especially if you've booked bowling. The bowling lanes are popular and operate on a booking basis, so if you've arranged a lane alongside your club table, arriving at 10:00-10:30 PM gives you time to get a few games in during the earlier, more relaxed phase of the night. By midnight the club rooms are in full swing and most groups have transitioned from bowling to dancing and drinking. If you're doing club-only, arrive between 10:30 PM and 11:30 PM.\n\nWith a table booking, priority entry means your whole group walks in together — particularly valuable for the large groups that Selene attracts. Trying to get a birthday party of fifteen or a corporate group of twenty through a general queue at any Mayfair club is logistically painful. A booking at Selene means name-check at the door, your group confirmed, and you're escorted to your room. Piccadilly Circus tube is three minutes away, making Selene easy to reach for groups coming from different parts of London.",
    sections: [
      {
        heading: "Bowling + Bottle Service: Selene's Unique Selling Point",
        content:
          "No other Mayfair club offers private bowling lanes alongside bottle service. Selene's bowling setup isn't an afterthought — the lanes are properly built, well-lit, and designed to feel premium rather than gimmicky. You can book a bowling lane alongside your club table and move between the two throughout the night. This works exceptionally well for birthday groups (gives everyone an activity beyond drinking), corporate outings (bowling is a natural icebreaker), and any group where not everyone wants to dance. Start with bowling, move to bottles, come back for another game — the flexibility is the point.",
      },
      {
        heading: "Birthday & Celebration Bookings at Selene",
        content:
          "Selene is arguably the best birthday venue in Mayfair for groups over 10. The multi-room layout means your party isn't confined to one table in one room all night. Start with bowling (competitive, funny, and a guaranteed conversation starter), then move into the main club for bottle service and dancing. We can arrange birthday packages including sparklers, cakes, and dedicated setups. The variety of spaces means your birthday actually feels like an event with different chapters rather than four hours at the same table. For large groups (20+), Selene's layout handles the numbers easily.",
      },
      {
        heading: "Corporate & Team Events at Selene",
        content:
          "Selene is the top pick for corporate nights out in Mayfair. The bowling lanes provide a structured activity that gets people talking (especially in mixed groups where not everyone knows each other), and the transition to bottle service in the club gives the evening a natural progression. For groups of 12-30, the combination of bowling and VIP tables creates a complete evening without needing to organise multiple venues. We regularly arrange corporate packages — let us know your group size and budget and we'll put together a tailored proposal.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at Selene London?",
        answer:
          "Tables start from £1,000 minimum spend. VIP tables start from £2,000. Bowling lane packages have variable pricing — message us for the latest options and combination packages.",
      },
      {
        question: "Can I book bowling and a table together?",
        answer:
          "Yes — that's one of Selene's best features. We can arrange a bowling lane alongside your club table so your group can move between the two all night. Let us know when booking and we'll set up the combination.",
      },
      {
        question: "What nights is Selene open?",
        answer:
          "Thursday, Friday, and Saturday. As a newer venue, they occasionally add special event nights. Thursday offers the best value with lower minimums and good availability. Check with us for the latest schedule.",
      },
      {
        question: "Is Selene good for large groups?",
        answer:
          "Excellent. The multi-room layout means groups of 20+ can spread out without feeling cramped. Bowling gives everyone an activity, and the main club handles larger table configurations well. It's one of Mayfair's best options for big birthday parties and corporate events.",
      },
      {
        question: "What music does Selene play?",
        answer:
          "Hip-hop, RnB, and Afrobeats across the rooms. The multi-room setup means different spaces can have slightly different vibes, but the overall music policy is hip-hop focused.",
      },
      {
        question: "What's the dress code at Selene?",
        answer:
          "Standard Mayfair smart. Collared shirts and smart shoes for men, dressed-up for women. No casual wear. The bowling element doesn't change the dress code — you bowl in your going-out clothes.",
      },
      {
        question: "How does Selene compare to other Mayfair clubs?",
        answer:
          "Selene is the activity-focused option. If you want a straightforward bottle service night, the established venues deliver. If you want bowling, multiple rooms, and variety throughout the night, Selene is unique in Mayfair. It's particularly strong for groups and celebrations.",
      },
    ],
    relatedBookingPages: [
      "reign-london-table-booking",
      "cuckoo-club-table-booking",
      "funky-buddha-table-booking",
      "luna-club-london-table-booking",
    ],
    relatedBlogSlugs: [
      "best-clubs-for-birthday-london",
      "corporate-event-entertainment-london",
      "london-nightlife-first-timers",
    ],
  },

  // 13. BEAT London
  {
    bookingSlug: "beat-london-table-booking",
    clubSlug: "beat-london",
    metaTitle: "BEAT London Table Booking | Electronic Music VIP from £1,000",
    metaDescription:
      "Book a VIP table at BEAT London from £1,000. Serious sound system, house & techno, and a music-first approach. WhatsApp us for table availability tonight.",
    h1: "Book a Table at BEAT London",
    heroSubheading:
      "The London club built for electronic music first. A serious sound system, quality DJ bookings, and an immersive experience that's closer to Ibiza than Mayfair. Table service without sacrificing the music.",
    pricingIntro:
      "Tables at BEAT London start from £1,000 minimum spend. VIP tables start from £2,000. The pricing is competitive and reflects the investment in sound and production — the sound system alone sets BEAT apart from clubs where electronic music is an afterthought. Your spend covers premium spirits and champagne, and your table gives you a home base with dance floor views while the DJs do their thing.",
    vipUpsellPitch:
      "VIP tables from £2,000 put you in the optimal listening and viewing position — closest to the DJ booth, best bass response from the sound system, and front-row seats for the immersive lighting rig. At a venue built around the music, VIP positioning matters more than at clubs where the DJ is background noise. If you're here for the sound, VIP is where the sound is best.",
    weekdayDeal:
      "BEAT operates Friday and Saturday only, so there's no midweek discount. However, Friday tends to attract a more local electronic music crowd with slightly lower minimum spends. The DJs on Friday often play longer, more exploratory sets compared to Saturday's higher-energy approach. If you prefer deeper, more progressive sets, Friday is your night. Saturday brings peak energy and the fullest dance floor.",
    arrivalGuide:
      "BEAT London is in Central London. Doors open at 10:00 PM and the club runs late — often until 4:00 AM, later than most Mayfair venues. This later closing means the energy builds differently; don't feel rushed to arrive early. 11:00 PM to midnight is a good arrival window for table bookings. Priority entry with your booking means no queue. The dress code is more relaxed than traditional Mayfair — smart casual works, and smart trainers are generally accepted. The focus is on the music, not your collar.",
    guestlistComparison:
      "BEAT operates differently from the traditional Mayfair bottle service clubs, and so does its guestlist. Electronic music venues tend to have a more egalitarian entry model — the culture is less hierarchical than hip-hop bottle service clubs where table status is everything. BEAT does run a guestlist, and on most nights it can get you through the door with a cover charge of £15-20. The 400-person capacity and music-first ethos mean general admission is a more viable experience here than at the smaller Mayfair venues. The dance floor is the focal point and it's designed for everyone, not just table guests.\n\nThat said, there's still a meaningful difference between standing on the dance floor for four hours and having a table to retreat to. BEAT runs until 4:00 AM — that's a long night on your feet, especially once the bass hits and you've been dancing for two hours straight. A table gives you a home base with seating, drinks being served to you, and a place to decompress between sets without losing your spot. In the electronic music world, this isn't about status — it's about stamina and comfort during what is genuinely one of London's longer club nights.\n\nFor groups who are specifically here for the music, the table booking also makes practical sense. You can hear each other during breaks, share bottles without fighting through bar queues, and keep your group together in a 400-person room where people naturally drift toward different parts of the dance floor. A £1,000 minimum split across six to eight people is comparable to what you'd spend on entry plus bar drinks over a five-to-six-hour night. The table adds comfort without taking you away from the experience — BEAT's tables are positioned with dance floor views, not tucked into a roped-off section away from the action.",
    entryGuide:
      "BEAT's door policy is refreshingly different from the traditional Mayfair clubs. The dress code is smart casual with genuine flexibility — smart trainers are accepted, you don't need a collared shirt, and the overall vibe is closer to an Ibiza club or a Berlin venue than a Mayfair bottle service spot. This reflects the electronic music culture that BEAT is built around: the focus is on the music and the experience, not on how expensive your shoes are. No sportswear and no flip-flops are the main restrictions. Beyond that, if you look like you're ready for a night of house and techno, you're fine.\n\nThe crowd at BEAT draws from a different pool than the hip-hop Mayfair clubs. Expect electronic music fans, people who've done Ibiza and Berlin, groups of friends who specifically chose BEAT for the sound system, and DJs themselves who come to hear proper audio. The door team is looking for people who are there for the right reasons — the music. This makes the door simultaneously more relaxed (no outfit policing) and more discerning in its own way (groups who clearly wandered over from a hip-hop club and don't know what tech house is might find the experience underwhelming rather than being turned away).\n\nWith a table booking, priority entry bypasses any queue. This is particularly valuable at BEAT because the club runs until 4:00 AM and the energy peaks late — if you arrive at midnight and there's a queue, you could miss the sweet spot when the DJ drops the first big set. Priority entry means you walk in, get settled at your table, and you're ready when the night hits its stride. The later closing also means you can arrive later than at standard Mayfair clubs without missing the best part of the night. An 11:00 PM to midnight arrival puts you perfectly positioned for the hours of music that follow.",
    sections: [
      {
        heading: "The Sound System: Why BEAT Is Built Different",
        content:
          "Most London nightclubs install a sound system as an afterthought — something loud enough to fill the room. BEAT was designed the other way around: the sound system came first, and the venue was built to serve it. The result is a club where you can feel the bass in your chest without the treble piercing your eardrums, where the DJ's mix is clear from every position in the room, and where the music is genuinely the main attraction. If you've been to Ibiza's best clubs or Berlin's legendary rooms and wondered why London doesn't have something equivalent, BEAT is the answer. The immersive lighting rig complements the audio, creating a full sensory experience that elevates house and techno from background to foreground.",
      },
      {
        heading: "House & Techno Fans: Your Bottle Service Home",
        content:
          "Electronic music fans in London have always faced a trade-off: proper sound and music in warehouse-style venues with no comfort, or comfortable bottle service in clubs where the DJ is an afterthought. BEAT eliminates that compromise. You get table service, premium bottles, a reserved area — all the comfort of Mayfair bottle service — but the music and production are built for electronic fans. The DJs are booked for their talent behind the decks, not their social media following. If you've been to the hip-hop bottle service circuit and want something different, or if you normally avoid VIP sections because they're soulless, BEAT is designed specifically for you.",
      },
      {
        heading: "Late-Night Energy: BEAT Runs Until 4 AM",
        content:
          "While most Mayfair clubs close at 3:00 AM, BEAT runs until 4:00 AM on weekends. That extra hour matters more than you'd think — in electronic music, the best sets often happen in the final stretch when the crowd has been building energy for hours and the DJ can take the music deeper. The late licence means BEAT attracts people who are genuinely there for the music rather than just ticking off a Saturday night obligation. The energy at 2:00 AM here is what most clubs aspire to at midnight.",
      },
    ],
    faqs: [
      {
        question: "How much is a table at BEAT London?",
        answer:
          "Tables start from £1,000 minimum spend. VIP tables start from £2,000. The pricing reflects the quality of the sound system and production — you're getting a music experience that most London clubs can't match alongside your bottle service.",
      },
      {
        question: "What music does BEAT play?",
        answer:
          "House, tech house, and techno. The music policy is strictly electronic. DJs are booked for talent and taste. If you want hip-hop or RnB, try Tabu, Luna, or Cuckoo instead. BEAT is for electronic music fans.",
      },
      {
        question: "What nights is BEAT open?",
        answer:
          "Friday and Saturday, running until 4:00 AM — later than most London clubs. Friday tends towards deeper, more progressive sets. Saturday is peak energy and the fullest room.",
      },
      {
        question: "What's the dress code at BEAT?",
        answer:
          "More relaxed than traditional Mayfair. Smart casual is the standard. Smart trainers are generally accepted. No sportswear or flip-flops, but you don't need a blazer. The focus is on the music, not the dress code.",
      },
      {
        question: "How does BEAT compare to warehouse parties?",
        answer:
          "BEAT gives you the sound quality and music focus of a warehouse party with the comfort and service of a Mayfair club. Proper table service, premium bottles, reserved areas — but the DJ and sound system are the centrepiece rather than an afterthought.",
      },
      {
        question: "Is BEAT good for a birthday?",
        answer:
          "If the birthday person loves electronic music, absolutely. The immersive production makes any night feel like an event. We can arrange sparklers and table setups. For birthdays where the group has mixed tastes (some want hip-hop), BEAT may not be the best fit — consider Cuckoo or Funky Buddha instead.",
      },
      {
        question: "How do I book a table at BEAT?",
        answer:
          "WhatsApp us with your date, group size, and any preferences. We'll confirm availability and pricing. Friday and Saturday both tend to sell well so booking at least a week ahead is recommended for the best table selection.",
      },
    ],
    relatedBookingPages: [
      "maddox-club-table-booking",
      "cuckoo-club-table-booking",
      "scotch-of-st-james-table-booking",
      "the-box-london-table-booking",
    ],
    relatedBlogSlugs: [
      "how-much-does-bottle-service-cost-london",
      "mayfair-vs-shoreditch-nightlife",
      "london-nightlife-first-timers",
    ],
  },
];

export function getBookingPageBySlug(
  slug: string,
): BookingPageData | undefined {
  return bookingPages.find((page) => page.bookingSlug === slug);
}

export function getBookingSlugForClub(
  clubSlug: string,
): string | undefined {
  const page = bookingPages.find((p) => p.clubSlug === clubSlug);
  return page?.bookingSlug;
}
