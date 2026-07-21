import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6">
      <div className="text-center">
        <p className="eyebrow mb-4">Page not found &mdash; W1</p>
        <h1 className="font-display font-light text-7xl text-gold-dark mb-4">404</h1>
        <h2 className="font-display text-2xl font-normal mb-4">Page Not Found</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage
          to find the club you&apos;re after.
        </p>
        <Link href="/" className="btn-secondary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
