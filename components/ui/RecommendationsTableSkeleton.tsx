export default function RecommendationsTableSkeleton() {
     return (
          <>
               {/* Desktop Skeleton */}
               <div className="hidden overflow-x-auto lg:block">
                    <table className="w-full min-w-[940px] border-l border-r border-b border-border-primary bg-foreground">
                         <thead>
                              <tr className="border-b border-brand-line bg-zinc-50/80">
                                   {[...Array(6)].map((_, index) => (
                                        <th
                                             key={index}
                                             className="p-[1.25rem]"
                                        >
                                             <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                                        </th>
                                   ))}
                              </tr>
                         </thead>

                         <tbody>
                              {[...Array(6)].map((_, rowIndex) => (
                                   <tr
                                        key={rowIndex}
                                        className="border-b border-border-primary"
                                   >
                                        {/* Business Name */}
                                        <td className="px-6 py-4">
                                             <div className="space-y-2">
                                                  <div className="h-5 w-32 animate-pulse rounded bg-gray-300" />
                                                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                                             </div>
                                        </td>

                                        {/* Trade Category */}
                                        <td className="px-6 py-4">
                                             <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
                                        </td>

                                        {/* Suburb */}
                                        <td className="px-6 py-4">
                                             <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200" />
                                        </td>

                                        {/* Date */}
                                        <td className="px-6 py-4">
                                             <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                                        </td>

                                        {/* Trust Points */}
                                        <td className="px-6 py-4">
                                             <div className="space-y-2">
                                                  <div className="h-4 w-52 animate-pulse rounded bg-gray-200" />
                                                  <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
                                             </div>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4">
                                             <div className="flex gap-2">
                                                  <div className="h-8 w-8 animate-pulse rounded bg-gray-200" />
                                                  <div className="h-8 w-8 animate-pulse rounded bg-gray-200" />
                                                  <div className="h-8 w-8 animate-pulse rounded bg-gray-200" />
                                             </div>
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>

               {/* Mobile Skeleton */}
               <ul className="flex flex-col divide-y divide-brand-line lg:hidden">
                    {[...Array(5)].map((_, idx) => (
                         <li
                              key={idx}
                              className="px-4 py-4 sm:px-6"
                         >
                              <div className="flex animate-pulse flex-col gap-3">
                                   {/* Header */}
                                   <div className="flex items-center justify-between">
                                        <div className="space-y-2">
                                             <div className="h-5 w-32 rounded bg-gray-300" />
                                             <div className="h-4 w-24 rounded bg-gray-200" />
                                        </div>

                                        <div className="h-5 w-20 rounded bg-gray-200" />
                                   </div>

                                   {/* Meta */}
                                   <div className="flex gap-3">
                                        <div className="h-6 w-16 rounded-full bg-gray-200" />
                                        <div className="h-4 w-24 rounded bg-gray-200" />
                                   </div>

                                   {/* Trust */}
                                   <div className="space-y-2">
                                        <div className="h-4 w-full rounded bg-gray-200" />
                                        <div className="h-4 w-3/4 rounded bg-gray-200" />
                                   </div>

                                   {/* Actions */}
                                   <div className="mt-2 flex gap-2">
                                        <div className="h-8 w-8 rounded bg-gray-200" />
                                        <div className="h-8 w-8 rounded bg-gray-200" />
                                        <div className="h-8 w-8 rounded bg-gray-200" />
                                   </div>
                              </div>
                         </li>
                    ))}
               </ul>

               {/* Pagination Skeleton */}
               <div className="flex flex-col gap-3 border-t border-brand-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div className="h-4 w-52 animate-pulse rounded bg-gray-200" />

                    <div className="flex gap-2">
                         <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-200" />
                         <div className="h-10 w-20 animate-pulse rounded-lg bg-gray-200" />
                    </div>
               </div>
          </>
     );
}