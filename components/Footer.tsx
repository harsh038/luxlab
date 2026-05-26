import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-night py-20 text-white">
      <div className="luxury-container grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-4xl font-medium">Aureluxe Estates</p>
          <p className="mt-5 max-w-md text-base leading-7 text-white/62">
            Curated residences, private estates, and architectural homes for discerning buyers across exceptional destinations.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-white/62">
          <p className="eyebrow text-white/38">Explore</p>
          <Link href="/listings">Listings</Link>
          <Link href="/luxury-homes/goa">Destinations</Link>
          <Link href="/luxury-villas">Collections</Link>
        </div>
        <div className="grid gap-3 text-sm text-white/62">
          <p className="eyebrow text-white/38">Destinations</p>
          <Link href="/luxury-homes/goa">Goa</Link>
          <Link href="/luxury-homes/mumbai">Mumbai</Link>
          <Link href="/luxury-homes/dubai">Dubai</Link>
        </div>
        <div className="grid gap-3 text-sm text-white/62">
          <p className="eyebrow text-white/38">Aureluxe</p>
          <Link href="/blog">Journal</Link>
          <Link href="/pricing">List Property</Link>
          <Link href="mailto:concierge@aureluxe.example">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
