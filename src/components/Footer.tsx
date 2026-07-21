import Link from "next/link";
import { clubs } from "@/data/clubs";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

/*
 * The footer is a colophon: a printed number set large, the postal
 * address, then the index of pages under mono section labels.
 * Offices print their numbers; scam promoters hide behind forms.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary mt-24 pb-24 md:pb-0">
      {/* Colophon strip */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-4">Bookings via WhatsApp</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-2xl md:text-3xl text-text-primary tracking-[0.06em] hover:text-gold-light transition-colors"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <p className="flex items-center gap-2 mt-4 font-mono text-[0.625rem] uppercase tracking-[0.22em] text-text-muted">
              <span className="presence-dot" aria-hidden="true" />
              We typically respond within minutes
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-display text-lg font-medium text-text-primary mb-1">
              London Bottle Service
            </p>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-text-muted leading-relaxed">
              9 Swallow Street<br />
              London W1B 4DF
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Your direct connection to VIP table bookings at London&apos;s most
              exclusive nightclubs. Real prices, real availability, no hidden fees.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-5">The Clubs</h4>
            <ul className="space-y-2.5">
              {clubs.map((club) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]"
                  >
                    {club.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Table Booking</h4>
            <ul className="space-y-2.5">
              <li><Link href="/book-a-table" className="text-text-secondary hover:text-gold transition-colors text-[0.8125rem]">Book a Table</Link></li>
              <li><Link href="/tape-london-table-booking" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Tape London</Link></li>
              <li><Link href="/cirque-le-soir-table-booking" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Cirque Le Soir</Link></li>
              <li><Link href="/cuckoo-club-table-booking" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Cuckoo Club</Link></li>
              <li><Link href="/maddox-club-table-booking" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Maddox</Link></li>
              <li><Link href="/the-box-london-table-booking" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">The Box</Link></li>
              <li><Link href="/tabu-london-table-booking" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Tabu London</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Guides</h4>
            <ul className="space-y-2.5">
              <li><Link href="/bottle-service-guide" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">What is Bottle Service?</Link></li>
              <li><Link href="/clubs-by-night" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Clubs by Night</Link></li>
              <li><Link href="/best-clubs-bottle-service-london" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Best Clubs for Bottle Service</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-gold transition-colors text-[0.8125rem]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <p className="text-text-muted text-[0.8125rem] leading-relaxed mb-3">
              The fastest way to book is via WhatsApp. We typically respond within minutes.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors text-[0.8125rem] font-medium"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted">
          <p>&copy; {new Date().getFullYear()} London Bottle Service. All rights reserved.</p>
          <p>VIP table bookings at London&apos;s finest nightclubs.</p>
        </div>
      </div>
    </footer>
  );
}
