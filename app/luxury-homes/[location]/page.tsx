import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { destinations, listings } from "@/lib/data";

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
  const destination = destinations.find((item) => item.name.toLowerCase() === location);

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[64vh] overflow-hidden">
          <Image
            src={destination?.image ?? listings[0].image}
            alt={`Luxury homes in ${location}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/52" />
          <div className="luxury-container relative flex min-h-[64vh] items-end pb-16 pt-32 text-white">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/68">Destination</p>
              <h1 className="mt-4 font-display text-6xl font-light capitalize leading-none lg:text-8xl">
                {location}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                {destination?.note ?? "Private residences selected for atmosphere, architecture, and sense of place."}
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container">
            <p className="eyebrow">Available Residences</p>
            <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {listings.slice(0, 3).map((listing) => (
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
