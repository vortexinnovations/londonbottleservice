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
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">Blog</span>
        </nav>
      </div>

      <HeroImage
        src={pageImages.blogIndex.hero}
        alt={pageImages.blogIndex.alt}
        height="h-[40vh] min-h-[300px]"
        overlay="strong"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          London Nightlife Blog
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
          Insider guides, honest pricing breakdowns, and practical advice for
          London&apos;s club scene. Written by people who book tables at these
          venues every week — not SEO content farms.
        </p>
      </HeroImage>

      {/* Category Filters */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs px-3 py-1.5 bg-bg-card border border-border rounded-full text-text-muted"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href={`/blog/${sortedPosts[0].slug}`}
            className="block bg-bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors group"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={getBlogImages(sortedPosts[0].slug).featured}
                alt={getBlogImages(sortedPosts[0].slug).alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2.5 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold">
                  Featured
                </span>
                <span className="text-xs text-text-muted">
                  {sortedPosts[0].category}
                </span>
                <span className="text-xs text-text-muted">
                  {sortedPosts[0].readingTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gold transition-colors">
                {sortedPosts[0].title}
              </h2>
              <p className="text-text-muted leading-relaxed mb-4 max-w-2xl">
                {sortedPosts[0].excerpt}
              </p>
              <span className="text-gold text-sm font-medium group-hover:underline">
                Read the full guide &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors group"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <Image
                    src={getBlogImages(post.slug).featured}
                    alt={getBlogImages(post.slug).alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 bg-bg-primary border border-border rounded-full text-text-muted">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors line-clamp-2">
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
      <section className="py-12 px-4 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
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
