import { getSponsorshipColumns } from "@/helpers";
import { Sponsorship } from "@/types";
import RecommendationsSkeleton from "../ui/RecommendationsSkeleton";

type Props = {
  data: Sponsorship[];
  onEdit: (row: Sponsorship) => void;
  onDelete: (row: Sponsorship) => void
  isLoading: boolean;
};

export default function SponsorshipTable({ data, onEdit, onDelete, isLoading }: Props) {
  const columns = getSponsorshipColumns({ onEdit, onDelete });
   if (!isLoading && data.length === 0) {
    return (
      <div className="rounded-xl border border-border-secondary bg-white px-6 py-10 text-center text-sm text-text-para">
        No sponsorships found
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border border-border-secondary bg-white lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border-secondary bg-surface-muted-primary">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    style={{ width: col.width }}
                    className="px-6 py-3 text-left text-sm font-semibold text-text-primary"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <RecommendationsSkeleton />
              ) : (
                data.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border-secondary/50 last:border-0 hover:bg-surface-muted/40"
                  >
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4 text-sm">
                        {col.render(row)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:hidden">
        {data.map((row) => (
          <div
            key={row._id}
            className="rounded-xl border border-border-secondary bg-white p-4"
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className="flex items-start justify-between gap-3 border-b border-border-secondary/50 py-2.5 first:pt-0 last:border-0 last:pb-0"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-black font-bold">
                  {col.header}
                </span>
                <div className="text-right text-sm">{col.render(row)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
