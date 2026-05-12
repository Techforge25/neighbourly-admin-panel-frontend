import { getColorThemeText } from "@/constants/constants";
import { Recommendation } from "@/types";
import { IoEye } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";


interface Props {
  item: Recommendation;
}

export default function RecommendationCard({ item }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-semibold font-hankenGrotesk text-[1rem] text-text-primary">{item.name}</h2>
          <p className="font-poppins text-[0.875rem] text-text-para">{item.company}</p>
        </div>

        <span className={`font-bold font-manrope text-[1rem] capitalize ${getColorThemeText(item.category)}`}>
          {item.category}
        </span>
      </div>

      <div className="mt-4 space-y-2 font-poppins text-[1rem] font-normal text-text-para">
        <p>
          <span className="font-medium">Trusted In:</span>{" "}
          {item.trustedIn}
        </p>

        <p>
          <span className="font-medium">Trust Points:</span>{" "}
          {item.trustPoints.join(" • ")}
        </p>

        <p>
          <span className="font-medium">Recommendations:</span>{" "}
          {item.recommendations}
        </p>
      </div>

      <div className="mt-4 flex justify-end gap-4 border-t pt-4">
        <button className="text-gray-500 hover:text-blue-600">
          <IoEye size={18} />
        </button>

        <button className="text-red-500 hover:text-red-700">
          <LuTrash2 size={18} />
        </button>
      </div>
    </div>
  );
}