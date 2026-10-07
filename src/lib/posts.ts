import { cache } from "react";
import { blogPosts, type BlogPost } from "@/data/blog";
import { getDbListing, getDbPosts, type DbPost } from "@/lib/site-posts";

// Merges the posts published through the dashboard content API (Supabase
// site_posts) with the original posts in data/blog.ts: a database row
// supersedes the original with the same slug at the same /blog/<slug> URL.

function readingTime(markdown: string): string {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function fromDb(p: DbPost): BlogPost {
  return {
    slug: p.slug,
    title: p.title,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    excerpt: p.excerpt,
    publishedAt: p.publishDate,
    updatedAt: p.dateModified,
    category: p.category || "Guides",
    readingTime: readingTime(p.bodyMd),
    keywords: [],
    relatedClubs: [],
    faqs: p.faqs,
    source: "db",
    bodyMd: p.bodyMd,
    image: p.image || undefined,
    imageAlt: p.imageAlt || undefined,
  };
}

/** The original posts in their existing order, a database row replacing the post with the same slug; new database posts follow, oldest first. */
function merge(db: BlogPost[]): BlogPost[] {
  const bySlug = new Map(db.map((p) => [p.slug, p]));
  const merged = blogPosts.map((p) => {
    const row = bySlug.get(p.slug);
    // A superseding row keeps the original's related clubs and keywords.
    return row ? { ...row, relatedClubs: p.relatedClubs, keywords: p.keywords } : { ...p, source: "file" as const };
  });
  const fileSlugs = new Set(blogPosts.map((p) => p.slug));
  const added = db
    .filter((p) => !fileSlugs.has(p.slug))
    .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));
  return [...merged, ...added];
}

/**
 * All posts, original and database, for pages (read at build and ISR
 * regeneration, never per visitor). Deduplicated per request with React cache().
 */
export const getMergedPosts = cache(async (): Promise<BlogPost[]> => merge((await getDbPosts()).map(fromDb)));

export async function getMergedPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return (await getMergedPosts()).find((p) => p.slug === slug);
}

/**
 * All posts without database bodies, for route handlers (the sitemap), which
 * render per request. Cached across requests and marked stale by
 * /api/revalidate. If the database is down and nothing is cached yet, the
 * original posts alone rather than a failed response.
 */
export async function getListingPosts(): Promise<BlogPost[]> {
  try {
    return merge((await getDbListing()).map(fromDb));
  } catch (err) {
    console.error("site_posts unavailable, listing the original posts only", err);
    return blogPosts;
  }
}
