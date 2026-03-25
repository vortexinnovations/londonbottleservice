import Link from "next/link";
import { getBookingPageBySlug } from "@/data/bookingPages";
import { getOpenClubBySlug, clubs, WHATSAPP_NUMBER } from "@/data/clubs";
import { getBlogPostBySlug } from "@/data/blog";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { TrustBadges } from "@/components/TrustBadges";

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
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/book-a-table" className="hover:text-gold transition-colors">Book a Table</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{club.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-text-muted text-xs tracking-wider uppercase mb-4">
            London&apos;s dedicated VIP table concierge — direct venue relationships, instant confirmation
          </p>
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">
            {club.area} &bull; Tables from &pound;{club.pricing.floorTable.toLocaleString()}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.h1}</h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-3xl">
            {data.heroSubheading}
          </p>
          <WhatsAppCTA
            clubName={club.name}
            urgencyMessage="Tables fill fast on weekends — book now to secure your spot"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {club.name} Table Prices &amp; Minimum Spend
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {data.pricingIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Floor Table</h3>
              <p className="text-3xl font-bold text-gold mb-2">
                From &pound;{club.pricing.floorTable.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm">
                Minimum spend per table. Standard tables on the main floor with full table service.
              </p>
            </div>
            <div className="bg-bg-card border border-gold/30 rounded-xl p-6 relative">
              <span className="absolute -top-3 right-4 bg-gold text-bg-primary text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold mb-2">VIP Table</h3>
              <p className="text-3xl font-bold text-gold mb-2">
                From &pound;{club.pricing.vipTable.toLocaleString()}
              </p>
              <p className="text-text-muted text-sm">
                Premium positions with the best views and enhanced service. Recommended for special occasions.
              </p>
            </div>
          </div>
          <div className="bg-bg-card border border-border rounded-lg p-4 mb-6">
            <p className="text-gold text-sm font-medium mb-1">VIP Upgrade</p>
            <p className="text-text-secondary text-sm">{data.vipUpsellPitch}</p>
          </div>
          <div className="bg-bg-card border border-border rounded-lg p-4">
            <p className="text-gold text-sm font-medium mb-1">Midweek Advantage</p>
            <p className="text-text-secondary text-sm">{data.weekdayDeal}</p>
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
      <section className="py-10 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* How to Book */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
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
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-4 border-b border-border bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What&apos;s Included with Your Table at {club.name}
          </h2>
          <ul className="space-y-3 mb-6">
            {club.whatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Arrival Guide */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Before You Arrive at {club.name}
          </h2>
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">
            {data.arrivalGuide}
          </p>
        </div>
      </section>

      {/* Guestlist vs Table Booking */}
      {data.guestlistComparison && (
        <section className="py-12 px-4 border-b border-border bg-bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
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
        <section className="py-12 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
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
          className={`py-12 px-4 border-b border-border ${i % 2 === 0 ? "bg-bg-secondary" : ""}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.heading}</h2>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-12 px-4 border-b border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {club.name} Table Booking — Frequently Asked Questions
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

      {/* Related Booking Pages */}
      {relatedClubs.length > 0 && (
        <section className="py-12 px-4 border-b border-border bg-bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">
              Book Tables at Other Top London Clubs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedClubs.map(({ booking, club: c }) => (
                <Link
                  key={booking.bookingSlug}
                  href={`/${booking.bookingSlug}`}
                  className="bg-bg-card border border-border rounded-lg p-4 hover:border-gold/30 transition-colors group"
                >
                  <h3 className="font-semibold group-hover:text-gold transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-gold text-sm mt-1">
                    Tables from &pound;{c.pricing.floorTable.toLocaleString()}
                  </p>
                  <p className="text-text-muted text-xs mt-1">{c.area}</p>
                  <p className="text-gold text-xs mt-2 font-medium group-hover:underline">
                    Book a Table &rarr;
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gold">More About {club.name}</h3>
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
              <h3 className="font-semibold mb-4 text-gold">London Nightlife</h3>
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
