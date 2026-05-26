import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { SearchBar } from "@/components/SearchBar";
import { listings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury Listings",
  description: "Browse moderated luxury homes, villas, penthouses, farmhouses, and beach houses."
};

export default function ListingsPage() {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="luxury-container">
          <p className="eyebrow">Real estate</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="font-display text-5xl font-semibold">Luxury Homes for Sale and Rent</h1>
              <p className="mt-3 text-graphite">{listings.length} curated listings in Phase 1 inventory</p>
            </div>
            <select className="focus-ring h-11 rounded-md border border-black/10 bg-white px-3 text-sm">
              <option>Sort: Premium</option>
              <option>Recent</option>
              <option>Price highest first</option>
              <option>Price lowest first</option>
            </select>
          </div>
          <div className="mt-8">
            <SearchBar />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-md border border-black/10 bg-white p-4">
              <p className="font-semibold">Filters</p>
              {["Beds", "Amenities", "Listing type", "Property status"].map((filter) => (
                <label key={filter} className="mt-4 grid gap-2 text-sm font-medium">
                  {filter}
                  <select className="focus-ring h-10 rounded-md border border-black/10 px-3 text-sm font-normal">
                    <option>Any</option>
                    <option>Premium</option>
                  </select>
                </label>
              ))}
            </aside>
            <section className="grid gap-6 md:grid-cols-2">
              {listings.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
