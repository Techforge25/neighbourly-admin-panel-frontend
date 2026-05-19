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
    queryKey: [queryKeys.fetchSingleBusiness],
    queryFn: () => viewBusiness(id)
  })

  console.log(viewBusinessRecommendations, 'business recommendations')

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
      <div className="bg-surface">
        <h2 className="pl-5 pt-5 pb-2 text-3xl font-semibold">What Neighbour Says</h2>
        {recommendations?.map((item: RecommendationsBusiness, index: number) => (
          <div className="px-5 py-3">
            <RecommendationReviewCard
              key={index}
              item={item}
              isLoading={isPending || isLoading}
            />
          </div>
        ))}
      </div>
    </>
  );
}