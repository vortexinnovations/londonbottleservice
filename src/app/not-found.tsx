import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage
          to find the club you&apos;re after.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 py-3 px-6 bg-gold hover:bg-gold-light text-bg-primary font-semibold rounded-lg transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
