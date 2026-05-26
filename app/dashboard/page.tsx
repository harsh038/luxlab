import type { Metadata } from "next";
import { CreditCard, FilePlus2, Home, Inbox, Settings, UploadCloud } from "lucide-react";
import { brokerMetrics, listings } from "@/lib/data";

const navItems = [
  { Icon: Home, label: "Overview" },
  { Icon: FilePlus2, label: "Listings" },
  { Icon: UploadCloud, label: "Add Property" },
  { Icon: Inbox, label: "Inquiries" },
  { Icon: CreditCard, label: "Credits" },
  { Icon: Settings, label: "Settings" }
];

const statusLabels: Record<string, string> = {
  "Pending Approval": "Pending Review",
  "Pending Edit Approval": "Pending Changes"
};

export const metadata: Metadata = {
  title: "Broker Dashboard",
  description: "Broker listing credits, property submissions, inquiries, and listing status management."
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-pearl text-ink">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="bg-night p-7 text-white">
          <p className="font-display text-3xl font-light">Aureluxe</p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/38">Broker Workspace</p>
          <nav className="mt-10 grid gap-1 text-sm">
            {navItems.map(({ Icon, label }) => (
              <a
                key={label}
                className="flex items-center gap-3 px-3 py-3 text-white/68 transition duration-300 hover:bg-white/8 hover:text-white"
                href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
              >
                <Icon className="h-4 w-4 text-champagne" aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <section className="px-6 py-8 sm:px-10 lg:px-14">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="eyebrow">Overview</p>
              <h1 className="mt-3 font-display text-5xl font-light">Good afternoon, Coastal Prime Realty</h1>
            </div>
            <button className="focus-ring bg-night px-5 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]">
              Add Property
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Available credits", brokerMetrics.credits],
              ["Live listings", brokerMetrics.activeListings],
              ["Under review", brokerMetrics.pendingListings],
              ["New inquiries", brokerMetrics.totalInquiries]
            ].map(([label, value]) => (
              <div key={label} className="border border-border bg-white/72 p-5">
                <p className="text-sm text-graphite">{label}</p>
                <p className="mt-4 font-display text-4xl font-light">{value}</p>
              </div>
            ))}
          </div>

          <section id="add-property" className="mt-10 border border-border bg-white/72 p-7">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="font-display text-3xl font-light">Guided Property Submission</p>
                <p className="mt-2 text-sm leading-6 text-graphite">
                  Build a listing in calm steps, review the public preview, then submit for editorial review.
                </p>
              </div>
              <button className="focus-ring border border-border px-5 py-3 text-sm font-medium transition hover:bg-pearl">
                Continue Draft
              </button>
            </div>
            <div className="mt-7 grid gap-3 md:grid-cols-6">
              {["Basic Information", "Location", "Specifications", "Media Upload", "Preview", "Submit"].map((step, index) => (
                <div key={step} className="border border-border bg-pearl p-4">
                  <p className="text-xs text-champagne">0{index + 1}</p>
                  <p className="mt-2 text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 border border-dashed border-border bg-pearl p-8 text-center">
              <UploadCloud className="mx-auto h-8 w-8 text-champagne" aria-hidden="true" />
              <p className="mt-4 font-display text-2xl font-light">Drag property photography here</p>
              <p className="mt-2 text-sm text-graphite">Large landscape images create the strongest public preview.</p>
            </div>
          </section>

          <section id="listings" className="mt-10">
            <p className="font-display text-3xl font-light">Listings</p>
            <div className="mt-6 grid gap-4">
              {listings.map((listing) => (
                <article key={listing.slug} className="grid gap-4 border border-border bg-white/72 p-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="font-display text-2xl font-light">{listing.title}</p>
                    <p className="mt-2 text-sm text-graphite">{listing.area}, {listing.city} / {listing.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-linen px-3 py-2 text-xs text-graphite">
                      {statusLabels[listing.status] ?? listing.status}
                    </span>
                    <button className="focus-ring border border-border px-4 py-2 text-sm font-medium">Edit</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
