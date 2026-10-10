import { Metadata } from "next";
import Link from "next/link";
import { clubs, fromPrice, formatPrice, formatNights } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { ItemListSchema } from "@/components/ItemListSchema";
import { RelatedGuides } from "@/components/RelatedGuides";
import { HeroImage } from "@/components/HeroImage";
import { pageImages } from "@/data/images";

export const metadata: Metadata = {
  title:
    "Best Clubs for Bottle Service in London 2026 | Mayfair VIP Guide",
  description:
    "Honest rankings of London's best bottle service clubs. Every Mayfair venue reviewed with real prices and insider recommendations.",
  alternates: {
    canonical:
      "https://londonbottleservice.com/best-clubs-bottle-service-london",
  },
  openGraph: {
    title: "Best Clubs for Bottle Service in London",
    description:
      "Honest reviews and rankings of London's best bottle service clubs. Prices, vibes, and recommendations from someone who books tables every week.",
    url: "https://londonbottleservice.com/best-clubs-bottle-service-london",
  },
};

const faqs = [
  {
    question: "What is the best club for bottle service in London?",
    answer:
      "It depends entirely on what you want. For the most memorable experience, Cirque Le Soir with its circus performers is hard to beat. For exclusivity, Tape London is the gold standard. For dinner and clubbing combined, Maddox is unmatched. There's no single 'best': it's about matching the venue to your group.",
  },
  {
    question: "Which London club has the cheapest bottle service?",
    answer:
      "Most Mayfair clubs start at £1,000 minimum spend for a floor table, including Cirque Le Soir, Tape London, Maddox, Selene, Dear Darling, and Scotch of St James. VIP tables start from £2,000 at most venues, with The Box starting VIP from £3,000. Weekday tables at any venue tend to have lower minimum spends than weekends.",
  },
  {
    question: "Which Mayfair clubs play hip-hop?",
    answer:
      "Cirque Le Soir and Tape London lean heavily hip-hop and RnB, and Selene London and Dear Darling both play hip-hop, RnB and Afrobeats. Maddox is the outlier: it focuses on house music.",
  },
  {
    question: "Which London club is best for a birthday?",
    answer:
      "Cirque Le Soir is the most popular birthday venue: the circus performances and theatrical atmosphere make it feel like a genuine event. London Reign is also excellent for birthdays with its Las Vegas-style shows. For a more intimate birthday, Tape London's exclusive atmosphere is hard to match. All clubs can arrange cakes, sparklers, and birthday announcements.",
  },
];

interface ClubReview {
  slug: string;
  rank: number;
  headline: string;
  review: string;
  bestFor: string;
  prosText: string[];
  consText: string[];
}

const reviews: ClubReview[] = [
  {
    slug: "cirque-le-soir",
    rank: 1,
    headline: "The Most Memorable Night Out in London",
    review:
      "Cirque Le Soir isn't just a nightclub. It's a show that happens to serve bottles. Fire breathers, contortionists, stilt walkers, and sword swallowers perform inches from your table while you drink. Nothing else in London comes close to this experience. The venue is deliberately intimate, which means the atmosphere is always intense. Celebrities are regulars, the music is solid hip-hop and RnB, and the crowd is consistently up for a big night. If you've never done bottle service before, start here. It'll ruin every other club for you.",
    bestFor: "First-time bottle service, birthdays, special occasions, anyone who wants a story to tell",
    prosText: [
      "Genuinely unique: no other venue in London offers this experience",
      "Consistently strong atmosphere every night they open",
      "£1,000 starting minimum is reasonable for what you get",
      "The show element makes it feel like an event, not just a club night",
    ],
    consText: [
      "Can sell out fast on Saturdays: book early",
      "The intimate size means it can feel crowded",
      "Not for people who want a quiet, low-key night",
    ],
  },
  {
    slug: "tape-london",
    rank: 2,
    headline: "The Gold Standard of Mayfair Exclusivity",
    review:
      "Tape London is what most people imagine when they think of an exclusive London members' club. Under 200 capacity, recording studio-inspired interiors, a crowd that reads like a tabloid gossip column, and a door policy that's genuinely difficult without a booking. The music is hip-hop focused and the DJs are consistently excellent. This is the club for people who've done everything else and want something more private.",
    bestFor: "Groups who value exclusivity, music industry connections, people who've outgrown mainstream clubs",
    prosText: [
      "Genuinely exclusive: the small capacity creates a premium feel",
      "Excellent music curation with hip-hop focus",
      "Members' club atmosphere without needing a membership (through us)",
      "Celebrity and music industry crowd",
    ],
    consText: [
      "Very strict door policy: even with a booking, standards are high",
      "Very strict dress code: no room for casual",
      "Small venue means limited table availability",
    ],
  },
  {
    slug: "maddox",
    rank: 3,
    headline: "The Best Dinner-to-Club Transition in London",
    review:
      "Maddox is a problem solver. If you want to start with a proper Italian dinner and then stay for clubbing without switching venues, taxis, or queues, this is the only venue that does both at a high level. The restaurant is genuinely good. This isn't club food, it's real Italian fine dining. The club transition happens naturally as the lights drop and the house music builds. The crowd is more mature and sophisticated than most Mayfair clubs, which is either a pro or a con depending on what you're after.",
    bestFor: "Corporate entertaining, couples, dinner-and-club groups, house music fans",
    prosText: [
      "Seamless dinner-to-club experience in one venue",
      "Restaurant quality is genuinely high",
      "More sophisticated atmosphere than most Mayfair clubs",
      "House music policy attracts a well-dressed crowd",
    ],
    consText: [
      "House music only: no hip-hop or RnB",
      "Less high-energy than hip-hop focused venues",
      "Better suited to smaller, sophisticated groups than big parties",
    ],
  },
  {
    slug: "the-box",
    rank: 4,
    headline: "London's Most Provocative Night Out",
    review:
      "The Box brings avant-garde theatrical performances, burlesque, and deliberately provocative acts to its Soho location. Inspired by the famous New York original, it attracts a creative, fashion-forward crowd who come for a night out that genuinely pushes boundaries. The performances are unlike anything else in London: part cabaret, part performance art, part nightclub. The door policy is extremely selective, and that exclusivity is part of the appeal. If you're in fashion, music, or the creative industries, this is where your people go.",
    bestFor: "Creatives, fashion industry, anyone wanting a genuinely boundary-pushing night",
    prosText: [
      "Genuinely unique theatrical experience unlike any other London venue",
      "Incredible performances that push creative boundaries",
      "Exclusive atmosphere with a celebrity crowd",
      "Iconic brand inspired by the famous New York original",
    ],
    consText: [
      "VIP tables start from £3,000: the premium positions are expensive",
      "Extremely selective door policy",
      "Not for everyone: deliberately provocative content",
    ],
  },
  {
    slug: "london-reign",
    rank: 5,
    headline: "Vegas-Scale Spectacle in the Heart of London",
    review:
      "London Reign is the closest thing London has to a Las Vegas showclub. Aerial acrobats, professional dancers, live vocalists, fire performers: the production quality rivals a West End show. The venue is larger than most Mayfair clubs, which gives the performances room to breathe and the crowd space to enjoy them. The music crosses genres because the entertainment is the headline, not the DJ. If Cirque Le Soir is an intimate circus, Reign is the full arena show.",
    bestFor: "Large groups, hen parties, tourists wanting the London experience, people who love spectacle",
    prosText: [
      "Production values that genuinely impress",
      "Larger venue than most Mayfair clubs: space to breathe",
      "Excellent for groups and celebrations",
      "Performances create natural energy peaks throughout the night",
    ],
    consText: [
      "Larger venue means the atmosphere can feel less intimate",
      "VIP tables start from £2,000: premium positions carry a premium",
      "The spectacle can sometimes overshadow the music",
    ],
  },
  {
    slug: "selene-london",
    rank: 6,
    headline: "The Multi-Activity Club That Actually Works",
    review:
      "Selene took a risk by adding bowling lanes to a Mayfair nightclub, and it paid off. The multi-room layout means you're not stuck in one space all night. Bowl between drinks, move between rooms, find the vibe that suits your group at that moment. It's particularly good for birthdays and corporate events where you need an icebreaker beyond 'sit at a table and drink.' The fit-out is high-end Mayfair standard and the music across all rooms is strong. As a newer venue, it doesn't yet have Saturday-night scarcity, which works in your favour.",
    bestFor: "Birthday groups, corporate nights, people who get restless at single-room clubs",
    prosText: [
      "Bowling lanes add a unique activity element",
      "Multiple rooms prevent the single-room fatigue",
      "Good for large groups who can spread across spaces",
      "Still relatively new: availability is better than established venues",
    ],
    consText: [
      "The bowling novelty might not appeal to everyone",
      "Less established than legacy Mayfair clubs",
      "The multi-room concept means less concentrated energy per room",
    ],
  },
  {
    slug: "scotch-of-st-james",
    rank: 7,
    headline: "Rock and Roll History With Impeccable Taste",
    review:
      "Scotch of St James is for people who care about music. The venue where Hendrix and the Stones used to party has been reborn as an intimate, quality-driven club where the DJs are chosen for taste rather than fame. The cocktail programme is genuinely good, the crowd is older and more discerning, and the atmosphere has a warmth and authenticity that newer venues can't manufacture. It's not a high-energy superclub. It's a place to drink well, hear great music, and feel the weight of London's musical heritage.",
    bestFor: "Music lovers, couples, smaller groups, anyone who values quality over spectacle",
    prosText: [
      "Legendary musical history gives it genuine character",
      "Eclectic, quality-driven music policy",
      "Excellent cocktail programme",
      "Intimate, warm atmosphere",
    ],
    consText: [
      "Small capacity: tables are limited",
      "Not the high-energy experience some groups want",
      "More suited to smaller groups than large parties",
    ],
  },
  {
    slug: "dear-darling",
    rank: 8,
    headline: "The Stylish Newcomer Punching Above Its Weight",
    review:
      "Dear Darling arrived on the Mayfair scene with a clear design vision and has quickly built a loyal following. The venue transitions from a sophisticated cocktail bar to a proper nightclub as the night progresses, and the attention to design detail is evident everywhere. The cocktails are better than they need to be, the music is well-curated, and the crowd is fashion-conscious without being pretentious. It's the kind of venue that will continue to rise as word spreads.",
    bestFor: "Design-conscious groups, date nights that go late, people who want style and substance",
    prosText: [
      "Beautiful interior design with real attention to detail",
      "Strong cocktail programme alongside bottle service",
      "Fashion-forward crowd that adds to the atmosphere",
      "Good balance of style and energy",
    ],
    consText: [
      "Still building its reputation as a newer venue",
      "Smaller than some established Mayfair clubs",
      "May lack the instant name recognition of legacy venues",
    ],
  },
  {
    slug: "beat-london",
    rank: 9,
    headline: "London's Electronic Music Answer to Bottle Service",
    review:
      "BEAT fills a gap in London's nightlife. If you love electronic music but also want bottle service, your options have traditionally been limited: most serious electronic venues don't do tables, and most table-service clubs don't take electronic music seriously. BEAT does both. The sound system is built for electronic music, the DJs are booked for talent, and the table service doesn't compromise the music experience. It's a niche proposition but for the right group, it's perfect.",
    bestFor: "Electronic music fans who want VIP treatment, Ibiza/Berlin regulars visiting London, groups tired of hip-hop clubs",
    prosText: [
      "Serious sound system built for electronic music",
      "Quality DJ bookings based on talent",
      "Fills a genuine gap in the London market",
      "More relaxed dress code than Mayfair",
    ],
    consText: [
      "Niche appeal: not for hip-hop or RnB fans",
      "Only open Thursday, Friday and Saturday",
      "Less exclusive atmosphere than Mayfair clubs",
    ],
  },
  {
    slug: "cuckoo-club",
    rank: 10,
    headline: "99 Regent Street, Formerly Cuckoo Club",
    review:
      "Cuckoo Club now trades as 99 Regent Street, still in Mayfair. Because the venue has changed its name, the music policy, opening nights and minimum spends published for Cuckoo Club no longer apply automatically, so this guide does not rank it on old details. Message us with your date and group size for the current table options and minimum spend before you book.",
    bestFor: "Groups who knew Cuckoo Club and want to book the venue under its new name",
    prosText: [
      "Mayfair location",
      "Current details confirmed on enquiry",
    ],
    consText: [
      "Minimum spend under the new name is on request",
    ],
  },
  {
    slug: "tabu-london",
    rank: 11,
    headline: "Rumour, Formerly Tabu",
    review:
      "Tabu now trades as Rumour, still in Mayfair. Because the venue has changed its name, the music policy, opening nights and minimum spends published for Tabu no longer apply automatically, so this guide does not rank it on old details. Message us with your date and group size for the current table options and minimum spend before you book.",
    bestFor: "Groups who knew Tabu and want to book the venue under its new name",
    prosText: [
      "Mayfair location",
      "Current details confirmed on enquiry",
    ],
    consText: [
      "Minimum spend under the new name is on request",
    ],
  },
];

export default function BestClubsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Best Clubs for Bottle Service" },
        ]}
      />
      <ItemListSchema
        name="Best Clubs for Bottle Service in London"
        items={reviews.map((r) => ({
          name: clubs.find((c) => c.slug === r.slug)?.name || r.slug,
          url: `https://londonbottleservice.com/clubs/${r.slug}`,
          position: r.rank,
        }))}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Best Clubs for Bottle Service</span>
        </nav>
      </div>

      <HeroImage src={pageImages.bestClubs.hero} alt={pageImages.bestClubs.alt} height="h-[40vh] min-h-[300px]" overlay="strong">
        <p className="eyebrow [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-4 animate-fade-up">The rankings</p>
        <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-6 animate-fade-up-1">
          Best Clubs for Bottle Service in London
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl animate-fade-up-2">
          An honest, opinionated guide to every club we work with. We book tables at
          all of these venues every week, so this isn&apos;t based on one visit or a press
          release. It&apos;s based on consistent, real experience.
        </p>
      </HeroImage>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Quick Compare */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">The ledger</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">At a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-3 pr-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">Club</th>
                  <th className="text-left py-3 pr-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">Floor</th>
                  <th className="text-left py-3 pr-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">VIP</th>
                  <th className="text-left py-3 pr-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">Music</th>
                  <th className="text-left py-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">Nights</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((r) => {
                  const club = clubs.find((c) => c.slug === r.slug)!;
                  return (
                    <tr key={r.slug} className="border-b border-border">
                      <td className="py-3 pr-4 font-display italic text-[0.9375rem]">
                        <Link
                          href={`/clubs/${r.slug}`}
                          className="text-gold hover:text-gold-light transition-colors"
                        >
                          {club.name}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 price">
                        {formatPrice(club.pricing.floorTable)}
                      </td>
                      <td className="py-3 pr-4 price">
                        {formatPrice(club.pricing.vipTable)}
                      </td>
                      <td className="py-3 pr-4 text-text-muted">
                        {club.musicPolicy.split(",")[0]}
                      </td>
                      <td className="py-3 text-text-muted">
                        {formatNights(club, ", ", true)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Reviews */}
      {reviews.map((r) => {
        const club = clubs.find((c) => c.slug === r.slug)!;
        return (
          <section
            key={r.slug}
            className="py-16 md:py-20 px-4 sm:px-6 border-t border-border"
            id={r.slug}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-5 mb-4">
                <span className="flex-shrink-0 font-display text-3xl font-light text-gold-dark leading-none pt-1">
                  {String(r.rank).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-normal">
                    <Link
                      href={`/clubs/${r.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h2>
                  <p className="text-gold font-display italic font-light">{r.headline}</p>
                </div>
              </div>

              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] mb-6">
                <span className="text-gold">{fromPrice(club.pricing.floorTable)}</span>
                <span className="text-text-muted"> &middot; {club.area} &middot; {formatNights(club, ", ")}</span>
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                {r.review}
              </p>

              <p className="text-sm mb-6">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-gold">Best for: </span>
                <span className="text-text-muted">{r.bestFor}</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-bg-card border border-border p-6">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-success mb-4">Strengths</p>
                  <ul className="space-y-2">
                    {r.prosText.map((pro, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-success flex-shrink-0">+</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-card border border-border p-6">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-danger mb-4">Considerations</p>
                  <ul className="space-y-2">
                    {r.consText.map((con, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-danger flex-shrink-0">-</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/clubs/${r.slug}`}
                className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors"
              >
                Full {club.name} review, prices &amp; booking &rarr;
              </Link>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">Frequently Asked Questions</h2>
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6 border-b border-border">
                <h3 className="font-display text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-text-muted text-[0.9375rem] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Concierge</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">Need Help Choosing?</h2>
          <p className="text-text-muted mb-8">
            Not sure which club fits your group? Message us on WhatsApp with your
            vibe, budget, and group size. We&apos;ll give you an honest recommendation
            in minutes.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <RelatedGuides currentPath="/best-clubs-bottle-service-london" />
      <WhatsAppCTA variant="sticky" />
    </>
  );
}
