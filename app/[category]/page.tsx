import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { categories, collections, listings } from "@/lib/data";

type Props = {
  params: Promise<{ category: string }>;
};

const categorySlugs = categories.map((category) => category.toLowerCase().replaceAll(" ", "-"));

export function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = category.replaceAll("-", " ");

  return {
    title: label,
    description: `Browse curated ${label} for sale and rent.`
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!categorySlugs.includes(category)) {
    notFound();
  }

  const label = category.replaceAll("-", " ");
  const collection = collections.find((item) => item.href === `/${category}`);

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[64vh] overflow-hidden">
          <Image
            src={collection?.image ?? listings[0].image}
            alt={label}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/52" />
          <div className="luxury-container relative flex min-h-[64vh] items-end pb-16 pt-32 text-white">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/68">Collection</p>
              <h1 className="mt-4 font-display text-6xl font-light capitalize leading-none lg:text-8xl">
                {label}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                A curated edit of residences defined by atmosphere, privacy, and architectural presence.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container">
            <p className="eyebrow">Selected Properties</p>
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
