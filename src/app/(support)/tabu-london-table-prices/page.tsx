import { Metadata } from "next";
import { SupportPageTemplate } from "@/components/SupportPageTemplate";
import { getSupportPageBySlug } from "@/data/supportPages";

const SLUG = "tabu-london-table-prices";

export function generateMetadata(): Metadata {
  const data = getSupportPageBySlug(SLUG);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://londonbottleservice.com/${SLUG}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://londonbottleservice.com/${SLUG}`,
    },
  };
}

export default function TabuLondonTablePrices() {
  return <SupportPageTemplate slug={SLUG} />;
}
