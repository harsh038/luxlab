import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/lib/data";

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = locationSlug.replaceAll("-", " ");

  return {
    title: `Luxury Homes in ${location}`,
    description: `Browse luxury homes, villas, penthouses, and premium property listings in ${location}.`
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: locationSlug } = await params;
  const location = locationSlug.replaceAll("-", " ");

  return (
    <>
      <Header />
      <main className="py-14">
        <div className="luxury-container">
          <p className="eyebrow">Location SEO</p>
          <h1 className="mt-3 font-display text-5xl font-semibold capitalize">Luxury Homes in {location}</h1>
          <p className="mt-4 max-w-2xl text-graphite">
            A search-optimized page for location-specific luxury real estate demand.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.slice(0, 3).map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
