"use client";
import { AdminShell } from "@/components/admin/AdminShell";
import FiltersBar from "@/components/recommendation/FiltersBar";
import Pagination from "@/components/recommendation/Pagination";
import RecommendationCard from "@/components/recommendation/RecommendationCard";
import RecommendationsTable from "@/components/recommendation/RecommendationsTable";
import { recommendationsData } from "@/constants/constants";
import { useMemo, useState } from "react";

export default function RecommendationPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSuburb, setSelectedSuburb] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const filteredData = useMemo(() => {
    return recommendationsData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.company.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesSuburb =
        selectedSuburb === "All" || item.trustedIn.includes(selectedSuburb);

      return matchesSearch && matchesCategory && matchesSuburb;
    });
  }, [search, selectedCategory, selectedSuburb]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  return (
    <>
      {/* HEADER */}

      <div className="px-10 py-5">
        <h1 className="text-2xl font-semibold text-gray-900">
          Recommendations
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and moderate user submitted trade recommendations.
        </p>
      </div>
      <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-8">
        <div className=" overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* FILTERS */}

          <FiltersBar
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSuburb={selectedSuburb}
            setSelesectedSuburb={setSelectedSuburb}
          />

          {/* DESKTOP TABLE */}

          <RecommendationsTable data={paginatedData} />

          {/* MOBILE CARDS */}

          <div className="grid gap-4 p-4 lg:hidden">
            {paginatedData.map((item) => (
              <RecommendationCard key={item.id} item={item} />
            ))}
          </div>

          {/* PAGINATION */}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
