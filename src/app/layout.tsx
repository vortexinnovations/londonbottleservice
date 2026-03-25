import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://londonbottleservice.com"),
  title: {
    default:
      "Bottle Service London | VIP Table Booking Mayfair",
    template: "%s | London Bottle Service",
  },
  description:
    "Book VIP tables at London's best Mayfair nightclubs. Real prices, no hidden fees. Cirque Le Soir, Tape London, Cuckoo Club & more. WhatsApp booking.",
  keywords: [
    "bottle service London",
    "London bottle service",
    "VIP table booking London",
    "Mayfair club table prices",
    "minimum spend London clubs",
    "London VIP nightclub",
    "Mayfair bottle service",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://londonbottleservice.com",
    siteName: "London Bottle Service",
    title: "Bottle Service London | VIP Table Booking Mayfair",
    description:
      "Book VIP tables and bottle service at London's most exclusive Mayfair nightclubs. Real prices, instant WhatsApp booking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bottle Service London | VIP Table Booking Mayfair",
    description:
      "Book VIP tables and bottle service at London's most exclusive Mayfair nightclubs. Real prices, instant WhatsApp booking.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://londonbottleservice.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
