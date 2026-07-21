import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Book a VIP Table | Contact London Bottle Service",
  description:
    "Book a VIP table at any Mayfair nightclub in under 2 minutes. No forms, no waiting — just message us on WhatsApp and we'll confirm your booking.",
  alternates: {
    canonical: "https://londonbottleservice.com/contact",
  },
  openGraph: {
    title: "Book a VIP Table | London Bottle Service",
    description:
      "Book a VIP table at any Mayfair nightclub via WhatsApp. Instant confirmation, no forms.",
    url: "https://londonbottleservice.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary">Book a Table</span>
        </nav>
      </div>

      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-4 animate-fade-up">Reservations</p>
          <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-6 animate-fade-up-1">
            Book a VIP Table
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4 animate-fade-up-2">
            No forms. No email chains. No waiting days for a reply. Just tap the
            button below to open a WhatsApp conversation with us. The message
            pre-fills with everything we need — just add your details and hit send.
          </p>
          <p className="text-text-muted mb-10 animate-fade-up-3">
            We typically respond within minutes, even on weekends.
          </p>

          <WhatsAppCTA className="text-base" />

          <div className="mt-16 text-left">
            <p className="eyebrow mb-4">The process</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
              What Happens When You Message Us
            </h2>

            <div className="border-t border-border">
              <div className="flex gap-6 py-6 border-b border-border">
                <p className="flex-shrink-0 font-display text-3xl font-light text-gold-dark leading-none">
                  1
                </p>
                <div>
                  <h3 className="font-display text-lg font-medium mb-1">You send us your details</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Which club, what date, how many people, and any special requests
                    (birthday, corporate event, specific table position).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-6 border-b border-border">
                <p className="flex-shrink-0 font-display text-3xl font-light text-gold-dark leading-none">
                  2
                </p>
                <div>
                  <h3 className="font-display text-lg font-medium mb-1">We check availability</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    We go directly to the venue to confirm table availability and
                    pricing for your specific date. No guesswork — we check in real time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-6 border-b border-border">
                <p className="flex-shrink-0 font-display text-3xl font-light text-gold-dark leading-none">
                  3
                </p>
                <div>
                  <h3 className="font-display text-lg font-medium mb-1">We confirm your booking</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    You&apos;ll get your confirmed minimum spend, table position, arrival
                    time, and any other details for the night. Everything over WhatsApp
                    so you have it on your phone when you arrive.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-6 border-b border-border">
                <p className="flex-shrink-0 font-display text-3xl font-light text-gold-dark leading-none">
                  4
                </p>
                <div>
                  <h3 className="font-display text-lg font-medium mb-1">You turn up and enjoy</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Give your name at the door, skip the queue, and head straight to
                    your table. Your waitress will be ready. That&apos;s it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-bg-card border border-border text-left">
            <p className="eyebrow mb-2">Undecided</p>
            <h3 className="font-display text-lg font-medium mb-3">Not sure which club to pick?</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Tell us what you&apos;re after — music preference, group size, budget,
              occasion — and we&apos;ll recommend the right venue. We know these clubs
              inside out and we&apos;ll give you an honest steer, not just push you
              towards whoever pays us the most.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/best-clubs-bottle-service-london"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors"
              >
                Read our club reviews &rarr;
              </Link>
              <Link
                href="/clubs-by-night"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors"
              >
                Check which clubs are open your night &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
