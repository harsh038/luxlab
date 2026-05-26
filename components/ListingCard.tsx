import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/lib/data";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group">
      <Link href={`/listings/${listing.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-linen">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="image-zoom object-cover"
          />
          <div className="absolute inset-0 bg-black/0 transition duration-700 group-hover:bg-black/10" />
        </div>
      </Link>
      <div className="grid gap-3 pt-5">
        <div>
          <p className="text-sm tracking-wide text-graphite">
            {listing.area}, {listing.city}
          </p>
          <Link href={`/listings/${listing.slug}`} className="mt-2 block font-display text-3xl font-medium leading-tight transition duration-300 group-hover:text-champagne">
            {listing.title}
          </Link>
          <p className="mt-3 text-lg font-medium">{listing.price}</p>
        </div>
        <div className="text-sm text-graphite">
          {listing.beds} Beds · {listing.baths} Baths · {listing.size}
        </div>
      </div>
    </article>
  );
}
