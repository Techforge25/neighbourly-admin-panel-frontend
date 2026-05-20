export default function TableHeader() {
  return (
    <thead className="bg-foreground">
      <tr className="text-left font-poppins text-[0.875rem] font-medium text-text-primary uppercase tracking-wide">
        <th className="px-6 py-4 w-[20]">Tradie/Business Name</th>
        <th className="px-6 py-4">Trade Category</th>
        <th className="px-6 py-4">Trusted In</th>
        <th className="px-6 py-4">Trust Points</th>
        <th className="px-6 py-4 text-start w-[20]">
          Number Of Local Recommendations
        </th>
        <th className="px-6 py-4 text-center">Action</th>
      </tr>
    </thead>
  );
}
