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
  title: "Mayfair Table Booking Guide 2026 | Prices, Tips & How to Book",
  description:
    "Complete Mayfair table booking guide. Every club's pricing, dress code, best nights, and how to book. Instant WhatsApp confirmation.",
  alternates: {
    canonical:
      "https://londonbottleservice.com/mayfair-table-booking-guide",
  },
  openGraph: {
    title: "Mayfair Table Booking Guide 2026 | Prices, Tips & How to Book",
    description:
      "Everything you need to know about booking tables at Mayfair clubs. Prices, dress codes, best nights, and insider tips from a team that books every week.",
    url: "https://londonbottleservice.com/mayfair-table-booking-guide",
  },
};

const mayfairClubs = clubs.filter(
  (c) =>
    c.area === "Mayfair" ||
    c.area === "Piccadilly / Mayfair" ||
    c.area.includes("Mayfair")
);

const faqs = [
  {
    question: "How much does a table cost in Mayfair?",
    answer:
      "Most Mayfair clubs start at £1,000 minimum spend for a standard floor table. This includes Cuckoo Club, Maddox, Tabu London, Selene London, Funky Buddha, Dear Darling, and Luna Club London. Tape London starts at £1,500 due to its members' club exclusivity. VIP tables across Mayfair range from £2,000 to £3,000. Prices can increase on peak nights, for special events, and during holiday periods.",
  },
  {
    question: "What is the dress code for Mayfair nightclubs?",
    answer:
      "Mayfair clubs enforce a smart dress code. For men: collared shirt, smart trousers or dark jeans, smart shoes — no trainers, no sportswear, no shorts. Jackets are encouraged at more exclusive venues like Tape London and Maddox. For women: cocktail dresses, heels or smart boots, stylish separates. The door staff at Mayfair clubs are selective, so if you are unsure, overdress. Tabu is slightly more relaxed and may accept smart trainers as part of a fashion-forward outfit.",
  },
  {
    question: "What is the best night to go to a Mayfair club?",
    answer:
      "Saturday is the biggest night at every Mayfair club — the fullest crowds, highest energy, and highest minimum spends. Friday is excellent across all venues with slightly lower prices. Thursday is a strong option at Cuckoo Club, Tape London, Tabu, Selene, Dear Darling, and Luna. Wednesday is available at Tape London, Cuckoo Club, and Scotch of St James with the lowest minimum spends. For value, midweek nights offer a comparable experience at reduced minimums.",
  },
  {
    question: "How do I book a table in Mayfair?",
    answer:
      "The simplest way is to message us on WhatsApp. We have direct relationships with every Mayfair club and can secure tables quickly — often same-day for midweek bookings. Tell us which club you prefer (or ask for a recommendation), your date, group size, and any special requests. We confirm everything with the venue and you pay nothing to us — the only cost is the minimum spend at the club on the night.",
  },
  {
    question: "Do Mayfair clubs have a minimum spend?",
    answer:
      "Yes. Every Mayfair club operates on a minimum spend model for table bookings. This is not a cover charge or fee — it is the amount you commit to spending on drinks at your table. A £1,000 minimum means you choose £1,000 worth of bottles from the menu. Your personal waitress helps you select bottles within budget. Mixers, ice, and garnishes are included in the bottle prices.",
  },
  {
    question: "Can I get into a Mayfair club without a table booking?",
    answer:
      "Some Mayfair clubs offer guestlist entry, but most do not guarantee walk-in access — especially on weekends. Tape London and The Box are extremely difficult to enter without a booking. Other clubs like Cuckoo Club and Funky Buddha occasionally accept walk-ins early in the evening, but there is no guarantee. A table booking gives you guaranteed entry, a reserved space, and a personal waitress — it is the reliable way to experience Mayfair nightlife.",
  },
  {
    question: "Which Mayfair club is best for a birthday celebration?",
    answer:
      "For theatrical birthday celebrations, Cirque Le Soir's circus performers and Soho location make it the most memorable option. Within Mayfair proper, Selene London's bowling lanes add an activity element that works brilliantly for birthday groups. Cuckoo Club's two floors give large groups flexibility. Most clubs can arrange cakes, sparklers, and birthday announcements — let us know when you book and we coordinate everything.",
  },
];

export default function MayfairTableBookingGuidePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          {
            name: "Mayfair Table Booking Guide",
            url: "https://londonbottleservice.com/mayfair-table-booking-guide",
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
            Mayfair Table Booking Guide
          </span>
        </nav>
      </div>

      {/* Hero */}
      <HeroImage src={pageImages.mayfairGuide.hero} alt={pageImages.mayfairGuide.alt} height="h-[40vh] min-h-[300px]" overlay="strong">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Mayfair Table Booking Guide — Everything You Need to Know
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-4">
          Mayfair is the centre of London&apos;s nightlife scene. Within a
          few streets you will find some of the most exclusive clubs in the
          world — members&apos; clubs, show venues, hip-hop institutions, and
          house music haunts. But booking a table in Mayfair for the first
          time can feel opaque. How much should you spend? What do you
          wear? Which club suits your group? Which night should you go?
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          This guide answers all of that. We book tables at every Mayfair
          club on this page every single week. We know the prices, we know
          the door policies, we know which nights are strongest, and we
          know which clubs suit which type of group. Whether you are
          planning a birthday, a corporate event, a stag or hen night, or
          just a proper Saturday night out, this guide gives you everything
          you need to make the right decision.
        </p>
        <p className="text-text-muted">
          No fluff, no guesswork — just practical information from people
          who do this professionally.
        </p>
      </HeroImage>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Mayfair Club Prices — What to Expect
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Table bookings in Mayfair work on a minimum spend model. The
            amount you commit is not a fee or a cover charge — it is your
            drinks budget. You choose bottles from the menu and your personal
            waitress serves them to your table all night. Mixers, ice, and
            garnishes are always included.
          </p>
          <p className="text-text-muted mb-8">
            As a general rule, budget £150 to £250 per person for a standard
            floor table, or £250 to £400 per person for a VIP table. Groups
            of six to eight people per table tend to get the best value.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Club
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Floor
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    VIP
                  </th>
                  <th className="text-left py-3 pr-4 text-text-muted font-medium">
                    Music
                  </th>
                  <th className="text-left py-3 text-text-muted font-medium">
                    Nights
                  </th>
                </tr>
              </thead>
              <tbody>
                {mayfairClubs.map((club) => (
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
                      {club.musicPolicy.split(",")[0]}
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

      {/* Dress Code Section */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Mayfair Dress Code — What to Wear
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Mayfair clubs take dress code seriously. The door staff are
            selective and will turn people away if they are not dressed
            appropriately — even with a table booking. The standard across
            all Mayfair venues is smart, but the interpretation varies
            slightly by club.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">For Men</h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Collared shirt — mandatory at every Mayfair club
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Smart trousers or well-fitted dark jeans
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Smart shoes — leather or suede, no trainers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Jackets encouraged at Tape London and Maddox
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 flex-shrink-0">-</span>
                  No sportswear, trainers, shorts, or casual t-shirts
                </li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-3">For Women</h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Cocktail dresses, elegant jumpsuits, or smart separates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Heels or smart boots — the standard Mayfair look
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Fashion-forward outfits welcome, especially at Tabu and
                  Dear Darling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 flex-shrink-0">+</span>
                  Accessories and statement pieces encouraged
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 flex-shrink-0">-</span>
                  No casual wear, flat trainers, or beachwear
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Nights */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Best Nights to Go Out in Mayfair
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Each night of the week has a different character in Mayfair. The
            best night for you depends on your budget, how busy you want the
            club to be, and which venues are open.
          </p>
          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-2">
                Saturday — The Main Event
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Every Mayfair club is open and at its busiest. The
                atmosphere is at its peak, the crowds are largest, and the
                minimum spends are at their highest. Saturday is the night
                for groups who want the full Mayfair experience and do not
                mind paying the premium. Book early — VIP tables sell out
                weeks in advance for Saturdays.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-2">
                Friday — The Sweet Spot
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                All venues open with strong crowds and a slightly more
                relaxed atmosphere than Saturday. Minimum spends are
                typically lower and tables are easier to secure. Friday is
                the best night for groups who want a proper Mayfair
                experience without the Saturday price premium. Cuckoo Club
                and Tape London are particularly strong on Fridays.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-2">
                Thursday — The Insider Night
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Available at Tape London, Cuckoo Club, Tabu, Selene, Dear
                Darling, Luna, Maddox, and Scotch of St James. Thursdays
                attract a local, regular crowd and the atmosphere at the
                best venues is genuinely excellent. Minimum spends are the
                lowest of the weekend stretch and VIP availability is
                strong. If you know the Mayfair scene, Thursday is when the
                regulars go out.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-gold mb-2">
                Wednesday — Early Week Option
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Available at Tape London, Cuckoo Club (Tuesday and
                Thursday), and Scotch of St James. Midweek nights offer the
                lowest prices and a more intimate atmosphere. These are
                excellent for smaller groups or couples who want a quieter
                Mayfair experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Mayfair Clubs */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Every Mayfair Club — Quick Guide
          </h2>
          <p className="text-text-muted mb-8">
            Here is every Mayfair club we work with, what makes each one
            different, and who each venue is best suited for.
          </p>
          <div className="space-y-6">
            {mayfairClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-bg-card border border-border rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      <Link
                        href={`/${club.bookingSlug}`}
                        className="text-gold hover:underline"
                      >
                        {club.name}
                      </Link>
                    </h3>
                    <p className="text-text-muted text-sm">
                      {club.area} | {club.openingNights.join(", ")} |{" "}
                      {club.musicPolicy.split(",")[0]}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs px-3 py-1 bg-bg-secondary border border-border rounded-full text-text-secondary whitespace-nowrap">
                      Floor £{club.pricing.floorTable.toLocaleString()}
                    </span>
                    <span className="text-xs px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold whitespace-nowrap">
                      VIP £{club.pricing.vipTable.toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {club.description}
                </p>
                <p className="text-sm mb-4">
                  <span className="text-gold font-medium">Best for: </span>
                  <span className="text-text-muted">{club.bestFor}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/${club.bookingSlug}`}
                    className="text-gold text-sm font-medium hover:underline"
                  >
                    Book a table &rarr;
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
                    href={`/${club.slug}-vip-tables`}
                    className="text-text-secondary text-sm hover:text-gold transition-colors"
                  >
                    VIP tables
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            How the Booking Process Works
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Booking a table through us is straightforward and there are no
            hidden costs. We do not charge a booking fee or add a mark-up to
            the club&apos;s prices. The minimum spend you are quoted is the
            exact amount you spend at the venue on the night.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-lg p-5">
              <div className="text-gold font-bold text-xl mb-2">1</div>
              <h3 className="font-semibold text-sm mb-2">
                Tell Us What You Want
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Club preference, date, group size, occasion, and budget.
                Not sure which club? We will recommend one.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-5">
              <div className="text-gold font-bold text-xl mb-2">2</div>
              <h3 className="font-semibold text-sm mb-2">
                We Check Availability
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                We contact the venue directly and confirm table
                availability, position, and minimum spend for your date.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-5">
              <div className="text-gold font-bold text-xl mb-2">3</div>
              <h3 className="font-semibold text-sm mb-2">
                Confirmation
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                You receive full confirmation with venue details, arrival
                time, dress code reminder, and your table details.
              </p>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-5">
              <div className="text-gold font-bold text-xl mb-2">4</div>
              <h3 className="font-semibold text-sm mb-2">
                Enjoy the Night
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Arrive, skip the queue, and head to your table. Your
                waitress takes care of everything from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            Mayfair Table Booking FAQs
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
            Ready to Book Your Mayfair Table?
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your date, group size, and
            preferences. We will match you with the right Mayfair club and
            handle every detail of the booking.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <RelatedGuides currentPath="/mayfair-table-booking-guide" />
      <WhatsAppCTA variant="sticky" />
    </>
  );
}
