"use client";

import BackPage from "@/components/recommendationDetail/BackPage";
import RecommendationReviewCard from "@/components/recommendationDetail/RecommendationReviewCard";
import { queryKeys } from "@/keys";
import { viewBusiness } from "@/services/recommendations";
import { RecommendationsBusiness } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";

export default function Page() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter()
  const { data: viewBusinessRecommendations, isPending, isLoading } = useQuery({
    queryKey: [queryKeys.fetchSingleBusiness, id],
    queryFn: () => viewBusiness(id)
  })

  const recommendations = viewBusinessRecommendations?.data?.recommendations
  const businessInfo = viewBusinessRecommendations?.data?.business

  return (
    <>
      <button
        onClick={() => {
          router.back();
        }}
        className="flex items-center gap-[0.625rem] cursor-pointer pb-2"
      >
        <span>
          <IoArrowBackSharp size={16} className="text-text-primary" />
        </span>
        <span className="text-text-primary font-inter text-[0.875rem]">
          Back
        </span>
      </button>
      {recommendations?.length === 0 ? (
        <div className="bg-surface rounded-3xl border border-border/50 overflow-hidden">
          <div className="px-5 pt-5 pb-3">
            <h2 className="text-3xl font-semibold">What Neighbour Says</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              No recommendations yet for this business.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8M8 14h5m-9 7 1.5-4.5A9 9 0 1 1 21 12a9 9 0 0 1-9 9H4Z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold">
              Be the first to leave a recommendation
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Share your experience with this business and help your neighbours
              discover trusted local services.
            </p>

            <button className="mt-6 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Write a Recommendation
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-surface rounded-3xl">
          <h2 className="pl-5 pt-5 pb-2 text-3xl font-semibold">
            What Neighbour Says
          </h2>

          {recommendations?.map(
            (item: RecommendationsBusiness, index: number) => (
              <div key={index} className="px-5 py-3">
                <RecommendationReviewCard
                  item={item}
                  isLoading={isPending || isLoading}
                />
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}