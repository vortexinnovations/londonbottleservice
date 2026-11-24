import { safeJsonLd } from "@/lib/safe-output";
import { WHATSAPP_TEL } from "@/lib/whatsapp";

export const SITE_URL = "https://londonbottleservice.com";

/**
 * The site itself: a booking service, not a place people visit, so an
 * Organization (never LocalBusiness) and no address. Used site-wide by the
 * root layout and as the `about` of the About page.
 */
export function siteOrganization() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "London Bottle Service",
    description:
      "VIP table and bottle service bookings at London's most exclusive Mayfair nightclubs. Real prices, instant WhatsApp booking.",
    url: SITE_URL,
    telephone: WHATSAPP_TEL,
    image: `${SITE_URL}/gallery/images/0.jpg`,
    logo: `${SITE_URL}/icon.svg`,
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
  };
}

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd({ "@context": "https://schema.org", ...siteOrganization() }),
      }}
    />
  );
}
