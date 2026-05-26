import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-ink py-10 text-white">
      <div className="luxury-container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">Aureluxe Estates</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            A Phase 1 luxury property marketplace for validating paid listings,
            broker packages, moderated inventory, and inquiry generation.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <p className="font-semibold text-white">Marketplace</p>
          <Link href="/listings">Listings</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="grid gap-2 text-sm text-white/70">
          <p className="font-semibold text-white">Panels</p>
          <Link href="/dashboard">Broker Dashboard</Link>
          <Link href="/admin">Admin Dashboard</Link>
          <Link href="/listings/sea-facing-villa-goa">Property Detail</Link>
        </div>
      </div>
    </footer>
  );
}
