import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Listing } from "@/lib/data";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="overflow-hidden rounded-md border border-black/10 bg-white shadow-sm">
      <Link href={`/listings/${listing.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-neutral-200">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-md bg-white/92 px-3 py-1 text-xs font-semibold">
            {listing.listingType}
          </span>
        </div>
      </Link>
      <div className="grid gap-4 p-4">
        <div>
          <p className="text-lg font-semibold">{listing.price}</p>
          <Link href={`/listings/${listing.slug}`} className="mt-1 block font-display text-xl font-semibold">
            {listing.title}
          </Link>
          <p className="mt-2 flex items-center gap-1 text-sm text-graphite">
            <MapPin className="h-4 w-4 text-champagne" aria-hidden="true" />
            {listing.area}, {listing.city}, {listing.country}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-sm text-graphite">
          <span className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" aria-hidden="true" />
            {listing.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" aria-hidden="true" />
            {listing.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Ruler className="h-4 w-4" aria-hidden="true" />
            {listing.size}
          </span>
        </div>
      </div>
    </article>
  );
}
