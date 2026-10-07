/*
 * A minimum-spend figure, or a plain "On request" when the venue has no
 * confirmed price (see ClubPricing in src/data/clubs.ts). The prefix
 * ("From ", "Floor ") is only shown with a real figure.
 */
export function Price({
  value,
  prefix = "",
  onRequest = "On request",
}: {
  value: number | null;
  prefix?: string;
  onRequest?: string;
}) {
  if (value === null) return <>{onRequest}</>;
  return (
    <>
      {prefix}
      <span className="price-sign">&pound;</span>
      {value.toLocaleString()}
    </>
  );
}
