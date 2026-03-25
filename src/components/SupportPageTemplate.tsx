import Link from "next/link";
import { getSupportPageBySlug, getSupportPagesForClub } from "@/data/supportPages";
import { getOpenClubBySlug, clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

export function SupportPageTemplate({ slug }: { slug: string }) {
  const data = getSupportPageBySlug(slug);
  if (!data) return null;

  const club = getOpenClubBySlug(data.clubSlug);
  if (!club) return null;

  const siblingPages = getSupportPagesForClub(data.clubSlug).filter(
    (p) => p.slug !== slug
  );

  const similarClubs = clubs
    .filter((c) => c.slug !== club.slug)
    .slice(0, 4);

  return (
    <>
      <FAQSchema faqs={data.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Book a Table", url: "https://londonbottleservice.com/book-a-table" },
          { name: `${club.name}`, url: `https://londonbottleservice.com/${club.bookingSlug}` },
          { name: data.h1 },
        ]}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/book-a-table" className="hover:text-gold transition-colors">Book a Table</Link>
          <span className="mx-2">/</span>
          {club.bookingSlug && (
            <>
              <Link href={`/${club.bookingSlug}`} className="hover:text-gold transition-colors">{club.name}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-text-secondary">{data.type.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
            {club.area} &bull; Tables from &pound;{club.pricing.floorTable.toLocaleString()}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.h1}</h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl">
            {data.intro}
          </p>
          <WhatsAppCTA clubName={club.name} />
        </div>
      </section>

      {/* Content Sections */}
      {data.sections.map((section, i) => (
        <section
          key={i}
          className={`py-10 px-4 border-t border-border ${i % 2 === 0 ? "bg-bg-secondary" : ""}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.heading}</h2>
            <div className="text-text-secondary leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        </section>
      ))}

      {/* Mid-page CTA */}
      <WhatsAppCTA
        variant="banner"
        clubName={club.name}
        urgencyMessage={`Ready to book your table at ${club.name}? Message us now`}
      />

      {/* Trust Badges */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages for This Club */}
      <section className="py-12 px-4 border-b border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">
            More About {club.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {club.bookingSlug && (
              <Link
                href={`/${club.bookingSlug}`}
                className="bg-bg-card border border-gold/30 rounded-lg p-4 hover:border-gold/50 transition-colors group"
              >
                <p className="font-semibold group-hover:text-gold transition-colors text-sm">
                  Book a Table at {club.name} &rarr;
                </p>
                <p className="text-text-muted text-xs mt-1">Main booking page</p>
              </Link>
            )}
            {siblingPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="bg-bg-card border border-border rounded-lg p-4 hover:border-gold/30 transition-colors group"
              >
                <p className="font-semibold group-hover:text-gold transition-colors text-sm">
                  {page.h1.replace(club.name, "").replace(" — ", "").replace(" at ", "").trim()} &rarr;
                </p>
                <p className="text-text-muted text-xs mt-1">{club.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/clubs/${club.slug}`} className="text-sm text-text-secondary hover:text-gold transition-colors">
              {club.name} Full Guide &rarr;
            </Link>
            <Link href="/book-a-table" className="text-sm text-text-secondary hover:text-gold transition-colors">
              Book at Any Club &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Similar Clubs */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Popular Clubs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarClubs.map((c) => (
              <Link
                key={c.slug}
                href={c.bookingSlug ? `/${c.bookingSlug}` : `/clubs/${c.slug}`}
                className="bg-bg-card border border-border rounded-lg p-4 hover:border-gold/30 transition-colors group"
              >
                <h3 className="font-semibold text-sm group-hover:text-gold transition-colors">{c.name}</h3>
                <p className="text-gold text-xs mt-1">From &pound;{c.pricing.floorTable.toLocaleString()}</p>
                <p className="text-text-muted text-xs mt-1">{c.area}</p>
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
