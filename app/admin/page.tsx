import type { Metadata } from "next";
import { Ban, Check, CircleDollarSign, Clock, ShieldCheck, Users } from "lucide-react";
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
    <main className="min-h-screen bg-[#f5f6f7] p-6 text-[#202124]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 border-b border-[#d9dde3] pb-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#69707d]">Internal</p>
            <h1 className="mt-2 text-3xl font-semibold">Admin Dashboard</h1>
          </div>
          <p className="text-sm text-[#69707d]">Moderation, brokers, payments, and platform controls</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {metricCards.map(({ Icon, label, value }) => (
            <div key={label} className="border border-[#d9dde3] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#69707d]">{label}</p>
                <Icon className="h-4 w-4 text-[#69707d]" aria-hidden="true" />
              </div>
              <p className="mt-3 text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-6 border border-[#d9dde3] bg-white">
          <div className="flex items-center justify-between border-b border-[#d9dde3] p-4">
            <div>
              <p className="font-semibold">Moderation Queue</p>
              <p className="mt-1 text-sm text-[#69707d]">Review listing quality, broker identity, edits, and payment state.</p>
            </div>
            <button className="border border-[#d9dde3] px-3 py-2 text-sm font-medium">Filter</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-[#f5f6f7] text-xs uppercase tracking-[0.12em] text-[#69707d]">
                <tr>
                  <th className="px-4 py-3">Property</th>
                  <th>Broker</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing.slug} className="border-t border-[#edf0f2]">
                    <td className="px-4 py-4 font-medium">{listing.title}</td>
                    <td>{listing.broker}</td>
                    <td>{listing.city}</td>
                    <td>{listing.status}</td>
                    <td>Confirmed</td>
                    <td className="flex gap-2 py-3">
                      <button className="inline-flex h-9 items-center gap-1 bg-[#243b2b] px-3 text-xs font-semibold text-white">
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Approve
                      </button>
                      <button className="inline-flex h-9 items-center gap-1 border border-[#d9dde3] px-3 text-xs font-semibold">
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
  );
}
