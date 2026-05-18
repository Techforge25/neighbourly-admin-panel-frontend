export default function TopRecommenderSkeleton() {
     return (
          <ul className="flex flex-col gap-4">
               {[...Array(5)].map((_, index) => (
                    <li
                         key={index}
                         className="flex animate-pulse flex-col gap-4 rounded-xl border border-gray-200 p-[1rem] sm:flex-row sm:items-center sm:justify-between"
                    >
                         <div className="flex-1">
                              {/* Name + Badge */}
                              <div className="flex flex-wrap items-center gap-2">
                                   <div className="h-7 w-40 rounded-md bg-gray-300" />

                                   <div className="h-7 w-24 rounded-[0.375rem] bg-gray-300" />
                              </div>

                              {/* Business Name */}
                              <div className="mt-3 h-4 w-56 rounded-md bg-gray-300" />
                         </div>

                         {/* Recommendation Count */}
                         <div className="h-10 w-36 shrink-0 rounded-[0.375rem] bg-gray-300" />
                    </li>
               ))}
          </ul>
     )
}