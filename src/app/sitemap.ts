import { MetadataRoute } from "next";
import { allClubs, isClosedClub } from "@/data/clubs";
import { getListingPosts } from "@/lib/posts";
import { bookingPages } from "@/data/bookingPages";


// Rendered per request from a cached post list (marked stale on every
// content-API publish): on Vercel a prerendered sitemap is never refreshed.
//
// lastmod is only ever a real date: a post's own modified date, and for the
// blog index the newest of those. Code pages carry none (never the request
// time).
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getListingPosts();
  const baseUrl = "https://londonbottleservice.com";

  const clubPageUrls = allClubs.map((club) => ({
    url: `${baseUrl}/clubs/${club.slug}`,
    changeFrequency: isClosedClub(club.slug) ? ("monthly" as const) : ("weekly" as const),
    priority: isClosedClub(club.slug) ? 0.4 : 0.9,
  }));

  const bookingPageUrls = bookingPages.map((page) => ({
    url: `${baseUrl}/${page.bookingSlug}`,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  const latestPostDate = blogPosts.map((p) => p.updatedAt).sort().at(-1);

  const blogPageUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const hubPages = [
    "best-vip-tables-in-london",
    "mayfair-table-booking-guide",
    "club-table-prices-london",
    "guestlist-vs-table-booking-london",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/book-a-table`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...bookingPageUrls,
    ...hubPages,
    ...clubPageUrls,
    {
      url: `${baseUrl}/clubs/luxx-club-london`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/bottle-service-guide`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/clubs-by-night`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-clubs-bottle-service-london`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      ...(latestPostDate ? { lastModified: new Date(latestPostDate) } : {}),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPageUrls,
  ];
}
