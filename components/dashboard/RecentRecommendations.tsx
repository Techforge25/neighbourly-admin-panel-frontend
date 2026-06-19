import { queryKeys } from "@/keys";
import { getRecentPendingRecommendations } from "@/services/dashboard";
import { RecommendationRecords } from "@/types";
import { useQuery } from "@tanstack/react-query";
import RecentRecommendationsSkeleton from "../ui/RecentRecommendationsSkeleton";

export default function RecentRecommendations() {
     const { data: recentRecommendation, isLoading, isPending } = useQuery({
          queryKey: [queryKeys.recentRecommendations],
          queryFn: () => getRecentPendingRecommendations()
     })

     return (
       <div className="rounded-2xl border border-border-primary bg-surface p-5 shadow-card sm:p-6">
         <h2 className="font-manrope font-bold text-text-primary text-[1.25rem]">
           Recent Recommendations To Review
         </h2>
         <hr className="my-5 border-border-primary" />
         {isLoading || isPending ? (
           <RecentRecommendationsSkeleton />
         ) : recentRecommendation?.data?.docs?.length === 0 ? (
           <div className="flex min-h-[12rem] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-surface-muted px-6 text-center">
             <h3 className="font-manrope text-[1.25rem] font-bold text-text-primary">
               No Recommendations Yet
             </h3>

             <p className="mt-2 max-w-md font-poppins text-[0.95rem] text-text-para">
               Recent recommendations will appear here once users start
               submitting responses and feedback.
             </p>
           </div>
         ) : (
           <ul className="flex flex-col gap-3">
             {recentRecommendation?.data?.map(
               (item: RecommendationRecords, i: number) => (
                 <li
                   key={`${item?.businessId?._id}-${i}`}
                   className="flex items-center justify-between gap-3 rounded-[0.75rem] bg-surface-muted px-[1rem] py-[0.75rem]"
                 >
                   <div className="min-w-0">
                     <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-navy">
                       <span className="font-manrope text-[1.125rem] font-semibold text-text-primary">
                         {item?.businessId?.businessName}
                       </span>

                       {/* <span
                                                       className={`${getColorThemeBorder(
                                                            item.suburb,
                                                            "span"
                                                       )} rounded-[0.375rem] border px-[7px] py-[5px] font-poppins text-[0.75rem] font-normal capitalize tracking-wide`}
                                                  >
                                                       {item.suburb}
                                                  </span> */}
                     </p>

                     <div className="flex gap-2">
                       <ul className="ml-4 mt-2 list-disc">
                         {item?.reasonsOfRecommendation?.map(
                           (reason: string, index: number) => (
                             <li
                               key={index}
                               className="mt-1 font-poppins text-[1rem] font-normal text-text-para"
                             >
                               {reason}
                             </li>
                           ),
                         )}
                       </ul>
                     </div>
                   </div>

                   {/* <button
                                             type="button"
                                             className="inline-flex shrink-0 cursor-pointer rounded-lg p-2 text-brand-coral hover:bg-brand-coral-soft"
                                             aria-label={`Preview recommendation for ${item.businessId?.businessName}`}
                                        >
                                             <IoEyeOutline className="h-5 w-5 text-text-para" />
                                        </button> */}
                 </li>
               ),
             )}
           </ul>
         )}
       </div>
     );
}