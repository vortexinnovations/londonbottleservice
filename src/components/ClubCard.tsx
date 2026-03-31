import Link from "next/link";
import Image from "next/image";
import type { Club } from "@/data/clubs";
import { getClubImages } from "@/data/images";

interface ClubCardProps {
  club: Club;
}

export function ClubCard({ club }: ClubCardProps) {
  const images = getClubImages(club.slug);

  return (
    <Link
      href={`/clubs/${club.slug}`}
      className="block bg-bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 hover:bg-bg-card-hover transition-all group"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={images.card}
          alt={images.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors drop-shadow-lg">
            {club.name}
          </h3>
          <span className="text-gold font-semibold text-sm whitespace-nowrap drop-shadow-lg">
            From £{club.pricing.floorTable.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-text-muted text-sm mb-3 italic">{club.tagline}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
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
      </div>
    </Link>
  );
}
