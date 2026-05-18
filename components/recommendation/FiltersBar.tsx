"use client";

import { categories, suburbs } from "@/constants/constants";
import { FilterBarProps } from "@/types";
import { LuFilter } from "react-icons/lu";
import FilterPillSelect from "../ui/FilterPillSelect";
import { useEffect, useState } from "react";

export default function FiltersBar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedSuburb,
  setSelectedSuburb,
}: FilterBarProps) {
  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(searchValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue, setSearch]);

   console.log(searchValue, 'search valuess')

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

      <input
        type="text"
        placeholder="Search Trade Name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full rounded-full border border-border-secondary bg-white px-5 py-2 text-sm text-text-primary placeholder:text-text-para outline-none lg:w-[280px]"
      />
    </div>
  );
}