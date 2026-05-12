"use client";

import { categories, suburbs } from "@/constants/constants";
import { FilterBarProps } from "@/types";
import { LuChevronDown, LuFilter } from "react-icons/lu";

export default function FiltersBar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedSuburb,
  setSelesectedSuburb,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 p-4 lg:flex-row-reverse lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 text-sm">
          <LuFilter size={16} />
          Filters
        </button>

        <div className="relative rounded-lg border border-border-secondary bg-white px-[0.8125rem] py-[0.6875rem] pr-10 text-sm outline-none">
          Filter By Trade:{" "}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none outline-none capitalize "
          >
            {categories.map((item: string) => (
              <option key={item} className="">
                {item}
              </option>
            ))}
          </select>
          <LuChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        <div className="relative rounded-lg border border-border-secondary bg-white px-[0.8125rem] py-[0.6875rem] pr-10 text-sm outline-none">
          Filter By Suburb:{" "}
          <select
            value={selectedSuburb}
            onChange={(e) => setSelesectedSuburb(e.target.value)}
            className="appearance-none outline-none capitalize "
          >
            {suburbs.map((item: string) => (
              <option key={item} className="">
                {item}
              </option>
            ))}
          </select>
          <LuChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <input
        type="text"
        placeholder="Search Trade Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none lg:w-[300px]"
      />
    </div>
  );
}
