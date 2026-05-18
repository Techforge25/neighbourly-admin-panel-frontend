"use client";

import RecommendationReviewCard from "@/components/recommendationDetail/RecommendationReviewCard";
import { queryKeys } from "@/keys";
import { viewPendingRecommendations } from "@/services/dashboard";
import { RecommendationsBusiness } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Page() {
     const params = useParams();

     const id = params?.id as string;

     const {
          data: viewPendingRecommendation,
          isPending,
          isLoading,
     } = useQuery({
          queryKey: [queryKeys.viewPendingRecommendations, id],

          queryFn: () => viewPendingRecommendations(id),

          enabled: !!id,
     });

     console.log(viewPendingRecommendation, "view pending recommendations");

     const recommendations =
          viewPendingRecommendation?.data || [];

     console.log(recommendations, 'recommendations')

     const recommendedData = {
          createdAt: recommendations?.createdAt,
          comment: recommendations?.comments,
          reasonsOfRecommendation: recommendations?.reasonsOfRecommendation,
          business: {
               personName: recommendations?.business?.personName,
               businessName: recommendations?.business?.businessName,
               serviceType: recommendations?.business?.serviceType,
          },
          user: {
               fullName: recommendations?.user?.fullName,
               email: recommendations?.user?.email,
               address: recommendations?.user?.address,
          },
     };

     console.log(recommendedData, 'dataaaaaaa')

     return (
          <>
               <RecommendationReviewCard
                    item={recommendedData}
                    isLoading={isPending || isLoading}
               />
          </>
     );
}