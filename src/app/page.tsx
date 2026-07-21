import Link from "next/link";
import { clubs } from "@/data/clubs";
import { ClubCard } from "@/components/ClubCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { HeroImage } from "@/components/HeroImage";
import { pageImages } from "@/data/images";

const homeFAQs = [
  {
    question: "What is bottle service in London?",
    answer:
      "Bottle service means booking a private table at a nightclub where you purchase bottles of spirits or champagne rather than buying individual drinks at the bar. In London's Mayfair clubs, this comes with a reserved seating area, a personal waitress, priority entry, and mixers included. Most clubs require a minimum spend starting from £1,000.",
  },
  {
    question: "How much does bottle service cost in London?",
    answer:
      "Bottle service at London's Mayfair clubs typically starts from £1,000 minimum spend for a standard floor table. VIP and premium tables range from £1,500 to £3,000+. This isn't an entry fee — it's the amount you spend on drinks at your table. Prices vary by club, night of the week, and table position.",
  },
  {
    question: "How do I book a VIP table in London?",
    answer:
      "The easiest way is to message us on WhatsApp with your preferred club, date, group size, and any special requests. We'll confirm availability and pricing within minutes. No forms, no waiting — just a direct conversation with someone who knows the venues.",
  },
  {
    question: "What is the minimum spend at London clubs?",
    answer:
      "Minimum spend varies by club and night. Most Mayfair clubs start at £1,000 for a floor table. Premium venues like Tape London start from £1,500. VIP tables at any venue start from £2,000-£3,000. The minimum spend covers your drinks — premium spirits, champagne, or a combination.",
  },
  {
    question: "Which London clubs are best for bottle service?",
    answer:
      "It depends on what you're after. Cirque Le Soir for theatrical entertainment, Tape London for exclusivity, Cuckoo Club for versatility with two floors, Maddox for dinner-and-club, Tabu for Japanese-inspired aesthetics, London Reign for Las Vegas-style shows, Selene for bowling and multiple rooms, and Funky Buddha for open-format music.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homeFAQs} />
      <BreadcrumbSchema items={[{ name: "Home" }]} />

      {/* Hero */}
      <HeroImage
        src={pageImages.home.hero}
        alt={pageImages.home.alt}
        height="h-[72vh] min-h-[560px]"
        overlay="strong"
        caption="Fig. 01 — Inside a Mayfair main room"
      >
        <div className="max-w-3xl">
          <p className="eyebrow !text-gold [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-5 animate-fade-up">
            No. 01 &mdash; Table Dossier &middot; London W1
          </p>
          <h1 className="font-display font-light text-[2.6rem] md:text-6xl leading-[1.05] tracking-[-0.015em] mb-6 animate-fade-up">
            Bottle Service at London&apos;s{" "}
            <em className="text-gold-light">Most Exclusive Clubs</em>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-4 max-w-xl leading-relaxed animate-fade-up-1">
            Real table prices. No hidden fees. Instant WhatsApp booking at Mayfair&apos;s
            finest nightclubs — from £1,000 minimum spend.
          </p>
          <p className="text-text-muted text-[0.9375rem] mb-9 max-w-lg animate-fade-up-2">
            We work directly with the venues so you know exactly what you&apos;re paying
            before you arrive. No surprises, no inflated quotes.
          </p>
          <div className="animate-fade-up-3">
            <WhatsAppCTA />
          </div>
        </div>
      </HeroImage>

      {/* Trust ledger */}
      <section className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto -mt-px">
          <TrustBadges />
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">No. 02 &mdash; The House Rules</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-14 max-w-xl">
            Why Book Your Table Through Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                n: "01",
                title: "Transparent Pricing",
                body:
                  "Every club page shows real starting prices. We don't hide behind “contact us for a quote” — you know what to expect before you message.",
              },
              {
                n: "02",
                title: "Instant WhatsApp Booking",
                body:
                  "No forms, no email chains, no waiting days for a reply. Message us on WhatsApp and we'll confirm your table within minutes.",
              },
              {
                n: "03",
                title: "Direct Venue Relationships",
                body:
                  "We work directly with every club listed on this site. Your booking goes straight to the venue — no middlemen, no inflated prices.",
              },
            ].map((item) => (
              <div key={item.n} className="border-t border-border-light pt-6">
                <p className="font-mono text-[0.6875rem] text-gold-dark tracking-[0.25em] mb-4">
                  {item.n}
                </p>
                <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-20 md:py-24 px-4 sm:px-6 border-t border-border bg-bg-secondary" id="clubs">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">No. 03 &mdash; The Clubs</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-5 max-w-2xl">
            VIP Table Prices at London&apos;s Best Clubs
          </h2>
          <p className="text-text-muted max-w-xl mb-16 text-[0.9375rem] leading-relaxed">
            Every club below has its own page with full pricing, what&apos;s included,
            opening nights, dress code, and everything else you need to know.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
            {clubs.map((club, i) => (
              <div key={club.slug} className={i % 2 === 1 ? "lg:translate-y-12" : ""}>
                <ClubCard club={club} index={i} total={clubs.length} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 04 &mdash; The Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-14 max-w-xl">
            How to Book Bottle Service in London
          </h2>
          <div className="border-t border-border">
            {[
              {
                n: "01",
                title: "Pick Your Club",
                body:
                  "Browse our club pages to compare prices, music policies, vibes, and opening nights. Each page has everything you need to decide.",
              },
              {
                n: "02",
                title: "Message Us on WhatsApp",
                body:
                  "Tap the WhatsApp button on any page. The message pre-fills with the club name — just add your date, group size, and any preferences.",
              },
              {
                n: "03",
                title: "Get Confirmed",
                body:
                  "We confirm your table directly with the venue, usually within minutes. You'll get your table details, arrival time, and everything you need for the night.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_16rem_1fr] gap-4 md:gap-8 py-7 border-b border-border items-baseline"
              >
                <span className="font-display text-3xl md:text-4xl font-light text-gold-dark leading-none">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-medium">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed col-span-2 md:col-span-1 col-start-2 md:col-start-auto">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* Guides & Resources */}
      <section className="py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">No. 05 &mdash; Read before you book</p>
          <h2 className="font-display text-2xl md:text-3xl font-normal mb-10">
            Guides &amp; Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 border-t border-border md:border-t-0">
            {[
              { href: "/best-clubs-bottle-service-london", label: "Best Clubs Ranked", desc: "Our honest reviews" },
              { href: "/club-table-prices-london", label: "Table Prices", desc: "Full price comparison" },
              { href: "/best-vip-tables-in-london", label: "Best VIP Tables", desc: "Premium positions ranked" },
              { href: "/guestlist-vs-table-booking-london", label: "Guestlist vs Table", desc: "Which should you choose?" },
              { href: "/mayfair-table-booking-guide", label: "Mayfair Guide", desc: "Area booking guide" },
              { href: "/bottle-service-guide", label: "What is Bottle Service?", desc: "Complete explainer" },
              { href: "/clubs-by-night", label: "Clubs by Night", desc: "What's open when" },
              { href: "/book-a-table", label: "Book a Table", desc: "All clubs, instant booking" },
            ].map((g, i) => (
              <Link
                key={g.href}
                href={g.href}
                className="flex items-baseline gap-4 py-3.5 border-b border-border md:first:border-t md:[&:nth-child(2)]:border-t group hover:bg-bg-card/40 transition-colors"
              >
                <span className="font-mono text-[0.625rem] text-gold-dark w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-medium text-text-primary group-hover:text-gold-light transition-colors">
                  {g.label}
                </span>
                <span className="dotted-leader" aria-hidden="true" />
                <span className="text-text-muted text-xs shrink-0">{g.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">No. 06 &mdash; Questions, Answered Plainly</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-12">
            Frequently Asked Questions About Bottle Service in London
          </h2>
          <div className="border-t border-border">
            {homeFAQs.map((faq, i) => (
              <div key={i} className="py-7 border-b border-border">
                <h3 className="font-display text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-text-muted text-[0.9375rem] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <WhatsAppCTA variant="sticky" />
    </>
  );
}
