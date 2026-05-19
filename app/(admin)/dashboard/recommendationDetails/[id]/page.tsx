"use client";

import BackPage from "@/components/recommendationDetail/BackPage";
import RecommendationReviewCard from "@/components/recommendationDetail/RecommendationReviewCard";
import { queryKeys } from "@/keys";
import { viewBusiness } from "@/services/recommendations";
import { RecommendationsBusiness } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params?.id as string;
  const { data: viewBusinessRecommendations, isPending, isLoading } = useQuery({
    queryKey: [queryKeys.fetchSingleBusiness],
    queryFn: () => viewBusiness(id)
  })

  console.log(viewBusinessRecommendations, 'business recommendations')

  const recommendations = viewBusinessRecommendations?.data?.recommendations
  const businessInfo = viewBusinessRecommendations?.data?.business

  return (
    <>
      <BackPage
        tradie={businessInfo?.personName || ""}
        trade={businessInfo?.serviceType || ""}
        business={businessInfo?.businessName || ""}
      />


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