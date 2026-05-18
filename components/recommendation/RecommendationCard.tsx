"use client";
import { getColorThemeText } from "@/constants/constants";
import { ConfirmDeleteModalRef, Recommendation } from "@/types";
import { useRef } from "react";
import { IoEye } from "react-icons/io5";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";
import { useRouter } from "next/navigation";

interface Props {
  item: Recommendation;
}

export default function RecommendationCard({ item }: Props) {
  const modalRef = useRef<ConfirmDeleteModalRef>(null);
  const router = useRouter();
  const handleDelete = () => {
    console.log("Sponsorship deleted!");
    // your delete API call here
  };
  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-semibold font-hankenGrotesk text-[1rem] text-text-primary">
              {item.personName}
            </h2>
            <p className="font-poppins text-[0.875rem] text-text-para">
              {item.businessName}
            </p>
          </div>

          <span
            className={`font-bold font-manrope text-[1rem] capitalize ${getColorThemeText(item.tradeCategory)}`}
          >
            {item.tradeCategory}
          </span>
        </div>

        <div className="mt-4 space-y-2 font-poppins text-[1rem] font-normal text-text-para">
          <span className="font-medium">Trusted In:</span>
          <div className="flex items-center gap-2">
            {item?.trustedIn?.map((trust, index) => {
              return (
                <span key={index}>
                  {trust}
                </span>
              )
            })}
          </div>

          <p>
            <span className="font-medium">Trust Points:</span>{" "}
            {item.trustPoints.slice(0, 3).join(" • ")}
          </p>

          <p>
            <span className="font-medium">Recommendations:</span>{" "}
            {item.totalRecommendations}
          </p>
        </div>

        <div className="mt-4 flex justify-end gap-4 border-t pt-4">
          <button
            onClick={() => router.push(`/dashboard/recommendationDetails/${item._id}`)}
            className="text-text-para cursor-pointer "
          >
            <IoEye size={18} />
          </button>
        </div>
      </div>
      <ConfirmDeleteModal data={item} ref={modalRef} onConfirm={handleDelete} />
    </>
  );
}
