import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clubs, getClubBySlug } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";

interface ClubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({
  params,
}: ClubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) return {};

  return {
    title: `${club.name} Table Prices & VIP Bottle Service | From £${club.pricing.floorTable.toLocaleString()}`,
    description: `Book a VIP table at ${club.name} in ${club.area}. Floor tables from £${club.pricing.floorTable.toLocaleString()}, VIP from £${club.pricing.vipTable.toLocaleString()}. ${club.musicPolicy}. Open ${club.openingNights.join(", ")}. Instant WhatsApp booking.`,
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

  const otherClubs = clubs.filter((c) => c.slug !== slug);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nightclubSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{club.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
            {club.area} &bull; {club.openingNights.join(", ")}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {club.name} Table Prices &amp; VIP Bottle Service
          </h1>
          <p className="text-text-muted text-lg italic mb-6">{club.tagline}</p>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {club.description}
          </p>
          <WhatsAppCTA clubName={club.name} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {club.name} Minimum Spend &amp; Table Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Floor Table</h3>
              <p className="text-3xl font-bold text-gold mb-2">
                From £{club.pricing.floorTable.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm">
                Minimum spend per table. Standard tables on the main floor with full table service.
              </p>
            </div>
            <div className="bg-bg-card border border-gold/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">VIP Table</h3>
              <p className="text-3xl font-bold text-gold mb-2">
                From £{club.pricing.vipTable.toLocaleString()}
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
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            What&apos;s Included with Your Table at {club.name}
          </h2>
          <ul className="space-y-3">
            {club.whatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
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
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What to Expect at {club.name}
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {club.longDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-gold">Known For</h3>
              <ul className="space-y-2">
                {club.knownFor.map((item, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-gold">&#8226;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-gold">Best For</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {club.bestFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {club.name} — Essential Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Your Table at {club.name}
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your date and group size. We&apos;ll confirm
            your table directly with {club.name}, usually within minutes.
          </p>
          <WhatsAppCTA clubName={club.name} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {club.name} — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {club.faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Clubs */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">
            Other Clubs You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherClubs.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                href={`/clubs/${c.slug}`}
                className="bg-bg-card border border-border rounded-lg p-4 hover:border-gold/30 transition-colors group"
              >
                <h3 className="font-semibold group-hover:text-gold transition-colors">
                  {c.name}
                </h3>
                <p className="text-gold text-sm mt-1">
                  From £{c.pricing.floorTable.toLocaleString()}
                </p>
                <p className="text-text-muted text-xs mt-1">
                  {c.openingNights.join(", ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <WhatsAppCTA variant="sticky" clubName={club.name} />
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
    <div className="bg-bg-card border border-border rounded-lg p-5">
      <h3 className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{content}</p>
    </div>
  );
}
