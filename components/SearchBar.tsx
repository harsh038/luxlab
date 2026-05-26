import { Search, SlidersHorizontal } from "lucide-react";
import { categories, locations } from "@/lib/data";

export function SearchBar() {
  return (
    <form className="grid gap-3 rounded-md border border-black/10 bg-white p-3 shadow-luxe md:grid-cols-[1.2fr_1fr_1fr_auto]">
      <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
        Location
        <select className="focus-ring h-11 rounded-md border border-black/10 bg-white px-3 text-sm normal-case tracking-normal">
          <option>Choose location</option>
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
        Type
        <select className="focus-ring h-11 rounded-md border border-black/10 bg-white px-3 text-sm normal-case tracking-normal">
          <option>All luxury property</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
        Price
        <select className="focus-ring h-11 rounded-md border border-black/10 bg-white px-3 text-sm normal-case tracking-normal">
          <option>Any budget</option>
          <option>$1M - $3M</option>
          <option>$3M - $8M</option>
          <option>$8M+</option>
        </select>
      </label>
      <div className="flex items-end gap-2">
        <button
          className="focus-ring inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white md:flex-none"
          type="submit"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </button>
        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10"
          type="button"
          aria-label="Open filters"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
