import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { HeroImage } from "@/components/HeroImage";
import { pageImages, getBlogImages } from "@/data/images";

export const metadata: Metadata = {
  title: "London Nightlife Blog | Bottle Service Tips, Club Guides & Pricing",
  metadataBase: new URL("https://londonbottleservice.com"),
  description:
    "Expert guides to London's nightlife scene. Bottle service pricing, club reviews, dress code guides, birthday planning, and insider tips for Mayfair's best clubs.",
  alternates: {
    canonical: "https://londonbottleservice.com/blog",
  },
  openGraph: {
    title: "London Nightlife Blog | Bottle Service Tips, Club Guides & Pricing",
    description:
      "Expert guides to London's nightlife scene. Insider tips for Mayfair's best clubs.",
    url: "https://londonbottleservice.com/blog",
  },
};

const categories = [...new Set(blogPosts.map((p) => p.category))];
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function BlogIndexPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary">Blog</span>
        </nav>
      </div>

      <HeroImage
        src={pageImages.blogIndex.hero}
        alt={pageImages.blogIndex.alt}
        height="h-[40vh] min-h-[300px]"
        overlay="strong"
      >
        <p className="eyebrow [text-shadow:0_1px_10px_rgba(15,12,8,0.9)] mb-4 animate-fade-up">The journal</p>
        <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-6 animate-fade-up-1">
          London Nightlife Blog
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl animate-fade-up-2">
          Insider guides, honest pricing breakdowns, and practical advice for
          London&apos;s club scene. Written by people who book tables at these
          venues every week — not SEO content farms.
        </p>
      </HeroImage>

      {/* Category Filters */}
      <section className="px-4 sm:px-6 pb-10 pt-8">
        <div className="max-w-5xl mx-auto font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          {categories.map((cat, i) => (
            <span key={cat}>
              {i > 0 && <span className="mx-2 text-border">/</span>}
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href={`/blog/${sortedPosts[0].slug}`}
            className="block group"
          >
            <div className="border border-border-light p-2 bg-bg-primary">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={getBlogImages(sortedPosts[0].slug).featured}
                  alt={getBlogImages(sortedPosts[0].slug).alt}
                  fill
                  className="img-grade object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            </div>
            <div className="pt-6">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] mb-3">
                <span className="text-gold">Featured</span>
                <span className="text-text-muted"> &mdash; {sortedPosts[0].category} &mdash; {sortedPosts[0].readingTime}</span>
              </p>
              <h2 className="font-display italic font-normal text-3xl md:text-4xl mb-3 group-hover:text-gold-light transition-colors">
                {sortedPosts[0].title}
              </h2>
              <p className="text-text-muted leading-relaxed mb-4 max-w-2xl">
                {sortedPosts[0].excerpt}
              </p>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors">
                Read the full guide &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow mb-4">The archive</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-10">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {sortedPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="border border-border-light p-2 bg-bg-primary">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={getBlogImages(post.slug).featured}
                      alt={getBlogImages(post.slug).alt}
                      fill
                      className="img-grade object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="pt-5">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mb-3">
                    {post.category} &mdash; {post.readingTime}
                  </p>
                  <h3 className="font-display text-xl font-medium mb-2 group-hover:text-gold-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Reservations</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-4">
            Ready to Book a Table?
          </h2>
          <p className="text-text-muted mb-8">
            Done reading? Message us on WhatsApp and we&apos;ll get your table
            sorted in minutes.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
