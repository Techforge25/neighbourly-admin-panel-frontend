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

  const recommendations = viewBusinessRecommendations?.data?.recommendations

  return (
    <>
      {/* <BackPage
        tradie={recommendationByID?.tradie || ""}
        trade={recommendationByID?.trade || ""}
        business={recommendationByID?.business || ""}
      /> */}

      {recommendations?.map((item: RecommendationsBusiness, index: number) => (
        <RecommendationReviewCard
          key={index}
          item={item}
          isLoading={isPending || isLoading}
        />
      ))}
    </>
  );
}