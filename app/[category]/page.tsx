import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { categories, listings } from "@/lib/data";

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
    description: `Browse curated ${label} for sale and rent with premium moderated listings.`
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!categorySlugs.includes(category)) {
    notFound();
  }

  const label = category.replaceAll("-", " ");

  return (
    <>
      <Header />
      <main className="py-14">
        <div className="luxury-container">
          <p className="eyebrow">Category SEO</p>
          <h1 className="mt-3 font-display text-5xl font-semibold capitalize">{label}</h1>
          <p className="mt-4 max-w-2xl text-graphite">
            A category page built for high-intent searches and broker inventory discovery.
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
