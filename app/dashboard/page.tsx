import type { Metadata } from "next";
import { AlertCircle, CheckCircle2, CreditCard, FilePlus2, Home, Inbox, PencilLine } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brokerMetrics, listings } from "@/lib/data";

const navItems = [
  { Icon: Home, label: "Dashboard Home" },
  { Icon: CreditCard, label: "Credits" },
  { Icon: FilePlus2, label: "Add Listing" },
  { Icon: Inbox, label: "Inquiries" },
  { Icon: PencilLine, label: "Edit Requests" }
];

export const metadata: Metadata = {
  title: "Broker Dashboard",
  description: "Broker listing credits, property submissions, inquiries, and listing status management."
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="luxury-container grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-md border border-black/10 bg-white p-4">
            <p className="font-display text-2xl font-semibold">Broker Panel</p>
            <nav className="mt-5 grid gap-2 text-sm font-medium">
              {navItems.map(({ Icon, label }) => (
                <a key={label} className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-pearl" href={`#${label.toLowerCase().replaceAll(" ", "-")}`}>
                  <Icon className="h-4 w-4 text-champagne" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <section>
            <p className="eyebrow">Lister workspace</p>
            <h1 className="mt-3 font-display text-5xl font-semibold">Dashboard Home</h1>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {[
                ["Credits", brokerMetrics.credits],
                ["Active", brokerMetrics.activeListings],
                ["Pending", brokerMetrics.pendingListings],
                ["Expired", brokerMetrics.expiredListings],
                ["Inquiries", brokerMetrics.totalInquiries]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-black/10 bg-white p-4">
                  <p className="text-sm text-graphite">{label}</p>
                  <p className="mt-2 font-display text-3xl font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <section id="add-listing" className="mt-8 rounded-md border border-black/10 bg-white p-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="font-display text-3xl font-semibold">Add Listing Flow</p>
                  <p className="mt-2 text-graphite">Credits are deducted when the broker submits for approval.</p>
                </div>
                <button className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 font-semibold text-white">
                  <FilePlus2 className="h-4 w-4" aria-hidden="true" />
                  Start listing
                </button>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-4">
                {["Basic info", "Location", "Specifications", "Media upload", "Preview", "Publish pending approval"].map((step) => (
                  <div key={step} className="rounded-md border border-black/10 p-4 text-sm font-semibold">
                    {step}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-md border border-black/10 bg-white p-6">
              <p className="font-display text-3xl font-semibold">Listings</p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="border-b border-black/10 text-graphite">
                    <tr>
                      <th className="py-3">Property</th>
                      <th>Status</th>
                      <th>Price</th>
                      <th>Inquiries</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings.map((listing) => (
                      <tr key={listing.slug} className="border-b border-black/5">
                        <td className="py-4 font-semibold">{listing.title}</td>
                        <td>
                          <span className="inline-flex items-center gap-1 rounded-md bg-pearl px-2 py-1 text-xs font-semibold">
                            {listing.status === "Live" ? <CheckCircle2 className="h-3 w-3 text-moss" /> : <AlertCircle className="h-3 w-3 text-oxblood" />}
                            {listing.status}
                          </span>
                        </td>
                        <td>{listing.price}</td>
                        <td>{listing.inquiries}</td>
                        <td>
                          <button className="focus-ring rounded-md border border-black/10 px-3 py-2 font-semibold">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
