import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Journal",
  description: "Editorial notes on luxury villas, homes, penthouses, farmhouses, and premium destinations."
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[58vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2200&q=85"
            alt="Editorial luxury interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/54" />
          <div className="luxury-container relative flex min-h-[58vh] items-end pb-16 pt-32 text-white">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/68">The Journal</p>
              <h1 className="mt-4 font-display text-6xl font-light leading-none lg:text-8xl">Luxury Insights</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Places, homes, interiors, and market notes for a more considered way of discovering luxury real estate.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container grid gap-12">
            {journalPosts.map((post, index) => (
              <article key={post.title} className="grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className={`relative aspect-[16/10] overflow-hidden bg-linen ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-champagne">{post.category}</p>
                  <h2 className="mt-4 font-display text-5xl font-light leading-tight">{post.title}</h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-graphite">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
