import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "List Property",
  description: "Introduce an exceptional residence to Aureluxe Estates' premium audience."
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[78vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85"
            alt="Editorial luxury residence interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/56" />
          <div className="luxury-container relative flex min-h-[78vh] items-end pb-20 pt-32 text-white">
            <div className="max-w-4xl">
              <p className="eyebrow text-white/68">List Property</p>
              <h1 className="mt-5 font-display text-6xl font-light leading-none lg:text-8xl">
                Present your residence to a more considered audience.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">
                Aureluxe Estates is built for exceptional homes, private estates, and architectural residences that
                deserve an editorial setting.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="luxury-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">For owners and advisors</p>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight lg:text-6xl">
                A quieter way to reach serious luxury buyers.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ["Global luxury audience", "Reach buyers, investors, and lifestyle-led property seekers across desirable markets."],
                ["Editorial presentation", "Each property is shaped around imagery, atmosphere, location, and the story of the home."],
                ["Curated discovery", "Listings sit within destinations and collections that feel intentional, not crowded."]
              ].map(([title, body]) => (
                <article key={title} className="border-t border-border pt-6">
                  <h3 className="font-display text-3xl font-light">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-linen py-24 lg:py-32">
          <div className="luxury-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden bg-pearl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                alt="Luxury living room prepared for editorial presentation"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">Onboarding</p>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight">Begin with a private submission.</h2>
              <p className="mt-6 text-lg leading-8 text-graphite">
                Share the property, location, imagery, and ownership or advisory details. After registration, you can
                continue into the broker workspace to complete the listing.
              </p>
              <Link
                href="/dashboard"
                className="focus-ring mt-9 inline-flex items-center gap-2 bg-night px-7 py-4 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]"
              >
                Start Submission <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
