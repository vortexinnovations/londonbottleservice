import type { NextConfig } from "next";

// Enforced: these cannot block a page's own scripts, images or forms.
const CSP = "frame-ancestors 'self'; base-uri 'self'; object-src 'none'";
// Watch only, nothing is blocked: browsers log what a full policy would stop.
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com https://www.google.com https://maps.google.com",
  "media-src 'self' https:",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: CSP },
          { key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY },
        ],
      },
    ];
  },
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
      // BEAT: the booking page was merged into the club page.
      {
        source: "/beat-london-table-booking",
        destination: "/clubs/beat-london",
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
      // Renamed venues: the old club and booking URLs point to the new names.
      {
        source: "/clubs/cuckoo-club",
        destination: "/clubs/99-regent-street",
        permanent: true,
      },
      {
        source: "/clubs/tabu-london",
        destination: "/clubs/rumour-london",
        permanent: true,
      },
      {
        source: "/cuckoo-club-table-booking",
        destination: "/99-regent-street-table-booking",
        permanent: true,
      },
      {
        source: "/tabu-london-table-booking",
        destination: "/rumour-london-table-booking",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
