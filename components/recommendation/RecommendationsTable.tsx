"use client";
import { ConfirmDeleteModalRef, Recommendation } from "@/types";
import { IoEye } from "react-icons/io5";
import TableHeader from "./TableHeader";
import { getColorThemeText } from "@/constants/constants";
import { useRef } from "react";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";
import { useRouter } from "next/navigation";
import RecommendationsSkeleton from "../ui/RecommendationsSkeleton";

interface Props {
  data: Recommendation[];
  isLoading: boolean
}

export default function RecommendationsTable({ data, isLoading }: Props) {
  const router = useRouter();

  return (
    <div className="hidden overflow-x-auto lg:block">
      <table className="w-full min-w-[1100px]">
        <TableHeader />
        <tbody>
          {isLoading ? (
            <RecommendationsSkeleton />
          ) : data?.length ? (
            <>
              {data.map((item, index) => (
                <tr
                  key={item._id || index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-5">
                    <h3 className="font-semibold font-hankenGrotesk text-[1rem] text-text-primary">
                      {item.personName}
                    </h3>
                    <p className="font-poppins text-[0.875rem] text-text-para">
                      {item.businessName}
                    </p>
                  </td>

                  <td className="px-6 py-5 font-bold font-manrope text-[1rem]">
                    <span className={`${getColorThemeText(item.tradeCategory)} capitalize`}>
                      {item.tradeCategory}
                    </span>
                  </td>

                  <td className="px-6 py-5 font-poppins text-[1rem] font-normal text-text-para">
                    {item?.trustedIn?.slice(0, 3)?.map((trust: string, i: number) => (
                      <p key={i}>{trust}</p>
                    ))}
                  </td>

                  <td className="px-6 py-5 text-sm font-poppins text-[0.875rem] font-normal text-text-para">
                    {item.trustPoints.slice(0, 3).join(" - ")}
                  </td>

                  <td className="px-6 py-5 text-start font-hankenGrotesk font-semibold text-[1rem] text-text-primary">
                    {item.totalRecommendations}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/recommendationDetails/${item._id}`)
                        }
                        className="text-text-para cursor-pointer"
                      >
                        <IoEye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-10 text-gray-400">
                No Businesses found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
