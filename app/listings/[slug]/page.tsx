import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Bath, BedDouble, MapPin, MessageSquare, Phone, Ruler } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { listings } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = listings.find((item) => item.slug === slug);

  if (!listing) {
    return {};
  }

  return {
    title: listing.title,
    description: `${listing.title} in ${listing.area}, ${listing.city}. ${listing.beds} beds, ${listing.baths} baths, ${listing.size}.`,
    openGraph: {
      images: [listing.image]
    }
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const { slug } = await params;
  const listing = listings.find((item) => item.slug === slug);

  if (!listing) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "House",
    name: listing.title,
    accommodationCategory: listing.type,
    numberOfBedrooms: listing.beds,
    numberOfBathroomsTotal: listing.baths,
    floorSize: listing.size,
    address: `${listing.area}, ${listing.city}, ${listing.country}`
  };

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section className="bg-white">
          <div className="luxury-container py-8">
            <div className="grid gap-3 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-neutral-200">
                <Image src={listing.image} alt={listing.title} fill priority sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                {listing.gallery.slice(0, 2).map((image, index) => (
                  <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-md bg-neutral-200">
                    <Image src={image} alt={`${listing.title} gallery ${index + 1}`} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="luxury-container grid gap-10 lg:grid-cols-[1fr_360px]">
            <article>
              <p className="eyebrow">{listing.type} · {listing.listingType}</p>
              <h1 className="mt-3 font-display text-5xl font-semibold">{listing.title}</h1>
              <p className="mt-4 flex items-center gap-2 text-graphite">
                <MapPin className="h-5 w-5 text-champagne" aria-hidden="true" />
                {listing.area}, {listing.city}, {listing.country}
              </p>
              <p className="mt-6 font-display text-4xl font-semibold">{listing.price}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { Icon: BedDouble, label: `${listing.beds} Bedrooms` },
                  { Icon: Bath, label: `${listing.baths} Bathrooms` },
                  { Icon: Ruler, label: listing.size }
                ].map(({ Icon, label }) => (
                  <div key={label} className="rounded-md border border-black/10 bg-white p-4">
                    <Icon className="h-5 w-5 text-champagne" aria-hidden="true" />
                    <p className="mt-3 font-semibold">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg leading-8 text-graphite">{listing.description}</p>
              <h2 className="mt-10 font-display text-3xl font-semibold">Amenities</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {listing.amenities.map((amenity) => (
                  <span key={amenity} className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold">
                    {amenity}
                  </span>
                ))}
              </div>
            </article>

            <aside className="h-fit rounded-md border border-black/10 bg-white p-5 shadow-luxe">
              <p className="text-sm text-graphite">Listed by</p>
              <p className="mt-1 text-xl font-semibold">{listing.broker}</p>
              <p className="text-sm text-graphite">{listing.company}</p>
              <form className="mt-6 grid gap-3">
                <input className="focus-ring h-11 rounded-md border border-black/10 px-3" placeholder="Name" />
                <input className="focus-ring h-11 rounded-md border border-black/10 px-3" placeholder="Email" />
                <input className="focus-ring h-11 rounded-md border border-black/10 px-3" placeholder="Phone" />
                <textarea className="focus-ring min-h-28 rounded-md border border-black/10 p-3" placeholder="I am interested in this property." />
                <button className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 font-semibold text-white" type="submit">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Send inquiry
                </button>
                <button className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md border border-black/10 px-4 font-semibold" type="button">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Contact broker
                </button>
              </form>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
