"use client";

import { RecommendationsBusiness } from "@/types";
import { LuMapPin } from "react-icons/lu";
import moment from "moment";
import RecommendationReviewCardSkeleton from "../ui/RecommendationReviewCardSkeleton";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import { deleteRecommendation } from "@/services/recommendations";
// import { queryKeys } from "@/keys";

type Props = {
  item: RecommendationsBusiness;
  isLoading: boolean;
};

export default function RecommendationReviewCard({
  item,
  isLoading,
}: Props) {
  // const queryClient = useQueryClient();

  // const { mutate, isPending } =
  //   useMutation({
  //     mutationFn: (id: string) => deleteRecommendation(id),
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({
  //         queryKey: [queryKeys.fetchSingleBusiness],
  //       });
  //     },

  //     onError: (error) => {
  //       console.error("Update failed:", error);
  //     },
  //   });

  if (isLoading) {
    return <RecommendationReviewCardSkeleton />;
  }

  // const handleDelete = (id: string) => {
  //   mutate(id)
  // }

  return (
    <section className="mb-4 rounded-xl border border-border-primary bg-surface p-5">
      <div className="rounded-lg bg-surface-muted-primary p-[1rem]">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-manrope text-[1.125rem] font-semibold text-text-primary">
                {item?.user?.fullName}
              </h3>

              {item?.user?.address && (
                <div className="flex items-center gap-1 rounded-full border border-text-para px-[0.6875rem] py-[0.25rem]">
                  <LuMapPin size={18} className="text-text-para" />

                  <span className="font-manrope text-[0.875rem] font-bold text-text-para">
                    {item?.user?.address}
                  </span>
                </div>
              )}
            </div>

            <p className="mt-2 font-poppins text-[0.875rem] font-normal text-text-para">
              {item?.user?.email}
            </p>

            {/* <p
              onClick={() =>
                handleDelete(item?.recommendationId || '')
              }
              className="cursor-pointer font-poppins text-[0.875rem] font-normal text-black"
            >
              {isPending ? "Deleting..." : "Delete"}
            </p> */}

            <p className="mt-2 font-poppins text-[0.875rem] font-normal text-text-para">
              {item?.user?.contact}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-2 sm:items-end">
            {item?.createdAt && (
              <p className="font-poppins text-[0.75rem] text-text-para">
                {moment(item.createdAt).fromNow()}
              </p>
            )}
          </div>
        </div>

        {/* Review Box */}
        {item?.comment && (
          <div className="mt-5 rounded-[14px] bg-surface-muted-secondary p-[0.75rem] font-poppins text-[1rem] font-normal text-text-dark-primary shadow">
            {item?.comment}
          </div>
        )}

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {item?.reasonsOfRecommendation?.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-text-para px-[1rem] py-[0.5rem] font-manrope text-[0.875rem] font-medium text-surface"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}