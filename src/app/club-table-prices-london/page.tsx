import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "London Club Table Prices 2026 | Complete Price Guide",
  description:
    "Complete guide to London club table prices in 2026. Floor and VIP prices for all 13 clubs, per-person breakdowns, and tips on getting the best value.",
  alternates: {
    canonical:
      "https://londonbottleservice.com/club-table-prices-london",
  },
  openGraph: {
    title: "London Club Table Prices 2026 | Complete Price Guide",
    description:
      "Every London club table price in one place. Floor tables, VIP tables, per-person costs, and insider tips on value from a team that books hundreds of tables.",
    url: "https://londonbottleservice.com/club-table-prices-london",
  },
};

const faqs = [
  {
    question: "How much is a table at a London nightclub?",
    answer:
      "Most London nightclubs start at £1,000 minimum spend for a standard floor table. This includes Cirque Le Soir, Cuckoo Club, Maddox, Tabu London, Selene London, Funky Buddha, Dear Darling, Luna Club London, Scotch of St James, London Reign, and BEAT London. Tape London and The Box start at £1,500 due to their heightened exclusivity. VIP tables range from £2,000 to £3,000 across all venues.",
  },
  {
    question: "What does the minimum spend include?",
    answer:
      "The minimum spend is your drinks budget — not a cover charge or booking fee. You choose bottles of premium spirits or champagne from the club's menu and your personal waitress serves them to your table. Mixers, ice, and garnishes are included in the bottle prices. Your booking also includes priority entry for your group, a reserved table and seating area, and table service all night. You pay the minimum spend at the venue on the night, not upfront.",
  },
  {
    question: "How much should I budget per person?",
    answer:
      "For a standard floor table, budget £150 to £250 per person depending on the venue and group size. For a VIP table, budget £250 to £400 per person. A group of eight sharing a £1,000 floor table works out to £125 per person. A group of six on a £2,000 VIP table is roughly £333 per person. Larger groups get better per-person value. These amounts cover all your drinks for the night.",
  },
  {
    question: "Are table prices higher on Saturdays?",
    answer:
      "Yes. Saturday is the most expensive night at every London club. Minimum spends can be 20 to 50 percent higher than midweek or Friday prices. Friday is generally the second most expensive night. Thursday and Wednesday (where available) offer the best value with the lowest minimum spends. If your schedule is flexible, booking a Thursday or Friday instead of Saturday can save your group significant money.",
  },
  {
    question: "Which is the cheapest club for a table in London?",
    answer:
      "Most clubs start at the same £1,000 floor table minimum, including Cirque Le Soir, Cuckoo Club, Maddox, Tabu, Selene, Funky Buddha, Dear Darling, Luna, Scotch of St James, London Reign, and BEAT. The cheapest overall option is booking on a weeknight — Wednesday or Thursday tables at venues like Cuckoo Club, Scotch of St James, or Tape London can have reduced minimums. Message us and we will find the best value for your budget.",
  },
  {
    question: "Which London club has the most expensive tables?",
    answer:
      "Tape London and The Box have the highest starting prices at £1,500 for a floor table and £3,000 for VIP. London Reign's VIP tables start at £2,500. These premium prices reflect the exclusivity, intimate capacity, and unique experiences at each venue. For most groups, the £1,000-starting venues offer outstanding value — Cirque Le Soir at £1,000 minimum delivers one of the most memorable nights in London.",
  },
  {
    question: "Do table prices include entry to the club?",
    answer:
      "Yes. A table booking includes priority entry for your entire group. You skip the general queue and go straight to your reserved table. There is no separate entry fee or cover charge on top of the minimum spend. The minimum spend covers your drinks, your table, your waitress, and your entry. We do not charge a booking fee either — the price we quote is the exact amount you spend at the venue.",
  },
];

export default function ClubTablePricesPage() {
  const sortedByFloor = [...clubs].sort(
    (a, b) => a.pricing.floorTable - b.pricing.floorTable
  );
  const sortedByVip = [...clubs].sort(
    (a, b) => a.pricing.vipTable - b.pricing.vipTable
  );

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          {
            name: "London Club Table Prices",
            url: "https://londonbottleservice.com/club-table-prices-london",
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
            London Club Table Prices
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            London Club Table Prices — The Complete 2026 Guide
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            How much does a table actually cost at London&apos;s top
            nightclubs? This is the question we answer more than any other.
            The short answer is that most clubs start at £1,000 minimum spend
            for a floor table, with VIP tables ranging from £2,000 to
            £3,000. But the full picture is more nuanced — prices vary by
            venue, by night, by table position, and by how many people are in
            your group.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            This guide lays out every price at every club we work with. We
            update these figures regularly based on our bookings, and we will
            always confirm the exact minimum spend for your specific date
            before you commit. There are no hidden fees and no booking
            charges from us — the price listed is the price you pay at the
            venue.
          </p>
          <p className="text-text-muted">
            All prices shown are standard starting minimums. Prices may be
            higher on special event nights, New Year&apos;s Eve, bank
            holidays, and during peak periods. Contact us for exact pricing
            on your chosen date.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Complete Price Comparison Grid */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Complete Price Comparison — All 13 Clubs
          </h2>
          <p className="text-text-muted mb-8">
            Every club, every price tier, every detail in one table. Prices
            shown are standard starting minimum spends.
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
                    Per Person (6 ppl)
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
                {sortedByFloor.map((club) => (
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
                      £{club.pricing.floorTable.toLocaleString()}
                    </td>
                    <td className="py-3 pr-4 text-gold font-medium">
                      £{club.pricing.vipTable.toLocaleString()}
                    </td>
                    <td className="py-3 pr-4 text-text-muted">
                      ~£{Math.round(club.pricing.floorTable / 6).toLocaleString()}
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

      {/* Per Person Breakdown */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Per-Person Cost Breakdown
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The per-person cost of a table depends entirely on your group
            size. Larger groups get significantly better value. Here is what
            a standard floor table costs per person at different group sizes
            across all price tiers.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Min. Spend
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    4 People
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    6 People
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    8 People
                  </th>
                  <th className="text-left py-3 text-text-muted font-medium">
                    10 People
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    £1,000
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£250pp</td>
                  <td className="py-3 pr-4 text-gold font-medium">
                    £167pp
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£125pp</td>
                  <td className="py-3 text-text-muted">£100pp</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    £1,500
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£375pp</td>
                  <td className="py-3 pr-4 text-gold font-medium">
                    £250pp
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£188pp</td>
                  <td className="py-3 text-text-muted">£150pp</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    £2,000
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£500pp</td>
                  <td className="py-3 pr-4 text-gold font-medium">
                    £333pp
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£250pp</td>
                  <td className="py-3 text-text-muted">£200pp</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    £2,500
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£625pp</td>
                  <td className="py-3 pr-4 text-gold font-medium">
                    £417pp
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£313pp</td>
                  <td className="py-3 text-text-muted">£250pp</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 text-text-secondary font-medium">
                    £3,000
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£750pp</td>
                  <td className="py-3 pr-4 text-gold font-medium">
                    £500pp
                  </td>
                  <td className="py-3 pr-4 text-text-muted">£375pp</td>
                  <td className="py-3 text-text-muted">£300pp</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-muted text-sm mt-4">
            The sweet spot for most groups is six to eight people per table.
            This balances per-person cost with comfort at the table. Groups
            larger than ten should consider booking two adjacent tables.
          </p>
        </div>
      </section>

      {/* Floor vs VIP Comparison */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Floor Tables vs VIP Tables — Is the Upgrade Worth It?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            The jump from a floor table to a VIP table is typically £1,000
            extra minimum spend. Whether that premium is worth it depends on
            the venue and the occasion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                VIP is Worth It At
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      Cirque Le Soir
                    </strong>{" "}
                    — VIP gets you front-row to the performers, which is
                    the entire point of the venue
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      London Reign
                    </strong>{" "}
                    — VIP gives you the best views of aerial acts and the
                    full show
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      The Box
                    </strong>{" "}
                    — VIP positions are where the performances are most
                    impactful
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      Special occasions
                    </strong>{" "}
                    — birthdays and celebrations deserve the best position
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Floor Tables Are Fine At
              </h3>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      Tape London
                    </strong>{" "}
                    — the venue is so intimate that every table feels
                    premium
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      Scotch of St James
                    </strong>{" "}
                    — the small capacity means no table is far from the
                    action
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      Tabu London
                    </strong>{" "}
                    — intimate venue where floor tables still get the full
                    atmosphere
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  <span>
                    <strong className="text-text-secondary">
                      Regular nights out
                    </strong>{" "}
                    — save VIP budget for truly special occasions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Club Price Details */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Pricing Details by Club
          </h2>
          <p className="text-text-muted mb-8">
            Here is a detailed breakdown for every club, including what the
            minimum spend covers and what makes each venue worth its price.
          </p>
          <div className="space-y-6">
            {sortedByFloor.map((club) => (
              <div
                key={club.slug}
                className="bg-bg-card border border-border rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold">
                    <Link
                      href={`/${club.bookingSlug}`}
                      className="text-gold hover:underline"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <div className="flex gap-3">
                    <span className="text-sm px-3 py-1 bg-bg-secondary border border-border rounded-full text-text-secondary">
                      Floor £{club.pricing.floorTable.toLocaleString()}
                    </span>
                    <span className="text-sm px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                      VIP £{club.pricing.vipTable.toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="text-text-muted text-sm mb-3">
                  {club.area} |{" "}
                  {club.openingNights.join(", ")} |{" "}
                  {club.musicPolicy.split(",")[0]}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {club.tagline}. {club.bestFor}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`/${club.slug}-table-prices`}
                    className="text-gold font-medium hover:underline"
                  >
                    Full {club.shortName} price guide &rarr;
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
                    href={`/${club.slug}-vip-tables`}
                    className="text-text-secondary hover:text-gold transition-colors"
                  >
                    VIP options
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Getting Best Value */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            How to Get the Best Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Go on a Thursday or Friday
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Saturday minimum spends are the highest at every venue.
                Thursday and Friday offer the same quality of experience
                with lower minimums. The atmosphere on Fridays is
                consistently strong at all venues. Thursdays attract a
                local, in-the-know crowd and the vibe at the best clubs is
                excellent.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Bring Six to Eight People
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                The per-person cost drops dramatically with larger groups.
                A £1,000 table split six ways is under £170 per person —
                that covers all your drinks, priority entry, a reserved
                table, and waitress service for the entire night. It is
                better value than buying drinks at the bar all evening.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Book Early for Peak Dates
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Saturday nights at popular venues sell out. Booking early
                gives you access to the widest selection of table positions
                and ensures you get the standard minimum spend before any
                peak-night surcharges apply. Two to three weeks in advance
                is ideal for Saturday bookings.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">
                Ask Us for Recommendations
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We know which venues offer the best value for specific
                group types. A group of eight hip-hop fans will get
                different value at Tabu than they would at Maddox. Tell us
                your group, your budget, and what matters most — we will
                match you with the venue that delivers the most for your
                money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            London Club Table Pricing FAQs
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
            Get an Exact Price for Your Night
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your preferred club, date, and group
            size. We will confirm the exact minimum spend and secure your
            table — no booking fees, no hidden charges.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
