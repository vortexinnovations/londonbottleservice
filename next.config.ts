import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
