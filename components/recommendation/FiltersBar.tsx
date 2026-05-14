"use client";

import { categories, suburbs } from "@/constants/constants";
import { FilterBarProps } from "@/types";
import { LuFilter } from "react-icons/lu";
import FilterPillSelect from "../ui/FilterPillSelect";

export default function FiltersBar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedSuburb,
  setSelectedSuburb,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-border-secondary p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* LEFT — filters */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 text-sm font-medium text-text-primary">
          <LuFilter size={16} />
          Filters
        </button>

        <FilterPillSelect
          label="Filter By Trade"
          value={selectedCategory}
          options={categories}
          onChange={setSelectedCategory}
        />

        <FilterPillSelect
          label="Filter By Suburb"
          value={selectedSuburb}
          options={suburbs}
          onChange={setSelectedSuburb}
        />
      </div>

      {/* RIGHT — search */}
      <input
        type="text"
        placeholder="Search Tradie Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-border-secondary bg-white px-5 py-2 text-sm text-text-primary placeholder:text-text-para outline-none lg:w-[280px]"
      />
    </div>
  );
}