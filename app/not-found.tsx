import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found · Oyshi Tabassum Aditi',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="lost">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page isn&apos;t on the site.</h1>
        <p>The portfolio is a single page.</p>
        <p>
          <Link className="btn btn-primary" href="/">
            Back to the portfolio
          </Link>
        </p>
      </div>
    </main>
  );
}
