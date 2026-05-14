import { recommendationRows } from "@/constants/constants";
import { Props, RecommendationRow, TableColumn } from "@/types";
import { LuChevronDown, LuFilter, LuSearch } from "react-icons/lu";
import SearchFilterBar from "./SearchFilterBar";

export function RecommendationsTable<T>({
  columns,
  data,
  total,
  currentPage,
  pageSize,
  onNext,
  onPrevious,
}: Props<T>) {
  return (
    <section className="mt-10">
      <div className="">
        <h2 className="font-manrope font-bold text-[1.625rem] text-text-primary">
          Recommendations request
        </h2>
        <p className="mt-1 font-poppins text-text-para text-[1rem]  ">
          Manage and moderate user submitted tradie recommendations.
        </p>
      </div>

      <SearchFilterBar />

      {/* Desktop table */}
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
              {data.map((row, rowIndex) => (
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
          {data.map((row, idx) => (
            <li key={idx} className="px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-2">
                {/* Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  {columns
                    .find((col) => col.key === "tradieInfo")
                    ?.mobileRender?.(row)}

                  {columns
                    .find((col) => col.key === "trade")
                    ?.mobileRender?.(row)}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600">
                  {columns
                    .find((col) => col.key === "suburb")
                    ?.mobileRender?.(row)}

                  {columns
                    .find((col) => col.key === "submitted")
                    ?.mobileRender?.(row)}
                </div>

                {/* Trust */}
                {columns
                  .find((col) => col.key === "trustPoints")
                  ?.mobileRender?.(row)}

                {/* Actions */}
                {columns
                  .find((col) => col.key === "actions")
                  ?.mobileRender?.(row)}
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex flex-col gap-3 border-t border-brand-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-zinc-600">
            Showing 1 to {data.length} of {total || data.length} entries
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrevious}
              className="rounded-lg border border-brand-line px-4 py-2 text-sm font-medium text-zinc-500"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={onNext}
              className="rounded-lg border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm hover:bg-zinc-50"
            >
              Next
            </button>
          </div>
        </div>
      </>
    </section>
  );
}
