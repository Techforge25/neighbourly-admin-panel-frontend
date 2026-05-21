"use client";

import BackPage from "@/components/recommendationDetail/BackPage";
import RecommendationReviewCard from "@/components/recommendationDetail/RecommendationReviewCard";
import { queryKeys } from "@/keys";
import { viewPendingRecommendations } from "@/services/dashboard";
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

     const recommendations =
          viewPendingRecommendation?.data || [];

     const recommendedData = {
          createdAt: recommendations?.createdAt,
          comment: recommendations?.comment,
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
               contact: recommendations?.user?.contact
          },
     };

     return (
          <>
               <BackPage
                    tradie={recommendedData?.business?.personName || ""}
                    trade={recommendedData?.business?.serviceType || ""}
                    business={recommendedData?.business?.businessName || ""}
               />
               <RecommendationReviewCard
                    item={recommendedData}
                    isLoading={isPending || isLoading}
               />
          </>
     );
}