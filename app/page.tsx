import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { SearchBar } from "@/components/SearchBar";
import { collections, destinations, journalPosts, listings } from "@/lib/data";

export default function Home() {
  const featuredListings = listings.filter((listing) => listing.status === "Live");

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-screen overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
            alt="Cinematic luxury residence with warm architecture and pool"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-pearl to-transparent" />
          <div className="luxury-container relative flex min-h-screen items-center pb-20 pt-32">
            <div className="max-w-4xl text-white">
              <p className="eyebrow text-white/68">Private residences and architectural homes</p>
              <h1 className="mt-6 font-display text-6xl font-light leading-[0.94] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
                Aureluxe Estates
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-white/78">
                Discover curated villas, penthouses, beachfront homes, and private estates across the world&apos;s
                most desirable locations.
              </p>
              <div className="mt-12 max-w-5xl">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container">
            <div className="max-w-3xl">
              <p className="eyebrow">Curated Residences</p>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight lg:text-6xl">
                Exceptional homes selected for setting, architecture, and atmosphere.
              </h2>
            </div>
            <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
              {featuredListings.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
            <Link href="/listings" className="link-underline mt-12 inline-flex items-center gap-2 text-sm font-medium">
              Explore all residences <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="section-space bg-linen">
          <div className="luxury-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">Explore Destinations</p>
                <h2 className="mt-4 font-display text-5xl font-light lg:text-6xl">Where luxury lives quietly.</h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-graphite">
                Browse residences by places shaped by privacy, landscape, culture, and architectural character.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {destinations.map((destination, index) => (
                <Link
                  key={destination.name}
                  href={destination.href}
                  className={`group relative min-h-[360px] overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <Image
                    src={destination.image}
                    alt={`${destination.name} luxury homes`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="image-zoom object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent transition duration-700 group-hover:from-black/76" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="text-sm text-white/68">{destination.note}</p>
                    <h3 className="mt-2 font-display text-5xl font-light">{destination.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container">
            <div className="max-w-2xl">
              <p className="eyebrow">Property Collections</p>
              <h2 className="mt-4 font-display text-5xl font-light lg:text-6xl">Residences grouped by desire.</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {collections.map((collection) => (
                <Link key={collection.name} href={collection.href} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="image-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 to-transparent" />
                    <h3 className="absolute bottom-6 left-6 right-6 font-display text-4xl font-light leading-tight text-white">
                      {collection.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-white/50">
          <div className="luxury-container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">The Journal</p>
                <h2 className="mt-4 font-display text-5xl font-light lg:text-6xl">Notes on places, homes, and taste.</h2>
              </div>
              <Link href="/blog" className="link-underline inline-flex items-center gap-2 text-sm font-medium">
                Read the journal <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {journalPosts.map((post) => (
                <Link key={post.title} href="/blog" className="group">
                  <div className="relative aspect-[16/11] overflow-hidden bg-linen">
                    <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="image-zoom object-cover" />
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-champagne">{post.category}</p>
                  <h3 className="mt-3 font-display text-3xl font-light leading-tight">{post.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-graphite">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-night py-28 text-white lg:py-36">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85"
            alt="Elegant luxury residence interior"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.34]"
          />
          <div className="absolute inset-0 bg-night/70" />
          <div className="luxury-container relative">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/62">List Exceptional Properties</p>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight lg:text-7xl">
                Reach a premium audience of global buyers, investors, and luxury property seekers.
              </h2>
              <Link
                href="/pricing"
                className="focus-ring mt-10 inline-flex items-center gap-2 border border-champagne/42 bg-white px-7 py-4 text-sm font-medium text-night transition duration-300 hover:scale-[1.02]"
              >
                Begin Listing <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
