import { Search } from "lucide-react";
import { categories, locations } from "@/lib/data";

export function SearchBar() {
  return (
    <form className="grid gap-3 rounded-sm border border-white/22 bg-white/14 p-4 text-white shadow-luxe backdrop-blur-xl md:grid-cols-[1.2fr_1fr_1fr_auto]">
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/62">
        Location
        <select className="focus-ring h-12 border-0 bg-white/92 px-4 text-sm text-ink outline-none">
          <option>Choose location</option>
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/62">
        Property Type
        <select className="focus-ring h-12 border-0 bg-white/92 px-4 text-sm text-ink outline-none">
          <option>All residences</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/62">
        Budget
        <select className="focus-ring h-12 border-0 bg-white/92 px-4 text-sm text-ink outline-none">
          <option>Any budget</option>
          <option>$1M - $3M</option>
          <option>$3M - $8M</option>
          <option>$8M+</option>
        </select>
      </label>
      <div className="flex items-end">
        <button
          className="focus-ring inline-flex h-12 w-full items-center justify-center gap-2 bg-night px-6 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-ink md:w-auto"
          type="submit"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Explore
        </button>
      </div>
    </form>
  );
}
