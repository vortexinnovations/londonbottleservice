import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { RelatedGuides } from "@/components/RelatedGuides";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { HeroImage } from "@/components/HeroImage";
import { pageImages } from "@/data/images";

export const metadata: Metadata = {
  title:
    "Guestlist vs Table Booking London — Which Should You Choose?",
  description:
    "Guestlist vs table booking at London clubs: real cost comparison, what each gets you, and which is right for your group.",
  alternates: {
    canonical:
      "https://londonbottleservice.com/guestlist-vs-table-booking-london",
  },
  openGraph: {
    title:
      "Guestlist vs Table Booking in London — The Complete Comparison",
    description:
      "Should you get on the guestlist or book a table? We break down cost, experience, access, and practicality for every London club.",
    url: "https://londonbottleservice.com/guestlist-vs-table-booking-london",
  },
};

const faqs = [
  {
    question: "What is the difference between guestlist and table booking?",
    answer:
      "A guestlist gets your name on the venue's door list, which may reduce or waive the entry fee and can help you skip part of the queue. A table booking reserves a private table with seating, priority entry, a personal waitress, and bottle service with a minimum spend on drinks. Guestlist gives you access to the venue. Table booking gives you a reserved space, guaranteed entry, and premium service inside the venue.",
  },
  {
    question: "How much does guestlist cost compared to a table booking?",
    answer:
      "Guestlist is typically free or involves a small cover charge of £10 to £30 per person, depending on the venue and night. Table bookings have a minimum spend starting from £1,000 at most London clubs. However, the minimum spend covers all your drinks for the night. When you factor in the cost of buying drinks at the bar — typically £15 to £20 per cocktail in Mayfair — a table booking can work out to similar or better value per person for groups of six or more.",
  },
  {
    question: "Is guestlist entry guaranteed?",
    answer:
      "Not always. Being on the guestlist means your name is at the door, but most London clubs reserve the right to refuse entry based on dress code, capacity, or the door team's discretion. Some venues are more strict than others — Tape London and The Box are extremely difficult to enter on guestlist alone. Table bookings guarantee entry for your entire group, making them the more reliable option if you need certainty.",
  },
  {
    question: "Can I get on the guestlist at any London club?",
    answer:
      "Most London clubs offer some form of guestlist, but the availability and benefit varies. Some clubs like Cuckoo Club and Funky Buddha have active guestlists. Others like Tape London rarely offer meaningful guestlist access — the venue is a members' club and getting in without a table booking is very difficult. The Box is similarly selective. We can advise on guestlist availability for any specific venue.",
  },
  {
    question: "When should I choose a table booking over guestlist?",
    answer:
      "Choose a table booking when you want guaranteed entry (no risk of being turned away), a reserved space to sit and drink comfortably, a personal waitress serving bottles to your table, priority entry that skips the entire queue, or when you are celebrating a special occasion. Also choose a table booking for groups of six or more — the per-person value is strong and the experience is dramatically better than standing at the bar.",
  },
  {
    question:
      "When does guestlist make more sense than a table booking?",
    answer:
      "Guestlist makes sense when you have a smaller group of two to four people, when you are on a tight budget and happy to buy drinks at the bar, when you are visiting multiple venues in one night and do not want to commit to one, or when you are going on a quieter weeknight where entry is easier. It is also fine for solo visitors or couples who want to experience the atmosphere without the commitment of a minimum spend.",
  },
  {
    question: "Do you offer guestlist services?",
    answer:
      "We specialise in table bookings rather than guestlist because table bookings provide a dramatically better experience and guaranteed entry. However, we can advise on guestlist availability and help you decide which option is right for your group. Message us on WhatsApp and we will give you an honest recommendation based on your group size, budget, and preferences.",
  },
];

export default function GuestlistVsTableBookingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          {
            name: "Guestlist vs Table Booking",
            url: "https://londonbottleservice.com/guestlist-vs-table-booking-london",
          },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">
            Home
          </Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary">
            Guestlist vs Table Booking
          </span>
        </nav>
      </div>

      {/* Hero */}
      <HeroImage src={pageImages.guestlistVsTable.hero} alt={pageImages.guestlistVsTable.alt} height="h-[40vh] min-h-[300px]" overlay="strong">
        <p className="eyebrow [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-4 animate-fade-up">The comparison</p>
        <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-6 animate-fade-up-1">
          Guestlist vs Table Booking in London — The Complete Comparison
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-4 animate-fade-up-2">
          If you are planning a night out in London, you have two main
          options for getting into the best clubs: guestlist or table
          booking. Both get you through the door, but the experiences are
          fundamentally different. Guestlist is the entry-level option —
          you get your name at the door and hopefully skip some of the
          queue. Table booking is the premium option — you get a reserved
          space, bottle service, a personal waitress, and guaranteed entry.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4 animate-fade-up-3">
          The right choice depends on your group size, budget, what you
          want from the night, and which club you are going to. This guide
          breaks down both options in detail so you can make an informed
          decision. We are a table booking service, so we are naturally
          biased — but we will be honest about when guestlist is the better
          call for certain groups.
        </p>
        <p className="text-text-muted animate-fade-up-3">
          We work with every club mentioned on this page and can advise on
          both guestlist availability and table booking options.
        </p>
      </HeroImage>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Side by Side Comparison */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 01 — Side by side</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            Guestlist vs Table Booking — Side by Side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-3 pr-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">
                    Feature
                  </th>
                  <th className="text-left py-3 pr-4 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">
                    Guestlist
                  </th>
                  <th className="text-left py-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted font-normal">
                    Table Booking
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Cost
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Free or <span className="price">£10-£30pp</span> cover
                  </td>
                  <td className="py-3 text-text-muted">
                    <span className="price">£1,000-£1,500</span> min. spend (covers drinks)
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Entry Guarantee
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Not guaranteed — door discretion applies
                  </td>
                  <td className="py-3 text-gold-light">
                    Guaranteed for your entire group
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Queue
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    May skip general queue, not always
                  </td>
                  <td className="py-3 text-gold-light">
                    Priority entry — skip the queue entirely
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Seating
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    No reserved space — standing or finding space
                  </td>
                  <td className="py-3 text-gold-light">
                    Reserved table and seating area
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Drinks
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Buy individually at the bar (<span className="price">£15-£20</span> each)
                  </td>
                  <td className="py-3 text-gold-light">
                    Bottles served to your table by a waitress
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Service
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Self-service at the bar
                  </td>
                  <td className="py-3 text-gold-light">
                    Personal waitress assigned to your table
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Best For
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Small groups, budget-conscious, venue-hopping
                  </td>
                  <td className="py-3 text-gold-light">
                    Groups of 6+, celebrations, guaranteed experience
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Per Person (Group of 8)
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    <span className="price">£10-£30</span> entry + <span className="price">£60-£100</span> drinks = <span className="price">£70-£130</span>
                  </td>
                  <td className="py-3 text-gold-light">
                    <span className="price">£125pp</span> (all drinks included)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Comparison Deep Dive */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 02 — The costs</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            The Real Cost Comparison
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            On the surface, guestlist looks dramatically cheaper than a table
            booking. But when you factor in the actual cost of a night out —
            drinks at the bar, potential cover charges, and the risk of not
            getting in — the gap narrows significantly, especially for
            larger groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card border border-border p-6">
              <p className="eyebrow mb-2">Ledger A</p>
              <h3 className="font-display text-lg font-medium mb-4">
                Guestlist Night — Typical Cost
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-baseline">
                  <span>Cover charge (if applicable)</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price"><span className="price-sign">&pound;</span>0-<span className="price-sign">&pound;</span>30</span>
                </li>
                <li className="flex items-baseline">
                  <span>Cocktails at the bar (4-6 drinks)</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price"><span className="price-sign">&pound;</span>60-<span className="price-sign">&pound;</span>120</span>
                </li>
                <li className="flex items-baseline">
                  <span>Queue time</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">30-90 mins</span>
                </li>
                <li className="flex items-baseline">
                  <span>Cloakroom</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price"><span className="price-sign">&pound;</span>2-<span className="price-sign">&pound;</span>5</span>
                </li>
                <li className="flex items-baseline border-t border-border-light pt-3">
                  <span className="font-medium text-text-primary">
                    Total per person
                  </span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">
                    <span className="price-sign">&pound;</span>70-<span className="price-sign">&pound;</span>155
                  </span>
                </li>
              </ul>
              <p className="text-text-muted text-xs mt-4">
                Plus the risk of being turned away at the door and no
                reserved space inside.
              </p>
            </div>
            <div className="bg-bg-card border border-gold-dark p-6">
              <p className="eyebrow mb-2">Ledger B</p>
              <h3 className="font-display text-lg font-medium mb-4">
                Table Booking — Typical Cost
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-baseline">
                  <span>
                    Min. spend (group of 8 at £1,000)
                  </span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price"><span className="price-sign">&pound;</span>125pp</span>
                </li>
                <li className="flex items-baseline">
                  <span>Drinks covered by min. spend</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">Included</span>
                </li>
                <li className="flex items-baseline">
                  <span>Queue time</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">0 mins</span>
                </li>
                <li className="flex items-baseline">
                  <span>Entry guarantee</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">Guaranteed</span>
                </li>
                <li className="flex items-baseline border-t border-border-light pt-3">
                  <span className="font-medium text-text-primary">
                    Total per person
                  </span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">
                    <span className="price-sign">&pound;</span>125
                  </span>
                </li>
              </ul>
              <p className="text-text-muted text-xs mt-4">
                All drinks, seating, waitress service, and guaranteed
                entry included. No additional costs.
              </p>
            </div>
          </div>
          <p className="text-text-muted text-sm">
            For groups of six or more, table bookings often represent equal
            or better value than guestlist — with a dramatically better
            experience. The break-even point is typically around five to six
            people at a £1,000 minimum venue.
          </p>
        </div>
      </section>

      {/* Experience Comparison */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 03 — The experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            The Experience Difference
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Beyond cost, the experience of guestlist versus table booking is
            fundamentally different. This is especially true at London&apos;s
            busiest venues on weekend nights.
          </p>
          <div className="space-y-6">
            <div className="bg-bg-card border border-border p-6">
              <h3 className="font-display text-xl font-normal mb-3">
                The Guestlist Experience
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                You arrive at the venue, give your name to the door team,
                and join the guestlist queue — which is shorter than the
                general queue but still involves waiting, particularly on
                Saturdays. Once inside, you head to the bar. At busy
                Mayfair clubs, expect to wait five to fifteen minutes per
                round. Cocktails run £15 to £20 each. There is no
                guaranteed seating — you stand, find a spot near the dance
                floor, or lean against a wall. For a casual night with a
                small group, this is perfectly fine. For a birthday, a
                larger group, or a night you want to feel special, it can
                be frustrating.
              </p>
            </div>
            <div className="bg-bg-card border border-gold-dark p-6">
              <h3 className="font-display text-xl font-normal mb-3">
                The Table Booking Experience
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                You arrive, walk past the queue, give your name to the
                host, and are escorted directly to your reserved table.
                Your waitress introduces herself, takes your first bottle
                order, and serves drinks to the table within minutes. For
                the rest of the night, she keeps your glasses full, brings
                new bottles when you are ready, and ensures everything runs
                smoothly. You have a defined space to sit, stand, talk, and
                dance. Your belongings are secure at your table. If you are
                celebrating, sparklers light up your champagne and the
                whole section knows. The night feels like an event, not just
                a night out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club-Specific Comparison */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 04 — The clubs</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            Guestlist vs Table Booking — By Club
          </h2>
          <p className="text-text-muted mb-8">
            The balance between guestlist and table booking varies by venue.
            At some clubs, guestlist entry is straightforward. At others, a
            table booking is practically essential. Here is how it breaks
            down at every club we work with.
          </p>
          <div className="border-t border-border">
            {clubs.map((club) => {
              const isHardDoor =
                club.slug === "tape-london" ||
                club.slug === "the-box" ||
                club.slug === "scotch-of-st-james";
              const tableEssential = isHardDoor
                ? "Table booking strongly recommended — very difficult to enter on guestlist alone"
                : "Guestlist available but table booking gives a significantly better experience";
              return (
                <div
                  key={club.slug}
                  className="py-5 border-b border-border hover:bg-bg-card/40 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-2">
                    <h3 className="font-display italic text-lg font-normal">
                      <Link
                        href={`/${club.bookingSlug}`}
                        className="text-gold hover:text-gold-light transition-colors"
                      >
                        {club.name}
                      </Link>
                    </h3>
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
                      Table from{" "}
                      <span className="text-gold">
                        £{club.pricing.floorTable.toLocaleString()}
                      </span>
                      {isHardDoor && (
                        <span className="text-gold">
                          {" "}&mdash; Table recommended
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="text-text-muted text-sm mb-3">
                    {tableEssential}
                  </p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <Link
                      href={`/${club.slug}-guestlist-vs-table-booking`}
                      className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors"
                    >
                      Full guestlist vs table comparison for{" "}
                      {club.shortName} &rarr;
                    </Link>
                    <span className="font-mono text-[0.6875rem] text-text-muted">&mdash;</span>
                    <Link
                      href={`/${club.bookingSlug}`}
                      className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-text-secondary hover:text-gold transition-colors"
                    >
                      Book a table
                    </Link>
                    <span className="font-mono text-[0.6875rem] text-text-muted">&mdash;</span>
                    <Link
                      href={`/${club.slug}-table-prices`}
                      className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-text-secondary hover:text-gold transition-colors"
                    >
                      Prices
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to Choose Each Option */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 05 — The decision</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            When to Choose Each Option
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border p-6">
              <h3 className="font-display text-lg font-medium mb-4">
                Choose Guestlist When...
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">
                    1.
                  </span>
                  Your group is two to four people and you want to keep
                  costs low
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">
                    2.
                  </span>
                  You are planning to visit multiple venues in one night
                  and do not want to commit to one
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">
                    3.
                  </span>
                  You are going on a quieter weeknight when entry is more
                  relaxed
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">
                    4.
                  </span>
                  You are happy to stand, queue, and buy drinks at the bar
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">
                    5.
                  </span>
                  Budget is your primary concern and the club has
                  accessible guestlist entry
                </li>
              </ul>
            </div>
            <div className="bg-bg-card border border-gold-dark p-6">
              <h3 className="font-display text-lg font-medium mb-4">
                Choose Table Booking When...
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">1.</span>
                  Your group is six or more people — the per-person value
                  is strong
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">2.</span>
                  You are celebrating a birthday, anniversary, or special
                  occasion
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">3.</span>
                  You need guaranteed entry — especially at exclusive
                  venues
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">4.</span>
                  You want a premium experience with reserved seating and
                  bottle service
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[0.6875rem] text-gold-dark flex-shrink-0 pt-0.5">5.</span>
                  You are going on a Saturday when queues are longest and
                  door policy is strictest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Verdict */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 06 — The verdict</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            The Verdict — Our Honest Recommendation
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            We are a table booking service, so our recommendation is
            naturally weighted towards table bookings. But here is the
            honest truth: for groups of six or more, table bookings are
            almost always the better choice. The per-person cost is
            comparable to a guestlist night when you account for drinks at
            the bar, and the experience is in a different league.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            For smaller groups of two to four people on a budget, guestlist
            can work well — particularly on weeknights and at clubs with
            accessible door policies. There is nothing wrong with the
            guestlist route if it matches your group and your budget.
          </p>
          <p className="text-text-muted">
            If you are unsure, message us on WhatsApp. Tell us your group
            size, budget, and what matters most. We will give you an honest
            recommendation — and if guestlist is the better option for your
            situation, we will tell you that.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">No. 07 — Questions</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            Guestlist vs Table Booking FAQs
          </h2>
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6 border-b border-border">
                <h3 className="font-display text-lg font-medium mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-muted text-[0.9375rem] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Enquiries</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">
            Need Help Deciding?
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your group size, budget, and
            preferred venue. We will give you an honest recommendation on
            whether guestlist or table booking is the right choice for your
            night.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <RelatedGuides currentPath="/guestlist-vs-table-booking-london" />
      <WhatsAppCTA variant="sticky" />
    </>
  );
}
