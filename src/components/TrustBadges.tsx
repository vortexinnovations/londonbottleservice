/*
 * A specification strip, not icon bubbles: four hairline-divided cells,
 * each a large serif figure over a mono label — trust claims presented
 * like an audited annual report.
 */
const badges = [
  { figure: "Direct", label: "Venue Relationships", detail: "We work directly with every club" },
  { figure: "Instant", label: "Confirmation", detail: "WhatsApp response within minutes" },
  { figure: "No", label: "Hidden Fees", detail: "Transparent pricing, always" },
  { figure: "500+", label: "Tables Booked", detail: "Trusted by London nightlife regulars" },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border divide-x divide-border">
      {badges.map((badge, i) => (
        <div
          key={badge.label}
          className={`px-4 py-6 md:px-6 md:py-7 ${i >= 2 ? "border-t border-border md:border-t-0" : ""}`}
        >
          <p className="font-display text-2xl md:text-[1.75rem] font-light text-gold-light leading-none mb-2.5">
            {badge.figure}
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-text-secondary mb-1.5">
            {badge.label}
          </p>
          <p className="text-[0.6875rem] leading-relaxed text-text-muted">
            {badge.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
