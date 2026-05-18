'use client'
import { getColorThemeBorder, topRecommenders } from "@/constants/constants";
import { queryKeys } from "@/keys";
import { getTopRecommenders } from "@/services/dashboard";
import { TopRecommenders } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function TopRecommenderCategory() {
     const { data: topRecommendations, isPending, isLoading } = useQuery({
          queryKey: [queryKeys.topRecommenders],
          queryFn: () => getTopRecommenders()
     })

     console.log(topRecommendations, 'top recommendations')
     return (
          <div className="rounded-2xl border border-border-primary bg-surface p-5 shadow-card sm:p-6">
               <h2 className="font-manrope font-bold text-text-primary text-[1.25rem]">
                    Top Recommender By Category
               </h2>
               <hr className="my-5 border-border-primary" />
               <ul className="flex flex-col gap-4">
                    {topRecommendations?.data?.map((r: TopRecommenders, index: number) => (
                         <li
                              key={`${r.businessName}-${index}`}
                              className={`flex flex-col p-[1rem] gap-4 rounded-xl border ${getColorThemeBorder(r.serviceType, "mainDiv")} sm:flex-row  sm:items-center sm:justify-between`}
                         >
                              <div>
                                   <p className="flex flex-wrap items-center gap-2 font-medium text-brand-navy">
                                        <span className="font-manrope text-text-secondary font-bold text-[1.5rem]">
                                             {r.personName}
                                        </span>
                                        <span
                                             className={`border ${getColorThemeBorder(r.serviceType, "span")} rounded-[0.375rem] px-[7px] py-[5px] font-poppins font-normal text-[0.75rem] capitalize tracking-wide`}
                                        >
                                             {r.serviceType}
                                        </span>
                                   </p>
                                   <p className="mt-2 font-poppins text-[1rem] text-text-para">
                                        {r.businessName}
                                   </p>
                              </div>
                              <p className="shrink-0 bg-surface-muted px-[0.5rem] rounded-[0.375rem] ">
                                   <span className="font-poppins font-semibold text-[1.125rem] text-text-para">
                                        {r.recommendationCount}
                                   </span>
                                   <span className="bg-text-para h-[5px] w-[5px] rounded-full inline-block mb-0.5 mx-1 " />
                                   <span className="text-text-para font-poppins font-normal text-[0.875rem] ">
                                        Recommendation
                                   </span>
                              </p>
                         </li>
                    ))}
               </ul>
          </div>
     )
}