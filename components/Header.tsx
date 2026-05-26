import Link from "next/link";
import { Building2, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-pearl/92 backdrop-blur">
      <div className="luxury-container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold">
          <Building2 className="h-5 w-5 text-champagne" aria-hidden="true" />
          Aureluxe Estates
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-graphite md:flex">
          <Link href="/listings">Buy & Rent</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/dashboard">Broker Panel</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/pricing"
            className="focus-ring hidden rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white md:inline-flex"
          >
            Become a Lister
          </Link>
          <button
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
