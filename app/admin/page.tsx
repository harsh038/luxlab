import type { Metadata } from "next";
import { Ban, Check, CircleDollarSign, Clock, ShieldCheck, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brokerMetrics, listings } from "@/lib/data";

const metricCards = [
  { Icon: ShieldCheck, label: "Total listings", value: listings.length },
  { Icon: Clock, label: "Pending review", value: listings.filter((listing) => listing.status.includes("Pending")).length },
  { Icon: Users, label: "Total brokers", value: 27 },
  { Icon: CircleDollarSign, label: "Revenue", value: brokerMetrics.revenue }
];

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin moderation for listings, brokers, payments, and edit requests."
};

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="luxury-container">
          <p className="eyebrow">Quality control</p>
          <h1 className="mt-3 font-display text-5xl font-semibold">Admin Dashboard</h1>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {metricCards.map(({ Icon, label, value }) => (
              <div key={label} className="rounded-md border border-black/10 bg-white p-4">
                <Icon className="h-5 w-5 text-champagne" aria-hidden="true" />
                <p className="mt-3 text-sm text-graphite">{label}</p>
                <p className="mt-1 font-display text-3xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <section className="mt-8 rounded-md border border-black/10 bg-white p-6">
            <p className="font-display text-3xl font-semibold">Moderation Queue</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="border-b border-black/10 text-graphite">
                  <tr>
                    <th className="py-3">Property</th>
                    <th>Broker</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((listing) => (
                    <tr key={listing.slug} className="border-b border-black/5">
                      <td className="py-4 font-semibold">{listing.title}</td>
                      <td>{listing.broker}</td>
                      <td>{listing.city}</td>
                      <td>{listing.status}</td>
                      <td className="flex gap-2 py-3">
                        <button className="focus-ring inline-flex h-9 items-center gap-1 rounded-md bg-moss px-3 text-xs font-semibold text-white">
                          <Check className="h-3 w-3" aria-hidden="true" />
                          Approve
                        </button>
                        <button className="focus-ring inline-flex h-9 items-center gap-1 rounded-md border border-black/10 px-3 text-xs font-semibold">
                          <Ban className="h-3 w-3" aria-hidden="true" />
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
