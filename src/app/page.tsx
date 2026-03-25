import { clubs } from "@/data/clubs";
import { ClubCard } from "@/components/ClubCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

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
      <section className="relative py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bottle Service at London&apos;s
            <span className="text-gold"> Most Exclusive Clubs</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Real table prices. No hidden fees. Instant WhatsApp booking at Mayfair&apos;s
            finest nightclubs — from £1,000 minimum spend.
          </p>
          <p className="text-text-muted text-base mb-8 max-w-xl mx-auto">
            We work directly with the venues so you know exactly what you&apos;re paying
            before you arrive. No surprises, no inflated quotes.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Book Your Table Through Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Every club page shows real starting prices. We don&apos;t hide behind
                &quot;contact us for a quote&quot; — you know what to expect before you message.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant WhatsApp Booking</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                No forms, no email chains, no waiting days for a reply. Message us on
                WhatsApp and we&apos;ll confirm your table within minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Venue Relationships</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We work directly with every club listed on this site. Your booking goes
                straight to the venue — no middlemen, no inflated prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16 px-4 border-t border-border" id="clubs">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            VIP Table Prices at London&apos;s Best Clubs
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Every club below has its own page with full pricing, what&apos;s included,
            opening nights, dress code, and everything else you need to know.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club) => (
              <ClubCard key={club.slug} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How to Book Bottle Service in London
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Pick Your Club</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Browse our club pages to compare prices, music policies, vibes, and opening nights.
                  Each page has everything you need to decide.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Message Us on WhatsApp</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Tap the WhatsApp button on any page. The message pre-fills with the club name —
                  just add your date, group size, and any preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Get Confirmed</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We confirm your table directly with the venue, usually within minutes.
                  You&apos;ll get your table details, arrival time, and everything you need for the night.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions About Bottle Service in London
          </h2>
          <div className="space-y-6">
            {homeFAQs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
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
