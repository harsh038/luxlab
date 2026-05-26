import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-night/18 text-white backdrop-blur-md">
      <div className="luxury-container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="font-display text-2xl font-medium tracking-wide">
          Aureluxe Estates
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/82 md:flex">
          <Link className="link-underline transition hover:text-white" href="/listings">Explore</Link>
          <Link className="link-underline transition hover:text-white" href="/luxury-homes/goa">Destinations</Link>
          <Link className="link-underline transition hover:text-white" href="/luxury-villas">Collections</Link>
          <Link className="link-underline transition hover:text-white" href="/blog">Journal</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="hidden text-sm text-white/70 transition hover:text-white md:inline-flex">
            Sign in
          </Link>
          <Link
            href="/pricing"
            className="focus-ring hidden rounded-sm border border-champagne/40 bg-night px-5 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:border-champagne md:inline-flex"
          >
            List Property
          </Link>
          <button
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 bg-white/8 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
