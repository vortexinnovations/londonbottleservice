import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Editor — Ethan Reid | London Bottle Service",
  description:
    "Meet Ethan Reid, Bottle Service & Hospitality Pro. Eight years in London hospitality, including senior service at central London nightclubs.",
  alternates: {
    canonical: "https://londonbottleservice.com/about-the-editor",
  },
  openGraph: {
    title: "About the Editor — Ethan Reid | London Bottle Service",
    description:
      "Ethan Reid writes about bottle service pricing, value, and what to expect when you upgrade your night - from eight years inside London hospitality.",
    url: "https://londonbottleservice.com/about-the-editor",
  },
};

export default function AboutTheEditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": "https://londonbottleservice.com/about-the-editor/#author-ethan",
              name: "Ethan Reid",
              jobTitle: "Bottle Service & Hospitality Pro",
              url: "https://londonbottleservice.com/about-the-editor/",
              description:
                "Ethan has worked in London hospitality for over eight years, including as a senior server at central London nightclubs. He writes about bottle service pricing, value, and what to expect when you upgrade your night.",
              worksFor: {
                "@type": "Organization",
                name: "London Bottle Service",
                url: "https://londonbottleservice.com",
              },
              knowsAbout: [
                "Bottle service and table packages",
                "London nightclub hospitality",
                "Spirits and mixology",
                "Minimum spends and table pricing",
              ],
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="text-sm text-text-muted">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">About the Editor</span>
        </nav>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-text-muted mb-3 text-center">
            About the Editor
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Ethan Reid</h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-12 text-center">
            Bottle Service &amp; Hospitality Pro, London Bottle Service
          </p>

          <div className="space-y-5 text-text-secondary leading-relaxed mb-12">
            <p>
              Ethan has worked in London hospitality for over eight years, including as a senior
              server at central London nightclubs. He has carried the magnums, run the sparkler
              parades, and settled the bills, which is exactly the experience this site&apos;s
              guides are built on.
            </p>
            <p>
              His writing covers bottle service pricing, value, and what to expect when you
              upgrade your night: how minimum spends really work, what arrives with a table, and
              where the money actually goes. Every guide carries a visible last-updated date, and
              prices are qualified to the month they were checked.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-5">What Ethan Covers</h2>
          <ul className="space-y-3 text-text-secondary leading-relaxed list-disc list-inside mb-12">
            <li>Bottle service mechanics: deposits, minimums, and what comes with a table</li>
            <li>Spirits, champagne formats, and table package value</li>
            <li>Hospitality insight from the service side of the floor</li>
            <li>Honest cost breakdowns with dated price checks</li>
          </ul>

          <h2 className="text-2xl font-bold mb-5">Recent Guides by Ethan</h2>
          <ul className="space-y-3 mb-10">
            <li>
              <Link href="/blog/champagne-bottle-sizes-explained" className="text-gold hover:underline">
                Champagne Bottle Sizes Explained: Magnum to Methuselah
              </Link>
            </li>
            <li>
              <Link href="/blog/how-far-in-advance-to-book-bottle-service-london" className="text-gold hover:underline">
                How Far in Advance Should You Book Bottle Service in London?
              </Link>
            </li>
            <li>
              <Link href="/blog/bottle-service-etiquette-london-clubs" className="text-gold hover:underline">
                Bottle Service Etiquette at London Clubs: The Unwritten Rules
              </Link>
            </li>
            <li>
              <Link href="/blog/is-bottle-service-london-worth-it" className="text-gold hover:underline">
                Is Bottle Service at London Clubs Worth It?
              </Link>
            </li>
          </ul>
          <p className="text-text-secondary leading-relaxed mb-12">
            Browse all of Ethan&apos;s guides on the <Link href="/blog" className="text-gold hover:underline">blog</Link>, or
            see the <Link href="/bottle-service-guide" className="text-gold hover:underline">complete bottle service guide</Link>.
          </p>

          <div className="border border-gold/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to book a table?</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Tell us the night, the venue, and the group size, and we&apos;ll confirm pricing and
              availability before you commit.
            </p>
            <Link
              href="/book-a-table"
              className="inline-block bg-gold text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
