import { safeJsonLd } from "@/lib/safe-output";
import { Metadata } from "next";
import Link from "next/link";
import { fitTitle } from "@/lib/seo";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { SITE_URL, siteOrganization } from "@/components/OrganizationSchema";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "About London Bottle Service: Who We Are and How We Write";
const DESCRIPTION =
  "Who runs London Bottle Service, how we earn money from table bookings, how our guides are written and checked, and how to tell us about a mistake.";

export const metadata: Metadata = {
  title: fitTitle(TITLE),
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
  },
};

const linkClass = "text-gold hover:text-gold-light transition-colors";

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": PAGE_URL,
            url: PAGE_URL,
            name: "About London Bottle Service",
            about: siteOrganization(),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-muted">
          <Link href="/" className="hover:text-text-secondary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">About</span>
        </nav>
      </div>

      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow mb-4">About us</p>
          <h1 className="font-display font-light text-4xl md:text-[3.4rem] leading-[1.08] tracking-[-0.015em] mb-4">
            About London Bottle Service
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-12 font-display italic font-light">
            Who runs this site, how we make money and how our guides are written.
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">Who runs London Bottle Service</h2>
          <div className="space-y-5 text-text-secondary leading-relaxed mb-8">
            <p>
              London Bottle Service is run by a London nightlife booking team. We arrange VIP
              tables and guestlist places at London clubs, and we handle enquiries on WhatsApp.
              This site focuses on bottle service: what a table costs at London&apos;s clubs,
              what comes with it and how to book one.
            </p>
            <p>
              How we make money: we earn a commission when a table or guestlist place we arrange
              goes ahead. That makes us a booking service, not an independent review site, so
              read our recommendations with that in mind.
            </p>
          </div>
          <p className="eyebrow mb-4">What we cover</p>
          <ul className="space-y-3 text-text-secondary leading-relaxed list-disc list-inside marker:text-gold-dark mb-6">
            <li>Bottle service at London clubs: minimum spends, deposits and what comes with a table</li>
            <li>Club pages with table prices, opening nights and dress codes</li>
            <li>Champagne formats, spirits and bottle menus</li>
            <li>How to book a table, and what to expect on the night</li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-12">
            Start with the{" "}
            <Link href="/bottle-service-guide" className={linkClass}>bottle service guide</Link>,
            browse the <Link href="/blog" className={linkClass}>blog</Link>, or compare{" "}
            <Link href="/club-table-prices-london" className={linkClass}>table prices</Link> club
            by club.
          </p>

          <h2 id="how-we-write" className="font-display text-3xl md:text-4xl font-normal mb-6 scroll-mt-32">
            How we write
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed mb-12">
            <p>
              We write and update our guides with the help of AI tools. They are based on what
              venues announce, published listings and news reports, and the prices and door
              policies our booking desk works with.
            </p>
            <p>
              Automated checks look for closed venues, broken links and house-style problems
              before a page goes live. From 25 November 2026, a member of our team reads and
              approves every new article before it is published.
            </p>
            <p>
              We credit pages to the London Bottle Service team rather than to individual writers.
            </p>
            <p>
              Prices, opening nights and door policies change often. Message us before you go
              and we will confirm the details for your night.
            </p>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-normal mb-6">Corrections</h2>
          <p className="text-text-secondary leading-relaxed mb-12">
            If something on a page is wrong or out of date, tell us on WhatsApp at{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {WHATSAPP_DISPLAY}
            </a>{" "}
            and we will correct it.
          </p>

          <div className="border border-border bg-bg-card p-8 text-center">
            <p className="eyebrow mb-4">Reservations</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-3">Ready to book a table?</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Tell us the night, the venue, and the group size, and we&apos;ll confirm pricing and
              availability before you commit.
            </p>
            <Link href="/book-a-table" className="btn-secondary">
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
