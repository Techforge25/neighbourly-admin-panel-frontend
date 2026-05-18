export default function RecommendationReviewCardSkeleton() {
     return (
          <section className="mb-4 animate-pulse rounded-xl border border-border-primary bg-surface p-5">
               <div className="rounded-lg bg-surface-muted-primary p-[1rem]">
                    {/* Header */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                         {/* Left */}
                         <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                   {/* Name */}
                                   <div className="h-5 w-40 rounded-md bg-gray-300" />

                                   {/* Address pill */}
                                   <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2">
                                        <div className="h-4 w-4 rounded-full bg-gray-300" />
                                        <div className="h-4 w-24 rounded bg-gray-200" />
                                   </div>
                              </div>

                              {/* Email */}
                              <div className="mt-3 h-4 w-64 rounded-md bg-gray-200" />
                         </div>

                         {/* Right */}
                         <div className="h-4 w-20 rounded-md bg-gray-200" />
                    </div>

                    {/* Review Box */}
                    <div className="mt-5 rounded-[14px] bg-surface-muted-secondary p-[0.75rem] shadow">
                         <div className="space-y-3">
                              <div className="h-4 w-full rounded bg-gray-200" />
                              <div className="h-4 w-11/12 rounded bg-gray-200" />
                              <div className="h-4 w-8/12 rounded bg-gray-200" />
                         </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                         {[...Array(4)].map((_, i) => (
                              <div
                                   key={i}
                                   className="h-9 w-28 rounded-full bg-gray-300"
                              />
                         ))}
                    </div>
               </div>
          </section>
     );
}