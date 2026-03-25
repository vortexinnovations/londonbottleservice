import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title:
    "Best Clubs for Bottle Service in London 2025 | Mayfair VIP Guide",
  description:
    "Our honest guide to the best clubs for bottle service in London. We rank and review every Mayfair club we work with — from the most theatrical to the most exclusive.",
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
      "It depends entirely on what you want. For the most memorable experience, Cirque Le Soir with its circus performers is hard to beat. For exclusivity, Tape London is the gold standard. For versatility, Cuckoo Club's two-floor layout works for any group. For dinner and clubbing combined, Maddox is unmatched. There's no single 'best' — it's about matching the venue to your group.",
  },
  {
    question: "Which London club has the cheapest bottle service?",
    answer:
      "Most Mayfair clubs start at £1,000 minimum spend for a floor table, including Cirque Le Soir, Cuckoo Club, Maddox, Tabu, Selene, and Funky Buddha. Tape London is the most expensive starting at £1,500. Weekday tables at any venue tend to have lower minimum spends than weekends.",
  },
  {
    question: "Which Mayfair clubs play hip-hop?",
    answer:
      "Tabu London is the strongest pure hip-hop venue, with a music policy focused on hip-hop, RnB, UK rap, and drill. Cirque Le Soir and Tape London also lean heavily hip-hop. Cuckoo Club's basement room is dedicated to hip-hop. Funky Buddha plays hip-hop as part of its open-format policy. Maddox is the outlier — it focuses on house music.",
  },
  {
    question: "Which London club is best for a birthday?",
    answer:
      "Cirque Le Soir is the most popular birthday venue — the circus performances and theatrical atmosphere make it feel like a genuine event. London Reign is also excellent for birthdays with its Las Vegas-style shows. For a more intimate birthday, Tape London's exclusive atmosphere is hard to match. All clubs can arrange cakes, sparklers, and birthday announcements.",
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
      "Cirque Le Soir isn't just a nightclub — it's a show that happens to serve bottles. Fire breathers, contortionists, stilt walkers, and sword swallowers perform inches from your table while you drink. Nothing else in London comes close to this experience. The venue is deliberately intimate, which means the atmosphere is always intense. Celebrities are regulars, the music is solid hip-hop and RnB, and the crowd is consistently up for a big night. If you've never done bottle service before, start here — it'll ruin every other club for you.",
    bestFor: "First-time bottle service, birthdays, special occasions, anyone who wants a story to tell",
    prosText: [
      "Genuinely unique — no other venue in London offers this experience",
      "Consistently strong atmosphere every night they open",
      "£1,000 starting minimum is reasonable for what you get",
      "The show element makes it feel like an event, not just a club night",
    ],
    consText: [
      "Can sell out fast on Saturdays — book early",
      "The intimate size means it can feel crowded",
      "Not for people who want a quiet, low-key night",
    ],
  },
  {
    slug: "tape-london",
    rank: 2,
    headline: "The Gold Standard of Mayfair Exclusivity",
    review:
      "Tape London is what most people imagine when they think of an exclusive London members' club. Under 200 capacity, recording studio-inspired interiors, a crowd that reads like a tabloid gossip column, and a door policy that's genuinely difficult without a booking. The higher price tag (from £1,500) buys you access to a world most people can't get into. The music is hip-hop focused and the DJs are consistently excellent. This is the club for people who've done everything else and want something more private.",
    bestFor: "Groups who value exclusivity, music industry connections, people who've outgrown mainstream clubs",
    prosText: [
      "Genuinely exclusive — the small capacity creates a premium feel",
      "Excellent music curation with hip-hop focus",
      "Members' club atmosphere without needing a membership (through us)",
      "Celebrity and music industry crowd",
    ],
    consText: [
      "Higher starting price than most Mayfair venues",
      "Very strict dress code — no room for casual",
      "Small venue means limited table availability",
    ],
  },
  {
    slug: "cuckoo-club",
    rank: 3,
    headline: "The Most Versatile Club in Mayfair",
    review:
      "Cuckoo Club is the safe bet that never disappoints. Two floors with completely different music policies — house upstairs, hip-hop in the basement — means every group finds their spot. It's been running for years because it gets the formula right: good music, strong crowd, reasonable prices, and a layout that keeps things interesting. If half your group wants house music and the other half wants hip-hop, Cuckoo solves that problem. It's not the flashiest or most exclusive venue on this list, but it's the most consistently good.",
    bestFor: "Mixed groups, people who want options, reliable Mayfair night out",
    prosText: [
      "Two distinct music rooms — something for everyone",
      "Consistently strong atmosphere, especially Thursday and Friday",
      "£1,000 starting minimum is accessible",
      "The longest-running clubs survive for a reason",
    ],
    consText: [
      "Not as 'exclusive' feeling as Tape or Cirque",
      "The ground floor can lean commercial at times",
      "Less of a 'special occasion' venue",
    ],
  },
  {
    slug: "maddox",
    rank: 4,
    headline: "The Best Dinner-to-Club Transition in London",
    review:
      "Maddox is a problem solver. If you want to start with a proper Italian dinner and then stay for clubbing without switching venues, taxis, or queues, this is the only venue that does both at a high level. The restaurant is genuinely good — this isn't club food, it's real Italian fine dining. The club transition happens naturally as the lights drop and the house music builds. The crowd is more mature and sophisticated than most Mayfair clubs, which is either a pro or a con depending on what you're after.",
    bestFor: "Corporate entertaining, couples, dinner-and-club groups, house music fans",
    prosText: [
      "Seamless dinner-to-club experience in one venue",
      "Restaurant quality is genuinely high",
      "More sophisticated atmosphere than most Mayfair clubs",
      "House music policy attracts a well-dressed crowd",
    ],
    consText: [
      "House music only — no hip-hop or RnB",
      "Less high-energy than hip-hop focused venues",
      "Better suited to smaller, sophisticated groups than big parties",
    ],
  },
  {
    slug: "tabu-london",
    rank: 5,
    headline: "The Freshest Addition to Mayfair's Hip-Hop Scene",
    review:
      "Tabu takes the Japanese underground aesthetic and drops it into Mayfair with genuine style. The dark, moody interior feels completely different from the gold-and-mirrors approach of traditional Mayfair clubs. The music policy is hip-hop-heavy with a lean towards UK rap, drill, and Afrobeats — harder and more underground than most venues in the area. The crowd reflects this: younger, more fashion-forward, more diverse. If you find traditional Mayfair clubs a bit safe or predictable, Tabu is built for you.",
    bestFor: "Hip-hop enthusiasts, fashion-forward groups, people who want Mayfair service without Mayfair stuffiness",
    prosText: [
      "Genuinely different aesthetic from traditional Mayfair",
      "Strong, underground-leaning music policy",
      "Fashion-forward, diverse crowd",
      "Competitive pricing at £1,000 starting minimum",
    ],
    consText: [
      "Smaller venue — can feel tight on busy Saturdays",
      "Still relatively new, building its reputation",
      "Not for people who want commercial pop or house music",
    ],
  },
  {
    slug: "london-reign",
    rank: 6,
    headline: "Vegas-Scale Spectacle in the Heart of London",
    review:
      "London Reign is the closest thing London has to a Las Vegas showclub. Aerial acrobats, professional dancers, live vocalists, fire performers — the production quality rivals a West End show. The venue is larger than most Mayfair clubs, which gives the performances room to breathe and the crowd space to enjoy them. The music crosses genres because the entertainment is the headline, not the DJ. If Cirque Le Soir is an intimate circus, Reign is the full arena show.",
    bestFor: "Large groups, hen parties, tourists wanting the London experience, people who love spectacle",
    prosText: [
      "Production values that genuinely impress",
      "Larger venue than most Mayfair clubs — space to breathe",
      "Excellent for groups and celebrations",
      "Performances create natural energy peaks throughout the night",
    ],
    consText: [
      "Only open Friday and Saturday",
      "VIP tables start from £2,500 — the premium tables are expensive",
      "The spectacle can sometimes overshadow the music",
    ],
  },
  {
    slug: "selene-london",
    rank: 7,
    headline: "The Multi-Activity Club That Actually Works",
    review:
      "Selene took a risk by adding bowling lanes to a Mayfair nightclub — and it paid off. The multi-room layout means you're not stuck in one space all night. Bowl between drinks, move between rooms, find the vibe that suits your group at that moment. It's particularly good for birthdays and corporate events where you need an icebreaker beyond 'sit at a table and drink.' The fit-out is high-end Mayfair standard and the music across all rooms is strong. As a newer venue, it doesn't yet have Saturday-night scarcity, which works in your favour.",
    bestFor: "Birthday groups, corporate nights, people who get restless at single-room clubs",
    prosText: [
      "Bowling lanes add a unique activity element",
      "Multiple rooms prevent the single-room fatigue",
      "Good for large groups who can spread across spaces",
      "Still relatively new — availability is better than established venues",
    ],
    consText: [
      "The bowling novelty might not appeal to everyone",
      "Less established than legacy Mayfair clubs",
      "The multi-room concept means less concentrated energy per room",
    ],
  },
  {
    slug: "funky-buddha",
    rank: 8,
    headline: "The Legendary Name Returns",
    review:
      "The Funky Buddha name carries weight in London nightlife, and the rebranded venue does a decent job of living up to it. The open-format music policy is the selling point — DJs move between hip-hop, house, RnB, Afrobeats, and commercial tracks depending on the crowd. This makes it the easiest sell for groups where people have wildly different music tastes. The venue is solid, the crowd is good, and the experience is reliable. It's not the most exciting venue on this list, but it's the most crowd-pleasing.",
    bestFor: "Groups with mixed music tastes, people who want a reliable night, nostalgic fans of the original venue",
    prosText: [
      "Open-format music means something for everyone",
      "Legendary name with an established reputation",
      "Reliable atmosphere — rarely disappoints",
      "£1,000 starting minimum is standard and fair",
    ],
    consText: [
      "Only open Friday and Saturday",
      "Jack of all genres, master of none",
      "Less distinctive identity than specialist venues",
    ],
  },
  {
    slug: "libertine",
    rank: 9,
    headline: "Mayfair's Unapologetic Party Headquarters",
    review:
      "Libertine doesn't pretend to be sophisticated or restrained — it's a flat-out party. The atmosphere is high-energy, the crowd is young and international, and the music is designed to keep people on their feet. If you find some Mayfair clubs too stiff or too self-conscious, Libertine is the antidote. It's not the most refined venue on this list, but for pure fun and party energy, it's hard to beat.",
    bestFor: "Groups who want a proper party, big birthdays, anyone who finds Mayfair clubs too restrained",
    prosText: [
      "Consistently high-energy party atmosphere",
      "Young, fun, international crowd",
      "£1,000 starting minimum is accessible",
      "Great for birthday celebrations",
    ],
    consText: [
      "Not for those seeking a sophisticated or intimate experience",
      "Can get very busy on Saturdays",
      "Less music curation than specialist venues",
    ],
  },
  {
    slug: "scotch-of-st-james",
    rank: 10,
    headline: "Rock and Roll History With Impeccable Taste",
    review:
      "Scotch of St James is for people who care about music. The venue where Hendrix and the Stones used to party has been reborn as an intimate, quality-driven club where the DJs are chosen for taste rather than fame. The cocktail programme is genuinely good, the crowd is older and more discerning, and the atmosphere has a warmth and authenticity that newer venues can't manufacture. It's not a high-energy superclub — it's a place to drink well, hear great music, and feel the weight of London's musical heritage.",
    bestFor: "Music lovers, couples, smaller groups, anyone who values quality over spectacle",
    prosText: [
      "Legendary musical history gives it genuine character",
      "Eclectic, quality-driven music policy",
      "Excellent cocktail programme",
      "Intimate, warm atmosphere",
    ],
    consText: [
      "Small capacity — tables are limited",
      "Not the high-energy experience some groups want",
      "More suited to smaller groups than large parties",
    ],
  },
  {
    slug: "dear-darling",
    rank: 11,
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
    rank: 12,
    headline: "London's Electronic Music Answer to Bottle Service",
    review:
      "BEAT fills a gap in London's nightlife. If you love electronic music but also want bottle service, your options have traditionally been limited — most serious electronic venues don't do tables, and most table-service clubs don't take electronic music seriously. BEAT does both. The sound system is built for electronic music, the DJs are booked for talent, and the table service doesn't compromise the music experience. It's a niche proposition but for the right group, it's perfect.",
    bestFor: "Electronic music fans who want VIP treatment, Ibiza/Berlin regulars visiting London, groups tired of hip-hop clubs",
    prosText: [
      "Serious sound system built for electronic music",
      "Quality DJ bookings based on talent",
      "Fills a genuine gap in the London market",
      "More relaxed dress code than Mayfair",
    ],
    consText: [
      "Niche appeal — not for hip-hop or RnB fans",
      "Only open Friday and Saturday",
      "Less exclusive atmosphere than Mayfair clubs",
    ],
  },
  {
    slug: "ministry-of-sound",
    rank: 13,
    headline: "A Bucket-List Club for a Reason",
    review:
      "Ministry of Sound is not comparable to the other venues on this list — it's a completely different category. This is one of the most famous nightclubs in the world, with a sound system that has been refined over three decades and a heritage that spans the entire history of dance music culture. VIP table service here puts you in an elevated position within a 1,500-person event featuring world-class DJs. It's not intimate, it's not exclusive in the Mayfair sense — it's epic. If you've never been, it belongs on your list.",
    bestFor: "Electronic music fans, bucket-list nights out, groups who want scale and spectacle, tourists experiencing London nightlife",
    prosText: [
      "One of the most famous clubs in the world — genuine bucket-list venue",
      "World-class sound system, possibly the best in any nightclub",
      "Multi-room layout with different music in each",
      "World-class DJ line-ups every weekend",
    ],
    consText: [
      "Not in Mayfair — located in Elephant & Castle, South London",
      "Very different experience from intimate Mayfair clubs",
      "VIP pricing varies hugely depending on the event",
      "Can feel impersonal compared to smaller venues",
    ],
  },
  {
    slug: "lio-london",
    rank: 14,
    headline: "The Full Evening Experience — Dinner, Show, and Club",
    review:
      "Lio Club London takes the dinner-show-club concept further than any other venue on this list. The Mediterranean cabaret performances are genuinely impressive — professional dancers, acrobats, and vocalists performing at a level you'd expect from theatre, not a nightclub. The food is real restaurant quality, not club food. And the transition into the late-night club phase feels natural rather than forced. It's the most expensive experience on this list, but for a special occasion where you want an entire evening in one extraordinary venue, Lio is unmatched.",
    bestFor: "Special occasions, couples, groups who love Ibiza glamour, anyone who wants dinner-show-club in one venue",
    prosText: [
      "Exceptional cabaret performances — genuine production quality",
      "Restaurant-quality Mediterranean dining",
      "Seamless dinner-to-show-to-club transition",
      "Lavish, Mediterranean-inspired interior",
    ],
    consText: [
      "Premium pricing — starts from £1,500 for club tables",
      "The full experience requires committing to the whole evening",
      "Not a pure nightclub — if you just want to dance, there are simpler options",
    ],
  },
];

export default function BestClubsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Best Clubs for Bottle Service</span>
        </nav>
      </div>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Best Clubs for Bottle Service in London
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            An honest, opinionated guide to every club we work with. We book tables at
            all of these venues every week, so this isn&apos;t based on one visit or a press
            release — it&apos;s based on consistent, real experience.
          </p>
          <p className="text-text-muted">
            Every venue below is a genuine recommendation. We wouldn&apos;t work with a club
            we couldn&apos;t stand behind. The rankings reflect which venues deliver the most
            consistent, memorable experiences for the money.
          </p>
        </div>
      </section>

      {/* Quick Compare */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">At a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">Club</th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">From</th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">Music</th>
                  <th className="text-left py-3 text-text-muted font-medium">Nights</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((r) => {
                  const club = clubs.find((c) => c.slug === r.slug)!;
                  return (
                    <tr key={r.slug} className="border-b border-border/50">
                      <td className="py-3 pr-4">
                        <Link
                          href={`/clubs/${r.slug}`}
                          className="text-gold hover:underline font-medium"
                        >
                          {club.name}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 text-text-secondary">
                        £{club.pricing.floorTable.toLocaleString()}
                      </td>
                      <td className="py-3 pr-4 text-text-muted">
                        {club.musicPolicy.split(",")[0]}
                      </td>
                      <td className="py-3 text-text-muted">
                        {club.openingNights.map((n) => n.slice(0, 3)).join(", ")}
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
            className="py-12 px-4 border-t border-border"
            id={r.slug}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center text-lg">
                  {r.rank}
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    <Link
                      href={`/clubs/${r.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h2>
                  <p className="text-gold italic">{r.headline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                  From £{club.pricing.floorTable.toLocaleString()}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  {club.area}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  {club.openingNights.join(", ")}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                {r.review}
              </p>

              <p className="text-sm mb-6">
                <span className="text-gold font-medium">Best for: </span>
                <span className="text-text-muted">{r.bestFor}</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-green-500 mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {r.prosText.map((pro, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-green-500 flex-shrink-0">+</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-red-400 mb-3">Considerations</h4>
                  <ul className="space-y-2">
                    {r.consText.map((con, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-red-400 flex-shrink-0">-</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/clubs/${r.slug}`}
                className="text-gold text-sm font-medium hover:underline"
              >
                Full {club.name} review, prices &amp; booking &rarr;
              </Link>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-bg-card">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-text-muted mb-8">
            Not sure which club fits your group? Message us on WhatsApp with your
            vibe, budget, and group size — we&apos;ll give you an honest recommendation
            in minutes.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
