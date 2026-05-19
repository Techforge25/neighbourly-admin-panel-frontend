"use client";
import { Sponsorship } from "@/types";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import { LuPlus } from "react-icons/lu";
import SponsorshipTable from "./SponsorshipTable";
import { suburbs } from "@/constants/constants";
import { useRouter } from "next/navigation";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/keys";
import { deleteSponsor, getSponsors } from "@/services/sponsor";

export default function SponsorshipListPage() {
  const [selectedSuburb, setSelectedSuburb] = useState<string>("Select Suburb");
  const router = useRouter();
  const queryClient = useQueryClient()

  const {
    data: sponsors,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [queryKeys.sponsor, selectedSuburb],
    queryFn: ({ pageParam = 1 }) =>
      getSponsors(selectedSuburb === 'Select Suburb' ? '' : selectedSuburb, pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      return lastPage?.data?.hasNextPage
        ? lastPage.data.page + 1
        : undefined;
    },
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
    console.log("Edit:", row);
    router.push(`/dashboard/sponsorship/${row._id}`);
  };

  const handleDelete = (row: Sponsorship) => {
    mutate(row?._id)
  }

  const sponsorshipList =
    sponsors?.pages?.flatMap((page) => page?.data?.docs || []) || [];

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

        {/* Table */}
        <SponsorshipTable
          data={sponsorshipList}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading || isPending}
        />
      </div>
    </div>
  );
}
