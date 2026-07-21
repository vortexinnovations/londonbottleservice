import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { clubs, allClubs, getClubBySlug, isClosedClub } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HeroImage } from "@/components/HeroImage";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { getClubImages } from "@/data/images";

interface ClubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allClubs.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({
  params,
}: ClubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) return {};

  const closed = isClosedClub(slug);
  const title = closed
    ? `${club.name} — Permanently Closed | London Bottle Service`
    : `${club.name} Table Prices & VIP Bottle Service | From £${club.pricing.floorTable.toLocaleString()}`;
  const description = closed
    ? `${club.name} has permanently closed. Find similar clubs and book VIP tables at London's best nightclubs. Alternatives available via WhatsApp.`
    : `Book a VIP table at ${club.name} in ${club.area}. Floor tables from £${club.pricing.floorTable.toLocaleString()}, VIP from £${club.pricing.vipTable.toLocaleString()}. ${club.musicPolicy}. Open ${club.openingNights.join(", ")}. Instant WhatsApp booking.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://londonbottleservice.com/clubs/${slug}`,
    },
    openGraph: {
      title: `${club.name} Table Prices & VIP Bottle Service`,
      description: `Book a VIP table at ${club.name}. Floor tables from £${club.pricing.floorTable.toLocaleString()}. ${club.tagline}.`,
      url: `https://londonbottleservice.com/clubs/${slug}`,
    },
  };
}

export default async function ClubPage({ params }: ClubPageProps) {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) notFound();

  const closed = isClosedClub(slug);
  const otherClubs = clubs.filter((c) => c.slug !== slug);
  const images = getClubImages(slug);

  const nightclubSchema = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: club.name,
    description: club.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: club.address.split(",")[0],
      addressLocality: "London",
      addressCountry: "GB",
    },
    openingHoursSpecification: club.openingNights.map((night) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: night,
      opens: club.openingHours.split("–")[0].trim(),
      closes: club.openingHours.split("–")[1]?.trim() || "03:00",
    })),
    priceRange: `From £${club.pricing.floorTable.toLocaleString()}`,
    url: `https://londonbottleservice.com/clubs/${slug}`,
  };

  return (
    <>
      <FAQSchema faqs={club.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Clubs", url: "https://londonbottleservice.com/clubs" },
          { name: club.name },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nightclubSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">
            Home
          </Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary">{club.name}</span>
        </nav>
      </div>

      {/* Closed Banner */}
      {closed && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-6">
          <div className="bg-danger/10 border border-danger/40 p-6">
            <h2 className="text-danger font-display text-lg font-medium mb-2">
              {club.name} Has Permanently Closed
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {club.name} is no longer open. This page is maintained for informational purposes.
              Looking for a similar experience? Check out our open venues below or message us on
              WhatsApp and we&apos;ll recommend the perfect alternative.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="btn-secondary">
                Browse Open Clubs &rarr;
              </Link>
              <WhatsAppCTA />
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <HeroImage
        src={images.hero}
        alt={images.alt}
        height="h-[50vh] min-h-[400px]"
        overlay="strong"
        caption={`Fig. — ${club.name}, ${club.area}`}
      >
        <p className="eyebrow !text-gold [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-4 animate-fade-up">
          {club.area} {club.openingNights.length > 0 && <>&mdash; {club.openingNights.join(", ")}</>}
        </p>
        <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-4 animate-fade-up-1">
          {club.name}{" "}Table Prices &amp; VIP Bottle Service
        </h1>
        <p className="text-gold-light/90 text-lg font-display italic font-light [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-6 animate-fade-up-2">{club.tagline}</p>
        <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl animate-fade-up-2">
          {club.description}
        </p>
        {!closed && (
          <div className="animate-fade-up-3">
            <WhatsAppCTA clubName={club.name} />
          </div>
        )}
      </HeroImage>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            {club.name}{" "}Minimum Spend &amp; Table Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card border border-border p-6">
              <h3 className="font-display text-lg font-medium mb-2">Floor Table</h3>
              <p className="price text-2xl md:text-3xl mb-2">
                From <span className="price-sign">&pound;</span>{club.pricing.floorTable.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm">
                Minimum spend per table. Standard tables on the main floor with full table service.
              </p>
            </div>
            <div className="bg-bg-card border border-gold/30 p-6">
              <h3 className="font-display text-lg font-medium mb-2">VIP Table</h3>
              <p className="price text-2xl md:text-3xl mb-2">
                From <span className="price-sign">&pound;</span>{club.pricing.vipTable.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm">
                Minimum spend per table. Premium positions with the best views and enhanced service.
              </p>
            </div>
          </div>
          <p className="text-text-muted text-sm">
            Prices are starting minimums and vary by night of the week, group size, and
            special events. The minimum spend is not an entry fee — it&apos;s the amount you
            spend on drinks (premium spirits, champagne, or both) at your table.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">The service</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            What&apos;s Included with Your Table at {club.name}
          </h2>
          <ul className="space-y-3">
            {club.whatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">The experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            What to Expect at {club.name}
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {club.longDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border p-6">
              <p className="eyebrow mb-4">Known For</p>
              <ul className="space-y-2">
                {club.knownFor.map((item, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-gold">&#8226;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-card border border-border p-6">
              <p className="eyebrow mb-4">Best For</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {club.bestFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {images.extra.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow mb-4">The room</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">Inside {club.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.extra.map((src, i) => (
                <div key={i} className="relative aspect-[3/2] overflow-hidden group">
                  <Image
                    src={src}
                    alt={`${club.name} interior and VIP area ${i + 1}`}
                    fill
                    className="object-cover img-grade group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Details Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Particulars</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            {club.name}{" "}— Essential Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
            <DetailCard title="Music Policy" content={club.musicPolicy} />
            <DetailCard title="Dress Code" content={club.dressCode} />
            <DetailCard title="Opening Nights" content={club.openingNights.join(", ")} />
            <DetailCard title="Opening Hours" content={club.openingHours} />
            <DetailCard title="Location" content={`${club.address} (${club.area})`} />
            <DetailCard title="Atmosphere" content={club.atmosphere} />
            <DetailCard title="Capacity" content={club.capacity} />
          </div>
        </div>
      </section>

      {/* CTA */}
      {!closed && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Reservations</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">
              Book Your Table at {club.name}
            </h2>
            <p className="text-text-muted mb-6">
              Message us on WhatsApp with your date and group size. We&apos;ll confirm
              your table directly with {club.name}, usually within minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppCTA clubName={club.name} />
              {club.bookingSlug && (
                <Link href={`/${club.bookingSlug}`} className="btn-secondary">
                  View Booking Details &rarr;
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            {club.name}{" "}— Frequently Asked Questions
          </h2>
          <div className="border-t border-border">
            {club.faqs.map((faq, i) => (
              <div key={i} className="py-6 border-b border-border">
                <h3 className="font-display text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-text-muted text-[0.9375rem] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Clubs */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Further reading</p>
          <h2 className="font-display text-2xl md:text-3xl font-normal mb-6">
            Other Clubs You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherClubs.slice(0, 6).map((c) => {
              const cImages = getClubImages(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/clubs/${c.slug}`}
                  className="block hover:border-gold-dark border border-border bg-bg-card transition-colors group"
                >
                  <div className="border-b border-border-light p-2 bg-bg-primary">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={cImages.card}
                        alt={cImages.alt}
                        fill
                        className="object-cover img-grade group-hover:scale-[1.02] transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display italic text-[0.9375rem] group-hover:text-gold-light transition-colors">
                      {c.name}
                    </h3>
                    <p className="price text-sm mt-1">
                      From <span className="price-sign">&pound;</span>{c.pricing.floorTable.toLocaleString()}
                    </p>
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mt-2">
                      {c.openingNights.join(" — ")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {!closed && <WhatsAppCTA variant="sticky" clubName={club.name} />}
    </>
  );
}

function DetailCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="py-5 border-b border-border">
      <p className="eyebrow mb-2">{title}</p>
      <p className="text-text-secondary text-sm leading-relaxed">{content}</p>
    </div>
  );
}
