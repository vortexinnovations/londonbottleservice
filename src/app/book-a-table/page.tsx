import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Book a VIP Table in London | Instant WhatsApp Booking",
  description:
    "Book VIP tables at London's best nightclubs. Tape London, Cirque Le Soir, Cuckoo Club and more. Real prices from £1,000. Instant WhatsApp confirmation.",
  alternates: {
    canonical: "https://londonbottleservice.com/book-a-table",
  },
  openGraph: {
    title: "Book a VIP Table in London | Instant WhatsApp Booking",
    description:
      "Book VIP tables at London's best nightclubs. Real prices from £1,000. Instant WhatsApp confirmation.",
    url: "https://londonbottleservice.com/book-a-table",
  },
};

const faqs = [
  {
    question: "How do I book a VIP table in London?",
    answer:
      "Message us on WhatsApp with your preferred club, date, group size, and any special requirements. We confirm directly with the venue and get back to you within minutes. No forms, no waiting, no hidden fees.",
  },
  {
    question: "How far in advance should I book a table?",
    answer:
      "For Friday and Saturday nights, book at least 2-3 days in advance. Popular clubs like Tape London and Cirque Le Soir can book out a week ahead for Saturdays. Weeknight bookings can often be arranged same-day.",
  },
  {
    question: "What does minimum spend mean?",
    answer:
      "The minimum spend is the amount you spend on drinks at your table — premium spirits, champagne, or a mix. It is not an entry fee. Your personal waitress helps you choose bottles that meet your minimum. Mixers, ice, and garnishes are included.",
  },
  {
    question: "Is there a booking fee?",
    answer:
      "No. We do not charge any booking fees, service charges, or hidden costs. The price you see is the minimum spend at the venue. We work directly with every club and our service is completely free to you.",
  },
  {
    question: "Can I book a table for a birthday or special occasion?",
    answer:
      "Absolutely. Most clubs offer birthday packages including cakes, sparklers, and special announcements. Let us know the occasion when you message us and we will arrange everything with the venue.",
  },
  {
    question: "What if I need to cancel or change my booking?",
    answer:
      "Message us on WhatsApp and we will handle changes or cancellations directly with the venue. Most clubs are flexible with changes made 24-48 hours in advance. Last-minute cancellations may forfeit a deposit if one was required.",
  },
];

export default function BookATablePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Book a Table" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Book a Table</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Book a VIP Table at London&apos;s Best Clubs
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Choose your club, message us on WhatsApp, and we&apos;ll confirm your table
            directly with the venue. Real prices, instant confirmation, no booking fees.
          </p>
          <WhatsAppCTA urgencyMessage="Weekend tables fill fast — book now to secure your spot" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-y border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Club Booking Grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Choose Your Club
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club) => (
              <Link
                key={club.slug}
                href={club.bookingSlug ? `/${club.bookingSlug}` : `/clubs/${club.slug}`}
                className="bg-bg-card border border-border rounded-xl p-5 hover:border-gold/30 transition-colors group"
              >
                <h3 className="font-bold text-lg group-hover:text-gold transition-colors mb-1">
                  {club.name}
                </h3>
                <p className="text-text-muted text-xs mb-3">{club.area}</p>
                <div className="flex items-baseline gap-3 mb-3">
                  <div>
                    <p className="text-xs text-text-muted">Floor Table</p>
                    <p className="text-gold font-bold">
                      &pound;{club.pricing.floorTable.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">VIP Table</p>
                    <p className="text-gold font-bold">
                      &pound;{club.pricing.vipTable.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-text-muted text-xs mb-3">
                  {club.openingNights.join(", ")}
                </p>
                <span className="text-gold text-sm font-semibold group-hover:underline">
                  Book a Table &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose a Club", desc: "Browse our venues above or message us if you're not sure which club suits your group." },
              { step: "2", title: "Send Your Details", desc: "Tap WhatsApp and tell us your date, group size, budget, and any special requests." },
              { step: "3", title: "We Confirm", desc: "We contact the venue directly and confirm your table — usually within minutes." },
              { step: "4", title: "Arrive & Enjoy", desc: "Skip the queue, sit down at your reserved table, and your personal waitress is ready." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Not Sure Which Club?</h2>
          <p className="text-text-muted mb-6">
            Message us on WhatsApp with what you&apos;re looking for and we&apos;ll
            recommend the perfect venue. Or check out our guides:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/best-clubs-bottle-service-london"
              className="text-sm bg-bg-card border border-border px-4 py-2 rounded-lg hover:border-gold/30 hover:text-gold transition-colors"
            >
              Best Clubs Guide
            </Link>
            <Link
              href="/clubs-by-night"
              className="text-sm bg-bg-card border border-border px-4 py-2 rounded-lg hover:border-gold/30 hover:text-gold transition-colors"
            >
              Clubs by Night
            </Link>
            <Link
              href="/bottle-service-guide"
              className="text-sm bg-bg-card border border-border px-4 py-2 rounded-lg hover:border-gold/30 hover:text-gold transition-colors"
            >
              Bottle Service Guide
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Table Booking — Frequently Asked Questions
          </h2>
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

      {/* Final CTA */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp and we&apos;ll have your table confirmed within minutes.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <WhatsAppCTA variant="sticky" urgencyMessage="Book your VIP table now" />
    </>
  );
}
