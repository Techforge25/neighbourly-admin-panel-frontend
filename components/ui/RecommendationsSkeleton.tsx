export default function RecommendationsSkeleton() {
     return (
          <>
               {Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-t border-gray-100">
                         <td className="px-6 py-5">
                              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                         </td>

                         <td className="px-6 py-5">
                              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                         </td>

                         <td className="px-6 py-5">
                              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                         </td>

                         <td className="px-6 py-5">
                              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                         </td>

                         <td className="px-6 py-5">
                              <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
                         </td>

                         <td className="px-6 py-5">
                              <div className="h-4 w-10 animate-pulse rounded bg-gray-200" />
                         </td>
                    </tr>
               ))}
          </>
     );
}