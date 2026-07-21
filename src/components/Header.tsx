"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { clubs } from "@/data/clubs";
import { getWhatsAppLink, WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

/*
 * A print masthead, not an app bar. Two tiers:
 *  1. utility line — districts left, staffed-number right (trust device)
 *  2. main bar — two-line wordmark lockup, mono nav, green pill
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clubsOpen, setClubsOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-bg-primary/92 backdrop-blur-md border-b border-border">
        {/* Utility tier */}
        <div className="hidden md:block border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-7 flex items-center justify-between font-mono text-[0.5625rem] uppercase tracking-[0.25em] text-text-muted">
            <span>Mayfair &middot; Soho &middot; St James&apos;s &mdash; London W1</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <span className="presence-dot" aria-hidden="true" />
              <span>Replies within minutes</span>
              <span className="text-border-light">&mdash;</span>
              <span className="tracking-[0.15em] text-text-secondary">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
            <Link href="/" className="flex flex-col leading-none" aria-label="London Bottle Service — home">
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.4em] text-gold-dark mb-1">
                London
              </span>
              <span className="font-display text-[1.35rem] font-medium text-text-primary tracking-tight">
                Bottle Service
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
              <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button
                  className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] py-2"
                  aria-expanded={clubsOpen}
                  aria-haspopup="true"
                  onClick={() => setClubsOpen(!clubsOpen)}
                >
                  Clubs
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-3 transition-all group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible ${
                    clubsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="bg-bg-secondary border border-border py-2 min-w-[230px] shadow-2xl shadow-black/50 max-h-[70vh] overflow-y-auto">
                    {clubs.map((club, i) => (
                      <Link
                        key={club.slug}
                        href={`/clubs/${club.slug}`}
                        className="flex items-baseline gap-3 px-4 py-2 hover:bg-bg-card-hover transition-colors group/item"
                      >
                        <span className="font-mono text-[0.5625rem] text-gold-dark">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-[0.8125rem] normal-case tracking-normal text-text-secondary group-hover/item:text-text-primary transition-colors">
                          {club.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/bottle-service-guide" className="text-text-secondary hover:text-text-primary transition-colors">
                Guide
              </Link>
              <Link href="/clubs-by-night" className="text-text-secondary hover:text-text-primary transition-colors">
                By Night
              </Link>
              <Link href="/best-clubs-bottle-service-london" className="text-text-secondary hover:text-text-primary transition-colors">
                Best Clubs
              </Link>
              <Link href="/blog" className="text-text-secondary hover:text-text-primary transition-colors">
                Blog
              </Link>
              <Link href="/book-a-table" className="text-text-secondary hover:text-text-primary transition-colors">
                Book a Table
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !min-h-11 !px-5 !text-[0.8125rem] normal-case tracking-normal"
              >
                Book Now
              </a>
            </nav>

            <button
              className="md:hidden text-text-primary p-3 -mr-3 min-h-11 font-mono text-[0.6875rem] uppercase tracking-[0.25em]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — fixed below header, scrollable, blocks page scroll */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-16 z-50 bg-bg-primary/98 backdrop-blur-md overflow-y-auto md:hidden">
          <nav className="px-6 py-8 pb-32">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block font-display text-2xl font-light text-text-primary py-2"
            >
              Home
            </Link>

            <div className="eyebrow pt-6 pb-2">The Clubs</div>
            {clubs.map((club, i) => (
              <Link
                key={club.slug}
                href={`/clubs/${club.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-baseline gap-3 py-2.5"
              >
                <span className="font-mono text-[0.625rem] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-[0.9375rem] text-text-secondary">
                  {club.name}
                </span>
              </Link>
            ))}

            <div className="border-t border-border pt-5 mt-5 space-y-1">
              <Link href="/bottle-service-guide" onClick={() => setIsMenuOpen(false)} className="block font-body text-[0.9375rem] text-text-secondary py-2.5">Bottle Service Guide</Link>
              <Link href="/clubs-by-night" onClick={() => setIsMenuOpen(false)} className="block font-body text-[0.9375rem] text-text-secondary py-2.5">Clubs by Night</Link>
              <Link href="/best-clubs-bottle-service-london" onClick={() => setIsMenuOpen(false)} className="block font-body text-[0.9375rem] text-text-secondary py-2.5">Best Clubs</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block font-body text-[0.9375rem] text-text-secondary py-2.5">Blog</Link>
              <Link href="/book-a-table" onClick={() => setIsMenuOpen(false)} className="block font-body text-[0.9375rem] text-text-secondary py-2.5">Book a Table</Link>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full mt-8"
            >
              Book a Table on WhatsApp
            </a>
            <p className="microline text-center mt-3">
              You&apos;ll message a real person — replies within minutes.
            </p>
            <p className="text-center font-mono text-[0.625rem] tracking-[0.2em] text-text-muted mt-6">
              {WHATSAPP_DISPLAY} &mdash; London W1
            </p>
          </nav>
        </div>
      )}
    </>
  );
}
