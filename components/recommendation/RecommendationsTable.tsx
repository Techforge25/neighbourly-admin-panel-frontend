"use client";
import { ConfirmDeleteModalRef, Recommendation } from "@/types";
import { IoEye } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";
import TableHeader from "./TableHeader";
import { getColorThemeText } from "@/constants/constants";
import { useRef } from "react";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";

interface Props {
  data: Recommendation[];
}

export default function RecommendationsTable({ data }: Props) {
  const modalRef = useRef<ConfirmDeleteModalRef>(null);

  const handleDelete = () => {
    console.log("Sponsorship deleted!");
    // your delete API call here
  };

  console.log("RECOMMENDATION DATA =>", data);

  return (
    <div className="hidden overflow-x-auto lg:block">
      <table className="w-full min-w-[1100px]">
        <TableHeader />
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-100 hover:bg-gray-50"
            >
              <td className="px-6 py-5">
                <h3 className="font-semibold font-hankenGrotesk text-[1rem] text-text-primary ">
                  {item.name}
                </h3>
                <p className="font-poppins text-[0.875rem] text-text-para ">
                  {item.company}
                </p>
              </td>

              <td className="px-6 py-5 font-bold font-manrope text-[1rem] ">
                <span
                  className={`${getColorThemeText(item.category)} capitalize `}
                >
                  {item.category}
                </span>
              </td>

              <td className="px-6 py-5 font-poppins text-[1rem] font-normal text-text-para">
                {item.trustedIn}
              </td>

              <td className="px-6 py-5 text-sm font-poppins text-[0.875rem] font-normal text-text-para">
                {item.trustPoints.join(" - ")}
              </td>

              <td className="px-6 py-5 text-start font-hankenGrotesk font-semibold text-[1rem] text-text-primary">
                {item.recommendations}
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-4">
                  <button className="text-gray-500 hover:text-blue-600">
                    <IoEye size={18} />
                  </button>

                  <button onClick={() => modalRef.current?.open()} className="text-red-500 hover:text-red-700">
                    <LuTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <ConfirmDeleteModal ref={modalRef} onConfirm={handleDelete} />
    </div>
  );
}
