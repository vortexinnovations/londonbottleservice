export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readingTime: string;
  keywords: string[];
  relatedClubs: string[];
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-bottle-service-cost-london",
    title: "How Much Does Bottle Service Cost in London? The Real 2025 Price Guide",
    metaTitle: "How Much Does Bottle Service Cost in London? 2025 Prices Revealed",
    metaDescription:
      "Actual bottle service prices at London's top clubs. Floor tables from £1,000, VIP from £1,500-£3,000+. We break down costs per person, bottle menu prices, and hidden fees to watch for.",
    excerpt:
      "The real cost of bottle service at every major London club — broken down by venue, night of the week, and group size. No vague 'contact us for pricing' — actual numbers.",
    publishedAt: "2025-01-15",
    updatedAt: "2025-03-01",
    category: "Pricing",
    readingTime: "8 min read",
    keywords: [
      "bottle service cost London",
      "how much is bottle service",
      "London club table prices",
      "bottle service prices UK",
      "minimum spend London clubs",
    ],
    relatedClubs: ["cirque-le-soir", "tape-london", "maddox", "cuckoo-club"],
    faqs: [
      {
        question: "How much does bottle service cost in London on average?",
        answer:
          "The average minimum spend for bottle service in London is £1,000 for a standard floor table. VIP tables range from £1,500 to £3,000+. Per person, expect to spend £125-£250 depending on your group size and the venue.",
      },
      {
        question: "What is the cheapest bottle service in London?",
        answer:
          "The most affordable bottle service in Mayfair starts at £1,000 minimum spend at venues like Cirque Le Soir, Cuckoo Club, Maddox, and Funky Buddha. Weeknight tables (Tuesday-Thursday) often have lower minimums than weekend tables.",
      },
      {
        question: "Are there hidden fees with London bottle service?",
        answer:
          "Most London clubs do not add a service charge to bottle service, but it's worth confirming when you book. The minimum spend covers your bottles and mixers. Entry is included with your table booking. Tips for your waitress are appreciated but not mandatory.",
      },
      {
        question: "How much is a bottle of vodka at a London club?",
        answer:
          "A bottle of premium vodka (Grey Goose, Belvedere, Cîroc) at a London club typically costs £300-£500. Super-premium options can reach £600+. Champagne ranges from £400 for Moët to £2,000+ for Dom Perignon or Ace of Spades.",
      },
    ],
  },
  {
    slug: "best-clubs-for-birthday-london",
    title: "Best Clubs for a Birthday in London: Where to Celebrate in Style",
    metaTitle: "Best Clubs for a Birthday in London 2025 | Birthday Venue Guide",
    metaDescription:
      "Planning a birthday night out in London? Our insider guide to the best clubs for birthday celebrations — from theatrical experiences to exclusive members' clubs. Pricing, packages, and booking tips.",
    excerpt:
      "Your birthday deserves better than a generic bar. Here are the London clubs that actually make birthdays special — with real pricing and what each venue offers for celebrations.",
    publishedAt: "2025-01-22",
    updatedAt: "2025-03-01",
    category: "Guides",
    readingTime: "10 min read",
    keywords: [
      "best birthday clubs London",
      "birthday night out London",
      "birthday bottle service London",
      "birthday venue Mayfair",
      "London birthday party nightclub",
      "21st birthday London clubs",
      "30th birthday London",
    ],
    relatedClubs: ["cirque-le-soir", "london-reign", "the-box", "selene-london"],
    faqs: [
      {
        question: "Which London club is best for a birthday?",
        answer:
          "Cirque Le Soir is the most popular birthday venue thanks to its circus performers and theatrical atmosphere. London Reign offers Las Vegas-style shows. The Box Soho combines dinner, cabaret, and clubbing. The best choice depends on your group size, budget, and what kind of night you want.",
      },
      {
        question: "Can London clubs organise birthday packages?",
        answer:
          "Yes, most London clubs offer birthday packages including cakes, sparklers, LED bottle presentations, and birthday announcements. Some venues provide complimentary champagne for the birthday guest. Let us know when you book and we'll arrange everything.",
      },
      {
        question: "How much does a birthday table cost in London?",
        answer:
          "Birthday table pricing is the same as standard bottle service — from £1,000 minimum spend at most venues. Some clubs offer enhanced packages for birthdays. The minimum spend covers your drinks, and birthday extras (cake, sparklers) are often included or available at minimal extra cost.",
      },
      {
        question: "How far in advance should I book a birthday table?",
        answer:
          "For Friday and Saturday nights, book at least 2-3 weeks in advance. Popular venues like Cirque Le Soir can sell out 4-6 weeks ahead for Saturdays. Weeknight birthdays can often be booked with shorter notice. The earlier you book, the better your table position.",
      },
    ],
  },
  {
    slug: "mayfair-dress-code-what-to-wear",
    title: "What to Wear to Mayfair Clubs: The Complete Dress Code Guide",
    metaTitle: "Mayfair Club Dress Code 2025 | What to Wear to London Nightclubs",
    metaDescription:
      "Don't get turned away at the door. Our complete guide to Mayfair club dress codes — what to wear, what to avoid, and how strict each venue actually is. Men's and women's guides included.",
    excerpt:
      "Getting turned away at the door is embarrassing and completely avoidable. Here's exactly what to wear to every Mayfair club — from someone who sees the door policy enforced every week.",
    publishedAt: "2025-02-01",
    updatedAt: "2025-03-01",
    category: "Tips",
    readingTime: "7 min read",
    keywords: [
      "Mayfair club dress code",
      "what to wear London nightclub",
      "London club dress code men",
      "London club dress code women",
      "Mayfair nightclub outfit",
      "dress code Cirque Le Soir",
      "can you wear trainers Mayfair clubs",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "maddox", "tabu-london"],
    faqs: [
      {
        question: "What is the dress code for Mayfair clubs?",
        answer:
          "Smart dress code is standard across Mayfair. Men: collared shirt, smart trousers or dark jeans, smart shoes (no trainers). Women: cocktail dresses, heels or smart boots, stylish separates. Avoid sportswear, casual trainers, shorts, and overly casual clothing at all venues.",
      },
      {
        question: "Can you wear trainers to Mayfair clubs?",
        answer:
          "Most Mayfair clubs do not allow trainers. Some newer venues like Tabu London may accept designer/smart trainers if the overall outfit is sharp, but it's not guaranteed. The safest option is always smart shoes. When in doubt, don't risk it.",
      },
      {
        question: "Which Mayfair club has the strictest dress code?",
        answer:
          "Tape London and Maddox have the strictest dress codes. Both are at the formal end of Mayfair — jackets are encouraged (though not always required) and the door staff are very selective. Venues like Tabu and Luna are slightly more relaxed but still expect smart attire.",
      },
      {
        question: "Will I get turned away for wearing jeans?",
        answer:
          "Dark, well-fitted jeans are generally acceptable at most Mayfair clubs when paired with a collared shirt and smart shoes. Ripped, distressed, or very casual jeans will get you turned away. Light-wash or baggy jeans are risky. Smart dark denim with the right top and shoes is fine.",
      },
    ],
  },
  {
    slug: "how-to-get-into-exclusive-london-clubs",
    title: "How to Get Into London's Most Exclusive Clubs: Insider Tips That Actually Work",
    metaTitle: "How to Get Into Exclusive London Clubs 2025 | Insider Guide",
    metaDescription:
      "Getting past the door at London's most exclusive clubs isn't about knowing a secret handshake. Our insider guide covers what actually works — from booking tables to guest list strategies.",
    excerpt:
      "The door policies at London's top clubs are genuinely selective. Here's what actually works to get in — and what's a complete waste of time.",
    publishedAt: "2025-02-10",
    updatedAt: "2025-03-01",
    category: "Tips",
    readingTime: "9 min read",
    keywords: [
      "how to get into London clubs",
      "exclusive London clubs",
      "London club guest list",
      "hardest clubs to get into London",
      "Mayfair club door policy",
      "how to get into Tape London",
      "London members club access",
    ],
    relatedClubs: ["tape-london", "scotch-of-st-james", "cirque-le-soir", "the-box"],
    faqs: [
      {
        question: "How do you get into exclusive London clubs?",
        answer:
          "The most reliable way is to book a table. Table bookings guarantee entry for your group at every venue. Without a table, you need guest list access (through a promoter), membership (for members' clubs), or to meet the venue's door criteria for walk-ins — which is never guaranteed at exclusive venues.",
      },
      {
        question: "Which London club is hardest to get into?",
        answer:
          "Tape London is widely considered the hardest door in Mayfair — it's a members' club with under 200 capacity and very selective guest access. Scotch of St James is similarly exclusive. Cirque Le Soir's small capacity and high demand also make walk-in entry extremely unlikely on weekends.",
      },
      {
        question: "Do you need a table to get into Mayfair clubs?",
        answer:
          "You don't technically need a table, but it's by far the easiest and most reliable way in. Guest list entry is available at some venues but not guaranteed. Walk-in entry depends on the night, the queue, and the door staff's assessment. A table booking removes all uncertainty.",
      },
      {
        question: "Can you walk into Mayfair clubs?",
        answer:
          "Walk-in entry is possible at some venues on quieter nights (Tuesday-Thursday) but very difficult on Fridays and Saturdays. The door staff assess your group's size, gender ratio, dress code, and overall impression. Even meeting all criteria, you may still wait in a long queue or be turned away if the venue is at capacity.",
      },
    ],
  },
  {
    slug: "celebrity-clubs-london-where-famous-people-party",
    title: "Celebrity Clubs in London: Where Do Famous People Actually Party?",
    metaTitle: "Celebrity Clubs London 2025 | Where Famous People Party in Mayfair",
    metaDescription:
      "Which London clubs do celebrities actually go to? An honest guide to celebrity hotspots in Mayfair — not gossip, but genuine insight into where you're most likely to spot someone famous.",
    excerpt:
      "Everyone wants to know where celebrities party in London. Here's the honest answer — which clubs genuinely attract famous faces and which ones just claim to.",
    publishedAt: "2025-02-18",
    updatedAt: "2025-03-01",
    category: "Guides",
    readingTime: "8 min read",
    keywords: [
      "celebrity clubs London",
      "where do celebrities party London",
      "celebrity nightclubs Mayfair",
      "famous people London clubs",
      "celebrity hotspots London nightlife",
      "best clubs to see celebrities London",
    ],
    relatedClubs: ["cirque-le-soir", "tape-london", "the-box", "london-reign"],
    faqs: [
      {
        question: "Which London club has the most celebrities?",
        answer:
          "Cirque Le Soir and Tape London consistently attract the highest-profile celebrities. Cirque has hosted everyone from Drake to Rihanna — the theatrical setting appeals to artists and entertainers. Tape London's members' club exclusivity and music industry connections draw musicians, actors, and athletes.",
      },
      {
        question: "Can you see celebrities at London clubs?",
        answer:
          "Celebrity sightings are common at certain Mayfair venues, particularly on Saturdays and during event weeks (Fashion Week, film premieres, concert nights). However, they're never guaranteed. Celebrities typically book private VIP areas, so proximity depends on where your table is positioned.",
      },
      {
        question: "Do celebrities go to Mayfair clubs?",
        answer:
          "Yes — Mayfair is the epicentre of celebrity nightlife in London. The area's concentration of exclusive, high-end clubs with strong door policies and private VIP sections makes it the natural destination for high-profile visitors. Soho and Shoreditch have celebrity-friendly venues too, but Mayfair dominates.",
      },
    ],
  },
  {
    slug: "london-nightlife-guide-first-timers",
    title: "London Nightlife for First Timers: Everything You Need to Know",
    metaTitle: "London Nightlife Guide for First Timers 2025 | Complete Beginner's Guide",
    metaDescription:
      "First time experiencing London nightlife? Our complete guide covers everything — from which area to go out in, to how clubs work, what to expect, and how to have the best possible night.",
    excerpt:
      "Whether you're visiting London or hitting Mayfair for the first time, this guide covers everything you need to know to have a great night — without the trial and error.",
    publishedAt: "2025-02-25",
    updatedAt: "2025-03-01",
    category: "Guides",
    readingTime: "12 min read",
    keywords: [
      "London nightlife guide",
      "first time London clubs",
      "London clubbing guide",
      "going out in London",
      "Mayfair nightlife guide",
      "London nightclub tips",
      "visiting London nightlife",
    ],
    relatedClubs: ["cuckoo-club", "cirque-le-soir", "funky-buddha", "maddox"],
    faqs: [
      {
        question: "What is London nightlife like?",
        answer:
          "London nightlife is diverse and world-class. Mayfair offers high-end clubs with bottle service and strict dress codes. Shoreditch has a more casual, creative scene. Soho is packed with bars and smaller venues. For VIP nightclub experiences, Mayfair is the area to focus on — it has the highest concentration of premium clubs in London.",
      },
      {
        question: "What time do London clubs open and close?",
        answer:
          "Most Mayfair clubs open between 10:00 PM and 10:30 PM and close between 3:00 AM and 3:30 AM. Beat London runs later, often until 6:00 AM. Arrive between 10:30 PM and 11:30 PM for the best experience — the atmosphere builds through the night and peaks around midnight to 1:00 AM.",
      },
      {
        question: "Is London nightlife expensive?",
        answer:
          "It can be. Individual drinks at Mayfair clubs cost £15-£20+. Bottle service starts from £1,000 minimum spend but splits across a group (£125-£250 per person for 4-8 people). This includes a table, personal service, and no bar queues. Compared to buying rounds, bottle service often works out similar or better value for groups.",
      },
      {
        question: "What area is best for nightlife in London?",
        answer:
          "Mayfair is best for high-end clubs and bottle service. Shoreditch for trendy, casual venues. Soho for bars and pre-club drinks. Brixton and Peckham for underground music scenes. If you want the classic London VIP club experience, Mayfair is where to go.",
      },
    ],
  },
  {
    slug: "best-champagne-bottle-service-london-clubs",
    title: "Best Champagne for Bottle Service at London Clubs: What to Order and What It Costs",
    metaTitle: "Best Champagne for Bottle Service London | Club Champagne Menu Guide",
    metaDescription:
      "What champagne should you order at a London club? Our guide covers every major brand, what they cost at Mayfair clubs, and which ones are actually worth the markup.",
    excerpt:
      "Dom Perignon or Moët? Ace of Spades or Veuve? Here's what every major champagne costs at London clubs and which ones are actually worth ordering.",
    publishedAt: "2025-03-05",
    updatedAt: "2025-03-10",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "champagne London clubs",
      "bottle menu London nightclub",
      "best champagne bottle service",
      "Dom Perignon price London club",
      "Ace of Spades nightclub price",
      "champagne prices Mayfair clubs",
      "what to order bottle service",
    ],
    relatedClubs: ["tape-london", "the-box", "cirque-le-soir", "maddox"],
    faqs: [
      {
        question: "How much is Dom Perignon at a London club?",
        answer:
          "Dom Perignon typically costs £600-£900 per bottle at Mayfair clubs. Prices vary by venue and whether it's the standard vintage or a rosé/special edition. It's one of the most popular premium champagnes ordered at bottle service tables.",
      },
      {
        question: "How much is Ace of Spades at a London nightclub?",
        answer:
          "Armand de Brignac (Ace of Spades) typically costs £800-£1,500+ at London clubs depending on the size and edition. The gold bottle is the most common. It's one of the most visually impressive champagnes — the gold bottle catches the light and looks spectacular at a table.",
      },
      {
        question: "What's the cheapest champagne at London clubs?",
        answer:
          "Moët & Chandon is typically the most affordable champagne at Mayfair clubs, starting around £350-£450 per bottle. Veuve Clicquot is similar pricing. Both are reliable choices that won't embarrass you at the table. For something slightly more premium without the Dom Perignon price tag, look at Ruinart or Laurent-Perrier Rosé.",
      },
      {
        question: "Should I order champagne or spirits for bottle service?",
        answer:
          "Spirits offer better value per drink — a £350 bottle of vodka gives you roughly 20 drinks, while a £400 bottle of champagne gives you 6-7 glasses. Most groups order a mix: spirits for the bulk of drinking and a bottle of champagne for a toast or a visual moment. Your waitress can help you balance your minimum spend.",
      },
    ],
  },
  {
    slug: "hen-party-london-clubs-mayfair",
    title: "Hen Party in London: The Best Mayfair Clubs for a Night She'll Never Forget",
    metaTitle: "Hen Party London Clubs 2025 | Best Hen Night Venues in Mayfair",
    metaDescription:
      "Planning a hen party in London? Our guide to the best Mayfair clubs for hen nights — from showclubs with performers to exclusive members' clubs. Real prices and booking advice.",
    excerpt:
      "A Mayfair hen night beats a bar crawl in a sash. Here are the London clubs that actually make hen parties special — not just tolerate them.",
    publishedAt: "2025-03-12",
    updatedAt: "2025-03-15",
    category: "Events",
    readingTime: "9 min read",
    keywords: [
      "hen party London clubs",
      "hen night Mayfair",
      "hen do London nightclub",
      "bachelorette party London",
      "hen party bottle service",
      "best hen night venues London",
      "London hen party ideas",
    ],
    relatedClubs: ["london-reign", "cirque-le-soir", "the-box", "cuckoo-club"],
    faqs: [
      {
        question: "Which London club is best for a hen party?",
        answer:
          "London Reign is the top choice for hen parties — the Las Vegas-style shows, aerial performers, and large capacity make it perfect for groups. Cirque Le Soir is excellent for smaller hen parties who want something intimate and theatrical. The Box Soho offers dinner-show-club for hens who want the full evening sorted.",
      },
      {
        question: "How much does a hen party in a London club cost?",
        answer:
          "Bottle service for a hen party starts from £1,000 minimum spend (same as any table booking). For a group of 10, that's £100 per person including all drinks, a table, and VIP treatment. Many venues offer free birthday/hen extras like cakes and sparklers at no additional cost.",
      },
      {
        question: "Can you book a large hen party at Mayfair clubs?",
        answer:
          "Yes — most Mayfair clubs can accommodate hen parties of 15-30+ people across multiple adjacent tables. Selene London is particularly good for large groups with its multi-room layout. Let us know your group size and we'll recommend the right venue and table configuration.",
      },
      {
        question: "Do Mayfair clubs allow hen party decorations?",
        answer:
          "Most clubs allow discreet decorations at your table — sashes, small banners, and balloons are usually fine. Large or obstructive decorations may not be permitted. The clubs themselves will often provide sparklers and LED presentations for the bride-to-be. Check with us when booking for specific venue policies.",
      },
    ],
  },
  {
    slug: "mayfair-vs-shoreditch-nightlife-compared",
    title: "Mayfair vs Shoreditch Nightlife: Which London Scene Is Right for You?",
    metaTitle: "Mayfair vs Shoreditch Nightlife 2025 | London Nightlife Compared",
    metaDescription:
      "Mayfair or Shoreditch? Two completely different London nights out. We compare dress codes, prices, music, vibes, and who each area is best for.",
    excerpt:
      "Two of London's biggest nightlife areas couldn't be more different. Here's an honest comparison so you pick the right scene for your group.",
    publishedAt: "2025-03-18",
    updatedAt: "2025-03-20",
    category: "Guides",
    readingTime: "8 min read",
    keywords: [
      "Mayfair vs Shoreditch",
      "London nightlife comparison",
      "best area for nightlife London",
      "Mayfair nightlife",
      "Shoreditch nightlife",
      "where to go out London",
      "Mayfair or Shoreditch clubbing",
    ],
    relatedClubs: ["tape-london", "cuckoo-club", "tabu-london", "beat-london"],
    faqs: [
      {
        question: "Is Mayfair or Shoreditch better for nightlife?",
        answer:
          "Neither is objectively better — they cater to different tastes. Mayfair offers high-end clubs, bottle service, smart dress codes, and an exclusive atmosphere. Shoreditch is more casual, creative, and underground. Choose Mayfair for VIP treatment and polish; choose Shoreditch for a more relaxed, indie vibe.",
      },
      {
        question: "Is Mayfair more expensive than Shoreditch for a night out?",
        answer:
          "Yes. Mayfair bottle service starts from £1,000 minimum spend and individual drinks cost £15-£20+. Shoreditch drinks are typically £10-£15, and many venues don't offer (or require) bottle service. However, Mayfair includes table service, priority entry, and a premium experience that Shoreditch clubs don't offer.",
      },
      {
        question: "What's the dress code difference between Mayfair and Shoreditch?",
        answer:
          "Mayfair enforces strict smart dress codes — collared shirts, smart shoes, no trainers. Shoreditch is the opposite — trainers, casual wear, and streetwear are not only accepted but often the norm. If you hate dressing up, Shoreditch is your area. If you want an excuse to look sharp, Mayfair is the place.",
      },
    ],
  },
  {
    slug: "corporate-event-london-clubs-entertaining-clients",
    title: "Entertaining Clients in London: The Best Clubs for Corporate Nights Out",
    metaTitle: "Corporate Entertainment London Clubs 2025 | Client Night Out Guide",
    metaDescription:
      "Need to entertain clients in London? Our guide to the best clubs for corporate entertaining — from dinner-and-club venues to exclusive members' clubs. Impress without the cringe.",
    excerpt:
      "Client entertaining at a nightclub sounds risky. Done right, it's the most memorable night you can offer. Here's how to pick the right venue and avoid the pitfalls.",
    publishedAt: "2025-03-22",
    updatedAt: "2025-03-25",
    category: "Events",
    readingTime: "8 min read",
    keywords: [
      "corporate night out London",
      "entertaining clients London clubs",
      "corporate entertainment Mayfair",
      "business dinner and club London",
      "client entertaining London nightlife",
      "corporate event nightclub London",
      "team night out London",
    ],
    relatedClubs: ["maddox", "tape-london", "scotch-of-st-james", "london-reign"],
    faqs: [
      {
        question: "Which London club is best for corporate entertaining?",
        answer:
          "Maddox is the top choice — the dinner-to-club transition gives your evening structure, the Italian restaurant is genuinely impressive, and the house music is sophisticated without being aggressive. Tape London works for music industry clients. Scotch of St James appeals to creatives. London Reign is the showstopper option for big-ticket entertainment.",
      },
      {
        question: "Can you expense bottle service at London clubs?",
        answer:
          "Many companies classify bottle service as client entertainment expenses. The venue provides a receipt for the full amount spent. Whether your company covers it depends on your internal policies. Some groups book through the company card, others split the bill. We provide all the documentation you need.",
      },
      {
        question: "How do you book a corporate night at a London club?",
        answer:
          "Message us on WhatsApp with your group size, client details (what industry, what they'd enjoy), your budget, and your preferred date. We'll recommend the right venue and table position, handle the booking, and make sure the night runs smoothly. We do this regularly for corporate groups.",
      },
      {
        question: "Is bottle service appropriate for client entertaining?",
        answer:
          "At the right venue, absolutely. A dinner-and-club evening at Maddox or London Reign is polished and impressive. A night at Tape London signals exclusivity and connections. Avoid the more party-focused venues (Luna, for example) for formal client entertaining unless you know your clients' tastes well.",
      },
    ],
  },
  {
    slug: "dear-darling-mayfair-guide",
    title: "Dear Darling Mayfair: The Complete Guide to One of Mayfair's Best New Clubs",
    metaTitle: "Dear Darling Mayfair Guide — Table Prices, Vibe & What to Expect",
    metaDescription:
      "Everything you need to know about Dear Darling in Mayfair. Table prices from £1,000, cocktail bar meets late-night club, dress code, music policy, and how to book.",
    excerpt:
      "Dear Darling has quickly become one of Mayfair's most talked-about venues. Here's why it deserves a spot on your shortlist — and what to expect when you get there.",
    publishedAt: "2025-06-10",
    updatedAt: "2026-03-01",
    category: "Club Guides",
    readingTime: "6 min read",
    keywords: [
      "Dear Darling Mayfair",
      "Dear Darling London",
      "Dear Darling table prices",
      "Dear Darling bottle service",
      "Dear Darling club review",
      "new clubs Mayfair",
    ],
    relatedClubs: ["dear-darling", "cuckoo-club", "maddox", "tabu-london"],
    faqs: [
      {
        question: "How much is a table at Dear Darling Mayfair?",
        answer:
          "Tables at Dear Darling start from £1,000 minimum spend for floor tables. VIP tables start from £2,000. Pricing is competitive with established Mayfair clubs and represents good value for the quality of the venue.",
      },
      {
        question: "What's the vibe at Dear Darling?",
        answer:
          "Dear Darling transitions from a sophisticated cocktail bar early in the evening to a proper late-night club. The crowd is well-dressed, fashion-conscious, and generally in their late twenties to thirties. Think stylish without being pretentious.",
      },
      {
        question: "What nights is Dear Darling open?",
        answer:
          "Dear Darling is open Thursday, Friday, and Saturday. All three nights maintain strong energy, with Saturdays being the busiest.",
      },
      {
        question: "How does Dear Darling compare to other Mayfair clubs?",
        answer:
          "Dear Darling sits between Cuckoo Club and Maddox in terms of vibe — stylish and well-designed with a focus on quality drinks and music. What sets it apart is the cocktail bar element and the newer, fresher feel compared to established venues.",
      },
    ],
  },
  {
    slug: "the-box-soho-bottle-service-guide",
    title: "The Box Soho: Bottle Service at London's Most Provocative Club",
    metaTitle: "The Box Soho — VIP Table Prices, Shows & What to Expect Inside",
    metaDescription:
      "The Box Soho is London's most daring nightclub. Tables from £1,500, avant-garde performances, extremely selective door. Here's the complete insider guide to getting in and making the most of it.",
    excerpt:
      "The Box isn't like any other club in London. Provocative performances, a fiercely selective door, and an atmosphere you won't find anywhere else. Here's what you need to know before you go.",
    publishedAt: "2025-07-05",
    updatedAt: "2026-03-01",
    category: "Club Guides",
    readingTime: "7 min read",
    keywords: [
      "The Box Soho",
      "The Box London club",
      "The Box table prices",
      "The Box bottle service",
      "The Box shows",
      "exclusive clubs London",
      "The Box door policy",
    ],
    relatedClubs: ["the-box", "cirque-le-soir", "tape-london", "london-reign"],
    faqs: [
      {
        question: "How much is a table at The Box Soho?",
        answer:
          "Tables at The Box start from £1,500 minimum spend. VIP and premium positions start from £3,000. The pricing reflects the exclusivity and the quality of live entertainment.",
      },
      {
        question: "How hard is it to get into The Box?",
        answer:
          "The Box has one of the most selective doors in London. Booking a table through us guarantees entry for your group. Without a table booking or membership, getting past the door on a weekend is extremely difficult. Dress code is creative and fashion-forward.",
      },
      {
        question: "What kind of shows does The Box have?",
        answer:
          "The Box features provocative, avant-garde performances including burlesque, cabaret, and performance art. The shows are designed to surprise and push boundaries. They're not for everyone, and that's deliberate — The Box rewards people who want something genuinely different.",
      },
      {
        question: "Is The Box the same as the New York one?",
        answer:
          "The Box London is inspired by the famous New York original and follows the same concept — provocative theatrical performances combined with a nightclub. The London venue has its own identity while honouring the New York original's spirit.",
      },
    ],
  },
  {
    slug: "luna-club-london-guide",
    title: "Luna Club London: Your Guide to Mayfair's Favourite Late-Night Spot",
    metaTitle: "Luna Club London — Table Prices, Music, Door Policy & Booking Guide",
    metaDescription:
      "Luna Club London is a sleek Mayfair hip-hop club with tables from £1,000. Strong crowd, intimate atmosphere, consistent quality. Here's the full guide to booking.",
    excerpt:
      "Luna Club has quietly built a loyal following among Mayfair regulars. If you want reliable hip-hop, a strong crowd, and proper bottle service without the gimmicks, this is it.",
    publishedAt: "2025-08-15",
    updatedAt: "2026-03-01",
    category: "Club Guides",
    readingTime: "5 min read",
    keywords: [
      "Luna Club London",
      "Luna London table prices",
      "Luna Club Mayfair",
      "Luna bottle service",
      "hip-hop clubs Mayfair",
      "Luna London review",
    ],
    relatedClubs: ["luna-club-london", "tabu-london", "funky-buddha", "cuckoo-club"],
    faqs: [
      {
        question: "How much is a table at Luna Club London?",
        answer:
          "Tables at Luna start from £1,000 minimum spend for floor tables. VIP tables start from £2,000. Standard Mayfair pricing for a club of this quality.",
      },
      {
        question: "What type of music does Luna play?",
        answer:
          "Luna focuses on hip-hop, RnB, Afrobeats, and UK rap. The DJs balance mainstream tracks with deeper cuts. If you want house or electronic music, try Maddox or BEAT London instead.",
      },
      {
        question: "Is Luna Club London a good club?",
        answer:
          "Luna is a strong all-rounder for hip-hop fans. It consistently delivers good music, a well-connected crowd, and reliable table service. It won't wow you with theatrics or gimmicks, but it delivers a solid Mayfair night out every time.",
      },
      {
        question: "How does Luna compare to Tabu London?",
        answer:
          "Both are hip-hop focused Mayfair clubs. Tabu has a more distinctive Japanese-inspired aesthetic and a slightly more underground music policy. Luna is more straightforward — a sleek, reliable club with a strong crowd. Both are excellent choices for hip-hop fans.",
      },
    ],
  },
  {
    slug: "best-hip-hop-clubs-mayfair-bottle-service",
    title: "Best Hip-Hop Clubs in Mayfair for Bottle Service",
    metaTitle: "Best Hip-Hop Clubs in Mayfair | VIP Tables & Bottle Service",
    metaDescription:
      "The definitive ranking of Mayfair's best hip-hop clubs for bottle service. Compare Tabu, Luna, Cuckoo, Funky Buddha, and Cirque — music policies, crowds, pricing, and which club suits your sub-genre.",
    excerpt:
      "Not all hip-hop clubs in Mayfair are the same. From underground Japanese-inspired venues to circus-themed clubs, here's how every hip-hop option actually compares.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "best hip hop clubs Mayfair",
      "hip hop bottle service London",
      "RnB clubs Mayfair",
      "Afrobeats clubs London",
    ],
    relatedClubs: ["tabu-london", "luna-club-london", "cuckoo-club", "funky-buddha"],
    faqs: [
      {
        question: "Which Mayfair club is best for hip-hop?",
        answer:
          "Tabu London is the best dedicated hip-hop club in Mayfair, with a Japanese-inspired underground aesthetic and a music policy that balances mainstream hits with deeper cuts. Luna Club London is the strongest alternative — sleek, reliable, and consistently delivers a quality hip-hop night.",
      },
      {
        question: "Do any Mayfair clubs play Afrobeats?",
        answer:
          "Yes — Tabu London, Luna Club London, and Funky Buddha all incorporate Afrobeats into their sets. Tabu and Luna weave it into their hip-hop and RnB rotation, while Funky Buddha's open-format policy means Afrobeats features regularly alongside other genres.",
      },
      {
        question: "How much is bottle service at a hip-hop club in Mayfair?",
        answer:
          "Most hip-hop clubs in Mayfair start from £1,000 minimum spend for a floor table and £2,000 for VIP. This is consistent across Tabu, Luna, Cuckoo Club, and Funky Buddha. Cirque Le Soir is also £1,000 for floor tables.",
      },
      {
        question: "Which Mayfair club plays UK rap?",
        answer:
          "Tabu London has the strongest UK rap presence in its rotation, followed by Luna Club London. Both DJs incorporate UK drill, grime, and UK rap alongside US hip-hop and RnB. Cuckoo Club's basement also features UK rap regularly.",
      },
      {
        question: "Can I hear house music at a hip-hop club in Mayfair?",
        answer:
          "Cuckoo Club is the best option — the basement plays hip-hop while the upstairs floor plays house and tech house. This makes it ideal for mixed groups. If you want pure house music, try Maddox or BEAT London instead.",
      },
    ],
  },
  {
    slug: "saturday-night-mayfair-table-booking-guide",
    title: "Saturday Night in Mayfair: The Complete Table Booking Guide",
    metaTitle: "Saturday Night Mayfair | Table Booking Guide & Best Clubs",
    metaDescription:
      "Everything you need to know about booking a table on Saturday night in Mayfair. Peak pricing, best clubs, how far ahead to book, and how to avoid common mistakes that ruin your night.",
    excerpt:
      "Saturday is the most expensive, most competitive, and most rewarding night in Mayfair. Here's how to navigate it properly — from pricing to timing to which clubs are worth the premium.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Guides",
    readingTime: "8 min read",
    keywords: [
      "Saturday night Mayfair",
      "best clubs Saturday London",
      "Saturday table booking",
      "Mayfair Saturday night out",
    ],
    relatedClubs: ["cirque-le-soir", "tape-london", "london-reign", "tabu-london"],
    faqs: [
      {
        question: "How much more expensive is Saturday night in Mayfair?",
        answer:
          "Saturday minimums can be 20-50% higher than weeknight prices at some venues, particularly for premium table positions. A VIP table that costs £2,000 on Thursday might be £2,500-£3,000 on Saturday. Floor tables generally hold closer to their standard minimums.",
      },
      {
        question: "How far in advance should I book a Saturday table?",
        answer:
          "Book at least 2-3 weeks in advance for most venues. Cirque Le Soir and Tape London can sell out 4-6 weeks ahead on Saturdays. Last-minute Saturday bookings are possible but you'll have limited choice of venue and table position.",
      },
      {
        question: "Which Mayfair club is best on Saturday night?",
        answer:
          "Cirque Le Soir offers the most theatrical Saturday experience. London Reign has the biggest production with Las Vegas-style shows. Tape London is the most exclusive. Tabu London offers a strong hip-hop Saturday without the highest price tag. The best choice depends on your group's preferences.",
      },
      {
        question: "What time should I arrive on Saturday?",
        answer:
          "Arrive between 10:30 PM and 11:30 PM. The venue opens at 10 PM but the atmosphere doesn't build until closer to 11. Arriving after midnight means you've missed the early-night energy and may find the venue at capacity. Your table is held for you regardless, but earlier arrival gets more value.",
      },
      {
        question: "Can I get a last-minute Saturday table in Mayfair?",
        answer:
          "Sometimes. Cancellations happen and some venues hold back tables for late bookings. Message us on WhatsApp and we'll check availability across all venues. Being flexible on venue choice massively increases your chances of securing a same-week Saturday table.",
      },
    ],
  },
  {
    slug: "stag-do-london-best-clubs-bachelor-party",
    title: "Stag Do in London: Best Clubs for a Bachelor Party",
    metaTitle: "Stag Do London Clubs | Best Venues for a Bachelor Party",
    metaDescription:
      "Planning a stag do in London? Our insider guide covers the best clubs, door policy for all-male groups, budget planning, and how to avoid the common mistakes that ruin stag nights.",
    excerpt:
      "A stag do at a Mayfair club can be legendary — or it can end at the door. Here's how to plan one that actually works, from venue choice to door policy to budget.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Events",
    readingTime: "8 min read",
    keywords: [
      "stag do London clubs",
      "bachelor party London",
      "stag night Mayfair",
      "best stag do venues London",
    ],
    relatedClubs: ["cirque-le-soir", "london-reign", "funky-buddha", "selene-london"],
    faqs: [
      {
        question: "Can you do a stag do at a Mayfair club?",
        answer:
          "Yes, but you need to plan it properly. All-male groups face stricter door scrutiny at Mayfair clubs. Booking a table is essential — it guarantees entry and removes the biggest risk. Some venues are more stag-friendly than others, and we'll guide you to the right one.",
      },
      {
        question: "How much does a stag do at a London club cost?",
        answer:
          "Budget £100-£200 per person. A table with £1,000-£2,000 minimum spend, split across 8-12 guests, covers drinks for the night. For a group of 10 at £1,500 minimum, that's £150 per person including all drinks, table, and entry. Add dinner beforehand and taxis for a complete budget.",
      },
      {
        question: "Which London clubs are best for stag parties?",
        answer:
          "London Reign is the top choice — the Las Vegas-style shows give the night a focal point and the venue handles groups well. Cirque Le Soir adds theatrical flair. Funky Buddha is relaxed and welcoming to groups. Selene London works well for larger parties with its multi-room layout.",
      },
      {
        question: "Will all-male groups get turned away at Mayfair clubs?",
        answer:
          "Without a table booking, yes — most Mayfair clubs will turn away large all-male groups, even well-dressed ones. With a table booking through us, your entry is guaranteed. We brief the venue on your group so the door team expects you. This is the single most important thing for a stag do.",
      },
      {
        question: "Can we bring stag do props to a Mayfair club?",
        answer:
          "Keep props minimal and classy. A sash for the groom is fine at most venues. Inflatable items, L-plates, matching novelty t-shirts, and fancy dress will get you turned away. Mayfair clubs expect smart dress regardless of the occasion. Dress well, behave well, and the night will be memorable for the right reasons.",
      },
    ],
  },
  {
    slug: "what-to-order-london-club-bottle-menu-guide",
    title: "What to Order at a London Club: The Complete Bottle Menu Guide",
    metaTitle: "What to Order at London Clubs | Bottle Menu & Spirits Guide",
    metaDescription:
      "Not sure what to order at a London club? Our complete guide to bottle menus — spirits, champagne, price ranges, best value options, and how to hit your minimum spend efficiently.",
    excerpt:
      "The bottle menu arrives and you're staring at 40 options ranging from £300 to £2,000. Here's exactly what to order, what to avoid, and how to get the best value from your minimum spend.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "what to order bottle service",
      "London club bottle menu",
      "best spirits for bottle service",
      "vodka vs champagne club",
    ],
    relatedClubs: ["tape-london", "maddox", "cirque-le-soir", "the-box"],
    faqs: [
      {
        question: "What is the best thing to order at a London club?",
        answer:
          "For most groups, a premium vodka (Grey Goose, Belvedere, or Ciroc) at £300-£500 is the best starting point — it's versatile, mixes with everything, and gives you roughly 20 drinks per bottle. Add a bottle of champagne (Moet at £350-£450) for a toast moment. Your waitress will help you balance the order.",
      },
      {
        question: "How many bottles do I need for my group?",
        answer:
          "A standard 70cl bottle of spirits yields roughly 20 drinks. For a group of 6-8 moderate drinkers, two bottles of spirits plus a bottle of champagne typically hits a £1,000 minimum. Heavy drinkers or larger groups may need more. Your waitress will advise based on your minimum spend.",
      },
      {
        question: "Is champagne worth ordering at a London club?",
        answer:
          "Champagne is less efficient per drink than spirits (6-7 glasses vs 20 drinks per bottle) but creates a visual and celebratory moment at the table. Most groups order one bottle of champagne alongside their spirits. For birthdays and celebrations, champagne is practically essential.",
      },
      {
        question: "What should I NOT order at a London club?",
        answer:
          "Avoid ordering individual cocktails if you have a table — they're overpriced compared to bottle service. Don't over-order champagne if you're trying to stay near your minimum. And don't order bottom-shelf spirits to save money — the markup is similar but the quality difference is noticeable.",
      },
      {
        question: "Can I order food at London clubs?",
        answer:
          "Most Mayfair clubs don't serve food beyond small snacks. Maddox is the notable exception — it has a full Italian restaurant that transitions into the club. If you want dinner and club combined, Maddox or London Reign (which offers a show-dinner format) are your best options.",
      },
    ],
  },
  {
    slug: "best-house-music-clubs-london-bottle-service",
    title: "Best Clubs in London for House Music & Bottle Service",
    metaTitle: "Best House Music Clubs London | VIP Tables & Bottle Service",
    metaDescription:
      "The best London clubs for house music with VIP bottle service. Compare Maddox, Cuckoo Club, BEAT London, and Dear Darling — sound systems, DJ policies, sub-genres, and table prices.",
    excerpt:
      "If you want proper house music with the comfort of bottle service, your options in London are more limited than you'd think. Here are the clubs that actually deliver both.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "best house music clubs London",
      "house music bottle service",
      "tech house clubs London",
      "deep house Mayfair",
    ],
    relatedClubs: ["maddox", "cuckoo-club", "beat-london", "dear-darling"],
    faqs: [
      {
        question: "Which Mayfair club is best for house music?",
        answer:
          "Maddox is the best Mayfair club for house music. The music policy is sophisticated deep house and tech house, the dinner-to-club format gives the evening structure, and the sound system does the music justice. Cuckoo Club's upstairs floor is the strongest alternative within Mayfair.",
      },
      {
        question: "Does BEAT London play house music?",
        answer:
          "Yes — BEAT London is the most electronic-focused club on the Mayfair circuit. It plays house, tech house, and electronic music with a proper sound system that rivals dedicated music venues. It also runs later than most clubs, often until 5-6 AM, which suits the house music crowd.",
      },
      {
        question: "How much is bottle service at a house music club in London?",
        answer:
          "Tables at Maddox, Cuckoo Club, and Dear Darling start from £1,000 minimum spend. BEAT London starts from £1,000 as well. These are standard Mayfair prices regardless of music genre. VIP tables start from £2,000 at most venues.",
      },
      {
        question: "What is the difference between deep house and tech house?",
        answer:
          "Deep house is smoother and more melodic — warm basslines, soulful vocals, a relaxed groove. Tech house is more driving and percussive — heavier beats, more energy, designed for peak-time dancing. Maddox leans towards deep house, BEAT London is more tech house, and Cuckoo's upstairs floor mixes both.",
      },
      {
        question: "Are there any late-night house music clubs in London with bottle service?",
        answer:
          "BEAT London is the standout option, regularly running until 5-6 AM. Most Mayfair clubs close by 3-3:30 AM. If you want house music past 3 AM with a table, BEAT is your only premium option in the area.",
      },
    ],
  },
  {
    slug: "where-to-sit-table-positioning-london-clubs",
    title: "Where to Sit: Table Positioning Guide for London Clubs",
    metaTitle: "Where to Sit at London Clubs | Table Positioning Guide",
    metaDescription:
      "A detailed guide to table positioning at London's top clubs. Learn which positions cost more, how to request specific spots, and club-by-club breakdowns for Cirque, Tape, Reign, and Cuckoo.",
    excerpt:
      "Not all tables are created equal. Your position inside the club shapes your entire night — from the energy around you to the price you pay. Here's how to choose wisely.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Tips",
    readingTime: "6 min read",
    keywords: [
      "table positioning London clubs",
      "best table position",
      "where to sit nightclub",
      "floor vs VIP table",
      "table location",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "london-reign", "cuckoo-club"],
    faqs: [
      {
        question: "Does table position affect the price at London clubs?",
        answer:
          "Yes. Elevated VIP tables and stage-adjacent positions carry higher minimum spends — typically £1,500–£3,000+ compared to £1,000 for standard floor tables. The best-positioned tables command a premium because they offer superior views, more privacy, or closer proximity to the action.",
      },
      {
        question: "Can I request a specific table position when booking?",
        answer:
          "Absolutely. When you book through us, let us know your preference — dance floor adjacent, private booth, elevated VIP, or stage-view. We'll request your preferred position with the venue. Early bookings have the best chance of securing prime spots, especially on Saturdays.",
      },
      {
        question: "What is the best table position at a London club?",
        answer:
          "It depends on what you want from the night. Dance floor tables put you in the centre of the energy. Elevated VIP gives you a commanding view and more exclusivity. Booths offer privacy for conversation. Stage-view tables at show clubs like Reign and Cirque give you the best entertainment experience.",
      },
      {
        question: "What is the difference between floor tables and VIP tables?",
        answer:
          "Floor tables are on the main level among the crowd — great energy but less privacy. VIP tables are elevated or in a dedicated section with better views, more space, and a higher minimum spend. VIP typically starts at £1,500–£2,000 versus £1,000 for floor tables.",
      },
      {
        question: "Which London clubs have the best VIP sections?",
        answer:
          "Tape London's intimate booths offer genuine privacy. Cirque Le Soir's stage-side VIP puts you next to the performers. London Reign's elevated VIP gives a panoramic view of the show. Cuckoo Club's upstairs VIP feels like a separate venue entirely. Each offers a distinct experience.",
      },
    ],
  },
  {
    slug: "mayfair-night-out-dinner-drinks-club-itinerary",
    title: "Planning a Night Out in Mayfair: Dinner, Drinks & Club Itinerary",
    metaTitle: "Mayfair Night Out Itinerary | Dinner, Drinks & Club Guide",
    metaDescription:
      "Plan the perfect Mayfair evening from 7pm to 3am. Sample itineraries with dinner, pre-drinks, and club recommendations — including budget breakdowns and optimal timing.",
    excerpt:
      "A great Mayfair night doesn't start at the club door. The best evenings are planned from dinner onwards. Here are three complete itineraries — timed, priced, and tested.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Guides",
    readingTime: "8 min read",
    keywords: [
      "Mayfair night out",
      "dinner and club London",
      "pre-drinks Mayfair",
      "London evening itinerary",
      "night out plan Mayfair",
    ],
    relatedClubs: ["maddox", "tape-london", "cuckoo-club", "dear-darling"],
    faqs: [
      {
        question: "What time should I arrive at a Mayfair club?",
        answer:
          "Aim for 10:30 PM to 11:30 PM. Most clubs open at 10 PM but the atmosphere doesn't build until around 10:30. Arriving after midnight means the venue is already busy and you'll miss the early energy. If you have a table booking, 11 PM is the sweet spot.",
      },
      {
        question: "Where should I eat before going to a Mayfair club?",
        answer:
          "Maddox offers a seamless dinner-to-club transition with its Italian restaurant upstairs. For standalone dining, Mayfair has dozens of excellent options within walking distance of the clubs. Budget £50–£100 per person for a proper pre-club dinner in the area.",
      },
      {
        question: "How much does a full night out in Mayfair cost?",
        answer:
          "A complete Mayfair evening — dinner, pre-drinks, and bottle service — typically costs £200–£400 per person depending on your choices. The Sophisticate itinerary (dinner + club at Maddox) runs around £200–£250pp. The Explorer (Soho dinner + cocktails + Cirque) is £250–£350pp.",
      },
      {
        question: "What are the best pre-drinks bars near Mayfair clubs?",
        answer:
          "For cocktails, try the bars along Heddon Street or around Shepherd Market. Soho is a short walk and offers everything from speakeasies to rooftop bars. Keep pre-drinks to 2–3 cocktails — you don't want to arrive at the club already too far gone.",
      },
      {
        question: "Can I have dinner and then go to a club in the same venue?",
        answer:
          "Yes — Maddox is the standout option for this. Their Italian restaurant transitions directly into the club downstairs. It's the most seamless dinner-to-club experience in Mayfair. Some other venues offer pre-club dining arrangements on request.",
      },
    ],
  },
  {
    slug: "london-club-age-policy-id-guide",
    title: "London Club Age Policy & ID Guide: What You Need to Know",
    metaTitle: "London Club Age Policy & ID Guide | Entry Requirements",
    metaDescription:
      "Everything you need to know about age policies and ID requirements at London clubs. Accepted ID types, international visitor guidance, and what the door teams actually look for.",
    excerpt:
      "Age policies at London clubs are straightforward on paper but nuanced in practice. Here's what ID you need, what happens if it's rejected, and why some 18+ clubs feel more like 25+.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Tips",
    readingTime: "5 min read",
    keywords: [
      "London club age policy",
      "ID for London clubs",
      "age limit Mayfair clubs",
      "club entry requirements London",
      "what ID do I need",
    ],
    relatedClubs: ["cirque-le-soir", "tape-london", "cuckoo-club", "tabu-london"],
    faqs: [
      {
        question: "What is the age limit for London clubs?",
        answer:
          "Most Mayfair clubs are legally 18+. However, the typical crowd skews 25–35, and door teams are more selective with younger-looking guests. Being 18 gets you through the legal requirement, but venues curate a mature crowd — so dress and conduct matter more the younger you look.",
      },
      {
        question: "What ID do I need for London clubs?",
        answer:
          "Accepted ID: a valid passport, a UK or EU driving licence, or a PASS-accredited proof of age card. Student IDs, work IDs, and photocopies are NOT accepted at any Mayfair venue. Always bring a government-issued photo ID — no exceptions.",
      },
      {
        question: "Can international visitors use foreign ID at London clubs?",
        answer:
          "A passport is the safest option for international visitors and is universally accepted. Some clubs accept foreign driving licences, but acceptance varies. If you're visiting from abroad, bring your passport — it removes any ambiguity at the door.",
      },
      {
        question: "Do London clubs accept digital ID?",
        answer:
          "Most Mayfair clubs do not accept digital IDs or ID apps as of 2026. Physical government-issued photo ID is required. This may change over time, but for now, always bring a physical document. Don't rely on your phone.",
      },
      {
        question: "Will I get ID'd at a London club if I look over 25?",
        answer:
          "Possibly. Door staff have a legal obligation and most venues operate a Challenge 25 policy — meaning if you could plausibly be under 25, they'll ask. Always carry your ID regardless of your age. Being caught without it means you won't get in, no matter how old you look.",
      },
    ],
  },
  {
    slug: "best-london-clubs-large-groups",
    title: "Best London Clubs for Large Groups (10-30+ People)",
    metaTitle: "Best London Clubs for Large Groups | 10-30+ People Guide",
    metaDescription:
      "Planning a night out for 10, 20, or 30+ people? Our guide to the best London clubs for large groups — which venues handle big parties, how to configure tables, and budget per head.",
    excerpt:
      "Organising a large group night in London is a logistical challenge. The wrong venue turns it into a disaster. Here are the clubs that genuinely handle big groups well — and how to book them.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Events",
    readingTime: "7 min read",
    keywords: [
      "large group clubs London",
      "big group nightclub",
      "20 people table booking",
      "group night out London",
      "party of 30 London club",
    ],
    relatedClubs: ["selene-london", "london-reign", "cirque-le-soir", "funky-buddha"],
    faqs: [
      {
        question: "Which London club is best for large groups?",
        answer:
          "Selene London is the standout for large groups (20+) thanks to its multi-room layout including bowling lanes and multiple bar areas. London Reign handles big parties well with its large capacity and show format. For groups of 10–15, most Mayfair clubs work — it's groups of 20+ where venue choice becomes critical.",
      },
      {
        question: "How much does a large group table booking cost in London?",
        answer:
          "For a group of 20 across two tables, budget £2,000–£3,000 total (£100–£150 per person). For 30+ across three or four tables, expect £3,000–£5,000+ depending on the venue and night. Larger groups actually get better per-person value because the minimum spend splits further.",
      },
      {
        question: "Can London clubs accommodate 30+ people at tables?",
        answer:
          "Yes — Selene London, London Reign, and several other venues regularly host groups of 30+. You'll need multiple adjacent tables, which we coordinate with the venue. Book early (3–4 weeks ahead for Saturdays) to secure grouped table positions.",
      },
      {
        question: "How do you split the bill for a large group at a club?",
        answer:
          "Most clubs can split the bill across 2–3 cards but not 20. The simplest approach: one person or a few people pay the venue, then split via bank transfer afterwards. Agree on the per-person contribution before the night. We can advise on the expected total when you book.",
      },
      {
        question: "How far in advance should I book for a large group?",
        answer:
          "For groups of 15+, book at least 3–4 weeks ahead for Fridays and Saturdays. Groups of 20+ requiring multiple adjacent tables should book 4–6 weeks in advance. Weeknight bookings can be arranged with shorter notice. The earlier you book, the better the table configuration.",
      },
    ],
  },
  {
    slug: "friday-night-vs-saturday-night-london-clubs",
    title: "Friday Night vs Saturday Night at London Clubs: Which Is Better?",
    metaTitle: "Friday vs Saturday Night London Clubs | Which Night to Book",
    metaDescription:
      "Friday or Saturday — which is the better night to go out in London? We compare pricing, atmosphere, door strictness, music, and crowd across Mayfair's top clubs.",
    excerpt:
      "It's the eternal debate: Friday or Saturday? The answer isn't as simple as you think. Each night has distinct advantages — and the right choice depends on what kind of night you want.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "Friday vs Saturday London clubs",
      "best night to go out London",
      "Friday night Mayfair",
      "Saturday or Friday clubbing",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "cuckoo-club", "maddox"],
    faqs: [
      {
        question: "Is Friday or Saturday better for London clubs?",
        answer:
          "Neither is universally better — they're different experiences. Friday offers better value (10–30% lower minimums), a more local and industry crowd, and a slightly easier door. Saturday delivers peak energy, the biggest DJs, more international visitors, and the best atmosphere. Choose based on your priorities.",
      },
      {
        question: "Is Saturday more expensive than Friday at London clubs?",
        answer:
          "Yes. Saturday minimum spends are typically 10–30% higher than Friday at most Mayfair venues. Some clubs maintain the same base minimum but premium table positions (VIP, stage-view) cost more on Saturdays. Bottle prices remain the same — it's the table minimums that increase.",
      },
      {
        question: "Is it harder to get into London clubs on Saturday?",
        answer:
          "Yes. Saturday door policies are noticeably stricter. Venues are at peak capacity, and door teams are more selective with walk-ins and guest list. A table booking removes this issue entirely — guaranteed entry regardless of the night. But if you're relying on guest list or walk-in, Friday is significantly easier.",
      },
      {
        question: "What is the crowd like on Friday vs Saturday in Mayfair?",
        answer:
          "Friday crowds tend to be more local — London-based professionals, industry people, and Mayfair regulars. Saturday brings a more international and diverse crowd, including tourists and visitors from across the UK. Friday feels like an insider night; Saturday feels like the main event.",
      },
      {
        question: "Which clubs are better on Friday than Saturday?",
        answer:
          "Maddox and Cuckoo Club are excellent on Fridays — strong local crowds and great atmosphere without Saturday's intensity. Tape London's Friday is popular with music industry insiders. Cirque Le Soir is arguably best on Saturday when the energy peaks. It depends on the venue's character and your preferences.",
      },
    ],
  },
  {
    slug: "best-london-clubs-for-couples",
    title: "Best London Clubs for Couples: A Date Night Guide to Mayfair",
    metaTitle: "Best London Clubs for Couples | Date Night Guide",
    metaDescription:
      "Discover the best London clubs for couples. From intimate Mayfair booths to buzzing dance floors, find the perfect date night venue with bottle service.",
    excerpt:
      "Not every London club suits a couple. Some are too loud, too crowded, or too group-oriented. Here are the venues that actually work for two — and how to book them.",
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "best London clubs for couples",
      "date night clubs London",
      "couples night out Mayfair",
      "romantic nightclub London",
      "VIP table for two London",
    ],
    relatedClubs: ["tape-london", "maddox", "cuckoo-club", "dear-darling", "scotch-of-st-james"],
    faqs: [
      {
        question: "Can you book a VIP table for just two people in London?",
        answer:
          "Yes. Most Mayfair clubs accept table bookings for two. Minimum spends typically start from &pound;1,000 regardless of group size, so you&apos;ll be spending more per person than a larger group — but you get a private space, dedicated service, and guaranteed entry. It&apos;s the best way to experience a club as a couple.",
      },
      {
        question: "Which London club is most romantic for a date night?",
        answer:
          "Tape London is the standout for romance — intimate lighting, deep booths, exceptional sound, and a refined crowd. Maddox also works brilliantly because you can start with dinner upstairs and move to the club seamlessly. Both feel more like a private experience than a heaving nightclub.",
      },
      {
        question: "What should couples wear to a Mayfair club?",
        answer:
          "Smart and polished. For men: tailored trousers, a quality shirt, and smart shoes — no trainers, no sportswear. For women: cocktail dress or stylish separates with heels. Mayfair clubs enforce strict dress codes, and as a couple you&apos;ll want to match the venue&apos;s premium atmosphere.",
      },
      {
        question: "Is bottle service worth it for just two people?",
        answer:
          "Absolutely — and for couples it&apos;s arguably the best way to experience a London club. You get a reserved space, skip the queue entirely, and enjoy dedicated waitress service all night. Two people won&apos;t finish a full bottle of spirits, so consider ordering champagne or a premium spirit you&apos;ll both enjoy.",
      },
    ],
  },
  {
    slug: "best-weeknight-clubs-london-midweek",
    title: "Best Weeknight Clubs in London: Why Midweek Mayfair Is Worth It",
    metaTitle: "Best Weeknight Clubs London | Midweek Guide",
    metaDescription:
      "Discover the best weeknight clubs in London. Lower minimums, insider crowds, and easier entry — why Tuesday to Thursday in Mayfair is the smart move.",
    excerpt:
      "Mayfair doesn&apos;t shut down on weeknights. From Tuesday at Cuckoo Club to Thursday at Tape London, midweek clubbing offers better value, a more local crowd, and none of the Saturday chaos.",
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    category: "Guides",
    readingTime: "8 min read",
    keywords: [
      "best weeknight clubs London",
      "midweek clubs Mayfair",
      "Thursday night clubs London",
      "Wednesday night out London",
      "weeknight bottle service London",
    ],
    relatedClubs: ["cuckoo-club", "tape-london", "scotch-of-st-james", "the-box", "maddox"],
    faqs: [
      {
        question: "Which London clubs are open on weeknights?",
        answer:
          "Several top Mayfair venues operate midweek. Cuckoo Club opens Tuesday, Thursday, Friday, and Saturday. Tape London, Scotch of St James, and The Box run Wednesday through Saturday. Maddox, Tabu London, Selene London, Dear Darling, and Luna Club open Thursday to Saturday. Wednesday and Thursday offer the widest choice.",
      },
      {
        question: "Are weeknight minimum spends lower than weekends?",
        answer:
          "Yes. Midweek minimum spends are typically 20&ndash;40% lower than Saturday rates. A table that starts at &pound;1,500 on Saturday might be &pound;1,000 on a Thursday. Wednesday minimums can be even lower. The bottle prices stay the same &mdash; it&apos;s only the table minimum that drops.",
      },
      {
        question: "Is the atmosphere good at London clubs on a weeknight?",
        answer:
          "Absolutely. Thursday nights at venues like Tape London and Cuckoo Club are genuinely buzzing &mdash; you&apos;ll find a more local, industry-heavy crowd rather than tourists. Wednesday is quieter but still has a strong atmosphere at places like Cirque Le Soir and The Box. The smaller crowds actually make for a more sociable, less frantic experience.",
      },
      {
        question: "Is the dress code more relaxed on weeknights?",
        answer:
          "No. Mayfair dress codes apply every night, regardless of the day. Smart shoes, collared shirts for men, and cocktail-appropriate outfits for women are still mandatory. Door staff are slightly less selective on quieter nights, but the dress standard does not change.",
      },
    ],
  },
  {
    slug: "bottle-service-etiquette-london-clubs",
    title: "Bottle Service Etiquette at London Clubs: The Unwritten Rules",
    metaTitle: "Bottle Service Etiquette London Clubs | London Bottle Service",
    metaDescription:
      "Learn the unwritten rules of bottle service etiquette at London clubs. From tipping to table behaviour, everything you need to know before your first booking.",
    excerpt:
      "Nobody tells you the unwritten rules of bottle service until you break one. Here&apos;s what the regulars know about table etiquette at London&apos;s top clubs &mdash; and what to avoid.",
    publishedAt: "2026-04-04",
    updatedAt: "2026-04-04",
    category: "Tips",
    readingTime: "7 min read",
    keywords: [
      "bottle service etiquette london clubs",
      "london club table etiquette",
      "bottle service tips london",
      "VIP table behaviour london nightclub",
      "how to behave bottle service",
    ],
    relatedClubs: ["tape-london", "maddox", "cirque-le-soir", "scotch-of-st-james", "cuckoo-club"],
    faqs: [
      {
        question: "How much should you tip for bottle service in London?",
        answer:
          "A 15&ndash;20% tip on your total spend is standard at London clubs. Your waitress works hard to keep your table stocked, your ice fresh, and your night running smoothly. Some venues add a discretionary service charge &mdash; check your bill. If it&apos;s not included, tip in cash directly to your waitress at the end of the night.",
      },
      {
        question: "Can you bring friends to your bottle service table?",
        answer:
          "Yes, but within reason. Your table booking covers a set number of guests (usually 5&ndash;10 per table depending on the venue). Adding extra people beyond the agreed number may require a higher minimum spend or a second table. Always confirm your final guest count with your booker before the night.",
      },
      {
        question: "What happens if you don&apos;t reach the minimum spend?",
        answer:
          "You still pay it. The minimum spend is a guaranteed commitment &mdash; if you order &pound;800 of drinks on a &pound;1,000 minimum, you&apos;ll be charged the full &pound;1,000. Plan your orders so you reach the minimum without wasting bottles. Your waitress can help you pace your spend through the night.",
      },
      {
        question: "Can you stand on the furniture at a London club?",
        answer:
          "No. Standing on tables, sofas, or booth seating will get you warned immediately and potentially removed. It damages furniture, creates a safety hazard, and marks you as someone who doesn&apos;t belong. Keep your feet on the floor &mdash; the table is for drinks, not dancing.",
      },
    ],
  },
  {
    slug: "what-comes-with-bottle-service-london-club",
    title: "What Comes with Bottle Service at a London Club",
    metaTitle: "What Comes with Bottle Service London | London Bottle Service",
    metaDescription:
      "Find out exactly what comes with bottle service at London clubs. Mixers, ice, sparklers, waitress service, and everything included in your table booking.",
    excerpt:
      "Booked a table but not sure what you actually get? Here is everything that comes with bottle service at London clubs, from the physical setup to the service you can expect all night.",
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "what comes with bottle service london",
      "bottle service package london clubs",
      "what is included in bottle service",
      "london club table service included",
      "bottle service setup london",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "maddox", "selene-london", "scotch-of-st-james"],
    faqs: [
      {
        question: "What mixers are included with bottle service in London?",
        answer:
          "Standard mixers are included at no extra charge. This typically covers tonic water, soda water, cranberry juice, orange juice, lemonade, and Red Bull (sometimes charged separately at certain venues). Your waitress will keep mixers topped up throughout the night. Premium or unusual mixers may need to be requested in advance.",
      },
      {
        question: "Do you get sparklers with every bottle at a London club?",
        answer:
          "Not automatically. Sparklers and LED bottle presentations are available at most venues but are usually reserved for champagne orders or by request. At clubs like Cirque Le Soir and Selene London, the bottle presentation is part of the theatre. If you want sparklers on your spirits, just ask your waitress when ordering.",
      },
      {
        question: "Is a dedicated waitress included with bottle service?",
        answer:
          "Yes. Every table booking comes with a dedicated waitress who manages your orders, pours drinks, keeps your ice and mixers stocked, and ensures your table stays clean and well-presented. At busier venues like Tape London, one waitress may cover two or three tables, but you will always have a direct point of contact.",
      },
      {
        question: "Can you bring your own drinks or food to a bottle service table?",
        answer:
          "No. London clubs do not allow outside drinks or food. Everything consumed must be purchased through the venue. The exception is birthday cakes, which some clubs permit if arranged in advance through your booker. All alcohol must be ordered from the club.",
      },
    ],
  },
  {
    slug: "is-bottle-service-london-worth-it",
    title: "Is Bottle Service at London Clubs Worth It? A Realistic Guide",
    metaTitle: "Is Bottle Service Worth It? | London Bottle Service",
    metaDescription:
      "Is bottle service at London clubs worth the money? An honest breakdown of costs, what you get, and when it makes sense to book a table.",
    excerpt:
      "A table at a London club starts from £1,000. Whether that’s good value or a waste depends entirely on how you use it. Here’s the honest breakdown.",
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "is bottle service worth it london",
      "bottle service value london clubs",
      "should I book a table london club",
      "london club table booking worth it",
      "bottle service pros cons london",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "maddox", "cuckoo-club", "scotch-of-st-james"],
    faqs: [
      {
        question: "Is bottle service worth it for a group of 4?",
        answer:
          "Yes, for a group of four it can work well. At £1,000 minimum spend, that’s £250 per person for guaranteed entry, a reserved table, a full bottle of spirits or champagne, mixers, and dedicated waitress service all night. Compare that to buying individual drinks at £15–20 each and you’re getting significantly more for a similar per-person spend.",
      },
      {
        question: "What is the minimum spend for bottle service in London?",
        answer:
          "Most London clubs start at £1,000 minimum spend per table, which typically includes one bottle of spirits with mixers or champagne. Premium tables at venues like Tape London start from £1,500. The minimum spend is not the bottle price — it is the total you must spend at your table across the night.",
      },
      {
        question: "Can you share bottle service with another group?",
        answer:
          "No. Each table booking is private to your group. You cannot split a table with strangers. However, if your group is small, you can still book a table for just two or three people. The minimum spend remains the same regardless of group size, so larger groups get better value per head.",
      },
      {
        question: "Is it cheaper to just buy drinks at the bar instead?",
        answer:
          "Individually, yes. A drink at the bar costs £15–20. But if your group of six buys rounds all night, you could easily spend £600–800 between you with no reserved space, no queue-skip, and no dedicated service. A £1,000 table gives you all of that plus a full bottle. For groups over four, the maths often favours bottle service.",
      },
    ],
  },
  {
    slug: "how-london-club-minimum-spend-works",
    title: "How London Club Minimum Spend Actually Works",
    metaTitle: "How Club Minimum Spend Works | London Bottle Service",
    metaDescription:
      "London club minimum spend explained: what counts, what happens if you fall short, and how to get the most from your table booking. A practical breakdown.",
    excerpt:
      "Minimum spend confuses first-timers more than anything else about bottle service. Here is how it actually works, what counts toward it, and how to avoid common mistakes.",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    category: "Pricing",
    readingTime: "7 min read",
    keywords: [
      "london club minimum spend explained",
      "minimum spend bottle service london",
      "how minimum spend works nightclub",
      "bottle service minimum spend uk",
      "london club table minimum",
    ],
    relatedClubs: [
      "cirque-le-soir",
      "tape-london",
      "maddox",
      "cuckoo-club",
      "selene-london",
    ],
    faqs: [
      {
        question: "What does minimum spend mean at a London club?",
        answer:
          "Minimum spend is the amount you commit to spending on drinks at your table. It is not an entry fee or a deposit you get back. If your minimum is £1,000, you order £1,000 worth of bottles, champagne, or spirits. Mixers, ice, and table service are included at no extra cost.",
      },
      {
        question: "What happens if you don't reach the minimum spend?",
        answer:
          "You still pay the full minimum spend amount. If you order £700 of drinks on a £1,000 minimum, you are charged £1,000. The venue does not refund the difference. This is why planning your order in advance matters, so you use the full amount on drinks you actually want.",
      },
      {
        question: "Does the minimum spend include entry to the club?",
        answer:
          "Yes. Your table booking includes entry for your agreed group size. There is no separate cover charge or entry fee on top of the minimum spend. Everyone on your table list gets in as part of the booking.",
      },
      {
        question: "Is the minimum spend per person or per table?",
        answer:
          "Per table. A £1,000 minimum is the total for the table, not per guest. For a group of eight, that works out to £125 per person. For a group of four, it is £250 each. The per-person cost drops the larger your group.",
      },
    ],
  },
  {
    slug: "bottle-service-deposits-payments-london",
    title: "How Bottle Service Deposits and Payments Work at London Clubs",
    metaTitle: "Bottle Service Deposits & Payments | London Bottle Service",
    metaDescription:
      "How deposits, card holds, and payments work for bottle service at London clubs. Cancellation policies, splitting bills, and what to expect on the night.",
    excerpt:
      "Nobody explains the payment side of bottle service until you are already committed. Here is how deposits, card holds, and final bills actually work at London clubs.",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
    category: "Pricing",
    readingTime: "7 min read",
    keywords: [
      "bottle service deposit payment london",
      "london club table deposit",
      "bottle service cancellation policy london",
      "how to pay for bottle service london",
      "splitting bottle service bill london",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "cuckoo-club", "selene-london", "maddox"],
    faqs: [
      {
        question: "How much is the deposit for bottle service in London?",
        answer:
          "Most London clubs require a deposit of 50% of the minimum spend to confirm your booking. On a standard table with a £1,000 minimum, expect to pay £500 upfront. Some venues charge the full amount in advance for peak nights like New Year's Eve or bank holidays.",
      },
      {
        question: "Can you split the bill across multiple cards at a London club?",
        answer:
          "Yes, most London clubs will split the final bill across two or three cards. Let your waitress know at the start of the night. Some venues prefer a single card on file for the table but will accommodate a split at the end. Splitting across more than four cards is generally not possible.",
      },
      {
        question: "What happens to your deposit if you cancel bottle service?",
        answer:
          "Cancellation policies vary. Most clubs offer a full refund if you cancel 48 to 72 hours in advance. Cancel within 24 hours and you typically lose the deposit. No-shows forfeit the full deposit with no exception. Always confirm the cancellation window with your booker when you pay.",
      },
      {
        question: "Do London clubs take cash for bottle service?",
        answer:
          "Almost never for the main bill. London clubs operate on card payments for table bookings, and most are fully cashless for bar purchases too. Tips can be given in cash directly to your waitress, but the deposit and final spend will always be processed by card.",
      },
    ],
  },
  {
    slug: "champagne-vs-spirits-london-bottle-menu",
    title: "Champagne vs Spirits: How to Order from a London Bottle Menu",
    metaTitle: "Champagne vs Spirits London Clubs | London Bottle Service",
    metaDescription:
      "Champagne vs spirits at London clubs: which gives better value, how to choose, and what we order after years of booking bottle service tables.",
    excerpt:
      "Every table booking starts with the same question: champagne or spirits? Here is how the pricing, value, and experience compare across London clubs.",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    category: "Pricing",
    readingTime: "8 min read",
    keywords: [
      "champagne vs spirits bottle service london",
      "what to order bottle service london",
      "bottle menu london clubs value",
      "champagne or vodka london club",
      "london bottle service order guide",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "cuckoo-club", "selene-london", "funky-buddha"],
    faqs: [
      {
        question: "Is champagne or spirits better value at London clubs?",
        answer:
          "Spirits offer better value per drink. A bottle of vodka at around 700ml gives you roughly 14 single measures, working out to about 14 mixed drinks for your table. A bottle of champagne gives you roughly six glasses. At similar price points, spirits stretch your minimum spend further, especially for groups of five or more.",
      },
      {
        question: "What is the cheapest bottle you can order at a London club?",
        answer:
          "Standard vodka and gin are typically the most affordable options on a London bottle menu, starting from around 350 to 450 pounds as of May 2026. Belvedere, Grey Goose, and Ciroc are the most commonly stocked house-level premium vodkas. Prosecco may appear cheaper per bottle but offers fewer servings.",
      },
      {
        question: "Can you mix champagne and spirits in one bottle service order?",
        answer:
          "Yes. Most groups order a combination. A common approach is to start with a bottle of champagne for the first hour, then switch to spirits for the rest of the night. As long as your total spend meets the table minimum, you can order across both categories freely.",
      },
      {
        question: "Do London clubs charge more for champagne on weekends?",
        answer:
          "Bottle prices are generally fixed on the printed menu regardless of the night. However, some venues raise the table minimum spend on Fridays and Saturdays, which means you may need to order more bottles overall. The per-bottle price stays the same, but your total commitment increases.",
      },
    ],
  },
  {
    slug: "how-far-in-advance-to-book-bottle-service-london",
    title: "How Far in Advance Should You Book Bottle Service in London?",
    metaTitle: "How Far in Advance to Book Bottle Service London?",
    metaDescription:
      "How far in advance to book bottle service in London: real lead times for weeknights, weekends, and peak dates from someone who books tables every week.",
    excerpt:
      "Wondering when to lock in your London bottle service table? Here are the real booking windows for weeknights, weekends, and the dates that fill up earliest.",
    publishedAt: "2026-05-16",
    updatedAt: "2026-05-16",
    category: "Tips",
    readingTime: "7 min read",
    keywords: [
      "how far in advance to book bottle service london",
      "london bottle service booking lead time",
      "when to book table london nightclub",
      "last minute bottle service london",
      "advance booking london clubs",
    ],
    relatedClubs: ["cuckoo-club", "tape-london", "cirque-le-soir", "selene-london", "maddox"],
    faqs: [
      {
        question: "How far in advance should you book bottle service in London?",
        answer:
          "For weeknight tables (Tuesday to Thursday), 2 to 4 days ahead is comfortable. For standard Friday and Saturday tables, aim for 7 to 14 days. For peak dates such as New Year's Eve, Valentine's, bank holiday Fridays, and major event weeks, 3 to 6 weeks is realistic and some venues open earlier than that.",
      },
      {
        question: "Can you book bottle service on the same day in London?",
        answer:
          "Yes, especially on Tuesday and Wednesday nights for groups of four or fewer at non-peak venues. Same-day bookings on Friday and Saturday are harder and usually mean smaller tables or higher minimum spends. The fastest route on the day is messaging directly on WhatsApp rather than filling in an online form.",
      },
      {
        question: "When should you book for New Year's Eve in London?",
        answer:
          "New Year's Eve tables at Mayfair clubs typically open in September or October and the prime positions are confirmed by mid-November. By December, most venues only have back-wall tables left at elevated minimum spends. If New Year's Eve matters, treat October as your booking deadline.",
      },
      {
        question: "Do London clubs charge more for last-minute bottle service bookings?",
        answer:
          "Last-minute weekend bookings often come with a higher minimum spend because the entry-level tables go first. A table that would have cost a 1,000 pound minimum two weeks out can move to 1,500 pounds or more by Friday afternoon. Premium bottles can also run out, so plan early if a specific bottle matters to you.",
      },
    ],
  },
  {
    slug: "champagne-bottle-sizes-explained",
    title: "Champagne Bottle Sizes Explained: Magnum to Methuselah",
    metaTitle: "Champagne Bottle Sizes Explained | London Bottle Service",
    metaDescription:
      "A guide to champagne bottle sizes in London clubs, from the standard 75cl to the magnum, jeroboam and beyond, and which size to order for your table.",
    excerpt:
      "Magnum, jeroboam, methuselah: London bottle menus are full of big formats. Here is what each champagne bottle size means and which one suits your table.",
    publishedAt: "2026-06-09",
    updatedAt: "2026-06-09",
    category: "Guides",
    readingTime: "7 min read",
    keywords: [
      "champagne bottle sizes",
      "magnum vs jeroboam",
      "big format champagne london",
      "bottle service bottle sizes",
      "methuselah champagne",
    ],
    relatedClubs: ["cirque-le-soir", "tape-london", "maddox"],
    faqs: [
      {
        question: "What are the champagne bottle sizes in order?",
        answer:
          "From smallest up: the standard bottle (75cl), magnum (1.5L, two bottles), jeroboam (3L, four bottles), methuselah (6L, eight bottles), salmanazar (9L, twelve bottles), balthazar (12L, sixteen bottles) and nebuchadnezzar (15L, twenty bottles). In London clubs you will mostly see standards and magnums, with jeroboams and larger reserved for bigger spends.",
      },
      {
        question: "Is a magnum better value than two bottles?",
        answer:
          "Not usually on price. A magnum almost always carries a premium over two standard bottles because of the format and the presentation. What you pay for is the impact and a single larger centrepiece rather than a discount per millilitre, as of June 2026.",
      },
      {
        question: "Which champagne bottle size should I order for my table?",
        answer:
          "For most groups of four to six, one or two standard bottles or a single magnum works well. Larger formats like the jeroboam suit bigger groups or a statement moment, and they are what most venues bring out with a full sparkler presentation.",
      },
      {
        question: "Do London clubs carry the giant champagne bottles?",
        answer:
          "The very large formats like the balthazar and nebuchadnezzar are special-order at most venues rather than everyday stock. If you want one for a specific night, ask in advance so the club can confirm availability and price.",
      },
    ],
  },
  {
    slug: "how-many-bottles-for-a-club-table",
    title: "How Many Bottles Do You Need for a Club Table? A Group-Size Guide",
    metaTitle: "How Many Bottles for a Club Table? | London Bottle Service",
    metaDescription:
      "How many bottles does your group need for a London club table? Serving maths by group size, how minimum spend changes it, and how to pace the night.",
    excerpt:
      "One bottle or four? Here is the serving maths behind a London club table: how many bottles each group size actually needs, and how to pace the order.",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    category: "Guides",
    readingTime: "6 min read",
    keywords: [
      "how many bottles for a club table",
      "bottle service group size",
      "how many bottles bottle service",
      "bottles per person club table",
      "club table planning london",
    ],
    relatedClubs: ["tape-london", "maddox", "funky-buddha"],
    faqs: [
      {
        question: "How many bottles do you need for a table of 6?",
        answer:
          "As a planning baseline, two bottles comfortably covers a group of six for a full night: typically one spirit bottle with mixers plus one champagne, or two spirits if your group prefers mixed drinks. Many venues size their minimum spend for a six-person table around the two-bottle mark as of June 2026, so the maths usually aligns with the booking anyway.",
      },
      {
        question: "Is one bottle enough for 4 people?",
        answer:
          "Usually, yes. A 70cl spirit bottle pours roughly 16 single-measure drinks, which is around four drinks each for a group of four, enough to carry most of the night when paced with mixers. If your group drinks quickly or stays past 2am, plan for a second bottle or top up mid-night.",
      },
      {
        question: "Should you order all your bottles at the start of the night?",
        answer:
          "No. Order your first bottle when you sit down and add the rest in waves as the night builds. Bottles opened all at once go flat or warm before you reach them, and your spend counts toward the minimum whenever you order. Your waitress tracks the running total, so pacing costs you nothing.",
      },
      {
        question: "Do bigger groups need champagne and spirits?",
        answer:
          "Mixed orders work best for groups of eight or more: spirits with mixers keep the table going drink by drink, while a champagne bottle or magnum creates the shared moment. The split also suits mixed preferences, since not everyone wants the same drink all night.",
      },
    ],
  },
  {
    slug: "how-long-do-you-get-a-club-table-london",
    title: "How Long Do You Get a Club Table in London? Timings Explained",
    metaTitle: "How Long Do You Get a Club Table? | London Bottle Service",
    metaDescription: "How long a club table is yours in London: arrival windows, second sittings, when the bottles arrive and last orders, from a former senior club server.",
    excerpt: "Your table is usually yours until close, but the exceptions catch people out. Arrival holds, second sittings and last orders, explained from the server side.",
    publishedAt: "2026-06-11",
    updatedAt: "2026-06-11",
    category: "Guides",
    readingTime: "6 min read",
    keywords: ["how long do you get a club table london", "club table timings london", "table arrival window london clubs", "second sitting club table london", "last orders bottle service london"],
    relatedClubs: ["tape-london", "maddox", "funky-buddha", "dear-darling"],
    faqs: [
      { question: "How long do you keep a club table in London?", answer: "At most London clubs the table is yours from arrival until close, not a fixed hourly slot. The exceptions are venues running early sittings or dinner service, where your confirmation will state a release time, as of June 2026." },
      { question: "How late can you arrive before losing your table?", answer: "Most venues hold a booked table for around 30 to 45 minutes past the booked time on busy nights. If you are running later than that, message the venue or your booker before the window closes rather than after it." },
      { question: "Do London clubs have second sittings?", answer: "Some dinner-led and show-led venues do. The first sitting usually carries an earlier arrival time and a stated release time, while the late sitting runs to close. The confirmation language tells you which one you have." },
      { question: "When do the bottles actually arrive?", answer: "Once the table is seated and the payment side is settled, typically the deposit beforehand and the balance or a card on arrival. After that the first bottles come out within minutes, and reorders run until last orders." },
    ],
  },
  {
    slug: "how-to-split-club-table-cost-london",
    title: "How to Split the Cost of a Club Table in London: Who Pays What",
    metaTitle: "How to Split a Club Table Bill | London Bottle Service",
    metaDescription:
      "How to split the cost of a club table in London: what you are actually splitting, the per-head maths, collecting money early, and handling dropouts.",
    excerpt:
      "The table is booked and now comes the awkward part: the money. A former server's guide to splitting a London club table without anyone falling out.",
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    category: "Pricing",
    readingTime: "7 min read",
    keywords: [
      "how to split a club table london",
      "split bottle service cost",
      "club table cost per person london",
      "who pays for a club table",
      "group bill club table london",
    ],
    relatedClubs: ["tape-london", "cirque-le-soir", "selene-london"],
    faqs: [
      {
        question: "How do you split the cost of a club table in London?",
        answer:
          "Agree the method before you book: an even split is standard, with the total being the minimum spend plus service charge divided by confirmed guests. Collect each person's share by bank transfer before the night, put one card behind the tab, and settle any small difference the next morning.",
      },
      {
        question: "Do London clubs split the bill between everyone at the table?",
        answer:
          "Not usually. Most venues will take a deposit from one card and settle the final tab on one or two cards at the end of the night, not ten. The split between friends happens outside the venue, which is why collecting money before the night matters so much.",
      },
      {
        question: "How much does a club table cost per person?",
        answer:
          "It depends on the minimum spend and your group size. As of July 2026, central London tables typically start around £1,000 minimum spend, so eight people sharing lands near £125 each before service charge, and six people near £170. Bigger groups bring the per-head figure down.",
      },
      {
        question: "What happens to the split if someone drops out?",
        answer:
          "The minimum spend does not shrink because your group did, so the remaining guests absorb the difference. Re-run the per-head figure as soon as someone pulls out, tell the group the new number straight away, and try to replace the dropout rather than quietly eating the cost.",
      },
    ],
  },
  {
    slug: "non-alcoholic-bottle-service-london",
    title: "Non-Alcoholic Bottle Service in London: What Clubs Offer",
    metaTitle: "Non-Alcoholic Bottle Service | London Bottle Service",
    metaDescription:
      "Non-alcoholic bottle service at London clubs: the alcohol-free sparkling, zero-proof spirits and soft options on menus, and how they work with your table.",
    excerpt:
      "You can run a full table without touching alcohol. What London bottle menus actually offer the non-drinkers, and how it works, from a former server.",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    category: "Guides",
    readingTime: "6 min read",
    keywords: [
      "non alcoholic bottle service london",
      "alcohol free bottle service",
      "zero proof spirits club table",
      "alcohol free sparkling nightclub",
      "non drinker club table london",
    ],
    relatedClubs: ["tape-london", "selene-london", "maison-close"],
    faqs: [
      {
        question: "Do London clubs offer non-alcoholic bottle service?",
        answer:
          "Most established venues now carry genuine alcohol-free options at table level, from de-alcoholised sparkling to zero-proof spirits and premium soft packages. Depth varies venue to venue, so confirm what is stocked when you arrange the table.",
      },
      {
        question: "Does non-alcoholic bottle service count toward the minimum spend?",
        answer:
          "Yes. The minimum spend is a spend target, not an alcohol target. Alcohol-free bottles, carafes and mocktail rounds count toward the table's target exactly like any other order on the tab.",
      },
      {
        question: "What non-alcoholic options do club bottle menus include?",
        answer:
          "Four families: alcohol-free sparkling served from the ice bucket, zero-proof spirits with the usual mixers and garnish, premium soft packages, and at some venues a mocktail service run to the table. Most good rooms offer at least two.",
      },
      {
        question: "Should I tell the venue about non-drinkers in advance?",
        answer:
          "Yes. The better alcohol-free bottles are stocked in smaller quantities than house spirits, and a venue with notice will have the right options chilled rather than improvising on the night.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
