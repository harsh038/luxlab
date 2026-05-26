import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CreditCard, ShieldCheck, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { SearchBar } from "@/components/SearchBar";
import { blogPosts, categories, listings, locations } from "@/lib/data";

const brokerFlowCards = [
  { Icon: CreditCard, title: "Buy credits", body: "Packages and custom quantities" },
  { Icon: ShieldCheck, title: "Moderate quality", body: "Pending approval before public visibility" },
  { Icon: BadgeCheck, title: "Generate leads", body: "Property inquiries routed to brokers" }
];

export default function Home() {
  const liveListings = listings.filter((listing) => listing.status === "Live");

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
            alt="Luxury residence with pool and warm interior lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/12" />
          <div className="luxury-container relative flex min-h-[calc(100vh-4rem)] items-center py-14">
            <div className="max-w-3xl text-white">
              <p className="eyebrow">Luxury listing marketplace</p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
                Aureluxe Estates
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
                Premium villas, penthouses, farmhouses, beach houses, and high-end homes with moderated listings,
                broker credits, and inquiry-first discovery.
              </p>
              <div className="mt-8 max-w-5xl">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="luxury-container grid gap-4 md:grid-cols-4">
            {[
              ["128+", "Seed listing target"],
              ["30 days", "Default active duration"],
              ["$99", "Single owner listing"],
              ["$599", "Broker starter package"]
            ].map(([value, label]) => (
              <div key={label} className="border-l border-black/10 px-4">
                <p className="font-display text-4xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-graphite">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="luxury-container">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Featured inventory</p>
                <h2 className="mt-3 font-display text-4xl font-semibold">Live Luxury Properties</h2>
              </div>
              <Link href="/listings" className="inline-flex items-center gap-2 text-sm font-semibold">
                Explore all listings <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {liveListings.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white">
          <div className="luxury-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Broker revenue engine</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">Credits keep Phase 1 simple.</h2>
              <p className="mt-4 text-white/72">
                Brokers buy listing credits, publish inventory when ready, and every public listing enters admin
                moderation before going live.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {brokerFlowCards.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-md border border-white/12 bg-white/6 p-5">
                  <Icon className="h-6 w-6 text-champagne" aria-hidden="true" />
                  <p className="mt-4 font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="luxury-container grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">SEO locations</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">Focused location pages</h2>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {locations.map((location) => (
                  <Link key={location} href={`/luxury-homes/${location.toLowerCase().replaceAll(" ", "-")}`} className="rounded-md border border-black/10 bg-white p-4 font-semibold">
                    {location}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">SEO categories</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">Searchable property niches</h2>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <Link key={category} href={`/${category.toLowerCase().replaceAll(" ", "-")}`} className="rounded-md border border-black/10 bg-white p-4 font-semibold">
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="luxury-container grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Insights</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">Blog topics for organic growth</h2>
            </div>
            <div className="grid gap-3">
              {blogPosts.map((post) => (
                <Link key={post} href="/blog" className="flex items-center justify-between rounded-md border border-black/10 p-4 font-semibold">
                  {post}
                  <Sparkles className="h-4 w-4 text-champagne" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
