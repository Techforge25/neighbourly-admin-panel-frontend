import { kpiStats } from "@/constants/constants";
import KPIStats from "@/helpers/dashboard";
import { queryKeys } from "@/keys";
import { getDashboardStats } from "@/services/dashboard";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SkeletonStats from "../ui/StatsSkeleton";

export function KpiGrid() {
  const { data: stats, isLoading } = useQuery({
    queryKey: [queryKeys.dashboardStats],
    queryFn: getDashboardStats,
  });

  const statistics = KPIStats(stats?.data)

  return (
    <>
      {isLoading ? (
        <SkeletonStats />
      ) : (
        <section
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Key metrics"
        >
          {statistics?.map((k) => (
            <div
              key={k.label}
              className={`flex flex-col gap-8 rounded-2xl ${k.bgColor} p-[1.5rem]`}
            >
              <div className="flex h-[3.125rem] w-[3.125rem] shrink-0 items-center justify-center rounded-xl bg-surface">
                <Image
                  src={k.icon}
                  alt={k.label}
                  width={100}
                  height={100}
                  className="h-[1.5rem] w-[1.5rem]"
                />
              </div>

              <div className="min-w-0">
                <p className="font-manrope text-[2rem] font-bold text-surface">
                  {k.value}
                </p>

                <p className="font-poppins text-[1rem] text-surface">
                  {k.label}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
