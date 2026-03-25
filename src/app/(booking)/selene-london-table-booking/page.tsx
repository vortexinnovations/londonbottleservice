import { Metadata } from "next";
import { BookingPageTemplate } from "@/components/BookingPageTemplate";
import { getBookingPageBySlug } from "@/data/bookingPages";

const BOOKING_SLUG = "selene-london-table-booking";

export function generateMetadata(): Metadata {
  const data = getBookingPageBySlug(BOOKING_SLUG);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://londonbottleservice.com/${BOOKING_SLUG}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://londonbottleservice.com/${BOOKING_SLUG}`,
    },
  };
}

export default function SeleneLondonTableBooking() {
  return <BookingPageTemplate bookingSlug={BOOKING_SLUG} />;
}
