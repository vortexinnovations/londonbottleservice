import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

export const metadata: Metadata = {
  title:
    "Guestlist vs Table Booking London — Which Should You Choose?",
  description:
    "Comprehensive comparison of guestlist vs table booking at London nightclubs. Cost differences, experience comparison, when each option makes sense, and how to decide for your group.",
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
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">
            Guestlist vs Table Booking
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Guestlist vs Table Booking in London — The Complete Comparison
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            If you are planning a night out in London, you have two main
            options for getting into the best clubs: guestlist or table
            booking. Both get you through the door, but the experiences are
            fundamentally different. Guestlist is the entry-level option —
            you get your name at the door and hopefully skip some of the
            queue. Table booking is the premium option — you get a reserved
            space, bottle service, a personal waitress, and guaranteed entry.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The right choice depends on your group size, budget, what you
            want from the night, and which club you are going to. This guide
            breaks down both options in detail so you can make an informed
            decision. We are a table booking service, so we are naturally
            biased — but we will be honest about when guestlist is the better
            call for certain groups.
          </p>
          <p className="text-text-muted">
            We work with every club mentioned on this page and can advise on
            both guestlist availability and table booking options.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Side by Side Comparison */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Guestlist vs Table Booking — Side by Side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Feature
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Guestlist
                  </th>
                  <th className="text-left py-3 text-text-muted font-medium">
                    Table Booking
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Cost
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Free or £10-£30pp cover
                  </td>
                  <td className="py-3 text-text-muted">
                    £1,000-£1,500 min. spend (covers drinks)
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Entry Guarantee
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Not guaranteed — door discretion applies
                  </td>
                  <td className="py-3 text-gold font-medium">
                    Guaranteed for your entire group
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Queue
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    May skip general queue, not always
                  </td>
                  <td className="py-3 text-gold font-medium">
                    Priority entry — skip the queue entirely
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Seating
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    No reserved space — standing or finding space
                  </td>
                  <td className="py-3 text-gold font-medium">
                    Reserved table and seating area
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Drinks
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Buy individually at the bar (£15-£20 each)
                  </td>
                  <td className="py-3 text-gold font-medium">
                    Bottles served to your table by a waitress
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Service
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Self-service at the bar
                  </td>
                  <td className="py-3 text-gold font-medium">
                    Personal waitress assigned to your table
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Best For
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    Small groups, budget-conscious, venue-hopping
                  </td>
                  <td className="py-3 text-gold font-medium">
                    Groups of 6+, celebrations, guaranteed experience
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    Per Person (Group of 8)
                  </td>
                  <td className="py-3 pr-4 text-text-muted">
                    £10-£30 entry + £60-£100 drinks = £70-£130
                  </td>
                  <td className="py-3 text-gold font-medium">
                    £125pp (all drinks included)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Comparison Deep Dive */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
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
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">
                Guestlist Night — Typical Cost
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex justify-between">
                  <span>Cover charge (if applicable)</span>
                  <span className="text-text-secondary">£0-£30</span>
                </li>
                <li className="flex justify-between">
                  <span>Cocktails at the bar (4-6 drinks)</span>
                  <span className="text-text-secondary">£60-£120</span>
                </li>
                <li className="flex justify-between">
                  <span>Queue time</span>
                  <span className="text-text-secondary">30-90 mins</span>
                </li>
                <li className="flex justify-between">
                  <span>Cloakroom</span>
                  <span className="text-text-secondary">£2-£5</span>
                </li>
                <li className="flex justify-between border-t border-border pt-3">
                  <span className="font-semibold text-text-primary">
                    Total per person
                  </span>
                  <span className="font-semibold text-text-primary">
                    £70-£155
                  </span>
                </li>
              </ul>
              <p className="text-text-muted text-xs mt-4">
                Plus the risk of being turned away at the door and no
                reserved space inside.
              </p>
            </div>
            <div className="bg-bg-card border border-gold/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">
                Table Booking — Typical Cost
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex justify-between">
                  <span>
                    Min. spend (group of 8 at £1,000)
                  </span>
                  <span className="text-gold">£125pp</span>
                </li>
                <li className="flex justify-between">
                  <span>Drinks covered by min. spend</span>
                  <span className="text-gold">Included</span>
                </li>
                <li className="flex justify-between">
                  <span>Queue time</span>
                  <span className="text-gold">0 mins</span>
                </li>
                <li className="flex justify-between">
                  <span>Entry guarantee</span>
                  <span className="text-gold">Guaranteed</span>
                </li>
                <li className="flex justify-between border-t border-border pt-3">
                  <span className="font-semibold text-text-primary">
                    Total per person
                  </span>
                  <span className="font-semibold text-gold">
                    £125
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
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            The Experience Difference
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Beyond cost, the experience of guestlist versus table booking is
            fundamentally different. This is especially true at London&apos;s
            busiest venues on weekend nights.
          </p>
          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
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
            <div className="bg-bg-card border border-gold/30 rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
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
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Guestlist vs Table Booking — By Club
          </h2>
          <p className="text-text-muted mb-8">
            The balance between guestlist and table booking varies by venue.
            At some clubs, guestlist entry is straightforward. At others, a
            table booking is practically essential. Here is how it breaks
            down at every club we work with.
          </p>
          <div className="space-y-4">
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
                  className="bg-bg-card border border-border rounded-lg p-5"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                    <h3 className="font-semibold">
                      <Link
                        href={`/${club.bookingSlug}`}
                        className="text-gold hover:underline"
                      >
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-3 py-1 bg-bg-secondary border border-border rounded-full text-text-muted">
                        Table from £
                        {club.pricing.floorTable.toLocaleString()}
                      </span>
                      {isHardDoor && (
                        <span className="text-xs px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                          Table recommended
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-text-muted text-sm mb-2">
                    {tableEssential}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <Link
                      href={`/${club.slug}-guestlist-vs-table-booking`}
                      className="text-gold hover:underline"
                    >
                      Full guestlist vs table comparison for{" "}
                      {club.shortName} &rarr;
                    </Link>
                    <span className="text-text-muted">|</span>
                    <Link
                      href={`/${club.bookingSlug}`}
                      className="text-text-secondary hover:text-gold transition-colors"
                    >
                      Book a table
                    </Link>
                    <span className="text-text-muted">|</span>
                    <Link
                      href={`/${club.slug}-table-prices`}
                      className="text-text-secondary hover:text-gold transition-colors"
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
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            When to Choose Each Option
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">
                Choose Guestlist When...
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-text-secondary flex-shrink-0">
                    1.
                  </span>
                  Your group is two to four people and you want to keep
                  costs low
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-text-secondary flex-shrink-0">
                    2.
                  </span>
                  You are planning to visit multiple venues in one night
                  and do not want to commit to one
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-text-secondary flex-shrink-0">
                    3.
                  </span>
                  You are going on a quieter weeknight when entry is more
                  relaxed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-text-secondary flex-shrink-0">
                    4.
                  </span>
                  You are happy to stand, queue, and buy drinks at the bar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-text-secondary flex-shrink-0">
                    5.
                  </span>
                  Budget is your primary concern and the club has
                  accessible guestlist entry
                </li>
              </ul>
            </div>
            <div className="bg-bg-card border border-gold/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">
                Choose Table Booking When...
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0">1.</span>
                  Your group is six or more people — the per-person value
                  is strong
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0">2.</span>
                  You are celebrating a birthday, anniversary, or special
                  occasion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0">3.</span>
                  You need guaranteed entry — especially at exclusive
                  venues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0">4.</span>
                  You want a premium experience with reserved seating and
                  bottle service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold flex-shrink-0">5.</span>
                  You are going on a Saturday when queues are longest and
                  door policy is strictest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Verdict */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
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
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            Guestlist vs Table Booking FAQs
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

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
