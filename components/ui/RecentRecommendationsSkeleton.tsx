export default function RecentRecommendationsSkeleton() {
     return (
          <ul className="flex flex-col gap-3">
               {[...Array(6)].map((_, i) => (
                    <li
                         key={i}
                         className="flex animate-pulse items-center justify-between gap-3 rounded-[0.75rem] bg-surface-muted px-[1rem] py-[0.75rem]"
                    >
                         <div className="min-w-0 flex-1">
                              {/* Title + Badge */}
                              <div className="flex flex-wrap items-center gap-2">
                                   <div className="h-5 w-40 rounded-md bg-gray-300" />

                                   <div className="h-7 w-20 rounded-[0.375rem] bg-gray-300" />
                              </div>

                              {/* Response Text */}
                              <div className="mt-3 h-4 w-64 rounded-md bg-gray-300" />
                         </div>

                         {/* Eye Button */}
                         <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-300" />
                    </li>
               ))}
          </ul>
     )
}