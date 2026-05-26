import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { listings, locations, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Explore Luxury Residences",
  description: "Browse luxury homes, villas, penthouses, farmhouses, and beach houses."
};

export default function ListingsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[62vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=85"
            alt="Calm architectural luxury interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/48" />
          <div className="luxury-container relative flex min-h-[62vh] items-end pb-16 pt-32 text-white">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/68">Explore</p>
              <h1 className="mt-4 font-display text-6xl font-light leading-none lg:text-8xl">Curated Residences</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A considered selection of private villas, penthouses, beachfront homes, and estates chosen for
                atmosphere, setting, and architectural quality.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container">
            <div className="grid gap-4 border-y border-border py-6 md:grid-cols-4">
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite">
                Location
                <select className="focus-ring h-12 border-0 bg-transparent text-base normal-case tracking-normal text-ink outline-none">
                  <option>Any destination</option>
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite">
                Price Range
                <select className="focus-ring h-12 border-0 bg-transparent text-base normal-case tracking-normal text-ink outline-none">
                  <option>Any budget</option>
                  <option>$1M - $3M</option>
                  <option>$3M - $8M</option>
                  <option>$8M+</option>
                </select>
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite">
                Property Type
                <select className="focus-ring h-12 border-0 bg-transparent text-base normal-case tracking-normal text-ink outline-none">
                  <option>All collections</option>
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.22em] text-graphite">
                Bedrooms
                <select className="focus-ring h-12 border-0 bg-transparent text-base normal-case tracking-normal text-ink outline-none">
                  <option>Any</option>
                  <option>3+</option>
                  <option>5+</option>
                  <option>7+</option>
                </select>
              </label>
            </div>

            <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
