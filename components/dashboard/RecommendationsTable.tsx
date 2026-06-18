'use client'
import { Props } from "@/types";
import RecommendationsTableSkeleton from "../ui/RecommendationsTableSkeleton";
import FiltersBar from "../recommendation/FiltersBar";

export function RecommendationsTable<T>({
  columns,
  data,
  total,
  totalPages,
  onNext,
  onPrevious,
  isLoading,
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  currentPage,
  selectedSuburb,
  setSelectedSuburb
}: Props<T>) {

  const pageSize = 10; 
const startEntry = ((currentPage ?? 1) - 1) * pageSize + 1;
const endEntry = Math.min(startEntry + data.length - 1, total ?? data.length);
  return (
    <section className="mt-10">
      <div className="">
        <h2 className="font-manrope font-bold text-[1.625rem] text-text-primary">
          Recommendations Request
        </h2>
        <p className="mt-1 font-poppins text-text-para text-[1rem]  ">
          Manage and moderate user submitted tradie recommendations.
        </p>
      </div>

      <FiltersBar
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSuburb={selectedSuburb}
        setSelectedSuburb={setSelectedSuburb}
      />

      {/* Desktop table */}
      {isLoading ? (
        <RecommendationsTableSkeleton />
      ) : data?.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border-primary bg-surface px-6 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-text-para"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m-6 4h6M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
          </div>

          <h3 className="mt-5 font-manrope text-[1.375rem] font-bold text-text-primary">
            No recommendations found
          </h3>

          <p className="mt-2 max-w-md font-poppins text-[0.95rem] text-text-para">
            There are no recommendation records matching your current filters or
            search query.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[940px] text-left text-sm border-l border-r border-b border-border-primary bg-foreground">
              <thead>
                <tr className="border-b border-brand-line bg-zinc-50/80">
                  {columns.map((column) => (
                    <th
                      key={String(column.key)}
                      className="p-[1.25rem] font-poppins text-[0.875rem] font-medium text-text-primary"
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data?.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-border-primary last:border-b-0"
                  >
                    {columns.map((column) => (
                      <td
                        key={String(column.key)}
                        className={
                          typeof column.className === "function"
                            ? column.className(row)
                            : column.className || ""
                        }
                      >
                        {column.render
                          ? column.render(row)
                          : String(row[column.key as keyof T] ?? "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <ul className="flex flex-col divide-y divide-brand-line lg:hidden">
            {data?.map((row, idx) => (
              <li key={idx} className="px-4 py-4 sm:px-6">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    {columns
                      .find((col) => col.key === "businessName")
                      ?.mobileRender?.(row)}

                    {columns
                      .find((col) => col.key === "tradeCategory")
                      ?.mobileRender?.(row)}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600">
                    {columns
                      .find((col) => col.key === "suburb")
                      ?.mobileRender?.(row)}

                    {columns
                      .find((col) => col.key === "submissionDate")
                      ?.mobileRender?.(row)}
                  </div>

                  {columns
                    .find((col) => col.key === "trustPoints")
                    ?.mobileRender?.(row)}

                  {columns
                    .find((col) => col.key === "actions")
                    ?.mobileRender?.(row)}
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          {totalPages && totalPages > 1 && (
            <div className="flex flex-col gap-3 border-t border-brand-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-sm text-zinc-600">
                Showing {startEntry} to {endEntry} of {total || data.length}{" "}
                entries
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={(currentPage ?? 1) <= 1}
                  onClick={onPrevious}
                  className="rounded-lg border border-brand-line px-4 py-2 text-sm font-medium bg-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous
                </button>

                <button
                  type="button"
                  disabled={(currentPage ?? 1) >= (totalPages ?? 1)}
                  onClick={onNext}
                  className="rounded-lg border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
