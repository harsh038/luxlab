import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury Real Estate Insights",
  description: "SEO content hub for luxury villas, homes, penthouses, farmhouses, and premium locations."
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="py-14">
        <div className="luxury-container">
          <p className="eyebrow">Organic growth</p>
          <h1 className="mt-3 font-display text-5xl font-semibold">Luxury Real Estate Insights</h1>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post} className="rounded-md border border-black/10 bg-white p-6">
                <p className="font-display text-2xl font-semibold">{post}</p>
                <p className="mt-3 text-sm leading-6 text-graphite">
                  Editorial content supports Google visibility, location authority, broker trust, and long-term organic acquisition.
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
