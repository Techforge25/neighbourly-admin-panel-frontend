"use client";
import { Sponsorship } from "@/types";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import { LuPlus } from "react-icons/lu";
import SponsorshipTable from "./SponsorshipTable";
import { suburbs } from "@/constants/constants";
import { useRouter } from "next/navigation";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/keys";
import { deleteSponsor, getSponsors } from "@/services/sponsor";
import ExportButtons from "../recommendation/ExportButtons";
import Pagination from "../recommendation/Pagination";

export default function SponsorshipListPage() {
  const [selectedSuburb, setSelectedSuburb] = useState<string>("Select Suburb");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const queryClient = useQueryClient()

  const {
    data: sponsors,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: [queryKeys.sponsor, selectedSuburb, currentPage],

    queryFn: () =>
      getSponsors(
        selectedSuburb === "Select Suburb" ? "" : selectedSuburb,
        currentPage
      ),
  });

  const { mutate } =
    useMutation({
      mutationFn: (id: string) => deleteSponsor(id),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sponsor],
        });
      },

      onError: (error) => {
        console.error("Update failed:", error);
      },
    });

  const handleAddSponsorship = () => {
    router.push("/dashboard/sponsorship/new");
  };

  const handleEdit = (row: Sponsorship) => {
    router.push(`/dashboard/sponsorship/${row._id}`);
  };

  const handleDelete = (row: Sponsorship) => {
    mutate(row?._id)
  }

  const sponsorshipList = sponsors?.data?.docs || [];
  const totalPages = sponsors?.data?.totalPages || 1;
  const page = sponsors?.data?.page || 1;

  return (
    <div className="min-h-screen  px-6 py-2">
      <div className="">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-text-primary">
              Sponsorship
            </h1>
            <p className="mt-3 text-sm text-text-para">
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
        <div className="flex justify-end mb-5">
          <ExportButtons list={sponsorshipList} route='Sponsor' />
        </div>

        {/* Table */}
        <SponsorshipTable
          data={sponsorshipList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading || isPending}
        />

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
