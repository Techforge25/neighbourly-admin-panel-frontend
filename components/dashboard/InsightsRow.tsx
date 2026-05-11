import {
  getColorTheme,
  recentRecommendations,
  topRecommenders,
} from "@/helpers/constants";
import { get } from "http";
import { HiEye } from "react-icons/hi";

export function InsightsRow() {
  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
      <div className="rounded-2xl border border-border-primary bg-surface p-5 shadow-card sm:p-6">
        <h2 className="font-manrope font-bold text-text-primary text-[1.25rem]">
          Top Recommender By Category
        </h2>
        <hr className="my-5 border-border-primary" />
        <ul className="flex flex-col gap-4">
          {topRecommenders.map((r) => (
            <li
              key={`${r.name}-${r.trade}`}
              className={`flex flex-col p-[1rem] gap-4 rounded-xl border ${getColorTheme(r.trade, "border")} sm:flex-row  sm:items-center sm:justify-between`}
            >
              <div>
                <p className="flex flex-wrap items-center gap-2 font-medium text-brand-navy">
                  <span className="font-manrope font-bold text-[1.5rem]">
                    {r.name}
                  </span>
                  <span
                    className={`border ${getColorTheme(r.trade, "border")} rounded-[0.375rem] px-[7px] py-[5px] font-poppins font-normal text-[0.75rem] capitalize tracking-wide`}
                  >
                    {r.trade}
                  </span>
                </p>
                <p className="mt-2 font-poppins text-[1rem] text-text-para">{r.workplace}</p>
              </div>
              <p className="shrink-0 bg-surface-muted px-[0.5rem] rounded-[0.375rem] ">
                <span className="font-poppins font-semibold text-[1.125rem] text-text-para">
                  {r.count}
                </span>
                <span className="bg-text-para h-[10px] w-[10px] rounded-full inline-block mx-1 " />
                <span>recommendation</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border-primary bg-surface p-5 shadow-card sm:p-6">
        <h2 className="font-manrope font-bold text-text-primary text-[1.25rem]">
          Recent Recommendations to review
        </h2>
        <hr className="my-5 border-border-primary" />
        <ul className="flex flex-col gap-3">
          {recentRecommendations.map((item, i) => (
            <li
              key={`${item.business}-${i}`}
              className="flex items-start justify-between gap-3 rounded-xl border border-brand-line/80 px-3 py-3 sm:px-4"
            >
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-navy">
                  <span>{item.business}</span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">
                    {item.suburb}
                  </span>
                </p>
                <p className="mt-1 text-sm text-zinc-600">{item.blurb}</p>
              </div>
              <button
                type="button"
                className="inline-flex shrink-0 rounded-lg p-2 text-brand-coral hover:bg-brand-coral-soft"
                aria-label={`Preview recommendation for ${item.business}`}
              >
                <HiEye className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
