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

export function RelatedGuides({ currentPath }: { currentPath: string }) {
  const guides = allGuides.filter((g) => g.href !== currentPath);

  return (
    <section className="py-12 px-4 border-t border-border bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Related Guides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {guides.slice(0, 4).map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="bg-bg-card border border-border rounded-lg p-3 hover:border-gold/30 transition-colors group"
            >
              <p className="font-semibold text-sm group-hover:text-gold transition-colors">{g.label}</p>
              <p className="text-text-muted text-xs mt-1">{g.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
