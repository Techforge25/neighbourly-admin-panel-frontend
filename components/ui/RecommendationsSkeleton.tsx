export default function RecommendationsSkeleton() {
     return (
          <>
               {[...Array(6)].map((_, index) => (
                    <tr
                         key={index}
                         className="animate-pulse border-t border-gray-100"
                    >
                         {/* Person + Business */}
                         <td className="px-6 py-5">
                              <div className="h-5 w-36 rounded-md bg-gray-300" />

                              <div className="mt-2 h-4 w-28 rounded-md bg-gray-200" />
                         </td>

                         {/* Trade Category */}
                         <td className="px-6 py-5">
                              <div className="h-5 w-24 rounded-md bg-gray-300" />
                         </td>

                         {/* Trusted In */}
                         <td className="px-6 py-5">
                              <div className="space-y-2">
                                   <div className="h-4 w-24 rounded-md bg-gray-200" />
                                   <div className="h-4 w-32 rounded-md bg-gray-200" />
                              </div>
                         </td>

                         {/* Trust Points */}
                         <td className="px-6 py-5">
                              <div className="h-5 w-52 rounded-md bg-gray-200" />
                         </td>

                         {/* Total Recommendations */}
                         <td className="px-6 py-5">
                              <div className="h-5 w-12 rounded-md bg-gray-300" />
                         </td>

                         {/* Action Button */}
                         <td className="px-6 py-5">
                              <div className="flex justify-center">
                                   <div className="h-8 w-8 rounded-full bg-gray-300" />
                              </div>
                         </td>
                    </tr>
               ))}
          </>
     );
}