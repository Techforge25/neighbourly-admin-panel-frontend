"use client";
import { Sponsorship } from "@/types";
import { useMemo, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import { LuPlus } from "react-icons/lu";
import SponsorshipTable from "./SponsorshipTable";
import { suburbs } from "@/constants/constants";
import { useRouter } from "next/navigation";

// Mock data — replace with API call
const mockData: Sponsorship[] = [
  {
    id: "1",
    sponsorName: "Sally",
    businessName: "Sandcastle Finance",
    category: "mortgage-broker",
    suburb: "Curl Curl",
  },
  {
    id: "2",
    sponsorName: "Sally",
    businessName: "Sandcastle Finance",
    category: "real-estate-agent",
    suburb: "Curl Curl",
  },
  {
    id: "3",
    sponsorName: "Sally",
    businessName: "Sandcastle Finance",
    category: "conveyancer",
    suburb: "Curl Curl",
  },
];

export default function SponsorshipListPage() {
  const [selectedSuburb, setSelectedSuburb] = useState<string>("All");
  const router = useRouter();

  // Filter logic
  const filteredData = useMemo(() => {
    if (selectedSuburb === "All") return mockData;
    return mockData.filter((row) => row.suburb === selectedSuburb);
  }, [selectedSuburb]);

  const handleAddSponsorship = () => {
    console.log("Navigate to Add Sponsorship page");
    router.push("/sponsorship/new");
  };

  const handleEdit = (row: Sponsorship) => {
    console.log("Edit:", row);
  };

  const handleDelete = (row: Sponsorship) => {
    console.log("Delete:", row);
    // open ConfirmDeleteModal here (from earlier!)
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary">
              Sponsorship
            </h1>
            <p className="mt-1 text-sm text-text-para">
              Manage your active sponsors and partnerships
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FilterDropdown
              label="Filter By Suburb"
              value={selectedSuburb}
              options={suburbs}
              onChange={setSelectedSuburb}
            />
            <button
              type="button"
              onClick={handleAddSponsorship}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-bg-primary px-5 py-2.5 text-sm font-medium text-surface hover:bg-bg-primary/90 transition"
            >
              Add Sponsorship <LuPlus size={16} />
            </button>
          </div>
        </div>

        {/* Table */}
        <SponsorshipTable
          data={filteredData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
