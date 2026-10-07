import { MetadataRoute } from "next";
import { allClubs, isClosedClub } from "@/data/clubs";
import { getListingPosts } from "@/lib/posts";
import { bookingPages } from "@/data/bookingPages";


// Rendered per request from a cached post list (marked stale on every
// content-API publish): on Vercel a prerendered sitemap is never refreshed.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getListingPosts();
  const baseUrl = "https://londonbottleservice.com";

  const clubPageUrls = allClubs.map((club) => ({
    url: `${baseUrl}/clubs/${club.slug}`,
    lastModified: new Date(),
    changeFrequency: isClosedClub(club.slug) ? ("monthly" as const) : ("weekly" as const),
    priority: isClosedClub(club.slug) ? 0.4 : 0.9,
  }));

  const bookingPageUrls = bookingPages.map((page) => ({
    url: `${baseUrl}/${page.bookingSlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

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
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/book-a-table`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...bookingPageUrls,
    ...hubPages,
    ...clubPageUrls,
    {
      url: `${baseUrl}/clubs/luxx-club-london`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/bottle-service-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-the-editor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/clubs-by-night`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-clubs-bottle-service-london`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPageUrls,
  ];
}
