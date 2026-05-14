"use client";
import { getColorThemeBorder } from "@/constants/constants";
import { BackPageProps } from "@/types";
import { useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";

const BackPage = ({ tradie, trade, business }: BackPageProps) => {
  const router = useRouter();
  return (
    <div className="">
      {/* back Button */}
      <button
        onClick={() => {
          router.back();
        }}
        className="flex items-center gap-[0.625rem] cursor-pointer"
      >
        <span>
          <IoArrowBackSharp size={16} className="text-text-primary" />
        </span>
        <span className="text-text-primary font-inter text-[0.875rem]">
          Back
        </span>
      </button>

      <div className=" py-[1rem]">
        <div className="flex items-center gap-[0.5rem]">
          <span className="font-manrope font-bold text-[1.625rem] text-text-primary ">
            {tradie}
          </span>
          <span
            className={`border ${getColorThemeBorder(trade)}  py-[0.3125rem] px-[0.4375rem] rounded-[0.375rem] font-poppins text-[0.75rem] font-normal capitalize`}
          >
            {trade}
          </span>
        </div>
        <p>{business}</p>
      </div>
    </div>
  );
};

export default BackPage;
