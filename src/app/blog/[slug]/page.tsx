import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { blogContent } from "@/data/blogContent";
import { clubs } from "@/data/clubs";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { HeroImage } from "@/components/HeroImage";
import { getBlogImages } from "@/data/images";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://londonbottleservice.com/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://londonbottleservice.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const content = blogContent[slug];
  if (!content) notFound();

  const relatedClubData = post.relatedClubs
    .map((s) => clubs.find((c) => c.slug === s))
    .filter(Boolean);

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);
  const images = getBlogImages(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "London Bottle Service",
      url: "https://londonbottleservice.com",
    },
    publisher: {
      "@type": "Organization",
      name: "London Bottle Service",
      url: "https://londonbottleservice.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://londonbottleservice.com/blog/${slug}`,
    },
  };

  return (
    <>
      <FAQSchema faqs={post.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://londonbottleservice.com" },
          { name: "Blog", url: "https://londonbottleservice.com/blog" },
          { name: post.title },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">&mdash;</span>
          <Link href="/blog" className="hover:text-text-secondary transition-colors">Blog</Link>
          <span className="mx-2">&mdash;</span>
          <span className="text-text-secondary line-clamp-1">{post.title}</span>
        </nav>
      </div>

      {/* Featured Image */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <div className="border border-border-light p-2 bg-bg-primary">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={images.featured}
              alt={images.alt}
              fill
              className="object-cover img-grade"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] mb-4">
            <span className="text-gold">{post.category}</span>
            <span className="text-text-muted"> &mdash; {post.readingTime}</span>
            <span className="text-text-muted">
              {" "}&mdash; Updated {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </p>

          <h1 className="font-display font-light text-3xl md:text-[2.75rem] leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="font-display italic font-light text-text-secondary text-lg leading-relaxed mb-8 border-l-2 border-gold pl-4">
            {post.excerpt}
          </p>

          {/* Article Body */}
          <div className="prose-custom">
            {content}
          </div>

          {/* CTA within article */}
          <div className="my-12 p-6 border border-border bg-bg-secondary text-center">
            <p className="eyebrow mb-3">Ready to book</p>
            <h3 className="font-display text-xl font-normal mb-3">Ready to Book?</h3>
            <p className="text-text-muted text-sm mb-6">
              Message us on WhatsApp with your preferred club, date, and group
              size. We&apos;ll confirm your table within minutes.
            </p>
            <WhatsAppCTA />
          </div>
        </div>
      </article>

      {/* Related Clubs */}
      {relatedClubData.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-4">The clubs</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">Clubs Mentioned in This Article</h2>
            <div className="border-t border-border">
              {relatedClubData.map((club) =>
                club ? (
                  <Link
                    key={club.slug}
                    href={`/clubs/${club.slug}`}
                    className="flex items-baseline justify-between gap-4 py-5 border-b border-border hover:bg-bg-card/40 transition-colors group"
                  >
                    <div>
                      <h3 className="font-display italic text-[0.9375rem] group-hover:text-gold-light transition-colors">
                        {club.name}
                      </h3>
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted mt-1">
                        {club.openingNights.join(", ")} &mdash; {club.area}
                      </p>
                    </div>
                    <p className="price text-sm shrink-0">
                      From <span className="price-sign">&pound;</span>{club.pricing.floorTable.toLocaleString()}
                    </p>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {post.faqs.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">Frequently Asked Questions</h2>
            <div className="border-t border-border">
              {post.faqs.map((faq, i) => (
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
      )}

      {/* More Articles */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-t border-border bg-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Further reading</p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">More Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherPosts.map((p) => {
              const pImages = getBlogImages(p.slug);
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-bg-card border border-border overflow-hidden hover:border-gold-dark transition-colors group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={pImages.featured}
                      alt={pImages.alt}
                      fill
                      className="object-cover img-grade group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">{p.category}</span>
                    <h3 className="font-display mt-1 group-hover:text-gold-light transition-colors line-clamp-2 text-[0.9375rem]">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppCTA variant="sticky" />
    </>
  );
}
