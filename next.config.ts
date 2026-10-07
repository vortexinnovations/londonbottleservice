import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/gallery/images/:path*",
        destination:
          "https://hgsgysaxiraaezeneshr.supabase.co/storage/v1/object/public/gallery/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/book-a-table",
        permanent: true,
      },
      {
        source: "/best-nightclubs-for-bottle-service-london",
        destination: "/best-clubs-bottle-service-london",
        permanent: true,
      },
      // Closed venues: booking pages point to the closed-venue page.
      {
        source: "/funky-buddha-table-booking",
        destination: "/clubs/funky-buddha",
        permanent: true,
      },
      {
        source: "/luna-club-london-table-booking",
        destination: "/clubs/luna-club-london",
        permanent: true,
      },
      {
        source: "/maison-close-table-booking",
        destination: "/clubs/maison-close",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
