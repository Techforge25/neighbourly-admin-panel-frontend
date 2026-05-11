import { kpiStats } from "@/helpers/constants";
import Image from "next/image";

export function KpiGrid() {
  return (
    <section
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      aria-label="Key metrics"
    >
      {kpiStats.map((k) => (
        <div
          key={k.label}
          className={`flex flex-col  gap-8 rounded-2xl ${k.bgColor} p-[1.5rem]`}
        >
          <div className="flex h-[3.125rem] w-[3.125rem] shrink-0 bg-surface items-center justify-center rounded-xl bg-brand-coral-soft">
            <Image src={k.icon} alt={k.label} width={100} height={100} className="h-[1.5rem] w-[1.5rem]" />
          </div>
          <div className="min-w-0">
            <p className="text-surface font-manrope font-bold text-[2rem]">
              {k.value}
            </p>
            <p className="text-surface font-poppins text-[1rem]   ">{k.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
