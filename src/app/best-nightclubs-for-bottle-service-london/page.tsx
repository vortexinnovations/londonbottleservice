import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Best Nightclubs for Bottle Service in London 2026",
  description:
    "The definitive guide to London's best nightclubs for bottle service in 2026. We compare every top venue — pricing, atmosphere, music, and what makes each club's bottle service different.",
  alternates: {
    canonical:
      "https://londonbottleservice.com/best-nightclubs-for-bottle-service-london",
  },
  openGraph: {
    title: "Best Nightclubs for Bottle Service in London 2026",
    description:
      "Honest comparison of every top London nightclub for bottle service. Prices, reviews, and recommendations from a team that books hundreds of tables per month.",
    url: "https://londonbottleservice.com/best-nightclubs-for-bottle-service-london",
  },
};

const faqs = [
  {
    question: "What is bottle service at a London nightclub?",
    answer:
      "Bottle service means reserving a private table at a nightclub where you purchase whole bottles of spirits or champagne rather than individual drinks at the bar. Your booking includes a reserved seating area, priority entry that skips the queue, a personal waitress for the night, your choice of premium bottles, and all mixers, ice, and garnishes. Each club has a minimum spend — the total amount you must spend on bottles at your table.",
  },
  {
    question: "Which London nightclub is best for first-time bottle service?",
    answer:
      "Cirque Le Soir is the best first-time bottle service experience. The live circus performers, theatrical atmosphere, and immersive setting make the night feel like a genuine event rather than just drinking at a club. The £1,000 starting minimum is accessible for groups of six to eight, and the spectacle ensures everyone in the group has an incredible time regardless of whether they are regular clubgoers.",
  },
  {
    question: "How much does bottle service cost in London?",
    answer:
      "Most London clubs start at £1,000 minimum spend for a standard floor table. This includes Cirque Le Soir, Cuckoo Club, Maddox, Tabu, Selene, Funky Buddha, Dear Darling, Luna, Scotch of St James, and BEAT London. Tape London and The Box start at £1,500. VIP tables range from £2,000 to £3,000 depending on the venue. As a rough per-person guide, budget £150 to £250 for a floor table or £250 to £400 for VIP.",
  },
  {
    question: "What is included with bottle service in London?",
    answer:
      "Every bottle service booking includes: a reserved table and seating area for your group, priority entry that bypasses the general queue, a personal waitress assigned to your table, your selection of premium spirits or champagne from the menu, and all mixers (tonic, cola, Red Bull, juice), ice, and garnishes. Some clubs offer additional perks for celebrations including birthday cakes, sparklers, and announcements.",
  },
  {
    question: "Which nightclub has the best atmosphere for bottle service?",
    answer:
      "For theatrical energy, Cirque Le Soir and London Reign deliver performances alongside bottle service. For exclusivity, Tape London and The Box offer the most curated, intimate settings. For musical quality, BEAT London (electronic) and Scotch of St James (eclectic) prioritise sound over spectacle. For versatility, Cuckoo Club and Selene offer multiple rooms and music styles. The best atmosphere depends on what your group values most.",
  },
  {
    question: "Do I need to finish the minimum spend on the night?",
    answer:
      "Yes. The minimum spend is the amount you commit to spending on drinks during the evening. You select bottles throughout the night and settle the total bill at the end. A card is held behind the bar as guarantee when you arrive. If you spend more than the minimum, you pay the actual amount. If you spend less than the minimum, you are still charged the minimum. Your waitress will help you manage your bottle selection within budget.",
  },
  {
    question: "Can I split the minimum spend across different drinks?",
    answer:
      "You can choose any combination of bottles from the venue's menu to meet your minimum spend. Most groups order a mix of spirits and champagne. A typical £1,000 spend might include two premium vodka bottles (around £350-£400 each) and a bottle of champagne (from £400). Your waitress will walk you through the menu and help you find the best combination for your group's preferences and budget.",
  },
];

interface ClubComparison {
  slug: string;
  serviceStyle: string;
  standoutFeature: string;
  bottleServiceReview: string;
}

const comparisons: ClubComparison[] = [
  {
    slug: "cirque-le-soir",
    serviceStyle: "Theatrical and immersive",
    standoutFeature: "Live circus performers at your table",
    bottleServiceReview:
      "Bottle service at Cirque Le Soir is an experience in itself. Fire breathers, contortionists, and stilt walkers perform inches from your table while your waitress keeps the bottles flowing. The intimate venue means every table feels involved in the show. Champagne arrivals come with sparklers and ceremony. For groups celebrating anything — or groups who simply want a night that goes beyond the ordinary — Cirque delivers bottle service as entertainment rather than just a seating arrangement.",
  },
  {
    slug: "tape-london",
    serviceStyle: "Exclusive and private",
    standoutFeature: "Members' club access with under-200 capacity",
    bottleServiceReview:
      "Tape London treats bottle service as a members' club privilege. The venue holds fewer than 200 people, the crowd is curated, and the recording studio-inspired interiors create a setting that feels like a private party. Your waitress operates with the discretion and attentiveness of a high-end members' club. The higher starting price reflects the exclusivity — you are paying for access to a world that most people cannot enter. For groups who have been to every other Mayfair club and want something more intimate and exclusive, Tape is the pinnacle.",
  },
  {
    slug: "the-box",
    serviceStyle: "Provocative and theatrical",
    standoutFeature: "Avant-garde performances and famously selective door",
    bottleServiceReview:
      "The Box pairs bottle service with avant-garde theatrical performances that push creative boundaries. Burlesque, cabaret, and performance art happen throughout the night while you drink at your table. The fashion-forward, creative crowd and Soho location set it apart from the Mayfair formula. Bottle service here feels like attending an exclusive art event that happens to have incredible drinks service. The selective door and premium pricing keep the crowd curated and the atmosphere charged.",
  },
  {
    slug: "london-reign",
    serviceStyle: "Grand and spectacular",
    standoutFeature: "Las Vegas-scale aerial performances",
    bottleServiceReview:
      "London Reign does bottle service on the grandest scale in London. Aerial acrobats perform above the dance floor, professional dancers, live vocalists, and fire performers create a production that rivals West End shows. The venue is larger than most, so VIP bottle service positions offer genuine views of the spectacle without being cramped. Champagne and bottle deliveries are theatrical events in themselves. For large groups, celebrations, and anyone who wants bottle service with genuine visual impact, Reign is the most spectacular option.",
  },
  {
    slug: "cuckoo-club",
    serviceStyle: "Versatile and reliable",
    standoutFeature: "Two floors with separate music policies",
    bottleServiceReview:
      "Cuckoo Club is the most versatile bottle service venue in Mayfair. House music upstairs, hip-hop in the basement — tables are available on both floors. This means your group is never locked into one vibe for the entire night. The service is consistently strong and the atmosphere is reliably good, particularly on Fridays and Saturdays. Cuckoo does not have the theatrical elements of Cirque or the exclusivity of Tape, but it is the club that works for the widest range of groups. If half your party wants house and the other half wants hip-hop, Cuckoo solves that problem.",
  },
  {
    slug: "maddox",
    serviceStyle: "Sophisticated and seamless",
    standoutFeature: "Italian fine dining transitioning to bottle service",
    bottleServiceReview:
      "Maddox offers the most complete evening experience of any London club. Start with Italian fine dining in a genuine restaurant, then transition seamlessly into bottle service as the venue shifts into nightclub mode. The house music policy attracts a more mature, sophisticated crowd, and the bottle service reflects this — attentive without being intrusive, refined without being stiff. For corporate entertaining, anniversaries, and groups who want an entire evening in one venue, Maddox is unmatched.",
  },
  {
    slug: "tabu-london",
    serviceStyle: "Stylish and underground",
    standoutFeature: "Japanese-inspired aesthetic with hip-hop focus",
    bottleServiceReview:
      "Tabu brings a completely different aesthetic to Mayfair bottle service. The Japanese-inspired interiors create a dark, moody atmosphere that feels more Tokyo than Mayfair. The music policy leans into hip-hop, UK rap, drill, and Afrobeats — harder and more underground than most Mayfair venues. Bottle service here feels cool rather than corporate, and the fashion-forward crowd adds to the experience. For groups who find traditional Mayfair clubs a bit predictable, Tabu is the antidote.",
  },
  {
    slug: "selene-london",
    serviceStyle: "Activity-rich and social",
    standoutFeature: "Bowling lanes alongside bottle service",
    bottleServiceReview:
      "Selene reinvents what bottle service means by adding bowling lanes and multiple distinct rooms to the equation. Your group is not limited to sitting at one table all night — you can bowl between drinks, explore different rooms with different vibes, and keep the evening varied. This makes Selene the strongest choice for birthday groups and corporate events where you need an icebreaker beyond ordering another round. The bottle service standard remains Mayfair-quality throughout.",
  },
  {
    slug: "funky-buddha",
    serviceStyle: "Classic and crowd-pleasing",
    standoutFeature: "Open-format music that adapts to the room",
    bottleServiceReview:
      "Funky Buddha carries a legendary name in London nightlife and delivers bottle service with an open-format music policy that crosses every genre. DJs read the room and move between hip-hop, house, RnB, Afrobeats, and commercial tracks. This makes bottle service here the easiest sell for groups with wildly different music tastes. The experience is classic Mayfair — well-dressed crowd, strong energy, attentive service — delivered with the confidence of a venue that has been doing this for years.",
  },
  {
    slug: "scotch-of-st-james",
    serviceStyle: "Intimate and quality-driven",
    standoutFeature: "Legendary music history and cocktail programme",
    bottleServiceReview:
      "Scotch of St James offers bottle service in one of London's most historically significant music venues. Where Hendrix and the Stones once partied, you now get intimate bottle service with an eclectic, quality-driven soundtrack. The cocktail programme is taken as seriously as the bottle menu, which sets it apart from clubs where drinks are purely a vehicle for minimum spend. For music lovers and smaller groups who value quality over spectacle, Scotch delivers a bottle service experience with genuine character.",
  },
  {
    slug: "dear-darling",
    serviceStyle: "Design-conscious and refined",
    standoutFeature: "Cocktail bar to nightclub transition",
    bottleServiceReview:
      "Dear Darling applies design thinking to bottle service. The venue transitions from a sophisticated cocktail bar early in the evening to a proper nightclub with hip-hop, RnB, and Afrobeats. Bottle service here feels more curated than at larger venues — the attention to detail in the space, the drinks, and the service reflects a venue that genuinely cares about the experience beyond just minimum spend. The fashion-conscious crowd and warm interiors make bottle service at Dear Darling feel stylish and intentional.",
  },
  {
    slug: "luna-club-london",
    serviceStyle: "Confident and well-connected",
    standoutFeature: "Strong international crowd and reliable hip-hop",
    bottleServiceReview:
      "Luna delivers bottle service with no gimmicks and no fuss. The intimate venue attracts a well-connected international crowd, the hip-hop and RnB music policy is consistently strong, and the table service is attentive and professional. Bottle service at Luna is for groups who know what they want from a Mayfair night out and do not need theatrics or activities to enjoy themselves. It is straightforward, reliable, and consistently good.",
  },
  {
    slug: "beat-london",
    serviceStyle: "Music-first and immersive",
    standoutFeature: "Serious sound system built for electronic music",
    bottleServiceReview:
      "BEAT fills a gap that no other London venue addresses — proper bottle service in a venue that takes electronic music seriously. The sound system is designed for house and techno, the DJs are booked for talent, and the lighting is immersive. Bottle service here does not compromise the music experience. If you have been to Ibiza or Berlin and want that calibre of electronic music with the comfort of a reserved table in London, BEAT is the only option that delivers both.",
  },
];

export default function BestNightclubsBottleServicePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          {
            name: "Best Nightclubs for Bottle Service",
            url: "https://londonbottleservice.com/best-nightclubs-for-bottle-service-london",
          },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">
            Best Nightclubs for Bottle Service
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Best Nightclubs for Bottle Service in London
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            Bottle service in London is not one-size-fits-all. The experience
            at a theatrical venue like Cirque Le Soir is completely different
            from the exclusive intimacy of Tape London, which is completely
            different from the electronic music focus of BEAT. Choosing the
            right club for bottle service means understanding what each venue
            does differently — not just comparing prices.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            We book bottle service tables at every club on this page. We know
            how each venue runs its service, how the waitresses operate, what
            the bottle menus look like, and how the atmosphere differs from
            one venue to the next. This guide compares every top London
            nightclub for bottle service based on genuine, repeated
            experience — not a single press visit.
          </p>
          <p className="text-text-muted">
            Whether you want spectacle, exclusivity, musical quality,
            versatility, or the best value, there is a venue on this list
            that fits.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Bottle Service at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Club
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    From
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Service Style
                  </th>
                  <th className="text-left py-3 text-text-muted font-medium">
                    Standout
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp) => {
                  const club = clubs.find((c) => c.slug === comp.slug)!;
                  return (
                    <tr
                      key={comp.slug}
                      className="border-b border-border/50"
                    >
                      <td className="py-3 pr-4">
                        <Link
                          href={`/${club.bookingSlug}`}
                          className="text-gold hover:underline font-medium"
                        >
                          {club.name}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 text-text-secondary">
                        £{club.pricing.floorTable.toLocaleString()}
                      </td>
                      <td className="py-3 pr-4 text-text-muted">
                        {comp.serviceStyle}
                      </td>
                      <td className="py-3 text-text-muted">
                        {comp.standoutFeature}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Club Bottle Service Reviews */}
      {comparisons.map((comp) => {
        const club = clubs.find((c) => c.slug === comp.slug)!;
        return (
          <section
            key={comp.slug}
            className="py-12 px-4 border-t border-border"
            id={comp.slug}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <Link
                  href={`/${club.bookingSlug}`}
                  className="hover:text-gold transition-colors"
                >
                  {club.name}
                </Link>
              </h2>
              <p className="text-gold italic mb-4">{comp.serviceStyle}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                  From £{club.pricing.floorTable.toLocaleString()}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  VIP from £{club.pricing.vipTable.toLocaleString()}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  {club.area}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  {club.openingNights.join(", ")}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                {comp.bottleServiceReview}
              </p>

              <div className="bg-bg-card border border-border rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-gold mb-2">
                  What&apos;s Included
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {club.whatsIncluded.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-muted text-sm flex items-start gap-2"
                    >
                      <span className="text-green-500 flex-shrink-0">
                        +
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${club.bookingSlug}`}
                  className="text-gold text-sm font-medium hover:underline"
                >
                  Book bottle service at {club.name} &rarr;
                </Link>
                <span className="text-text-muted text-sm">|</span>
                <Link
                  href={`/${club.slug}-table-prices`}
                  className="text-text-secondary text-sm hover:text-gold transition-colors"
                >
                  Prices
                </Link>
                <span className="text-text-muted text-sm">|</span>
                <Link
                  href={`/clubs/${club.slug}`}
                  className="text-text-secondary text-sm hover:text-gold transition-colors"
                >
                  Full club review
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Choosing the Right Club */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            How to Choose the Right Club for Your Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                For Birthdays and Celebrations
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Choose Cirque Le Soir for the most memorable experience, London
                Reign for large groups and spectacle, or Selene for a
                birthday with bowling and activities. All three excel at
                making occasions feel special.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                For Hip-Hop Fans
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Tabu London is the strongest pure hip-hop venue with a lean
                towards UK rap and drill. Luna Club London delivers reliable
                hip-hop and RnB. Cuckoo Club&apos;s basement is dedicated to
                hip-hop. Cirque Le Soir and Tape London also lean hip-hop.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                For House Music Lovers
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Maddox focuses exclusively on house music with a
                sophisticated crowd. Cuckoo Club&apos;s ground floor plays deep
                house and tech house. BEAT London takes electronic music the
                most seriously with a purpose-built sound system.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                For Maximum Exclusivity
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Tape London is the gold standard of exclusivity — under 200
                capacity with a curated crowd. The Box is equally selective
                with its provocative theatrical approach. Scotch of St James
                offers intimate, music-focused exclusivity with genuine
                history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            Bottle Service FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 bg-bg-card"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Not Sure Which Club to Choose?
          </h2>
          <p className="text-text-muted mb-8">
            Tell us your group size, music preference, budget, and occasion
            — we will recommend the perfect venue and handle your bottle
            service booking from start to finish.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
