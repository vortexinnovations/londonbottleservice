import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { HeroImage } from "@/components/HeroImage";
import { pageImages } from "@/data/images";

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
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary">Book a Table</span>
        </nav>
      </div>

      {/* Hero */}
      <HeroImage src={pageImages.bookATable.hero} alt={pageImages.bookATable.alt} height="h-[40vh] min-h-[300px]" overlay="strong">
        <p className="eyebrow [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-4 animate-fade-up">Reservations</p>
        <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-4 animate-fade-up-1">
          Book a VIP Table at London&apos;s Best Clubs
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl animate-fade-up-2">
          Choose your club, message us on WhatsApp, and we&apos;ll confirm your table
          directly with the venue. Real prices, instant confirmation, no booking fees.
        </p>
        <div className="animate-fade-up-3">
          <WhatsAppCTA urgencyMessage="Weekend tables fill fast — book now to secure your spot" />
        </div>
      </HeroImage>

      {/* Trust Badges */}
      <section className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto -mt-px">
          <TrustBadges />
        </div>
      </section>

      {/* Club Booking Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow mb-4">The clubs</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            Choose Your Club
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => (
              <Link
                key={club.slug}
                href={club.bookingSlug ? `/${club.bookingSlug}` : `/clubs/${club.slug}`}
                className="bg-bg-card border border-border p-6 hover:border-gold-dark hover:bg-bg-card/40 transition-colors group"
              >
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mb-3">
                  No. {String(i + 1).padStart(2, "0")} &mdash; {club.area}
                </p>
                <h3 className="font-display italic text-xl font-normal group-hover:text-gold-light transition-colors mb-4">
                  {club.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-xs text-text-muted">Floor Table</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">
                    <span className="price-sign">&pound;</span>{club.pricing.floorTable.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-xs text-text-muted">VIP Table</span>
                  <span className="dotted-leader" aria-hidden="true" />
                  <span className="price">
                    <span className="price-sign">&pound;</span>{club.pricing.vipTable.toLocaleString()}
                  </span>
                </div>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mb-4">
                  {club.openingNights.join(" — ")}
                </p>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors">
                  Book a Table &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">The process</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose a Club", desc: "Browse our venues above or message us if you're not sure which club suits your group." },
              { step: "2", title: "Send Your Details", desc: "Tap WhatsApp and tell us your date, group size, budget, and any special requests." },
              { step: "3", title: "We Confirm", desc: "We contact the venue directly and confirm your table — usually within minutes." },
              { step: "4", title: "Arrive & Enjoy", desc: "Skip the queue, sit down at your reserved table, and your personal waitress is ready." },
            ].map((item) => (
              <div key={item.step}>
                <p className="font-display text-3xl font-light text-gold-dark leading-none mb-3">
                  {item.step}
                </p>
                <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Further reading</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">Not Sure Which Club?</h2>
          <p className="text-text-muted mb-6">
            Message us on WhatsApp with what you&apos;re looking for and we&apos;ll
            recommend the perfect venue. Or check out our guides:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/best-clubs-bottle-service-london" className="btn-secondary">
              Best Clubs Guide
            </Link>
            <Link href="/clubs-by-night" className="btn-secondary">
              Clubs by Night
            </Link>
            <Link href="/bottle-service-guide" className="btn-secondary">
              Bottle Service Guide
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            Table Booking — Frequently Asked Questions
          </h2>
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

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Reservations</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">Ready to Book?</h2>
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
