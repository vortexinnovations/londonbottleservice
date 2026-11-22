import Image from "next/image";

interface HeroImageProps {
  /** Leave out for a page with no photograph of its own: the hero is then plain ink. */
  src?: string;
  alt: string;
  priority?: boolean;
  height?: string;
  overlay?: "strong" | "medium" | "light";
  caption?: string;
  children?: React.ReactNode;
}

/*
 * Full-bleed photography under the house grade, burned into the ink
 * with a warm gradient scrim and a soft vignette. An optional mono
 * figure caption names the venue — photos as documentary evidence.
 */
export function HeroImage({
  src,
  alt,
  priority = true,
  height = "h-[50vh] min-h-[400px]",
  overlay = "strong",
  caption,
  children,
}: HeroImageProps) {
  const overlayClass = {
    strong: "bg-gradient-to-t from-bg-primary via-bg-primary/72 to-bg-primary/38",
    medium: "bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/28",
    light: "bg-gradient-to-t from-bg-primary/85 via-bg-primary/42 to-bg-primary/18",
  }[overlay];

  return (
    <section className={`relative ${height} flex items-end${src ? "" : " bg-bg-secondary"}`}>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover img-grade"
          priority={priority}
          sizes="100vw"
        />
      )}
      {src && <div className={`absolute inset-0 ${overlayClass}`} />}
      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(15,12,8,0.5) 100%)",
        }}
        aria-hidden="true"
      />
      {children && (
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-10 md:pb-16">
          {children}
        </div>
      )}
      {caption && (
        <p className="absolute bottom-4 right-4 sm:right-6 z-10 fig-caption hidden md:block">
          {caption}
        </p>
      )}
    </section>
  );
}
