import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Luxx Club London — Now Funky Buddha | Table Prices & Booking",
  description:
    "Luxx Club London has rebranded to Funky Buddha. Same Mayfair location, refreshed venue, open-format music. Tables from £1,000. Book via WhatsApp.",
  alternates: {
    canonical: "https://londonbottleservice.com/clubs/luxx-club-london",
  },
  openGraph: {
    title: "Luxx Club London — Now Funky Buddha",
    description:
      "Luxx Club London has rebranded to Funky Buddha. Tables from £1,000 minimum spend. Book now on WhatsApp.",
    url: "https://londonbottleservice.com/clubs/luxx-club-london",
  },
};

const faqs = [
  {
    question: "What happened to Luxx Club London?",
    answer:
      "Luxx Club London has closed and rebranded as Funky Buddha. The venue is in the same Mayfair location at 15 Berkeley Street but has been refreshed with a new identity, reviving one of Mayfair's most iconic nightclub names.",
  },
  {
    question: "Is Funky Buddha the same as Luxx?",
    answer:
      "Funky Buddha occupies the same venue as the former Luxx Club London. The interior has been updated and the name changed to Funky Buddha, bringing back one of Mayfair's most legendary club brands. The spirit is similar — a premium Mayfair nightclub with an open-format music policy.",
  },
  {
    question: "How much was a table at Luxx Club London?",
    answer:
      "Tables at Luxx started from £1,000. Funky Buddha maintains similar pricing — floor tables from £1,000 minimum spend, VIP tables from £2,000.",
  },
  {
    question: "Where was Luxx Club London?",
    answer:
      "Luxx was located at 15 Berkeley Street, Mayfair, London W1J 8DY. Funky Buddha is now at the same address.",
  },
];

export default function LuxxPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Luxx Club London</span>
        </nav>
      </div>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Luxx Club London — Now <span className="text-gold">Funky Buddha</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            If you&apos;re searching for Luxx Club London, you&apos;ve found the right place.
            Luxx has closed and the venue has been rebranded as{" "}
            <Link href="/clubs/funky-buddha" className="text-gold hover:underline font-medium">
              Funky Buddha
            </Link>{" "}
            — reviving one of the most iconic names in Mayfair nightlife history.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            The venue is at the same Mayfair address (15 Berkeley Street) but has been
            refreshed with an updated interior, new branding, and the energy of the original
            Funky Buddha name. The open-format music policy remains — DJs move between hip-hop,
            house, RnB, Afrobeats, and commercial anthems depending on the crowd.
          </p>
          <p className="text-text-secondary leading-relaxed mb-8">
            Tables start from £1,000 minimum spend, same as when the venue operated as Luxx.
            Everything you loved about the location and setup is still there — just under a
            better name.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/clubs/funky-buddha"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-gold hover:bg-gold-light text-bg-primary font-semibold rounded-lg transition-colors"
            >
              View Funky Buddha Prices &amp; Details &rarr;
            </Link>
            <WhatsAppCTA clubName="Funky Buddha" />
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Quick Comparison: Luxx vs Funky Buddha</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="text-text-muted font-medium mb-2">Luxx (Closed)</h3>
                <ul className="space-y-1.5 text-text-secondary">
                  <li>15 Berkeley Street, Mayfair</li>
                  <li>Tables from £1,000</li>
                  <li>Open-format music</li>
                  <li>Friday &amp; Saturday</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gold font-medium mb-2">Funky Buddha (Now Open)</h3>
                <ul className="space-y-1.5 text-text-secondary">
                  <li>Same location — 15 Berkeley Street</li>
                  <li>Tables from £1,000</li>
                  <li>Open-format music</li>
                  <li>Friday &amp; Saturday</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            Luxx Club London — Frequently Asked Questions
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

      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Book a Table at Funky Buddha
          </h2>
          <p className="text-text-muted mb-8">
            Same venue, new name, same great night out. Message us on WhatsApp to
            book your table.
          </p>
          <WhatsAppCTA clubName="Funky Buddha" />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" clubName="Funky Buddha" />
    </>
  );
}
