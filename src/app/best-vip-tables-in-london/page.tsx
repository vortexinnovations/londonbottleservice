import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { ItemListSchema } from "@/components/ItemListSchema";

export const metadata: Metadata = {
  title: "Best VIP Tables in London 2026 | Top Clubs Ranked",
  description:
    "Discover the best VIP tables in London for 2026. We rank every top club for VIP bookings — from Cirque Le Soir to Tape London — with prices, what makes each special, and how to book.",
  alternates: {
    canonical: "https://londonbottleservice.com/best-vip-tables-in-london",
  },
  openGraph: {
    title: "Best VIP Tables in London 2026 | Top Clubs Ranked",
    description:
      "Our definitive ranking of London's best VIP tables. Prices, atmosphere, and honest reviews from a team that books tables every week.",
    url: "https://londonbottleservice.com/best-vip-tables-in-london",
  },
};

const faqs = [
  {
    question: "What is a VIP table at a London nightclub?",
    answer:
      "A VIP table is a premium reserved area within a nightclub, usually positioned in the best spots — closest to the stage, on a raised platform, or in a secluded section with better service. VIP tables come with higher minimum spends than standard floor tables but offer superior views, more space, and a more exclusive experience. At most London clubs, VIP tables start from £1,500 to £3,000 minimum spend.",
  },
  {
    question: "How much do VIP tables cost in London?",
    answer:
      "VIP table prices in London vary by venue. At Cirque Le Soir, VIP tables start from £2,000. Tape London and The Box VIP tables start from £3,000. London Reign VIP tables start from £2,500. Most other Mayfair clubs — including Cuckoo Club, Maddox, Tabu, Selene, Funky Buddha, Dear Darling, Luna, and Scotch of St James — offer VIP tables from £2,000. Standard floor tables at all venues start from £1,000.",
  },
  {
    question: "What is the difference between a floor table and a VIP table?",
    answer:
      "Floor tables are standard reservations on the main level of the club. VIP tables are positioned in premium locations — closer to the stage at venues like Cirque Le Soir and London Reign, on elevated platforms at others, or in private sections with dedicated service. VIP tables have higher minimum spends but offer better sightlines, more privacy, and a more premium experience overall.",
  },
  {
    question: "Which London club has the best VIP tables?",
    answer:
      "It depends on what you value. For the most theatrical VIP experience, Cirque Le Soir puts you front-row to circus performers. For exclusivity, Tape London offers an intimate members' club setting. For spectacle, London Reign's VIP tables give you prime views of aerial performers. For versatility, Selene's multi-room layout means VIP access across different spaces including bowling. Each venue excels in a different way.",
  },
  {
    question: "Do VIP tables include drinks?",
    answer:
      "Yes. The VIP table minimum spend is not an entry fee — it is your drinks budget for the night. You choose premium spirits, champagne, or cocktails from the menu, and your personal waitress serves them to your table. Mixers, ice, and garnishes are included. If you spend above the minimum, you pay the actual amount. The minimum spend covers everything you drink.",
  },
  {
    question: "How do I book a VIP table in London?",
    answer:
      "The easiest way is to message us on WhatsApp. Tell us your preferred club, date, group size, and any special requirements. We have direct relationships with every venue and can secure VIP table positions that may not be available through other channels. We confirm your booking quickly and there are no hidden fees — the price we quote is the minimum spend at the venue.",
  },
  {
    question: "Can I book a VIP table for a birthday or special occasion?",
    answer:
      "Absolutely. VIP tables are the most popular choice for birthdays, anniversaries, and celebrations. Most clubs can arrange cakes, sparklers, special announcements, and dedicated attention for your group. Cirque Le Soir, London Reign, and The Box are particularly popular for special occasions because of their theatrical performances. Let us know when you book and we will coordinate everything with the venue.",
  },
];

const vipHighlights: {
  slug: string;
  vipDescription: string;
  whatMakesVipSpecial: string;
}[] = [
  {
    slug: "cirque-le-soir",
    vipDescription:
      "VIP tables at Cirque Le Soir put you in the front row of a live circus. Fire breathers, contortionists, and stilt walkers perform inches from your table. The VIP positions are closest to the stage area and offer the most immersive experience in the venue. For a birthday or special occasion, there is genuinely nothing like having performers dedicate a moment to your table while your group drinks champagne.",
    whatMakesVipSpecial:
      "Front-row circus performance views, immersive theatrical atmosphere, the most talked-about VIP experience in London",
  },
  {
    slug: "tape-london",
    vipDescription:
      "Tape London is already one of the most exclusive venues in Mayfair with under 200 capacity. A VIP table here puts you at the centre of an extremely curated crowd — music industry figures, celebrities, and serious nightlife connoisseurs. The recording studio-inspired interiors feel private and intimate, and VIP positioning gives you the best seats in one of the hardest venues to access in London.",
    whatMakesVipSpecial:
      "Members' club exclusivity, under-200 capacity, celebrity crowd, the most exclusive VIP setting in Mayfair",
  },
  {
    slug: "the-box",
    vipDescription:
      "The Box delivers avant-garde theatrical performances that push boundaries — burlesque, cabaret, and performance art in an intimate Soho setting. VIP tables give you prime views of performances that are unlike anything else in London nightlife. The creative, fashion-forward crowd and famously selective door make VIP access here feel genuinely earned.",
    whatMakesVipSpecial:
      "Provocative avant-garde performances, fashion industry crowd, inspired by the famous New York original",
  },
  {
    slug: "london-reign",
    vipDescription:
      "London Reign is the closest thing London has to a Las Vegas showclub, with aerial acrobats, live vocalists, professional dancers, and fire performers. VIP tables offer the best views of the production — elevated positions with clear sightlines to the stage. The venue is larger than most Mayfair clubs, which means VIP here feels spacious and grand rather than cramped.",
    whatMakesVipSpecial:
      "Las Vegas-scale production, aerial performer views, largest show-format venue in Mayfair",
  },
  {
    slug: "cuckoo-club",
    vipDescription:
      "Cuckoo Club offers VIP tables on both floors — house music upstairs and hip-hop in the basement. The two-floor layout means your VIP experience can shift between vibes throughout the night. VIP positions on either floor give you prime real estate in one of Mayfair's most consistently reliable venues. If your group has mixed tastes, Cuckoo VIP is the safest and smartest choice.",
    whatMakesVipSpecial:
      "Two distinct floors with different music, the most versatile VIP option in Mayfair",
  },
  {
    slug: "maddox",
    vipDescription:
      "Maddox combines Italian fine dining with a sophisticated house music nightclub. VIP tables here give you the best of both worlds — start with dinner in the restaurant, then transition to a premium club position as the venue shifts into nightlife mode. The crowd is mature and well-dressed, and the house music policy creates an atmosphere that suits a more refined VIP experience.",
    whatMakesVipSpecial:
      "Dinner-to-club transition, Italian fine dining, sophisticated house music crowd",
  },
  {
    slug: "tabu-london",
    vipDescription:
      "Tabu brings a Japanese underground aesthetic to Mayfair with dark, moody interiors and a hip-hop-heavy music policy. VIP tables here put you at the heart of one of the most stylish newer venues in the area. The intimate size means even VIP positions feel connected to the energy of the room rather than isolated from it.",
    whatMakesVipSpecial:
      "Japanese-inspired design, underground hip-hop focus, fashion-forward crowd",
  },
  {
    slug: "selene-london",
    vipDescription:
      "Selene offers VIP across multiple rooms including a main club space and private bowling lanes. VIP access here means your group can move between different experiences throughout the night — bowl between drinks, shift rooms when the mood changes, and enjoy Mayfair-standard bottle service in a venue that offers genuine variety.",
    whatMakesVipSpecial:
      "Multi-room VIP access, private bowling lanes, the most activity-rich venue in Mayfair",
  },
];

export default function BestVipTablesPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Best VIP Tables in London" },
        ]}
      />
      <ItemListSchema
        name="Best VIP Tables in London"
        items={clubs.map((c, i) => ({
          name: c.name,
          url: `https://londonbottleservice.com/${c.bookingSlug || `clubs/${c.slug}`}`,
          position: i + 1,
        }))}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">
            Best VIP Tables in London
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Best VIP Tables in London — Where to Book in 2026
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            VIP tables are where the real London nightlife experience happens.
            You get the best positions in the venue, premium service, and a
            night that feels genuinely special rather than standing three-deep
            at a bar. But not all VIP tables are created equal — the
            experience at Cirque Le Soir is completely different from Tape
            London, which is completely different from London Reign.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            We book VIP tables at every club on this list every week. This
            ranking is based on hundreds of bookings and genuine feedback from
            groups who have experienced these venues first-hand. We know
            which VIP positions are worth the premium, which clubs deliver
            the best experience for the money, and which venues suit
            different types of groups.
          </p>
          <p className="text-text-muted">
            Every venue below is a club we work with directly. We have
            allocated VIP tables at each, and we can often secure positions
            that are not available through other booking channels. Message us
            on WhatsApp and we will handle everything.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* VIP Price Overview Grid */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            VIP Table Prices at a Glance
          </h2>
          <p className="text-text-muted mb-8">
            VIP tables carry a higher minimum spend than standard floor
            tables. The premium buys you better positioning, more space, and
            a superior experience. Here is what VIP costs at every club we
            work with.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Club
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Floor Table
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    VIP Table
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Area
                  </th>
                  <th className="text-left py-3 text-text-muted font-medium">
                    Nights
                  </th>
                </tr>
              </thead>
              <tbody>
                {clubs.map((club) => (
                  <tr
                    key={club.slug}
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
                      From £{club.pricing.floorTable.toLocaleString()}
                    </td>
                    <td className="py-3 pr-4 text-gold font-medium">
                      From £{club.pricing.vipTable.toLocaleString()}
                    </td>
                    <td className="py-3 pr-4 text-text-muted">
                      {club.area}
                    </td>
                    <td className="py-3 text-text-muted">
                      {club.openingNights
                        .map((n) => n.slice(0, 3))
                        .join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Makes VIP Worth It */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            What Makes a VIP Table Worth the Premium?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The difference between a floor table and a VIP table is not just
            about price. VIP tables are positioned in the best spots in the
            venue — that means front-row views of performers at Cirque Le
            Soir and London Reign, the most private booths at Tape London,
            elevated platforms at Cuckoo Club, and prime positions at every
            other venue. You also get more space, which matters when your
            group is six or more people, and in many cases you receive
            priority attention from your waitress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Better Positioning
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                VIP tables are placed where the experience is strongest.
                At show-format venues like Cirque Le Soir, London Reign,
                and The Box, that means front-row views of the
                performances. At music-focused venues, it means proximity
                to the DJ and dance floor without being swallowed by the
                crowd.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                More Space and Privacy
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                VIP areas typically have more seating, more room to move,
                and a sense of separation from the general floor. At
                venues like Tape London and Scotch of St James, the
                intimate capacity already feels exclusive — VIP elevates
                that further.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Premium Service
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                While all table bookings include a personal waitress, VIP
                tables often receive the most experienced staff and
                fastest service. When the venue is at capacity on a
                Saturday night, VIP table service remains consistently
                attentive.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Special Occasion Impact
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                If you are celebrating a birthday, anniversary, or
                milestone, VIP tables make the occasion feel proportionate
                to the event. Sparklers, cakes, and announcements hit
                differently when you are in the prime position of the
                venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual VIP Club Reviews */}
      {vipHighlights.map((vh) => {
        const club = clubs.find((c) => c.slug === vh.slug)!;
        return (
          <section
            key={vh.slug}
            className="py-12 px-4 border-t border-border"
            id={vh.slug}
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
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-xs px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                  VIP from £{club.pricing.vipTable.toLocaleString()}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  Floor from £{club.pricing.floorTable.toLocaleString()}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  {club.area}
                </span>
                <span className="text-xs px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  {club.openingNights.join(", ")}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                {vh.vipDescription}
              </p>

              <p className="text-sm mb-6">
                <span className="text-gold font-medium">
                  What makes VIP special:{" "}
                </span>
                <span className="text-text-muted">
                  {vh.whatMakesVipSpecial}
                </span>
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${club.bookingSlug}`}
                  className="text-gold text-sm font-medium hover:underline"
                >
                  Book a VIP table at {club.name} &rarr;
                </Link>
                <span className="text-text-muted text-sm">|</span>
                <Link
                  href={`/${club.slug}-vip-tables`}
                  className="text-text-secondary text-sm hover:text-gold transition-colors"
                >
                  {club.name} VIP tables guide
                </Link>
                <span className="text-text-muted text-sm">|</span>
                <Link
                  href={`/${club.slug}-table-prices`}
                  className="text-text-secondary text-sm hover:text-gold transition-colors"
                >
                  {club.name} table prices
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Remaining Clubs Quick List */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            More Clubs With VIP Tables
          </h2>
          <p className="text-text-muted mb-8">
            Every club we work with offers VIP table options. Here are the
            remaining venues with VIP availability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clubs
              .filter(
                (c) =>
                  !vipHighlights.some((vh) => vh.slug === c.slug)
              )
              .map((club) => (
                <div
                  key={club.slug}
                  className="bg-bg-card border border-border rounded-lg p-5"
                >
                  <h3 className="font-semibold mb-2">
                    <Link
                      href={`/${club.bookingSlug}`}
                      className="text-gold hover:underline"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <p className="text-text-muted text-sm mb-2">
                    VIP from £{club.pricing.vipTable.toLocaleString()} |{" "}
                    {club.area} |{" "}
                    {club.openingNights
                      .map((n) => n.slice(0, 3))
                      .join(", ")}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {club.bestFor}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={`/${club.slug}-vip-tables`}
                      className="text-text-secondary text-xs hover:text-gold transition-colors"
                    >
                      VIP guide
                    </Link>
                    <Link
                      href={`/${club.slug}-table-prices`}
                      className="text-text-secondary text-xs hover:text-gold transition-colors"
                    >
                      Prices
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            How to Book a VIP Table Through Us
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            We make VIP table bookings simple. We work directly with every
            venue on this list, and our relationships mean we can often
            secure VIP positions that are not available through other
            booking channels — particularly on busy Saturday nights when
            demand is highest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="text-gold font-bold text-2xl mb-3">1</div>
              <h3 className="font-semibold mb-2">Message Us</h3>
              <p className="text-text-muted text-sm">
                Send us a WhatsApp with your preferred club, date, group
                size, and any special requirements. We respond within
                minutes.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="text-gold font-bold text-2xl mb-3">2</div>
              <h3 className="font-semibold mb-2">We Confirm</h3>
              <p className="text-text-muted text-sm">
                We check VIP availability with the venue directly and
                confirm your table position, minimum spend, and everything
                included. No hidden fees.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="text-gold font-bold text-2xl mb-3">3</div>
              <h3 className="font-semibold mb-2">Arrive and Enjoy</h3>
              <p className="text-text-muted text-sm">
                On the night, you and your group arrive, skip the queue,
                and go straight to your VIP table. Your waitress will be
                ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions About VIP Tables in London
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
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Book a VIP Table?
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your preferred venue, date, and
            group size. We will confirm VIP availability and handle
            everything — no fees, no hassle.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
