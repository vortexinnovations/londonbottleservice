import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Luxx Club London: Closed | Mayfair Alternatives & Table Booking",
  description:
    "Luxx Club London closed and the venue reopened as Funky Buddha, which has also closed. Find open Mayfair alternatives and book a table via WhatsApp.",
  alternates: {
    canonical: "https://londonbottleservice.com/clubs/luxx-club-london",
  },
  openGraph: {
    title: "Luxx Club London: Closed",
    description:
      "Luxx Club London became Funky Buddha, which has also closed. Open Mayfair alternatives and WhatsApp table booking.",
    url: "https://londonbottleservice.com/clubs/luxx-club-london",
  },
};

const faqs = [
  {
    question: "What happened to Luxx Club London?",
    answer:
      "Luxx Club London closed and the venue at 15 Berkeley Street reopened as Funky Buddha. Funky Buddha has since closed as well, so neither name is open today.",
  },
  {
    question: "Is Funky Buddha still open?",
    answer:
      "No. Funky Buddha, which replaced Luxx at 15 Berkeley Street, is permanently closed, and Itzel now operates at the address. For a similar Mayfair night with table service, Cirque Le Soir, Selene London and Dear Darling are the closest alternatives.",
  },
  {
    question: "Where was Luxx Club London?",
    answer:
      "Luxx was located at 15 Berkeley Street, Mayfair, London W1J 8DY.",
  },
  {
    question: "Where can I book a table instead?",
    answer:
      "Message us on WhatsApp with your date, group size and budget and we will suggest an open Mayfair club that suits your group, with the current minimum spend confirmed before you book.",
  },
];

export default function LuxxPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Luxx Club London</span>
        </nav>
      </div>

      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4 animate-fade-up">Closure notice</p>
          <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-6 animate-fade-up-1">
            Luxx Club London Has Closed
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            If you&apos;re searching for Luxx Club London: Luxx closed and the
            venue at 15 Berkeley Street reopened as{" "}
            <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light transition-colors font-medium">
              Funky Buddha
            </Link>
            , which has since closed too. Neither name is open today: Itzel is
            its successor and now operates at the Berkeley Street address.
          </p>
          <p className="text-text-secondary leading-relaxed mb-8">
            For a similar Mayfair night with table service, the closest open
            alternatives are{" "}
            <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light transition-colors">
              Cirque Le Soir
            </Link>
            ,{" "}
            <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light transition-colors">
              Selene London
            </Link>{" "}
            and{" "}
            <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light transition-colors">
              Dear Darling
            </Link>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/club-table-prices-london" className="btn-secondary">
              Compare Open Club Prices &rarr;
            </Link>
            <WhatsAppCTA />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            Luxx Club London: Frequently Asked Questions
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

      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Reservations</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">
            Book a Table at an Open Mayfair Club
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your date and group size for a
            recommendation and the current minimum spend.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
