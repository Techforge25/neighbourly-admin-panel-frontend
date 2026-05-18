export default function SkeletonStats() {
     return (
          <section
               className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
               aria-label="Loading metrics"
          >
               {[...Array(3)].map((_, index) => (
                    <div
                         key={index}
                         className="flex animate-pulse flex-col gap-8 rounded-2xl bg-gray-200 p-[1.5rem]"
                    >
                         <div className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-xl bg-gray-300" />
                         <div className="space-y-3">
                              <div className="h-8 w-24 rounded-md bg-gray-300" />
                              <div className="h-4 w-32 rounded-md bg-gray-300" />
                         </div>
                    </div>
               ))}
          </section>
     )
}