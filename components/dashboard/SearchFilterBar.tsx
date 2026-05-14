import React from "react";
import { LuChevronDown, LuFilter, LuSearch } from "react-icons/lu";

const SearchFilterBar = () => {
  return (
    <div className="border border-border-primary px-[1.375rem] py-[1.25rem] mt-4 bg-surface rounded-tl-[0.75rem] rounded-tr-[0.75rem] ">
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-line px-3 py-2 text-sm font-medium text-brand-navy hover:bg-brand-coral-soft"
          >
            <LuFilter className="h-4 w-4" aria-hidden />
            Filters
          </button>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-line bg-white px-3 py-2 text-sm font-medium text-brand-navy shadow-sm hover:border-zinc-300"
            >
              Category
              <LuChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-line bg-white px-3 py-2 text-sm font-medium text-brand-navy shadow-sm hover:border-zinc-300"
            >
              Suburb
              <LuChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </button>
          </div>
        </div>
        <div className="relative w-full lg:max-w-xs">
          <LuSearch
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden
          />
          <input
            placeholder="Search Tradie Name…"
            aria-label="Search tradie name"
            className="w-full rounded-lg border border-brand-line bg-white py-2.5 pl-10 pr-3 text-sm text-brand-navy placeholder:text-zinc-400 focus:border-brand-coral focus:outline-none focus:ring-2 focus:ring-brand-coral/25"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
