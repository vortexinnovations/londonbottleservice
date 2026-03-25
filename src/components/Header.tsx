"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { clubs, getWhatsAppLink } from "@/data/clubs";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-gold font-bold text-lg tracking-wide">
              LONDON BOTTLE SERVICE
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="text-text-secondary hover:text-gold transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="text-text-secondary hover:text-gold transition-colors flex items-center gap-1">
                  Clubs
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-bg-card border border-border rounded-lg py-2 min-w-[220px] shadow-xl max-h-[70vh] overflow-y-auto">
                    {clubs.map((club) => (
                      <Link
                        key={club.slug}
                        href={`/clubs/${club.slug}`}
                        className="block px-4 py-2 text-text-secondary hover:text-gold hover:bg-bg-card-hover transition-colors"
                      >
                        {club.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/bottle-service-guide" className="text-text-secondary hover:text-gold transition-colors">
                Guide
              </Link>
              <Link href="/clubs-by-night" className="text-text-secondary hover:text-gold transition-colors">
                By Night
              </Link>
              <Link href="/best-clubs-bottle-service-london" className="text-text-secondary hover:text-gold transition-colors">
                Best Clubs
              </Link>
              <Link href="/blog" className="text-text-secondary hover:text-gold transition-colors">
                Blog
              </Link>
              <Link href="/book-a-table" className="text-text-secondary hover:text-gold transition-colors">
                Book a Table
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#0a0a0a] font-medium rounded-lg transition-colors text-sm"
              >
                Book Now
              </a>
            </nav>

            <button
              className="md:hidden text-text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — fixed below header, scrollable, blocks page scroll */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-bg-primary/98 backdrop-blur-md overflow-y-auto md:hidden">
          <nav className="px-4 py-6 space-y-3 pb-32">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-text-secondary hover:text-gold transition-colors py-1">Home</Link>
            <div className="text-text-muted text-xs uppercase tracking-wider pt-2">Clubs</div>
            {clubs.map((club) => (
              <Link
                key={club.slug}
                href={`/clubs/${club.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-text-secondary hover:text-gold transition-colors py-1 pl-3"
              >
                {club.name}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3">
              <Link href="/bottle-service-guide" onClick={() => setIsMenuOpen(false)} className="block text-text-secondary hover:text-gold transition-colors py-1">Bottle Service Guide</Link>
              <Link href="/clubs-by-night" onClick={() => setIsMenuOpen(false)} className="block text-text-secondary hover:text-gold transition-colors py-1">Clubs by Night</Link>
              <Link href="/best-clubs-bottle-service-london" onClick={() => setIsMenuOpen(false)} className="block text-text-secondary hover:text-gold transition-colors py-1">Best Clubs</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block text-text-secondary hover:text-gold transition-colors py-1">Blog</Link>
              <Link href="/book-a-table" onClick={() => setIsMenuOpen(false)} className="block text-text-secondary hover:text-gold transition-colors py-1">Book a Table</Link>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-[#0a0a0a] font-semibold rounded-lg transition-colors mt-4"
            >
              Book a Table on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
