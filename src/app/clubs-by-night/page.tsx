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
      "Several Mayfair clubs operate on weekdays. Tuesday: Cuckoo Club. Wednesday: Cirque Le Soir, Tape London, Cuckoo Club. Thursday: Tape London, Cuckoo Club, Maddox, Tabu London, Selene London. Weekday minimum spends are often lower than weekends.",
  },
  {
    question: "What is the best night to go clubbing in London?",
    answer:
      "Saturday is the biggest night with all clubs open and the strongest crowds. Friday is nearly as busy with a more local crowd. Thursday is excellent value — strong atmosphere but lower minimum spends. Each night has its own character.",
  },
  {
    question: "Are London clubs open on Monday?",
    answer:
      "Most Mayfair clubs are closed on Monday. The London club scene runs Tuesday through Saturday, with the core nights being Thursday through Saturday. If you're in London on a Monday, your options are limited to bars and late-night restaurants.",
  },
  {
    question: "Which clubs are open on Sunday in London?",
    answer:
      "The Mayfair clubs we work with are not open on Sundays. Sunday nightlife in London exists but tends to be in different areas (Shoreditch, Vauxhall) and different types of venues. For Mayfair bottle service, plan for Tuesday through Saturday.",
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
    status: "closed",
    description:
      "Monday is the one night where Mayfair genuinely sleeps. None of the major clubs operate on Mondays. If you're in London on a Monday and need a night out, you're looking at cocktail bars and late-night restaurants rather than proper nightclubs.",
    clubs: [],
    vibe: "N/A",
    tip: "Save your energy for later in the week. Monday in London is for recovery, not for clubbing.",
  },
  {
    night: "Tuesday",
    status: "limited",
    description:
      "Tuesday is the earliest start to the Mayfair club week. Only Cuckoo Club opens its doors, but it draws a loyal crowd who prefer a quieter start to their week of going out. The atmosphere is more intimate and the dress code is slightly more relaxed.",
    clubs: ["cuckoo-club"],
    vibe: "Intimate and relaxed. Early-week regulars and a younger crowd who don't wait for the weekend.",
    tip: "Tuesday at Cuckoo is excellent value — lower minimum spends and a more relaxed door. Great for a first time if you're testing the waters with bottle service.",
  },
  {
    night: "Wednesday",
    status: "active",
    description:
      "Wednesday is when the London club week really starts. Several venues open, headlined by Cirque Le Soir which runs one of its strongest nights midweek. Tape London also opens, offering that members' club exclusivity. Scotch of St James and Lio Club London round out your options. If you can't wait for the weekend and want a proper night, Wednesday delivers.",
    clubs: ["cirque-le-soir", "tape-london", "cuckoo-club", "scotch-of-st-james", "the-box"],
    vibe: "Building energy. The crowd is keen to be out and the atmosphere benefits from it. Less tourist-heavy than weekends.",
    tip: "Wednesday at Cirque Le Soir is arguably their best-value night. You get the full show experience with slightly lower minimum spends than Saturday.",
  },
  {
    night: "Thursday",
    status: "active",
    description:
      "Thursday is the sweet spot for many London regulars — strong atmosphere, real buzz, but without Saturday's premium pricing. A wide range of clubs are open, giving you genuine choice. This is the night when Mayfair professionals come out, international visitors start their long weekends, and the energy is unmistakably 'big night' without the chaos.",
    clubs: [
      "tape-london",
      "cuckoo-club",
      "maddox",
      "tabu-london",
      "selene-london",
      "scotch-of-st-james",
      "dear-darling",
      "the-box",
      "luna-club-london",
    ],
    vibe: "Buzzing. The Mayfair crowd is out in force and the energy is high without being overwhelming.",
    tip: "Thursday is the insider's night. The crowds are strong, the atmosphere is excellent, and minimum spends are typically 10-20% lower than Saturday. If you want the Mayfair experience without the Saturday premium, this is your night.",
  },
  {
    night: "Friday",
    status: "peak",
    description:
      "Friday brings out the weekend warriors. Almost every club is open and the streets of Mayfair buzz with groups heading from dinner to the clubs. The crowd skews more local on Fridays — Londoners who've finished the work week and are ready to go. It's the best night if you want a strong atmosphere without Saturday's international tourist influx.",
    clubs: [
      "cirque-le-soir",
      "tape-london",
      "cuckoo-club",
      "maddox",
      "tabu-london",
      "selene-london",
      "london-reign",
      "funky-buddha",
      "scotch-of-st-james",
      "dear-darling",
      "beat-london",
      "the-box",
      "luna-club-london",
    ],
    vibe: "High energy, more local than Saturday. The end-of-week buzz is real and the clubs feed off it.",
    tip: "Friday at Maddox is a strong choice if you want to combine dinner and clubbing. Book an early dinner slot and transition seamlessly into the club.",
  },
  {
    night: "Saturday",
    status: "peak",
    description:
      "Saturday is the main event. Every club is open, every venue is at capacity, and the energy across London is at its peak. This is the night with the highest minimum spends but also the strongest atmosphere, biggest names on the DJ line-ups, and the most memorable experiences. If you're only going out once, make it Saturday.",
    clubs: [
      "cirque-le-soir",
      "tape-london",
      "cuckoo-club",
      "maddox",
      "tabu-london",
      "selene-london",
      "london-reign",
      "funky-buddha",
      "scotch-of-st-james",
      "dear-darling",
      "beat-london",
      "the-box",
      "luna-club-london",
    ],
    vibe: "Peak Mayfair. International crowd, maximum energy, highest production. This is the night London nightlife is famous for.",
    tip: "Book early for Saturday — premium tables sell out weeks in advance, especially at Cirque Le Soir and Tape London. The earlier you book, the better your table position.",
  },
  {
    night: "Sunday",
    status: "closed",
    description:
      "Like Monday, Sunday sees Mayfair's clubs closed. The area transitions to brunch and afternoon drinking rather than late-night clubbing. There are daytime events and rooftop bars, but for bottle service and proper nightclubs, Sunday is off the menu.",
    clubs: [],
    vibe: "N/A",
    tip: "If you're looking for Sunday nightlife in London, the energy moves to Shoreditch and East London. For Mayfair bottle service, plan for another night.",
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
