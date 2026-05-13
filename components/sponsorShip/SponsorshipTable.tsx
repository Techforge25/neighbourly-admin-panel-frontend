import { Sponsorshipcolumns } from "@/helpers";
import { Sponsorship } from "@/types";
type Props = {
  data: Sponsorship[];
  onEdit: (row: Sponsorship) => void;
  onDelete: (row: Sponsorship) => void;
};

export default function SponsorshipTable({ data, onEdit, onDelete }: Props) {
  // 🔑 Columns config — add/remove/reorder here

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/50">
            {Sponsorshipcolumns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={Sponsorshipcolumns.length}
                className="px-6 py-10 text-center text-sm text-gray-400"
              >
                No sponsorships found
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50/40"
              >
                {Sponsorshipcolumns.map((col) => (
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
  );
}
