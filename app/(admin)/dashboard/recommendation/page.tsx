"use client";

import FiltersBar from "@/components/recommendation/FiltersBar";
import Pagination from "@/components/recommendation/Pagination";
import RecommendationCard from "@/components/recommendation/RecommendationCard";
import RecommendationsTable from "@/components/recommendation/RecommendationsTable";
import { queryKeys } from "@/keys";
import { fetchBusinesses } from "@/services/recommendations";
import { Recommendation } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function RecommendationPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSuburb, setSelectedSuburb] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: fetchBusinessesList,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: [
      queryKeys.fetchBusinesses,
      currentPage,
      selectedCategory,
      selectedSuburb,
      search,
    ],

    queryFn: () =>
      fetchBusinesses(
        currentPage,
        selectedCategory === "All" ? "" : selectedCategory,
        selectedSuburb === "All" ? "" : selectedSuburb,
        search
      ),

    placeholderData: (previousData) => previousData,
  });

  const businessList = fetchBusinessesList?.data?.docs || [];

  const totalPages = fetchBusinessesList?.data?.totalPages || 1;

  const page = fetchBusinessesList?.data?.page || 1;

  return (
    <>
      {/* HEADER */}

      <div className="px-10 py-2">
        <h1 className="text-4xl font-semibold text-gray-900">
          Businesses
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Manage Businesses Records.
        </p>
      </div>

      <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-8">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* FILTERS */}

          <FiltersBar
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSuburb={selectedSuburb}
            setSelectedSuburb={setSelectedSuburb}
          />

          {/* DESKTOP TABLE */}

          <RecommendationsTable
            data={businessList}
            isLoading={isLoading || isPending}
          />

          {/* MOBILE CARDS */}

          <div className="grid gap-4 p-4 lg:hidden">
            {businessList?.map((item: Recommendation) => (
              <RecommendationCard
                key={item?.businessName}
                item={item}
              />
            ))}
          </div>

          {/* PAGINATION */}

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}