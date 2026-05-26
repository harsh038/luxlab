import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
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
        <section className="relative min-h-screen overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-black/18 to-black/28" />
          <div className="luxury-container relative flex min-h-screen items-end pb-16 pt-32 text-white">
            <div className="max-w-4xl">
              <p className="eyebrow text-white/68">{listing.type} in {listing.city}</p>
              <h1 className="mt-5 font-display text-6xl font-light leading-[0.98] lg:text-8xl">{listing.title}</h1>
              <p className="mt-6 text-xl font-light text-white/78">{listing.area}, {listing.city}, {listing.country}</p>
            </div>
          </div>
        </section>

        <section className="bg-pearl py-5">
          <div className="luxury-container grid gap-5 md:grid-cols-3">
            {listing.gallery.slice(0, 3).map((image, index) => (
              <div key={image} className="relative aspect-[16/10] overflow-hidden bg-linen">
                <Image
                  src={image}
                  alt={`${listing.title} gallery ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container grid gap-14 lg:grid-cols-[1fr_390px]">
            <article>
              <p className="font-display text-5xl font-light lg:text-6xl">{listing.price}</p>
              <div className="mt-10 grid gap-5 border-y border-border py-7 text-sm text-graphite sm:grid-cols-3">
                <p><span className="block text-2xl font-medium text-ink">{listing.beds}</span> Bedrooms</p>
                <p><span className="block text-2xl font-medium text-ink">{listing.baths}</span> Bathrooms</p>
                <p><span className="block text-2xl font-medium text-ink">{listing.size}</span> Interior</p>
              </div>

              <div className="mt-14 max-w-4xl">
                <p className="eyebrow">Residence</p>
                <p className="mt-5 text-xl font-light leading-9 text-graphite">
                  {listing.description} Every room is shaped around light, quiet movement, and the sense of arrival
                  expected from an exceptional private address.
                </p>
              </div>

              <div className="mt-16">
                <p className="eyebrow">Amenities</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {listing.amenities.map((amenity) => (
                    <span key={amenity} className="border border-border bg-white/56 px-4 py-3 text-sm text-graphite">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <aside className="h-fit border border-border bg-white/72 p-7 shadow-hush backdrop-blur lg:sticky lg:top-28">
              <p className="eyebrow">Private Inquiry</p>
              <p className="mt-4 font-display text-3xl font-light">Request Information</p>
              <p className="mt-3 text-sm leading-6 text-graphite">
                A property advisor will respond with availability, viewing options, and additional details.
              </p>
              <form className="mt-7 grid gap-4">
                <input className="focus-ring h-12 border border-border bg-pearl px-4 outline-none" placeholder="Name" />
                <input className="focus-ring h-12 border border-border bg-pearl px-4 outline-none" placeholder="Email" />
                <input className="focus-ring h-12 border border-border bg-pearl px-4 outline-none" placeholder="Phone" />
                <textarea className="focus-ring min-h-32 border border-border bg-pearl p-4 outline-none" placeholder="I would like to know more about this residence." />
                <button className="focus-ring bg-night px-5 py-4 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]" type="submit">
                  Request Information
                </button>
              </form>
              <div className="mt-7 border-t border-border pt-6 text-sm text-graphite">
                <p className="text-ink">{listing.broker}</p>
                <p>{listing.company}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
