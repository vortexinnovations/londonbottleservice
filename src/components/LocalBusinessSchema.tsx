import { WHATSAPP_TEL } from "@/lib/whatsapp";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "London Bottle Service",
    description:
      "VIP table and bottle service bookings at London's most exclusive Mayfair nightclubs. Real prices, instant WhatsApp booking.",
    url: "https://londonbottleservice.com",
    telephone: WHATSAPP_TEL,
    image: "https://londonbottleservice.com/gallery/images/0.jpg",
    logo: "https://londonbottleservice.com/icon.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 Swallow Street",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "W1B 4DF",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: WHATSAPP_TEL,
      availableLanguage: "English",
    },
    priceRange: "£££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "22:00",
      closes: "03:00",
    },
    sameAs: ["https://londonluxurynightlife.com"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
