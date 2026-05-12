import { PaginationProps } from "@/types";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-200 px-6 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="rounded-lg border cursor-pointer disabled:cursor-not-allowed border-gray-200 px-4 py-2 text-sm disabled:opacity-50"
        >
          Previous
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="rounded-lg border cursor-pointer disabled:cursor-not-allowed border-gray-200 px-4 py-2 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
