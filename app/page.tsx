import { AdminShell } from "@/components/admin/AdminShell";
import { InsightsRow } from "@/components/dashboard/InsightsRow";
import { KpiGrid } from "@/components/dashboard/KpiGrid";

export default function Home() {
  return (
    <AdminShell
      headerTitle="Dashboard Overview"
      headerDate="Tuesday, May 5, 2026"
      userName="John Alex"
      userRole="Admin"
    >
      <KpiGrid />
      <InsightsRow />
    </AdminShell>
  );
}
