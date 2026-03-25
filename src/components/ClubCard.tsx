import Link from "next/link";
import type { Club } from "@/data/clubs";

interface ClubCardProps {
  club: Club;
}

export function ClubCard({ club }: ClubCardProps) {
  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="block bg-bg-card border border-border rounded-xl p-6 hover:border-gold/30 hover:bg-bg-card-hover transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-text-primary group-hover:text-gold transition-colors">
          {club.name}
        </h3>
        <span className="text-gold font-semibold text-sm whitespace-nowrap ml-4">
          From £{club.pricing.floorTable.toLocaleString()}
        </span>
      </div>
      <p className="text-text-muted text-sm mb-4 italic">{club.tagline}</p>
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
        {club.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs px-2.5 py-1 bg-bg-primary rounded-full text-text-muted border border-border">
          {club.musicPolicy.split(",")[0]}
        </span>
        <span className="text-xs px-2.5 py-1 bg-bg-primary rounded-full text-text-muted border border-border">
          {club.area}
        </span>
        <span className="text-xs px-2.5 py-1 bg-bg-primary rounded-full text-text-muted border border-border">
          {club.openingNights.join(", ")}
        </span>
      </div>
      <span className="text-gold text-sm font-medium group-hover:underline">
        View table prices &amp; details &rarr;
      </span>
    </Link>
  );
}
