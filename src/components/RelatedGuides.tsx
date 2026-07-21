import Link from "next/link";

const allGuides = [
  { href: "/best-clubs-bottle-service-london", label: "Best Clubs Ranked", desc: "Honest reviews of every club" },
  { href: "/club-table-prices-london", label: "Table Prices", desc: "Full price comparison" },
  { href: "/best-vip-tables-in-london", label: "Best VIP Tables", desc: "Premium positions ranked" },
  { href: "/guestlist-vs-table-booking-london", label: "Guestlist vs Table", desc: "Which is right for you?" },
  { href: "/mayfair-table-booking-guide", label: "Mayfair Guide", desc: "Area booking guide" },
  { href: "/bottle-service-guide", label: "What is Bottle Service?", desc: "Complete explainer" },
  { href: "/clubs-by-night", label: "Clubs by Night", desc: "What's open when" },
  { href: "/book-a-table", label: "Book a Table", desc: "All clubs, instant booking" },
];

/*
 * Further reading as an index of hairline-ruled rows — the dossier's
 * table of contents, not a grid of boxes.
 */
export function RelatedGuides({ currentPath }: { currentPath: string }) {
  const guides = allGuides.filter((g) => g.href !== currentPath);

  return (
    <section className="py-14 px-4 border-t border-border bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="eyebrow mb-6">Related Guides</h2>
        <div className="border-t border-border">
          {guides.slice(0, 4).map((g, i) => (
            <Link
              key={g.href}
              href={g.href}
              className="flex items-baseline gap-4 py-4 border-b border-border group transition-colors hover:bg-bg-card/40"
            >
              <span className="font-mono text-[0.625rem] text-gold-dark w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-medium text-text-primary group-hover:text-gold-light transition-colors">
                {g.label}
              </span>
              <span className="dotted-leader hidden sm:block" aria-hidden="true" />
              <span className="text-text-muted text-xs shrink-0 hidden sm:block">{g.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
