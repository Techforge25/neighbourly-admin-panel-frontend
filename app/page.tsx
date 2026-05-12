"use client";
import { AdminShell } from "@/components/admin/AdminShell";
import { InsightsRow } from "@/components/dashboard/InsightsRow";
import { KpiGrid } from "@/components/dashboard/KpiGrid";
import { RecommendationsTable } from "@/components/dashboard/RecommendationsTable";
import { recommendationRows } from "@/constants/constants";
import { recommendationTableColumns } from "@/helpers/index";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleDetailsClick = (row: any) => {
    router.push(`/recommendationDetails/${row.id}`);
    console.log("DETAIL ROW =>", row);
  };

  const handleApproveClick = (row: any) => {
    console.log("APPROVE ROW =>", row);
  };

  const columns = recommendationTableColumns({
    onDetailsClick: handleDetailsClick,
    onApproveClick: handleApproveClick,
  });

  return (
    <AdminShell
      headerTitle="Dashboard Overview"
      headerDate="Tuesday, May 5, 2026"
      userName="John Alex"
      userRole="Admin"
    >
      <KpiGrid />
      <InsightsRow />
      <RecommendationsTable columns={columns} data={recommendationRows} />
    </AdminShell>
  );
}
