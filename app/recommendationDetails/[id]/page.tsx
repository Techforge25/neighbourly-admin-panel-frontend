import { AdminShell } from "@/components/admin/AdminShell";
import BackPage from "@/components/recommendationDetail/BackPage";
import RecommendationReviewCard from "@/components/recommendationDetail/RecommendationReviewCard";
import { recommendationRows, reviews } from "@/constants/constants";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const recommenDationByID = recommendationRows.find((item) => item.id === id);
  console.log(recommenDationByID, "<<<<< ID");
  return (
    <>
      <BackPage 
      tradie={recommenDationByID?.tradie || ""}
      trade={recommenDationByID?.trade || ""}
      business={recommenDationByID?.business || ""}

       />
      {reviews.map((item, index) => (
        <RecommendationReviewCard key={index} {...item} />
      ))}
    </>
  );
};

export default page;
