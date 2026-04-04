import { Metadata } from "next";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { RelatedGuides } from "@/components/RelatedGuides";
import { HeroImage } from "@/components/HeroImage";
import { pageImages } from "@/data/images";

export const metadata: Metadata = {
  title:
    "London Clubs by Night of the Week | Which Mayfair Clubs Are Open Tonight?",
  description:
    "Find out which London nightclubs are open each night of the week. Monday to Saturday guide to Mayfair's best clubs, including opening nights, vibes, and bottle service prices.",
  alternates: {
    canonical: "https://londonbottleservice.com/clubs-by-night",
  },
  openGraph: {
    title: "London Clubs by Night of the Week",
    description:
      "Which Mayfair clubs are open tonight? Your night-by-night guide to London's best nightclubs.",
    url: "https://londonbottleservice.com/clubs-by-night",
  },
};

const nightFaqs = [
  {
    question: "Which London clubs are open on weekdays?",
    answer:
      "Several Mayfair clubs operate on weekdays. Monday: Cirque Le Soir. Tuesday: Tape London, Reign London. Wednesday: Cirque Le Soir, Tabu, Cuckoo Club, The Box, Selene, Maison Close. Thursday is the biggest weekday with eleven clubs open. Weekday minimum spends are often lower than weekends.",
  },
  {
    question: "What is the best night to go clubbing in London?",
    answer:
      "Saturday is the biggest night with all fourteen clubs open and the strongest crowds. Friday is nearly as busy with a more local crowd. Thursday is excellent value — eleven clubs open, strong atmosphere, but lower minimum spends. Each night has its own character.",
  },
  {
    question: "Are London clubs open on Monday?",
    answer:
      "Cirque Le Soir opens on Mondays, making it the only Mayfair club option at the start of the week. It's actually a great night to experience the circus performances in a more intimate setting with often lower minimum spends.",
  },
  {
    question: "Which clubs are open on Sunday in London?",
    answer:
      "Two of the clubs we work with are open on Sundays: Tape London and Dear Darling. Both offer a more relaxed atmosphere to close out the weekend. For the full range of Mayfair bottle service options, Thursday through Saturday gives you the most choice.",
  },
];

interface NightData {
  night: string;
  status: "closed" | "limited" | "active" | "peak";
  description: string;
  clubs: string[];
  vibe: string;
  tip: string;
}

const nights: NightData[] = [
  {
    night: "Monday",
    status: "limited",
    description:
      "Monday is the quietest night in Mayfair, but it's not completely dead. Cirque Le Soir opens its doors for those who want to start the week with a bang — and if you're going to go out on a Monday, a circus-themed nightclub is a strong way to do it. Expect a more intimate crowd and often more flexible pricing.",
    clubs: ["cirque-le-soir"],
    vibe: "Intimate and exclusive. A small, dedicated crowd who don't wait for the weekend.",
    tip: "Monday at Cirque Le Soir is the most intimate experience they offer. Smaller crowd, more performer attention, and often the best value of the week.",
  },
  {
    night: "Tuesday",
    status: "limited",
    description:
      "Tuesday kicks off the week with two strong options. Tape London brings its members' club exclusivity, while Reign London opens with its Las Vegas-style showclub experience. It's an early-week option for those who can't wait for the weekend — and minimum spends tend to be more flexible.",
    clubs: ["tape-london", "london-reign"],
    vibe: "Exclusive and relaxed. Early-week regulars and a curated crowd who prefer starting the party early.",
    tip: "Tuesday at Tape London is excellent value — you get the full members' club experience with a more relaxed door and often lower minimums than weekends.",
  },
  {
    night: "Wednesday",
    status: "active",
    description:
      "Wednesday is when the London club week really starts. Six venues open their doors, headlined by Cirque Le Soir which runs one of its strongest nights midweek. Tabu brings the hip-hop, Cuckoo Club offers two floors of variety, The Box delivers its provocative performances, Selene adds its multi-room experience, and Maison Close brings dedicated house music. Genuine choice on a Wednesday.",
    clubs: ["cirque-le-soir", "tabu-london", "cuckoo-club", "the-box", "selene-london", "maison-close"],
    vibe: "Building energy. The crowd is keen to be out and the atmosphere benefits from it. Less tourist-heavy than weekends.",
    tip: "Wednesday at Cirque Le Soir is arguably their best-value night. You get the full show experience with slightly lower minimum spends than Saturday.",
  },
  {
    night: "Thursday",
    status: "active",
    description:
      "Thursday is the sweet spot for many London regulars — strong atmosphere, real buzz, but without Saturday's premium pricing. Eleven clubs are open, giving you genuine choice across every music genre and atmosphere. This is the night when Mayfair professionals come out, international visitors start their long weekends, and the energy is unmistakably 'big night' without the chaos.",
    clubs: [
      "london-reign",
      "tabu-london",
      "funky-buddha",
      "cuckoo-club",
      "dear-darling",
      "maddox",
      "the-box",
      "luna-club-london",
      "selene-london",
      "beat-london",
      "maison-close",
    ],
    vibe: "Buzzing. The Mayfair crowd is out in force and the energy is high without being overwhelming.",
    tip: "Thursday is the insider's night. The crowds are strong, the atmosphere is excellent, and minimum spends are typically 10-20% lower than Saturday. If you want the Mayfair experience without the Saturday premium, this is your night.",
  },
  {
    night: "Friday",
    status: "peak",
    description:
      "Friday brings out the weekend warriors. Fourteen clubs are open and the streets of Mayfair buzz with groups heading from dinner to the clubs. The crowd skews more local on Fridays — Londoners who've finished the work week and are ready to go. It's the best night if you want a strong atmosphere without Saturday's international tourist influx.",
    clubs: [
      "tape-london",
      "cirque-le-soir",
      "london-reign",
      "tabu-london",
      "funky-buddha",
      "cuckoo-club",
      "scotch-of-st-james",
      "dear-darling",
      "maddox",
      "the-box",
      "luna-club-london",
      "selene-london",
      "beat-london",
      "maison-close",
    ],
    vibe: "High energy, more local than Saturday. The end-of-week buzz is real and the clubs feed off it.",
    tip: "Friday at Maddox is a strong choice if you want to combine dinner and clubbing. Book an early dinner slot and transition seamlessly into the club.",
  },
  {
    night: "Saturday",
    status: "peak",
    description:
      "Saturday is the main event. All fourteen clubs are open, every venue is at capacity, and the energy across London is at its peak. This is the night with the highest minimum spends but also the strongest atmosphere, biggest names on the DJ line-ups, and the most memorable experiences. If you're only going out once, make it Saturday.",
    clubs: [
      "tape-london",
      "cirque-le-soir",
      "london-reign",
      "tabu-london",
      "funky-buddha",
      "cuckoo-club",
      "scotch-of-st-james",
      "dear-darling",
      "maddox",
      "the-box",
      "luna-club-london",
      "selene-london",
      "beat-london",
      "maison-close",
    ],
    vibe: "Peak Mayfair. International crowd, maximum energy, highest production. This is the night London nightlife is famous for.",
    tip: "Book early for Saturday — premium tables sell out weeks in advance, especially at Cirque Le Soir and Tape London. The earlier you book, the better your table position.",
  },
  {
    night: "Sunday",
    status: "limited",
    description:
      "Sunday offers a couple of options for those who aren't ready for the weekend to end. Tape London opens its doors with its intimate members' club atmosphere, and Dear Darling keeps the party going in Mayfair. It's a more relaxed vibe than the peak nights, perfect for extending a long weekend.",
    clubs: ["tape-london", "dear-darling"],
    vibe: "Wind-down energy. A smaller, loyal crowd who want one more night before the week starts.",
    tip: "Sunday at Dear Darling is a hidden gem — the crowd is relaxed, the atmosphere is stylish, and you get genuine Mayfair quality without the weekend intensity.",
  },
];

function getClubName(slug: string): string {
  return clubs.find((c) => c.slug === slug)?.name || slug;
}

export default function ClubsByNightPage() {
  return (
    <>
      <FAQSchema faqs={nightFaqs} />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Clubs by Night</span>
        </nav>
      </div>

      <HeroImage src={pageImages.clubsByNight.hero} alt={pageImages.clubsByNight.alt} height="h-[40vh] min-h-[300px]" overlay="strong">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          London Clubs by Night of the Week
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
          Not every club opens every night, and the vibe changes dramatically depending on when you go. This guide breaks down each night of the week so you know exactly which Mayfair clubs are open, what the atmosphere is like, and where your money goes furthest.
        </p>
      </HeroImage>

      {/* Quick Overview */}
      <section className="py-8 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Quick Overview</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {nights.map((n) => (
              <a
                key={n.night}
                href={`#${n.night.toLowerCase()}`}
                className="bg-bg-card border border-border rounded-lg p-3 text-center hover:border-gold/30 transition-colors"
              >
                <div className="font-semibold text-sm">{n.night.slice(0, 3)}</div>
                <div className="text-xs mt-1">
                  {n.status === "closed" && (
                    <span className="text-text-muted">Closed</span>
                  )}
                  {n.status === "limited" && (
                    <span className="text-yellow-500">{n.clubs.length} club</span>
                  )}
                  {n.status === "active" && (
                    <span className="text-green-500">{n.clubs.length} clubs</span>
                  )}
                  {n.status === "peak" && (
                    <span className="text-gold font-medium">{n.clubs.length} clubs</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Night by Night */}
      {nights.map((n) => (
        <section
          key={n.night}
          id={n.night.toLowerCase()}
          className="py-12 px-4 border-t border-border"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">{n.night}</h2>
              {n.status === "closed" && (
                <span className="text-xs px-2.5 py-1 bg-bg-card border border-border rounded-full text-text-muted">
                  Clubs Closed
                </span>
              )}
              {n.status === "limited" && (
                <span className="text-xs px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500">
                  Limited Options
                </span>
              )}
              {n.status === "active" && (
                <span className="text-xs px-2.5 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-500">
                  Good Night Out
                </span>
              )}
              {n.status === "peak" && (
                <span className="text-xs px-2.5 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                  Peak Night
                </span>
              )}
            </div>

            <p className="text-text-secondary leading-relaxed mb-6">
              {n.description}
            </p>

            {n.clubs.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">
                  Clubs Open on {n.night}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {n.clubs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/clubs/${slug}`}
                      className="bg-bg-card border border-border rounded-lg px-4 py-2 text-sm hover:border-gold/30 hover:text-gold transition-colors"
                    >
                      {getClubName(slug)}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {n.vibe !== "N/A" && (
              <div className="bg-bg-card border border-border rounded-lg p-4 mb-4">
                <span className="text-gold text-sm font-medium">Vibe:</span>
                <p className="text-text-secondary text-sm mt-1">{n.vibe}</p>
              </div>
            )}

            <div className="bg-bg-card border border-gold/20 rounded-lg p-4">
              <span className="text-gold text-sm font-medium">Insider Tip:</span>
              <p className="text-text-secondary text-sm mt-1">{n.tip}</p>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {nightFaqs.map((faq, i) => (
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
          <h2 className="text-2xl font-bold mb-4">Know Which Night You&apos;re Going?</h2>
          <p className="text-text-muted mb-8">
            Message us with your date and we&apos;ll tell you exactly which clubs are open and
            which tables are available. Takes two minutes on WhatsApp.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <RelatedGuides currentPath="/clubs-by-night" />
      <WhatsAppCTA variant="sticky" />
    </>
  );
}
