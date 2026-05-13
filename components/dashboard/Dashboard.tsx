"use client";
import { recommendationTableColumns } from "@/helpers";
import { RecommendationRow } from "@/types";
import { KpiGrid } from "./KpiGrid";
import { InsightsRow } from "./InsightsRow";
import { RecommendationsTable } from "./RecommendationsTable";
import { recommendationRows } from "@/constants/constants";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleDetailsClick = (row: RecommendationRow) => {
    router.push(`/recommendationDetails/${row.id}`);
    console.log("DETAIL ROW =>", row);
  };

  const handleApproveClick = (row: RecommendationRow) => {
    console.log("APPROVE ROW =>", row);
  };

  const handleRejectClick = (row: RecommendationRow) => {
    console.log("REJECT ROW =>", row);
  };

  const columns = recommendationTableColumns({
    onDetailsClick: handleDetailsClick,
    onApproveClick: handleApproveClick,
    onRejectClick: handleRejectClick,
  });

  return (
    <>
      <KpiGrid />
      <InsightsRow />
      <RecommendationsTable columns={columns} data={recommendationRows} />
    </>
  );
};

export default Dashboard;
