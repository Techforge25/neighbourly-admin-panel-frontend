"use client";

import { recommendationTableColumns } from "@/helpers";
import { RecommendationRow } from "@/types";
import { InsightsRow } from "./InsightsRow";
import { RecommendationsTable } from "./RecommendationsTable";
import { useRouter } from "next/navigation";
import { KpiGrid } from "./KpiGrid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/keys";
import { getAllPendingRecommendations, updateRecommendationStatus } from "@/services/dashboard";
import { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSuburb, setSelectedSuburb] = useState("All");
  const queryClient = useQueryClient()

  const { mutate, isPending: pendingUpdateStatus } =
    useMutation({
      mutationFn: ({
        id,
        status,
      }: {
        id: string;
        status: "approved" | "rejected";
      }) => updateRecommendationStatus(id, status),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.allPendingRecommendations],
        });

        queryClient.invalidateQueries({
          queryKey: [queryKeys.dashboardStats],
        });

        queryClient.invalidateQueries({
          queryKey: [queryKeys.topRecommenders],
        });

        queryClient.invalidateQueries({
          queryKey: [queryKeys.recentRecommendations],
        });

      },

      onError: (error) => {
        console.error("Update failed:", error);
      },
    });


  const handleDetailsClick = (row: RecommendationRow) => {
    router.push(`/dashboard/requests/${row._id}`);
  };

  const handleApproveClick = (row: RecommendationRow, status: 'approved') => {
    mutate({
      id: row._id,
      status,
    });

  };

  const handleRejectClick = (row: RecommendationRow, status: 'rejected') => {
    mutate({
      id: row._id,
      status,
    });
  };

  const {
    data: allPendingRecommendations,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: [
      queryKeys.allPendingRecommendations,
      currentPage,
      search,
      selectedCategory,
      selectedSuburb
    ],

    queryFn: () =>
      getAllPendingRecommendations(currentPage, search === '' ? '' : search, selectedCategory === 'All' ? '' : selectedCategory, selectedSuburb === 'All' ? '' : selectedSuburb),

    placeholderData: (previousData) => previousData,
  });

  const columns = recommendationTableColumns({
    onDetailsClick: handleDetailsClick,
    onApproveClick: handleApproveClick,
    onRejectClick: handleRejectClick,
  });

  const recommendationsAll =
    allPendingRecommendations?.data?.docs || [];

  const totalPages =
    allPendingRecommendations?.data?.totalPages || 1;

  const total =
    allPendingRecommendations?.data?.totalDocs || 0;

  return (
    <>
      <KpiGrid />

      <InsightsRow />

      <RecommendationsTable
        columns={columns}
        data={recommendationsAll}
        total={total}
        totalPages={totalPages}
        currentPage={currentPage}
        isLoading={isLoading || isPending}
        search={search}
        setSearch={setSearch}
        selectedSuburb={selectedSuburb}
        setSelectedSuburb={setSelectedSuburb}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onNext={() => {
          if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
          }
        }}
        onPrevious={() => {
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
        }}
      />
    </>
  );
};

export default Dashboard;