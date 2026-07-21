import { WHATSAPP_TEL } from "@/lib/whatsapp";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "London Bottle Service",
    url: "https://londonbottleservice.com",
    logo: "https://londonbottleservice.com/icon.svg",
    image: "https://londonbottleservice.com/gallery/images/0.jpg",
    description:
      "VIP table bookings at London's most exclusive nightclubs. Direct venue relationships, transparent pricing, instant WhatsApp confirmation.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: WHATSAPP_TEL,
      availableLanguage: "English",
    },
    areaServed: {
      "@type": "City",
      name: "London",
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
