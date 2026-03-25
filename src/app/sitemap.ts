import { MetadataRoute } from "next";
import { allClubs, isClosedClub } from "@/data/clubs";
import { blogPosts } from "@/data/blog";
import { bookingPages } from "@/data/bookingPages";
import { supportPages } from "@/data/supportPages";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const supportPageUrls = supportPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
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
    "best-nightclubs-for-bottle-service-london",
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
    ...supportPageUrls,
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
