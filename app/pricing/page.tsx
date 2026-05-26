import type { Metadata } from "next";
import { Check, CreditCard, Plus } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Listing credits and broker packages for luxury property sellers."
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="py-14">
        <div className="luxury-container">
          <p className="eyebrow">Monetization</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold">
            Listing credits built for owners and brokers.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-graphite">
            Phase 1 validates willingness to pay through simple listing credits instead of a heavy subscription model.
          </p>

          <section className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              ["Private Owner", "$99", "1 listing credit", "Best for a single luxury home"],
              ["Broker Starter", "$599", "10 listing credits", "Best for boutique agencies"],
              ["Broker Scale", "$69", "per additional listing", "For larger inventory uploads"]
            ].map(([name, price, credits, note]) => (
              <article key={name} className="rounded-md border border-black/10 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl font-semibold">{name}</p>
                <p className="mt-5 font-display text-5xl font-semibold">{price}</p>
                <p className="mt-2 font-semibold text-champagne">{credits}</p>
                <p className="mt-4 text-sm leading-6 text-graphite">{note}</p>
                <ul className="mt-6 grid gap-3 text-sm">
                  {["Admin moderated publishing", "30-day active listing", "Inquiry form access", "SEO-friendly property page"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-moss" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="focus-ring mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ink px-4 font-semibold text-white">
                  <CreditCard className="h-4 w-4" aria-hidden="true" />
                  Purchase credits
                </button>
              </article>
            ))}
          </section>

          <section className="mt-10 rounded-md border border-black/10 bg-white p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
              <div>
                <p className="font-display text-3xl font-semibold">Custom broker quantity</p>
                <p className="mt-2 text-graphite">Example: 186 listings × $69 = $12,834, then 186 credits are added after Stripe confirmation.</p>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Number of listings
                <input className="focus-ring h-12 rounded-md border border-black/10 px-3 text-lg" defaultValue="186" />
              </label>
              <button className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-black/10 px-5 font-semibold">
                <Plus className="h-4 w-4" aria-hidden="true" />
                Calculate
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
