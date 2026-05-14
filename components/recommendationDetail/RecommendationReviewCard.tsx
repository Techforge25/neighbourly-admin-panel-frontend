import { ReviewCardProps } from "@/types";
import { LuMapPin } from "react-icons/lu";

export default function RecommendationReviewCard({
  name,
  category,
  location,
  email,
  phone,
  address,
  date,
  review,
  tags,
}: ReviewCardProps) {
  return (
    <section className="bg-surface border border-border-primary rounded-xl p-5 mb-4">
      <div className="bg-surface-muted-primary p-[1rem] rounded-lg ">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          {/* Left */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-manrope font-semibold text-[1.125rem] text-text-primary">
                {name}
              </h3>

              {location && (
                <div className="flex items-center gap-1 border border-text-para py-[0.25rem] px-[0.6875rem] rounded-full">
                  <LuMapPin size={18} className="text-text-para" />
                  <span className="font-manrope font-bold text-[0.875rem] text-text-para ">
                    {location}
                  </span>
                </div>
              )}
            </div>

            <p className="mt-2 font-poppins text-normal text-[0.875rem] text-text-para ">
              {email} • {phone} • {address}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-2 sm:items-end">
            {date && (
              <p className="font-poppins text-[0.75rem] text-text-para">
                {date}
              </p>
            )}
          </div>
        </div>

        {/* Review Box */}
        <div className="mt-5 rounded-[14px] bg-surface-muted-secondary shadow p-[0.75rem] font-poppins font-normal text-text-dark-primary  text-[1rem]">
          {review}
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-text-para text-surface py-[0.5rem] px-[1rem] font-manrope font-medium text-[0.875rem]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
