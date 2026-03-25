import Link from "next/link";
import { clubs } from "@/data/clubs";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary mt-20 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gold font-bold text-lg tracking-wide mb-4">
              LONDON BOTTLE SERVICE
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Your direct connection to VIP table bookings at London&apos;s most exclusive nightclubs. Real prices, real availability, no hidden fees.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-text-primary font-semibold mb-4">Clubs</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {clubs.map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Guides</h4>
            <ul className="space-y-2">
              <li><Link href="/bottle-service-guide" className="text-text-muted hover:text-gold transition-colors text-sm">What is Bottle Service?</Link></li>
              <li><Link href="/clubs-by-night" className="text-text-muted hover:text-gold transition-colors text-sm">Clubs by Night of the Week</Link></li>
              <li><Link href="/best-clubs-bottle-service-london" className="text-text-muted hover:text-gold transition-colors text-sm">Best Clubs for Bottle Service</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-gold transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-gold transition-colors text-sm">Book a Table</Link></li>
            </ul>

            <h4 className="text-text-primary font-semibold mb-4 mt-6">Contact</h4>
            <p className="text-text-muted text-sm mb-2">
              The fastest way to book is via WhatsApp. We typically respond within minutes.
            </p>
            <a
              href="https://wa.me/447880662708"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#20bd5a] transition-colors text-sm font-medium"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center text-text-muted text-xs">
          <p>&copy; {new Date().getFullYear()} London Bottle Service. All rights reserved.</p>
          <p className="mt-1">VIP table bookings at London&apos;s finest nightclubs.</p>
        </div>
      </div>
    </footer>
  );
}
