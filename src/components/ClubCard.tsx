import Link from "next/link";
import Image from "next/image";
import type { Club } from "@/data/clubs";
import { getClubImages } from "@/data/images";

interface ClubCardProps {
  club: Club;
  index?: number;
  total?: number;
}

/*
 * Not a card — a numbered programme entry. The photo is a tipped-in
 * plate: a 1px keyline mount with an offset brass frame behind it,
 * followed by an italic serif name and a wine-list price ledger.
 */
export function ClubCard({ club, index, total }: ClubCardProps) {
  const images = getClubImages(club.slug);

  return (
    <Link href={`/clubs/${club.slug}`} className="block group">
      {/* Index line */}
      {index !== undefined && (
        <div className="flex items-baseline justify-between mb-3 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-text-muted">
          <span>
            {String(index + 1).padStart(2, "0")}
            {total ? ` / ${String(total).padStart(2, "0")}` : ""}
          </span>
          <span>{club.area}</span>
        </div>
      )}

      {/* Mounted plate */}
      <div className="relative">
        <div
          className="absolute inset-0 translate-x-2 translate-y-2 border border-gold-dark/40 group-hover:border-gold-dark transition-colors duration-300"
          aria-hidden="true"
        />
        <div className="relative border border-border-light group-hover:border-gold-dark transition-colors duration-300 bg-bg-primary p-2.5">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src={images.card}
              alt={images.alt}
              fill
              className="object-cover img-grade group-hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Entry text */}
      <div className="pt-5">
        <h3 className="font-display text-2xl font-medium italic text-text-primary group-hover:text-gold-light transition-colors duration-200">
          {club.name}
        </h3>
        <p className="font-display italic font-light text-sm text-text-muted mt-1 mb-4">
          {club.tagline}
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-2">
          {club.description}
        </p>

        {/* Price ledger */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-baseline text-[0.8125rem]">
            <span className="text-text-secondary">Floor table</span>
            <span className="dotted-leader" aria-hidden="true" />
            <span className="price">
              from <span className="price-sign">&pound;</span>
              {club.pricing.floorTable.toLocaleString()}
            </span>
          </div>
          <div className="flex items-baseline text-[0.8125rem]">
            <span className="text-text-secondary">VIP table</span>
            <span className="dotted-leader" aria-hidden="true" />
            <span className="price">
              from <span className="price-sign">&pound;</span>
              {club.pricing.vipTable.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Metadata line */}
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mb-4">
          {club.musicPolicy.split(",")[0]}
          <span className="text-border-light mx-2">&mdash;</span>
          {club.area}
          <span className="text-border-light mx-2">&mdash;</span>
          {club.openingNights.join(", ")}
        </p>

        <span className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors">
          View table prices &amp; details
          <span className="inline-block w-6 group-hover:w-9 transition-all duration-300 border-t border-current translate-y-[1px]" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
