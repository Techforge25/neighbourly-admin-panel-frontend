import { DashboardStats } from "@/types";

export default function KPIStats(stats: DashboardStats) {
     return [
          {
               value: stats?.totalPendingRecommendations || "0",
               label: "Pending recommendation approval",
               icon: "/icons/dotIcon.svg",
               bgColor: "bg-bg-primary",
          },
          {
               value: stats?.totalSponsors || "0",
               label: "Active sponsor",
               icon: "/icons/squareIcon.svg",
               bgColor: "bg-bg-secondary",
          },
          {
               value: stats?.totalRecommendations || "0",
               label: "Total recommendation",
               icon: "/icons/thumbIcon.svg",
               bgColor: "bg-bg-green",
          },
     ]
}