import { Metadata } from "next";
import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { RelatedGuides } from "@/components/RelatedGuides";

export const metadata: Metadata = {
  title: "What is Bottle Service? Complete London Guide | Prices, Rules & Tips",
  description:
    "How bottle service works in London. Minimum spend explained, what's included, dress code, and how to book at Mayfair clubs. Real insider guide.",
  alternates: {
    canonical: "https://londonbottleservice.com/bottle-service-guide",
  },
  openGraph: {
    title: "What is Bottle Service? Complete London Guide",
    description:
      "Everything you need to know about bottle service in London's Mayfair clubs. Prices, rules, dress codes, and booking tips.",
    url: "https://londonbottleservice.com/bottle-service-guide",
  },
};

const faqs = [
  {
    question: "What is bottle service at a nightclub?",
    answer:
      "Bottle service means booking a private table at a nightclub where you purchase whole bottles of spirits or champagne rather than individual drinks at the bar. You get a reserved seating area, a personal waitress, priority entry, and your drinks served to your table all night. In London's Mayfair clubs, bottle service typically involves a minimum spend — the total amount you must spend on drinks at your table.",
  },
  {
    question: "How does minimum spend work at London clubs?",
    answer:
      "Minimum spend is the amount you commit to spending on drinks at your table. It is not an entry fee or a charge on top of your drinks — it IS your drinks budget. If your minimum spend is £1,000, you choose £1,000 worth of bottles from the menu. A bottle of premium vodka typically costs £300-£500, champagne ranges from £400-£2,000+. Your waitress will help you select bottles within your budget. Mixers, ice, and garnishes are included in the price.",
  },
  {
    question: "What is included with bottle service in London?",
    answer:
      "Bottle service at London clubs typically includes: a reserved table and seating area for your group, priority entry (skip the general queue), a personal waitress assigned to your table, your choice of premium spirits or champagne, all mixers (tonic, coke, Red Bull, juice), ice, and garnishes. Some clubs include additional perks like birthday cakes, sparklers for champagne bottles, or reserved cloakroom.",
  },
  {
    question: "How much does bottle service cost in London?",
    answer:
      "Bottle service at Mayfair clubs starts from £1,000 minimum spend per table. VIP tables range from £1,500 to £3,000+. The cost varies by: which club (exclusive venues like Tape London start higher), which night (Saturdays are most expensive), table position (VIP and stage-front tables cost more), and group size. As a rough guide, budget £150-£250 per person for a standard table.",
  },
  {
    question: "What should I wear to a Mayfair nightclub?",
    answer:
      "Mayfair clubs enforce a smart dress code. For men: collared shirt (no t-shirts), smart trousers or dark jeans, smart shoes (no trainers or sneakers). Jackets are encouraged at some venues. For women: cocktail dresses, heels or smart boots, stylish separates. Avoid: sportswear, casual trainers, shorts, flip-flops, ripped jeans, or anything you'd wear to the gym. The door staff are selective — if in doubt, overdress.",
  },
  {
    question: "How many people can sit at a bottle service table?",
    answer:
      "A standard bottle service table in London typically accommodates 5-10 guests. Larger groups can book multiple adjacent tables. The minimum spend usually covers the table regardless of group size, though some clubs adjust the minimum for very large groups. We recommend keeping your group to 6-8 people per table for comfort.",
  },
  {
    question: "Do I need to pay the minimum spend upfront?",
    answer:
      "No. The minimum spend is paid at the venue on the night. You order bottles throughout the evening and settle the bill at the end. A card will be taken behind the bar when you arrive as a guarantee, and the minimum spend is charged to that card. If you spend above the minimum, you pay the actual amount.",
  },
  {
    question: "Can I bring my own drinks to a bottle service table?",
    answer:
      "No. All drinks must be purchased through the venue. Bringing outside drinks is not permitted at any Mayfair club. The minimum spend exists specifically so that you purchase your drinks at the club.",
  },
  {
    question: "What time should I arrive for bottle service?",
    answer:
      "Most Mayfair clubs open between 10:00 PM and 10:30 PM. We recommend arriving between 10:30 PM and 11:30 PM. Arriving early means you get settled before the venue fills up. Your table is reserved for you all night — there's no rush, but don't arrive at 1:00 AM expecting the full experience.",
  },
  {
    question: "How do I book bottle service in London?",
    answer:
      "The easiest way is to message us on WhatsApp with your preferred club, date, group size, and any special requirements. We work directly with every venue listed on this site and can confirm your booking within minutes. No forms, no waiting for email replies.",
  },
];

export default function BottleServiceGuidePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Bottle Service Guide" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Bottle Service Guide</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            What is Bottle Service? The Complete London Guide
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            If you&apos;ve never booked bottle service before, the whole concept can seem
            confusing. What&apos;s a minimum spend? What do you actually get? Is it worth
            the money? This guide answers every question so you know exactly what to
            expect before you book.
          </p>
          <p className="text-text-muted">
            Written by someone who books tables at these clubs every week — not a
            generic explainer copied from the internet.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* What is Bottle Service */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What Bottle Service Actually Means
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Bottle service is straightforward once you understand it. Instead of queuing at the bar and buying individual drinks, you book a private table at the club and buy whole bottles of spirits or champagne. Your table comes with a dedicated waitress who pours your drinks, brings mixers, and looks after your group all night.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The &quot;bottle&quot; part is literal — you&apos;re buying bottles. A bottle of Grey Goose, a bottle of Dom Perignon, a bottle of Hennessy. Your waitress brings them to your table with mixers (tonic, coke, Red Bull, juices), ice, and garnishes. You pour your own drinks or she does it for you.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Every table comes with a <strong>minimum spend</strong> — the minimum amount you must spend on drinks at your table. At London&apos;s Mayfair clubs, this starts from £1,000. Think of it as your drinks budget for the night, not a fee on top of your drinks.
          </p>
        </div>
      </section>

      {/* How Minimum Spend Works */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How Minimum Spend Works at London Nightclubs
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            This is the bit that confuses most people, so let&apos;s be clear: the minimum spend is not an entry fee. It&apos;s the minimum amount you spend on bottles at your table.
          </p>
          <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4 text-gold">Example: £1,000 Minimum Spend</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold">&#8226;</span>
                1 bottle of Grey Goose vodka: ~£350
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">&#8226;</span>
                1 bottle of Moët Champagne: ~£350
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">&#8226;</span>
                1 bottle of Hennessy: ~£350
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold">Total:</span>
                ~£1,050 — minimum spend met
              </li>
            </ul>
            <p className="text-text-muted text-sm mt-4">
              Mixers, ice, and garnishes are included in the bottle price. You don&apos;t pay extra for coke, tonic, or Red Bull.
            </p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            If your minimum spend is £1,000 and you order £1,200 worth of bottles, you pay £1,200. If you only order £800, you still pay £1,000. Your waitress will help you select bottles that hit your minimum without going significantly over.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What You Get with Bottle Service in London
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Always Included</h3>
              <ul className="space-y-3">
                {[
                  "A reserved table and seating area (yours all night)",
                  "Priority entry — you skip the general admission queue",
                  "A personal waitress assigned to your table",
                  "Your choice of premium spirits or champagne",
                  "All mixers: tonic, coke, lemonade, cranberry, Red Bull, juices",
                  "Ice and garnishes (lime, lemon, etc.)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Available on Request</h3>
              <ul className="space-y-3">
                {[
                  "Birthday cakes and custom messages",
                  "Sparklers and LED bottle presentations",
                  "Special occasion decorations",
                  "Specific table positions (stage-front, DJ booth, etc.)",
                  "Larger table configurations for big groups",
                  "Combined dinner and club packages (at select venues)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What to Wear — Mayfair Club Dress Code
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Every Mayfair club enforces a dress code and the door staff are genuinely selective. Having a table booking helps, but you can still be turned away if your outfit doesn&apos;t meet the standard. Here&apos;s the honest rundown:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Men</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><span className="text-green-500">&#10003;</span> Collared shirts (button-down, polo in some venues)</li>
                <li><span className="text-green-500">&#10003;</span> Smart trousers or dark, well-fitted jeans</li>
                <li><span className="text-green-500">&#10003;</span> Smart shoes or smart boots</li>
                <li><span className="text-green-500">&#10003;</span> Blazers or jackets (encouraged, not always required)</li>
                <li className="mt-3"><span className="text-red-500">&#10007;</span> Trainers, sneakers, or casual shoes</li>
                <li><span className="text-red-500">&#10007;</span> T-shirts or hoodies</li>
                <li><span className="text-red-500">&#10007;</span> Sportswear, tracksuits, or shorts</li>
                <li><span className="text-red-500">&#10007;</span> Ripped jeans or heavily distressed denim</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Women</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><span className="text-green-500">&#10003;</span> Cocktail dresses and evening dresses</li>
                <li><span className="text-green-500">&#10003;</span> Heels, smart boots, or elegant flats</li>
                <li><span className="text-green-500">&#10003;</span> Smart separates (blazer and trousers, etc.)</li>
                <li><span className="text-green-500">&#10003;</span> Dressy jumpsuits</li>
                <li className="mt-3"><span className="text-red-500">&#10007;</span> Casual trainers or flip-flops</li>
                <li><span className="text-red-500">&#10007;</span> Sportswear or gym clothes</li>
                <li><span className="text-red-500">&#10007;</span> Very casual daywear</li>
              </ul>
            </div>
          </div>
          <p className="text-text-muted text-sm mt-6">
            When in doubt, overdress. The door staff at Mayfair clubs would rather see someone
            too smart than too casual. Having a table booking gives you a better chance at the
            door but it&apos;s not a guaranteed pass if you&apos;re underdressed.
          </p>
        </div>
      </section>

      {/* Is It Worth It */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Is Bottle Service Worth It?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Honestly? It depends on what you value. If you work out the per-drink cost, bottle service is more expensive than buying rounds at the bar. But you&apos;re not just buying drinks — you&apos;re buying the whole experience.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            With bottle service you get: no queuing at the bar (which in busy Mayfair clubs can take 15-20 minutes per round), a guaranteed seat all night (try standing for five hours), priority entry (general admission queues can be an hour on Saturdays), and a private space for your group.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            For a group of 8 splitting a £1,000 minimum, that&apos;s £125 per person for an entire night of drinks, a table, and VIP treatment. You&apos;d easily spend £80-100 on individual drinks anyway — and you&apos;d be standing.
          </p>
          <p className="text-text-secondary leading-relaxed">
            For special occasions — birthdays, celebrations, client entertainment — bottle service
            is the clear choice. It turns a night out into an event.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Bottle Service FAQ — Every Question Answered
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

      {/* CTA */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Book Your First Table?
          </h2>
          <p className="text-text-muted mb-4">
            Browse our <Link href="/#clubs" className="text-gold hover:underline">club pages</Link> to find
            the right venue, or check out our <Link href="/best-clubs-bottle-service-london" className="text-gold hover:underline">best clubs guide</Link> for recommendations.
          </p>
          <p className="text-text-muted mb-8">
            When you&apos;re ready, tap the button below and we&apos;ll get your table sorted.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <RelatedGuides currentPath="/bottle-service-guide" />
      <WhatsAppCTA variant="sticky" />
    </>
  );
}
