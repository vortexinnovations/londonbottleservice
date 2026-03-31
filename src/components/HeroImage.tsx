import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  height?: string;
  overlay?: "strong" | "medium" | "light";
  children?: React.ReactNode;
}

export function HeroImage({
  src,
  alt,
  priority = true,
  height = "h-[50vh] min-h-[400px]",
  overlay = "strong",
  children,
}: HeroImageProps) {
  const overlayClass = {
    strong: "bg-gradient-to-t from-black via-black/70 to-black/40",
    medium: "bg-gradient-to-t from-black via-black/60 to-black/30",
    light: "bg-gradient-to-t from-black/80 via-black/40 to-black/20",
  }[overlay];

  return (
    <section className={`relative ${height} flex items-end justify-center`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      {children && (
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-10 md:pb-16">
          {children}
        </div>
      )}
    </section>
  );
}
