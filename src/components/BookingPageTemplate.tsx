import Link from "next/link";
import Image from "next/image";
import { getBookingPageBySlug } from "@/data/bookingPages";
import { getOpenClubBySlug, clubs } from "@/data/clubs";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { getBlogPostBySlug } from "@/data/blog";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HeroImage } from "@/components/HeroImage";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";
import { getClubImages, getBlogImages } from "@/data/images";

export function BookingPageTemplate({ bookingSlug }: { bookingSlug: string }) {
  const data = getBookingPageBySlug(bookingSlug);
  if (!data) return null;

  const club = getOpenClubBySlug(data.clubSlug);
  if (!club) return null;

  const bookingMessage = encodeURIComponent(
    `Hi, I'd like to book a table at ${club.name}. Here are my details:\n\nDate:\nGroup size:\nOccasion:\nAny preferences:`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${bookingMessage}`;

  const nightclubSchema = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: club.name,
    description: data.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: club.address.split(",")[0],
      addressLocality: "London",
      addressCountry: "GB",
    },
    openingHoursSpecification: club.openingNights.map((night) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: night,
      opens: club.openingHours.split("–")[0]?.trim(),
      closes: club.openingHours.split("–")[1]?.trim() || "03:00",
    })),
    priceRange: `From £${club.pricing.floorTable.toLocaleString()}`,
    url: `https://londonbottleservice.com/${bookingSlug}`,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: whatsappUrl,
        actionPlatform: "http://schema.org/MobileWebPlatform",
      },
      result: {
        "@type": "Reservation",
        name: `Table Booking at ${club.name}`,
      },
    },
  };

  const relatedClubs = data.relatedBookingPages
    .map((slug) => {
      const bp = getBookingPageBySlug(slug);
      if (!bp) return null;
      const c = getOpenClubBySlug(bp.clubSlug);
      if (!c) return null;
      return { booking: bp, club: c };
    })
    .filter(Boolean) as { booking: typeof data; club: typeof club }[];

  const relatedBlogs = data.relatedBlogSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter(Boolean);

  const images = getClubImages(data.clubSlug);

  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={data.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Book a Table", url: "https://londonbottleservice.com/book-a-table" },
          { name: `${club.name} Table Booking` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nightclubSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">&mdash;</span>
          <Link href="/book-a-table" className="hover:text-text-secondary transition-colors">Book a Table</Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary">{club.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <HeroImage
        src={images.hero}
        alt={images.alt}
        height="h-[50vh] min-h-[400px]"
        overlay="strong"
        caption={`Fig. 01 — ${club.name}, ${club.area}`}
      >
        <p className="eyebrow !text-gold [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-4 animate-fade-up">
          London&apos;s dedicated VIP table concierge — direct venue relationships, instant confirmation
        </p>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-text-secondary [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-3 animate-fade-up-1">
          {club.area} &mdash; <span className="price">Tables from <span className="price-sign">&pound;</span>{club.pricing.floorTable.toLocaleString()}</span>
        </p>
        <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-4 animate-fade-up-1">{data.h1}</h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl animate-fade-up-2">
          {data.heroSubheading}
        </p>
        <div className="animate-fade-up-3">
          <WhatsAppCTA
            clubName={club.name}
            urgencyMessage="Tables fill fast on weekends — book now to secure your spot"
          />
        </div>
      </HeroImage>

      {/* Pricing */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            {club.name}{" "}Table Prices &amp; Minimum Spend
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {data.pricingIntro}
          </p>
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
            <div className="bg-bg-card border border-border p-6">
              <p className="eyebrow mb-2">Most requested</p>
              <h3 className="font-display text-lg font-medium mb-2">VIP Table</h3>
              <p className="price text-2xl md:text-3xl mb-2">
                From <span className="price-sign">&pound;</span>{club.pricing.vipTable.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm">
                Premium positions with the best views and enhanced service. Recommended for special occasions.
              </p>
            </div>
          </div>
          <div className="border-t border-border">
            <div className="py-5 border-b border-border">
              <p className="eyebrow mb-2">VIP Upgrade</p>
              <p className="text-text-secondary text-sm">{data.vipUpsellPitch}</p>
            </div>
            <div className="py-5 border-b border-border">
              <p className="eyebrow mb-2">Midweek Advantage</p>
              <p className="text-text-secondary text-sm">{data.weekdayDeal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <WhatsAppCTA
        variant="banner"
        clubName={club.name}
        urgencyMessage={`Weekend tables at ${club.name} book out fast — message us now to check availability`}
      />

      {/* Trust Badges */}
      <section className="py-10 px-4 sm:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">The process</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            How to Book Your Table at {club.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "Message Us on WhatsApp",
                desc: `Tap the booking button and send us your date, group size, and any preferences. We respond within minutes.`,
              },
              {
                step: "2",
                title: "We Confirm with the Venue",
                desc: `We contact ${club.name} directly to secure your table in the best available position for your group.`,
              },
              {
                step: "3",
                title: "Receive Your Confirmation",
                desc: "You'll get full confirmation with your table details, dress code reminders, and arrival instructions.",
              },
              {
                step: "4",
                title: "Arrive & Enjoy",
                desc: `Give your name at the door, skip the queue, and your table and personal waitress are ready. It's that simple.`,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="font-display text-3xl font-light text-gold-dark leading-none flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">The table</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            What&apos;s Included with Your Table at {club.name}
          </h2>
          <ul className="space-y-3 mb-6">
            {club.whatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg aria-hidden="true" className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Arrival Guide */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Arrival notes</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            Before You Arrive at {club.name}
          </h2>
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">
            {data.arrivalGuide}
          </p>
        </div>
      </section>

      {/* Guestlist vs Table Booking */}
      {data.guestlistComparison && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border bg-bg-secondary">
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow mb-4">Guestlist or table</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
              Guestlist vs Table Booking at {club.name}
            </h2>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {data.guestlistComparison}
            </p>
          </div>
        </section>
      )}

      {/* Entry Guide */}
      {data.entryGuide && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow mb-4">The door</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
              How to Get Into {club.name}
            </h2>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {data.entryGuide}
            </p>
          </div>
        </section>
      )}

      {/* Long-Form Content Sections */}
      {data.sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 md:py-20 px-4 sm:px-6 border-b border-border ${i % 2 === 0 ? "bg-bg-secondary" : ""}`}
        >
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow mb-4">No. {String(i + 1).padStart(2, "0")} &mdash; In detail</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">{section.heading}</h2>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Reservations</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
            Ready to Book Your Table at {club.name}?
          </h2>
          <p className="text-text-muted mb-8">
            Message us on WhatsApp with your date and group size. We&apos;ll confirm your table
            directly with {club.name}, usually within minutes. No forms, no waiting.
          </p>
          <WhatsAppCTA clubName={club.name} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-8">
            {club.name}{" "}Table Booking — Frequently Asked Questions
          </h2>
          <div className="border-t border-border">
            {data.faqs.map((faq, i) => (
              <div key={i} className="py-6 border-b border-border">
                <h3 className="font-display text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-text-muted text-[0.9375rem] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Booking Pages */}
      {relatedClubs.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border bg-bg-secondary">
          <div className="max-w-4xl mx-auto">
            <p className="eyebrow mb-4">The clubs</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">
              Book Tables at Other Top London Clubs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedClubs.map(({ booking, club: c }) => {
                const cImages = getClubImages(c.slug);
                return (
                  <Link
                    key={booking.bookingSlug}
                    href={`/${booking.bookingSlug}`}
                    className="group"
                  >
                    <div className="border border-border-light p-2 bg-bg-primary">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={cImages.card}
                          alt={cImages.alt}
                          fill
                          className="img-grade object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-display italic text-lg group-hover:text-gold-light transition-colors">
                        {c.name}
                      </h3>
                      <p className="price text-sm mt-1">
                        Tables from <span className="price-sign">&pound;</span>{c.pricing.floorTable.toLocaleString()}
                      </p>
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mt-1">{c.area}</p>
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors mt-3">
                        Book a Table &rarr;
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="eyebrow mb-4">More About {club.name}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={`/clubs/${club.slug}`} className="text-text-secondary hover:text-gold transition-colors">
                    {club.name} — Full Club Guide &amp; Details &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/book-a-table" className="text-text-secondary hover:text-gold transition-colors">
                    Book a Table at Any London Club &rarr;
                  </Link>
                </li>
                {relatedBlogs.map((blog) =>
                  blog ? (
                    <li key={blog.slug}>
                      <Link href={`/blog/${blog.slug}`} className="text-text-secondary hover:text-gold transition-colors">
                        {blog.title} &rarr;
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow mb-4">London Nightlife</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/best-clubs-bottle-service-london" className="text-text-secondary hover:text-gold transition-colors">
                    Best Clubs for Bottle Service in London &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/clubs-by-night" className="text-text-secondary hover:text-gold transition-colors">
                    London Clubs by Night of the Week &rarr;
                  </Link>
                </li>
                <li>
                  <a
                    href="https://londonluxurynightlife.com"
                    target="_blank"
                    rel="noopener"
                    className="text-text-secondary hover:text-gold transition-colors"
                  >
                    London Luxury Nightlife Guide &rarr;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <WhatsAppCTA
        variant="sticky"
        clubName={club.name}
        urgencyMessage="Secure your table now"
      />
    </>
  );
}
