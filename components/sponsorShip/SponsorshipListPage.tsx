"use client";
import { CATEGORY_META, ConfirmDeleteModalRef, Sponsorship } from "@/types";
import { useMemo, useRef, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import { LuPlus } from "react-icons/lu";
import SponsorshipTable from "./SponsorshipTable";
import { suburbs } from "@/constants/constants";
import { useRouter } from "next/navigation";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";

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
  const [pendingDelete, setPendingDelete] = useState<Sponsorship | null>(null);
  const deleteModalRef = useRef<ConfirmDeleteModalRef>(null);
  const router = useRouter();

  // Filter logic
  const filteredData = useMemo(() => {
    if (selectedSuburb === "All") return mockData;
    return mockData.filter((row) => row.suburb === selectedSuburb);
  }, [selectedSuburb]);

  const handleAddSponsorship = () => {
    router.push("/sponsorship/new");
  };

  const handleEdit = (row: Sponsorship) => {
    console.log("Edit:", row);
    router.push(`/sponsorship/edit/${row.id}`);
  };

  // 🔑 Step 1: Store row + open modal
  const handleDelete = (row: Sponsorship) => {
    setPendingDelete(row);
    deleteModalRef.current?.open();
  };

  // 🔑 Step 2: Modal calls this with the data back
  const confirmDelete = (row: Sponsorship) => {
    console.log("✅ Deleted:", row);
    // your API call here:
    // await deleteSponsorshipApi(row.id);
    setPendingDelete(null);
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
      <ConfirmDeleteModal<Sponsorship>
        ref={deleteModalRef}
        data={pendingDelete}
        title="Delete Active Sponsor?"
        description={
          pendingDelete && (
            <>
              Are you sure you want to delete this sponsorship? This will
              immediately remove{" "}
              <span className="font-semibold text-text-primary">
                {pendingDelete.sponsorName}
              </span>{" "}
              from the{" "}
              <span
                className="font-semibold"
                style={{
                  color: CATEGORY_META[pendingDelete.category].color,
                }}
              >
                "{CATEGORY_META[pendingDelete.category].label}"
              </span>{" "}
              category in{" "}
              <span className="font-semibold text-text-primary">
                {pendingDelete.businessName}
              </span>
              .
            </>
          )
        }
        warningText="This action cannot be undone."
        confirmLabel="Delete sponsorship"
        cancelLabel="Cancel"
        onConfirm={confirmDelete}
      />
    </div>
  );
}
